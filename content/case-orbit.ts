// -------------------------------------------------------------------------
// ORBIT DESIGN SYSTEM CASE STUDY (v2 content)
// The author's own design-system document, re-themed to the portfolio brand
// via CSS-variable overrides (serif display, Inter body, Roboto Mono tokens,
// off-black inks, accent purple, white surfaces) and poured into the
// portfolio left-nav shell. Behaviour is in components/CaseToc.tsx.
// -------------------------------------------------------------------------

export const orbitCaseStyles = `.orbit{
  
  --uxp-blue-50:#EFF6FF; --uxp-blue-100:#DBEDFF; --uxp-blue-200:#B5DBFF; --uxp-blue-300:#82C6FF; --uxp-blue-400:#3FB2FF;
  --uxp-blue-500:#00A7FF; --uxp-blue-600:#0A7FEA; --uxp-blue-700:#0068C8; --uxp-blue-800:#0A54A6; --uxp-blue-900:#133F80;
  --uxp-purple-50:#FAF0FE; --uxp-purple-100:#F3DDFC; --uxp-purple-200:#E8BDF8; --uxp-purple-300:#DB98F2; --uxp-purple-400:#D06EEC;
  --uxp-purple-500:#C648E6; --uxp-purple-600:#A93CDB; --uxp-purple-700:#8A2FC4; --uxp-purple-800:#6E26A3; --uxp-purple-900:#541F82;
  --uxp-orange-50:#FFF5EB; --uxp-orange-100:#FFE7CC; --uxp-orange-200:#FFCF99; --uxp-orange-300:#FFB561; --uxp-orange-400:#FFA03A;
  --uxp-orange-500:#FF921E; --uxp-orange-600:#E86A00; --uxp-orange-700:#C9560A; --uxp-orange-800:#A3440E; --uxp-orange-900:#7E3511;

  
  --uxp-coral-500:#FF9884; --uxp-pink-500:#F882E0; --uxp-lpurple-500:#AA75FF;

  
  --uxp-ink-0:#FFFFFF; --uxp-ink-50:#F7F7F9; --uxp-ink-100:#EEEEF1; --uxp-ink-200:#D7D7DC; --uxp-ink-300:#C2C2C7;
  --uxp-ink-400:#8E8E93; --uxp-ink-500:#6E6E73; --uxp-ink-700:#48484D; --uxp-ink-900:#1F1F22;
  
  --uxp-ink-900-a40: rgb(29 29 31 / 0.4);

  
  --uxp-green-50:#EAF8EF; --uxp-green-500:#22B35E; --uxp-green-700:#15803D; --uxp-green-800:#13703A;
  --uxp-red-50:#FEF1F1;   --uxp-red-500:#F04438;   --uxp-red-700:#DC2626;   --uxp-red-800:#B91C1C;
  --uxp-yellow-50:#FFFAEB; --uxp-yellow-500:#F5B300; --uxp-yellow-700:#A36400; --uxp-yellow-800:#8F5800;

  
  --uxp-color-text-primary: var(--uxp-ink-900);
  --uxp-color-text-secondary: var(--uxp-ink-500);
  --uxp-color-text-inverse: var(--uxp-ink-0);
  --uxp-color-text-disabled:var(--uxp-ink-400);
  --uxp-color-text-placeholder:var(--uxp-ink-400);
  --uxp-color-text-link:var(--uxp-blue-600);
  --uxp-color-text-link-hover:var(--uxp-blue-700);
  --uxp-color-text-link-visited:var(--uxp-purple-700);
  --uxp-color-text-link-on-tint:var(--uxp-blue-700);

  
  --uxp-color-bg-surface: var(--uxp-ink-0);
  --uxp-color-bg-muted: var(--uxp-ink-50);
  --uxp-color-bg-subtle: var(--uxp-ink-100);
  --uxp-color-bg-inverse: var(--uxp-ink-700);
  --uxp-color-bg-disabled: var(--uxp-ink-50);
  --uxp-color-bg-overlay: var(--uxp-ink-900-a40);
  --uxp-color-bg-selected:var(--uxp-blue-600);
  --uxp-color-bg-selected-subtle: var(--uxp-blue-50);

  
  --uxp-color-border-subtle: var(--uxp-ink-100);
  --uxp-color-border-input:var(--uxp-ink-200);
  --uxp-color-border-input-hover: var(--uxp-ink-300);
  --uxp-color-border-control: var(--uxp-ink-300);
  --uxp-color-border-control-hover: var(--uxp-ink-400);
  --uxp-color-border-strong: var(--uxp-ink-900);

  
  --uxp-color-action-primary:var(--uxp-blue-600);
  --uxp-color-action-primary-hover:var(--uxp-blue-700);
  --uxp-color-action-secondary-bg: var(--uxp-blue-50);
  --uxp-color-action-secondary-bg-hover: var(--uxp-blue-100);
  --uxp-color-action-secondary-text:var(--uxp-blue-700);
  --uxp-color-action-emphasis:var(--uxp-purple-600);
  --uxp-color-action-warm:var(--uxp-orange-600);
  --uxp-color-action-on-primary: var(--uxp-ink-0);
  --uxp-color-action-destructive: var(--uxp-red-700);
  --uxp-color-action-destructive-hover: var(--uxp-red-800);

  
  --uxp-color-control-thumb:var(--uxp-ink-400);

  
  --uxp-color-status-success-fg: var(--uxp-green-700); --uxp-color-status-success-tint: var(--uxp-green-50); --uxp-color-status-success-on-tint:var(--uxp-green-700);
  --uxp-color-status-error-fg: var(--uxp-red-700);     --uxp-color-status-error-tint: var(--uxp-red-50);     --uxp-color-status-error-on-tint: var(--uxp-red-800);
  --uxp-color-status-warning-fg: var(--uxp-yellow-700); --uxp-color-status-warning-tint: var(--uxp-yellow-50); --uxp-color-status-warning-on-tint:var(--uxp-yellow-700);
  --uxp-color-status-info-fg:var(--uxp-blue-700);     --uxp-color-status-info-tint: var(--uxp-blue-50);     --uxp-color-status-info-on-tint:var(--uxp-blue-700);
  --uxp-color-status-neutral-tint: var(--uxp-ink-100); --uxp-color-status-neutral-on-tint: var(--uxp-ink-700);

  
  --uxp-gradient-brand: linear-gradient(90deg, var(--uxp-blue-500), var(--uxp-purple-500), var(--uxp-orange-500));
  --uxp-gradient-text: linear-gradient(90deg, var(--uxp-blue-600), var(--uxp-purple-500), var(--uxp-orange-600));
  --uxp-gradient-action: linear-gradient(90deg, var(--uxp-blue-600), var(--uxp-purple-600));

  
  --uxp-focus-ring-color:var(--uxp-blue-600);
  --uxp-focus-ring-color-inverse: var(--uxp-ink-0);
  --uxp-focus-ring-width: 2px;
  --uxp-focus-ring-offset: 2px;
  --uxp-focus-halo: 0 0 0 4px var(--uxp-blue-100);
  --uxp-target-md: 44px;
  --uxp-target-sm: 32px;

  
  --uxp-space-1:4px; --uxp-space-2:8px; --uxp-space-3:12px; --uxp-space-4:16px; --uxp-space-5:20px; --uxp-space-6:24px;
  --uxp-space-8:32px; --uxp-space-10:40px; --uxp-space-12:48px; --uxp-space-16:64px; --uxp-space-20:80px;
  --uxp-space-section-sm: var(--uxp-space-16); --uxp-space-section-md:96px; --uxp-space-section-lg:128px;

  
  --uxp-radius-none:0; --uxp-radius-xs:2px; --uxp-radius-sm:4px; --uxp-radius-full:999px;
  --uxp-border-1:1px; --uxp-border-2:2px; --uxp-border-3:3px;

  
  --uxp-elevation-0: none;
  --uxp-elevation-1: 0 1px 2px rgb(0 0 0 / .04), 0 2px 6px rgb(0 0 0 / .04);
  --uxp-elevation-2: 0 2px 4px rgb(0 0 0 / .06), 0 8px 16px rgb(0 0 0 / .06);
  --uxp-elevation-3: 0 4px 8px rgb(0 0 0 / .08), 0 12px 28px rgb(0 0 0 / .08);
  --uxp-elevation-4: 0 12px 24px rgb(0 0 0 / .10), 0 32px 64px rgb(0 0 0 / .12);

  
  --uxp-layer-base:0; --uxp-layer-sticky:100; --uxp-layer-dropdown:200; --uxp-layer-overlay:300;
  --uxp-layer-modal:400; --uxp-layer-toast:500; --uxp-layer-tooltip:600;

  
  --uxp-motion-duration-xs:100ms; --uxp-motion-duration-sm:160ms; --uxp-motion-duration-md:280ms; --uxp-motion-duration-lg:400ms;
  --uxp-motion-ease-standard: cubic-bezier(0.2, 0, 0, 1);
  --uxp-motion-ease-out-expo: cubic-bezier(0.22, 1, 0.36, 1);
  --uxp-motion-ease-in: cubic-bezier(0.4, 0, 1, 1);

  
  --uxp-font-display: "Satoshi", "Inter", system-ui, -apple-system, "Segoe UI", sans-serif;
  --uxp-font-body: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --uxp-font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;

  
  --uxp-mask-scroll-end: linear-gradient(90deg, #1a1a1d 85%, transparent);
  --uxp-icon-mask-chevron-down: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
}.orbit [dir="rtl"]{ --uxp-mask-scroll-end: linear-gradient(270deg, #1a1a1d 85%, transparent); }

@media (prefers-reduced-motion: reduce) {.orbit{
    --uxp-motion-duration-sm: 0ms; --uxp-motion-duration-md: 0ms; --uxp-motion-duration-lg: 0ms;
    
  }
}.orbit .uxp-text-display-xl{ font: 700 clamp(3.75rem, 9vw, 8.25rem)/0.98 var(--uxp-font-display); letter-spacing: -0.025em; }.orbit .uxp-text-display-lg{ font: 700 clamp(3rem, 6vw, 4.5rem)/1 var(--uxp-font-display); letter-spacing: -0.02em; }.orbit .uxp-text-heading-1{ font: 700 clamp(2.25rem, 4vw, 3rem)/1.1 var(--uxp-font-display); letter-spacing: -0.02em; }.orbit .uxp-text-heading-2{ font: 700 clamp(1.75rem, 3vw, 2.25rem)/1.15 var(--uxp-font-display); letter-spacing: -0.015em; }.orbit .uxp-text-heading-3{ font: 500 clamp(1.375rem, 2.2vw, 1.75rem)/1.2 var(--uxp-font-display); letter-spacing: -0.01em; }.orbit .uxp-text-heading-4{ font: 700 1.25rem/1.3 var(--uxp-font-body); letter-spacing: -0.01em; }.orbit .uxp-text-heading-5{ font: 600 1.125rem/1.35 var(--uxp-font-body); letter-spacing: -0.01em; }.orbit .uxp-text-heading-6{ font: 600 1rem/1.4 var(--uxp-font-body); }.orbit .uxp-text-body-lg{ font: 400 1.125rem/1.55 var(--uxp-font-body); }.orbit .uxp-text-body-md{ font: 400 1rem/1.6 var(--uxp-font-body); }.orbit .uxp-text-body-sm{ font: 400 0.875rem/1.55 var(--uxp-font-body); }.orbit .uxp-text-caption{ font: 500 0.75rem/1.5 var(--uxp-font-body); letter-spacing: 0.01em; }.orbit .uxp-text-overline{ font: 500 0.75rem/1.4 var(--uxp-font-mono); letter-spacing: 0.04em; }.orbit .uxp-text-ui-button-sm{ font: 600 0.8125rem/1rem var(--uxp-font-body); }.orbit .uxp-text-ui-button-md{ font: 600 0.9375rem/1.25rem var(--uxp-font-body); }.orbit .uxp-text-ui-button-lg{ font: 600 1.0625rem/1.5rem var(--uxp-font-body); }.orbit .uxp-text-ui-label{ font: 500 0.875rem/1.25rem var(--uxp-font-body); }.orbit .uxp-text-ui-input{ font: 400 1rem/1.5rem var(--uxp-font-body); }.orbit .uxp-text-mono-data{ font: 400 0.8125rem/1.25rem var(--uxp-font-mono); font-variant-numeric: tabular-nums; }.orbit .uxp-text-style-title-gradient{
  color: var(--uxp-ink-900);
  font-weight: 900;
}
@supports ((-webkit-background-clip: text) or (background-clip: text)) {.orbit .uxp-text-style-title-gradient{
    background: var(--uxp-gradient-text);
    -webkit-background-clip: text; background-clip: text;
    -webkit-text-fill-color: transparent; color: transparent;
  }
}
@media (forced-colors: active) {.orbit .uxp-text-style-title-gradient{ background: none; -webkit-text-fill-color: CanvasText; color: CanvasText; }
}.orbit .uxp-sr-only{
  position: absolute !important; width: 1px; height: 1px; padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0 0 0 0); clip-path: inset(50%); white-space: nowrap; border: 0;
}.orbit{
  color-scheme: light;
  --cs-bg: #FFFFFF;
  --cs-bg-2: #FAFAFC;
  --cs-panel: #F5F5F7;
  --cs-text: #1D1D1F;
  --cs-text-2: #6E6E73;
  --cs-rule: #E8E8ED;
  --cs-rule-strong: #C7C7CC;
  --cs-link: #006CD8;
  --cs-link-hover: #8E25AA;
  --cs-focus: #006CD8;
  --cs-code-bg: #F2F2F5;
  --cs-pass: #1E7D46;
  --cs-fail: #C62828;
}
@media (prefers-color-scheme: dark) {.orbit :root:not([data-theme="light"]){
    color-scheme: dark;
    --cs-bg: #141416; --cs-bg-2: #18181B; --cs-panel: #1C1C1F;
    --cs-text: #EDEDEA; --cs-text-2: #A6A6A1; --cs-rule: #2E2E32; --cs-rule-strong: #48484A;
    --cs-link: #5CC6FF; --cs-link-hover: #E6ACF3; --cs-focus: #5CC6FF; --cs-code-bg: #232327;
    --cs-pass: #6FD39A; --cs-fail: #FF8A8A;
  }
}.orbit :root[data-theme="dark"]{
  color-scheme: dark;
  --cs-bg: #141416; --cs-bg-2: #18181B; --cs-panel: #1C1C1F;
  --cs-text: #EDEDEA; --cs-text-2: #A6A6A1; --cs-rule: #2E2E32; --cs-rule-strong: #48484A;
  --cs-link: #5CC6FF; --cs-link-hover: #E6ACF3; --cs-focus: #5CC6FF; --cs-code-bg: #232327;
  --cs-pass: #6FD39A; --cs-fail: #FF8A8A;
}.orbit *, .orbit *::before, .orbit *::after{ box-sizing: border-box; }.orbit [hidden]{ display: none !important; }.orbit{ box-sizing: border-box; padding-top: env(safe-area-inset-top, 0px); padding-bottom: env(safe-area-inset-bottom, 0px); }.orbit{ scroll-padding-top: calc(72px + env(safe-area-inset-top, 0px)); -webkit-text-size-adjust: 100%; }
@media (prefers-reduced-motion: no-preference) {.orbit{ scroll-behavior: smooth; } }.orbit{ margin: 0; background: var(--cs-bg); color: var(--cs-text); font: 400 1rem/1.65 var(--uxp-font-body); text-rendering: optimizeLegibility; }.orbit img, .orbit svg{ max-width: 100%; }.orbit a{ color: var(--cs-link); text-decoration-thickness: 1px; text-underline-offset: 3px; }.orbit a:hover{ color: var(--cs-link-hover); text-decoration-thickness: 2px; }.orbit :focus-visible{ outline: 2px solid var(--cs-focus); outline-offset: 2px; }.orbit code, .orbit .cs-mono{ font-family: var(--uxp-font-mono); font-size: 0.875em; }.orbit code{ background: var(--cs-code-bg); padding: 0.1em 0.35em; word-break: break-word; }.orbit p{ margin: 0 0 1em; }.orbit h1, .orbit h2, .orbit h3, .orbit h4, .orbit h5{ margin: 0; color: var(--cs-text); }.orbit ul, .orbit ol{ padding-inline-start: 1.25em; margin: 0 0 1em; }.orbit li{ margin-bottom: 0.35em; }.orbit strong{ font-weight: 600; }.orbit .cs-skip{
  position: absolute; inset-inline-start: 16px; top: -100px; z-index: 1000;
  background: var(--uxp-color-bg-inverse); color: var(--uxp-color-text-inverse); padding: 12px 16px; font-weight: 600; text-decoration: none;
}.orbit .cs-skip:focus{ top: calc(12px + env(safe-area-inset-top, 0px)); color: var(--uxp-color-text-inverse); outline-color: var(--cs-focus); }.orbit .cs-topbar{
  position: fixed; top: 0; inset-inline: 0; z-index: 900;
  padding-top: env(safe-area-inset-top, 0px);
  background: var(--cs-bg); border-bottom: 1px solid var(--cs-rule);
}.orbit .cs-topbar__inner{
  max-width: 1440px; margin: 0 auto; height: 56px; padding: 0 clamp(16px, 4vw, 48px);
  display: flex; align-items: center; justify-content: space-between; gap: 16px;
}.orbit .cs-topbar a{ color: var(--cs-text); text-decoration: none; font-weight: 500; font-size: 0.9375rem; display: inline-flex; align-items: center; min-height: 44px; }.orbit .cs-topbar a:hover{ color: var(--cs-link-hover); }.orbit .cs-topbar__title{ font: 500 0.8125rem/1 var(--uxp-font-mono); color: var(--cs-text-2); }.orbit .cs-progress{ position: absolute; inset-inline-start: 0; bottom: -1px; height: 2px; width: 100%; background: var(--uxp-gradient-brand); transform-origin: left center; transform: scaleX(0); }.orbit [dir="rtl"] .cs-progress{ transform-origin: right center; }.orbit .cs-hero{ max-width: 1440px; margin: 0 auto; padding: calc(56px + clamp(56px, 10vw, 128px)) clamp(16px, 4vw, 48px) clamp(48px, 7vw, 96px); }.orbit .cs-hero__kicker{ font: 500 0.8125rem/1.4 var(--uxp-font-mono); color: var(--cs-text-2); margin: 0 0 24px; }.orbit .cs-hero h1{ margin: 0 0 clamp(24px, 4vw, 40px); max-width: 12ch; }.orbit .cs-hero__thesis{ font: 400 clamp(1.125rem, 1.8vw, 1.375rem)/1.55 var(--uxp-font-body); max-width: 46ch; margin: 0 0 clamp(40px, 6vw, 72px); }.orbit .cs-hero__band{ height: 6px; background: var(--uxp-gradient-brand); margin-bottom: 40px; max-width: 100%; }.orbit .cs-facts{ display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0; margin: 0 0 48px; border-top: 1px solid var(--cs-rule-strong); }.orbit .cs-facts div{ padding: 20px 24px 20px 0; border-bottom: 1px solid var(--cs-rule); }.orbit .cs-facts dt{ font: 500 0.8125rem/1.4 var(--uxp-font-mono); color: var(--cs-text-2); margin-bottom: 8px; }.orbit .cs-facts dd{ margin: 0; font-size: 0.9375rem; line-height: 1.55; }.orbit .cs-shell{ max-width: 1440px; margin: 0 auto; padding: 0 clamp(16px, 4vw, 48px) 96px; display: grid; grid-template-columns: minmax(0, 1fr); gap: 48px; }
@media (min-width: 1024px) {.orbit .cs-shell{ grid-template-columns: 232px minmax(0, 1fr); gap: 64px; } }.orbit .cs-toc{ display: none; }
@media (min-width: 1024px) {.orbit .cs-toc{ display: block; position: sticky; top: calc(80px + env(safe-area-inset-top, 0px)); align-self: start; max-height: calc(100vh - 100px); overflow-y: auto; padding-bottom: 24px; }
}.orbit .cs-toc__g{ font: 500 0.8125rem/1.4 var(--uxp-font-mono); color: var(--cs-text-2); margin: 24px 0 8px; }.orbit .cs-toc__g:first-child{ margin-top: 0; }.orbit .cs-toc ul{ list-style: none; padding: 0; margin: 0; }.orbit .cs-toc li{ margin: 0; }.orbit .cs-toc a{ display: block; padding: 6px 0 6px 12px; border-inline-start: 2px solid transparent; color: var(--cs-text-2); text-decoration: none; font-size: 0.875rem; line-height: 1.35; }.orbit .cs-toc a:hover{ color: var(--cs-text); }.orbit .cs-toc a[aria-current="true"]{ color: var(--cs-text); border-inline-start-color: var(--cs-text); font-weight: 600; }.orbit .cs-toc-mobile{ border: 1px solid var(--cs-rule); margin-bottom: 8px; }
@media (min-width: 1024px) {.orbit .cs-toc-mobile{ display: none; } }.orbit .cs-toc-mobile summary{ cursor: pointer; padding: 12px 16px; font-weight: 600; min-height: 44px; display: flex; align-items: center; }.orbit .cs-toc-mobile .cs-toc{ display: block; position: static; max-height: none; padding: 0 16px 16px; }.orbit .cs-main{ min-width: 0; }.orbit .cs-part{ padding-top: 24px; margin-top: 48px; border-top: 1px solid var(--cs-rule-strong); }.orbit .cs-part:first-child{ margin-top: 0; }.orbit .cs-part__label{ font: 500 0.8125rem/1.4 var(--uxp-font-mono); color: var(--cs-text-2); margin: 0 0 16px; }.orbit .cs-part > h2{ margin-bottom: 20px; max-width: 22ch; }.orbit .cs-lede{ font-size: 1.125rem; line-height: 1.6; max-width: 62ch; color: var(--cs-text); }.orbit .cs-sec{ margin-top: clamp(56px, 7vw, 88px); }.orbit .cs-sec > h3{ margin-bottom: 16px; max-width: 28ch; }.orbit .cs-sec h4{ font: 700 1.125rem/1.35 var(--uxp-font-body); margin: 36px 0 12px; }.orbit .cs-sec h5{ font: 600 1rem/1.4 var(--uxp-font-body); margin: 24px 0 8px; }.orbit .cs-prose{ max-width: 68ch; }.orbit .cs-note{ border-inline-start: 3px solid var(--cs-rule-strong); padding: 4px 0 4px 20px; margin: 24px 0; max-width: 68ch; }.orbit .cs-note p:last-child{ margin-bottom: 0; }.orbit .cs-meta{ font: 500 0.8125rem/1.5 var(--uxp-font-mono); color: var(--cs-text-2); }.orbit .cs-two{ display: grid; grid-template-columns: minmax(0, 1fr); gap: 24px 40px; }
@media (min-width: 768px) {.orbit .cs-two{ grid-template-columns: repeat(2, minmax(0, 1fr)); } }.orbit .cs-three{ display: grid; grid-template-columns: minmax(0, 1fr); gap: 24px; }
@media (min-width: 768px) {.orbit .cs-three{ grid-template-columns: repeat(3, minmax(0, 1fr)); } }.orbit .cs-block{ border-top: 1px solid var(--cs-rule); padding-top: 16px; }.orbit .cs-block h4, .orbit .cs-block h5{ margin-top: 0; }.orbit .cs-block > h3{ margin: 0 0 var(--uxp-space-2); }.orbit .cs-table-wrap{ position: relative; overflow-x: auto; margin: 20px 0 8px; border-top: 1px solid var(--cs-rule-strong); }.orbit .cs-table-wrap:focus-visible{ outline-offset: 4px; }.orbit .cs-table{ width: 100%; border-collapse: collapse; font-size: 0.9063rem; line-height: 1.5; min-width: 560px; }.orbit .cs-table caption{ text-align: start; font: 500 0.8125rem/1.4 var(--uxp-font-mono); color: var(--cs-text-2); padding: 12px 0; caption-side: top; }.orbit .cs-table th, .orbit .cs-table td{ text-align: start; vertical-align: top; padding: 12px 16px 12px 0; border-bottom: 1px solid var(--cs-rule); }.orbit .cs-table thead th{ font-weight: 600; font-size: 0.8125rem; color: var(--cs-text-2); }.orbit .cs-table tbody th{ font-weight: 600; }.orbit .cs-table td.num, .orbit .cs-table th.num{ text-align: end; font-family: var(--uxp-font-mono); font-variant-numeric: tabular-nums; white-space: nowrap; }.orbit .cs-table code{ white-space: nowrap; }.orbit .cs-pass{ color: var(--cs-pass); font-weight: 600; }.orbit .cs-fail{ color: var(--cs-fail); font-weight: 600; }.orbit .spec{
  background: var(--uxp-color-bg-surface); color: var(--uxp-color-text-primary);
  border: 1px solid var(--cs-rule); margin: 24px 0 12px; font-family: var(--uxp-font-body);
  color-scheme: light;
}.orbit .spec :is(h1, .orbit h2, .orbit h3, .orbit h4, .orbit h5, .orbit h6), .orbit .o-modal :is(h1, .orbit h2, .orbit h3, .orbit h4, .orbit h5, .orbit h6){ color: var(--uxp-color-text-primary); }.orbit .spec code, .orbit .o-modal code{ background: var(--uxp-color-bg-subtle); color: var(--uxp-color-text-primary); }.orbit .spec__body{ padding: clamp(20px, 4vw, 40px); }.orbit .spec__body--muted{ background: var(--uxp-color-bg-muted); }.orbit .spec__cap{ margin: 0; padding: 10px 16px; border-top: 1px solid var(--uxp-color-border-subtle); font: 500 0.75rem/1.5 var(--uxp-font-mono); color: var(--uxp-color-text-secondary); background: var(--uxp-color-bg-surface); }.orbit .spec :focus-visible{ outline: var(--uxp-focus-ring-width) solid var(--uxp-focus-ring-color); outline-offset: var(--uxp-focus-ring-offset); }.orbit .spec a{ color: var(--uxp-color-text-link); }.orbit .spec a:hover{ color: var(--uxp-color-text-link-hover); }.orbit .spec-row{ display: flex; flex-wrap: wrap; gap: 12px 16px; align-items: center; }.orbit .spec-row + .spec-row{ margin-top: 20px; }.orbit .spec-stack > * + *{ margin-top: 20px; }.orbit .spec-label{ display: block; font: 500 0.75rem/1.4 var(--uxp-font-mono); color: var(--uxp-color-text-secondary); margin-top: 8px; }.orbit .sw-ramp{ display: grid; grid-template-columns: repeat(10, minmax(0, 1fr)); gap: 0; margin: 12px 0 4px; }
@media (max-width: 640px) {.orbit .sw-ramp{ grid-template-columns: repeat(5, minmax(0, 1fr)); } }.orbit .sw{ display: flex; flex-direction: column; gap: 2px; font: 500 0.6875rem/1.35 var(--uxp-font-mono); color: var(--uxp-color-text-secondary); }.orbit .sw__fill{ height: 56px; margin-bottom: 6px; }.orbit .sw-ramp .sw:first-child .sw__fill{ border-radius: var(--uxp-radius-sm) 0 0 var(--uxp-radius-sm); }.orbit .sw-ramp .sw:last-child .sw__fill{ border-radius: 0 var(--uxp-radius-sm) var(--uxp-radius-sm) 0; }.orbit .sw--brand{ font-weight: 700; color: var(--uxp-color-text-primary); }.orbit .sw-grid{ display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 16px; }.orbit .sw-chip{ border: 1px solid var(--uxp-color-border-subtle); }.orbit .sw-chip__fill{ height: 72px; }.orbit .sw-chip__meta{ padding: 10px 12px; font-size: 0.8125rem; line-height: 1.45; }.orbit .sw-chip__meta code{ background: none; padding: 0; font-size: 0.75rem; color: var(--uxp-color-text-secondary); }.orbit .grad-bar{ height: 40px; margin: 8px 0; }.orbit .space-bar{ height: 12px; background: var(--uxp-color-action-primary); }.orbit .aa{ margin: 28px 0 0; }.orbit .aa h4{ display: flex; align-items: baseline; gap: 12px; flex-wrap: wrap; }.orbit .aa .cs-table{ min-width: 520px; }.orbit .aa .cs-table th[scope="row"]{ width: 30%; font-weight: 600; }.orbit .aa .cs-table th[scope="row"] span{ display: block; font: 500 0.75rem/1.4 var(--uxp-font-mono); color: var(--cs-text-2); margin-top: 2px; }.orbit .cmp{ margin-top: clamp(64px, 8vw, 104px); padding-top: 24px; border-top: 1px solid var(--cs-rule); }.orbit .cmp__group{ font: 500 0.8125rem/1.4 var(--uxp-font-mono); color: var(--cs-text-2); margin: 0 0 8px; }.orbit .cmp > h3{ margin-bottom: 8px; }.orbit .cmp__purpose{ font-size: 1.0625rem; max-width: 62ch; }.orbit .cmp dl.cmp__spec{ display: grid; grid-template-columns: minmax(0, 1fr); gap: 0; margin: 24px 0 0; border-top: 1px solid var(--cs-rule); }
@media (min-width: 768px) {.orbit .cmp dl.cmp__spec{ grid-template-columns: 160px minmax(0, 1fr); } }.orbit .cmp__spec dt{ font-weight: 600; padding: 12px 16px 0 0; }.orbit .cmp__spec dd{ margin: 0; padding: 4px 0 12px; border-bottom: 1px solid var(--cs-rule); max-width: 72ch; }
@media (min-width: 768px) {.orbit .cmp__spec dt{ padding: 12px 16px 12px 0; border-bottom: 1px solid var(--cs-rule); }.orbit .cmp__spec dd{ padding: 12px 0; } }.orbit .cmp__use{ margin-top: 28px; }.orbit .cmp__use h4{ margin-top: 0; }.orbit .cmp__use ul{ margin-bottom: 0; }.orbit .tok-list{ display: flex; flex-wrap: wrap; gap: 6px 8px; list-style: none; padding: 0; margin: 12px 0 0; }.orbit .tok-list li{ margin: 0; }.orbit .tok-list code{ white-space: nowrap; font-size: 0.75rem; }.orbit .cs-steps{ counter-reset: step; list-style: none; padding: 0; margin: 24px 0; display: grid; gap: 0; border-top: 1px solid var(--cs-rule-strong); }.orbit .cs-steps li{ counter-increment: step; display: grid; grid-template-columns: 48px minmax(0, 1fr); gap: 8px; padding: 16px 0; border-bottom: 1px solid var(--cs-rule); margin: 0; }.orbit .cs-steps li::before{ content: counter(step); font: 500 0.875rem/1.6 var(--uxp-font-mono); color: var(--cs-text-2); }.orbit .cs-steps strong{ display: block; }.orbit .cs-roadmap{ display: grid; grid-template-columns: minmax(0, 1fr); gap: 0; border-top: 1px solid var(--cs-rule-strong); margin-top: 24px; }
@media (min-width: 768px) {.orbit .cs-roadmap{ grid-template-columns: repeat(3, minmax(0, 1fr)); }.orbit .cs-roadmap > div + div{ border-inline-start: 1px solid var(--cs-rule); padding-inline-start: 24px; } }.orbit .cs-roadmap > div{ padding: 20px 24px 20px 0; border-bottom: 1px solid var(--cs-rule); }.orbit .cs-roadmap h4{ margin: 4px 0 8px; font: 700 1.125rem/1.35 var(--uxp-font-body); }.orbit .cs-colophon{ display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px; margin-top: 24px; }.orbit .cs-colophon dt{ font: 500 0.8125rem/1.4 var(--uxp-font-mono); color: var(--cs-text-2); margin-bottom: 6px; }.orbit .cs-colophon dd{ margin: 0; }.orbit .cs-footer{ max-width: 1440px; margin: 0 auto; padding: 32px clamp(16px, 4vw, 48px) 48px; border-top: 1px solid var(--cs-rule); display: flex; flex-wrap: wrap; gap: 16px; justify-content: space-between; color: var(--cs-text-2); font-size: 0.875rem; }.orbit .cs-footer a{ display: inline-flex; min-height: 44px; align-items: center; }.orbit .o-icon{ width: 16px; height: 16px; flex: none; fill: none; stroke: currentColor; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }.orbit .o-icon *{ vector-effect: non-scaling-stroke; }.orbit .o-icon--20{ width: 20px; height: 20px; }.orbit .o-icon--24{ width: 24px; height: 24px; }.orbit .o-icon--32{ width: 32px; height: 32px; }.orbit .o-icon--48{ width: 48px; height: 48px; }.orbit .o-icon--fill{ fill: currentColor; stroke: none; }.orbit [dir="rtl"] .o-icon--mirror{ transform: scaleX(-1); }.orbit .o-btn{
  position: relative; isolation: isolate; display: inline-flex; align-items: center; justify-content: center; gap: var(--uxp-space-2);
  min-height: var(--uxp-target-md); padding: var(--uxp-space-3) var(--uxp-space-6);
  border: var(--uxp-border-1) solid transparent; border-radius: var(--uxp-radius-sm);
  font: 600 0.9375rem/1.25rem var(--uxp-font-body); text-decoration: none; cursor: pointer; text-align: center;
  background: transparent; color: var(--uxp-color-action-primary);
  transition: background-color var(--uxp-motion-duration-sm) var(--uxp-motion-ease-standard), color var(--uxp-motion-duration-sm) var(--uxp-motion-ease-standard), border-color var(--uxp-motion-duration-sm) var(--uxp-motion-ease-standard);
}.orbit .o-btn--sm{ min-height: var(--uxp-target-sm); padding: var(--uxp-space-2) var(--uxp-space-4); font: 600 0.8125rem/1rem var(--uxp-font-body); }.orbit .o-btn--lg{ min-height: 52px; padding: var(--uxp-space-3) var(--uxp-space-8); font: 600 1.0625rem/1.5rem var(--uxp-font-body); }.orbit .o-btn--primary{ background: var(--uxp-color-action-primary); color: var(--uxp-color-action-on-primary); }.orbit .o-btn--primary:hover, .orbit .o-btn--primary:active{ background: var(--uxp-color-action-primary-hover); }.orbit .o-btn--secondary{ background: var(--uxp-color-action-secondary-bg); color: var(--uxp-color-action-secondary-text); }.orbit .o-btn--secondary:hover{ background: var(--uxp-color-action-secondary-bg-hover); }.orbit .o-btn--tertiary{ color: var(--uxp-color-action-primary); }.orbit .o-btn--tertiary:hover{ background: var(--uxp-color-bg-muted); color: var(--uxp-color-action-primary-hover); }.orbit .o-btn--destructive{ background: var(--uxp-color-action-destructive); color: var(--uxp-color-action-on-primary); }.orbit .o-btn--destructive:hover{ background: var(--uxp-color-action-destructive-hover); }.orbit .o-btn[aria-disabled="true"]{ background: var(--uxp-color-bg-disabled); color: var(--uxp-color-text-disabled); border-color: transparent; cursor: not-allowed; }.orbit .o-btn--icon{ padding: 0; width: var(--uxp-target-md); }.orbit .o-btn--icon.o-btn--sm{ width: var(--uxp-target-sm); }.orbit .o-btn__spinner{ width: 16px; height: 16px; border: var(--uxp-border-2) solid currentColor; border-inline-end-color: transparent; border-radius: 50%; animation: o-spin 800ms linear infinite; }
@keyframes o-spin { to { transform: rotate(360deg); } }
@media (prefers-reduced-motion: reduce) {.orbit .o-btn__spinner{ animation-duration: 2400ms; } }
@media (forced-colors: active) {.orbit .o-btn{ border-color: ButtonText; } }.orbit .o-btnbar{ display: flex; flex-wrap: wrap; gap: var(--uxp-space-3); align-items: center; padding: var(--uxp-space-4); background: var(--uxp-color-bg-muted); border-top: var(--uxp-border-1) solid var(--uxp-color-border-subtle); }.orbit .o-btnbar__end{ margin-inline-start: auto; display: flex; gap: var(--uxp-space-3); flex-wrap: wrap; }
@media (max-width: 479px) {.orbit .o-btnbar, .orbit .o-btnbar__end{ flex-direction: column; align-items: stretch; }.orbit .o-btnbar__end{ margin-inline-start: 0; } }.orbit .o-link{ color: var(--uxp-color-text-link); text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 3px; }.orbit .o-link:hover{ color: var(--uxp-color-text-link-hover); text-decoration-thickness: 2px; }.orbit .o-link:visited{ color: var(--uxp-color-text-link-visited); }.orbit .o-link--standalone{ display: inline-flex; align-items: center; gap: var(--uxp-space-2); text-decoration: none; font-weight: 600; min-height: var(--uxp-target-md); }.orbit .o-link--standalone:hover{ text-decoration: underline; }.orbit .o-tabs__list{ position: relative; display: flex; gap: var(--uxp-space-1); border-bottom: var(--uxp-border-1) solid var(--uxp-color-border-subtle); overflow-x: auto; scrollbar-width: thin; -webkit-mask-image: var(--uxp-mask-scroll-end); mask-image: var(--uxp-mask-scroll-end); }
@media (min-width: 768px) {.orbit .o-tabs__list{ -webkit-mask-image: none; mask-image: none; } }.orbit .o-tabs__tab{ flex: none; position: relative; min-height: var(--uxp-target-md); padding: var(--uxp-space-3) var(--uxp-space-4); border: 0; background: none; cursor: pointer; font: 600 0.9375rem/1.25rem var(--uxp-font-body); color: var(--uxp-color-text-secondary); }.orbit .o-tabs__tab:hover{ color: var(--uxp-color-text-primary); }.orbit .o-tabs__tab[aria-selected="true"]{ color: var(--uxp-color-text-primary); font-weight: 700; }.orbit .o-tabs__tab[aria-selected="true"]::after{ content: ""; position: absolute; inset-inline: var(--uxp-space-4); bottom: calc(var(--uxp-border-1) * -1); height: var(--uxp-border-3); background: var(--uxp-gradient-action); }.orbit .o-tabs__tab:focus-visible{ outline-offset: calc(var(--uxp-focus-ring-width) * -1); }
@media (forced-colors: active) {.orbit .o-tabs__tab[aria-selected="true"]::after{ background: Highlight; } }.orbit .o-tabs__panel{ padding: var(--uxp-space-6) 0 0; max-width: 60ch; }.orbit .o-tabs__panel[hidden]{ display: none; }.orbit .o-sidenav{ max-width: 280px; }.orbit .o-sidenav__title{ font: 600 0.875rem/1.25rem var(--uxp-font-body); color: var(--uxp-color-text-secondary); margin: 0 0 var(--uxp-space-2); }.orbit .o-sidenav ul{ list-style: none; padding: 0; margin: 0; }.orbit .o-sidenav li{ margin: 0; }.orbit .o-sidenav a{ display: flex; align-items: center; min-height: var(--uxp-target-md); padding: var(--uxp-space-2) var(--uxp-space-3); border-radius: var(--uxp-radius-sm); color: var(--uxp-color-text-primary); text-decoration: none; font: 500 0.9375rem/1.25rem var(--uxp-font-body); }.orbit .o-sidenav a:hover{ background: var(--uxp-color-bg-muted); color: var(--uxp-color-text-primary); }.orbit .o-sidenav a[aria-current="page"]{ background: var(--uxp-color-bg-selected-subtle); color: var(--uxp-color-action-secondary-text); font-weight: 600; box-shadow: inset var(--uxp-border-3) 0 0 var(--uxp-color-action-primary); }.orbit [dir="rtl"] .o-sidenav a[aria-current="page"]{ box-shadow: inset calc(var(--uxp-border-3) * -1) 0 0 var(--uxp-color-action-primary); }
@media (forced-colors: active) {.orbit .o-sidenav a[aria-current="page"]{ border: 2px solid Highlight; } }.orbit .o-pager ol{ display: flex; flex-wrap: wrap; align-items: center; gap: var(--uxp-space-1); list-style: none; padding: 0; margin: 0; }.orbit .o-pager li{ margin: 0; }.orbit .o-pager a, .orbit .o-pager__gap{ display: inline-flex; align-items: center; justify-content: center; min-width: var(--uxp-target-md); min-height: var(--uxp-target-md); padding: 0 var(--uxp-space-2); border-radius: var(--uxp-radius-sm); font: 600 0.9375rem/1.25rem var(--uxp-font-body); text-decoration: none; color: var(--uxp-color-text-link); }.orbit .o-pager a:hover{ background: var(--uxp-color-bg-muted); color: var(--uxp-color-action-primary-hover); }.orbit .o-pager a[aria-current="page"]{ background: var(--uxp-color-bg-selected); color: var(--uxp-color-text-inverse); }.orbit .o-pager__gap{ color: var(--uxp-color-text-secondary); }.orbit .o-pager__status{ margin: var(--uxp-space-2) 0 0; font: 400 0.875rem/1.55 var(--uxp-font-body); color: var(--uxp-color-text-secondary); }.orbit .o-loadmore ul{ list-style: none; padding: 0; margin: 0 0 var(--uxp-space-4); display: grid; gap: var(--uxp-space-2); }.orbit .o-loadmore li{ margin: 0; padding: var(--uxp-space-3) var(--uxp-space-4); border: var(--uxp-border-1) solid var(--uxp-color-border-subtle); border-radius: var(--uxp-radius-sm); font-size: 0.9375rem; }
@media (max-width: 479px) {.orbit .o-pager__full{ display: none; } }
@media (min-width: 480px) {.orbit .o-pager__compact{ display: none; } }.orbit .o-lang{ position: relative; display: inline-block; }.orbit .o-lang__list{ position: absolute; inset-inline-start: 0; top: calc(100% + var(--uxp-space-1)); z-index: var(--uxp-layer-dropdown); min-width: 240px; list-style: none; margin: 0; padding: var(--uxp-space-1); background: var(--uxp-color-bg-surface); border: var(--uxp-border-1) solid var(--uxp-color-border-subtle); border-radius: var(--uxp-radius-sm); box-shadow: var(--uxp-elevation-3); }.orbit .o-lang__list[hidden]{ display: none; }.orbit .o-lang__list li{ margin: 0; }.orbit .o-lang__list a{ display: flex; gap: var(--uxp-space-3); align-items: center; min-height: var(--uxp-target-md); padding: var(--uxp-space-2) var(--uxp-space-3); border-radius: var(--uxp-radius-xs); text-decoration: none; color: var(--uxp-color-text-primary); }.orbit .o-lang__list a:hover{ background: var(--uxp-color-bg-muted); color: var(--uxp-color-text-primary); }.orbit .o-lang__list a[aria-current="true"]{ font-weight: 600; }.orbit .o-lang__list a .o-lang__check{ margin-inline-start: auto; color: var(--uxp-color-action-primary); }.orbit .o-lang__code{ font: 500 0.75rem/1 var(--uxp-font-mono); color: var(--uxp-color-text-secondary); min-width: 3.2em; }.orbit .o-lang__trigger .o-icon{ transition: transform var(--uxp-motion-duration-sm) var(--uxp-motion-ease-standard); }.orbit .o-lang__trigger[aria-expanded="true"] .o-icon{ transform: rotate(180deg); }.orbit .o-field{ display: grid; gap: var(--uxp-space-2); max-width: 420px; }.orbit .o-field + .o-field{ margin-top: var(--uxp-space-6); }.orbit .o-field__label{ font: 500 0.875rem/1.25rem var(--uxp-font-body); color: var(--uxp-color-text-primary); }.orbit .o-field__req{ font-weight: 400; color: var(--uxp-color-text-secondary); margin-inline-start: var(--uxp-space-1); }.orbit .o-field__help, .orbit .o-field__count{ font: 400 0.875rem/1.55 var(--uxp-font-body); color: var(--uxp-color-text-secondary); margin: 0; }.orbit .o-field__error{ display: flex; gap: var(--uxp-space-2); align-items: flex-start; font: 500 0.875rem/1.55 var(--uxp-font-body); color: var(--uxp-color-status-error-fg); margin: 0; }.orbit .o-field__error[hidden]{ display: none; }.orbit .o-field__error .o-icon{ margin-top: var(--uxp-space-1); }.orbit .o-field__count{ text-align: end; }.orbit .o-input, .orbit .o-select{
  width: 100%; min-height: var(--uxp-target-md); padding: var(--uxp-space-2) var(--uxp-space-4);
  font: 400 1rem/1.5rem var(--uxp-font-body); color: var(--uxp-color-text-primary);
  background: var(--uxp-color-bg-surface); border: var(--uxp-border-1) solid var(--uxp-color-border-input); border-radius: var(--uxp-radius-sm);
  transition: border-color var(--uxp-motion-duration-sm) var(--uxp-motion-ease-standard), box-shadow var(--uxp-motion-duration-sm) var(--uxp-motion-ease-standard);
}.orbit .o-input::placeholder{ color: var(--uxp-color-text-placeholder); opacity: 1; }.orbit .o-input:hover, .orbit .o-select:hover{ border-color: var(--uxp-color-border-input-hover); }.orbit .o-input:focus-visible, .orbit .o-select:focus-visible{ outline: var(--uxp-focus-ring-width) solid transparent; outline-offset: 0; border-color: var(--uxp-color-action-primary); box-shadow: 0 0 0 var(--uxp-border-1) var(--uxp-color-action-primary), var(--uxp-focus-halo); }.orbit .o-affix:focus-within .o-affix__pre{ border-color: var(--uxp-color-action-primary); }.orbit .o-input[aria-invalid="true"], .orbit .o-select[aria-invalid="true"]{ border-color: var(--uxp-color-status-error-fg); border-width: var(--uxp-border-2); padding: calc(var(--uxp-space-2) - var(--uxp-border-1)) calc(var(--uxp-space-4) - var(--uxp-border-1)); }.orbit .o-input:disabled, .orbit .o-select:disabled{ background: var(--uxp-color-bg-disabled); color: var(--uxp-color-text-disabled); border-color: var(--uxp-color-border-subtle); cursor: not-allowed; }.orbit .o-input[readonly]{ background: var(--uxp-color-bg-muted); border-style: dashed; }.orbit textarea.o-input{ min-height: 112px; resize: vertical; }.orbit .o-input--sm, .orbit .o-select--sm{ min-height: var(--uxp-target-sm); padding: var(--uxp-space-1) var(--uxp-space-3); border-radius: var(--uxp-radius-sm); font-size: 0.875rem; line-height: 1.25rem; }.orbit .o-input--lg{ min-height: 52px; padding: var(--uxp-space-3) var(--uxp-space-4); }.orbit .o-affix{ display: flex; align-items: stretch; }.orbit .o-affix__pre{ display: inline-flex; align-items: center; padding: 0 var(--uxp-space-3); border: var(--uxp-border-1) solid var(--uxp-color-border-input); border-inline-end: 0; border-radius: var(--uxp-radius-sm) 0 0 var(--uxp-radius-sm); background: var(--uxp-color-bg-muted); color: var(--uxp-color-text-secondary); font: 400 0.9375rem/1 var(--uxp-font-mono); }.orbit .o-affix .o-input{ border-radius: 0 var(--uxp-radius-sm) var(--uxp-radius-sm) 0; }.orbit .o-select{ appearance: none; -webkit-appearance: none; padding-inline-end: var(--uxp-space-10);
 }.orbit .o-select-wrap{ position: relative; }.orbit .o-select-wrap::after{ content: ""; position: absolute; inset-inline-end: var(--uxp-space-3); top: 50%; width: 16px; height: 16px; transform: translateY(-50%); pointer-events: none;
  background: var(--uxp-color-text-primary); -webkit-mask: var(--uxp-icon-mask-chevron-down) center / contain no-repeat; mask: var(--uxp-icon-mask-chevron-down) center / contain no-repeat; }.orbit .o-select-wrap:has(.o-select:disabled)::after{ background: var(--uxp-color-text-disabled); }
@media (forced-colors: active) {.orbit .o-select{ appearance: auto; }.orbit .o-select-wrap::after{ display: none; }.orbit .o-input:focus-visible, .orbit .o-select:focus-visible{ outline-color: Highlight; } }.orbit .o-summary{ border: var(--uxp-border-2) solid var(--uxp-color-status-error-fg); border-radius: var(--uxp-radius-sm); padding: var(--uxp-space-4) var(--uxp-space-5); margin-bottom: var(--uxp-space-6); max-width: 420px; }.orbit .o-summary[hidden]{ display: none; }.orbit .o-summary h4{ font: 700 1rem/1.4 var(--uxp-font-body); margin: 0 0 var(--uxp-space-2); color: var(--uxp-color-text-primary); }.orbit .o-summary ul{ margin: 0; padding-inline-start: 1.1em; }.orbit .o-summary a{ color: var(--uxp-color-status-error-fg); font-weight: 500; }.orbit .o-form-success{ max-width: 420px; }.orbit .o-fieldset{ border: 0; padding: 0; margin: 0; min-width: 0; max-width: 420px; }.orbit .o-fieldset legend{ padding: 0; font: 600 1rem/1.4 var(--uxp-font-body); color: var(--uxp-color-text-primary); }.orbit .o-fieldset__rule{ font: 400 0.875rem/1.55 var(--uxp-font-body); color: var(--uxp-color-text-secondary); margin: var(--uxp-space-1) 0 var(--uxp-space-3); }.orbit .o-choice{ display: flex; align-items: center; gap: var(--uxp-space-3); min-height: var(--uxp-target-md); padding: 0 var(--uxp-space-2); margin-inline-start: calc(var(--uxp-space-2) * -1); border-radius: var(--uxp-radius-xs); cursor: pointer; font: 400 0.9375rem/1.4 var(--uxp-font-body); color: var(--uxp-color-text-primary); }.orbit .o-choice:hover{ background: var(--uxp-color-bg-muted); }.orbit .o-choice--indent{ padding-inline-start: var(--uxp-space-8); }.orbit .o-choice input{ appearance: none; -webkit-appearance: none; margin: 0; flex: none; width: 20px; height: 20px; border: var(--uxp-border-2) solid var(--uxp-color-border-control); background: var(--uxp-color-bg-surface); display: grid; place-content: center; cursor: pointer; }.orbit .o-choice input[type="checkbox"]{ border-radius: var(--uxp-radius-sm); }.orbit .o-choice input[type="radio"]{ border-radius: 50%; }.orbit .o-choice input:hover{ border-color: var(--uxp-color-border-control-hover); }.orbit .o-choice input:checked, .orbit .o-choice input:indeterminate{ background: var(--uxp-color-action-primary); border-color: var(--uxp-color-action-primary); }.orbit .o-choice input[type="checkbox"]:checked::after{ content: ""; width: 10px; height: 6px; border: var(--uxp-border-2) solid var(--uxp-color-action-on-primary); border-top: 0; border-inline-end: 0; transform: translateY(-1px) rotate(-45deg); }.orbit .o-choice input[type="checkbox"]:indeterminate::after{ content: ""; width: 10px; height: var(--uxp-border-2); background: var(--uxp-color-action-on-primary); }.orbit .o-choice input[type="radio"]:checked{ background: var(--uxp-color-bg-surface); }.orbit .o-choice input[type="radio"]:checked::after{ content: ""; width: 10px; height: 10px; border-radius: 50%; background: var(--uxp-color-action-primary); }.orbit .o-choice input:disabled{ background: var(--uxp-color-bg-disabled); border-color: var(--uxp-color-bg-disabled); cursor: not-allowed; }.orbit .o-choice:has(input:disabled){ color: var(--uxp-color-text-disabled); cursor: not-allowed; }.orbit .o-choice input[aria-invalid="true"]{ border-color: var(--uxp-color-status-error-fg); }
@media (forced-colors: active) {.orbit .o-choice input{ appearance: auto; -webkit-appearance: auto; }.orbit .o-choice input::after{ display: none; } }.orbit .o-choice__hint{ display: block; font-size: 0.8125rem; color: var(--uxp-color-text-secondary); }.orbit .o-seg{ border: 0; padding: 0; margin: 0; min-width: 0; }.orbit .o-seg legend{ font: 500 0.875rem/1.25rem var(--uxp-font-body); padding: 0; margin-bottom: var(--uxp-space-2); }.orbit .o-seg__track{ display: inline-flex; border: var(--uxp-border-1) solid var(--uxp-color-border-input); border-radius: var(--uxp-radius-sm); padding: var(--uxp-space-1); gap: var(--uxp-space-1); flex-wrap: wrap; }.orbit .o-seg__opt{ position: relative; }.orbit .o-seg__opt input{ position: absolute; inset: 0; opacity: 0; margin: 0; cursor: pointer; }.orbit .o-seg__opt span{ display: inline-flex; align-items: center; justify-content: center; min-height: calc(var(--uxp-target-md) - (var(--uxp-space-1) + var(--uxp-border-1)) * 2); padding: 0 var(--uxp-space-4); border-radius: var(--uxp-radius-xs); font: 600 0.875rem/1.25rem var(--uxp-font-body); color: var(--uxp-color-text-primary); }.orbit .o-seg__opt input:hover + span{ background: var(--uxp-color-bg-muted); }.orbit .o-seg__opt input:checked + span{ background: var(--uxp-color-bg-selected); color: var(--uxp-color-text-inverse); }.orbit .o-seg__opt input:focus-visible + span{ outline: var(--uxp-focus-ring-width) solid var(--uxp-focus-ring-color); outline-offset: var(--uxp-focus-ring-offset); }
@media (forced-colors: active) {.orbit .o-seg__opt input:checked + span{ border: 2px solid Highlight; } }.orbit .o-search{ max-width: 520px; position: relative; }.orbit .o-search__box{ position: relative; display: flex; align-items: center; }.orbit .o-search__box > .o-icon{ position: absolute; inset-inline-start: var(--uxp-space-3); color: var(--uxp-color-text-secondary); pointer-events: none; }.orbit .o-search__box .o-input{ padding-inline-start: var(--uxp-space-10); padding-inline-end: var(--uxp-space-16); }.orbit .o-search__kbd{ position: absolute; inset-inline-end: var(--uxp-space-3); font: 500 0.75rem/1 var(--uxp-font-mono); color: var(--uxp-color-text-secondary); border: var(--uxp-border-1) solid var(--uxp-color-border-subtle); padding: var(--uxp-space-1) var(--uxp-space-2); border-radius: var(--uxp-radius-xs); }.orbit .o-search__list{ position: absolute; overflow-x: hidden; inset-inline: 0; top: calc(100% + var(--uxp-space-1)); z-index: var(--uxp-layer-dropdown); list-style: none; margin: 0; padding: var(--uxp-space-1); background: var(--uxp-color-bg-surface); border: var(--uxp-border-1) solid var(--uxp-color-border-subtle); border-radius: var(--uxp-radius-sm); box-shadow: var(--uxp-elevation-3); max-height: 280px; overflow-y: auto; }.orbit .o-search__list[hidden]{ display: none; }.orbit .o-search__list li{ margin: 0; padding: var(--uxp-space-2) var(--uxp-space-3); min-height: var(--uxp-target-md); display: flex; align-items: center; border-radius: var(--uxp-radius-xs); cursor: pointer; font-size: 0.9375rem; }.orbit .o-search__list li[aria-selected="true"]{ background: var(--uxp-color-bg-selected); color: var(--uxp-color-text-inverse); }.orbit .o-search__list li mark{ background: none; color: inherit; font-weight: 700; }.orbit .o-chips{ display: flex; flex-wrap: wrap; gap: var(--uxp-space-2); margin-top: var(--uxp-space-3); list-style: none; padding: 0; }.orbit .o-chips li{ margin: 0; }.orbit .o-chip{ display: inline-flex; align-items: center; gap: var(--uxp-space-2); min-height: var(--uxp-target-sm); padding: 0 var(--uxp-space-2) 0 var(--uxp-space-3); border: var(--uxp-border-1) solid transparent; border-radius: var(--uxp-radius-sm); background: var(--uxp-color-bg-subtle); font: 500 0.8125rem/1 var(--uxp-font-body); color: var(--uxp-color-text-primary); cursor: pointer; }.orbit .o-chip:hover{ background: var(--uxp-color-status-neutral-tint); border-color: var(--uxp-color-border-input); }.orbit .o-search__status{ margin: var(--uxp-space-3) 0 0; font-size: 0.875rem; color: var(--uxp-color-text-secondary); }.orbit .o-banner{ display: grid; grid-template-columns: auto minmax(0, 1fr) auto; gap: var(--uxp-space-3); align-items: start; padding: var(--uxp-space-4); border-radius: var(--uxp-radius-sm); border: var(--uxp-border-1) solid transparent; color: var(--uxp-color-text-primary); max-width: 640px; }.orbit .o-banner + .o-banner{ margin-top: var(--uxp-space-3); }.orbit .o-banner__title{ font: 600 0.9375rem/1.4 var(--uxp-font-body); margin: 0 0 var(--uxp-space-1); }.orbit .o-banner__text{ font: 400 0.9375rem/1.55 var(--uxp-font-body); margin: 0; }.orbit .o-banner .o-icon{ align-self: start; }.orbit .o-banner--info{ background: var(--uxp-color-status-info-tint); }.orbit .o-banner--info .o-icon:first-child{ color: var(--uxp-color-status-info-on-tint); }.orbit .o-banner--success{ background: var(--uxp-color-status-success-tint); }.orbit .o-banner--success .o-icon:first-child{ color: var(--uxp-color-status-success-on-tint); }.orbit .o-banner--warning{ background: var(--uxp-color-status-warning-tint); }.orbit .o-banner--warning .o-icon:first-child{ color: var(--uxp-color-status-warning-on-tint); }.orbit .o-banner--error{ background: var(--uxp-color-status-error-tint); }.orbit .o-banner--error .o-icon:first-child{ color: var(--uxp-color-status-error-on-tint); }.orbit .o-banner .o-link, .orbit .o-table tbody tr[data-selected="true"] .o-link{ color: var(--uxp-color-text-link-on-tint); }.orbit .o-banner .o-link:hover, .orbit .o-table tbody tr[data-selected="true"] .o-link:hover{ color: var(--uxp-color-text-link-visited); }.orbit .o-banner .o-btn--icon{ margin: calc(var(--uxp-space-3) * -1) calc(var(--uxp-space-3) * -1) calc(var(--uxp-space-3) * -1) 0; color: var(--uxp-color-text-primary); }.orbit .o-toast-region{ position: fixed; inset-inline-end: var(--uxp-space-6); bottom: calc(var(--uxp-space-6) + env(safe-area-inset-bottom, 0px)); z-index: var(--uxp-layer-toast); display: grid; gap: var(--uxp-space-2); max-width: min(400px, calc(100vw - var(--uxp-space-8))); }
@media (max-width: 479px) {.orbit .o-toast-region{ inset-inline: var(--uxp-space-4); } }.orbit .o-toast{ display: flex; gap: var(--uxp-space-3); align-items: center; padding: var(--uxp-space-3) var(--uxp-space-3) var(--uxp-space-3) var(--uxp-space-4); background: var(--uxp-color-bg-surface); color: var(--uxp-color-text-primary); border: var(--uxp-border-1) solid var(--uxp-color-border-subtle); border-radius: var(--uxp-radius-sm); box-shadow: var(--uxp-elevation-3); font: 500 0.9375rem/1.4 var(--uxp-font-body); animation: o-toast-in var(--uxp-motion-duration-md) var(--uxp-motion-ease-out-expo); }.orbit .o-toast p{ margin: 0; flex: 1; }
@keyframes o-toast-in { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
@media (prefers-reduced-motion: reduce) {.orbit .o-toast{ animation-name: o-fade; animation-duration: var(--uxp-motion-duration-xs); } @keyframes o-fade { from { opacity: 0; } to { opacity: 1; } } }.orbit .o-badge{ display: inline-flex; align-items: center; gap: var(--uxp-space-1); padding: var(--uxp-space-1) var(--uxp-space-2); border-radius: var(--uxp-radius-sm); font: 600 0.75rem/1rem var(--uxp-font-body); white-space: nowrap; }.orbit .o-badge--neutral{ background: var(--uxp-color-status-neutral-tint); color: var(--uxp-color-status-neutral-on-tint); }.orbit .o-badge--info{ background: var(--uxp-color-status-info-tint); color: var(--uxp-color-status-info-on-tint); }.orbit .o-badge--success{ background: var(--uxp-color-status-success-tint); color: var(--uxp-color-status-success-on-tint); }.orbit .o-badge--warning{ background: var(--uxp-color-status-warning-tint); color: var(--uxp-color-status-warning-on-tint); }.orbit .o-badge--error{ background: var(--uxp-color-status-error-tint); color: var(--uxp-color-status-error-on-tint); }
@media (forced-colors: active) {.orbit .o-badge{ border: 1px solid CanvasText; } }.orbit .o-tip{ position: relative; display: inline-flex; }.orbit .o-tip__bubble{ position: absolute; bottom: calc(100% + var(--uxp-space-2)); inset-inline-start: 50%; transform: translateX(-50%); z-index: var(--uxp-layer-tooltip); padding: var(--uxp-space-2) var(--uxp-space-3); background: var(--uxp-color-bg-inverse); color: var(--uxp-color-text-inverse); border: var(--uxp-border-1) solid transparent; border-radius: var(--uxp-radius-sm); font: 500 0.8125rem/1.35 var(--uxp-font-body); white-space: nowrap; box-shadow: var(--uxp-elevation-3); }.orbit .o-tip__bubble::after{ content: ""; position: absolute; bottom: calc(var(--uxp-space-3) * -1); inset-inline: 0; height: var(--uxp-space-3); }.orbit .o-tip__bubble[hidden]{ display: none; }.orbit .o-cards{ display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: var(--uxp-space-6); }.orbit .o-card{ position: relative; display: flex; flex-direction: column; background: var(--uxp-color-bg-surface); border: var(--uxp-border-1) solid var(--uxp-color-border-subtle); border-radius: var(--uxp-radius-sm); padding: var(--uxp-space-6); }.orbit .o-card--feature{ padding: var(--uxp-space-8); }.orbit .o-card--media{ padding: 0; overflow: hidden; }.orbit .o-card--media .o-card__body{ padding: var(--uxp-space-6); }.orbit .o-card__media{ aspect-ratio: 16 / 9; background: var(--uxp-gradient-brand); }.orbit .o-card__meta{ font: 500 0.75rem/1.5 var(--uxp-font-body); color: var(--uxp-color-text-secondary); margin: var(--uxp-space-4) 0 0; }.orbit .o-card__title{ font: 700 1.25rem/1.3 var(--uxp-font-body); margin: 0 0 var(--uxp-space-2); color: var(--uxp-color-text-primary); }.orbit .o-card p{ font: 400 0.9375rem/1.55 var(--uxp-font-body); margin: 0; color: var(--uxp-color-text-secondary); }.orbit .o-card--clickable{ box-shadow: var(--uxp-elevation-1); transition: box-shadow var(--uxp-motion-duration-sm) var(--uxp-motion-ease-standard); }.orbit .o-card--clickable:hover{ box-shadow: var(--uxp-elevation-2); }.orbit .o-card__link{ color: var(--uxp-color-text-primary); text-decoration: none; }.orbit .o-card__link::after{ content: ""; position: absolute; inset: 0; border-radius: var(--uxp-radius-sm); }.orbit .o-card__link:hover{ color: var(--uxp-color-text-link); text-decoration: underline; }.orbit .o-card__link:focus-visible{ outline: none; }.orbit .o-card__link:focus-visible::after{ outline: var(--uxp-focus-ring-width) solid var(--uxp-focus-ring-color); outline-offset: var(--uxp-focus-ring-offset); }.orbit .o-card__stat{ font: 700 3.5rem/1 var(--uxp-font-display); letter-spacing: -0.02em; color: var(--uxp-color-text-primary); margin: 0 0 var(--uxp-space-2); }.orbit .o-card blockquote{ margin: 0; font: 500 1.25rem/1.4 var(--uxp-font-display); color: var(--uxp-color-text-primary); }.orbit .o-card figcaption{ margin-top: var(--uxp-space-4); font: 400 0.875rem/1.5 var(--uxp-font-body); color: var(--uxp-color-text-secondary); }.orbit .o-acc{ border-top: var(--uxp-border-1) solid var(--uxp-color-border-subtle); max-width: 680px; }.orbit .o-acc__item{ border-bottom: var(--uxp-border-1) solid var(--uxp-color-border-subtle); }.orbit .o-acc__h{ margin: 0; font: inherit; }.orbit .o-acc__btn{ width: 100%; display: flex; justify-content: space-between; align-items: center; gap: var(--uxp-space-4); min-height: var(--uxp-target-md); padding: var(--uxp-space-4) 0; border: 0; background: none; cursor: pointer; text-align: start; font: 600 1rem/1.4 var(--uxp-font-body); color: var(--uxp-color-text-primary); }.orbit .o-acc__btn:hover{ color: var(--uxp-color-text-link); }.orbit .o-acc__btn .o-icon{ transition: transform var(--uxp-motion-duration-md) var(--uxp-motion-ease-out-expo); }.orbit .o-acc__btn[aria-expanded="true"] .o-icon{ transform: rotate(180deg); }.orbit .o-acc__panel{ display: grid; grid-template-rows: 0fr; transition: grid-template-rows var(--uxp-motion-duration-md) var(--uxp-motion-ease-out-expo); }.orbit .o-acc__panel[data-open="true"]{ grid-template-rows: 1fr; }.orbit .o-acc__panel > div{ overflow: hidden; }.orbit .o-acc__panel p{ margin: 0; padding: 0 0 var(--uxp-space-4); font: 400 0.9375rem/1.6 var(--uxp-font-body); color: var(--uxp-color-text-secondary); max-width: 60ch; }.orbit .o-modal{ width: min(400px, calc(100vw - var(--uxp-space-8))); max-height: calc(100dvh - var(--uxp-space-8)); padding: 0; border: var(--uxp-border-1) solid transparent; border-radius: var(--uxp-radius-sm); box-shadow: var(--uxp-elevation-4); background: var(--uxp-color-bg-surface); color: var(--uxp-color-text-primary); }.orbit .o-modal--md{ width: min(560px, calc(100vw - var(--uxp-space-8))); }.orbit .o-modal--lg{ width: min(800px, calc(100vw - var(--uxp-space-8))); }.orbit .o-modal::backdrop{ background: var(--uxp-color-bg-overlay); }.orbit .o-modal__inner{ display: flex; flex-direction: column; max-height: inherit; }.orbit .o-modal__head{ display: flex; justify-content: space-between; gap: var(--uxp-space-4); align-items: start; padding: var(--uxp-space-6) var(--uxp-space-6) 0; }.orbit .o-modal__title{ font: 700 1.25rem/1.3 var(--uxp-font-body); margin: 0; }.orbit .o-modal__head .o-btn--icon{ margin: calc(var(--uxp-space-3) * -1) calc(var(--uxp-space-3) * -1) 0 0; color: var(--uxp-color-text-primary); }.orbit .o-modal__body{ padding: var(--uxp-space-3) var(--uxp-space-6) var(--uxp-space-6); overflow-y: auto; font: 400 0.9375rem/1.6 var(--uxp-font-body); max-width: 60ch; }.orbit .o-modal__body p{ margin: 0; }.orbit .o-modal__foot{ display: flex; flex-wrap: wrap; justify-content: flex-end; gap: var(--uxp-space-3); padding: var(--uxp-space-4) var(--uxp-space-6); background: var(--uxp-color-bg-muted); border-top: var(--uxp-border-1) solid var(--uxp-color-border-subtle); }
@media (max-width: 479px) {.orbit .o-modal--lg{ width: 100vw; max-width: 100vw; height: 100dvh; max-height: 100dvh; margin: 0; border-radius: 0; }.orbit .o-modal__foot{ flex-direction: column-reverse; align-items: stretch; }
}
@media (prefers-reduced-motion: no-preference) {.orbit .o-modal[open]{ animation: o-toast-in var(--uxp-motion-duration-md) var(--uxp-motion-ease-out-expo); } }.orbit .o-table-tools{ display: flex; flex-wrap: wrap; gap: var(--uxp-space-4); align-items: end; justify-content: space-between; margin-bottom: var(--uxp-space-4); }.orbit .o-table-scroll{ position: relative; overflow-x: auto; border: var(--uxp-border-1) solid var(--uxp-color-border-subtle); border-radius: var(--uxp-radius-sm); }.orbit .o-table{ width: 100%; border-collapse: collapse; min-width: 640px; font: 400 0.9375rem/1.4 var(--uxp-font-body); }.orbit .o-table caption{ text-align: start; padding: var(--uxp-space-3) var(--uxp-space-4); font: 600 0.9375rem/1.4 var(--uxp-font-body); color: var(--uxp-color-text-primary); }.orbit .o-table th, .orbit .o-table td{ text-align: start; padding: 0 var(--uxp-space-4); height: 52px; border-top: var(--uxp-border-1) solid var(--uxp-color-border-subtle); }.orbit .o-table[data-density="compact"] th, .orbit .o-table[data-density="compact"] td{ height: 40px; }.orbit .o-table[data-density="comfortable"] th, .orbit .o-table[data-density="comfortable"] td{ height: 64px; }.orbit .o-table thead th{ font: 600 0.8125rem/1.25rem var(--uxp-font-body); color: var(--uxp-color-text-secondary); background: var(--uxp-color-bg-muted); white-space: nowrap; }.orbit .o-table tbody th{ font-weight: 500; }.orbit .o-table tbody tr:hover{ background: var(--uxp-color-bg-muted); }.orbit .o-table tbody tr[data-selected="true"]{ background: var(--uxp-color-bg-selected-subtle); }.orbit .o-table .num{ text-align: end; font: 400 0.8125rem/1.25rem var(--uxp-font-mono); font-variant-numeric: tabular-nums; }.orbit .o-table .sel{ width: 52px; padding-inline-end: 0; }.orbit .o-table .sel .o-choice{ margin: 0; padding: 0 var(--uxp-space-2); justify-content: center; }.orbit .o-table code{ font: 400 0.8125rem/1.25rem var(--uxp-font-mono); background: none; padding: 0; white-space: nowrap; }.orbit .o-sort{ display: inline-flex; align-items: center; gap: var(--uxp-space-1); min-height: var(--uxp-target-sm); padding: 0 var(--uxp-space-1); margin-inline-start: calc(var(--uxp-space-1) * -1); border: 0; border-radius: var(--uxp-radius-xs); background: none; cursor: pointer; font: inherit; color: inherit; }.orbit .o-sort:hover{ color: var(--uxp-color-text-primary); background: var(--uxp-color-bg-subtle); }.orbit .o-sort .o-icon{ opacity: 0.35; }.orbit th[aria-sort] .o-sort .o-icon{ opacity: 1; }.orbit th[aria-sort="descending"] .o-sort .o-icon{ transform: rotate(180deg); }.orbit .o-table td:first-child, .orbit .o-table th:first-child{ position: sticky; inset-inline-start: 0; background: inherit; }.orbit .o-table thead th:first-child{ background: var(--uxp-color-bg-muted); }.orbit .o-table tbody td:first-child{ background: var(--uxp-color-bg-surface); }.orbit .o-table tbody tr[data-selected="true"] td:first-child{ background: var(--uxp-color-bg-selected-subtle); }.orbit .o-table th:nth-child(2), .orbit .o-table td:nth-child(2){ position: sticky; inset-inline-start: 52px; z-index: 1; }.orbit .o-table thead th:nth-child(2){ background: var(--uxp-color-bg-muted); }.orbit .o-table tbody th:nth-child(2){ background: var(--uxp-color-bg-surface); box-shadow: inset calc(var(--uxp-border-1) * -1) 0 0 var(--uxp-color-border-subtle); }.orbit .o-table tbody tr[data-selected="true"] th:nth-child(2){ background: var(--uxp-color-bg-selected-subtle); }.orbit .o-table tbody tr:hover > *{ background: var(--uxp-color-bg-muted); }.orbit .o-table tbody tr[data-selected="true"] > *, .orbit .o-table tbody tr[data-selected="true"]:hover > *{ background: var(--uxp-color-bg-selected-subtle); }.orbit .o-bulk{ display: flex; flex-wrap: wrap; align-items: center; gap: var(--uxp-space-3); padding: var(--uxp-space-3) var(--uxp-space-4); margin-bottom: var(--uxp-space-3); background: var(--uxp-color-bg-selected-subtle); color: var(--uxp-color-text-primary); border-radius: var(--uxp-radius-sm); }.orbit .o-bulk[hidden]{ display: none; }.orbit .o-bulk p{ margin: 0 auto 0 0; font: 600 0.875rem/1.25rem var(--uxp-font-body); }.orbit .o-bulk .o-btn{ color: var(--uxp-color-action-secondary-text); background: var(--uxp-color-bg-surface); }.orbit .o-bulk .o-btn:hover{ background: var(--uxp-color-bg-muted); }.orbit .o-menu{ position: relative; display: inline-block; }.orbit .o-menu__list{ position: absolute; inset-inline-start: 0; top: calc(100% + var(--uxp-space-1)); z-index: var(--uxp-layer-dropdown); min-width: 220px; list-style: none; margin: 0; padding: var(--uxp-space-1); background: var(--uxp-color-bg-surface); border: var(--uxp-border-1) solid var(--uxp-color-border-subtle); border-radius: var(--uxp-radius-sm); box-shadow: var(--uxp-elevation-3); }.orbit .o-menu__list li{ margin: 0; }.orbit .o-menu__item{ display: flex; width: 100%; align-items: center; gap: var(--uxp-space-3); min-height: var(--uxp-target-md); padding: var(--uxp-space-2) var(--uxp-space-3); border: 0; border-radius: var(--uxp-radius-xs); background: none; cursor: pointer; text-align: start; font: 500 0.9375rem/1.25rem var(--uxp-font-body); color: var(--uxp-color-text-primary); }.orbit .o-menu__item:hover, .orbit .o-menu__item:focus-visible{ background: var(--uxp-color-bg-muted); }.orbit .o-menu__item:focus-visible{ outline-offset: calc(var(--uxp-focus-ring-width) * -1); }.orbit .o-menu__item--danger{ color: var(--uxp-color-action-destructive); }.orbit .o-menu__sep{ height: var(--uxp-border-1); margin: var(--uxp-space-1) 0; background: var(--uxp-color-border-subtle); }.orbit .o-menu__trigger .o-icon{ transition: transform var(--uxp-motion-duration-sm) var(--uxp-motion-ease-standard); }.orbit .o-menu__trigger[aria-expanded="true"] .o-icon{ transform: rotate(180deg); }
@media (forced-colors: active) {.orbit .o-menu__item:focus-visible{ outline: var(--uxp-focus-ring-width) solid Highlight; } }.orbit .o-switch{ display: flex; align-items: center; justify-content: space-between; gap: var(--uxp-space-4); min-height: var(--uxp-target-md); padding: var(--uxp-space-2) 0; cursor: pointer; font: 400 0.9375rem/1.4 var(--uxp-font-body); color: var(--uxp-color-text-primary); }.orbit .o-switch + .o-switch{ border-top: var(--uxp-border-1) solid var(--uxp-color-border-subtle); }.orbit .o-switch__text{ display: grid; gap: var(--uxp-space-1); }.orbit .o-switch input{ appearance: none; -webkit-appearance: none; margin: 0; flex: none; position: relative; width: 44px; height: 24px; border: var(--uxp-border-2) solid var(--uxp-color-border-control); border-radius: var(--uxp-radius-full); background: var(--uxp-color-bg-surface); cursor: pointer; transition: background-color var(--uxp-motion-duration-sm) var(--uxp-motion-ease-standard), border-color var(--uxp-motion-duration-sm) var(--uxp-motion-ease-standard); }.orbit .o-switch input::before{ content: ""; position: absolute; top: 0; bottom: 0; margin-block: auto; inset-inline-start: var(--uxp-border-2); width: 16px; height: 16px; border-radius: 50%; background: var(--uxp-color-control-thumb); transition: transform var(--uxp-motion-duration-sm) var(--uxp-motion-ease-standard); }.orbit .o-switch input:hover{ border-color: var(--uxp-color-border-control-hover); }.orbit .o-switch input:checked{ background: var(--uxp-color-action-primary); border-color: var(--uxp-color-action-primary); }.orbit .o-switch input:checked::before{ transform: translateX(20px); background: var(--uxp-color-action-on-primary); }.orbit [dir="rtl"] .o-switch input:checked::before{ transform: translateX(-20px); }.orbit .o-switch:has(input:disabled){ color: var(--uxp-color-text-disabled); cursor: not-allowed; }.orbit .o-switch input:disabled{ background: var(--uxp-color-bg-disabled); border-color: var(--uxp-color-bg-disabled); cursor: not-allowed; }.orbit .o-switch input:disabled::before{ background: var(--uxp-color-text-disabled); }
@media (forced-colors: active) {.orbit .o-switch input{ appearance: auto; -webkit-appearance: auto; width: 20px; height: 20px; }.orbit .o-switch input::before{ display: none; } }.orbit .anat{ display: grid; grid-template-columns: minmax(0, 1fr); gap: 24px; align-items: center; }
@media (min-width: 768px) {.orbit .anat{ grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); } }.orbit .anat ol{ margin: 0; padding-inline-start: 1.4em; font-size: 0.875rem; line-height: 1.55; color: var(--uxp-color-text-secondary); }.orbit .anat ol li::marker{ font-family: var(--uxp-font-mono); color: var(--uxp-color-text-primary); }.orbit .grid-spec{ display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); gap: 8px; }.orbit .grid-spec span{ height: 72px; background: var(--uxp-color-bg-selected-subtle); border: var(--uxp-border-1) solid var(--uxp-color-border-subtle); display: flex; align-items: end; justify-content: center; padding-bottom: 6px; font: 500 0.6875rem/1 var(--uxp-font-mono); color: var(--uxp-color-status-info-on-tint); }
@media (max-width: 767px) {.orbit .grid-spec{ grid-template-columns: repeat(4, minmax(0, 1fr)); }.orbit .grid-spec span:nth-child(n+5){ display: none; } }.orbit .elev-row{ display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 20px; }.orbit .elev-row div{ height: 96px; background: var(--uxp-color-bg-surface); border: 1px solid var(--uxp-color-border-subtle); border-radius: var(--uxp-radius-sm); padding: 12px; font: 500 0.75rem/1.4 var(--uxp-font-mono); color: var(--uxp-color-text-secondary); }.orbit .icon-grid{ display: grid; grid-template-columns: repeat(auto-fill, minmax(96px, 1fr)); gap: 12px; }.orbit .icon-grid figure{ margin: 0; display: grid; justify-items: center; gap: 8px; padding: 16px 8px; border: 1px solid var(--uxp-color-border-subtle); border-radius: var(--uxp-radius-sm); color: var(--uxp-color-text-primary); }.orbit .icon-grid figcaption{ font: 500 0.6875rem/1.3 var(--uxp-font-mono); color: var(--uxp-color-text-secondary); text-align: center; word-break: break-word; }.orbit .type-faces{ display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 24px; }.orbit .type-faces div{ border-top: var(--uxp-border-2) solid var(--uxp-color-border-strong); padding-top: 12px; }.orbit .type-faces .aa-glyph{ font-size: 4rem; line-height: 1; margin-bottom: 12px; }.orbit .type-faces p{ font-size: 0.875rem; color: var(--uxp-color-text-secondary); margin: 6px 0 0; }.orbit .print-only, .orbit .cap-print{ display: none; }.orbit .gt-svg{ display: none; }.orbit .uxp-text-style-title-gradient{ font-weight: 900; }

@media print {
  @page { size: letter; margin: 0.6in 0.65in 0.75in; }.orbit, .orbit :root:not([data-theme="light"]), .orbit :root[data-theme="dark"]{
    color-scheme: light;
    --cs-bg: #FFFFFF; --cs-bg-2: #FAFAFC; --cs-panel: #F5F5F7; --cs-text: #1D1D1F; --cs-text-2: #6E6E73;
    --cs-rule: #E8E8ED; --cs-rule-strong: #C7C7CC; --cs-link: #006CD8; --cs-link-hover: #8E25AA;
    --cs-focus: #006CD8; --cs-code-bg: #F2F2F5; --cs-pass: #1E7D46; --cs-fail: #C62828;
  }.orbit{ padding: 0; }.orbit{ font-size: 14.67px; scroll-padding-top: 0; }.orbit{ background: #FFFFFF; color: #1A1A1A; -webkit-print-color-adjust: exact; print-color-adjust: exact; }.orbit .cs-topbar, .orbit .cs-toc, .orbit .cs-toc-mobile, .orbit .cs-skip, .orbit .o-toast-region, .orbit .o-search__kbd, .orbit .cap-screen, .orbit [data-banner-restore], .orbit .cs-footer a{ display: none !important; }.orbit .cs-footer{ padding: 24px 0 0; }.orbit .print-only{ display: block; }.orbit .gt-css{ position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }.orbit .gt-svg{ display: block; width: 100%; height: 1.08em; overflow: visible; font: inherit; font-weight: 900; letter-spacing: inherit; }.orbit .gt-svg text{ font: inherit; font-weight: 900; letter-spacing: inherit; }.orbit .cap-print{ display: inline; }.orbit .cs-hero{ padding: 0; }.orbit .cs-hero__kicker{ margin-bottom: 14px; }.orbit .cs-hero h1{ max-width: none; font-size: 3.5rem; margin-bottom: 18px; }.orbit .cs-hero__thesis{ font-size: 1.0625rem; margin-bottom: 18px; max-width: 60ch; }.orbit .cs-hero__band{ margin-bottom: 16px; height: 5px; }.orbit .cs-facts{ margin-bottom: 8px; }.orbit .cs-facts div{ padding: 12px 18px 12px 0; }.orbit .cs-hero .cs-table th, .orbit .cs-hero .cs-table td{ padding: 6px 12px 6px 0; }.orbit .cs-hero__print{ font: 500 0.8125rem/1.5 var(--uxp-font-mono); color: #595959; margin: 0 0 20px; }.orbit .cs-shell{ display: block; padding: 0; }.orbit .cs-main{ display: block; }.orbit .cs-part{ break-before: page; border-top: 0; margin-top: 0; padding-top: 0; }.orbit .cmp{ break-before: page; border-top: 0; margin-top: 0; padding-top: 0; }.orbit #f-color, .orbit #f-type, .orbit #f-icons, .orbit #f-writing, .orbit #next{ break-before: page; margin-top: 0; }.orbit .o-card__media{ aspect-ratio: 3 / 1; }.orbit .cs-sec{ margin-top: 40px; }.orbit h1, .orbit h2, .orbit h3, .orbit h4, .orbit h5, .orbit .cs-part__label, .orbit .cmp__group{ break-after: avoid; }.orbit .cs-note, .orbit .cs-block, .orbit .cs-facts div, .orbit .sw-chip, .orbit figure, .orbit .o-banner, .orbit .cs-roadmap > div, .orbit .cs-steps li, .orbit .o-field, .orbit .o-summary, .orbit .spec-row, .orbit .o-modal, .orbit .o-table tr, .orbit .o-acc__item, .orbit .o-fieldset, .orbit .o-cards, .orbit .sw-ramp, .orbit .grid-spec, .orbit .icon-grid figure, .orbit .o-btnbar, .orbit .cs-table tr, .orbit .tok-list, .orbit .o-card, .orbit .elev-row, .orbit .type-faces, .orbit .grad-bar{ break-inside: avoid; }.orbit .aa h4, .orbit .cmp__use h4, .orbit .cmp > h4{ break-after: avoid; }.orbit p, .orbit li{ orphans: 3; widows: 3; }.orbit .cs-two{ grid-template-columns: repeat(2, minmax(0, 1fr)); }.orbit .cs-three{ grid-template-columns: repeat(3, minmax(0, 1fr)); }.orbit .cmp dl.cmp__spec{ grid-template-columns: 130px minmax(0, 1fr); }.orbit .cmp__spec dt{ padding: 8px 16px 8px 0; border-bottom: 1px solid var(--cs-rule); }.orbit .cmp__spec dd{ padding: 8px 0; }.orbit .cs-roadmap{ grid-template-columns: repeat(3, minmax(0, 1fr)); }.orbit .cs-roadmap > div + div{ border-inline-start: 1px solid var(--cs-rule); padding-inline-start: 20px; }.orbit .sw-ramp{ grid-template-columns: repeat(10, minmax(0, 1fr)); }.orbit .sw{ font-size: 0.5625rem; }.orbit .sw__fill{ height: 44px; }.orbit .grid-spec{ grid-template-columns: repeat(12, minmax(0, 1fr)); }.orbit .grid-spec span:nth-child(n+5){ display: flex; }.orbit .cs-table-wrap, .orbit .o-table-scroll{ overflow: visible; }.orbit .cs-table, .orbit .o-table, .orbit .aa .cs-table{ min-width: 0; }.orbit .cs-table{ font-size: 0.8438rem; }.orbit .cs-table th, .orbit .cs-table td{ padding: 8px 12px 8px 0; }.orbit .cs-table code{ white-space: normal; word-break: break-word; }.orbit #f-writing .cs-table th, .orbit #f-writing .cs-table td{ padding: 6px 12px 6px 0; }.orbit #principles .cs-two{ gap: 14px 32px; margin-top: 20px !important; }.orbit #principles .cs-block{ padding-top: 12px; }.orbit #principles .cs-block p{ margin-bottom: 0; }.orbit .o-table td:first-child, .orbit .o-table th:first-child, .orbit .o-table th:nth-child(2), .orbit .o-table td:nth-child(2){ position: static; }.orbit .spec{ margin: 16px 0 10px; break-inside: auto; }.orbit .spec__cap{ break-before: avoid; }.orbit .cmp__purpose{ break-after: avoid; }.orbit .aa{ margin-top: 18px; }.orbit .aa .cs-table th, .orbit .aa .cs-table td{ padding: 6px 12px 6px 0; }.orbit .cmp__use{ margin-top: 18px; }.orbit .cmp > h4{ margin-top: 14px !important; margin-bottom: 0; }.orbit .tok-list{ margin-top: 8px; }.orbit .cs-sec > h3, .orbit .cs-part > h2{ break-inside: avoid; padding-bottom: 150px; margin-bottom: -134px; }.orbit .cs-sec h4, .orbit .cmp__use h4, .orbit .aa h4{ break-inside: avoid; padding-bottom: 90px; margin-bottom: -80px; }.orbit .spec__body{ padding: 20px 24px; }.orbit .icon-grid figure{ padding: 10px 6px; gap: 6px; }.orbit .o-banner{ padding: 12px 14px; }.orbit .o-banner + .o-banner{ margin-top: 8px; }.orbit .o-card{ padding: 20px; }.orbit .o-card--feature{ padding: 24px; }.orbit .spec__body[style*="min-height"]{ min-height: 0 !important; }.orbit .spec__body[style*="padding-top"]{ padding-top: 56px !important; }.orbit .o-lang__list{ display: block !important; position: static; margin-top: 8px; box-shadow: var(--uxp-elevation-1); }.orbit .o-tip__bubble[role="tooltip"]{ display: block !important; }.orbit #mn1{ display: block !important; position: static; margin-top: var(--uxp-space-2); box-shadow: var(--uxp-elevation-1); }.orbit .o-tip{ margin-inline-end: 24px; }.orbit #dlg-delete{ display: block; position: static; margin: 0 28px 28px; width: auto; max-width: 400px; box-shadow: var(--uxp-elevation-2); border: 1px solid var(--uxp-color-border-subtle); }.orbit .o-toast{ animation: none; }.orbit .o-btn__spinner{ animation: none; }.orbit .cs-main ul:not([class]):not([data-loadmore-list]) > li::marker{ content: "-  "; color: #1A1A1A; }.orbit .cs-main ol:not([class]) > li::marker{ content: counter(list-item) "  "; font-family: var(--uxp-font-mono); }
}



/* ===== portfolio branding re-theme (Orbit v1 case study) ===== */
.orbit{
  --uxp-font-display:"Newsreader",Georgia,"Times New Roman",serif;
  --uxp-font-body:"Inter","Helvetica Neue",Arial,sans-serif;
  --uxp-font-mono:"Roboto Mono",ui-monospace,SFMono-Regular,Menlo,monospace;
  --uxp-ink-900:#1a1a1d;--uxp-ink-700:#42444d;--uxp-ink-500:#797979;--uxp-ink-400:#a3a3a3;
  --uxp-color-text-primary:#1a1a1d;
  --uxp-color-text-link:#7a5ab2;--uxp-color-text-link-hover:#5f4593;--uxp-color-text-link-visited:#5f4593;
  --cs-bg:#ffffff;--cs-text:#1a1a1d;--cs-text-2:#797979;--cs-rule:#e5e5e5;--cs-rule-strong:#d7d7db;--cs-accent:#7a5ab2;
  background:#fff;color:#1a1a1d;min-height:100vh;
}
.orbit, .orbit *{box-sizing:border-box}
.orbit a{color:#7a5ab2}
/* editorial heading scale, tuned to the reading column + no pure black */
.orbit .uxp-text-display-xl{font-size:clamp(40px,6vw,76px)!important;line-height:1.03!important;letter-spacing:-.02em!important;color:#1a1a1d}
.orbit .uxp-text-heading-1{font-size:clamp(28px,3.6vw,42px)!important;line-height:1.1!important;color:#1a1a1d}
.orbit .uxp-text-heading-2{font-size:clamp(23px,2.7vw,31px)!important;line-height:1.16!important;color:#1a1a1d}
.orbit main h4{font-family:var(--uxp-font-body);font-weight:600;color:#42444d}
/* ===== portfolio case-study shell ===== */
.orbit .progress{position:fixed;top:0;left:0;height:2px;width:0;background:#7a5ab2;z-index:60}
.orbit .shellc{max-width:1208px;margin:0 auto;padding:0 24px;display:grid;grid-template-columns:250px 1fr;gap:56px}
@media(max-width:960px){.orbit .shellc{grid-template-columns:1fr;gap:0;padding:0 20px}}
.orbit aside{position:sticky;top:0;align-self:start;height:100vh;padding:40px 0;display:flex;flex-direction:column;overflow-y:auto}
.orbit aside::-webkit-scrollbar{width:0}
@media(max-width:960px){.orbit aside{position:sticky;top:0;z-index:50;height:auto;padding:12px 0;border-bottom:1px solid #e5e5e5;overflow:visible;background:#fff}}
.orbit .crumb{display:flex;align-items:center;gap:9px;margin-bottom:24px;font-family:'Inter',"Helvetica Neue",Arial,sans-serif;font-size:15px;line-height:1}
.orbit .crumb a{color:#797979;text-decoration:none;transition:color .15s}
.orbit .crumb a:hover{color:#1a1a1d}
.orbit .crumb .sep{color:#c9c9c9}
.orbit .crumb .cur{color:#1a1a1d;font-weight:500}
@media(max-width:960px){.orbit .crumb{margin-bottom:0}}
.orbit .secnav{min-width:0}
.orbit .secnav summary{display:none;font-family:'Inter',sans-serif;font-size:13px;color:#1a1a1d;cursor:pointer;padding:8px 0;list-style:none}
.orbit .secnav summary::-webkit-details-marker{display:none}
@media(max-width:960px){.orbit .secnav summary{display:block}.orbit .secnav summary::after{content:" \\2193";color:#797979}.orbit .secnav[open] summary::after{content:" \\2191"}}
.orbit .toc{min-width:0}
.orbit .toc ul{list-style:none;margin:0 0 2px;padding:0;display:flex;flex-direction:column;gap:1px}
.orbit .toc .cs-toc__g{font-family:'Inter',"Helvetica Neue",Arial,sans-serif;font-size:10.5px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#a9a9a9;margin:20px 0 7px;padding-left:18px}
.orbit .toc .cs-toc__g:first-child{margin-top:0}
.orbit .toc a{position:relative;font-family:'Inter',"Helvetica Neue",Arial,sans-serif;font-size:13px;color:#797979;display:block;padding:4px 0 4px 18px;text-decoration:none;transition:color .28s ease;line-height:1.3}
.orbit .toc a:hover{color:#1a1a1d}
.orbit .toc a.active{color:#7a5ab2;font-weight:500}
.orbit .toc a::before{content:"";position:absolute;left:2px;top:50%;width:5px;height:5px;border-radius:50%;background:#7a5ab2;opacity:0;transform:translateY(-50%) scale(.35);transition:opacity .3s ease,transform .34s cubic-bezier(.22,1,.36,1)}
.orbit .toc a.active::before{opacity:1;transform:translateY(-50%) scale(1)}
.orbit main{min-width:0;max-width:820px;padding:44px 0 120px}
@media(max-width:960px){.orbit main{padding-top:28px}}
.orbit main .cs-hero{max-width:none!important;margin:0!important;padding:0 0 8px!important}
.orbit main .cs-hero h1{max-width:none!important}
.orbit main .cs-part,.orbit main .cmp{margin-top:56px;padding-top:28px;border-top:1px solid #e5e5e5;background:transparent!important}
.orbit main > .cs-hero + .cs-part,.orbit main .cs-part:first-of-type{border-top:0}
.orbit main section{background:transparent!important;scroll-margin-top:20px}
/* kill any leftover doc chrome if present */
.orbit .cs-topbar{display:none!important}
.orbit .cs-hero .uxp-text-style-title-gradient,.orbit .cs-hero .gt-css{background:none!important;-webkit-text-fill-color:#1a1a1d!important;color:#1a1a1d!important}
`;

export const orbitCaseBody = `<div class="progress" aria-hidden="true"></div>
<div class="shellc">
  <aside>
    <div class="crumb"><a href="/">← Work</a><span class="sep">/</span><span class="cur">Orbit Design System</span></div>
    <details class="secnav" open>
      <summary>Sections</summary>
      <nav class="toc" aria-label="Case study sections"><p class="cs-toc__g">Why Orbit exists</p><ul><li><a href="#problem">The gradient problem</a></li><li><a href="#threshold">When to systematize</a></li><li><a href="#scope">Scope of the library</a></li><li><a href="#where">Architecture</a></li></ul><p class="cs-toc__g">Foundations</p><ul><li><a href="#f-tokens">Tokens</a></li><li><a href="#f-a11y">Accessibility</a></li><li><a href="#f-color">Color</a></li><li><a href="#f-type">Typography</a></li><li><a href="#f-space">Spacing</a></li><li><a href="#f-layout">Layout and direction</a></li><li><a href="#f-shape">Shape</a></li><li><a href="#f-elevation">Elevation and layers</a></li><li><a href="#f-motion">Motion</a></li><li><a href="#f-icons">Icons</a></li><li><a href="#f-writing">Writing</a></li></ul><p class="cs-toc__g">Components</p><ul><li><a href="#c-button">Button</a></li><li><a href="#c-link">Link</a></li><li><a href="#c-menu">Menu</a></li><li><a href="#c-tabs">Tabs</a></li><li><a href="#c-side-nav">Side nav</a></li><li><a href="#c-pagination">Pagination</a></li><li><a href="#c-language-switcher">Language switcher</a></li><li><a href="#c-text-field">Text field</a></li><li><a href="#c-select">Select</a></li><li><a href="#c-checkbox">Checkbox</a></li><li><a href="#c-radio-group">Radio group</a></li><li><a href="#c-switch">Switch</a></li><li><a href="#c-segmented-control">Segmented control</a></li><li><a href="#c-search">Search</a></li><li><a href="#c-banner">Banner</a></li><li><a href="#c-toast">Toast</a></li><li><a href="#c-badge">Badge</a></li><li><a href="#c-tooltip">Tooltip</a></li><li><a href="#c-card">Card</a></li><li><a href="#c-accordion">Accordion</a></li><li><a href="#c-modal">Modal</a></li><li><a href="#c-data-table">Data table</a></li></ul><p class="cs-toc__g">Governance</p><ul><li><a href="#gov-roles">Roles</a></li><li><a href="#gov-flow">Contribution process</a></li><li><a href="#gov-gates">Contribution criteria</a></li><li><a href="#gov-lifecycle">Component lifecycle</a></li><li><a href="#waitlist">Component backlog</a></li><li><a href="#gov-measure">Adoption metrics</a></li></ul><p class="cs-toc__g">Adoption and impact</p><ul><li><a href="#adoption">Adoption</a></li><li><a href="#changed">Impact</a></li><li><a href="#learned">Learnings</a></li><li><a href="#next">Roadmap</a></li></ul></nav>
    </details>
  </aside>
  <main>
<header class="cs-hero" id="top">
  <p class="cs-hero__kicker">Case study / UXPective design system</p>
  <h1 class="uxp-text-display-xl"><span class="uxp-text-style-title-gradient gt-css">Orbit Design System</span><svg class="gt-svg" aria-hidden="true" focusable="false"><defs><linearGradient id="gt-hero" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#008AD1"/><stop offset="0.5" stop-color="#C648E6"/><stop offset="1" stop-color="#C86E00"/></linearGradient></defs><text x="0" y="0.82em" fill="url(#gt-hero)">Orbit Design System</text></svg></h1>
  <p class="cs-hero__thesis">Orbit is the design system behind UXPective: the foundations, components and rules every UXPective screen is built from. It is built to WCAG 2.1 AA for text, keyboard, focus and screen readers, with a lighter brand palette where the look calls for it.</p>
  <p class="print-only cs-hero__print">Interactive version, with every specimen live: work.shanicaroy.com/work/orbit-design-system</p>
  <div class="cs-hero__band" aria-hidden="true"></div>
  <dl class="cs-facts">
    <div><dt>Role</dt><dd>Designer and maintainer of Orbit, founder of UXPective</dd></div>
    <div><dt>Surfaces</dt><dd>UXPective website, cohort landing pages and the cohort application form</dd></div>
    <div><dt>Scope</dt><dd>11 foundations, 22 components, 182 tokens and a contribution model</dd></div>
    <div><dt>Source</dt><dd>One token file feeding the Figma library and the coded components</dd></div>
    <div><dt>Accessibility</dt><dd>WCAG 2.1 AA for text, keyboard, focus and screen readers, with 6 documented color exceptions</dd></div>
  </dl>
  <div class="cs-table-wrap" role="region" tabindex="0" aria-label="What Orbit changed"><table class="cs-table "><caption>What Orbit changed</caption><thead><tr><th scope="col">Measure</th><th scope="col" class="num">Before Orbit</th><th scope="col" class="num">With Orbit</th></tr></thead><tbody><tr><th scope="row">Blues shipping across screens</th><td class="num">3</td><td class="num">1</td></tr>
<tr><th scope="row">Text field versions in use</th><td class="num">3</td><td class="num">1</td></tr>
<tr><th scope="row">Days to compose a new screen from existing parts</th><td class="num">5</td><td class="num">1</td></tr>
<tr><th scope="row">Components with an accessibility checklist</th><td class="num">None</td><td class="num">22 of 22</td></tr>
<tr><th scope="row">Contrast pairs at WCAG 2.1 AA (the rest documented as exceptions)</th><td class="num">Unchecked</td><td class="num">28 of 34</td></tr>
</tbody></table></div>
</header>

  
  <div class="cs-main">
    <details class="cs-toc-mobile"><summary>Sections</summary></details>
    
<section class="cs-part" id="framing" aria-labelledby="framing-h">
  <p class="cs-part__label">Part 1 of 5</p>
  <h2 id="framing-h" class="uxp-text-heading-1">Why Orbit exists</h2>

  <div class="cs-sec" id="problem">
    <h3 class="uxp-text-heading-2">The gradient problem</h3>
    <div class="cs-prose">
      <p>On one screen the brand gradient ran blue to purple to orange. On the next it ran orange to purple to blue. Same three colors, reversed, three weeks apart, both designed by me.</p>
      <p>That was the symptom that stopped feeling like a one-off. Once I started looking, it kept happening. Three near-identical blues were drifting across screens. Form fields were rebuilt every time a new screen needed one, with different padding, different focus rings and three different ideas of what “required” looked like. The logo’s three colors were being pulled apart and used as flat palettes, as if the gradient between them had never existed.</p>
    </div>
    
<div class="spec">
  <div class="spec__body spec-stack">
    <div><div class="grad-bar" style="background:linear-gradient(90deg,#00A7FF,#C648E6,#FF921E)"></div><span class="spec-label">Screen 01, the intended run: blue, purple, orange at 90°.</span></div>
    <div><div class="grad-bar" style="background:linear-gradient(90deg,#FF921E,#C648E6,#00A7FF)"></div><span class="spec-label">Screen 02, reversed: the same stops, mirrored.</span></div>
    <div><div class="grad-bar" style="background:linear-gradient(135deg,#00A7FF,#C648E6,#FF921E)"></div><span class="spec-label">Screen 03, re-angled: correct stops at 135°. Wrong, subtly.</span></div>
  </div>
  <p class="spec__cap">Evidence: the title gradient, three runs, three weeks apart, all designed by me.</p>
</div>
<div class="spec">
  <div class="spec__body">
    <div class="sw-grid">
      <div class="sw-chip"><div class="sw-chip__fill" style="background:#00A7FF"></div><div class="sw-chip__meta"><strong>#00A7FF</strong><br>Intended</div></div>
      <div class="sw-chip"><div class="sw-chip__fill" style="background:#1DB2FF"></div><div class="sw-chip__meta"><strong>#1DB2FF</strong><br>Drifted</div></div>
      <div class="sw-chip"><div class="sw-chip__fill" style="background:#3A9CD5"></div><div class="sw-chip__meta"><strong>#3A9CD5</strong><br>Drifted</div></div>
    </div>
  </div>
  <p class="spec__cap">Three blues, drifting (illustrative values). None is wrong on its own. Side by side, they read as a brand losing its grip.</p>
</div>
    <p class="cs-prose">The fracture wasn’t in any single decision. It was in re-deciding the same thing every time I opened the file. A trustworthy brand is one where the small decisions have been made once. Orbit is where those decisions live, so they aren’t made again on every screen.</p>
  </div>

  <div class="cs-sec" id="threshold">
    <h3 class="uxp-text-heading-2">When to systematize</h3>
    <p class="cs-prose">Most small projects don’t earn one. A design system has to be built, maintained and documented, and that only pays back once the cost of not having one crosses a threshold. Three signals made the threshold clear.</p>
    <div class="cs-three">
      <div class="cs-block"><h4>Surfaces I maintained alone</h4><p>Up to three or four, I could hold the whole UI in my head. Past that, every new screen started from a screenshot of the last one and inherited every uncorrected error in it.</p></div>
      <div class="cs-block"><h4>How fast I shipped screens</h4><p>Roughly one a week. At that pace, ad hoc consistency is a fiction: either there is a source to refer to, or there are forty slightly different button paddings.</p></div>
      <div class="cs-block"><h4>The cost of re-deciding</h4><p>Half of every new screen was rebuilding the obvious: fields, button states, section padding. A new screen took five days, and about four of them went to things that already existed.</p></div>
    </div>
    <div class="cs-note"><p><strong>Threshold.</strong> It stopped being optional the moment I rebuilt a text field for the third time and couldn’t remember which of the previous two was the right one. If the honest answer to “which version do I copy?” is “I don’t know”, the system is already necessary.</p></div>
  </div>

  <div class="cs-sec" id="scope">
    <h3 class="uxp-text-heading-2">Scope of the library</h3>
    <p class="cs-prose">Orbit holds foundations (the decisions every screen depends on) and components (patterns that recur). Everything else stays local to its screen.</p>
    <div class="cs-two">
      <div class="cs-block"><h4>In the system</h4><ul><li>11 foundations, starting with tokens and accessibility</li><li>22 components, each documented the same way and each with an accessibility checklist</li><li>Gradient tokens: the brand mark belongs here, not in pages</li><li>Form patterns: labels, validation, error summary</li><li>Interface writing rules</li><li>A contribution process and a component lifecycle</li></ul></div>
      <div class="cs-block"><h4>Out of the system</h4><ul><li>Anything that has shipped exactly once</li><li>Page-specific illustrations and hero treatments</li><li>Long-form editorial layouts</li><li>Marketing and editorial copy (Writing covers interface text)</li><li>Any pattern that hasn’t yet hurt to rebuild</li></ul></div>
    </div>
    <div class="cs-note"><p><strong>Why 22 components.</strong> Each one either met the entry criteria, or exists because another component is built on it: Radio group sits under Segmented control, and Menu holds the data table’s row actions. Patterns that don’t meet the criteria yet are tracked in the component backlog.</p></div>
  </div>

  <div class="cs-sec" id="where">
    <h3 class="uxp-text-heading-2">Architecture</h3>
    <p class="cs-prose">One token source feeds two consumers, and names match across all three. If the code button has <code>variant="primary"</code>, the Figma component’s variant is Primary. A Figma-only variant for a single mock is the first step of drift, so new variants follow the same contribution process in both places.</p>
    <div class="cs-table-wrap" role="region" tabindex="0" aria-label="Orbit’s layers"><table class="cs-table "><caption>Orbit’s layers</caption><thead><tr><th scope="col">Layer</th><th scope="col">Lives in</th><th scope="col">Who changes it</th></tr></thead><tbody><tr><th scope="row">Token source</th><td>One JSON file, primitives and semantics</td><td>Owner</td></tr>
<tr><th scope="row">Design library</th><td>Figma variables, text styles and components</td><td>Owner and contributors, against the acceptance criteria</td></tr>
<tr><th scope="row">Code library</th><td>CSS custom properties and components</td><td>Owner and contributors, against the acceptance criteria</td></tr>
<tr><th scope="row">Surfaces</th><td>UXPective website, cohort landing pages, cohort application form</td><td>Anyone building a UXPective screen</td></tr>
<tr><th scope="row">Documentation</th><td>This case study and the internal docs page, in the same order</td><td>Whoever ships the change</td></tr>
</tbody></table></div>
  </div>
</section>
    
<section class="cs-part" id="foundations" aria-labelledby="found-h">
  <p class="cs-part__label">Part 2 of 5</p>
  <h2 id="found-h" class="uxp-text-heading-1">Eleven foundations</h2>
  <p class="cs-lede">Tokens, accessibility, color, typography, spacing, layout and direction, shape, elevation and layers, motion, icons and writing. Every component is composed from these, so a change here reaches every component.</p>
  
<div class="cs-sec" id="f-tokens">
  <p class="cmp__group">Foundation 1 of 11</p>
  <h3 class="uxp-text-heading-2">Tokens</h3>
  
  <p class="cs-prose">Every visual decision in Orbit is a token, and every token sits in one of three tiers. Components and screens only ever reach the middle one.</p>
  <div class="cs-table-wrap" role="region" tabindex="0" aria-label="Token tiers"><table class="cs-table "><caption>Token tiers</caption><thead><tr><th scope="col">Tier</th><th scope="col">What it holds</th><th scope="col">Example</th><th scope="col">Who uses it</th></tr></thead><tbody><tr><th scope="row">Primitive</th><td>Raw values with no opinion</td><td><code>uxp-blue-700</code>, <code>uxp-space-4</code></td><td>Semantic tokens only</td></tr>
<tr><th scope="row">Semantic</th><td>A value with a job</td><td><code>uxp-color-text-link</code>, <code>uxp-color-border-input</code></td><td>Components and screens</td></tr>
<tr><th scope="row">Component</th><td>A component diverging from its semantics</td><td>None yet</td><td>Added only when a second theme needs it</td></tr>
</tbody></table></div>
  <h4>Naming convention</h4>
  <p class="cs-prose">Every token reads <code>uxp-{category}-{role}-{variant}-{state}</code>, dropping parts that don’t apply. Scales that are steps use numbers (space, elevation, color stops). Sets of discrete choices use sizes (radius, motion durations, breakpoints, UI text). Every decision has exactly one name; the only aliases are the section spacing tokens, and they say so.</p>
  <div class="cs-table-wrap" role="region" tabindex="0" aria-label="How names are built"><table class="cs-table "><caption>How names are built</caption><thead><tr><th scope="col">Category</th><th scope="col">Pattern</th><th scope="col">Example</th></tr></thead><tbody><tr><th scope="row">Color, semantic</th><td>uxp-color-{role}-{variant}-{state}</td><td><code>uxp-color-text-link-hover</code></td></tr>
<tr><th scope="row">Color, status</th><td>uxp-color-status-{status}-{use}</td><td><code>uxp-color-status-error-fg</code></td></tr>
<tr><th scope="row">Gradient</th><td>uxp-gradient-{job}</td><td><code>uxp-gradient-action</code></td></tr>
<tr><th scope="row">Text style</th><td>uxp-text-{role}-{size}</td><td><code>uxp-text-ui-button-md</code></td></tr>
<tr><th scope="row">Spacing</th><td>uxp-space-{step}</td><td><code>uxp-space-6</code></td></tr>
<tr><th scope="row">Shape</th><td>uxp-radius-{size}, uxp-border-{px}</td><td><code>uxp-radius-sm</code></td></tr>
<tr><th scope="row">Elevation and layers</th><td>uxp-elevation-{step}, uxp-layer-{surface}</td><td><code>uxp-layer-modal</code></td></tr>
<tr><th scope="row">Motion</th><td>uxp-motion-{property}-{size}</td><td><code>uxp-motion-duration-md</code></td></tr>
<tr><th scope="row">Accessibility</th><td>uxp-focus-{part}, uxp-target-{size}</td><td><code>uxp-focus-halo</code></td></tr>
</tbody></table></div>
  <h4>Token inventory</h4>
  <div class="cs-table-wrap" role="region" tabindex="0" aria-label="Every token in Orbit, counted from the stylesheet when this page was built"><table class="cs-table "><caption>Every token in Orbit, counted from the stylesheet when this page was built</caption><thead><tr><th scope="col">Category</th><th scope="col" class="num">Tokens</th><th scope="col">Includes</th></tr></thead><tbody><tr><th scope="row">Color primitives</th><td class="num">55</td><td>Brand ramps, secondaries, neutrals, alpha neutrals, status ramps</td></tr>
<tr><th scope="row">Color semantics</th><td class="num">48</td><td>Text, surfaces, borders, actions, controls, status</td></tr>
<tr><th scope="row">Gradients</th><td class="num">3</td><td>Brand, text, action</td></tr>
<tr><th scope="row">Accessibility</th><td class="num">7</td><td>Focus ring and halo, target sizes</td></tr>
<tr><th scope="row">Spacing</th><td class="num">14</td><td>Eleven steps, three section tokens</td></tr>
<tr><th scope="row">Shape</th><td class="num">7</td><td>Five radii, three border widths</td></tr>
<tr><th scope="row">Elevation and layers</th><td class="num">12</td><td>Five elevations, seven layers</td></tr>
<tr><th scope="row">Motion</th><td class="num">7</td><td>Four durations, three easings</td></tr>
<tr><th scope="row">Type families</th><td class="num">3</td><td>Display, body, mono</td></tr>
<tr><th scope="row">Masks</th><td class="num">2</td><td>Scroll-edge fade, select chevron</td></tr>
<tr><th scope="row">Text styles</th><td class="num">19</td><td>Editorial and interface sets</td></tr>
<tr><th scope="row">Breakpoints</th><td class="num">5</td><td>xs to xl</td></tr>
<tr><th scope="row"><strong>Total</strong></th><td class="num"><strong>182</strong></td><td></td></tr>
</tbody></table></div>
  <h4>Linting</h4>
  <div class="cs-table-wrap" role="region" tabindex="0" aria-label="The token lint"><table class="cs-table "><caption>The token lint</caption><thead><tr><th scope="col">Rule</th><th scope="col">Fails on</th></tr></thead><tbody><tr><th scope="row">Components consume semantics</th><td>Any primitive token in component code, including hover, active and dark-surface states</td></tr>
<tr><th scope="row">No raw colors</th><td>A hex, rgb or named color anywhere in component code</td></tr>
<tr><th scope="row">Semantics reference primitives</th><td>A semantic token whose value is anything other than a primitive</td></tr>
<tr><th scope="row">Spacing stays on the scale</th><td>A padding, margin or gap that isn’t built from space, border or focus tokens</td></tr>
<tr><th scope="row">Names exist</th><td>A reference to a token that isn’t defined</td></tr>
</tbody></table></div>
  <p class="cs-prose">Fixed dimensions (control heights, icon and checkbox boxes, maximum widths) are part of each component’s spec rather than the spacing scale. In Figma, detached styles are reported per file. When this page is built, its own stylesheet and every specimen go through the same lint, and passes: 298 component rules, no primitives, no raw colors, no off-scale spacing.</p>
</div>
<div class="cs-sec" id="f-a11y">
  <p class="cmp__group">Foundation 2 of 11</p>
  <h3 class="uxp-text-heading-2">Accessibility</h3>
  
  <p class="cs-prose">Orbit is built to WCAG 2.1 AA for text, keyboard operation, focus, names and announcements. A small set of brand colors (the interface blue, field edges and placeholders) is deliberately lighter than AA for a cleaner look; each is listed below as a documented exception. Where AAA is easy (44px targets, reduced motion), Orbit takes it by default.</p>
  <div class="cs-table-wrap" role="region" tabindex="0" aria-label="Accessibility tokens and system rules"><table class="cs-table "><caption>Accessibility tokens and system rules</caption><thead><tr><th scope="col">Rule</th><th scope="col">Token or behavior</th><th scope="col">Criterion</th></tr></thead><tbody><tr><th scope="row">Body text, labels, helper text and errors at least 4.5:1</th><td>Text tokens resolve to ink-500 or darker, or to status 700 stops</td><td>1.4.3</td></tr>
<tr><th scope="row">Large text at least 3:1 (24px, or 18.66px bold)</th><td>Display text uses 600 stops or darker; <code>uxp-gradient-text</code> is built from them</td><td>1.4.3</td></tr>
<tr><th scope="row">Focus and checked states at least 3:1</th><td><code>uxp-focus-ring-color</code> and checked fills use blue-600</td><td>1.4.11</td></tr>
<tr><th scope="row">Focus always visible</th><td>2px outline at 2px offset on <code>:focus-visible</code>; fields turn their edge into a 2px blue line with a soft <code>uxp-focus-halo</code>; a solid or transparent outline is always present, so forced-colors mode keeps focus visible</td><td>2.4.7</td></tr>
<tr><th scope="row">Targets</th><td><code>uxp-target-md</code> 44px default (meets AAA 2.5.5); <code>uxp-target-sm</code> 32px for desktop dense areas only</td><td>beyond AA</td></tr>
<tr><th scope="row">Text resilience</th><td>min-height, never height; rem units; content survives 200% zoom, 320px width and text-spacing overrides</td><td>1.4.4, 1.4.10, 1.4.12</td></tr>
<tr><th scope="row">One announcer per page</th><td>A polite live region owned by the system; components call it instead of building their own</td><td>4.1.3</td></tr>
<tr><th scope="row">Motion</th><td>Durations collapse under <code>prefers-reduced-motion</code>; only short opacity changes remain</td><td>beyond AA (2.3.3)</td></tr>
<tr><th scope="row">Visible edges on fields and small controls</th><td>Fields and checkboxes keep a light edge (a documented exception to 3:1); buttons and chips are identified by their text</td><td>1.4.11</td></tr>
<tr><th scope="row">Color is never the only cue</th><td>Underlined links, icon shapes per status, weight on selected tabs, a bar on the current nav item, thumb position on switches</td><td>1.4.1</td></tr>
<tr><th scope="row">Single-key shortcuts</th><td>Not used. Shortcuts include a modifier (Ctrl K, Cmd K)</td><td>2.1.4</td></tr>
</tbody></table></div>
  <h4>Component checklist</h4>
  <p class="cs-prose">Every component page in Part 4 ends with the same seven rows, in the same order: contrast; keyboard; focus; name, role and value; announcements; reflow and text spacing; and one criterion specific to that component. A row is never deleted for being inconvenient. If it doesn’t apply, it says “Not applicable” and why.</p>
  <h4>Testing</h4>
  <p class="cs-prose">A spec can be correct and still ship broken, so every component is checked on the built version with the same protocol: an automated scan, a keyboard-only pass, NVDA with Firefox and Chrome, VoiceOver with Safari on macOS and iOS, 200% zoom, a 320px viewport, a text-spacing override, and Windows forced-colors mode. Automated scans catch roughly a third of issues; the rest need a person.</p>
  <div class="cs-note"><p><strong>Example.</strong> While these docs were built, the automated pass flagged links sitting on 50 tints, inside banners and selected table rows. A blue that works on white loses contrast on every tint, so links on tints use <code>uxp-color-text-link-on-tint</code> (blue-700), at 4.9:1 or better on every tint.</p></div>
  <h4 id="exceptions">Documented exceptions</h4>
  <p class="cs-prose">These pairs sit below their WCAG 2.1 AA requirement on purpose. The build fails if any other pair falls short, so the list below is always complete.</p>
  <div class="cs-table-wrap" role="region" tabindex="0" aria-label="Documented exceptions to WCAG 2.1 AA contrast"><table class="cs-table "><caption>Documented exceptions to WCAG 2.1 AA contrast</caption><thead><tr><th scope="col">Pair</th><th scope="col" class="num">Ratio</th><th scope="col" class="num">Requirement</th><th scope="col">Why it’s lighter</th></tr></thead><tbody><tr><th scope="row">ink-400 on white</th><td class="num">3.2:1</td><td class="num">4.5:1</td><td>Placeholders are lighter so they never read as typed values. They’re examples only: every field also has a visible label.</td></tr>
<tr><th scope="row">blue-600 on white</th><td class="num">4.0:1</td><td class="num">4.5:1</td><td>A brighter interface blue keeps actions light. Links are also underlined, so they never rely on color.</td></tr>
<tr><th scope="row">blue-600 on ink-50</th><td class="num">3.7:1</td><td class="num">4.5:1</td><td>The same interface blue on muted footers and button bars, where it sits slightly lower than on white.</td></tr>
<tr><th scope="row">white on blue-600</th><td class="num">4.0:1</td><td class="num">4.5:1</td><td>Same blue, carrying white labels. Labels are 15px semibold, and the pair still meets the 3:1 AA level for large text.</td></tr>
<tr><th scope="row">ink-200 on white</th><td class="num">1.4:1</td><td class="num">3.0:1</td><td>Fields keep a near-white edge for a lighter form. Each field has a visible label above it, and focus turns the edge blue.</td></tr>
<tr><th scope="row">ink-300 on white</th><td class="num">1.7:1</td><td class="num">3.0:1</td><td>Small controls get a slightly stronger edge than fields. Checked and on states switch to a blue fill that meets 3:1.</td></tr>
</tbody></table></div>
</div>
<div class="cs-sec" id="f-color">
  <p class="cmp__group">Foundation 3 of 11</p>
  <h3 class="uxp-text-heading-2">Color</h3>
  
  <p class="cs-prose">Three primaries from the brand mark, three decorative secondaries, eight cool neutrals, four status families and three gradients. The palette expresses personality; the status layer communicates state; they stay separate on purpose. Every stop has a job, which is what makes contrast predictable.</p>
  <div class="cs-table-wrap" role="region" tabindex="0" aria-label="Stop usage"><table class="cs-table "><caption>Stop usage</caption><thead><tr><th scope="col">Stop</th><th scope="col">Used for</th><th scope="col">Notes</th></tr></thead><tbody><tr><th scope="row">500</th><td>Brand mark, decorative fills, illustration</td><td>The brand colors. Logotypes are exempt from contrast, so the mark keeps them exactly.</td></tr>
<tr><th scope="row">600</th><td>Interface actions and display text: buttons, links, focus, checked and selected states</td><td>Tuned bright rather than dark. White on blue-600 is 4.0:1, a documented exception for text.</td></tr>
<tr><th scope="row">700</th><td>Hover and pressed states, text on tints</td><td>5.5:1 on white and at least 4.9:1 on every tint.</td></tr>
<tr><th scope="row">800 to 900</th><td>Deep accents, used sparingly</td><td>Saturated rather than darkened, so they never read as muddy.</td></tr>
<tr><th scope="row">50 to 200</th><td>Tints, hover fills, selected rows</td><td>Backgrounds only, never text.</td></tr>
</tbody></table></div>
  <h4>Primary colors</h4>
  <div class="spec"><div class="spec__body spec-stack"><div><p class="spec-label" style="margin:0"><code style="background:none;padding:0">uxp-blue</code> 50 to 900</p><div class="sw-ramp" role="img" aria-label="Blue ramp from 50 to 900; 500 is the brand color"><div class="sw"><div class="sw__fill" style="background:#EFF6FF"></div><span>50</span><span>#EFF6FF</span></div><div class="sw"><div class="sw__fill" style="background:#DBEDFF"></div><span>100</span><span>#DBEDFF</span></div><div class="sw"><div class="sw__fill" style="background:#B5DBFF"></div><span>200</span><span>#B5DBFF</span></div><div class="sw"><div class="sw__fill" style="background:#82C6FF"></div><span>300</span><span>#82C6FF</span></div><div class="sw"><div class="sw__fill" style="background:#3FB2FF"></div><span>400</span><span>#3FB2FF</span></div><div class="sw sw--brand"><div class="sw__fill" style="background:#00A7FF"></div><span>500 Brand</span><span>#00A7FF</span></div><div class="sw"><div class="sw__fill" style="background:#0A7FEA"></div><span>600</span><span>#0A7FEA</span></div><div class="sw"><div class="sw__fill" style="background:#0068C8"></div><span>700</span><span>#0068C8</span></div><div class="sw"><div class="sw__fill" style="background:#0A54A6"></div><span>800</span><span>#0A54A6</span></div><div class="sw"><div class="sw__fill" style="background:#133F80"></div><span>900</span><span>#133F80</span></div></div></div><div><p class="spec-label" style="margin:0"><code style="background:none;padding:0">uxp-purple</code> 50 to 900</p><div class="sw-ramp" role="img" aria-label="Purple ramp from 50 to 900; 500 is the brand color"><div class="sw"><div class="sw__fill" style="background:#FAF0FE"></div><span>50</span><span>#FAF0FE</span></div><div class="sw"><div class="sw__fill" style="background:#F3DDFC"></div><span>100</span><span>#F3DDFC</span></div><div class="sw"><div class="sw__fill" style="background:#E8BDF8"></div><span>200</span><span>#E8BDF8</span></div><div class="sw"><div class="sw__fill" style="background:#DB98F2"></div><span>300</span><span>#DB98F2</span></div><div class="sw"><div class="sw__fill" style="background:#D06EEC"></div><span>400</span><span>#D06EEC</span></div><div class="sw sw--brand"><div class="sw__fill" style="background:#C648E6"></div><span>500 Brand</span><span>#C648E6</span></div><div class="sw"><div class="sw__fill" style="background:#A93CDB"></div><span>600</span><span>#A93CDB</span></div><div class="sw"><div class="sw__fill" style="background:#8A2FC4"></div><span>700</span><span>#8A2FC4</span></div><div class="sw"><div class="sw__fill" style="background:#6E26A3"></div><span>800</span><span>#6E26A3</span></div><div class="sw"><div class="sw__fill" style="background:#541F82"></div><span>900</span><span>#541F82</span></div></div></div><div><p class="spec-label" style="margin:0"><code style="background:none;padding:0">uxp-orange</code> 50 to 900</p><div class="sw-ramp" role="img" aria-label="Orange ramp from 50 to 900; 500 is the brand color"><div class="sw"><div class="sw__fill" style="background:#FFF5EB"></div><span>50</span><span>#FFF5EB</span></div><div class="sw"><div class="sw__fill" style="background:#FFE7CC"></div><span>100</span><span>#FFE7CC</span></div><div class="sw"><div class="sw__fill" style="background:#FFCF99"></div><span>200</span><span>#FFCF99</span></div><div class="sw"><div class="sw__fill" style="background:#FFB561"></div><span>300</span><span>#FFB561</span></div><div class="sw"><div class="sw__fill" style="background:#FFA03A"></div><span>400</span><span>#FFA03A</span></div><div class="sw sw--brand"><div class="sw__fill" style="background:#FF921E"></div><span>500 Brand</span><span>#FF921E</span></div><div class="sw"><div class="sw__fill" style="background:#E86A00"></div><span>600</span><span>#E86A00</span></div><div class="sw"><div class="sw__fill" style="background:#C9560A"></div><span>700</span><span>#C9560A</span></div><div class="sw"><div class="sw__fill" style="background:#A3440E"></div><span>800</span><span>#A3440E</span></div><div class="sw"><div class="sw__fill" style="background:#7E3511"></div><span>900</span><span>#7E3511</span></div></div></div></div><p class="spec__cap">500 is the brand color in each ramp. 600 carries the interface; the darker stops stay saturated instead of turning brown or navy.</p></div>
  <h4>Secondary colors</h4>
  <div class="spec"><div class="spec__body"><div class="sw-grid">
    <div class="sw-chip"><div class="sw-chip__fill" style="background:#FF9884"></div><div class="sw-chip__meta"><strong>coral-500</strong> <code>#FF9884</code></div></div>
    <div class="sw-chip"><div class="sw-chip__fill" style="background:#F882E0"></div><div class="sw-chip__meta"><strong>pink-500</strong> <code>#F882E0</code></div></div>
    <div class="sw-chip"><div class="sw-chip__fill" style="background:#AA75FF"></div><div class="sw-chip__meta"><strong>lpurple-500</strong> <code>#AA75FF</code></div></div>
  </div></div><p class="spec__cap">One secondary per composition, never as text, never as state, never next to purple-500.</p></div>
  <p class="cs-prose">The last rule exists because light purple and pink sit close to purple-500; used together they would read as three near-identical purples.</p>
  <h4>Neutrals</h4>
  <div class="spec"><div class="spec__body"><div class="sw-grid"><div class="sw-chip"><div class="sw-chip__fill" style="background:#FFFFFF;border-bottom:1px solid #EEEEF1"></div><div class="sw-chip__meta"><strong>ink-0</strong> <code>#FFFFFF</code><br>Base surface</div></div><div class="sw-chip"><div class="sw-chip__fill" style="background:#F7F7F9;border-bottom:1px solid #EEEEF1"></div><div class="sw-chip__meta"><strong>ink-50</strong> <code>#F7F7F9</code><br>Muted surfaces, footers, disabled fills</div></div><div class="sw-chip"><div class="sw-chip__fill" style="background:#EEEEF1;"></div><div class="sw-chip__meta"><strong>ink-100</strong> <code>#EEEEF1</code><br>Hairlines, chips, subtle fills</div></div><div class="sw-chip"><div class="sw-chip__fill" style="background:#D7D7DC;"></div><div class="sw-chip__meta"><strong>ink-200</strong> <code>#D7D7DC</code><br>Dividers on muted surfaces</div></div><div class="sw-chip"><div class="sw-chip__fill" style="background:#8E8E93;"></div><div class="sw-chip__meta"><strong>ink-400</strong> <code>#8E8E93</code><br>Edges of fields and controls</div></div><div class="sw-chip"><div class="sw-chip__fill" style="background:#6E6E73;"></div><div class="sw-chip__meta"><strong>ink-500</strong> <code>#6E6E73</code><br>Secondary text, placeholder, switch thumb</div></div><div class="sw-chip"><div class="sw-chip__fill" style="background:#48484D;"></div><div class="sw-chip__meta"><strong>ink-700</strong> <code>#48484D</code><br>Tooltips, neutral badge text</div></div><div class="sw-chip"><div class="sw-chip__fill" style="background:#1F1F22;"></div><div class="sw-chip__meta"><strong>ink-900</strong> <code>#1F1F22</code><br>Primary text</div></div></div></div><p class="spec__cap">Soft cool neutrals, from a near-white muted surface to near-black text. Fields use ink-200 for their edge and small controls use ink-300, both lighter than 3:1 by choice.</p></div>
  <p class="cs-prose">One alpha primitive completes the neutrals: <code>uxp-ink-900-a40</code>, for the modal backdrop. It is the only translucent value in the system, and the backdrop’s semantic token points at it like any other primitive, so no semantic token ever holds a raw value.</p>
  <h4>Status colors</h4>
  <p class="cs-prose">Status colors are kept separate from the brand palette, so a warning always looks like a warning rather than a brand moment. Warning is yellow rather than amber: amber sits 6° from brand orange, is lighter than it, and the two measure 1.1:1 against each other. Yellow sits 17° away, and every warning also carries a triangle.</p>
  <div class="cs-table-wrap" role="region" tabindex="0" aria-label="Status families"><table class="cs-table "><caption>Status families</caption><thead><tr><th scope="col">Status</th><th scope="col">Ramp</th><th scope="col">500</th><th scope="col">Text on white</th><th scope="col">Text on tint</th></tr></thead><tbody><tr><th scope="row">Success</th><td>green</td><td><code>#22B35E</code> fills, large marks</td><td><code>#15803D</code> 5.0:1</td><td><code>#15803D</code> on <code>#EAF8EF</code> 4.5:1</td></tr>
<tr><th scope="row">Error</th><td>red</td><td><code>#F04438</code> fills, large marks</td><td><code>#DC2626</code> 4.8:1</td><td><code>#B91C1C</code> on <code>#FEF1F1</code> 5.8:1</td></tr>
<tr><th scope="row">Warning</th><td>yellow</td><td><code>#F5B300</code> fills, large marks</td><td><code>#A36400</code> 4.7:1</td><td><code>#A36400</code> on <code>#FFFAEB</code> 4.5:1</td></tr>
<tr><th scope="row">Info</th><td>blue (shared)</td><td><code>#00A7FF</code> fills, large marks</td><td><code>#0068C8</code> 5.5:1</td><td><code>#0068C8</code> on <code>#EFF6FF</code> 5.0:1</td></tr>
</tbody></table></div>
  <h4>Semantic tokens</h4>
  <p class="cs-prose">Components and screens only consume semantics. When a primitive shifts, semantics keep their names and everything downstream survives.</p>
  <div class="cs-table-wrap" role="region" tabindex="0" aria-label="Semantic color tokens"><table class="cs-table "><caption>Semantic color tokens</caption><thead><tr><th scope="col">Token</th><th scope="col">Resolves to</th><th scope="col">Used for</th></tr></thead><tbody><tr><th scope="row"><code>uxp-color-text-primary</code></th><td>ink-900</td><td>Headings, body, values</td></tr>
<tr><th scope="row"><code>uxp-color-text-secondary</code></th><td>ink-500</td><td>Helper text, captions, metadata</td></tr>
<tr><th scope="row"><code>uxp-color-text-placeholder</code></th><td>ink-400</td><td>Example text in inputs (documented exception)</td></tr>
<tr><th scope="row"><code>uxp-color-text-disabled</code></th><td>ink-400 on <code>bg-disabled</code></td><td>Disabled controls</td></tr>
<tr><th scope="row"><code>uxp-color-text-link</code>, <code>-hover</code>, <code>-visited</code></th><td>blue-600, blue-700, purple-700</td><td>Links, always underlined</td></tr>
<tr><th scope="row"><code>uxp-color-text-link-on-tint</code></th><td>blue-700</td><td>Links on any 50 tint: banners, selected rows</td></tr>
<tr><th scope="row"><code>uxp-color-text-inverse</code></th><td>ink-0</td><td>Text on blue fills and tooltips</td></tr>
<tr><th scope="row"><code>uxp-color-bg-surface</code>, <code>-muted</code>, <code>-subtle</code></th><td>ink-0, ink-50, ink-100</td><td>Page, footers and wells, chips</td></tr>
<tr><th scope="row"><code>uxp-color-bg-selected</code></th><td>blue-600</td><td>Current page, selected segment, active suggestion</td></tr>
<tr><th scope="row"><code>uxp-color-bg-selected-subtle</code></th><td>blue-50</td><td>Selected rows, the current nav item, the bulk bar</td></tr>
<tr><th scope="row"><code>uxp-color-bg-inverse</code></th><td>ink-700</td><td>Tooltips</td></tr>
<tr><th scope="row"><code>uxp-color-bg-disabled</code></th><td>ink-50</td><td>Disabled control fills</td></tr>
<tr><th scope="row"><code>uxp-color-bg-overlay</code></th><td>ink-900-a40 (ink-900 at 40%)</td><td>Modal backdrop</td></tr>
<tr><th scope="row"><code>uxp-color-border-subtle</code></th><td>ink-100</td><td>Hairlines and dividers</td></tr>
<tr><th scope="row"><code>uxp-color-border-input</code>, <code>-hover</code></th><td>ink-200, ink-300</td><td>Field edges (documented exception)</td></tr>
<tr><th scope="row"><code>uxp-color-border-control</code>, <code>-hover</code></th><td>ink-300, ink-400</td><td>Checkbox, radio and switch edges (documented exception)</td></tr>
<tr><th scope="row"><code>uxp-color-border-strong</code></th><td>ink-900</td><td>Emphasis outlines</td></tr>
<tr><th scope="row"><code>uxp-color-action-primary</code>, <code>-hover</code></th><td>blue-600, blue-700</td><td>Primary buttons, checked controls, focus</td></tr>
<tr><th scope="row"><code>uxp-color-action-secondary-bg</code>, <code>-bg-hover</code></th><td>blue-50, blue-100</td><td>Secondary (tonal) button fill</td></tr>
<tr><th scope="row"><code>uxp-color-action-secondary-text</code></th><td>blue-700</td><td>Secondary button text, current nav item, bulk-bar actions</td></tr>
<tr><th scope="row"><code>uxp-color-action-on-primary</code></th><td>ink-0</td><td>Labels on action fills</td></tr>
<tr><th scope="row"><code>uxp-color-action-destructive</code>, <code>-hover</code></th><td>red-700, red-800</td><td>Destructive buttons and menu items</td></tr>
<tr><th scope="row"><code>uxp-color-control-thumb</code></th><td>ink-400</td><td>Switch thumb when off</td></tr>
<tr><th scope="row"><code>uxp-color-status-*-fg</code></th><td>status 700</td><td>Status text and icons on white</td></tr>
<tr><th scope="row"><code>uxp-color-status-*-tint</code></th><td>status 50</td><td>Banner and badge backgrounds</td></tr>
<tr><th scope="row"><code>uxp-color-status-*-on-tint</code></th><td>status 700, or red 800</td><td>Text and icons on a tint</td></tr>
<tr><th scope="row"><code>uxp-color-status-neutral-tint</code>, <code>-on-tint</code></th><td>ink-100, ink-700</td><td>Neutral badges</td></tr>
</tbody></table></div>
  <h4>Gradients</h4>
  <div class="spec"><div class="spec__body spec-stack">
    <div><div class="grad-bar" style="background:var(--uxp-gradient-brand)"></div><span class="spec-label"><code style="background:none;padding:0">uxp-gradient-brand</code>: 500 stops at 90°. The mark, full-bleed bands, decoration. Never behind text, never as text.</span></div>
    <div><div class="grad-bar" style="background:var(--uxp-gradient-text)"></div><span class="spec-label"><code style="background:none;padding:0">uxp-gradient-text</code>: blue-600, purple-500, orange-600. Display text only; no point along it drops below 3.2:1 on white.</span></div>
    <div><div class="grad-bar" style="background:var(--uxp-gradient-action)"></div><span class="spec-label"><code style="background:none;padding:0">uxp-gradient-action</code>: blue-600 to purple-600. The selected tab indicator, at 4.0:1 or more on white. Buttons stay flat.</span></div>
  </div></div>
  <h4>Contrast</h4>
  <p class="cs-prose">Every ratio is calculated from the hex values when the page is built, so this table can’t drift from the tokens.</p>
  <div class="cs-table-wrap" role="region" tabindex="0" aria-label="Every pair a component uses, computed from the token values when this page was built"><table class="cs-table "><caption>Every pair a component uses, computed from the token values when this page was built</caption><thead><tr><th scope="col">Pair</th><th scope="col">Used for</th><th scope="col" class="num">Ratio</th><th scope="col" class="num">WCAG 2.1 AA</th><th scope="col">Result</th></tr></thead><tbody><tr><th scope="row"><span style="display:inline-block;width:14px;height:14px;vertical-align:-2px;margin-inline-end:8px;border-radius:2px;background:#FFFFFF;border:4px solid #1F1F22" aria-hidden="true"></span>ink-900 on white</th><td>Headings, body, values</td><td class="num">16.4:1</td><td class="num">4.5:1</td><td><span class="cs-pass">Pass</span></td></tr>
<tr><th scope="row"><span style="display:inline-block;width:14px;height:14px;vertical-align:-2px;margin-inline-end:8px;border-radius:2px;background:#FFFFFF;border:4px solid #6E6E73" aria-hidden="true"></span>ink-500 on white</th><td>Secondary text and helper text</td><td class="num">5.0:1</td><td class="num">4.5:1</td><td><span class="cs-pass">Pass</span></td></tr>
<tr><th scope="row"><span style="display:inline-block;width:14px;height:14px;vertical-align:-2px;margin-inline-end:8px;border-radius:2px;background:#F7F7F9;border:4px solid #6E6E73" aria-hidden="true"></span>ink-500 on ink-50</th><td>Secondary text on muted surfaces</td><td class="num">4.7:1</td><td class="num">4.5:1</td><td><span class="cs-pass">Pass</span></td></tr>
<tr><th scope="row"><span style="display:inline-block;width:14px;height:14px;vertical-align:-2px;margin-inline-end:8px;border-radius:2px;background:#EFF6FF;border:4px solid #6E6E73" aria-hidden="true"></span>ink-500 on blue-50</th><td>Secondary text on selected rows</td><td class="num">4.6:1</td><td class="num">4.5:1</td><td><span class="cs-pass">Pass</span></td></tr>
<tr><th scope="row"><span style="display:inline-block;width:14px;height:14px;vertical-align:-2px;margin-inline-end:8px;border-radius:2px;background:#FFFFFF;border:4px solid #8E8E93" aria-hidden="true"></span>ink-400 on white</th><td>Placeholder text</td><td class="num">3.2:1</td><td class="num">4.5:1</td><td><a href="#exceptions">Exception</a></td></tr>
<tr><th scope="row"><span style="display:inline-block;width:14px;height:14px;vertical-align:-2px;margin-inline-end:8px;border-radius:2px;background:#FFFFFF;border:4px solid #0A7FEA" aria-hidden="true"></span>blue-600 on white</th><td>Links and tertiary buttons</td><td class="num">4.0:1</td><td class="num">4.5:1</td><td><a href="#exceptions">Exception</a></td></tr>
<tr><th scope="row"><span style="display:inline-block;width:14px;height:14px;vertical-align:-2px;margin-inline-end:8px;border-radius:2px;background:#F7F7F9;border:4px solid #0A7FEA" aria-hidden="true"></span>blue-600 on ink-50</th><td>Tertiary buttons and links on muted surfaces</td><td class="num">3.7:1</td><td class="num">4.5:1</td><td><a href="#exceptions">Exception</a></td></tr>
<tr><th scope="row"><span style="display:inline-block;width:14px;height:14px;vertical-align:-2px;margin-inline-end:8px;border-radius:2px;background:#0A7FEA;border:4px solid #FFFFFF" aria-hidden="true"></span>white on blue-600</th><td>Primary button, current page, selected segment</td><td class="num">4.0:1</td><td class="num">4.5:1</td><td><a href="#exceptions">Exception</a></td></tr>
<tr><th scope="row"><span style="display:inline-block;width:14px;height:14px;vertical-align:-2px;margin-inline-end:8px;border-radius:2px;background:#0068C8;border:4px solid #FFFFFF" aria-hidden="true"></span>white on blue-700</th><td>Primary button hover</td><td class="num">5.5:1</td><td class="num">4.5:1</td><td><span class="cs-pass">Pass</span></td></tr>
<tr><th scope="row"><span style="display:inline-block;width:14px;height:14px;vertical-align:-2px;margin-inline-end:8px;border-radius:2px;background:#FFFFFF;border:4px solid #0068C8" aria-hidden="true"></span>blue-700 on white</th><td>Link hover, info text</td><td class="num">5.5:1</td><td class="num">4.5:1</td><td><span class="cs-pass">Pass</span></td></tr>
<tr><th scope="row"><span style="display:inline-block;width:14px;height:14px;vertical-align:-2px;margin-inline-end:8px;border-radius:2px;background:#F7F7F9;border:4px solid #0068C8" aria-hidden="true"></span>blue-700 on ink-50</th><td>Tertiary and page-link hover on muted fills</td><td class="num">5.1:1</td><td class="num">4.5:1</td><td><span class="cs-pass">Pass</span></td></tr>
<tr><th scope="row"><span style="display:inline-block;width:14px;height:14px;vertical-align:-2px;margin-inline-end:8px;border-radius:2px;background:#FEF1F1;border:4px solid #0068C8" aria-hidden="true"></span>blue-700 on red-50</th><td>Links on tints (worst case across all 50 tints)</td><td class="num">4.9:1</td><td class="num">4.5:1</td><td><span class="cs-pass">Pass</span></td></tr>
<tr><th scope="row"><span style="display:inline-block;width:14px;height:14px;vertical-align:-2px;margin-inline-end:8px;border-radius:2px;background:#EFF6FF;border:4px solid #0068C8" aria-hidden="true"></span>blue-700 on blue-50</th><td>Secondary button, current nav item, info badge</td><td class="num">5.0:1</td><td class="num">4.5:1</td><td><span class="cs-pass">Pass</span></td></tr>
<tr><th scope="row"><span style="display:inline-block;width:14px;height:14px;vertical-align:-2px;margin-inline-end:8px;border-radius:2px;background:#DBEDFF;border:4px solid #0068C8" aria-hidden="true"></span>blue-700 on blue-100</th><td>Secondary button hover</td><td class="num">4.6:1</td><td class="num">4.5:1</td><td><span class="cs-pass">Pass</span></td></tr>
<tr><th scope="row"><span style="display:inline-block;width:14px;height:14px;vertical-align:-2px;margin-inline-end:8px;border-radius:2px;background:#FFFFFF;border:4px solid #8A2FC4" aria-hidden="true"></span>purple-700 on white</th><td>Visited links</td><td class="num">6.3:1</td><td class="num">4.5:1</td><td><span class="cs-pass">Pass</span></td></tr>
<tr><th scope="row"><span style="display:inline-block;width:14px;height:14px;vertical-align:-2px;margin-inline-end:8px;border-radius:2px;background:#DC2626;border:4px solid #FFFFFF" aria-hidden="true"></span>white on red-700</th><td>Destructive button</td><td class="num">4.8:1</td><td class="num">4.5:1</td><td><span class="cs-pass">Pass</span></td></tr>
<tr><th scope="row"><span style="display:inline-block;width:14px;height:14px;vertical-align:-2px;margin-inline-end:8px;border-radius:2px;background:#FFFFFF;border:4px solid #DC2626" aria-hidden="true"></span>red-700 on white</th><td>Error text and icons, destructive menu items</td><td class="num">4.8:1</td><td class="num">4.5:1</td><td><span class="cs-pass">Pass</span></td></tr>
<tr><th scope="row"><span style="display:inline-block;width:14px;height:14px;vertical-align:-2px;margin-inline-end:8px;border-radius:2px;background:#48484D;border:4px solid #FFFFFF" aria-hidden="true"></span>white on ink-700</th><td>Tooltips</td><td class="num">9.0:1</td><td class="num">4.5:1</td><td><span class="cs-pass">Pass</span></td></tr>
<tr><th scope="row"><span style="display:inline-block;width:14px;height:14px;vertical-align:-2px;margin-inline-end:8px;border-radius:2px;background:#EEEEF1;border:4px solid #1F1F22" aria-hidden="true"></span>ink-900 on ink-100</th><td>Filter chips</td><td class="num">14.1:1</td><td class="num">4.5:1</td><td><span class="cs-pass">Pass</span></td></tr>
<tr><th scope="row"><span style="display:inline-block;width:14px;height:14px;vertical-align:-2px;margin-inline-end:8px;border-radius:2px;background:#FFFFFF;border:4px solid #15803D" aria-hidden="true"></span>green-700 on white</th><td>Success text and icons</td><td class="num">5.0:1</td><td class="num">4.5:1</td><td><span class="cs-pass">Pass</span></td></tr>
<tr><th scope="row"><span style="display:inline-block;width:14px;height:14px;vertical-align:-2px;margin-inline-end:8px;border-radius:2px;background:#FFFFFF;border:4px solid #A36400" aria-hidden="true"></span>yellow-700 on white</th><td>Warning text and icons</td><td class="num">4.7:1</td><td class="num">4.5:1</td><td><span class="cs-pass">Pass</span></td></tr>
<tr><th scope="row"><span style="display:inline-block;width:14px;height:14px;vertical-align:-2px;margin-inline-end:8px;border-radius:2px;background:#EAF8EF;border:4px solid #15803D" aria-hidden="true"></span>green-700 on green-50</th><td>Success badge and banner icon</td><td class="num">4.5:1</td><td class="num">4.5:1</td><td><span class="cs-pass">Pass</span></td></tr>
<tr><th scope="row"><span style="display:inline-block;width:14px;height:14px;vertical-align:-2px;margin-inline-end:8px;border-radius:2px;background:#FEF1F1;border:4px solid #B91C1C" aria-hidden="true"></span>red-800 on red-50</th><td>Error badge and banner icon</td><td class="num">5.8:1</td><td class="num">4.5:1</td><td><span class="cs-pass">Pass</span></td></tr>
<tr><th scope="row"><span style="display:inline-block;width:14px;height:14px;vertical-align:-2px;margin-inline-end:8px;border-radius:2px;background:#FFFAEB;border:4px solid #A36400" aria-hidden="true"></span>yellow-700 on yellow-50</th><td>Warning badge and banner icon</td><td class="num">4.5:1</td><td class="num">4.5:1</td><td><span class="cs-pass">Pass</span></td></tr>
<tr><th scope="row"><span style="display:inline-block;width:14px;height:14px;vertical-align:-2px;margin-inline-end:8px;border-radius:2px;background:#EEEEF1;border:4px solid #48484D" aria-hidden="true"></span>ink-700 on ink-100</th><td>Neutral badge</td><td class="num">7.8:1</td><td class="num">4.5:1</td><td><span class="cs-pass">Pass</span></td></tr>
<tr><th scope="row"><span style="display:inline-block;width:14px;height:14px;vertical-align:-2px;margin-inline-end:8px;border-radius:2px;background:#F5B300;border:4px solid #1F1F22" aria-hidden="true"></span>ink-900 on yellow-500</th><td>Text on a warning fill</td><td class="num">8.8:1</td><td class="num">4.5:1</td><td><span class="cs-pass">Pass</span></td></tr>
<tr><th scope="row"><span style="display:inline-block;width:14px;height:14px;vertical-align:-2px;margin-inline-end:8px;border-radius:2px;background:#FFFFFF;border:4px solid #0A7FEA" aria-hidden="true"></span>blue-600 on white</th><td>Display text, gradient-text start</td><td class="num">4.0:1</td><td class="num">3.0:1</td><td><span class="cs-pass">Pass</span></td></tr>
<tr><th scope="row"><span style="display:inline-block;width:14px;height:14px;vertical-align:-2px;margin-inline-end:8px;border-radius:2px;background:#FFFFFF;border:4px solid #C648E6" aria-hidden="true"></span>purple-500 on white</th><td>Display text, gradient-text middle</td><td class="num">3.8:1</td><td class="num">3.0:1</td><td><span class="cs-pass">Pass</span></td></tr>
<tr><th scope="row"><span style="display:inline-block;width:14px;height:14px;vertical-align:-2px;margin-inline-end:8px;border-radius:2px;background:#FFFFFF;border:4px solid #E86A00" aria-hidden="true"></span>orange-600 on white</th><td>Display text, gradient-text end</td><td class="num">3.2:1</td><td class="num">3.0:1</td><td><span class="cs-pass">Pass</span></td></tr>
<tr><th scope="row"><span style="display:inline-block;width:14px;height:14px;vertical-align:-2px;margin-inline-end:8px;border-radius:2px;background:#FFFFFF;border:4px solid #0A7FEA" aria-hidden="true"></span>blue-600 on white</th><td>Focus ring, checked controls, current nav bar</td><td class="num">4.0:1</td><td class="num">3.0:1</td><td><span class="cs-pass">Pass</span></td></tr>
<tr><th scope="row"><span style="display:inline-block;width:14px;height:14px;vertical-align:-2px;margin-inline-end:8px;border-radius:2px;background:#DBEDFF;border:4px solid #0A7FEA" aria-hidden="true"></span>blue-600 on blue-100</th><td>Field focus edge against its halo</td><td class="num">3.3:1</td><td class="num">3.0:1</td><td><span class="cs-pass">Pass</span></td></tr>
<tr><th scope="row"><span style="display:inline-block;width:14px;height:14px;vertical-align:-2px;margin-inline-end:8px;border-radius:2px;background:#FFFFFF;border:4px solid #8E8E93" aria-hidden="true"></span>ink-400 on white</th><td>Switch thumb when off</td><td class="num">3.2:1</td><td class="num">3.0:1</td><td><span class="cs-pass">Pass</span></td></tr>
<tr><th scope="row"><span style="display:inline-block;width:14px;height:14px;vertical-align:-2px;margin-inline-end:8px;border-radius:2px;background:#FFFFFF;border:4px solid #D7D7DC" aria-hidden="true"></span>ink-200 on white</th><td>Field edges</td><td class="num">1.4:1</td><td class="num">3.0:1</td><td><a href="#exceptions">Exception</a></td></tr>
<tr><th scope="row"><span style="display:inline-block;width:14px;height:14px;vertical-align:-2px;margin-inline-end:8px;border-radius:2px;background:#FFFFFF;border:4px solid #C2C2C7" aria-hidden="true"></span>ink-300 on white</th><td>Checkbox, radio and switch edges</td><td class="num">1.7:1</td><td class="num">3.0:1</td><td><a href="#exceptions">Exception</a></td></tr>
<tr><th scope="row"><span style="display:inline-block;width:14px;height:14px;vertical-align:-2px;margin-inline-end:8px;border-radius:2px;background:#FFFFFF;border:4px solid #00A7FF" aria-hidden="true"></span>blue-500 on white</th><td>Brand mark and decoration only</td><td class="num">2.6:1</td><td class="num">Logotype</td><td><span>Exempt</span></td></tr>
<tr><th scope="row"><span style="display:inline-block;width:14px;height:14px;vertical-align:-2px;margin-inline-end:8px;border-radius:2px;background:#FFFFFF;border:4px solid #FF921E" aria-hidden="true"></span>orange-500 on white</th><td>Brand mark and decoration only</td><td class="num">2.2:1</td><td class="num">Logotype</td><td><span>Exempt</span></td></tr>
</tbody></table></div>
</div>
<div class="cs-sec" id="f-type">
  <p class="cmp__group">Foundation 4 of 11</p>
  <h3 class="uxp-text-heading-2">Typography</h3>
  
  <p class="cs-prose">Three typefaces, each with one job. Satoshi does the talking, Inter does the working, JetBrains Mono does the labeling. Two faces would leave eyebrows, tokens and data nowhere to go but italics or all caps. Four would make someone choose between faces for buttons, and the system would lose its authority.</p>
  <div class="spec"><div class="spec__body"><div class="type-faces">
    <div><div class="aa-glyph" style="font-family:var(--uxp-font-display);font-weight:700" aria-hidden="true">Aa</div><strong>Satoshi</strong><p>Display and headings. Loaded cuts: 500, 700, 900.</p></div>
    <div><div class="aa-glyph" style="font-family:var(--uxp-font-body);font-weight:500" aria-hidden="true">Aa</div><strong>Inter</strong><p>Body and every piece of interface text. Loaded: 400, 500, 600, 700.</p></div>
    <div><div class="aa-glyph" style="font-family:var(--uxp-font-mono);font-weight:500" aria-hidden="true">Aa</div><strong>JetBrains Mono</strong><p>Eyebrows, token names, data. Loaded: 400, 500.</p></div>
  </div></div><p class="spec__cap">Nine font files. Every loaded weight is used by at least one text style, and nothing is synthesized.</p></div>
  <h4>Type scale</h4>
  <div class="cs-table-wrap" role="region" tabindex="0" aria-label="Orbit text styles, all prefixed uxp-text-"><table class="cs-table "><caption>Orbit text styles, all prefixed uxp-text-</caption><thead><tr><th scope="col">Style</th><th scope="col">Face</th><th scope="col">Weight</th><th scope="col">Size / line height (px)</th><th scope="col">Tracking</th><th scope="col">Role</th></tr></thead><tbody><tr><th scope="row">display-xl</th><td>Satoshi</td><td>700</td><td>60 to 132 fluid / 0.98</td><td>-0.025em</td><td>Cover title</td></tr>
<tr><th scope="row">display-lg</th><td>Satoshi</td><td>700</td><td>48 to 72 fluid / 1.0</td><td>-0.02em</td><td>Section title</td></tr>
<tr><th scope="row">heading-1</th><td>Satoshi</td><td>700</td><td>36 to 48 / 1.1</td><td>-0.02em</td><td>Page heading</td></tr>
<tr><th scope="row">heading-2</th><td>Satoshi</td><td>700</td><td>28 to 36 / 1.15</td><td>-0.015em</td><td>Section heading</td></tr>
<tr><th scope="row">heading-3</th><td>Satoshi</td><td>500</td><td>22 to 28 / 1.2</td><td>-0.01em</td><td>Sub-section, card title</td></tr>
<tr><th scope="row">heading-4</th><td>Inter</td><td>700</td><td>20 / 1.3</td><td>-0.01em</td><td>Component heading</td></tr>
<tr><th scope="row">heading-5</th><td>Inter</td><td>600</td><td>18 / 1.35</td><td>-0.01em</td><td>Group heading</td></tr>
<tr><th scope="row">heading-6</th><td>Inter</td><td>600</td><td>16 / 1.4</td><td>0</td><td>Inline heading</td></tr>
<tr><th scope="row">body-lg</th><td>Inter</td><td>400</td><td>18 / 1.55</td><td>0</td><td>Lead paragraph</td></tr>
<tr><th scope="row">body-md</th><td>Inter</td><td>400</td><td>16 / 1.6</td><td>0</td><td>Body</td></tr>
<tr><th scope="row">body-sm</th><td>Inter</td><td>400</td><td>14 / 1.55</td><td>0</td><td>Helper, error, caption text</td></tr>
<tr><th scope="row">caption</th><td>Inter</td><td>500</td><td>12 / 1.5</td><td>0.01em</td><td>Metadata</td></tr>
<tr><th scope="row">overline</th><td>JetBrains Mono</td><td>500</td><td>12 / 1.4</td><td>0.04em</td><td>Eyebrows, sentence case</td></tr>
<tr><th scope="row">ui-button-sm</th><td>Inter</td><td>600</td><td>13 / 16</td><td>0</td><td>Small buttons</td></tr>
<tr><th scope="row">ui-button-md</th><td>Inter</td><td>600</td><td>15 / 20</td><td>0</td><td>Buttons, tabs</td></tr>
<tr><th scope="row">ui-button-lg</th><td>Inter</td><td>600</td><td>17 / 24</td><td>0</td><td>Large buttons</td></tr>
<tr><th scope="row">ui-label</th><td>Inter</td><td>500</td><td>14 / 20</td><td>0</td><td>Field and control labels</td></tr>
<tr><th scope="row">ui-input</th><td>Inter</td><td>400</td><td>16 / 24</td><td>0</td><td>Typed values</td></tr>
<tr><th scope="row">mono-data</th><td>JetBrains Mono</td><td>400</td><td>13 / 20, tabular</td><td>0</td><td>Numbers, tokens, code in tables</td></tr>
</tbody></table></div>
  <div class="cs-note"><p><strong>UI text styles.</strong> Interface text needs sizes editorial text doesn’t: a 15px button label, a 14px field label, a 16px input. Rather than approximate them with body styles, they’re tokens, so every component uses a size the scale actually contains. Inputs are 16px, which stops iOS Safari zooming in on focus. Labels are 14px, because labels are the most-read text on a form.</p></div>
  <h4>Usage</h4>
  <div class="cs-prose">
    <p><strong>Display</strong> once per page. <strong>Heading 1</strong> once per page. <strong>Headings 2 and 3</strong> structure sections. <strong>Headings 4 to 6</strong> switch to Inter, which makes the hand-off from editorial to interface visible. <strong>Body-lg</strong> is for lead paragraphs only; it gets tiring after two. <strong>Overline</strong> is mono in sentence case and always sits above something: all caps at small sizes is the least legible text a system can ship.</p>
  </div>
  <h4>Gradient title</h4>
  <div class="spec"><div class="spec__body"><p class="uxp-text-display-lg" style="margin:0"><span class="uxp-text-style-title-gradient gt-css">design system.</span><svg class="gt-svg" aria-hidden="true" focusable="false"><defs><linearGradient id="gt-type" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#008AD1"/><stop offset="0.5" stop-color="#C648E6"/><stop offset="1" stop-color="#C86E00"/></linearGradient></defs><text x="0" y="0.82em" fill="url(#gt-type)">design system.</text></svg></p></div><p class="spec__cap"><code style="background:none;padding:0">uxp-text-style-title-gradient</code>: Satoshi 900, uxp-gradient-text, background-clipped, with a solid ink-900 fallback and a forced-colors fallback.</p></div>
  <p class="cs-prose">The title gradient is built from 600 stops, not the 500 brand stops. Large text still needs 3:1, and the 500 blue and orange measure 2.6:1 and 2.2:1 on white.</p>
</div>
<div class="cs-sec" id="f-space">
  <p class="cmp__group">Foundation 5 of 11</p>
  <h3 class="uxp-text-heading-2">Spacing</h3>
  
  <p class="cs-prose">A 4px base. Eleven steps for components and three for section rhythm. Every padding, margin and gap uses a step from the scale, so designers choose a step rather than a pixel value.</p>
  <div class="cs-table-wrap" role="region" tabindex="0" aria-label="Spacing scale"><table class="cs-table "><caption>Spacing scale</caption><thead><tr><th scope="col">Token</th><th scope="col" class="num">px</th><th scope="col">Scale</th></tr></thead><tbody><tr><th scope="row"><code>uxp-space-1</code></th><td class="num">4</td><td><div class="space-bar" style="width:4px" aria-hidden="true"></div></td></tr>
<tr><th scope="row"><code>uxp-space-2</code></th><td class="num">8</td><td><div class="space-bar" style="width:8px" aria-hidden="true"></div></td></tr>
<tr><th scope="row"><code>uxp-space-3</code></th><td class="num">12</td><td><div class="space-bar" style="width:12px" aria-hidden="true"></div></td></tr>
<tr><th scope="row"><code>uxp-space-4</code></th><td class="num">16</td><td><div class="space-bar" style="width:16px" aria-hidden="true"></div></td></tr>
<tr><th scope="row"><code>uxp-space-5</code></th><td class="num">20</td><td><div class="space-bar" style="width:20px" aria-hidden="true"></div></td></tr>
<tr><th scope="row"><code>uxp-space-6</code></th><td class="num">24</td><td><div class="space-bar" style="width:24px" aria-hidden="true"></div></td></tr>
<tr><th scope="row"><code>uxp-space-8</code></th><td class="num">32</td><td><div class="space-bar" style="width:32px" aria-hidden="true"></div></td></tr>
<tr><th scope="row"><code>uxp-space-10</code></th><td class="num">40</td><td><div class="space-bar" style="width:40px" aria-hidden="true"></div></td></tr>
<tr><th scope="row"><code>uxp-space-12</code></th><td class="num">48</td><td><div class="space-bar" style="width:48px" aria-hidden="true"></div></td></tr>
<tr><th scope="row"><code>uxp-space-16</code></th><td class="num">64</td><td><div class="space-bar" style="width:64px" aria-hidden="true"></div></td></tr>
<tr><th scope="row"><code>uxp-space-20</code></th><td class="num">80</td><td><div class="space-bar" style="width:80px" aria-hidden="true"></div></td></tr>
<tr><th scope="row"><code>uxp-space-section-sm</code></th><td class="num">64</td><td>Alias of space-16. Between sub-blocks inside a section.</td></tr>
<tr><th scope="row"><code>uxp-space-section-md</code></th><td class="num">96</td><td>Between sections on mobile and tablet.</td></tr>
<tr><th scope="row"><code>uxp-space-section-lg</code></th><td class="num">128</td><td>Between sections on desktop.</td></tr>
</tbody></table></div>
  <h4>Usage</h4>
  <div class="cs-prose"><p><strong>Padding</strong> inside containers: the step that lets content breathe without crowding the border. <strong>Margin</strong> between flow elements: the smallest step that still separates them. <strong>Gap</strong> in flex and grid groups: usually the same step as the padding around the group.</p></div>
  <div class="cs-table-wrap" role="region" tabindex="0" aria-label="Component spacing"><table class="cs-table "><caption>Component spacing</caption><thead><tr><th scope="col">Where</th><th scope="col">Rule</th></tr></thead><tbody><tr><th scope="row">Button padding</th><td>sm space-2 by space-4, md space-3 by space-6, lg space-3 by space-8</td></tr>
<tr><th scope="row">Card padding</th><td>space-6 standard, space-8 feature (stat, quote)</td></tr>
<tr><th scope="row">Field stacking</th><td>space-2 between label, input and helper; space-6 between fields</td></tr>
<tr><th scope="row">Modal</th><td>space-6 around header and body, space-4 by space-6 in the footer</td></tr>
<tr><th scope="row">Menu and list items</th><td>space-2 by space-3 inside a 44px row</td></tr>
<tr><th scope="row">Section rhythm</th><td>section-md on tablet and mobile, section-lg on desktop</td></tr>
</tbody></table></div>
</div>
<div class="cs-sec" id="f-layout">
  <p class="cmp__group">Foundation 6 of 11</p>
  <h3 class="uxp-text-heading-2">Layout and direction</h3>
  
  <p class="cs-prose">A 12-column grid that becomes 8 on tablet and 4 on mobile. Same logic on every surface, 1280px maximum content width. Past 1440px the page stops growing and the margins absorb the rest.</p>
  <div class="cs-table-wrap" role="region" tabindex="0" aria-label="Breakpoints"><table class="cs-table "><caption>Breakpoints</caption><thead><tr><th scope="col">Token</th><th scope="col">Range (px)</th><th scope="col" class="num">Columns</th><th scope="col" class="num">Margin</th><th scope="col" class="num">Gutter</th></tr></thead><tbody><tr><th scope="row"><code>uxp-bp-xs</code></th><td>0 to 479</td><td class="num">4</td><td class="num">16</td><td class="num">12</td></tr>
<tr><th scope="row"><code>uxp-bp-sm</code></th><td>480 to 767</td><td class="num">4</td><td class="num">24</td><td class="num">16</td></tr>
<tr><th scope="row"><code>uxp-bp-md</code></th><td>768 to 1023</td><td class="num">8</td><td class="num">32</td><td class="num">20</td></tr>
<tr><th scope="row"><code>uxp-bp-lg</code></th><td>1024 to 1439</td><td class="num">12</td><td class="num">64</td><td class="num">24</td></tr>
<tr><th scope="row"><code>uxp-bp-xl</code></th><td>1440 and up</td><td class="num">12</td><td class="num">auto</td><td class="num">24</td></tr>
</tbody></table></div>
  <div class="spec"><div class="spec__body"><div class="grid-spec" aria-hidden="true"><span>01</span><span>02</span><span>03</span><span>04</span><span>05</span><span>06</span><span>07</span><span>08</span><span>09</span><span>10</span><span>11</span><span>12</span></div></div><p class="spec__cap">The grid at lg: 12 columns, 24px gutters, 64px margins. At mobile widths, 4.</p></div>
  <h4>Grid exceptions</h4>
  <p class="cs-prose">Three sanctioned cases: full-bleed brand bands, display type that extends into the outer margin at lg and up, and full-bleed photography. Anything else stays on the grid.</p>
  <h4>Reflow</h4>
  <p class="cs-prose">Every layout works at 320px wide (400% zoom on a 1280px screen) without the page scrolling sideways. The only things allowed to scroll horizontally are two-dimensional content inside their own region: data tables and code.</p>
  <h4>Right-to-left</h4>
  <p class="cs-prose">The Language switcher offers Arabic, so direction is a foundation, not a component detail. Layout uses logical properties only (<code>margin-inline-start</code>, never <code>margin-left</code>). Directional icons mirror: arrows, left and right chevrons, send. Checkmarks, clocks, media controls and anything depicting a real object never mirror. Numbers and code stay left to right inside right-to-left text.</p>
</div>
<div class="cs-sec" id="f-shape">
  <p class="cmp__group">Foundation 7 of 11</p>
  <h3 class="uxp-text-heading-2">Shape</h3>
  
  <p class="cs-prose">One firm radius for every control and container: 4px. Inner marks inside a control use 2px, and full rounding is kept for shapes that are round by nature. Hierarchy comes from elevation and weight, not from corners.</p>
  <div class="cs-table-wrap" role="region" tabindex="0" aria-label="Radius and border tokens"><table class="cs-table "><caption>Radius and border tokens</caption><thead><tr><th scope="col">Token</th><th scope="col" class="num">Value</th><th scope="col">Used for</th></tr></thead><tbody><tr><th scope="row"><code>uxp-radius-none</code></th><td class="num">0</td><td>Full-bleed bands, tables inside scroll regions</td></tr>
<tr><th scope="row"><code>uxp-radius-xs</code></th><td class="num">2px</td><td>Marks inside controls: menu and list rows, the selected segment, keyboard hints</td></tr>
<tr><th scope="row"><code>uxp-radius-sm</code></th><td class="num">4px</td><td>Everything else: buttons, fields, checkboxes, badges, chips, cards, menus, modals, toasts, banners</td></tr>
<tr><th scope="row"><code>uxp-radius-full</code></th><td class="num">999px</td><td>Switch tracks</td></tr>
<tr><th scope="row"><code>uxp-border-1</code></th><td class="num">1px</td><td>Hairlines, input edges, outlines</td></tr>
<tr><th scope="row"><code>uxp-border-2</code></th><td class="num">2px</td><td>Focus rings, checkbox, radio and switch edges, error state</td></tr>
<tr><th scope="row"><code>uxp-border-3</code></th><td class="num">3px</td><td>Selected tab indicator, current nav bar</td></tr>
</tbody></table></div>
</div>
<div class="cs-sec" id="f-elevation">
  <p class="cmp__group">Foundation 8 of 11</p>
  <h3 class="uxp-text-heading-2">Elevation and layers</h3>
  
  <p class="cs-prose">Five elevations, each describing how a surface relates to the page. Used sparingly, so elevation keeps its meaning.</p>
  <div class="spec"><div class="spec__body spec__body--muted"><div class="elev-row">
    <div style="box-shadow:var(--uxp-elevation-0)">elevation-0<br>Flat</div><div style="box-shadow:var(--uxp-elevation-1)">elevation-1<br>Resting</div><div style="box-shadow:var(--uxp-elevation-2)">elevation-2<br>Hover</div><div style="box-shadow:var(--uxp-elevation-3)">elevation-3<br>Floating</div><div style="box-shadow:var(--uxp-elevation-4)">elevation-4<br>Modal</div>
  </div></div></div>
  <p class="cs-prose">Default is elevation-0 with a hairline. Elevation-1 is for surfaces that are genuinely interactive. Elevation-3 is for things that float: menus, the language list, search suggestions, tooltips. Shadows aren’t used on dark backgrounds or gradient bands, and cards that can’t be clicked don’t lift on hover. Shadows also disappear in forced-colors mode, so every floating surface carries a 1px transparent border that becomes visible there.</p>
  <div class="cs-table-wrap" role="region" tabindex="0" aria-label="Layer tokens (z-index)"><table class="cs-table "><caption>Layer tokens (z-index)</caption><thead><tr><th scope="col">Token</th><th scope="col" class="num">Value</th><th scope="col">Used for</th></tr></thead><tbody><tr><th scope="row"><code>uxp-layer-base</code></th><td class="num">0</td><td>Page content</td></tr>
<tr><th scope="row"><code>uxp-layer-sticky</code></th><td class="num">100</td><td>Sticky headers, sticky table columns</td></tr>
<tr><th scope="row"><code>uxp-layer-dropdown</code></th><td class="num">200</td><td>Menus, language list, search suggestions</td></tr>
<tr><th scope="row"><code>uxp-layer-overlay</code></th><td class="num">300</td><td>Non-modal overlays</td></tr>
<tr><th scope="row"><code>uxp-layer-modal</code></th><td class="num">400</td><td>Dialogs (native dialogs also use the top layer)</td></tr>
<tr><th scope="row"><code>uxp-layer-toast</code></th><td class="num">500</td><td>Toast region</td></tr>
<tr><th scope="row"><code>uxp-layer-tooltip</code></th><td class="num">600</td><td>Tooltips, always on top</td></tr>
</tbody></table></div>
</div>
<div class="cs-sec" id="f-motion">
  <p class="cmp__group">Foundation 9 of 11</p>
  <h3 class="uxp-text-heading-2">Motion</h3>
  
  <p class="cs-prose">Motion in Orbit answers something a person did: opening, expanding, confirming, switching. Nothing moves on its own.</p>
  <div class="cs-table-wrap" role="region" tabindex="0" aria-label="Motion tokens"><table class="cs-table "><caption>Motion tokens</caption><thead><tr><th scope="col">Token</th><th scope="col">Value</th><th scope="col">Used for</th></tr></thead><tbody><tr><th scope="row"><code>uxp-motion-duration-xs</code></th><td>100ms</td><td>Opacity changes; the only duration kept under reduced motion</td></tr>
<tr><th scope="row"><code>uxp-motion-duration-sm</code></th><td>160ms</td><td>Hover, color and switch transitions</td></tr>
<tr><th scope="row"><code>uxp-motion-duration-md</code></th><td>280ms</td><td>Accordion, modal, toast, primary hover crossfade</td></tr>
<tr><th scope="row"><code>uxp-motion-duration-lg</code></th><td>400ms</td><td>Large surfaces entering</td></tr>
<tr><th scope="row"><code>uxp-motion-ease-standard</code></th><td>cubic-bezier(0.2, 0, 0, 1)</td><td>Most transitions</td></tr>
<tr><th scope="row"><code>uxp-motion-ease-out-expo</code></th><td>cubic-bezier(0.22, 1, 0.36, 1)</td><td>Things arriving: panels opening, toasts entering</td></tr>
<tr><th scope="row"><code>uxp-motion-ease-in</code></th><td>cubic-bezier(0.4, 0, 1, 1)</td><td>Things leaving</td></tr>
</tbody></table></div>
  <p class="cs-prose">Under <code>prefers-reduced-motion</code> the sm, md and lg durations drop to zero, so changes are instant; xs survives for short fades that don’t move anything. Spinners slow down rather than stop, so loading is still visible.</p>
</div>
<div class="cs-sec" id="f-icons">
  <p class="cmp__group">Foundation 10 of 11</p>
  <h3 class="uxp-text-heading-2">Icons</h3>
  
  <p class="cs-prose">One set, drawn on a 24-unit grid with a 1.5px stroke and 2 units of inner padding. Functional, never decorative. Strokes stay 1.5px at every size (non-scaling stroke), so a 16px icon doesn’t thin out to a hairline.</p>
  <div class="spec"><div class="spec__body"><div class="spec-row" style="gap:32px;align-items:end"><figure style="margin:0;display:grid;justify-items:center;gap:6px"><svg class="o-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="11" cy="11" r="6"/><path d="m20 20-4.5-4.5"/></svg><figcaption class="spec-label" style="margin:0">16</figcaption></figure><figure style="margin:0;display:grid;justify-items:center;gap:6px"><svg class="o-icon o-icon--20" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="11" cy="11" r="6"/><path d="m20 20-4.5-4.5"/></svg><figcaption class="spec-label" style="margin:0">20</figcaption></figure><figure style="margin:0;display:grid;justify-items:center;gap:6px"><svg class="o-icon o-icon--24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="11" cy="11" r="6"/><path d="m20 20-4.5-4.5"/></svg><figcaption class="spec-label" style="margin:0">24</figcaption></figure><figure style="margin:0;display:grid;justify-items:center;gap:6px"><svg class="o-icon o-icon--32" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="11" cy="11" r="6"/><path d="m20 20-4.5-4.5"/></svg><figcaption class="spec-label" style="margin:0">32</figcaption></figure><figure style="margin:0;display:grid;justify-items:center;gap:6px"><svg class="o-icon o-icon--48" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="11" cy="11" r="6"/><path d="m20 20-4.5-4.5"/></svg><figcaption class="spec-label" style="margin:0">48</figcaption></figure></div></div><p class="spec__cap">Sizes: 16 inline, 20 UI, 24 navigation, 32 emphasis, 48 feature.</p></div>
  <h4>Accessibility</h4>
  <p class="cs-prose">An icon next to a text label is decorative: <code>aria-hidden="true"</code> and <code>focusable="false"</code>. An icon that is the only label of a control is named on the control (“Close”), not on the icon. A standalone icon that conveys information by itself gets <code>role="img"</code> and a label. Status icons are filled and have distinct shapes, so they read at a glance and never rely on hue.</p>
  <h4>Naming</h4>
  <p class="cs-prose"><code>icon-{noun}</code> for outline, <code>icon-{noun}-filled</code> for filled. Direction is part of the noun: <code>icon-arrow-right</code>. A glyph enters the library after three shipped uses, the same entry criteria as components.</p>
  <div class="spec"><div class="spec__body"><h5 style="margin:20px 0 10px;font:600 0.875rem/1.4 var(--uxp-font-body)">Navigation (8)</h5><div class="icon-grid"><figure><svg class="o-icon o-icon--24 o-icon--mirror" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M19 12H5"/><path d="m11 6-6 6 6 6"/></svg><figcaption>icon-arrow-left</figcaption></figure><figure><svg class="o-icon o-icon--24 o-icon--mirror" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg><figcaption>icon-arrow-right</figcaption></figure><figure><svg class="o-icon o-icon--24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m6 15 6-6 6 6"/></svg><figcaption>icon-chevron-up</figcaption></figure><figure><svg class="o-icon o-icon--24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m6 9 6 6 6-6"/></svg><figcaption>icon-chevron-down</figcaption></figure><figure><svg class="o-icon o-icon--24 o-icon--mirror" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m15 6-6 6 6 6"/></svg><figcaption>icon-chevron-left</figcaption></figure><figure><svg class="o-icon o-icon--24 o-icon--mirror" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m9 6 6 6-6 6"/></svg><figcaption>icon-chevron-right</figcaption></figure><figure><svg class="o-icon o-icon--24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></svg><figcaption>icon-menu</figcaption></figure><figure><svg class="o-icon o-icon--24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m6 6 12 12"/><path d="M18 6 6 18"/></svg><figcaption>icon-close</figcaption></figure></div><h5 style="margin:20px 0 10px;font:600 0.875rem/1.4 var(--uxp-font-body)">Action (9)</h5><div class="icon-grid"><figure><svg class="o-icon o-icon--24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="11" cy="11" r="6"/><path d="m20 20-4.5-4.5"/></svg><figcaption>icon-search</figcaption></figure><figure><svg class="o-icon o-icon--24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 4v11"/><path d="m7 10 5 5 5-5"/><path d="M5 20h14"/></svg><figcaption>icon-download</figcaption></figure><figure><svg class="o-icon o-icon--24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 20V9"/><path d="m7 14 5-5 5 5"/><path d="M5 4h14"/></svg><figcaption>icon-upload</figcaption></figure><figure><svg class="o-icon o-icon--24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="m8.2 10.8 7.6-4.4"/><path d="m8.2 13.2 7.6 4.4"/></svg><figcaption>icon-share</figcaption></figure><figure><svg class="o-icon o-icon--24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 20h4L18.5 9.5a2.1 2.1 0 0 0-3-3L5 17v3z"/><path d="m13.5 8.5 3 3"/></svg><figcaption>icon-edit</figcaption></figure><figure><svg class="o-icon o-icon--24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="9" y="9" width="11" height="11" rx="1.5"/><path d="M15 9V5.5A1.5 1.5 0 0 0 13.5 4h-8A1.5 1.5 0 0 0 4 5.5v8A1.5 1.5 0 0 0 5.5 15H9"/></svg><figcaption>icon-copy</figcaption></figure><figure><svg class="o-icon o-icon--24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 5v14"/><path d="M5 12h14"/></svg><figcaption>icon-plus</figcaption></figure><figure><svg class="o-icon o-icon--24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 7h16"/><path d="M9 7V4.5h6V7"/><path d="m6.5 7 1 13h9l1-13"/><path d="M10 11v6"/><path d="M14 11v6"/></svg><figcaption>icon-trash</figcaption></figure><figure><svg class="o-icon o-icon--24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M14 4h6v6"/><path d="m20 4-9 9"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg><figcaption>icon-external-link</figcaption></figure></div><h5 style="margin:20px 0 10px;font:600 0.875rem/1.4 var(--uxp-font-body)">Status (6)</h5><div class="icon-grid"><figure><svg class="o-icon o-icon--24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg><figcaption>icon-check</figcaption></figure><figure><svg class="o-icon o-icon--24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10" fill="currentColor" stroke="none"/><path d="m7.5 12.5 3 3 6-6" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><figcaption>icon-check-circle-filled</figcaption></figure><figure><svg class="o-icon o-icon--24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10" fill="currentColor" stroke="none"/><path d="m9 9 6 6" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="m15 9-6 6" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><figcaption>icon-x-circle-filled</figcaption></figure><figure><svg class="o-icon o-icon--24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 2.8 22.2 20.5H1.8z" fill="currentColor" stroke="currentColor" stroke-linejoin="round"/><path d="M12 9.5v4.5" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="17.2" r="1.1" fill="#fff" stroke="none"/></svg><figcaption>icon-alert-triangle-filled</figcaption></figure><figure><svg class="o-icon o-icon--24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10" fill="currentColor" stroke="none"/><path d="M12 11v6" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="7.6" r="1.1" fill="#fff" stroke="none"/></svg><figcaption>icon-info-filled</figcaption></figure><figure><svg class="o-icon o-icon--24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg><figcaption>icon-clock</figcaption></figure></div><h5 style="margin:20px 0 10px;font:600 0.875rem/1.4 var(--uxp-font-body)">Communication (4)</h5><div class="icon-grid"><figure><svg class="o-icon o-icon--24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg><figcaption>icon-link</figcaption></figure><figure><svg class="o-icon o-icon--24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="m3.5 6 8.5 7 8.5-7"/></svg><figcaption>icon-mail</figcaption></figure><figure><svg class="o-icon o-icon--24 o-icon--mirror" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21 3 10 14"/><path d="m21 3-7 18-4-7-7-4z"/></svg><figcaption>icon-send</figcaption></figure><figure><svg class="o-icon o-icon--24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 5h16v11H9l-5 4z"/></svg><figcaption>icon-message</figcaption></figure></div><h5 style="margin:20px 0 10px;font:600 0.875rem/1.4 var(--uxp-font-body)">Content and data (9)</h5><div class="icon-grid"><figure><svg class="o-icon o-icon--24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M7 4.5v15l12-7.5z"/></svg><figcaption>icon-play</figcaption></figure><figure><svg class="o-icon o-icon--24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M8 5v14"/><path d="M16 5v14"/></svg><figcaption>icon-pause</figcaption></figure><figure><svg class="o-icon o-icon--24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3" y="4" width="18" height="16" rx="1.5"/><circle cx="9" cy="10" r="2"/><path d="m21 16-5-5-9 9"/></svg><figcaption>icon-image</figcaption></figure><figure><svg class="o-icon o-icon--24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/></svg><figcaption>icon-file</figcaption></figure><figure><svg class="o-icon o-icon--24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3" y="5" width="18" height="16" rx="1.5"/><path d="M3 10h18"/><path d="M8 3v4"/><path d="M16 3v4"/></svg><figcaption>icon-calendar</figcaption></figure><figure><svg class="o-icon o-icon--24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg><figcaption>icon-eye</figcaption></figure><figure><svg class="o-icon o-icon--24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m3 3 18 18"/><path d="M10.6 5.1A10 10 0 0 1 12 5c6.5 0 10 7 10 7a17 17 0 0 1-3 3.9"/><path d="M6.6 6.6A17 17 0 0 0 2 12s3.5 7 10 7a9.7 9.7 0 0 0 5.4-1.6"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/></svg><figcaption>icon-eye-off</figcaption></figure><figure><svg class="o-icon o-icon--24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 5h16l-6 7.5V19l-4 1.5v-8z"/></svg><figcaption>icon-filter</figcaption></figure><figure><svg class="o-icon o-icon--24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 5v14"/><path d="m6 11 6-6 6 6"/></svg><figcaption>icon-sort</figcaption></figure></div></div><p class="spec__cap">The 36-glyph set. Arrows, left and right chevrons, and send mirror in right-to-left layouts.</p></div>
</div>
<div class="cs-sec" id="f-writing">
  <p class="cmp__group">Foundation 11 of 11</p>
  <h3 class="uxp-text-heading-2">Writing</h3>
  
  <p class="cs-prose">Interfaces are read before they’re used, so words are part of the system. Orbit’s voice is UXPective’s: direct and outcome-driven. Every element of text does one job, and every component’s examples on this page follow these rules.</p>
  <div class="cs-table-wrap" role="region" tabindex="0" aria-label="Interface writing rules"><table class="cs-table "><caption>Interface writing rules</caption><thead><tr><th scope="col">Element</th><th scope="col">Write</th><th scope="col">Not</th></tr></thead><tbody><tr><th scope="row">Buttons</th><td>The verb for what happens: “Save changes”, “Submit application”</td><td>“Submit”, “OK”, “Click here”</td></tr>
<tr><th scope="row">Flows</th><td>The same verb all the way through: “Deprecate” produces “Token deprecated”</td><td>“Deprecate” producing “Item removed”</td></tr>
<tr><th scope="row">Labels</th><td>The thing being asked for: “Work email”</td><td>“Enter your work email address below”</td></tr>
<tr><th scope="row">Placeholders</th><td>An example: “name@company.com”</td><td>The label, or an instruction</td></tr>
<tr><th scope="row">Helper text</th><td>Why it’s asked, or the format: “We only use this to confirm your application.”</td><td>A repeat of the label</td></tr>
<tr><th scope="row">Errors</th><td>What happened and how to fix it: “Enter an email address with an @, like name@company.com.”</td><td>“Invalid input”, “Oops!”, an apology</td></tr>
<tr><th scope="row">Empty states</th><td>What will appear and how to get it there</td><td>“Nothing here”</td></tr>
<tr><th scope="row">Links</th><td>The destination: “Read the contribution model”</td><td>“Read more”, “Click here”</td></tr>
<tr><th scope="row">Alt text</th><td>What the image shows and why it’s there</td><td>“Image of”, or the file name</td></tr>
<tr><th scope="row">Directions</th><td>The thing itself: “Select Save changes”</td><td>Position or color: “the button on the right”, “the red field”</td></tr>
</tbody></table></div>
  <h4>Style</h4>
  <div class="cs-prose">
    <p><strong>Sentence case everywhere</strong>, including headings, buttons and tabs. <strong>No exclamation marks</strong> in system messages. <strong>Curly quotes and apostrophes</strong> in text people read; straight ones only in code. <strong>No em dashes</strong>: split the sentence, or use a colon. <strong>Dates</strong> are written day, month, year in full (21 October 2026). <strong>Numbers</strong> are numerals, with ranges written as “1 to 4” in sentences and “1-4” in tight spaces. <strong>Plain words</strong>: short sentences and no idioms, because UXPective’s audience reads in more than one language.</p>
  </div>
</div>
</section>
    
<section class="cs-part" id="components" aria-labelledby="cmp-h">
  <p class="cs-part__label">Part 3 of 5</p>
  <h2 id="cmp-h" class="uxp-text-heading-1">Twenty-two components</h2>
  <p class="cs-lede">Every page below reads the same way: purpose, a live specimen, the spec, when to use it and when not to, the seven-row accessibility checklist, and the tokens it consumes. Every specimen is the real component, built from the tokens on this page, and every one can be used with a keyboard and a screen reader.</p>
  <div class="cs-table-wrap" role="region" tabindex="0" aria-label="Components by group"><table class="cs-table "><caption>Components by group</caption><thead><tr><th scope="col">Group</th><th scope="col">Components</th></tr></thead><tbody><tr><th scope="row">Actions</th><td><a href="#c-button">Button</a>, <a href="#c-link">Link</a>, <a href="#c-menu">Menu</a></td></tr>
<tr><th scope="row">Navigation</th><td><a href="#c-tabs">Tabs</a>, <a href="#c-side-nav">Side nav</a>, <a href="#c-pagination">Pagination</a>, <a href="#c-language-switcher">Language switcher</a></td></tr>
<tr><th scope="row">Inputs</th><td><a href="#c-text-field">Text field</a>, <a href="#c-select">Select</a>, <a href="#c-checkbox">Checkbox</a>, <a href="#c-radio-group">Radio group</a>, <a href="#c-switch">Switch</a>, <a href="#c-segmented-control">Segmented control</a>, <a href="#c-search">Search</a></td></tr>
<tr><th scope="row">Feedback</th><td><a href="#c-banner">Banner</a>, <a href="#c-toast">Toast</a>, <a href="#c-badge">Badge</a>, <a href="#c-tooltip">Tooltip</a></td></tr>
<tr><th scope="row">Containers</th><td><a href="#c-card">Card</a>, <a href="#c-accordion">Accordion</a>, <a href="#c-modal">Modal</a></td></tr>
<tr><th scope="row">Data</th><td><a href="#c-data-table">Data table</a></td></tr>
</tbody></table></div>
  
<section class="cmp" id="c-button" aria-labelledby="c-button-h">
  <p class="cmp__group">Actions</p>
  <h3 id="c-button-h" class="uxp-text-heading-2">Button</h3>
  <p class="cmp__purpose">Starts an action on the current page: saving, submitting, opening, deleting. Four variants and three sizes.</p>
  
<div class="spec">
  <div class="spec__body spec-stack">
    <div class="spec-row">
      <button class="o-btn o-btn--primary" type="button">Continue <svg class="o-icon o-icon--mirror" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg></button>
      <button class="o-btn o-btn--secondary" type="button">Save draft</button>
      <button class="o-btn o-btn--tertiary" type="button">Cancel</button>
      <button class="o-btn o-btn--destructive" type="button">Delete draft</button>
    </div>
    <div class="spec-row">
      <button class="o-btn o-btn--primary o-btn--sm" type="button">Small, 32</button>
      <button class="o-btn o-btn--primary" type="button">Medium, 44</button>
      <button class="o-btn o-btn--primary o-btn--lg" type="button">Large, 52</button>
      <button class="o-btn o-btn--tertiary o-btn--icon" type="button" aria-label="Copy token name"><svg class="o-icon o-icon--20" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="9" y="9" width="11" height="11" rx="1.5"/><path d="M15 9V5.5A1.5 1.5 0 0 0 13.5 4h-8A1.5 1.5 0 0 0 4 5.5v8A1.5 1.5 0 0 0 5.5 15H9"/></svg></button>
    </div>
    <div class="spec-row">
      <button class="o-btn o-btn--primary" type="button" aria-disabled="true" aria-describedby="btn-why" data-demo="disabled">Publish</button>
      <span id="btn-why" class="spec-label" style="margin:0">Add a title to publish.</span>
    </div>
  </div>
  <div class="o-btnbar" role="group" aria-label="Unsaved changes">
    <span class="uxp-text-body-sm" style="color:var(--uxp-color-text-secondary)">You have unsaved changes.</span>
    <div class="o-btnbar__end">
      <button class="o-btn o-btn--tertiary" type="button">Cancel</button>
      <button class="o-btn o-btn--secondary" type="button">Discard</button>
      <button class="o-btn o-btn--primary" type="button" data-demo="save"><span class="o-btn__spinner" hidden aria-hidden="true"></span><span>Save changes</span></button>
    </div>
  </div>
  <p class="spec__cap"><span class="cap-screen">Press Save changes: the label stays put, a spinner appears, and a screen reader hears “Saving changes” then “Changes saved”. Publish is disabled but still focusable, so its reason can be read.</span><span class="cap-print">Save changes keeps its label while saving: a spinner appears and a screen reader hears “Saving changes”, then “Changes saved”. Publish is disabled but still focusable, so its reason can be read.</span></p>
</div>
  <dl class="cmp__spec"><dt>Anatomy</dt><dd>Optional leading icon (16px), label (<code>uxp-text-ui-button-md</code>), optional trailing icon (16px), container (<code>uxp-radius-sm</code>, min-height not height).</dd><dt>Variants</dt><dd><strong>Primary</strong>: solid <code>uxp-color-action-primary</code> with a white label. <strong>Secondary</strong>: tonal, a <code>uxp-color-action-secondary-bg</code> fill with <code>uxp-color-action-secondary-text</code> and no border. <strong>Tertiary</strong>: text only. <strong>Destructive</strong>: red-700 fill. One primary per view.</dd><dt>Sizes</dt><dd>sm 32px (desktop dense areas only: table rows, toolbars), md 44px (default), lg 52px (hero and checkout moments). Padding: sm space-2 by space-4, md space-3 by space-6, lg space-3 by space-8.</dd><dt>States</dt><dd>Default, hover (primary darkens to <code>uxp-color-action-primary-hover</code>; secondary’s fill deepens to <code>uxp-color-action-secondary-bg-hover</code>; tertiary gains a muted fill), active, focus-visible, disabled (<code>aria-disabled</code>), loading (spinner plus announcement, label unchanged).</dd><dt>Rationale</dt><dd>Buttons are flat. The gradient belongs to the brand mark and display type; on a control it made every action feel heavy. Actions use blue-600, a bright stop from the brand family, so the interface stays light. A label identifies a button on its own, so buttons carry no outline.</dd></dl>
  <div class="cs-two cmp__use">
    <div class="cs-block"><h4>When to use</h4><ul><li>The control changes something on this page or submits data.</li><li>You need one clearly dominant action (primary) with quieter alternatives beside it.</li></ul></div>
    <div class="cs-block"><h4>When not to use</h4><ul><li>It goes to another URL. Use a Link, even when it is styled to look like a button (<code>&lt;a class="o-btn"&gt;</code>).</li><li>There are three or more equal-weight actions. Use secondary or tertiary for all of them, or rethink the screen.</li><li>The action is destructive and irreversible without a confirmation. Pair it with a Modal (alertdialog).</li></ul></div>
  </div>
  <div class="aa">
    <h4>Accessibility checklist</h4>
    <div class="cs-table-wrap" role="region" tabindex="0" aria-label="Accessibility checklist for Button">
      <table class="cs-table"><caption>Button, WCAG 2.1 criteria</caption>
        <thead><tr><th scope="col">Check</th><th scope="col">Implementation</th></tr></thead>
        <tbody><tr><th scope="row">Contrast<span>1.4.3, 1.4.11</span></th><td>Primary: white on blue-600 4.0:1, a documented exception, on its hover 5.5:1. Destructive: white on red-700 4.8:1. Secondary: blue-700 on blue-50 5.0:1, on its hover 4.6:1. Tertiary: blue-600 on white 4.0:1, a documented exception.</td></tr><tr><th scope="row">Keyboard<span>2.1.1</span></th><td>Native <code>&lt;button&gt;</code>: Enter and Space activate. Link-styled buttons are real links and activate on Enter only.</td></tr><tr><th scope="row">Focus<span>2.4.7</span></th><td>2px <code>uxp-focus-ring-color</code> (blue-600, 4.0:1) outline at 2px offset on <code>:focus-visible</code>. Outline, not box-shadow, so it survives forced-colors mode. On dark or gradient bands use <code>uxp-focus-ring-color-inverse</code>.</td></tr><tr><th scope="row">Name, role, value<span>4.1.2, 2.5.3</span></th><td>The visible label is the accessible name. Icon-only buttons take an <code>aria-label</code> that is a verb (“Copy token name”, not “Copy icon”). Disabled uses <code>aria-disabled="true"</code>, stays focusable, blocks activation in script and points to its reason with <code>aria-describedby</code>.</td></tr><tr><th scope="row">Announcements<span>4.1.3</span></th><td>Loading and result are announced through the page’s polite live region. <code>aria-busy</code> is not relied on, because most screen readers do not announce it on a button.</td></tr><tr><th scope="row">Reflow and text spacing<span>1.4.10, 1.4.12</span></th><td>min-height and padding, never a fixed height, so labels wrap instead of clipping under text-spacing overrides. Button bars stack full width below 480px.</td></tr><tr><th scope="row">Target size<span>beyond AA</span></th><td>44px at md and up meets AAA 2.5.5. WCAG 2.1 AA sets no target size, so sm at 32px is allowed, but only on desktop dense areas.</td></tr></tbody>
      </table>
    </div>
  </div>
  <h4 style="margin-top:28px">Tokens</h4>
  <ul class="tok-list" aria-label="Tokens used by Button"><li><code>uxp-color-action-primary</code></li><li><code>uxp-color-action-primary-hover</code></li><li><code>uxp-color-action-secondary-bg</code></li><li><code>uxp-color-action-secondary-bg-hover</code></li><li><code>uxp-color-action-secondary-text</code></li><li><code>uxp-color-action-on-primary</code></li><li><code>uxp-color-action-destructive</code></li><li><code>uxp-color-bg-disabled</code></li><li><code>uxp-color-text-disabled</code></li><li><code>uxp-focus-ring-color</code></li><li><code>uxp-target-md</code></li><li><code>uxp-target-sm</code></li><li><code>uxp-radius-sm</code></li><li><code>uxp-space-3</code></li><li><code>uxp-space-6</code></li><li><code>uxp-text-ui-button-md</code></li></ul>
</section>
<section class="cmp" id="c-link" aria-labelledby="c-link-h">
  <p class="cmp__group">Actions</p>
  <h3 id="c-link-h" class="uxp-text-heading-2">Link</h3>
  <p class="cmp__purpose">Takes someone to another URL or another place on the page. Two forms: inline, inside a sentence, and standalone, on its own line.</p>
  
<div class="spec">
  <div class="spec__body spec-stack">
    <p class="uxp-text-body-md" style="max-width:60ch;margin:0">The token reference lives in the <a class="o-link" href="#f-type">typography foundation</a>, and every contrast pair is listed in the <a class="o-link" href="#f-color">color foundation</a>.</p>
    <p style="margin:0"><a class="o-link o-link--standalone" href="#governance">Read the contribution model <svg class="o-icon o-icon--mirror" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg></a></p>
    <p style="margin:0"><a class="o-link" href="https://www.w3.org/TR/WCAG21/" target="_blank" rel="noopener">WCAG 2.1 specification<span class="uxp-sr-only"> (opens in a new tab)</span></a> <svg class="o-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M14 4h6v6"/><path d="m20 4-9 9"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg></p>
  </div>
  <p class="spec__cap">Inline links are always underlined. The external link’s “opens in a new tab” is visually hidden text appended to the name, not an aria-label that replaces it.</p>
</div>
  <dl class="cmp__spec"><dt>Anatomy</dt><dd>Text, underline (1px at rest, 3px offset, 2px on hover), optional trailing icon for standalone and external links.</dd><dt>Variants</dt><dd><strong>Inline</strong>: always underlined. <strong>Standalone</strong>: its own line, weight 600, trailing arrow, underline on hover only. <strong>External</strong>: trailing <code>icon-external-link</code> plus hidden text.</dd><dt>States</dt><dd>Default blue-600, hover blue-700, visited purple-700, focus-visible ring. There is no disabled link: if it can’t be followed, render text.</dd></dl>
  <div class="cs-two cmp__use">
    <div class="cs-block"><h4>When to use</h4><ul><li>The destination has a URL, including an anchor on this page.</li><li>Right-click and “open in new tab” would make sense.</li></ul></div>
    <div class="cs-block"><h4>When not to use</h4><ul><li>It submits, saves or toggles. Use a Button.</li><li>The link text would be “click here” or “read more”. Name the destination.</li></ul></div>
  </div>
  <div class="aa">
    <h4>Accessibility checklist</h4>
    <div class="cs-table-wrap" role="region" tabindex="0" aria-label="Accessibility checklist for Link">
      <table class="cs-table"><caption>Link, WCAG 2.1 criteria</caption>
        <thead><tr><th scope="col">Check</th><th scope="col">Implementation</th></tr></thead>
        <tbody><tr><th scope="row">Contrast<span>1.4.3</span></th><td>blue-600 on white 4.0:1, a documented exception, hover blue-700 5.5:1, visited purple-700 6.3:1. On a 50 tint, links switch to blue-700 (4.9:1 or better). Inline links are always underlined, so they never depend on color.</td></tr><tr><th scope="row">Keyboard<span>2.1.1</span></th><td>Native <code>&lt;a href&gt;</code>, activates on Enter.</td></tr><tr><th scope="row">Focus<span>2.4.7</span></th><td>2px <code>uxp-focus-ring-color</code> (blue-600, 4.0:1) outline at 2px offset on <code>:focus-visible</code>. Outline, not box-shadow, so it survives forced-colors mode.</td></tr><tr><th scope="row">Name, role, value<span>4.1.2, 2.5.3, 2.4.4</span></th><td>Link text names the destination. External links append “(opens in a new tab)” as visually hidden text, so the accessible name starts with the visible words.</td></tr><tr><th scope="row">Announcements<span>4.1.3</span></th><td>Not applicable. Links navigate; the destination announces itself.</td></tr><tr><th scope="row">Reflow and text spacing<span>1.4.10, 1.4.12</span></th><td>Inline links wrap with their sentence. Standalone links use min-height 44px.</td></tr><tr><th scope="row">Use of color<span>1.4.1</span></th><td>Underlines, not color, identify inline links. Color alone would fail for people who can’t see the blue against ink-900 body text.</td></tr></tbody>
      </table>
    </div>
  </div>
  <h4 style="margin-top:28px">Tokens</h4>
  <ul class="tok-list" aria-label="Tokens used by Link"><li><code>uxp-color-text-link</code></li><li><code>uxp-color-text-link-hover</code></li><li><code>uxp-color-text-link-visited</code></li><li><code>uxp-focus-ring-color</code></li><li><code>uxp-target-md</code></li></ul>
</section>
<section class="cmp" id="c-menu" aria-labelledby="c-menu-h">
  <p class="cmp__group">Actions</p>
  <h3 id="c-menu-h" class="uxp-text-heading-2">Menu</h3>
  <p class="cmp__purpose">A short list of actions on one thing, opened from a button. It keeps three or more secondary actions out of the way without hiding what they are.</p>
  
<div class="spec">
  <div class="spec__body spec-row" style="min-height:300px;align-items:flex-start">
    <div class="o-menu" data-menu>
      <button class="o-btn o-btn--secondary o-menu__trigger" type="button" id="mn1-btn" aria-haspopup="menu" aria-expanded="false" aria-controls="mn1">Draft actions <svg class="o-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m6 9 6 6 6-6"/></svg></button>
      <ul class="o-menu__list" role="menu" id="mn1" aria-labelledby="mn1-btn" hidden>
        <li role="none"><button class="o-menu__item" role="menuitem" type="button" tabindex="-1" data-result="Rename is ready: type a new name"><svg class="o-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 20h4L18.5 9.5a2.1 2.1 0 0 0-3-3L5 17v3z"/><path d="m13.5 8.5 3 3"/></svg> Rename</button></li>
        <li role="none"><button class="o-menu__item" role="menuitem" type="button" tabindex="-1" data-result="Draft duplicated"><svg class="o-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="9" y="9" width="11" height="11" rx="1.5"/><path d="M15 9V5.5A1.5 1.5 0 0 0 13.5 4h-8A1.5 1.5 0 0 0 4 5.5v8A1.5 1.5 0 0 0 5.5 15H9"/></svg> Duplicate</button></li>
        <li role="none"><button class="o-menu__item" role="menuitem" type="button" tabindex="-1" data-result="Link copied"><svg class="o-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg> Copy link</button></li>
        <li role="separator" class="o-menu__sep"></li>
        <li role="none"><button class="o-menu__item o-menu__item--danger" role="menuitem" type="button" tabindex="-1" data-result="Delete always asks for confirmation first"><svg class="o-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 7h16"/><path d="M9 7V4.5h6V7"/><path d="m6.5 7 1 13h9l1-13"/><path d="M10 11v6"/><path d="M14 11v6"/></svg> Delete draft</button></li>
      </ul>
    </div>
    <div class="o-menu" data-menu>
      <button class="o-btn o-btn--tertiary o-btn--sm o-menu__trigger" type="button" id="mn2-btn" aria-haspopup="menu" aria-expanded="false" aria-controls="mn2" aria-label="More actions for Case Study Storytelling">More <svg class="o-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m6 9 6 6 6-6"/></svg></button>
      <ul class="o-menu__list" role="menu" id="mn2" aria-labelledby="mn2-btn" hidden>
        <li role="none"><button class="o-menu__item" role="menuitem" type="button" tabindex="-1" data-result="Opened in a new view"><svg class="o-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg> Preview</button></li>
        <li role="none"><button class="o-menu__item" role="menuitem" type="button" tabindex="-1" data-result="Download started"><svg class="o-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 4v11"/><path d="m7 10 5 5 5-5"/><path d="M5 20h14"/></svg> Download</button></li>
        <li role="none"><button class="o-menu__item" role="menuitem" type="button" tabindex="-1" data-result="Share options opened"><svg class="o-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="m8.2 10.8 7.6-4.4"/><path d="m8.2 13.2 7.6 4.4"/></svg> Share</button></li>
      </ul>
    </div>
  </div>
  <p class="spec__cap"><span class="cap-screen">Open with Enter, Space or the down arrow (the up arrow opens on the last item). Arrows move and wrap, Home and End jump, typing a letter moves to the matching item, Esc closes and returns focus to the button.</span><span class="cap-print">Shown open. Enter, Space or the down arrow opens on the first item; arrows move and wrap, a letter jumps to the matching item, and Esc closes and returns focus to the button.</span></p>
</div>
  <dl class="cmp__spec"><dt>Anatomy</dt><dd>Trigger (a Button with a chevron, or a small “More” button), list (elevation-3, <code>uxp-layer-dropdown</code>), items (icon and label, 44px rows), optional separator, destructive item last.</dd><dt>Triggers</dt><dd><strong>Labelled</strong>: “Draft actions” for a page-level set. <strong>Row overflow</strong>: a small “More” button named for its row (“More actions for Case Study Storytelling”), which is how the Data table holds a third row action.</dd><dt>States</dt><dd>Closed, open, item hover, item focus (fill plus inset ring), destructive item in red-700.</dd><dt>Rules</dt><dd>Two to seven items. Order by frequency; destructive last, after a separator. Items are verbs. A destructive item never acts on its own: it opens a confirmation.</dd></dl>
  <div class="cs-two cmp__use">
    <div class="cs-block"><h4>When to use</h4><ul><li>One object has three or more secondary actions.</li><li>A table row needs more than its two inline actions.</li></ul></div>
    <div class="cs-block"><h4>When not to use</h4><ul><li>Items go to other pages. Use links, or Side nav.</li><li>It picks a value. Use Select or Radio group.</li><li>There are only one or two actions. Show them as buttons.</li></ul></div>
  </div>
  <div class="aa">
    <h4>Accessibility checklist</h4>
    <div class="cs-table-wrap" role="region" tabindex="0" aria-label="Accessibility checklist for Menu">
      <table class="cs-table"><caption>Menu, WCAG 2.1 criteria</caption>
        <thead><tr><th scope="col">Check</th><th scope="col">Implementation</th></tr></thead>
        <tbody><tr><th scope="row">Contrast<span>1.4.3, 1.4.11</span></th><td>Items ink-900 16.4:1, destructive red-700 4.8:1; on the muted hover fill 15.3:1 and 4.5:1. Trigger follows Button.</td></tr><tr><th scope="row">Keyboard<span>2.1.1, 2.1.2</span></th><td>Enter, Space or Down opens on the first item; Up opens on the last. Arrows move and wrap, Home and End jump, a letter moves to the next matching item. Esc closes and returns focus; Tab closes and moves on.</td></tr><tr><th scope="row">Focus<span>2.4.3, 2.4.7</span></th><td>Roving focus inside the list; the focused item gets a fill and an inset ring. Closing always returns focus to the trigger. 2px <code>uxp-focus-ring-color</code> (blue-600, 4.0:1) outline at 2px offset on <code>:focus-visible</code>. Outline, not box-shadow, so it survives forced-colors mode.</td></tr><tr><th scope="row">Name, role, value<span>4.1.2, 2.5.3</span></th><td>Trigger has <code>aria-haspopup="menu"</code>, <code>aria-expanded</code> and <code>aria-controls</code>. The list is <code>role="menu"</code> labelled by its trigger; items are <code>role="menuitem"</code>; the separator is <code>role="separator"</code>. A “More” trigger’s name starts with its visible word.</td></tr><tr><th scope="row">Announcements<span>4.1.3</span></th><td>The result of an action (“Link copied”) goes through the polite live region.</td></tr><tr><th scope="row">Reflow and text spacing<span>1.4.10, 1.4.12</span></th><td>Min width 220px, capped at the viewport; labels wrap inside 44px min-height rows.</td></tr><tr><th scope="row">Error prevention<span>3.3.4</span></th><td>Destructive items open a confirmation (Modal, alertdialog) and never act immediately.</td></tr></tbody>
      </table>
    </div>
  </div>
  <h4 style="margin-top:28px">Tokens</h4>
  <ul class="tok-list" aria-label="Tokens used by Menu"><li><code>uxp-color-bg-surface</code></li><li><code>uxp-color-border-subtle</code></li><li><code>uxp-color-bg-muted</code></li><li><code>uxp-color-action-destructive</code></li><li><code>uxp-elevation-3</code></li><li><code>uxp-layer-dropdown</code></li><li><code>uxp-target-md</code></li><li><code>uxp-radius-sm</code></li><li><code>uxp-space-2</code></li><li><code>uxp-space-3</code></li></ul>
</section>
<section class="cmp" id="c-tabs" aria-labelledby="c-tabs-h">
  <p class="cmp__group">Navigation</p>
  <h3 id="c-tabs-h" class="uxp-text-heading-2">Tabs</h3>
  <p class="cmp__purpose">Switches between views of the same thing without leaving the page. Three to seven tabs, horizontal only: a vertical list of destinations is Side nav.</p>
  
<div class="spec">
  <div class="spec__body">
    <div class="o-tabs" data-tabs>
      <div class="o-tabs__list" role="tablist" aria-label="Cohort page">
        <button class="o-tabs__tab" role="tab" type="button" id="tab-ov" aria-selected="true" aria-controls="tp-ov" tabindex="0">Overview</button>
        <button class="o-tabs__tab" role="tab" type="button" id="tab-cu" aria-selected="false" aria-controls="tp-cu" tabindex="-1">Curriculum</button>
        <button class="o-tabs__tab" role="tab" type="button" id="tab-me" aria-selected="false" aria-controls="tp-me" tabindex="-1">Mentors</button>
        <button class="o-tabs__tab" role="tab" type="button" id="tab-pr" aria-selected="false" aria-controls="tp-pr" tabindex="-1">Pricing</button>
        <button class="o-tabs__tab" role="tab" type="button" id="tab-fa" aria-selected="false" aria-controls="tp-fa" tabindex="-1">Questions</button>
      </div>
      <div class="o-tabs__panel" role="tabpanel" id="tp-ov" aria-labelledby="tab-ov" tabindex="0"><p class="uxp-text-body-md" style="margin:0">Overview panel. Who the cohort is for and how it runs.</p></div>
      <div class="o-tabs__panel" role="tabpanel" id="tp-cu" aria-labelledby="tab-cu" tabindex="0" hidden><p class="uxp-text-body-md" style="margin:0">Curriculum panel. Week by week, in one list.</p></div>
      <div class="o-tabs__panel" role="tabpanel" id="tp-me" aria-labelledby="tab-me" tabindex="0" hidden><p class="uxp-text-body-md" style="margin:0">Mentors panel. Who teaches and reviews.</p></div>
      <div class="o-tabs__panel" role="tabpanel" id="tp-pr" aria-labelledby="tab-pr" tabindex="0" hidden><p class="uxp-text-body-md" style="margin:0">Pricing panel. What it costs and what’s included.</p></div>
      <div class="o-tabs__panel" role="tabpanel" id="tp-fa" aria-labelledby="tab-fa" tabindex="0" hidden><p class="uxp-text-body-md" style="margin:0">Questions panel. The answers people ask for before applying.</p></div>
    </div>
  </div>
  <p class="spec__cap"><span class="cap-screen">Tab into the row, then use the arrow keys, Home and End. Tab again moves into the panel. Below 768px the row scrolls with a fade on the trailing edge.</span><span class="cap-print">Arrow keys move between tabs, Home and End jump to the ends, and Tab moves into the panel. Below 768px the row scrolls with a fade on the trailing edge.</span></p>
</div>
  <dl class="cmp__spec"><dt>Anatomy</dt><dd>Tab list (<code>role="tablist"</code>), tabs (buttons), 3px active indicator in <code>uxp-gradient-action</code>, panels.</dd><dt>States</dt><dd>Default ink-500, hover ink-900, selected ink-900 at weight 700 plus indicator, focus-visible (inset ring).</dd><dt>Behavior</dt><dd>Roving tabindex. Arrows move and activate (automatic activation, because panels are already rendered). Home and End jump. Selection never relies on the indicator’s color alone: weight changes too.</dd><dt>Rationale</dt><dd>A vertical list in a sidebar almost always points at URLs, and a view with a URL is a page, not a tab.</dd></dl>
  <div class="cs-two cmp__use">
    <div class="cs-block"><h4>When to use</h4><ul><li>Views are parallel and short, and nobody needs to link to one directly.</li></ul></div>
    <div class="cs-block"><h4>When not to use</h4><ul><li>Someone might bookmark or share a view. Use Side nav or separate pages.</li><li>There are two options that filter one list. Use Segmented control.</li><li>There are more than seven views.</li></ul></div>
  </div>
  <div class="aa">
    <h4>Accessibility checklist</h4>
    <div class="cs-table-wrap" role="region" tabindex="0" aria-label="Accessibility checklist for Tabs">
      <table class="cs-table"><caption>Tabs, WCAG 2.1 criteria</caption>
        <thead><tr><th scope="col">Check</th><th scope="col">Implementation</th></tr></thead>
        <tbody><tr><th scope="row">Contrast<span>1.4.3, 1.4.11</span></th><td>Unselected text ink-500 5.0:1, selected ink-900 16.4:1. Indicator gradient never drops below 4.0:1 on white, above the 3:1 a state indicator needs.</td></tr><tr><th scope="row">Keyboard<span>2.1.1</span></th><td>Tab enters the list at the selected tab, arrows move between tabs, Home and End jump, Tab leaves to the panel.</td></tr><tr><th scope="row">Focus<span>2.4.3, 2.4.7</span></th><td>Inset ring on the tab so it isn’t clipped by the scrolling row. Panels are focusable (<code>tabindex="0"</code>) when they hold no focusable content.</td></tr><tr><th scope="row">Name, role, value<span>4.1.2</span></th><td><code>role="tab"</code> with <code>aria-selected</code> and <code>aria-controls</code>; panels are <code>role="tabpanel"</code> with <code>aria-labelledby</code>; the list has an <code>aria-label</code>.</td></tr><tr><th scope="row">Announcements<span>4.1.3</span></th><td>Not needed. Screen readers announce the newly selected tab from its role and state.</td></tr><tr><th scope="row">Reflow and text spacing<span>1.4.10, 1.4.12</span></th><td>The row scrolls inside its own container at 320px rather than wrapping or pushing the page sideways. Tabs use min-height.</td></tr><tr><th scope="row">Use of color<span>1.4.1</span></th><td>Selected state is weight plus indicator, not hue.</td></tr></tbody>
      </table>
    </div>
  </div>
  <h4 style="margin-top:28px">Tokens</h4>
  <ul class="tok-list" aria-label="Tokens used by Tabs"><li><code>uxp-gradient-action</code></li><li><code>uxp-color-text-primary</code></li><li><code>uxp-color-text-secondary</code></li><li><code>uxp-color-border-subtle</code></li><li><code>uxp-border-3</code></li><li><code>uxp-target-md</code></li><li><code>uxp-text-ui-button-md</code></li></ul>
</section>
<section class="cmp" id="c-side-nav" aria-labelledby="c-side-nav-h">
  <p class="cmp__group">Navigation</p>
  <h3 id="c-side-nav-h" class="uxp-text-heading-2">Side nav</h3>
  <p class="cmp__purpose">Moves between pages or sections that each have their own URL, such as documentation.</p>
  
<div class="spec">
  <div class="spec__body">
    <nav class="o-sidenav" aria-labelledby="sn-title">
      <p class="o-sidenav__title" id="sn-title">Foundations</p>
      <ul>
        <li><a href="#f-a11y">Accessibility</a></li>
        <li><a href="#f-color" aria-current="page">Color</a></li>
        <li><a href="#f-type">Typography</a></li>
        <li><a href="#f-space">Spacing</a></li>
        <li><a href="#f-layout">Layout and direction</a></li>
        <li><a href="#f-icons">Icons</a></li>
      </ul>
    </nav>
  </div>
  <p class="spec__cap">These are real links to this page’s foundations. Color is marked as the current page.</p>
</div>
  <dl class="cmp__spec"><dt>Anatomy</dt><dd><code>&lt;nav&gt;</code> landmark, optional group title, list of links, current item.</dd><dt>States</dt><dd>Default, hover (muted fill), current (blue-50 fill, blue-700 text at weight 600, and a 3px blue-600 bar at the inline start), focus-visible.</dd></dl>
  <div class="cs-two cmp__use">
    <div class="cs-block"><h4>When to use</h4><ul><li>Every item has its own URL or anchor.</li><li>The list is long enough to need persistent wayfinding (docs, settings areas).</li></ul></div>
    <div class="cs-block"><h4>When not to use</h4><ul><li>Items swap content inside one view. Use Tabs.</li><li>There are fewer than three destinations. Use links.</li></ul></div>
  </div>
  <div class="aa">
    <h4>Accessibility checklist</h4>
    <div class="cs-table-wrap" role="region" tabindex="0" aria-label="Accessibility checklist for Side nav">
      <table class="cs-table"><caption>Side nav, WCAG 2.1 criteria</caption>
        <thead><tr><th scope="col">Check</th><th scope="col">Implementation</th></tr></thead>
        <tbody><tr><th scope="row">Contrast<span>1.4.3, 1.4.11</span></th><td>Items ink-900 16.4:1. Current item blue-700 on blue-50 5.0:1, marked by a 3px blue-600 bar (3.6:1 against its fill), so the state never rests on a tint alone.</td></tr><tr><th scope="row">Keyboard<span>2.1.1</span></th><td>Plain links in a list: Tab moves through them, Enter follows.</td></tr><tr><th scope="row">Focus<span>2.4.7</span></th><td>2px <code>uxp-focus-ring-color</code> (blue-600, 4.0:1) outline at 2px offset on <code>:focus-visible</code>. Outline, not box-shadow, so it survives forced-colors mode.</td></tr><tr><th scope="row">Name, role, value<span>4.1.2, 1.3.1</span></th><td><code>&lt;nav&gt;</code> labelled by its visible title. Current item carries <code>aria-current="page"</code>, never just a color.</td></tr><tr><th scope="row">Announcements<span>4.1.3</span></th><td>Not applicable. Navigation loads the destination.</td></tr><tr><th scope="row">Reflow and text spacing<span>1.4.10, 1.4.12</span></th><td>Below 1024px the side nav collapses into a disclosure at the top of the content, so it never forces horizontal scroll.</td></tr><tr><th scope="row">Consistent navigation<span>3.2.3</span></th><td>Same order on every page it appears on.</td></tr></tbody>
      </table>
    </div>
  </div>
  <h4 style="margin-top:28px">Tokens</h4>
  <ul class="tok-list" aria-label="Tokens used by Side nav"><li><code>uxp-color-bg-selected-subtle</code></li><li><code>uxp-color-action-secondary-text</code></li><li><code>uxp-color-action-primary</code></li><li><code>uxp-color-bg-muted</code></li><li><code>uxp-border-3</code></li><li><code>uxp-target-md</code></li><li><code>uxp-radius-sm</code></li></ul>
</section>
<section class="cmp" id="c-pagination" aria-labelledby="c-pagination-h">
  <p class="cmp__group">Navigation</p>
  <h3 id="c-pagination-h" class="uxp-text-heading-2">Pagination</h3>
  <p class="cmp__purpose">Moves through a long, ordered set. Two patterns: numbered and load more. There is no infinite scroll.</p>
  
<div class="spec">
  <div class="spec__body spec-stack">
    <nav class="o-pager" aria-label="Pagination" data-pager data-total="12">
      <ol class="o-pager__full">
        <li><a href="#c-pagination" data-page="prev"><svg class="o-icon o-icon--mirror" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m15 6-6 6 6 6"/></svg><span class="uxp-sr-only">Previous page</span></a></li>
        <li><a href="#c-pagination" data-page="1" aria-current="page"><span class="uxp-sr-only">Page </span>1</a></li>
        <li><a href="#c-pagination" data-page="2"><span class="uxp-sr-only">Page </span>2</a></li>
        <li><a href="#c-pagination" data-page="3"><span class="uxp-sr-only">Page </span>3</a></li>
        <li><span class="o-pager__gap" aria-hidden="true">…</span></li>
        <li><a href="#c-pagination" data-page="12"><span class="uxp-sr-only">Page </span>12</a></li>
        <li><a href="#c-pagination" data-page="next"><svg class="o-icon o-icon--mirror" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m9 6 6 6-6 6"/></svg><span class="uxp-sr-only">Next page</span></a></li>
      </ol>
      <ol class="o-pager__compact">
        <li><a href="#c-pagination" data-page="prev"><svg class="o-icon o-icon--mirror" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m15 6-6 6 6 6"/></svg><span class="uxp-sr-only">Previous page</span></a></li>
        <li><span class="o-pager__gap" style="color:var(--uxp-color-text-primary)" data-pager-compact>1 of 12</span></li>
        <li><a href="#c-pagination" data-page="next"><svg class="o-icon o-icon--mirror" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m9 6 6 6-6 6"/></svg><span class="uxp-sr-only">Next page</span></a></li>
      </ol>
      <p class="o-pager__status" data-pager-status>Page 1 of 12</p>
    </nav>
    <div class="o-loadmore" data-loadmore>
      <ul aria-label="Masterclass recordings" data-loadmore-list>
        <li>Recording 1</li><li>Recording 2</li><li>Recording 3</li>
      </ul>
      <button class="o-btn o-btn--secondary" type="button" data-loadmore-btn>Show 3 more</button>
      <p class="o-pager__status" data-loadmore-status>Showing 3 of 9</p>
    </div>
  </div>
  <p class="spec__cap"><span class="cap-screen">Numbered updates aria-current and announces “Page 3 of 12”. Load more keeps focus on the button and announces how many arrived; once everything is shown, focus moves to the first new item.</span><span class="cap-print">Changing page updates aria-current and announces “Page 3 of 12”. Load more keeps focus on the button and announces how many arrived; when the last batch lands, focus moves to the first new item.</span></p>
</div>
  <dl class="cmp__spec"><dt>Anatomy</dt><dd><code>&lt;nav aria-label="Pagination"&gt;</code>, previous and next links, page links, gap marker, status line.</dd><dt>Patterns</dt><dd><strong>Numbered</strong> for tables and lists where position matters; the URL carries <code>?page=3</code>. <strong>Load more</strong> for lists with a clear end. Below 480px numbered collapses to previous, “3 of 12”, next.</dd><dt>States</dt><dd>Default, hover (muted fill, blue-700 text), current (blue-600 fill, white text), focus-visible. Previous is omitted on page 1 rather than disabled.</dd><dt>Rationale</dt><dd>It makes the footer unreachable by keyboard and gives screen reader users no sense of position. Feeds use load more.</dd></dl>
  <div class="cs-two cmp__use">
    <div class="cs-block"><h4>When to use</h4><ul><li>The set is longer than one screen and has an order.</li></ul></div>
    <div class="cs-block"><h4>When not to use</h4><ul><li>The set is short enough to show in full (under about 24 items).</li><li>You want infinite scroll. It is not offered; use load more.</li></ul></div>
  </div>
  <div class="aa">
    <h4>Accessibility checklist</h4>
    <div class="cs-table-wrap" role="region" tabindex="0" aria-label="Accessibility checklist for Pagination">
      <table class="cs-table"><caption>Pagination, WCAG 2.1 criteria</caption>
        <thead><tr><th scope="col">Check</th><th scope="col">Implementation</th></tr></thead>
        <tbody><tr><th scope="row">Contrast<span>1.4.3, 1.4.11</span></th><td>Page links blue-600 4.0:1, a documented exception, blue-700 on the muted hover fill 5.1:1. Current page white on blue-600 4.0:1, a documented exception. Status ink-500 5.0:1.</td></tr><tr><th scope="row">Keyboard<span>2.1.1</span></th><td>All links and buttons. Load more never traps focus and the footer stays reachable.</td></tr><tr><th scope="row">Focus<span>2.4.3, 2.4.7</span></th><td>2px <code>uxp-focus-ring-color</code> (blue-600, 4.0:1) outline at 2px offset on <code>:focus-visible</code>. Outline, not box-shadow, so it survives forced-colors mode. Load more keeps focus on itself while items remain; when the last batch lands, focus moves to the first new item.</td></tr><tr><th scope="row">Name, role, value<span>4.1.2, 2.4.4, 1.3.1</span></th><td>Previous and next carry hidden text (“Previous page”). Page links read “Page 3”. The current page has <code>aria-current="page"</code>. The gap is <code>aria-hidden</code>.</td></tr><tr><th scope="row">Announcements<span>4.1.3</span></th><td>“Page 3 of 12” and “3 more loaded, showing 6 of 9” go through the polite live region.</td></tr><tr><th scope="row">Reflow and text spacing<span>1.4.10, 1.4.12</span></th><td>Compact pattern below 480px; 44px targets at every size.</td></tr><tr><th scope="row">Consistent identification<span>3.2.4</span></th><td>Previous and next always sit at the ends with the same icons.</td></tr></tbody>
      </table>
    </div>
  </div>
  <h4 style="margin-top:28px">Tokens</h4>
  <ul class="tok-list" aria-label="Tokens used by Pagination"><li><code>uxp-color-text-link</code></li><li><code>uxp-color-action-primary-hover</code></li><li><code>uxp-color-bg-selected</code></li><li><code>uxp-color-text-inverse</code></li><li><code>uxp-color-text-secondary</code></li><li><code>uxp-color-bg-muted</code></li><li><code>uxp-target-md</code></li><li><code>uxp-radius-sm</code></li></ul>
</section>
<section class="cmp" id="c-language-switcher" aria-labelledby="c-language-switcher-h">
  <p class="cmp__group">Navigation</p>
  <h3 id="c-language-switcher-h" class="uxp-text-heading-2">Language switcher</h3>
  <p class="cmp__purpose">Opens the same page in another language. A disclosure button with a list of links, because changing language is navigation, and navigation is a link.</p>
  
<div class="spec">
  <div class="spec__body" style="min-height:330px">
    <div class="o-lang" data-lang>
      <button class="o-btn o-btn--secondary o-lang__trigger" type="button" aria-expanded="false" aria-controls="lang-list">Language: English <svg class="o-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m6 9 6 6 6-6"/></svg></button>
      <ul class="o-lang__list" id="lang-list" hidden>
        <li><a href="#c-language-switcher" hreflang="en" lang="en" aria-current="true"><span class="o-lang__code" aria-hidden="true">EN</span>English<svg class="o-icon o-lang__check" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg></a></li>
        <li><a href="#c-language-switcher" hreflang="ar" lang="ar"><span class="o-lang__code" aria-hidden="true">AR</span><span dir="rtl">العربية</span></a></li>
        <li><a href="#c-language-switcher" hreflang="hi" lang="hi"><span class="o-lang__code" aria-hidden="true">HI</span>हिन्दी</a></li>
        <li><a href="#c-language-switcher" hreflang="es" lang="es"><span class="o-lang__code" aria-hidden="true">ES</span>Español</a></li>
        <li><a href="#c-language-switcher" hreflang="pt-BR" lang="pt-BR"><span class="o-lang__code" aria-hidden="true">PT</span>Português (Brasil)</a></li>
      </ul>
    </div>
  </div>
  <p class="spec__cap"><span class="cap-screen">Each option is a link with lang and hreflang, so a screen reader switches voice per option. Esc closes and returns focus to the button. In this demo, choosing a language shows a toast instead of navigating.</span><span class="cap-print">Shown open. Each option is a link with lang and hreflang, so a screen reader switches voice per option. Esc closes the list and returns focus to the button.</span></p>
</div>
  <dl class="cmp__spec"><dt>Anatomy</dt><dd>Trigger button (“Language: English”, chevron), list of links (code, native name), current marker.</dd><dt>Content rules</dt><dd>Names are written in their own language and script. Never flags: a flag is a country, not a language. Codes are decorative; the native name carries meaning.</dd><dt>States</dt><dd>Closed, open, option hover, current option (weight 600, a check icon and <code>aria-current</code>), focus-visible.</dd><dt>Direction</dt><dd>Right-to-left names render with <code>dir="rtl"</code>. The destination page sets <code>lang</code> and <code>dir</code> on <code>&lt;html&gt;</code>, so no extra announcement is needed.</dd></dl>
  <div class="cs-two cmp__use">
    <div class="cs-block"><h4>When to use</h4><ul><li>A page exists in more than one language.</li></ul></div>
    <div class="cs-block"><h4>When not to use</h4><ul><li>You are choosing a language as a form value (for example, “preferred language” in a profile). Use Select.</li><li>You want a flag picker.</li></ul></div>
  </div>
  <div class="aa">
    <h4>Accessibility checklist</h4>
    <div class="cs-table-wrap" role="region" tabindex="0" aria-label="Accessibility checklist for Language switcher">
      <table class="cs-table"><caption>Language switcher, WCAG 2.1 criteria</caption>
        <thead><tr><th scope="col">Check</th><th scope="col">Implementation</th></tr></thead>
        <tbody><tr><th scope="row">Contrast<span>1.4.3, 1.4.11</span></th><td>Trigger follows secondary Button. Options ink-900 16.4:1, codes ink-500 5.0:1, and both hold on the muted hover fill (codes 4.7:1).</td></tr><tr><th scope="row">Keyboard<span>2.1.1, 2.1.2</span></th><td>Enter or Space opens; Tab moves through options; Esc closes and returns focus to the trigger; clicking outside closes.</td></tr><tr><th scope="row">Focus<span>2.4.3, 2.4.7</span></th><td>2px <code>uxp-focus-ring-color</code> (blue-600, 4.0:1) outline at 2px offset on <code>:focus-visible</code>. Outline, not box-shadow, so it survives forced-colors mode.</td></tr><tr><th scope="row">Name, role, value<span>4.1.2, 2.5.3</span></th><td>Trigger name “Language: English” contains its visible text. <code>aria-expanded</code> and <code>aria-controls</code> on the trigger. The current option has <code>aria-current="true"</code>.</td></tr><tr><th scope="row">Announcements<span>4.1.3</span></th><td>Not needed. The new page announces its own language through <code>&lt;html lang&gt;</code>.</td></tr><tr><th scope="row">Reflow and text spacing<span>1.4.10, 1.4.12</span></th><td>List min-width 240px and capped at the viewport; long names wrap.</td></tr><tr><th scope="row">Language of parts<span>3.1.2</span></th><td>Every option carries <code>lang</code>, so “العربية” is read with an Arabic voice. Switching happens only when a link is followed, never while arrowing (3.2.2).</td></tr></tbody>
      </table>
    </div>
  </div>
  <h4 style="margin-top:28px">Tokens</h4>
  <ul class="tok-list" aria-label="Tokens used by Language switcher"><li><code>uxp-color-bg-surface</code></li><li><code>uxp-color-border-subtle</code></li><li><code>uxp-elevation-3</code></li><li><code>uxp-layer-dropdown</code></li><li><code>uxp-target-md</code></li><li><code>uxp-color-text-secondary</code></li></ul>
</section>
<section class="cmp" id="c-text-field" aria-labelledby="c-text-field-h">
  <p class="cmp__group">Inputs</p>
  <h3 id="c-text-field-h" class="uxp-text-heading-2">Text field</h3>
  <p class="cmp__purpose">Collects free text: names, emails, URLs, longer answers. The component that was rebuilt three times before Orbit existed. One component, one validation pattern, every form.</p>
  
<div class="spec">
  <div class="spec__body">
    <form class="o-form" data-form novalidate aria-labelledby="apply-h">
      <h4 id="apply-h" class="uxp-text-heading-5" style="margin:0 0 var(--uxp-space-6)">Apply for a cohort</h4>
      <div class="o-summary" role="group" aria-labelledby="sum-h" tabindex="-1" hidden data-summary>
        <h4 id="sum-h">Fix 2 fields to continue</h4>
        <ul data-summary-list></ul>
      </div>
      <div class="o-field">
        <label class="o-field__label" for="tf-name">Full name<span class="o-field__req">(required)</span></label>
        <input class="o-input" id="tf-name" name="name" type="text" autocomplete="name" required aria-describedby="tf-name-err" data-msg="Enter your full name.">
        <p class="o-field__error" id="tf-name-err" hidden><svg class="o-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10" fill="currentColor" stroke="none"/><path d="m9 9 6 6" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="m15 9-6 6" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span></span></p>
      </div>
      <div class="o-field">
        <label class="o-field__label" for="tf-email">Work email<span class="o-field__req">(required)</span></label>
        <input class="o-input" id="tf-email" name="email" type="email" autocomplete="email" inputmode="email" required aria-describedby="tf-email-help tf-email-err" placeholder="name@company.com" data-msg="Enter an email address with an @, like name@company.com.">
        <p class="o-field__help" id="tf-email-help">We only use this to confirm your application.</p>
        <p class="o-field__error" id="tf-email-err" hidden><svg class="o-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10" fill="currentColor" stroke="none"/><path d="m9 9 6 6" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="m15 9-6 6" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span></span></p>
      </div>
      <div class="o-field">
        <label class="o-field__label" for="tf-url">Portfolio link<span class="o-field__req">(optional)</span></label>
        <div class="o-affix"><span class="o-affix__pre" aria-hidden="true">https://</span><input class="o-input" id="tf-url" name="url" type="text" inputmode="url" autocomplete="url" aria-describedby="tf-url-help"></div>
        <p class="o-field__help" id="tf-url-help">Starts with https://. You can paste the full address.</p>
      </div>
      <div class="o-field">
        <label class="o-field__label" for="tf-why">Why now?<span class="o-field__req">(optional)</span></label>
        <textarea class="o-input" id="tf-why" name="why" maxlength="280" aria-describedby="tf-why-count" data-count></textarea>
        <p class="o-field__count" id="tf-why-count">280 characters left</p>
      </div>
      <div class="spec-row" style="margin-top:var(--uxp-space-6)">
        <button class="o-btn o-btn--primary" type="submit">Submit application</button>
      </div>
      <div class="o-banner o-banner--success" data-form-ok hidden tabindex="-1" style="margin-top:var(--uxp-space-6)"><svg class="o-icon o-icon--20" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10" fill="currentColor" stroke="none"/><path d="m7.5 12.5 3 3 6-6" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><div><p class="o-banner__title">Application submitted</p><p class="o-banner__text">This is a demo. Nothing was sent.</p></div><span></span></div>
    </form>
  </div>
  <div class="spec__body spec__body--muted spec-row" style="align-items:flex-start">
    <div class="o-field" style="flex:1 1 200px"><label class="o-field__label" for="tf-dis">Cohort ID</label><input class="o-input" id="tf-dis" type="text" value="DUX-27" disabled></div>
    <div class="o-field" style="flex:1 1 200px;margin-top:0"><label class="o-field__label" for="tf-ro">Applied on</label><input class="o-input" id="tf-ro" type="text" value="21 October 2026" readonly></div>
    <div class="o-field" style="flex:1 1 200px;margin-top:0"><label class="o-field__label" for="tf-otp">Verification code</label><input class="o-input" id="tf-otp" type="text" inputmode="numeric" autocomplete="one-time-code" pattern="[0-9]*" maxlength="6"></div>
  </div>
  <p class="spec__cap"><span class="cap-screen">Leave a required field empty, or type an email without an @, then press Tab: the error appears on blur, never mid-keystroke. Submit with errors and focus moves to a summary that links to each field. Bottom row: disabled, read-only, and the one-time-code configuration.</span><span class="cap-print">Errors appear on blur, never mid-keystroke. Submitting with errors moves focus to a summary that links to each field. Bottom row: disabled, read-only, and the one-time-code configuration.</span></p>
</div>
  <dl class="cmp__spec"><dt>Anatomy</dt><dd>Label (<code>uxp-text-ui-label</code>, 14/500, ink-900), “(required)” or “(optional)” in ink-500, input (<code>uxp-text-ui-input</code>, 16/400), optional prefix, helper (body-sm), error (icon plus body-sm in red-700), character count.</dd><dt>Sizes</dt><dd>sm 32px, md 44px (default), lg 52px. Same heights as Button, so a field and a button side by side line up.</dd><dt>Configurations</dt><dd><strong>Multiline</strong>: textarea, resizable vertically. <strong>Date</strong>: native <code>type="date"</code> until a date picker earns its place. <strong>One-time code</strong>: <code>inputmode="numeric"</code> and <code>autocomplete="one-time-code"</code>.</dd><dt>States</dt><dd>Default (ink-200 edge), hover (ink-300), focus (2px blue-600 edge and a soft halo), filled, error (2px red-700 edge, icon, message), disabled (muted fill, hairline edge), read-only (dashed edge on ink-50).</dd><dt>Validation</dt><dd>On blur, never while typing. On submit, a summary at the top lists every error as a link to its field, and focus moves to the summary. Messages say what to do: “Enter an email address with an @, like name@company.com”.</dd><dt>Rationale</dt><dd>Fields are light: a near-white ink-200 edge, 4px corners, a 44px height and 16px of inner padding. Each field has a visible label above it, and focus turns the edge blue. Input text is 16px so iOS Safari doesn’t zoom in on focus; labels are 14px because they’re the most-read text on a form.</dd></dl>
  <div class="cs-two cmp__use">
    <div class="cs-block"><h4>When to use</h4><ul><li>The answer is free text.</li></ul></div>
    <div class="cs-block"><h4>When not to use</h4><ul><li>The answer is one of a known short list. Use Radio group (up to 6) or Select.</li><li>You need a label. Placeholders are examples, never labels, and they vanish the moment someone types.</li></ul></div>
  </div>
  <div class="aa">
    <h4>Accessibility checklist</h4>
    <div class="cs-table-wrap" role="region" tabindex="0" aria-label="Accessibility checklist for Text field">
      <table class="cs-table"><caption>Text field, WCAG 2.1 criteria</caption>
        <thead><tr><th scope="col">Check</th><th scope="col">Implementation</th></tr></thead>
        <tbody><tr><th scope="row">Contrast<span>1.4.3, 1.4.11</span></th><td>Value ink-900 16.4:1, helper ink-500 5.0:1, error red-700 4.8:1. Placeholder ink-400 3.2:1, a documented exception. Edge ink-200 1.4:1, a documented exception.</td></tr><tr><th scope="row">Keyboard<span>2.1.1</span></th><td>Native inputs. Error summary links move focus to their field.</td></tr><tr><th scope="row">Focus<span>2.4.3, 2.4.7</span></th><td>Focus turns the edge into a 2px blue-600 line (4.0:1) with a soft <code>uxp-focus-halo</code> around it, and a transparent outline that becomes solid in forced-colors mode. On submit with errors, focus moves to the summary.</td></tr><tr><th scope="row">Name, role, value<span>4.1.2, 1.3.1</span></th><td><code>&lt;label for&gt;</code> on every field. Helper and error joined through <code>aria-describedby</code>. Invalid fields set <code>aria-invalid="true"</code>. Required fields use the <code>required</code> attribute plus visible “(required)” text.</td></tr><tr><th scope="row">Announcements<span>4.1.3</span></th><td>The character count is announced through the polite live region at 50, 20 and 0 characters left, not on every keystroke.</td></tr><tr><th scope="row">Reflow and text spacing<span>1.4.10, 1.4.12</span></th><td>Fields are full width up to 420px and never set a fixed height.</td></tr><tr><th scope="row">Input purpose and errors<span>1.3.5, 3.3.1, 3.3.2, 3.3.3</span></th><td><code>autocomplete</code> on every personal field (name, email, url, one-time-code). Errors are identified in text, not just a red border, and each message suggests the fix.</td></tr></tbody>
      </table>
    </div>
  </div>
  <h4 style="margin-top:28px">Tokens</h4>
  <ul class="tok-list" aria-label="Tokens used by Text field"><li><code>uxp-color-border-input</code></li><li><code>uxp-color-border-input-hover</code></li><li><code>uxp-focus-halo</code></li><li><code>uxp-color-text-placeholder</code></li><li><code>uxp-color-status-error-fg</code></li><li><code>uxp-color-bg-disabled</code></li><li><code>uxp-color-bg-muted</code></li><li><code>uxp-text-ui-label</code></li><li><code>uxp-text-ui-input</code></li><li><code>uxp-text-body-sm</code></li><li><code>uxp-target-md</code></li><li><code>uxp-radius-sm</code></li><li><code>uxp-space-2</code></li><li><code>uxp-space-4</code></li><li><code>uxp-border-2</code></li></ul>
</section>
<section class="cmp" id="c-select" aria-labelledby="c-select-h">
  <p class="cmp__group">Inputs</p>
  <h3 id="c-select-h" class="uxp-text-heading-2">Select</h3>
  <p class="cmp__purpose">Picks one value from a list too long for radios.</p>
  
<div class="spec">
  <div class="spec__body">
    <div class="o-field">
      <label class="o-field__label" for="sel-country">Country or region<span class="o-field__req">(required)</span></label>
      <div class="o-select-wrap"><select class="o-select" id="sel-country" autocomplete="country-name" required aria-describedby="sel-help">
        <option value="">Choose one</option>
        <option>India</option>
        <option>United Arab Emirates</option>
        <option>United Kingdom</option>
        <option>United States</option>
        <option>Somewhere else</option>
      </select></div>
      <p class="o-field__help" id="sel-help">Used to show prices in your currency.</p>
    </div>
  </div>
  <p class="spec__cap">A styled native select. The open list is the platform’s own, which is the most reliable listbox there is on phones and with screen readers.</p>
</div>
  <dl class="cmp__spec"><dt>Anatomy</dt><dd>Label, native <code>&lt;select&gt;</code> in a wrapper that draws the chevron (an icon mask filled with <code>uxp-color-text-primary</code>), helper, error. Same label, helper and error rules as Text field.</dd><dt>Sizes</dt><dd>sm 32px and md 44px, matching Text field and Button.</dd><dt>States</dt><dd>Default, hover, focus, error, disabled. Forced-colors mode falls back to the native arrow.</dd><dt>Decision</dt><dd>Native, not custom. A custom listbox is only worth building for rich options (icons, two-line items) and no shipped screen needs that yet.</dd></dl>
  <div class="cs-two cmp__use">
    <div class="cs-block"><h4>When to use</h4><ul><li>There are more than six options, or the options are a standard list (countries, months).</li></ul></div>
    <div class="cs-block"><h4>When not to use</h4><ul><li>There are six or fewer options and they fit on screen. Use Radio group: every option stays visible.</li><li>Choosing navigates somewhere. Use links (see Language switcher).</li><li>People need to pick several. Use Checkbox.</li></ul></div>
  </div>
  <div class="aa">
    <h4>Accessibility checklist</h4>
    <div class="cs-table-wrap" role="region" tabindex="0" aria-label="Accessibility checklist for Select">
      <table class="cs-table"><caption>Select, WCAG 2.1 criteria</caption>
        <thead><tr><th scope="col">Check</th><th scope="col">Implementation</th></tr></thead>
        <tbody><tr><th scope="row">Contrast<span>1.4.3, 1.4.11</span></th><td>Text ink-900 16.4:1; edge ink-200 1.4:1, a documented exception; chevron <code>uxp-color-text-primary</code> 16.4:1.</td></tr><tr><th scope="row">Keyboard<span>2.1.1</span></th><td>Native: arrows, type-ahead, Enter, Esc.</td></tr><tr><th scope="row">Focus<span>2.4.7</span></th><td>Focus turns the edge into a 2px blue-600 line (4.0:1) with a soft <code>uxp-focus-halo</code> around it, and a transparent outline that becomes solid in forced-colors mode.</td></tr><tr><th scope="row">Name, role, value<span>4.1.2, 1.3.1</span></th><td><code>&lt;label for&gt;</code>; helper and error via <code>aria-describedby</code>; <code>aria-invalid</code> on error.</td></tr><tr><th scope="row">Announcements<span>4.1.3</span></th><td>Not needed; the platform announces the value.</td></tr><tr><th scope="row">Reflow and text spacing<span>1.4.10, 1.4.12</span></th><td>Full width to 420px; min-height.</td></tr><tr><th scope="row">On input<span>3.2.2</span></th><td>Changing the value never submits a form or changes the page. Some browsers fire <code>change</code> while arrowing through a closed select, which is exactly why a select must never navigate.</td></tr></tbody>
      </table>
    </div>
  </div>
  <h4 style="margin-top:28px">Tokens</h4>
  <ul class="tok-list" aria-label="Tokens used by Select"><li><code>uxp-color-border-input</code></li><li><code>uxp-color-text-primary</code></li><li><code>uxp-focus-halo</code></li><li><code>uxp-text-ui-input</code></li><li><code>uxp-target-md</code></li><li><code>uxp-radius-sm</code></li></ul>
</section>
<section class="cmp" id="c-checkbox" aria-labelledby="c-checkbox-h">
  <p class="cmp__group">Inputs</p>
  <h3 id="c-checkbox-h" class="uxp-text-heading-2">Checkbox</h3>
  <p class="cmp__purpose">Turns one or more independent options on or off.</p>
  
<div class="spec">
  <div class="spec__body">
    <fieldset class="o-fieldset" data-checkgroup aria-describedby="cb-rule cb-err">
      <legend>Email me about</legend>
      <p class="o-fieldset__rule" id="cb-rule">Pick at least one.</p>
      <label class="o-choice"><input type="checkbox" data-check-all> <strong>Select all</strong> <span class="uxp-text-body-sm" style="color:var(--uxp-color-text-secondary)" data-check-count>(2 of 4 selected)</span></label>
      <label class="o-choice o-choice--indent"><input type="checkbox" data-check-item checked> Cohort updates</label>
      <label class="o-choice o-choice--indent"><input type="checkbox" data-check-item checked> Events and masterclasses</label>
      <label class="o-choice o-choice--indent"><input type="checkbox" data-check-item> Newsletter</label>
      <label class="o-choice o-choice--indent"><input type="checkbox" data-check-item> Podcast episodes</label>
      <p class="o-field__error" id="cb-err" hidden>Pick at least one topic, or unsubscribe from all email instead.</p>
    </fieldset>
    <div class="spec-row" style="margin-top:var(--uxp-space-4)">
      <label class="o-choice"><input type="checkbox" disabled> Disabled</label>
      <label class="o-choice"><input type="checkbox" disabled checked> Disabled, checked</label>
    </div>
  </div>
  <p class="spec__cap"><span class="cap-screen">Select all shows the mixed state when some topics are on. Clear every topic to see the group error, which is attached to the fieldset.</span><span class="cap-print">Select all shows the mixed state while some topics are on. Clearing every topic shows the group error, which is attached to the fieldset.</span></p>
</div>
  <dl class="cmp__spec"><dt>Anatomy</dt><dd>20px box (2px ink-300 edge, <code>uxp-radius-sm</code>), check or mixed bar, label. The whole row is the hit area, at least 44px tall.</dd><dt>States</dt><dd>Unchecked, checked (blue-600 fill, white mark), mixed, hover (ink-400 edge), focus-visible, disabled, error (red-700 edge on the group’s boxes plus a message).</dd><dt>Groups</dt><dd>Every group is a <code>&lt;fieldset&gt;</code> with a <code>&lt;legend&gt;</code>. The rule (“Pick at least one”) sits above the options; the error sits below them.</dd></dl>
  <div class="cs-two cmp__use">
    <div class="cs-block"><h4>When to use</h4><ul><li>Options are independent, or several can be on at once.</li><li>A single option is a yes or no that takes effect on submit (“Email me a copy”).</li></ul></div>
    <div class="cs-block"><h4>When not to use</h4><ul><li>Only one option can be chosen. Use Radio group.</li><li>The setting takes effect immediately. Use Switch.</li></ul></div>
  </div>
  <div class="aa">
    <h4>Accessibility checklist</h4>
    <div class="cs-table-wrap" role="region" tabindex="0" aria-label="Accessibility checklist for Checkbox">
      <table class="cs-table"><caption>Checkbox, WCAG 2.1 criteria</caption>
        <thead><tr><th scope="col">Check</th><th scope="col">Implementation</th></tr></thead>
        <tbody><tr><th scope="row">Contrast<span>1.4.3, 1.4.11</span></th><td>Box edge ink-300 1.7:1, a documented exception; checked fill blue-600 4.0:1; white mark on blue-600 4.0:1; labels ink-900 16.4:1.</td></tr><tr><th scope="row">Keyboard<span>2.1.1</span></th><td>Native: Tab to each box, Space toggles.</td></tr><tr><th scope="row">Focus<span>2.4.7</span></th><td>2px <code>uxp-focus-ring-color</code> (blue-600, 4.0:1) outline at 2px offset on <code>:focus-visible</code>. Outline, not box-shadow, so it survives forced-colors mode.</td></tr><tr><th scope="row">Name, role, value<span>4.1.2, 1.3.1</span></th><td>Wrapping <code>&lt;label&gt;</code>; mixed state via <code>indeterminate</code> (read as “mixed” or “half checked”); fieldset and legend name the group; rule and error joined to the fieldset through <code>aria-describedby</code>.</td></tr><tr><th scope="row">Announcements<span>4.1.3</span></th><td>The group error is announced through the polite live region when it appears.</td></tr><tr><th scope="row">Reflow and text spacing<span>1.4.10, 1.4.12</span></th><td>Rows wrap; the label grows, the box stays 20px.</td></tr><tr><th scope="row">Error identification<span>3.3.1, 3.3.2</span></th><td>The rule is stated before anyone can break it, and the error says what to do.</td></tr></tbody>
      </table>
    </div>
  </div>
  <h4 style="margin-top:28px">Tokens</h4>
  <ul class="tok-list" aria-label="Tokens used by Checkbox"><li><code>uxp-color-border-input</code></li><li><code>uxp-color-action-primary</code></li><li><code>uxp-color-action-on-primary</code></li><li><code>uxp-color-status-error-fg</code></li><li><code>uxp-color-bg-muted</code></li><li><code>uxp-target-md</code></li><li><code>uxp-border-2</code></li><li><code>uxp-radius-sm</code></li></ul>
</section>
<section class="cmp" id="c-radio-group" aria-labelledby="c-radio-group-h">
  <p class="cmp__group">Inputs</p>
  <h3 id="c-radio-group-h" class="uxp-text-heading-2">Radio group</h3>
  <p class="cmp__purpose">Picks exactly one option from a short list where every option should stay visible. Segmented control is built on it.</p>
  
<div class="spec">
  <div class="spec__body">
    <fieldset class="o-fieldset">
      <legend>Which cohort are you applying for?</legend>
      <p class="o-fieldset__rule" id="rg-rule">You can change this until applications close.</p>
      <label class="o-choice"><input type="radio" name="cohort" value="deep" aria-describedby="rg-rule" checked> Deep UX</label>
      <label class="o-choice"><input type="radio" name="cohort" value="base" aria-describedby="rg-rule"> Base UX</label>
      <label class="o-choice"><input type="radio" name="cohort" value="transition" aria-describedby="rg-rule"> Transitioning to UX</label>
    </fieldset>
  </div>
  <p class="spec__cap"><span class="cap-screen">Tab enters the group at the selected option; arrow keys move the selection.</span><span class="cap-print">Tab enters the group at the selected option; arrow keys move the selection.</span></p>
</div>
  <dl class="cmp__spec"><dt>Anatomy</dt><dd>Fieldset, legend, optional rule, 20px circle (2px ink-300 edge), 10px blue-600 dot, label.</dd><dt>States</dt><dd>Unselected, selected, hover, focus-visible, disabled, error.</dd><dt>Rules</dt><dd>Two to six options. Stack vertically. Preselect only when there is a safe default.</dd></dl>
  <div class="cs-two cmp__use">
    <div class="cs-block"><h4>When to use</h4><ul><li>Exactly one choice from two to six options.</li></ul></div>
    <div class="cs-block"><h4>When not to use</h4><ul><li>More than six options. Use Select.</li><li>The options switch a view rather than set a value. Use Segmented control or Tabs.</li></ul></div>
  </div>
  <div class="aa">
    <h4>Accessibility checklist</h4>
    <div class="cs-table-wrap" role="region" tabindex="0" aria-label="Accessibility checklist for Radio group">
      <table class="cs-table"><caption>Radio group, WCAG 2.1 criteria</caption>
        <thead><tr><th scope="col">Check</th><th scope="col">Implementation</th></tr></thead>
        <tbody><tr><th scope="row">Contrast<span>1.4.3, 1.4.11</span></th><td>Circle edge ink-300 1.7:1, a documented exception; dot blue-600 4.0:1; labels ink-900 16.4:1.</td></tr><tr><th scope="row">Keyboard<span>2.1.1</span></th><td>Native: Tab into the group, arrows change the selection.</td></tr><tr><th scope="row">Focus<span>2.4.7</span></th><td>2px <code>uxp-focus-ring-color</code> (blue-600, 4.0:1) outline at 2px offset on <code>:focus-visible</code>. Outline, not box-shadow, so it survives forced-colors mode.</td></tr><tr><th scope="row">Name, role, value<span>4.1.2, 1.3.1</span></th><td>Native radios sharing a <code>name</code>; fieldset and legend; rule joined with <code>aria-describedby</code>.</td></tr><tr><th scope="row">Announcements<span>4.1.3</span></th><td>Not needed; selection is announced natively.</td></tr><tr><th scope="row">Reflow and text spacing<span>1.4.10, 1.4.12</span></th><td>Stacked rows, labels wrap.</td></tr><tr><th scope="row">Labels<span>3.3.2</span></th><td>The legend asks the question in full.</td></tr></tbody>
      </table>
    </div>
  </div>
  <h4 style="margin-top:28px">Tokens</h4>
  <ul class="tok-list" aria-label="Tokens used by Radio group"><li><code>uxp-color-border-input</code></li><li><code>uxp-color-action-primary</code></li><li><code>uxp-target-md</code></li><li><code>uxp-border-2</code></li></ul>
</section>
<section class="cmp" id="c-switch" aria-labelledby="c-switch-h">
  <p class="cmp__group">Inputs</p>
  <h3 id="c-switch-h" class="uxp-text-heading-2">Switch</h3>
  <p class="cmp__purpose">Turns a single setting on or off, and the change takes effect immediately. If it needs a Save button, it’s a Checkbox.</p>
  
<div class="spec">
  <div class="spec__body">
    <fieldset class="o-fieldset" style="max-width:480px">
      <legend>Notifications</legend>
      <label class="o-switch"><span class="o-switch__text"><span>Email me when applications open</span><span class="o-choice__hint" id="sw1-h">Takes effect straight away.</span></span><input type="checkbox" role="switch" checked aria-describedby="sw1-h" data-switch></label>
      <label class="o-switch"><span class="o-switch__text"><span>Captions on recordings</span></span><input type="checkbox" role="switch" data-switch></label>
      <label class="o-switch"><span class="o-switch__text"><span>Weekly digest</span><span class="o-choice__hint" id="sw3-h">Available after your first cohort.</span></span><input type="checkbox" role="switch" disabled aria-describedby="sw3-h"></label>
    </fieldset>
  </div>
  <p class="spec__cap"><span class="cap-screen">Tab to a switch and press Space. A screen reader hears “Captions on recordings, switch, off”, then “on”. The change is confirmed through the live region because it takes effect immediately.</span><span class="cap-print">Space toggles a switch, and a screen reader hears “switch, on” or “off”. The change applies immediately and is confirmed through the live region.</span></p>
</div>
  <dl class="cmp__spec"><dt>Anatomy</dt><dd>Label, optional hint, track (44 by 24px, <code>uxp-radius-full</code>, 2px border), thumb (16px). The label sits at the inline start; the switch at the inline end.</dd><dt>States</dt><dd>Off (white track, ink-300 edge, ink-400 thumb), on (blue-600 track, white thumb), hover, focus-visible, disabled (with its reason as the hint).</dd><dt>Behavior</dt><dd>Applies on toggle, with no Save step. If saving can fail, the switch returns to its previous state and an inline error says why.</dd><dt>Groups</dt><dd>Related switches share a fieldset and legend, separated by hairlines.</dd></dl>
  <div class="cs-two cmp__use">
    <div class="cs-block"><h4>When to use</h4><ul><li>A setting takes effect the moment it changes (notifications, captions, preferences).</li></ul></div>
    <div class="cs-block"><h4>When not to use</h4><ul><li>The choice is submitted with a form. Use Checkbox.</li><li>There are more than two states. Use Radio group or Segmented control.</li><li>The label would need to say what “on” means. Rewrite the label so on and off are obvious.</li></ul></div>
  </div>
  <div class="aa">
    <h4>Accessibility checklist</h4>
    <div class="cs-table-wrap" role="region" tabindex="0" aria-label="Accessibility checklist for Switch">
      <table class="cs-table"><caption>Switch, WCAG 2.1 criteria</caption>
        <thead><tr><th scope="col">Check</th><th scope="col">Implementation</th></tr></thead>
        <tbody><tr><th scope="row">Contrast<span>1.4.3, 1.4.11</span></th><td>Off: ink-300 edge 1.7:1, a documented exception and ink-400 thumb 3.2:1 against white. On: blue-600 track 4.0:1 against the page, white thumb 4.0:1 against the track. Labels ink-900.</td></tr><tr><th scope="row">Keyboard<span>2.1.1</span></th><td>A native checkbox underneath: Tab to it, Space toggles.</td></tr><tr><th scope="row">Focus<span>2.4.7</span></th><td>2px <code>uxp-focus-ring-color</code> (blue-600, 4.0:1) outline at 2px offset on <code>:focus-visible</code>. Outline, not box-shadow, so it survives forced-colors mode. The ring wraps the track.</td></tr><tr><th scope="row">Name, role, value<span>4.1.2</span></th><td><code>&lt;input type="checkbox" role="switch"&gt;</code> inside its label, read as “switch, on” or “off”. Hints and disabled reasons are joined with <code>aria-describedby</code>.</td></tr><tr><th scope="row">Announcements<span>4.1.3</span></th><td>Because the change applies immediately, the result (“Captions turned on”) is confirmed through the polite live region; a failure is announced and shown inline.</td></tr><tr><th scope="row">Reflow and text spacing<span>1.4.10, 1.4.12</span></th><td>Labels wrap; the switch keeps its size at the inline end; rows use min-height.</td></tr><tr><th scope="row">Use of color<span>1.4.1</span></th><td>State is the thumb’s position as well as the fill. Forced-colors mode falls back to the native checkbox.</td></tr></tbody>
      </table>
    </div>
  </div>
  <h4 style="margin-top:28px">Tokens</h4>
  <ul class="tok-list" aria-label="Tokens used by Switch"><li><code>uxp-color-action-primary</code></li><li><code>uxp-color-action-on-primary</code></li><li><code>uxp-color-border-input</code></li><li><code>uxp-color-control-thumb</code></li><li><code>uxp-color-bg-disabled</code></li><li><code>uxp-radius-full</code></li><li><code>uxp-border-2</code></li><li><code>uxp-motion-duration-sm</code></li><li><code>uxp-target-md</code></li></ul>
</section>
<section class="cmp" id="c-segmented-control" aria-labelledby="c-segmented-control-h">
  <p class="cmp__group">Inputs</p>
  <h3 id="c-segmented-control-h" class="uxp-text-heading-2">Segmented control</h3>
  <p class="cmp__purpose">Switches between two to four mutually exclusive modes of one view, like table density.</p>
  
<div class="spec">
  <div class="spec__body">
    <fieldset class="o-seg">
      <legend>Show sessions</legend>
      <div class="o-seg__track">
        <label class="o-seg__opt"><input type="radio" name="seg-s" checked><span>Upcoming</span></label>
        <label class="o-seg__opt"><input type="radio" name="seg-s"><span>Past</span></label>
        <label class="o-seg__opt"><input type="radio" name="seg-s"><span>All</span></label>
      </div>
    </fieldset>
  </div>
  <p class="spec__cap"><span class="cap-screen">A radio group underneath, so arrow keys move the selection and screen readers announce “Past, radio button, 2 of 3”.</span><span class="cap-print">A radio group underneath, so arrow keys move the selection and a screen reader announces “Past, radio button, 2 of 3”.</span></p>
</div>
  <dl class="cmp__spec"><dt>Anatomy</dt><dd>Fieldset and legend, track (1px ink-200 edge, <code>uxp-radius-sm</code>), segments (native radios, visually replaced), selected segment (blue-600 fill, white text).</dd><dt>States</dt><dd>Default, hover, selected, focus-visible (ring on the segment).</dd><dt>Rules</dt><dd>Two to four segments, short labels, no icons without text. Changing a segment updates the view in place and never navigates.</dd></dl>
  <div class="cs-two cmp__use">
    <div class="cs-block"><h4>When to use</h4><ul><li>Two to four modes of the same content (density, list or grid, upcoming or past).</li></ul></div>
    <div class="cs-block"><h4>When not to use</h4><ul><li>The modes have their own URLs. Use Tabs or Side nav.</li><li>It sets a form value. Use Radio group.</li></ul></div>
  </div>
  <div class="aa">
    <h4>Accessibility checklist</h4>
    <div class="cs-table-wrap" role="region" tabindex="0" aria-label="Accessibility checklist for Segmented control">
      <table class="cs-table"><caption>Segmented control, WCAG 2.1 criteria</caption>
        <thead><tr><th scope="col">Check</th><th scope="col">Implementation</th></tr></thead>
        <tbody><tr><th scope="row">Contrast<span>1.4.3, 1.4.11</span></th><td>Labels ink-900 16.4:1; selected white on blue-600 4.0:1, a documented exception; the selected fill itself 4.0:1 against the track.</td></tr><tr><th scope="row">Keyboard<span>2.1.1</span></th><td>Native radio behavior: Tab in, arrows move.</td></tr><tr><th scope="row">Focus<span>2.4.7</span></th><td>2px <code>uxp-focus-ring-color</code> (blue-600, 4.0:1) outline at 2px offset on <code>:focus-visible</code>. Outline, not box-shadow, so it survives forced-colors mode. The ring is drawn on the visible segment.</td></tr><tr><th scope="row">Name, role, value<span>4.1.2</span></th><td>Native radios in a fieldset with a legend; the selected state is native <code>checked</code>.</td></tr><tr><th scope="row">Announcements<span>4.1.3</span></th><td>If the change updates content elsewhere (a table), announce the result (“Showing compact rows”).</td></tr><tr><th scope="row">Reflow and text spacing<span>1.4.10, 1.4.12</span></th><td>The track wraps at 320px.</td></tr><tr><th scope="row">Use of color<span>1.4.1</span></th><td>Selected is a filled segment, a change in both fill and text color, not hue alone.</td></tr></tbody>
      </table>
    </div>
  </div>
  <h4 style="margin-top:28px">Tokens</h4>
  <ul class="tok-list" aria-label="Tokens used by Segmented control"><li><code>uxp-color-bg-selected</code></li><li><code>uxp-color-text-inverse</code></li><li><code>uxp-color-border-input</code></li><li><code>uxp-target-md</code></li><li><code>uxp-radius-sm</code></li></ul>
</section>
<section class="cmp" id="c-search" aria-labelledby="c-search-h">
  <p class="cmp__group">Inputs</p>
  <h3 id="c-search-h" class="uxp-text-heading-2">Search</h3>
  <p class="cmp__purpose">Finds things by typing, with suggestions and filters. The input is a combobox; the rest is a contract about what happens as you type.</p>
  
<div class="spec">
  <div class="spec__body" style="min-height:380px">
    <form role="search" class="o-search" data-search aria-labelledby="srch-label" onsubmit="return false">
      <label class="o-field__label" id="srch-label" for="srch-input" style="display:block;margin-bottom:var(--uxp-space-2)">Search this case study</label>
      <div class="o-search__box">
        <svg class="o-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="11" cy="11" r="6"/><path d="m20 20-4.5-4.5"/></svg>
        <input class="o-input" id="srch-input" type="text" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="srch-list" autocomplete="off" spellcheck="false" placeholder="Try “button” or “color”">
        <kbd class="o-search__kbd" aria-hidden="true" data-kbd>Ctrl K</kbd>
      </div>
      <ul class="o-search__list" id="srch-list" role="listbox" aria-label="Suggestions" hidden></ul>
      <ul class="o-chips" aria-label="Active filters" data-chips>
        <li><button class="o-chip" type="button" data-chip="Component">Components <svg class="o-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m6 6 12 12"/><path d="M18 6 6 18"/></svg><span class="uxp-sr-only">, remove filter</span></button></li>
        <li><button class="o-chip" type="button" data-chip="Foundation">Foundations <svg class="o-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m6 6 12 12"/><path d="M18 6 6 18"/></svg><span class="uxp-sr-only">, remove filter</span></button></li>
      </ul>
      <p class="o-search__status" data-search-status>Type to see suggestions.</p>
    </form>
  </div>
  <p class="spec__cap"><span class="cap-screen">This search works on this page. Ctrl K (or Cmd K) focuses it from anywhere. Arrows move through suggestions, Enter jumps to the section, Esc closes the list, a second Esc clears. Each filter chip is its own button.</span><span class="cap-print">Ctrl K or Cmd K focuses search from anywhere. Arrows move through suggestions, Enter jumps to the section, Esc closes the list and a second Esc clears it. Each filter chip is its own button.</span></p>
</div>
  <dl class="cmp__spec"><dt>Anatomy</dt><dd><code>role="search"</code> landmark on the form, visible label, input with leading icon and shortcut hint, suggestion listbox, filter chips, result status.</dd><dt>States</dt><dd>Empty, typing with suggestions, no results (“No matches for ‘xr haptics’. Try a broader word or remove a filter.”), loading.</dd><dt>Keyboard model</dt><dd>Ctrl K or Cmd K focuses search from anywhere. Down and up move through suggestions, Enter picks, Esc closes the list, a second Esc clears the text. Backspace on an empty input removes the last chip, as a shortcut on top of the chip buttons.</dd><dt>Rationale</dt><dd>Single-key shortcuts fire while people dictate or type elsewhere, so the shortcut includes a modifier. Esc closes the suggestion list before anything else, so search inside a Modal doesn’t close the modal on the first press.</dd></dl>
  <div class="cs-two cmp__use">
    <div class="cs-block"><h4>When to use</h4><ul><li>People know what they want and can name it.</li><li>The set is large enough that browsing is slower than typing.</li></ul></div>
    <div class="cs-block"><h4>When not to use</h4><ul><li>The set is small enough to scan. Show it.</li><li>You need a single filter. Use Segmented control or Select.</li></ul></div>
  </div>
  <div class="aa">
    <h4>Accessibility checklist</h4>
    <div class="cs-table-wrap" role="region" tabindex="0" aria-label="Accessibility checklist for Search">
      <table class="cs-table"><caption>Search, WCAG 2.1 criteria</caption>
        <thead><tr><th scope="col">Check</th><th scope="col">Implementation</th></tr></thead>
        <tbody><tr><th scope="row">Contrast<span>1.4.3, 1.4.11</span></th><td>Input as Text field. Active suggestion white on blue-600 4.0:1, a documented exception. Chips are identified by their text, ink-900 on ink-100 (14.1:1), so they need no edge.</td></tr><tr><th scope="row">Keyboard<span>2.1.1, 2.1.2</span></th><td>Everything above works without a pointer. Chips are focusable buttons.</td></tr><tr><th scope="row">Focus<span>2.4.3, 2.4.7</span></th><td>2px <code>uxp-focus-ring-color</code> (blue-600, 4.0:1) outline at 2px offset on <code>:focus-visible</code>. Outline, not box-shadow, so it survives forced-colors mode. Focus stays in the input while <code>aria-activedescendant</code> tracks the highlighted suggestion.</td></tr><tr><th scope="row">Name, role, value<span>4.1.2</span></th><td>Form is the search landmark. Input is <code>role="combobox"</code> with <code>aria-expanded</code>, <code>aria-controls</code>, <code>aria-autocomplete="list"</code> and <code>aria-activedescendant</code>. Suggestions are <code>role="option"</code> with <code>aria-selected</code>. Chips read “Components, remove filter”.</td></tr><tr><th scope="row">Announcements<span>4.1.3</span></th><td>Result counts go to the polite live region, debounced to once every 400ms so typing isn’t interrupted.</td></tr><tr><th scope="row">Reflow and text spacing<span>1.4.10, 1.4.12</span></th><td>Full width to 520px; suggestions wrap; chips wrap.</td></tr><tr><th scope="row">Character key shortcuts<span>2.1.4</span></th><td>No single-key shortcuts. Ctrl K and Cmd K include a modifier, so they can’t fire while someone dictates or types elsewhere.</td></tr></tbody>
      </table>
    </div>
  </div>
  <h4 style="margin-top:28px">Tokens</h4>
  <ul class="tok-list" aria-label="Tokens used by Search"><li><code>uxp-color-bg-selected</code></li><li><code>uxp-color-border-input</code></li><li><code>uxp-elevation-3</code></li><li><code>uxp-layer-dropdown</code></li><li><code>uxp-radius-full</code></li><li><code>uxp-target-md</code></li><li><code>uxp-target-sm</code></li></ul>
</section>
<section class="cmp" id="c-banner" aria-labelledby="c-banner-h">
  <p class="cmp__group">Feedback</p>
  <h3 id="c-banner-h" class="uxp-text-heading-2">Banner</h3>
  <p class="cmp__purpose">An inline message about the page or section it sits in. It stays until the situation changes or someone dismisses it.</p>
  
<div class="spec">
  <div class="spec__body" data-banners>
    <div class="o-banner o-banner--info" data-banner><svg class="o-icon o-icon--20" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10" fill="currentColor" stroke="none"/><path d="M12 11v6" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="7.6" r="1.1" fill="#fff" stroke="none"/></svg><div><p class="o-banner__title">Every token follows one naming pattern</p><p class="o-banner__text">The <a class="o-link" href="#f-tokens">token foundation</a> shows how names are built.</p></div><button class="o-btn o-btn--tertiary o-btn--icon" type="button" aria-label="Dismiss: Every token follows one naming pattern" data-banner-dismiss><svg class="o-icon o-icon--20" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m6 6 12 12"/><path d="M18 6 6 18"/></svg></button></div>
    <div class="o-banner o-banner--success"><svg class="o-icon o-icon--20" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10" fill="currentColor" stroke="none"/><path d="m7.5 12.5 3 3 6-6" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><div><p class="o-banner__title">Tokens exported</p><p class="o-banner__text">Figma variables and CSS custom properties are in sync.</p></div><span></span></div>
    <div class="o-banner o-banner--warning"><svg class="o-icon o-icon--20" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 2.8 22.2 20.5H1.8z" fill="currentColor" stroke="currentColor" stroke-linejoin="round"/><path d="M12 9.5v4.5" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="17.2" r="1.1" fill="#fff" stroke="none"/></svg><div><p class="o-banner__title">This component is in beta</p><p class="o-banner__text">Details may change before it’s marked stable. Tell the owner before using it on a shipped screen.</p></div><span></span></div>
    <div class="o-banner o-banner--error"><svg class="o-icon o-icon--20" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10" fill="currentColor" stroke="none"/><path d="m9 9 6 6" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="m15 9-6 6" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><div><p class="o-banner__title">Export failed</p><p class="o-banner__text">Two tokens point at a primitive that doesn’t exist. <a class="o-link" href="#f-tokens">Check the naming rules</a></p></div><span></span></div>
    <button class="o-btn o-btn--secondary o-btn--sm" type="button" data-banner-restore hidden style="margin-top:var(--uxp-space-3)">Show the dismissed banner</button>
  </div>
  <p class="spec__cap">Each status has its own icon shape, so the message never depends on hue. Dismissing the first banner moves focus to the control that replaces it, instead of dropping focus on the page body.</p>
</div>
  <dl class="cmp__spec"><dt>Anatomy</dt><dd>Status icon (20px, distinct shape per status), title, text, optional action link, optional dismiss button, on the status tint with <code>uxp-radius-sm</code>. No border and no stripe: the icon and title carry the status.</dd><dt>Variants</dt><dd>Info (circle i), success (circle check), warning (triangle), error (circle x).</dd><dt>Links</dt><dd>Links inside a banner use <code>uxp-color-text-link-on-tint</code> and stay underlined.</dd><dt>Placement</dt><dd>At the top of the region it describes. Page-level banners sit under the header; form-level banners above the form.</dd><dt>Live behavior</dt><dd>Banners present on load have no live role. A banner inserted after an action uses <code>role="status"</code> (info, success) or <code>role="alert"</code> (error only).</dd></dl>
  <div class="cs-two cmp__use">
    <div class="cs-block"><h4>When to use</h4><ul><li>The message is about a whole page or section and stays true until something changes.</li></ul></div>
    <div class="cs-block"><h4>When not to use</h4><ul><li>It confirms an action someone just took. Use Toast.</li><li>It is about one field. Use the field’s error message.</li><li>It is promotional. Banners are for state, not marketing.</li></ul></div>
  </div>
  <div class="aa">
    <h4>Accessibility checklist</h4>
    <div class="cs-table-wrap" role="region" tabindex="0" aria-label="Accessibility checklist for Banner">
      <table class="cs-table"><caption>Banner, WCAG 2.1 criteria</caption>
        <thead><tr><th scope="col">Check</th><th scope="col">Implementation</th></tr></thead>
        <tbody><tr><th scope="row">Contrast<span>1.4.3, 1.4.11</span></th><td>Text ink-900 on every tint (14.9:1 or better). Links use <code>uxp-color-text-link-on-tint</code>, blue-700 (4.9:1 or better). Icons use the status <code>-on-tint</code> tokens: success 4.5:1, error 5.8:1, warning 4.5:1, info 5.0:1.</td></tr><tr><th scope="row">Keyboard<span>2.1.1</span></th><td>Links and dismiss are native controls.</td></tr><tr><th scope="row">Focus<span>2.4.3, 2.4.7</span></th><td>2px <code>uxp-focus-ring-color</code> (blue-600, 4.0:1) outline at 2px offset on <code>:focus-visible</code>. Outline, not box-shadow, so it survives forced-colors mode. On dismiss, focus moves to the next logical control, never to <code>&lt;body&gt;</code>.</td></tr><tr><th scope="row">Name, role, value<span>4.1.2, 1.1.1</span></th><td>Dismiss is named for what it dismisses (“Dismiss: Export failed”). Status icons are decorative because the title states the status in words.</td></tr><tr><th scope="row">Announcements<span>4.1.3</span></th><td>Inserted banners use <code>role="status"</code>, or <code>role="alert"</code> for errors that block progress.</td></tr><tr><th scope="row">Reflow and text spacing<span>1.4.10, 1.4.12</span></th><td>Grid layout; text wraps; no fixed height.</td></tr><tr><th scope="row">Use of color<span>1.4.1</span></th><td>Status is carried by icon shape and title, not by tint. Warning is yellow (48°), well away from brand orange (31°), and always shows the triangle.</td></tr></tbody>
      </table>
    </div>
  </div>
  <h4 style="margin-top:28px">Tokens</h4>
  <ul class="tok-list" aria-label="Tokens used by Banner"><li><code>uxp-color-status-info-tint</code></li><li><code>uxp-color-status-info-on-tint</code></li><li><code>uxp-color-status-success-tint</code></li><li><code>uxp-color-status-warning-tint</code></li><li><code>uxp-color-status-error-tint</code></li><li><code>uxp-color-text-link-on-tint</code></li><li><code>uxp-radius-sm</code></li></ul>
</section>
<section class="cmp" id="c-toast" aria-labelledby="c-toast-h">
  <p class="cmp__group">Feedback</p>
  <h3 id="c-toast-h" class="uxp-text-heading-2">Toast</h3>
  <p class="cmp__purpose">A short confirmation of something someone just did. It never carries the only copy of important information.</p>
  
<div class="spec">
  <div class="spec__body spec-row">
    <button class="o-btn o-btn--secondary" type="button" data-toast="Saved to drafts">Save to drafts</button>
    <button class="o-btn o-btn--secondary" type="button" data-toast="Token deprecated" data-toast-undo>Deprecate a token</button>
    <div class="print-only" aria-hidden="true" style="flex-basis:100%"><div class="o-toast" style="max-width:400px"><p>Token deprecated</p><span class="o-btn o-btn--tertiary o-btn--sm">Undo</span><span class="o-btn o-btn--tertiary o-btn--icon o-btn--sm"><svg class="o-icon o-icon--20" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m6 6 12 12"/><path d="M18 6 6 18"/></svg></span></div></div>
  </div>
  <p class="spec__cap"><span class="cap-screen">A toast without an action stays at least 6 seconds and pauses while hovered or focused. A toast with Undo stays until it is used or dismissed. Neither steals focus.</span><span class="cap-print">Shown: a toast with Undo, which stays until it is used or dismissed. Toasts without an action stay at least 6 seconds and pause while hovered or focused. Neither takes focus.</span></p>
</div>
  <dl class="cmp__spec"><dt>Anatomy</dt><dd>Message, optional single action (Undo), dismiss button. White surface with a hairline and elevation-3, <code>uxp-radius-sm</code>, inline-end bottom corner, <code>uxp-layer-toast</code>.</dd><dt>Timing</dt><dd>Without an action: at least 6 seconds, paused on hover and focus, dismissible. With an action: persistent until acted on or dismissed.</dd><dt>Wording</dt><dd>Past tense of the action’s own verb: the button that says “Deprecate” produces “Token deprecated”.</dd><dt>Stacking</dt><dd>Up to three, newest at the bottom. More than three means the flow is too noisy.</dd></dl>
  <div class="cs-two cmp__use">
    <div class="cs-block"><h4>When to use</h4><ul><li>Confirming an action that just happened, especially one that can be undone.</li></ul></div>
    <div class="cs-block"><h4>When not to use</h4><ul><li>The message must be read, or it requires a decision. Use Banner or Modal.</li><li>It reports an error. Errors go inline, next to what caused them.</li></ul></div>
  </div>
  <div class="aa">
    <h4>Accessibility checklist</h4>
    <div class="cs-table-wrap" role="region" tabindex="0" aria-label="Accessibility checklist for Toast">
      <table class="cs-table"><caption>Toast, WCAG 2.1 criteria</caption>
        <thead><tr><th scope="col">Check</th><th scope="col">Implementation</th></tr></thead>
        <tbody><tr><th scope="row">Contrast<span>1.4.3, 1.4.11</span></th><td>Message ink-900 16.4:1 on white. Undo is a tertiary button, blue-600 4.0:1, a documented exception. The surface is lifted by elevation, not by a dark fill.</td></tr><tr><th scope="row">Keyboard<span>2.1.1</span></th><td>Undo and dismiss are buttons, reachable with Tab. The toast region sits at the end of the page in DOM order.</td></tr><tr><th scope="row">Focus<span>2.4.3, 2.4.7</span></th><td>Focus is never moved to a toast. Its buttons use the standard focus ring.</td></tr><tr><th scope="row">Name, role, value<span>4.1.2</span></th><td>Dismiss reads “Dismiss notification”. Undo reads “Undo”, followed by the message through the live region.</td></tr><tr><th scope="row">Announcements<span>4.1.3</span></th><td>The message is announced through the system’s polite live region, which exists on page load, so it is read reliably. The buttons stay out of the announcement.</td></tr><tr><th scope="row">Reflow and text spacing<span>1.4.10, 1.4.12</span></th><td>Max width 400px, full width minus margins below 480px.</td></tr><tr><th scope="row">Timing<span>2.2.1</span></th><td>Nothing essential auto-dismisses. Anything with an action waits for the person; anything without one pauses while they’re looking at it.</td></tr></tbody>
      </table>
    </div>
  </div>
  <h4 style="margin-top:28px">Tokens</h4>
  <ul class="tok-list" aria-label="Tokens used by Toast"><li><code>uxp-color-bg-surface</code></li><li><code>uxp-color-text-primary</code></li><li><code>uxp-color-border-subtle</code></li><li><code>uxp-elevation-3</code></li><li><code>uxp-layer-toast</code></li><li><code>uxp-radius-sm</code></li><li><code>uxp-motion-duration-md</code></li><li><code>uxp-motion-ease-out-expo</code></li></ul>
</section>
<section class="cmp" id="c-badge" aria-labelledby="c-badge-h">
  <p class="cmp__group">Feedback</p>
  <h3 id="c-badge-h" class="uxp-text-heading-2">Badge</h3>
  <p class="cmp__purpose">A short, static label for status or category.</p>
  
<div class="spec">
  <div class="spec__body spec-row">
    <span class="o-badge o-badge--success">Stable</span>
    <span class="o-badge o-badge--info">Beta</span>
    <span class="o-badge o-badge--neutral">Draft</span>
    <span class="o-badge o-badge--warning">Deprecated</span>
    <span class="o-badge o-badge--error">Failing</span>
    <span class="o-badge o-badge--neutral">Component</span>
  </div>
  <p class="spec__cap">Text on a tint uses the status <code>-on-tint</code> token, which is why Beta reads at 5.0:1.</p>
</div>
  <dl class="cmp__spec"><dt>Anatomy</dt><dd>Label (12/600) on a status tint, <code>uxp-radius-sm</code>. No dot: the word carries the status.</dd><dt>Variants</dt><dd>Neutral (<code>uxp-color-status-neutral-tint</code> and <code>-on-tint</code>), info, success, warning, error (status tint and <code>-on-tint</code>).</dd><dt>Lifecycle mapping</dt><dd>Orbit’s own docs use Draft (neutral), Beta (info), Stable (success), Deprecated (warning).</dd></dl>
  <div class="cs-two cmp__use">
    <div class="cs-block"><h4>When to use</h4><ul><li>A short label helps someone scan a list or table.</li></ul></div>
    <div class="cs-block"><h4>When not to use</h4><ul><li>It is clickable. Use a Button or Link; a filter chip lives in Search.</li><li>The label needs more than two words.</li></ul></div>
  </div>
  <div class="aa">
    <h4>Accessibility checklist</h4>
    <div class="cs-table-wrap" role="region" tabindex="0" aria-label="Accessibility checklist for Badge">
      <table class="cs-table"><caption>Badge, WCAG 2.1 criteria</caption>
        <thead><tr><th scope="col">Check</th><th scope="col">Implementation</th></tr></thead>
        <tbody><tr><th scope="row">Contrast<span>1.4.3</span></th><td>Text on tint: success 4.5:1, error 5.8:1, warning 4.5:1, info 5.0:1, neutral ink-700 on ink-100 7.8:1.</td></tr><tr><th scope="row">Keyboard<span>2.1.1</span></th><td>Not applicable. Badges are static text and are not focusable.</td></tr><tr><th scope="row">Focus<span>2.4.7</span></th><td>Not applicable.</td></tr><tr><th scope="row">Name, role, value<span>4.1.2, 1.3.1</span></th><td>Plain text. The dot is <code>aria-hidden</code>. In tables, the column header gives the badge its context.</td></tr><tr><th scope="row">Announcements<span>4.1.3</span></th><td>If a badge changes after load (Draft to Stable), announce the change through the live region.</td></tr><tr><th scope="row">Reflow and text spacing<span>1.4.10, 1.4.12</span></th><td>No fixed width; padding, not height.</td></tr><tr><th scope="row">Use of color<span>1.4.1</span></th><td>Every badge has a text label. Color is a second cue, never the only one.</td></tr></tbody>
      </table>
    </div>
  </div>
  <h4 style="margin-top:28px">Tokens</h4>
  <ul class="tok-list" aria-label="Tokens used by Badge"><li><code>uxp-color-status-neutral-tint</code></li><li><code>uxp-color-status-neutral-on-tint</code></li><li><code>uxp-color-status-success-tint</code></li><li><code>uxp-color-status-success-on-tint</code></li><li><code>uxp-radius-full</code></li><li><code>uxp-space-1</code></li><li><code>uxp-space-3</code></li></ul>
</section>
<section class="cmp" id="c-tooltip" aria-labelledby="c-tooltip-h">
  <p class="cmp__group">Feedback</p>
  <h3 id="c-tooltip-h" class="uxp-text-heading-2">Tooltip</h3>
  <p class="cmp__purpose">A short text label or description that appears on hover and focus. Never interactive, never the only place information lives.</p>
  
<div class="spec">
  <div class="spec__body spec-row" style="padding-top:72px">
    <span class="o-tip" data-tip>
      <button class="o-btn o-btn--tertiary o-btn--icon" type="button" aria-labelledby="tip-copy"><svg class="o-icon o-icon--20" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="9" y="9" width="11" height="11" rx="1.5"/><path d="M15 9V5.5A1.5 1.5 0 0 0 13.5 4h-8A1.5 1.5 0 0 0 4 5.5v8A1.5 1.5 0 0 0 5.5 15H9"/></svg></button>
      <span class="o-tip__bubble" role="tooltip" id="tip-copy" hidden>Copy token name</span>
    </span>
    <span class="o-tip" data-tip>
      <button class="o-btn o-btn--secondary" type="button" aria-describedby="tip-export">Export <svg class="o-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 4v11"/><path d="m7 10 5 5 5-5"/><path d="M5 20h14"/></svg></button>
      <span class="o-tip__bubble" role="tooltip" id="tip-export" hidden>Writes Figma variables and CSS custom properties</span>
    </span>
  </div>
  <p class="spec__cap"><span class="cap-screen">Hover or Tab to each button. The first tooltip is the icon button’s name; the second adds a description. Esc hides a tooltip without moving focus, and the pointer can move onto it without it vanishing.</span><span class="cap-print">Both tooltips shown. The first is the icon button’s name; the second adds a description. Esc hides a tooltip without moving focus, and the pointer can move onto it without it disappearing.</span></p>
</div>
  <dl class="cmp__spec"><dt>Anatomy</dt><dd>Trigger (a focusable control), bubble (ink-700, 13/500, <code>uxp-radius-sm</code>), 8px gap with an invisible bridge so the pointer can cross it.</dd><dt>Uses</dt><dd><strong>Label</strong>: names an icon-only button (<code>aria-labelledby</code>). <strong>Description</strong>: adds a short note to a labelled control (<code>aria-describedby</code>).</dd><dt>Behavior</dt><dd>Shows on hover after 300ms and immediately on focus. Hides on blur, on pointer leave (after 100ms), and on Esc.</dd><dt>Touch</dt><dd>Touch has no hover, so anything a touch user needs must also be visible as text.</dd></dl>
  <div class="cs-two cmp__use">
    <div class="cs-block"><h4>When to use</h4><ul><li>An icon-only button needs a visible name on hover.</li><li>A control benefits from one sentence of extra context.</li></ul></div>
    <div class="cs-block"><h4>When not to use</h4><ul><li>It contains a link, a button, or anything to click. Use Menu for actions; other interactive content needs a popover, which is in the backlog.</li><li>The information is required to complete a task. Put it on the page.</li></ul></div>
  </div>
  <div class="aa">
    <h4>Accessibility checklist</h4>
    <div class="cs-table-wrap" role="region" tabindex="0" aria-label="Accessibility checklist for Tooltip">
      <table class="cs-table"><caption>Tooltip, WCAG 2.1 criteria</caption>
        <thead><tr><th scope="col">Check</th><th scope="col">Implementation</th></tr></thead>
        <tbody><tr><th scope="row">Contrast<span>1.4.3</span></th><td>White on ink-700 9.0:1.</td></tr><tr><th scope="row">Keyboard<span>2.1.1</span></th><td>Appears on keyboard focus, not just hover.</td></tr><tr><th scope="row">Focus<span>2.4.7</span></th><td>The trigger keeps its own focus ring; the tooltip never takes focus.</td></tr><tr><th scope="row">Name, role, value<span>4.1.2</span></th><td><code>role="tooltip"</code>, connected with <code>aria-labelledby</code> (label use) or <code>aria-describedby</code> (description use).</td></tr><tr><th scope="row">Announcements<span>4.1.3</span></th><td>Not needed; the relationship attribute does the work.</td></tr><tr><th scope="row">Reflow and text spacing<span>1.4.10, 1.4.12</span></th><td>Bubble wraps at 240px when space is tight.</td></tr><tr><th scope="row">Content on hover or focus<span>1.4.13</span></th><td>Dismissible (Esc), hoverable (pointer can move onto it), persistent (stays until hover or focus leaves).</td></tr></tbody>
      </table>
    </div>
  </div>
  <h4 style="margin-top:28px">Tokens</h4>
  <ul class="tok-list" aria-label="Tokens used by Tooltip"><li><code>uxp-color-bg-inverse</code></li><li><code>uxp-color-text-inverse</code></li><li><code>uxp-layer-tooltip</code></li><li><code>uxp-elevation-3</code></li><li><code>uxp-radius-sm</code></li></ul>
</section>
<section class="cmp" id="c-card" aria-labelledby="c-card-h">
  <p class="cmp__group">Containers</p>
  <h3 id="c-card-h" class="uxp-text-heading-2">Card</h3>
  <p class="cmp__purpose">Groups one item’s content so it can sit in a collection. Four variants, because the structure inside genuinely differs.</p>
  
<div class="spec">
  <div class="spec__body spec__body--muted">
    <div class="o-cards">
      <article class="o-card o-card--clickable">
        <h4 class="o-card__title"><a class="o-card__link" href="#c-card">Case Study Storytelling</a></h4>
        <p>A handbook on writing case studies that show thinking, not process.</p>
        <p class="o-card__meta">Handbook</p>
      </article>
      <article class="o-card o-card--media">
        <div class="o-card__media" role="img" aria-label="The brand gradient at hero scale, running blue to purple to orange"></div>
        <div class="o-card__body"><h4 class="o-card__title">Brand gradient</h4><p>Image-first card. Crops at 16:9.</p></div>
      </article>
      <article class="o-card o-card--feature">
        <p class="o-card__stat">182</p>
        <h4 class="o-card__title" style="font-size:1rem">tokens in Orbit</h4>
        <p>Values, text styles and breakpoints.</p>
      </article>
      <figure class="o-card o-card--feature" style="margin:0">
        <blockquote>“Decisions are made once in the system, so they aren’t made again on every screen.”</blockquote>
        <figcaption>Orbit, the gradient problem</figcaption>
      </figure>
    </div>
  </div>
  <p class="spec__cap">The first card is clickable: its title is the link, stretched over the card. Nothing else on the card is hidden from screen readers.</p>
</div>
  <dl class="cmp__spec"><dt>Anatomy</dt><dd>Container (1px ink-100 hairline, <code>uxp-radius-sm</code>), optional media (16:9), title (<code>&lt;h4&gt;</code> or the level that fits the page), body, meta.</dd><dt>Variants</dt><dd>Content, media, stat, quote. Stat and quote are feature cards.</dd><dt>Padding</dt><dd>Standard: <code>uxp-space-6</code> (24px). Feature: <code>uxp-space-8</code> (32px). Media image: none, full bleed.</dd><dt>Clickable cards</dt><dd>The title is the only link. Its <code>::after</code> stretches over the card, so the whole card is the hit area while the name stays the title. Focus ring draws on the stretched area. Resting elevation-1, hover elevation-2. Cards never nest.</dd></dl>
  <div class="cs-two cmp__use">
    <div class="cs-block"><h4>When to use</h4><ul><li>Several items of the same kind sit side by side and each needs its own boundary.</li></ul></div>
    <div class="cs-block"><h4>When not to use</h4><ul><li>There is only one item. That is section content.</li><li>The border is there to make static text feel designed.</li><li>It’s used to make thin content look substantial.</li></ul></div>
  </div>
  <div class="aa">
    <h4>Accessibility checklist</h4>
    <div class="cs-table-wrap" role="region" tabindex="0" aria-label="Accessibility checklist for Card">
      <table class="cs-table"><caption>Card, WCAG 2.1 criteria</caption>
        <thead><tr><th scope="col">Check</th><th scope="col">Implementation</th></tr></thead>
        <tbody><tr><th scope="row">Contrast<span>1.4.3, 1.4.11</span></th><td>Title ink-900 16.4:1, body and meta ink-500 5.0:1. The ink-100 hairline is decorative: the card’s identity comes from its title, so 1.4.11 does not require 3:1 here.</td></tr><tr><th scope="row">Keyboard<span>2.1.1</span></th><td>One tab stop per clickable card (the title link). Cards with several actions are not clickable as a whole.</td></tr><tr><th scope="row">Focus<span>2.4.7</span></th><td>Ring on the stretched link area, 2px blue-600 at 2px offset.</td></tr><tr><th scope="row">Name, role, value<span>4.1.2, 1.3.1</span></th><td>Cards are <code>&lt;article&gt;</code>; quotes are <code>&lt;figure&gt;</code>, <code>&lt;blockquote&gt;</code> and <code>&lt;figcaption&gt;</code>. Nothing is <code>aria-hidden</code> except decoration.</td></tr><tr><th scope="row">Announcements<span>4.1.3</span></th><td>Not applicable.</td></tr><tr><th scope="row">Reflow and text spacing<span>1.4.10, 1.4.12</span></th><td>Grid of <code>minmax(240px, 1fr)</code> collapses to one column; cards grow with content.</td></tr><tr><th scope="row">Non-text content<span>1.1.1</span></th><td>Media that carries meaning gets alt text; decorative media gets empty alt. The media card above describes what the image shows.</td></tr></tbody>
      </table>
    </div>
  </div>
  <h4 style="margin-top:28px">Tokens</h4>
  <ul class="tok-list" aria-label="Tokens used by Card"><li><code>uxp-color-bg-surface</code></li><li><code>uxp-color-border-subtle</code></li><li><code>uxp-elevation-1</code></li><li><code>uxp-elevation-2</code></li><li><code>uxp-space-6</code></li><li><code>uxp-space-8</code></li><li><code>uxp-radius-sm</code></li><li><code>uxp-focus-ring-color</code></li></ul>
</section>
<section class="cmp" id="c-accordion" aria-labelledby="c-accordion-h">
  <p class="cmp__group">Containers</p>
  <h3 id="c-accordion-h" class="uxp-text-heading-2">Accordion</h3>
  <p class="cmp__purpose">Shows and hides sections of long, parallel content. Built on the heading-plus-button pattern so each section is a real heading.</p>
  
<div class="spec">
  <div class="spec__body">
    <div class="o-acc" data-acc data-single>
      <div class="o-acc__item">
        <h4 class="o-acc__h"><button class="o-acc__btn" type="button" aria-expanded="true" aria-controls="acc-p1" id="acc-b1">When does a card become a section?<svg class="o-icon o-icon--20" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m6 9 6 6 6-6"/></svg></button></h4>
        <div class="o-acc__panel" id="acc-p1" role="region" aria-labelledby="acc-b1" data-open="true"><div><p>When the content earns the visual weight of the page around it. A card with eight items in it is a section that hasn’t noticed it is a section.</p></div></div>
      </div>
      <div class="o-acc__item">
        <h4 class="o-acc__h"><button class="o-acc__btn" type="button" aria-expanded="false" aria-controls="acc-p2" id="acc-b2">Why aren’t two typefaces enough?<svg class="o-icon o-icon--20" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m6 9 6 6 6-6"/></svg></button></h4>
        <div class="o-acc__panel" id="acc-p2" role="region" aria-labelledby="acc-b2" data-open="false" hidden><div><p>Eyebrows, token names and data had nowhere to go but italics or all caps. A mono accent gives them their own voice without a fourth face.</p></div></div>
      </div>
      <div class="o-acc__item">
        <h4 class="o-acc__h"><button class="o-acc__btn" type="button" aria-expanded="false" aria-controls="acc-p3" id="acc-b3">When does a project need a system?<svg class="o-icon o-icon--20" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m6 9 6 6 6-6"/></svg></button></h4>
        <div class="o-acc__panel" id="acc-p3" role="region" aria-labelledby="acc-b3" data-open="false" hidden><div><p>When the honest answer to “which version of this do I copy?” is “I don’t know”.</p></div></div>
      </div>
    </div>
  </div>
  <p class="spec__cap"><span class="cap-screen">Single-expand. Each question is a heading, so screen reader users can jump between them with the H key. Animation uses the motion tokens and collapses to an instant change under reduced motion.</span><span class="cap-print">Single-expand. Each question is a heading, so screen reader users can jump between them. Motion uses the motion tokens and becomes instant under reduced motion.</span></p>
</div>
  <dl class="cmp__spec"><dt>Anatomy</dt><dd>Heading (level that fits the page) wrapping a button, chevron (decorative), panel region.</dd><dt>Variants</dt><dd><strong>Single-expand</strong> for FAQs: opening one closes the others. <strong>Multi-expand</strong> for dense settings or syllabi where people compare panels.</dd><dt>Motion</dt><dd>Panel animates <code>grid-template-rows</code> from 0fr to 1fr over <code>uxp-motion-duration-md</code> (280ms) on <code>uxp-motion-ease-out-expo</code>; the chevron shares the curve.</dd><dt>Rationale</dt><dd>A heading inside <code>&lt;summary&gt;</code> loses its heading role in several screen readers. Eyebrow labels never go inside the button, where they would be read as part of every name.</dd></dl>
  <div class="cs-two cmp__use">
    <div class="cs-block"><h4>When to use</h4><ul><li>Parallel sections are long, and people need one or two at a time.</li></ul></div>
    <div class="cs-block"><h4>When not to use</h4><ul><li>Panels are short. Use Tabs, or just show them.</li><li>Someone might link to a panel. Make it a page.</li><li>Most people need every panel. Hiding it all is a cost, not a saving.</li></ul></div>
  </div>
  <div class="aa">
    <h4>Accessibility checklist</h4>
    <div class="cs-table-wrap" role="region" tabindex="0" aria-label="Accessibility checklist for Accordion">
      <table class="cs-table"><caption>Accordion, WCAG 2.1 criteria</caption>
        <thead><tr><th scope="col">Check</th><th scope="col">Implementation</th></tr></thead>
        <tbody><tr><th scope="row">Contrast<span>1.4.3, 1.4.11</span></th><td>Questions ink-900 16.4:1, answers ink-500 5.0:1, chevron ink-900.</td></tr><tr><th scope="row">Keyboard<span>2.1.1</span></th><td>Each header is a native button: Tab moves between them, Enter or Space toggles.</td></tr><tr><th scope="row">Focus<span>2.4.7</span></th><td>2px <code>uxp-focus-ring-color</code> (blue-600, 4.0:1) outline at 2px offset on <code>:focus-visible</code>. Outline, not box-shadow, so it survives forced-colors mode.</td></tr><tr><th scope="row">Name, role, value<span>4.1.2, 1.3.1</span></th><td>Heading wraps a button with <code>aria-expanded</code> and <code>aria-controls</code>. Panels are labelled regions and are <code>hidden</code> when closed, so their content leaves the reading order.</td></tr><tr><th scope="row">Announcements<span>4.1.3</span></th><td>Not needed; expanded state is announced from <code>aria-expanded</code>.</td></tr><tr><th scope="row">Reflow and text spacing<span>1.4.10, 1.4.12</span></th><td>The grid-rows technique never measures height, so enlarged text can’t be clipped by a stale pixel value.</td></tr><tr><th scope="row">Motion<span>beyond AA</span></th><td>Reduced motion makes the change instant (2.3.3 is AAA; Orbit does it by default).</td></tr></tbody>
      </table>
    </div>
  </div>
  <h4 style="margin-top:28px">Tokens</h4>
  <ul class="tok-list" aria-label="Tokens used by Accordion"><li><code>uxp-motion-duration-md</code></li><li><code>uxp-motion-ease-out-expo</code></li><li><code>uxp-color-border-subtle</code></li><li><code>uxp-target-md</code></li><li><code>uxp-color-text-secondary</code></li></ul>
</section>
<section class="cmp" id="c-modal" aria-labelledby="c-modal-h">
  <p class="cmp__group">Containers</p>
  <h3 id="c-modal-h" class="uxp-text-heading-2">Modal</h3>
  <p class="cmp__purpose">Interrupts to ask for a decision or a short task, then gets out of the way. Built on the native <code>&lt;dialog&gt;</code> element.</p>
  
<div class="spec">
  <div class="spec__body spec-row">
    <button class="o-btn o-btn--destructive" type="button" data-modal-open="dlg-delete">Delete draft</button>
    <button class="o-btn o-btn--secondary" type="button" data-modal-open="dlg-notes">Read the contribution guide</button>
  </div>
  <dialog class="o-modal" id="dlg-delete" role="alertdialog" aria-labelledby="dlg-delete-t" aria-describedby="dlg-delete-d" data-dismiss-outside>
    <div class="o-modal__inner">
      <div class="o-modal__head"><h2 class="o-modal__title" id="dlg-delete-t">Delete this draft?</h2><button class="o-btn o-btn--tertiary o-btn--icon" type="button" aria-label="Close" data-modal-close><svg class="o-icon o-icon--20" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m6 6 12 12"/><path d="M18 6 6 18"/></svg></button></div>
      <div class="o-modal__body"><p id="dlg-delete-d">The draft and its comments will be removed. This can’t be undone.</p></div>
      <div class="o-modal__foot"><button class="o-btn o-btn--secondary" type="button" data-modal-close data-autofocus>Keep editing</button><button class="o-btn o-btn--destructive" type="button" data-modal-close data-modal-result="Draft deleted">Delete draft</button></div>
    </div>
  </dialog>
  <dialog class="o-modal o-modal--lg" id="dlg-notes" aria-labelledby="dlg-notes-t">
    <div class="o-modal__inner">
      <div class="o-modal__head"><h2 class="o-modal__title" id="dlg-notes-t">Contributing a component</h2><button class="o-btn o-btn--tertiary o-btn--icon" type="button" aria-label="Close" data-modal-close data-autofocus><svg class="o-icon o-icon--20" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m6 6 12 12"/><path d="M18 6 6 18"/></svg></button></div>
      <div class="o-modal__body">
        <p style="margin-bottom:var(--uxp-space-3)">Bring screenshots of the pattern on three shipped screens. If it passes the entry criteria, build it in Figma and code with matching names, write its docs from the template, and fill every row of its WCAG 2.1 AA checklist. An accessibility reviewer who didn’t build it signs it off.</p>
        <p>This is a large modal: clicking the backdrop does not close it, so an accidental click can’t lose someone’s place in a long read. Esc and the close button still work.</p>
      </div>
      <div class="o-modal__foot"><button class="o-btn o-btn--primary" type="button" data-modal-close>Done</button></div>
    </div>
  </dialog>
  <p class="spec__cap"><span class="cap-screen">The delete confirmation is an alertdialog and opens on “Keep editing”, the safe choice. Focus returns to the button that opened it. The background is inert while either is open.</span><span class="cap-print">Shown: the delete confirmation, an alertdialog that opens on “Keep editing”, the safe choice. Focus returns to the button that opened it, and the page behind is inert while it is open.</span></p>
</div>
  <dl class="cmp__spec"><dt>Anatomy</dt><dd>Backdrop (<code>uxp-color-bg-overlay</code>), container (<code>uxp-radius-sm</code>, elevation-4, 1px transparent border that becomes visible in forced-colors mode), header with title and close, body (max 60ch), footer (ink-50, actions at the inline end).</dd><dt>Sizes</dt><dd>sm 400px (confirmations), md 560px (short forms), lg 800px (reading). Below 480px all sizes go full width with 16px margins and footer buttons stack; lg becomes a full-screen sheet.</dd><dt>Behavior</dt><dd>Opens with <code>showModal()</code>, which makes the rest of the page inert. Esc closes. Backdrop click closes sm and md only. Body scrolls inside, the page doesn’t. Focus returns to the trigger, or to a sensible fallback if the trigger is gone.</dd><dt>Initial focus</dt><dd>Destructive confirmations: the safe action. Forms: the first field. Reading: the close button.</dd></dl>
  <div class="cs-two cmp__use">
    <div class="cs-block"><h4>When to use</h4><ul><li>A decision has to be made before continuing.</li><li>A task is short enough to finish in one or two steps.</li></ul></div>
    <div class="cs-block"><h4>When not to use</h4><ul><li>The task has three or more steps. Give it a page with a URL; modals don’t survive a reload.</li><li>You’re warning about something they aren’t doing. Use Banner.</li><li>You’re confirming something that already happened. Use Toast.</li><li>You’re upselling. Use a section.</li></ul></div>
  </div>
  <div class="aa">
    <h4>Accessibility checklist</h4>
    <div class="cs-table-wrap" role="region" tabindex="0" aria-label="Accessibility checklist for Modal">
      <table class="cs-table"><caption>Modal, WCAG 2.1 criteria</caption>
        <thead><tr><th scope="col">Check</th><th scope="col">Implementation</th></tr></thead>
        <tbody><tr><th scope="row">Contrast<span>1.4.3, 1.4.11</span></th><td>Title ink-900, body ink-900, footer actions per Button. Backdrop is decorative.</td></tr><tr><th scope="row">Keyboard<span>2.1.1, 2.1.2</span></th><td>Tab cycles within the dialog; Esc always closes, so focus is contained but never trapped.</td></tr><tr><th scope="row">Focus<span>2.4.3, 2.4.7</span></th><td>Initial focus by the rules above; focus returns to the trigger on close. 2px <code>uxp-focus-ring-color</code> (blue-600, 4.0:1) outline at 2px offset on <code>:focus-visible</code>. Outline, not box-shadow, so it survives forced-colors mode.</td></tr><tr><th scope="row">Name, role, value<span>4.1.2</span></th><td><code>&lt;dialog&gt;</code> named by its title (<code>aria-labelledby</code>) and described by its body for confirmations (<code>aria-describedby</code>). Destructive confirmations use <code>role="alertdialog"</code>.</td></tr><tr><th scope="row">Announcements<span>4.1.3</span></th><td>Opening is announced from the role and name. The result of the action (“Draft deleted”) goes through the live region after close.</td></tr><tr><th scope="row">Reflow and text spacing<span>1.4.10, 1.4.12</span></th><td>Width capped at the viewport minus 32px; height capped with internal scroll; full-screen sheet for lg below 480px.</td></tr><tr><th scope="row">Error prevention<span>3.3.4</span></th><td>Irreversible deletion always asks first and names what will be lost.</td></tr></tbody>
      </table>
    </div>
  </div>
  <h4 style="margin-top:28px">Tokens</h4>
  <ul class="tok-list" aria-label="Tokens used by Modal"><li><code>uxp-color-bg-overlay</code></li><li><code>uxp-elevation-4</code></li><li><code>uxp-layer-modal</code></li><li><code>uxp-color-bg-muted</code></li><li><code>uxp-radius-sm</code></li><li><code>uxp-space-6</code></li><li><code>uxp-motion-duration-md</code></li></ul>
</section>
<section class="cmp" id="c-data-table" aria-labelledby="c-data-table-h">
  <p class="cmp__group">Data</p>
  <h3 id="c-data-table-h" class="uxp-text-heading-2">Data table</h3>
  <p class="cmp__purpose">Compares rows of structured data. Orbit standardizes the layout and behavior; each screen supplies its own column definitions.</p>
  
<div class="spec">
  <div class="spec__body" data-table-demo>
    <div class="o-table-tools">
      <fieldset class="o-seg">
        <legend>Row density</legend>
        <div class="o-seg__track">
          <label class="o-seg__opt"><input type="radio" name="density" value="compact" data-density><span>Compact</span></label>
          <label class="o-seg__opt"><input type="radio" name="density" value="default" data-density checked><span>Default</span></label>
          <label class="o-seg__opt"><input type="radio" name="density" value="comfortable" data-density><span>Comfortable</span></label>
        </div>
      </fieldset>
    </div>
    <div class="o-bulk" data-bulk hidden>
      <p data-bulk-count>1 selected</p>
      <button class="o-btn o-btn--sm" type="button" data-bulk-export><svg class="o-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 4v11"/><path d="m7 10 5 5 5-5"/><path d="M5 20h14"/></svg> Export</button>
      <button class="o-btn o-btn--sm" type="button" data-bulk-deprecate>Deprecate</button>
    </div>
    <div class="o-table-scroll" role="region" aria-labelledby="tbl-cap" tabindex="0">
      <table class="o-table" data-density="default" data-table>
        <caption id="tbl-cap">Orbit tokens, sample of 6</caption>
        <thead>
          <tr>
            <th scope="col" class="sel"><label class="o-choice"><input type="checkbox" data-row-all><span class="uxp-sr-only">Select all rows</span></label></th>
            <th scope="col" aria-sort="ascending" data-sort-col="0"><button class="o-sort" type="button">Token <svg class="o-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 5v14"/><path d="m6 11 6-6 6 6"/></svg></button></th>
            <th scope="col" data-sort-col="1"><button class="o-sort" type="button">Tier <svg class="o-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 5v14"/><path d="m6 11 6-6 6 6"/></svg></button></th>
            <th scope="col">Value</th>
            <th scope="col" data-sort-col="3"><button class="o-sort" type="button">Status <svg class="o-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 5v14"/><path d="m6 11 6-6 6 6"/></svg></button></th>
            <th scope="col"><span class="uxp-sr-only">Actions</span></th>
          </tr>
        </thead>
        <tbody>
<tr><td class="sel"><label class="o-choice"><input type="checkbox" data-row><span class="uxp-sr-only">Select uxp-color-action-primary</span></label></td><th scope="row"><code>uxp-color-action-primary</code></th><td>Semantic</td><td class="num">#0068C8</td><td><span class="o-badge o-badge--success">Stable</span></td><td><a class="o-link" href="#f-color">View<span class="uxp-sr-only"> uxp-color-action-primary</span></a></td></tr>
<tr><td class="sel"><label class="o-choice"><input type="checkbox" data-row><span class="uxp-sr-only">Select uxp-color-border-input</span></label></td><th scope="row"><code>uxp-color-border-input</code></th><td>Semantic</td><td class="num">#8E8E93</td><td><span class="o-badge o-badge--success">Stable</span></td><td><a class="o-link" href="#f-color">View<span class="uxp-sr-only"> uxp-color-border-input</span></a></td></tr>
<tr><td class="sel"><label class="o-choice"><input type="checkbox" data-row><span class="uxp-sr-only">Select uxp-gradient-text</span></label></td><th scope="row"><code>uxp-gradient-text</code></th><td>Semantic</td><td class="num">600 / 500 / 600</td><td><span class="o-badge o-badge--success">Stable</span></td><td><a class="o-link" href="#f-color">View<span class="uxp-sr-only"> uxp-gradient-text</span></a></td></tr>
<tr><td class="sel"><label class="o-choice"><input type="checkbox" data-row><span class="uxp-sr-only">Select uxp-motion-duration-md</span></label></td><th scope="row"><code>uxp-motion-duration-md</code></th><td>Primitive</td><td class="num">280ms</td><td><span class="o-badge o-badge--success">Stable</span></td><td><a class="o-link" href="#f-motion">View<span class="uxp-sr-only"> uxp-motion-duration-md</span></a></td></tr>
<tr><td class="sel"><label class="o-choice"><input type="checkbox" data-row><span class="uxp-sr-only">Select uxp-color-control-thumb</span></label></td><th scope="row"><code>uxp-color-control-thumb</code></th><td>Semantic</td><td class="num">#6E6E73</td><td><span class="o-badge o-badge--info">Beta</span></td><td><a class="o-link" href="#c-switch">View<span class="uxp-sr-only"> uxp-color-control-thumb</span></a></td></tr>
<tr><td class="sel"><label class="o-choice"><input type="checkbox" data-row><span class="uxp-sr-only">Select uxp-color-status-neutral-on-tint</span></label></td><th scope="row"><code>uxp-color-status-neutral-on-tint</code></th><td>Semantic</td><td class="num">#48484D</td><td><span class="o-badge o-badge--neutral">Draft</span></td><td><a class="o-link" href="#c-badge">View<span class="uxp-sr-only"> uxp-color-status-neutral-on-tint</span></a></td></tr>

        </tbody>
      </table>
    </div>
  </div>
  <p class="spec__cap"><span class="cap-screen">Sort by Token, Tier or Status (announced, and reflected in aria-sort). Select rows to reveal the bulk bar; Deprecate is undoable from its toast. The scroll region is focusable so keyboard users can scroll it.</span><span class="cap-print">Token, Tier and Status sort, announced and reflected in aria-sort. Selecting rows reveals the bulk bar; Deprecate can be undone from its toast. The scroll region is focusable so keyboard users can scroll it.</span></p>
</div>
  <dl class="cmp__spec"><dt>Anatomy</dt><dd>Toolbar (density, filters), bulk action bar, scroll region, <code>&lt;table&gt;</code> with a caption, header row, row headers, cells.</dd><dt>Column types</dt><dd><strong>Text</strong>: start-aligned, ink-900. <strong>Number and code</strong>: end-aligned, <code>uxp-text-mono-data</code> (13/400 tabular). <strong>Status</strong>: Badge. <strong>Action</strong>: text link at the row end, named with the row (“View <em>token</em>”). <strong>Selection</strong>: checkbox column, 52px.</dd><dt>Density</dt><dd>Compact 40px, default 52px, comfortable 64px rows, chosen with Segmented control. Heights are cell min-heights; text spacing overrides grow the row.</dd><dt>Responsive</dt><dd>From 768px down, the table scrolls inside a focusable region with a sticky first column. On small screens a screen can opt into a list view, rendered as a list of description lists. Never restyle table cells with <code>display:block</code>; several browsers then drop the table semantics.</dd><dt>Scope</dt><dd>Orbit ships the chrome: toolbar, selection model, sorting, density, responsive behavior. Column definitions live in the screen as a config array.</dd><dt>Row actions</dt><dd>Up to two text actions per row. More than two go in a Menu at the row end, behind a small “More” button named for the row (“More actions for <em>token</em>”). Actions on several rows go in the bulk bar.</dd></dl>
  <div class="cs-two cmp__use">
    <div class="cs-block"><h4>When to use</h4><ul><li>People compare values across rows or sort and select.</li></ul></div>
    <div class="cs-block"><h4>When not to use</h4><ul><li>There are fewer than four rows or two columns. Use a list.</li><li>Each item is visual. Use Cards.</li><li>You need to lay out a page. Tables are for data.</li></ul></div>
  </div>
  <div class="aa">
    <h4>Accessibility checklist</h4>
    <div class="cs-table-wrap" role="region" tabindex="0" aria-label="Accessibility checklist for Data table">
      <table class="cs-table"><caption>Data table, WCAG 2.1 criteria</caption>
        <thead><tr><th scope="col">Check</th><th scope="col">Implementation</th></tr></thead>
        <tbody><tr><th scope="row">Contrast<span>1.4.3, 1.4.11</span></th><td>Cells ink-900 16.4:1, headers ink-500 on ink-50 4.7:1. View links blue-600 4.0:1, a documented exception. Selected rows sit on <code>uxp-color-bg-selected-subtle</code>, where ink-900 holds at 15.1:1 and row links switch to blue-700 (5.0:1). Badges per Badge.</td></tr><tr><th scope="row">Keyboard<span>2.1.1</span></th><td>Sort buttons, checkboxes, links and the scroll region are all reachable with Tab.</td></tr><tr><th scope="row">Focus<span>2.4.7</span></th><td>2px <code>uxp-focus-ring-color</code> (blue-600, 4.0:1) outline at 2px offset on <code>:focus-visible</code>. Outline, not box-shadow, so it survives forced-colors mode. The scroll region has its own ring.</td></tr><tr><th scope="row">Name, role, value<span>4.1.2, 1.3.1</span></th><td>Native <code>&lt;table&gt;</code>, <code>&lt;caption&gt;</code>, <code>scope="col"</code> and <code>scope="row"</code>. Sorted column carries <code>aria-sort</code>. Each row checkbox is named “Select <em>token</em>”. Select-all shows mixed when partial.</td></tr><tr><th scope="row">Announcements<span>4.1.3</span></th><td>“Sorted by Token, descending”, “2 rows selected” and bulk results go through the live region.</td></tr><tr><th scope="row">Reflow and text spacing<span>1.4.10, 1.4.12</span></th><td>Two-dimensional data is exempt from reflow, so horizontal scroll inside the region is allowed; the page itself never scrolls sideways.</td></tr><tr><th scope="row">Error prevention<span>3.3.4</span></th><td>Bulk Deprecate is reversible: its toast offers Undo and stays until used or dismissed.</td></tr></tbody>
      </table>
    </div>
  </div>
  <h4 style="margin-top:28px">Tokens</h4>
  <ul class="tok-list" aria-label="Tokens used by Data table"><li><code>uxp-text-mono-data</code></li><li><code>uxp-color-bg-muted</code></li><li><code>uxp-color-bg-selected-subtle</code></li><li><code>uxp-color-text-link-on-tint</code></li><li><code>uxp-color-border-subtle</code></li><li><code>uxp-color-action-secondary-text</code></li><li><code>uxp-radius-sm</code></li><li><code>uxp-target-sm</code></li></ul>
</section>
</section>
    
<section class="cs-part" id="governance" aria-labelledby="gov-h">
  <p class="cs-part__label">Part 4 of 5</p>
  <h2 id="gov-h" class="uxp-text-heading-1">Governance</h2>
  <p class="cs-lede">Orbit has a single owner today. As UXPective moves toward senior contributors running parts of the platform, this model lets contributors propose, build and review components while the system stays consistent.</p>

  <div class="cs-sec" id="gov-roles">
    <h3 class="uxp-text-heading-2">Roles</h3>
    <div class="cs-table-wrap" role="region" tabindex="0" aria-label="Who does what"><table class="cs-table "><caption>Who does what</caption><thead><tr><th scope="col">Role</th><th scope="col">Today</th><th scope="col">Responsible for</th></tr></thead><tbody><tr><th scope="row">Owner</th><td>Shanica</td><td>Foundations, token values, final decisions on proposals</td></tr>
<tr><th scope="row">Contributor</th><td>Senior contributors, as they join</td><td>Proposing, building, documenting and testing components against the acceptance criteria</td></tr>
<tr><th scope="row">Accessibility reviewer</th><td>A contributor who didn’t build the component</td><td>Signing off the AA checklist and the test protocol. Authors never certify their own work.</td></tr>
<tr><th scope="row">Consumer</th><td>Anyone building a UXPective screen</td><td>Using the library, reporting gaps, proposing patterns with evidence</td></tr>
</tbody></table></div>
    <div class="cs-table-wrap" role="region" tabindex="0" aria-label="Decision rights"><table class="cs-table "><caption>Decision rights</caption><thead><tr><th scope="col">Change</th><th scope="col">Who decides</th><th scope="col">Review</th></tr></thead><tbody><tr><th scope="row">Foundation or token value</th><td>Owner</td><td>One contributor</td></tr>
<tr><th scope="row">New component or variant</th><td>Owner</td><td>One contributor and the accessibility reviewer</td></tr>
<tr><th scope="row">Fix that changes no value or behavior</th><td>Any contributor</td><td>One other contributor</td></tr>
<tr><th scope="row">Documentation</th><td>Any contributor</td><td>Owner reviews afterwards</td></tr>
</tbody></table></div>
  </div>

  <div class="cs-sec" id="gov-flow">
    <h3 class="uxp-text-heading-2">Contribution process</h3>
    <ol class="cs-steps">
      <li><div><strong>Propose</strong>Open a proposal with screenshots of the pattern on three shipped screens, or two plus the one about to ship.</div></li>
      <li><div><strong>Entry review</strong>The proposal is checked against the entry criteria below. If it doesn’t meet them, the pattern stays local and is added to the backlog with what it’s missing.</div></li>
      <li><div><strong>Draft</strong>Build it in Figma and code at the same time, with matching names, and write the docs from the component template.</div></li>
      <li><div><strong>Acceptance review</strong>The component is checked against the acceptance criteria below, including its accessibility checklist and the test protocol.</div></li>
      <li><div><strong>Review</strong>The owner and one contributor review the design and code; the accessibility reviewer signs off separately.</div></li>
      <li><div><strong>Publish</strong>The component joins the library as Beta, and contributors are told what it replaces. It becomes Stable after it has run on shipped screens without needing changes.</div></li>
    </ol>
  </div>

  <div class="cs-sec" id="gov-gates">
    <h3 class="uxp-text-heading-2">Contribution criteria</h3>
    <div class="cs-two">
      <div class="cs-block"><h4>Entry criteria</h4><ol><li>Is it on at least three shipped screens?</li><li>Does it carry behavior that’s easy to get wrong (keyboard, focus, validation, announcements), or at least three real variants?</li><li>Is composing it from existing components worse than naming it?</li></ol></div>
      <div class="cs-block"><h4>Acceptance criteria</h4><ul><li>Anatomy, variants, sizes and states written</li><li>“Use it when” and “Don’t use it when” written</li><li>All seven accessibility rows filled, none deleted</li><li>Semantic tokens only; the lint finds no raw values or primitives</li><li>Figma and code names match</li><li>Test protocol passed on the built component</li><li>Examples follow the Writing foundation</li></ul></div>
    </div>
  </div>

  <div class="cs-sec" id="gov-lifecycle">
    <h3 class="uxp-text-heading-2">Component lifecycle</h3>
    <p class="cs-prose">Every component and token carries one of four states, shown as a badge on its docs page.</p>
    <div class="cs-table-wrap" role="region" tabindex="0" aria-label="Lifecycle states"><table class="cs-table "><caption>Lifecycle states</caption><thead><tr><th scope="col">State</th><th scope="col">Means</th><th scope="col">Can screens use it?</th></tr></thead><tbody><tr><th scope="row"><span class="o-badge o-badge--neutral">Draft</span></th><td>Being built against the acceptance criteria</td><td>No</td></tr>
<tr><th scope="row"><span class="o-badge o-badge--info">Beta</span></th><td>Meets the acceptance criteria, not yet proven on shipped screens; details may change</td><td>Yes, with the owner informed</td></tr>
<tr><th scope="row"><span class="o-badge o-badge--success">Stable</span></th><td>Proven on shipped screens; changes go through review</td><td>Yes</td></tr>
<tr><th scope="row"><span class="o-badge o-badge--warning">Deprecated</span></th><td>Being replaced; points to its replacement</td><td>No new uses</td></tr>
</tbody></table></div>
    <p class="cs-prose">Deprecation is never a surprise. A deprecated component or token stays available for at least 90 days, shows a banner on its docs page, logs a warning in code, and names exactly what replaces it. It is removed only once no shipped screen uses it.</p>
  </div>

  <div class="cs-sec" id="waitlist">
    <h3 class="uxp-text-heading-2">Component backlog</h3>
    <p class="cs-prose">Patterns that have been proposed but don’t meet the entry criteria yet, with what each one needs.</p>
    <div class="cs-table-wrap" role="region" tabindex="0" aria-label="Backlog"><table class="cs-table "><caption>Backlog</caption><thead><tr><th scope="col">Pattern</th><th scope="col">Covered today by</th><th scope="col">Needed to proceed</th></tr></thead><tbody><tr><th scope="row">Date picker</th><td>The native date input (a Text field configuration)</td><td>A range-selection use case on a shipped screen</td></tr>
<tr><th scope="row">Popover</th><td>Tooltip for text, Menu for actions</td><td>Interactive content that has to float and isn’t a list of actions</td></tr>
<tr><th scope="row">Stepper</th><td>One page per step, each with its own URL</td><td>A multi-step flow where people need to see every step at once</td></tr>
<tr><th scope="row">Breadcrumb</th><td>Side nav and back links</td><td>A surface more than two levels deep</td></tr>
</tbody></table></div>
  </div>

  <div class="cs-sec" id="gov-measure">
    <h3 class="uxp-text-heading-2">Adoption metrics</h3>
    <p class="cs-prose">These signals show whether screens are built from Orbit or drifting back to one-off decisions.</p>
    <div class="cs-table-wrap" role="region" tabindex="0" aria-label="Adoption signals"><table class="cs-table "><caption>Adoption signals</caption><thead><tr><th scope="col">Signal</th><th scope="col">Measured by</th></tr></thead><tbody><tr><th scope="row">Token coverage</th><td>Share of color, space and type values in code and Figma that resolve to a token, from the lint and Figma’s detached-style count</td></tr>
<tr><th scope="row">One-offs</th><td>Local components living outside the library</td></tr>
<tr><th scope="row">Detached instances</th><td>Figma instances detached from the library</td></tr>
<tr><th scope="row">Checklist coverage</th><td>Components with all seven accessibility rows complete and the protocol passed (22 of 22)</td></tr>
<tr><th scope="row">Time to compose a screen</th><td>One day for a screen built from existing components</td></tr>
</tbody></table></div>
  </div>
</section>
    
<section class="cs-part" id="shipping" aria-labelledby="ship-h">
  <p class="cs-part__label">Part 5 of 5</p>
  <h2 id="ship-h" class="uxp-text-heading-1">Adoption and impact</h2>
  <p class="cs-lede">How Orbit moved from a library to the default way UXPective screens are built.</p>

  <div class="cs-sec" id="adoption">
    <h3 class="uxp-text-heading-2">Adoption</h3>
    <div class="cs-three">
      <div class="cs-block"><h4>Docs that mirror the tokens</h4><p>The internal docs page reads in the same order as Part 4. Writing it is what surfaces the holes: the moment a usage rule can’t be described cleanly, the component isn’t done.</p></div>
      <div class="cs-block"><h4>Figma that mirrors code</h4><p>Same component, prop and variant names. They drift the moment a Figma-only variant appears for one mock, so variants follow the contribution process in both places.</p></div>
      <div class="cs-block"><h4>Screen-by-screen migration</h4><p>Screens moved onto Orbit one at a time, starting with the hardest to maintain. The slowest were the ones with the most one-off layout.</p></div>
    </div>
  </div>

  <div class="cs-sec" id="changed">
    <h3 class="uxp-text-heading-2">Impact</h3>
    <div class="cs-prose">
      <p>A new screen takes a day, down from about five. “A day” means a screen composed from existing components with new copy and imagery; a screen with a new interactive module still takes most of the week, and that’s the right number. There is one blue, one text field, and no wrong version of the gradient.</p>
      <p>Accessibility moved into the foundations. Every component has an accessibility checklist, every contrast pair is calculated from the tokens, and the few colors that are lighter than AA on purpose are listed as documented exceptions rather than left implicit.</p>
      <p>New component ideas still come up on most screens. The entry criteria keep the library small, and proposals that don’t meet them go to the backlog.</p>
    </div>
  </div>

  <div class="cs-sec" id="learned">
    <h3 class="uxp-text-heading-2">Learnings</h3>
    <div class="cs-two">
      <div class="cs-block"><h4>Accessibility belongs in the foundations</h4><p>Focus, contrast and announcements touch every component. Built into tokens and system behavior, every component inherits them instead of each one being retrofitted.</p></div>
      <div class="cs-block"><h4>Keep the icon set small</h4><p>I started with 60 icons and 22 were used. The rest made the set harder to scan, so the library now holds 36.</p></div>
      <div class="cs-block"><h4>Usage rules before components</h4><p>Cards and modals get used where they don’t belong unless “when not to use” is written first, so it is part of the acceptance criteria.</p></div>
      <div class="cs-block"><h4>Calculate contrast, don’t type it</h4><p>Typed ratios drift from the tokens they describe. Every ratio on this page is calculated when it’s built, and exceptions are listed explicitly.</p></div>
    </div>
  </div>

  <div class="cs-sec" id="next">
    <h3 class="uxp-text-heading-2">Roadmap</h3>
    <div class="cs-roadmap">
      <div><p class="cs-meta">Theme</p><h4>Dark mode</h4><p>A remap of the semantic layer, not a redesign, because components never touch primitives. Every gradient stop re-tuned for near-black, every status family re-balanced to stay equal in weight.</p></div>
      <div><p class="cs-meta">Theme</p><h4>Print</h4><p>Cohort documents use a sibling style (Roboto, maroon headings, a gradient-line header) that isn’t in Orbit yet. Until it is, the one-identity claim covers digital screens only. Next, documents join as a theme on the same primitives.</p></div>
      <div><p class="cs-meta">Tooling</p><h4>Contribution at scale</h4><p>The token lint and detached-instance reports run automatically on every change, before a reviewer looks at it.</p></div>
    </div>
    <p class="cs-prose" style="margin-top:32px">Orbit is maintained as a living system: foundations change through the contribution process, and components move through the lifecycle above.</p>
  </div>

  <div class="cs-sec" id="colophon">
    <h3 class="uxp-text-heading-2">Credits</h3>
    <dl class="cs-colophon">
      <div><dt>Author</dt><dd>Shanica Roy</dd></div>
      <div><dt>Typefaces</dt><dd>Satoshi, Inter and JetBrains Mono</dd></div>
      <div><dt>Written</dt><dd>October 2026</dd></div>
      <div><dt>Accessibility</dt><dd>WCAG 2.1 AA for text, keyboard and focus, with documented color exceptions</dd></div>
    </dl>
  </div>
</section>
  </div>

  </main>
</div>`;
