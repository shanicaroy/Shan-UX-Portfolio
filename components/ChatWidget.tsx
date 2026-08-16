"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";

type Role = "user" | "assistant";
type Message = { role: Role; content: string };

const STARTER_PROMPTS = [
  "What kind of projects has Shan worked on?",
  "What's Shan's design process?",
  "Is Shan available for freelance work?",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape" && open) setOpen(false);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open]);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || isStreaming) return;

    setError(null);
    const nextMessages: Message[] = [...messages, { role: "user", content: trimmed }];
    setMessages(nextMessages);
    setInput("");
    setIsStreaming(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      if (!res.ok || !res.body) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Something went wrong. Please try again.");
      }

      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const copy = [...prev];
          const last = copy[copy.length - 1];
          copy[copy.length - 1] = { ...last, content: last.content + chunk };
          return copy;
        });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsStreaming(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="chat-panel"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 border border-ink bg-ink px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-paper shadow-lg transition-colors hover:border-signal hover:bg-signal sm:bottom-8 sm:right-8"
      >
        <span aria-hidden>{open ? "✕" : "✦"}</span>
        {open ? "Close" : "Ask Shan"}
      </button>

      {open && (
        <div
          id="chat-panel"
          ref={panelRef}
          role="dialog"
          aria-label={`Chat about ${site.name}'s work`}
          className="fixed bottom-24 right-6 z-50 flex h-[70vh] max-h-[560px] w-[calc(100%-3rem)] max-w-sm flex-col border border-ink bg-paper shadow-2xl sm:bottom-28 sm:right-8"
        >
          <div className="flex items-center justify-between border-b border-ink/10 bg-ink px-4 py-3 text-paper">
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-paper/70">
              Chat — FIG. 06
            </span>
            <span className="font-display text-sm">Ask about {site.name}&rsquo;s work</span>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-5 overflow-y-auto px-4 py-4">
            {messages.length === 0 && (
              <div>
                <p className="text-sm text-ink-soft">
                  Ask about {site.name}&rsquo;s background, process, or case studies.
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  {STARTER_PROMPTS.map((prompt) => (
                    <button
                      key={prompt}
                      onClick={() => sendMessage(prompt)}
                      className="border border-ink/15 px-3 py-2 text-left text-xs text-ink-soft transition-colors hover:border-signal hover:text-signal"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((message, i) => (
              <div key={i}>
                <span className="font-mono text-[10px] uppercase tracking-wide text-ink-soft">
                  {message.role === "user" ? "You" : `${site.name}’s assistant`}
                </span>
                <p className="mt-1 whitespace-pre-wrap text-sm text-ink">
                  {message.content}
                  {isStreaming && i === messages.length - 1 && message.role === "assistant" && (
                    <span className="ml-0.5 inline-block h-3.5 w-1.5 animate-pulse bg-signal align-middle" />
                  )}
                </p>
              </div>
            ))}

            {error && (
              <p className="border border-signal/30 bg-signal/5 px-3 py-2 text-xs text-signal">
                {error}
              </p>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(input);
            }}
            className="flex items-center gap-2 border-t border-ink/10 p-3"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a question…"
              disabled={isStreaming}
              className="flex-1 border border-ink/15 bg-paper px-3 py-2 text-sm text-ink placeholder:text-ink-soft/60 focus:border-signal disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={isStreaming || !input.trim()}
              className="border border-ink px-4 py-2 font-mono text-xs uppercase tracking-wide text-ink transition-colors hover:border-signal hover:text-signal disabled:opacity-40 disabled:hover:border-ink disabled:hover:text-ink"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
