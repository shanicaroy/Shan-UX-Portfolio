# Decision log

Contract §12: anything cut or chosen is written up as a decision with a reason, not silently dropped.
Newest at the bottom.

## 2026-09-06 · Slice one

**Agent logic lives in plain TypeScript, separate from any web page.**
`src/steps/` holds the six steps as functions with typed inputs and outputs. No web framework yet.
Reason: the contract's open decision (§13) is "thin custom page vs. no-code wrapper". Keeping the
pipeline framework-free means either answer can wrap it later without rewriting the steps, and each
step can be run and tested from the terminal on its own.

**Fetch uses a real headless browser (Playwright + Chromium), not a plain HTTP request.**
Reason: Notion, Framer and Behance render content with JavaScript; a plain request returns an empty
shell. The contract also requires screenshots for vision in step 4, and a browser is the only way to
get those. Cost of this choice: wherever the tool is hosted must be able to run Chromium. That
hosting decision is deferred until the pipeline works end to end.

**Fetch reports facts, never judgements.**
It returns visible text, title, status, word count and image count, or a transport-level failure
reason (`invalid_url`, `unreachable`, `timeout`, `http_error`, `not_html`). Deciding that a page is
"empty", "images only", "not a portfolio", or wording the user-facing error messages (§7) belongs to
later steps and to Shanica.

**Duplicate lines are collapsed at fetch time.**
Reason: contract §8, worked example 1, lesson (3). Framer serves paragraphs once per breakpoint.

**PDF links are reported as `not_html`, not read.**
Reason: whether v1 supports PDF input is an open decision (§13). Fetch surfaces the fact; nothing
else is assumed.

**Built inside the portfolio repo for now, as `case-check/`.**
Reason: this session only has access to `shanicaroy/shan-ux-portfolio`. The folder is
self-contained (its own `package.json`) so it can be moved to its own repository under
uxpective.com unchanged.
