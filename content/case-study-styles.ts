// ---------------------------------------------------------------------------
// Shared case-study stylesheet, scoped under `.cs`. Ported 1:1 from Figma frame
// 2606:1537 at its 1728px canvas width.
//
// SCALING MODEL (web, >=768px): one uniform factor, like zooming. `--u` is one
// canvas pixel — exactly 1px at 1728px viewport, shrinking proportionally below
// that and capped at 1px above. EVERY value inside the canvas is
// calc(<figma px> * var(--u)): font size, line height, letter spacing, width,
// position, gap, the sticky offsets. Because the text width and the font size
// scale by the same factor, every line wraps at the same word at 1728 / 1512 /
// 1440 / 1280 — the design just gets smaller as one unit. No per-width
// breakpoints, no independent min sizes, no reflow in the web range.
//
// PHONES (<768px): the canvas and `--u` are dropped for a normal single-column
// responsive layout with real, legible sizes and a sticky top bar.
// ---------------------------------------------------------------------------

const u = (px: number) => `calc(${px} * var(--u))`;

export const caseStudyCss = `
.cs{
  --u: calc(100vw / 2580);   /* reference width 2580; no cap — the canvas fills the window */
  --georgia: Georgia, "Gelasio", "Times New Roman", serif;
  --times: "Times New Roman", "Tinos", Times, serif;
  --inter: Inter, "Helvetica Neue", Arial, sans-serif;
  --roboto: Roboto, "Helvetica Neue", Arial, sans-serif;
  --divider: #e4e4e4;
  --accent: #7a5ab2;
  background:#fff; color:#202124; overflow-x:clip;
}
.cs *{ box-sizing:border-box; }

/* ---------- the 1728 canvas, scaled by --u ---------- */
.cs-canvas{ width:100%; margin-inline:auto; position:relative; }
.cs-grid{ display:grid; grid-template-columns:${u(234)} ${u(1058)}; column-gap:${u(32)}; padding-left:${u(103)}; }

/* ---------- left rail (sticky) ---------- */
.cs-rail{ position:sticky; top:0; align-self:start; padding-top:${u(65)}; }
.cs-breadcrumb{ display:flex; align-items:center; gap:${u(7)}; white-space:nowrap; height:${u(33)}; font-family:var(--inter); }
.cs-bc-link{ display:inline-flex; align-items:center; gap:${u(7)}; color:#a2a2a2; text-decoration:none; font-size:${u(19.9)}; }
.cs-bc-link:hover{ color:var(--accent); }
.cs-bc-arrow{ font-size:${u(27.6)}; line-height:1; }
.cs-bc-sep{ color:#cccccc; font-size:${u(19.9)}; }
.cs-bc-current{ color:#202124; font-weight:500; font-size:${u(19.9)}; letter-spacing:${u(-0.6)}; }

.cs-nav{ margin-top:${u(127)}; width:${u(94)}; max-height:calc(100vh - ${u(249)}); overflow-y:auto; overflow-x:hidden; scrollbar-width:none; }
.cs-nav::-webkit-scrollbar{ width:0; height:0; }
.cs-nav ul{ list-style:none; margin:0; padding:0; display:flex; flex-direction:column; gap:${u(23.7)}; }
.cs-nav a{ display:block; font-family:var(--inter); font-weight:500; font-size:${u(20.7)}; line-height:1.2; color:#acacac; text-decoration:none; transition:color .15s; }
.cs-nav a:hover{ color:var(--accent); }
.cs-nav a.active{ color:var(--accent); }
.cs-nav a:focus-visible{ outline:${u(2)} solid var(--accent); outline-offset:${u(4)}; border-radius:2px; }

/* ---------- content column ---------- */
.cs-content{ padding-top:${u(225)}; min-width:0; }
.cs-logo{ display:block; width:calc(var(--logo-w) * var(--u)); height:auto; }
.cs-h1{ margin:${u(32)} 0 0; font-family:var(--georgia); font-weight:400; font-size:${u(66.6)}; line-height:1.13; letter-spacing:${u(-1.33)}; color:#42444d; width:${u(1006)}; max-width:100%; }
.cs-hero{ margin-top:${u(38)}; width:${u(1006)}; max-width:100%; height:auto; display:block; }

.cs-notice{ margin-top:${u(58)}; width:${u(1060)}; max-width:100%; }
.cs-notice-head{ display:flex; align-items:center; gap:${u(7.5)}; }
.cs-notice-icon{ width:${u(30.2)}; height:${u(30.2)}; flex:none; display:block; }
.cs-notice-title{ font-family:var(--inter); font-weight:500; font-size:${u(30.2)}; line-height:1.23; color:#464646; }
.cs-notice-body{ margin:${u(26)} 0 0; font-family:var(--inter); font-weight:400; font-size:${u(18)}; line-height:${u(24)}; color:#8c8c8c; width:${u(849)}; max-width:100%; }

.cs-div{ height:1px; background:var(--divider); border:0; width:${u(1058)}; max-width:100%; }
.cs-div-hero{ margin-top:${u(58)}; }
.cs-div-notice{ margin-top:${u(39)}; }
.cs-div-meta{ margin-top:${u(38)}; }

.cs-meta{ margin-top:${u(52)}; display:flex; flex-wrap:wrap; column-gap:${u(90)}; row-gap:${u(32)}; align-items:flex-start; }
.cs-meta-label{ font-family:var(--inter); font-weight:500; font-size:${u(17.35)}; letter-spacing:${u(0.87)}; text-transform:uppercase; color:#969696; line-height:1.2; }
.cs-meta-value{ margin-top:${u(14)}; font-family:var(--roboto); font-weight:400; font-size:${u(25.45)}; letter-spacing:${u(-0.51)}; color:#4f4f4f; line-height:1.16; }
.cs-meta-item.scope .cs-meta-value{ font-family:var(--inter); font-size:${u(21.1)}; letter-spacing:0; color:#202124; line-height:${u(31.7)}; width:${u(331)}; max-width:100%; }

.cs-sections{ margin-top:${u(41)}; }
.cs-section{ scroll-margin-top:${u(225)}; }
.cs-section + .cs-section{ margin-top:${u(72)}; }                 /* NOT IN FRAME — proposed section gap */
.cs-h2{ margin:0; font-family:var(--georgia); font-weight:400; font-size:${u(50)}; line-height:1.13; letter-spacing:${u(-1)}; color:#42444d; outline:none; }
.cs-body{ margin-top:${u(35)}; font-family:var(--times); font-size:${u(24)}; line-height:1.3; color:#464646; width:${u(1043)}; max-width:100%; }
.cs-body p{ margin:0; }
.cs-body p + p{ margin-top:${u(31)}; }
.cs-h3{ margin:${u(34)} 0 ${u(12)}; font-family:var(--georgia); font-weight:400; font-size:${u(34)}; line-height:1.2; letter-spacing:${u(-0.68)}; color:#42444d; }   /* NOT IN FRAME — proposed H3 */

.cs-stats{ margin-top:${u(52)}; display:grid; grid-template-columns:repeat(4, 1fr); gap:${u(31)}; }
.cs-stat-n{ font-family:var(--georgia); font-weight:400; font-size:${u(64.5)}; letter-spacing:${u(3.2)}; line-height:1.1; color:#353535; }
.cs-stat-c{ margin-top:${u(9)}; font-family:var(--roboto); font-weight:400; font-size:${u(16)}; line-height:${u(19)}; color:#939393; width:${u(223)}; max-width:100%; }

.cs-footerwrap{ margin-top:${u(160)}; border-top:1px solid var(--divider); }

/* ---------- phones (<768px): real responsive layout, canvas dropped ---------- */
@media (max-width:767px){
  .cs-canvas{ width:100%; max-width:none; padding:0 24px; }
  .cs-grid{ display:block; grid-template-columns:none; padding-left:0; column-gap:0; }
  .cs-rail{ position:sticky; top:0; z-index:50; padding:10px 24px; margin:0 -24px; background:#fff; border-bottom:1px solid var(--divider); }
  .cs-breadcrumb{ height:auto; gap:7px; }
  .cs-bc-link{ font-size:15px; gap:7px; } .cs-bc-arrow{ font-size:20px; } .cs-bc-sep,.cs-bc-current{ font-size:15px; letter-spacing:-0.3px; }
  .cs-nav{ margin-top:8px; width:auto; max-height:none; overflow-x:auto; overflow-y:hidden; }
  .cs-nav ul{ flex-direction:row; gap:18px; white-space:nowrap; }
  .cs-nav a{ font-size:15px; }
  .cs-nav.single{ display:none; }
  .cs-content{ padding-top:24px; }
  .cs-logo{ width:calc(var(--logo-w) * 1px); }
  .cs-h1{ width:auto; max-width:none; font-size:32px; line-height:1.15; letter-spacing:-0.5px; margin-top:20px; }
  .cs-hero{ width:100%; }
  .cs-notice{ width:auto; max-width:none; } .cs-notice-icon{ width:24px; height:24px; } .cs-notice-title{ font-size:20px; } .cs-notice-body{ width:auto; max-width:none; font-size:14px; line-height:1.45; margin-top:14px; }
  .cs-div{ width:100%; }
  .cs-div-hero,.cs-div-notice{ margin-top:28px; } .cs-div-meta{ margin-top:24px; }
  .cs-meta{ margin-top:28px; column-gap:24px; row-gap:20px; }
  .cs-meta-item{ width:calc(50% - 12px); }
  .cs-meta-label{ font-size:12px; } .cs-meta-value{ font-size:17px; } .cs-meta-item.scope .cs-meta-value{ width:auto; max-width:none; font-size:15px; line-height:1.5; }
  .cs-sections{ margin-top:28px; }
  .cs-section + .cs-section{ margin-top:40px; } .cs-section{ scroll-margin-top:96px; }
  .cs-h2{ font-size:25px; letter-spacing:-0.3px; } .cs-body{ width:auto; max-width:none; font-size:16px; line-height:1.6; margin-top:16px; } .cs-body p + p{ margin-top:16px; }
  .cs-h3{ font-size:19px; margin:22px 0 8px; }
  .cs-stats{ grid-template-columns:repeat(2, 1fr); gap:24px; row-gap:28px; } .cs-stat-n{ font-size:40px; line-height:1.1; } .cs-stat-c{ width:auto; max-width:none; font-size:13px; line-height:1.35; margin-top:6px; }
  .cs-footerwrap{ margin-top:64px; }
}
@media (max-width:479px){
  .cs-canvas{ padding:0 20px; }
  .cs-rail{ padding:10px 20px; margin:0 -20px; }
  .cs-meta-item{ width:100%; }
}
@media (prefers-reduced-motion: reduce){
  .cs *{ scroll-behavior:auto !important; }
}
`;
