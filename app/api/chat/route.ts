import { NextRequest } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { getAnthropicClient, buildSystemPrompt } from "@/lib/anthropic";

export const runtime = "nodejs";

const MAX_MESSAGES = 20;
const MAX_MESSAGE_CHARS = 2000;
const MAX_TOKENS = 1024;

// Basic in-memory rate limit, keyed by IP. Resets on cold start / redeploy
// and doesn't share state across serverless instances — it's a blunt
// deterrent against casual abuse on a low-traffic portfolio site, not a
// real rate limiter. Swap for a durable store (e.g. Upstash Redis) if
// traffic grows enough to need one.
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX = 30;
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  const limited = timestamps.length >= RATE_LIMIT_MAX;
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return limited;
}

type ChatMessage = { role: "user" | "assistant"; content: string };

function isValidHistory(value: unknown): value is ChatMessage[] {
  if (!Array.isArray(value) || value.length === 0 || value.length > MAX_MESSAGES) return false;
  return value.every((m): m is ChatMessage => {
    if (!m || typeof m !== "object") return false;
    const candidate = m as Record<string, unknown>;
    return (
      (candidate.role === "user" || candidate.role === "assistant") &&
      typeof candidate.content === "string" &&
      candidate.content.length > 0 &&
      candidate.content.length <= MAX_MESSAGE_CHARS
    );
  });
}

export async function POST(req: NextRequest) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return Response.json(
      { error: "Chat isn't configured yet — the site owner needs to set ANTHROPIC_API_KEY." },
      { status: 503 }
    );
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return Response.json({ error: "Too many messages — try again in a bit." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const messages = (body as { messages?: unknown } | null)?.messages;
  if (!isValidHistory(messages) || messages[messages.length - 1].role !== "user") {
    return Response.json({ error: "Invalid message history." }, { status: 400 });
  }

  const client = getAnthropicClient();
  const encoder = new TextEncoder();

  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        const anthropicStream = client.messages.stream({
          model: "claude-opus-5",
          max_tokens: MAX_TOKENS,
          system: buildSystemPrompt(),
          output_config: { effort: "low" },
          messages,
        });

        anthropicStream.on("text", (delta) => {
          controller.enqueue(encoder.encode(delta));
        });

        await anthropicStream.finalMessage();
      } catch (err) {
        console.error("Chat route error:", err);
        const message =
          err instanceof Anthropic.RateLimitError
            ? "The assistant is getting a lot of questions right now — try again in a moment."
            : "Something went wrong reaching the assistant. Please try again shortly.";
        controller.enqueue(encoder.encode(`\n\n[${message}]`));
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
