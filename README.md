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

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Deploy to Vercel (recommended)

1. Push this repository to GitHub (already done if you're reading this from the repo).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — no config needed. Click **Deploy**.
4. Once live, add your custom domain under the project's **Settings → Domains**.

Every push to the connected branch will auto-deploy.

## Project structure

```
app/                  Routes (App Router)
  page.tsx            Home
  work/page.tsx        Work index
  work/[slug]/page.tsx  Case study detail
  about/page.tsx        About
components/           Shared UI (Nav, Footer, ProjectCard, InspectFrame, ...)
content/               Editable copy (site.ts, projects.ts)
public/fonts/          Self-hosted Space Grotesk, Inter, IBM Plex Mono
```

## Stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS
- Framer Motion (subtle hover/scroll interactions)
- Fonts are self-hosted (`public/fonts`) rather than loaded from Google's CDN at
  runtime, for reliability and performance.
