# Shan — Product & UX Designer Portfolio

A portfolio site built with Next.js (App Router), TypeScript, and Tailwind CSS.
The visual language borrows from design-tool "inspect mode" — a blueprint grid,
mono-font annotations, and dimension-line hover states — since the person the
site is for spends their working life inside exactly that kind of interface.

Every piece of text is placeholder content. **Nothing here is real** — replace
it before sharing the link.

## Replace the placeholder content

All editable copy lives in two files:

- `content/site.ts` — your name, role, bio, email, social links, resume path, skills, experience
- `content/projects.ts` — your case studies (title, role, metrics, write-up sections)

Search each file for `PLACEHOLDER` comments to find what needs a real value.

Case study cover images are abstract SVG patterns generated in
`components/CaseStudyCover.tsx`. Swap them for real screenshots by rendering an
`<img>` (or `next/image`) in `components/ProjectCard.tsx` and
`app/work/[slug]/page.tsx` once you have real artwork.

Drop your resume PDF at `public/resume.pdf` (the About page links to it via
`site.resumeHref`).

## "Ask Shan" chat widget

There's a chat widget (bottom-right, on every page) that answers visitor
questions about your work, powered by the Claude API. It's grounded in the
same `content/site.ts` / `content/projects.ts` files as the rest of the site —
no separate content to maintain, and it won't invent facts you haven't
entered there (see the system prompt in `lib/anthropic.ts`).

**Setup:**

1. Get an API key at [console.anthropic.com/settings/keys](https://console.anthropic.com/settings/keys).
2. Locally: copy `.env.example` to `.env.local` and paste the key into `ANTHROPIC_API_KEY`.
3. On Vercel: add `ANTHROPIC_API_KEY` under the project's **Settings → Environment Variables**.

Without a key, the widget shows a friendly "not configured yet" message
instead of erroring. The route (`app/api/chat/route.ts`) uses Claude Opus 5,
streams responses, and caps message length and per-IP request rate — see the
comments there before scaling up traffic (the rate limiter is in-memory and
resets on redeploy, fine for a personal site, not a production safeguard).

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Deploy to Vercel (recommended)

1. Push this repository to GitHub (already done if you're reading this from the repo).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — no config needed. Add `ANTHROPIC_API_KEY` under **Environment Variables** if you want the chat widget live. Click **Deploy**.
4. Once live, add your custom domain under the project's **Settings → Domains**.

Every push to the connected branch will auto-deploy.

## Project structure

```
app/                  Routes (App Router)
  page.tsx            Home
  work/page.tsx        Work index
  work/[slug]/page.tsx  Case study detail
  about/page.tsx        About
  api/chat/route.ts     "Ask Shan" chat endpoint (streaming)
components/           Shared UI (Nav, Footer, ProjectCard, InspectFrame, ChatWidget, ...)
content/               Editable copy (site.ts, projects.ts)
lib/anthropic.ts       Claude API client + system prompt builder for the chat widget
public/fonts/          Self-hosted Space Grotesk, Inter, IBM Plex Mono
```

## Stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS
- Framer Motion (subtle hover/scroll interactions)
- Claude API (`@anthropic-ai/sdk`) for the chat widget
- Fonts are self-hosted (`public/fonts`) rather than loaded from Google's CDN at
  runtime, for reliability and performance.
