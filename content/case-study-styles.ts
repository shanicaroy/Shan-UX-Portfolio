// ---------------------------------------------------------------------------
// Shared case-study stylesheet, scoped under `.cs`. Ported 1:1 from Figma frame
// 2699:4272 at its 1728px width, then made responsive WITHOUT a transform: every
// position, size and gap is a clamp() that is exact at >=1728 (capped, container
// centred), scales proportionally with the viewport from 1024 to 1727, and is
// floored at the per-property minimums from the spec. Below 1024 the layout
// reflows (media queries) and the rail becomes a sticky top bar. No transform is
// used anywhere, so the rail's position: sticky works natively.
//
// `f(px, min)` === the project's fluid() convention: clamp(min, (px/1728)*100vw, px).
// ---------------------------------------------------------------------------

const f = (px: number, min: number) => `clamp(${min}px, ${((px / 1728) * 100).toFixed(4)}vw, ${px}px)`;

export const caseStudyCss = `
.cs{
  --cs-georgia: Georgia, "Gelasio", "Times New Roman", serif;
  --cs-times: "Times New Roman", "Tinos", Times, serif;
  --cs-inter: Inter, "Helvetica Neue", Arial, sans-serif;
  --cs-roboto: Roboto, "Helvetica Neue", Arial, sans-serif;
  --cs-divider: #e4e4e4;
  --cs-accent: #7a5ab2;
  background:#fff; color:#202124;
}
.cs *{ box-sizing:border-box; }

.cs-skip{ position:absolute; left:16px; top:-60px; z-index:1000; background:#fff; color:#202124;
  padding:10px 16px; border-radius:6px; font-family:var(--cs-inter); font-size:15px; text-decoration:none;
  box-shadow:0 2px 10px rgba(0,0,0,.12); transition:top .15s; }
.cs-skip:focus{ top:12px; outline:2px solid var(--cs-accent); outline-offset:4px; }

.cs-wrap{ max-width:1728px; margin:0 auto; position:relative; }
.cs-grid{ display:grid; grid-template-columns:${f(234, 139)} ${f(1043, 600)}; column-gap:${f(32, 19)};
  padding-left:${f(103, 61)}; padding-right:${f(316, 187)}; }

/* ---------- left rail (sticky) ---------- */
.cs-rail{ position:sticky; top:0; align-self:start; padding-top:${f(57, 34)}; }
.cs-breadcrumb{ display:flex; align-items:center; gap:${f(7, 5)}; white-space:nowrap; font-family:var(--cs-inter); }
.cs-bc-link{ display:inline-flex; align-items:center; gap:${f(7, 5)}; color:#a2a2a2; text-decoration:none; font-size:${f(20.6, 15)}; }
.cs-bc-link:hover{ color:var(--cs-accent); }
.cs-bc-arrow{ font-size:${f(28.5, 19)}; line-height:1; }
.cs-bc-sep{ color:#cccccc; font-size:${f(20.6, 15)}; }
.cs-bc-current{ color:#202124; font-weight:500; font-size:${f(20.6, 15)}; letter-spacing:-0.62px; }

.cs-nav{ margin-top:${f(102, 60)}; max-height:calc(100vh - ${f(191, 113)} - 24px); overflow-y:auto; overflow-x:hidden;
  max-width:${f(234, 139)}; scrollbar-width:none; }
.cs-nav::-webkit-scrollbar{ width:0; height:0; }
.cs-nav ul{ list-style:none; margin:0; padding:0; display:flex; flex-direction:column; gap:${f(24, 15)}; }
.cs-nav a{ display:block; font-family:var(--cs-inter); font-weight:500; font-size:${f(20.9, 15)}; line-height:1.196;
  color:#acacac; text-decoration:none; transition:color .15s; }
.cs-nav a:hover{ color:var(--cs-accent); }
.cs-nav a.active{ color:var(--cs-accent); }
.cs-nav a:focus-visible{ outline:2px solid var(--cs-accent); outline-offset:4px; border-radius:2px; }

/* ---------- content column ---------- */
.cs-content{ padding-top:${f(191, 113)}; min-width:0; }
.cs-logo{ display:block; height:auto; }
.cs-h1{ margin:${f(26, 15)} 0 0; font-family:var(--cs-georgia); font-weight:400; font-size:${f(48, 30)};
  line-height:1.13; letter-spacing:-0.96px; color:#42444d; max-width:${f(998, 590)}; }
.cs-hero{ margin-top:${f(36, 21)}; width:${f(945, 560)}; max-width:100%; height:auto; display:block; }

.cs-notice{ margin-top:${f(55, 33)}; }
.cs-notice-head{ display:flex; align-items:center; gap:${f(7.5, 5)}; }
.cs-notice-icon{ width:${f(30, 20)}; height:${f(30, 20)}; flex:none; display:block; }
.cs-notice-title{ font-family:var(--cs-inter); font-weight:500; font-size:${f(30, 20)}; line-height:1.23; color:#464646; }
.cs-notice-body{ margin:${f(26, 16)} 0 0; font-family:var(--cs-inter); font-weight:400; font-size:${f(18, 14)};
  line-height:1.333; color:#8c8c8c; max-width:${f(942, 558)}; }

.cs-div{ height:1px; background:var(--cs-divider); border:0; width:100%; }
.cs-div-hero{ margin-top:${f(55, 33)}; }
.cs-div-notice{ margin-top:${f(30, 18)}; }
.cs-div-meta{ margin-top:${f(43, 26)}; }

.cs-meta{ margin-top:${f(39, 23)}; display:flex; flex-wrap:wrap; column-gap:${f(89, 53)}; row-gap:${f(32, 19)}; align-items:flex-start; }
.cs-meta-label{ font-family:var(--cs-inter); font-weight:500; font-size:${f(17, 12)}; letter-spacing:0.85px;
  text-transform:uppercase; color:#969696; line-height:1.23; }
.cs-meta-value{ margin-top:${f(14, 9)}; font-family:var(--cs-roboto); font-weight:400; font-size:${f(25, 17)};
  letter-spacing:-0.5px; color:#4f4f4f; line-height:1.16; }
.cs-meta-item.scope .cs-meta-value{ font-family:var(--cs-inter); font-size:${f(20.8, 15)}; letter-spacing:0;
  color:#202124; line-height:1.49; max-width:${f(325, 192)}; }

.cs-sections{ margin-top:${f(35, 21)}; }
.cs-section{ scroll-margin-top:${f(191, 113)}; }
.cs-section + .cs-section{ margin-top:${f(64, 38)}; }           /* NOT IN FRAME — proposed section gap */
.cs-h2{ margin:0; font-family:var(--cs-georgia); font-weight:400; font-size:${f(44, 28)}; line-height:1.13;
  letter-spacing:-0.88px; color:#42444d; outline:none; }
.cs-body{ margin-top:${f(20, 12)}; font-family:var(--cs-times); font-size:${f(22, 17)}; line-height:1.15; color:#464646; max-width:${f(1043, 600)}; }
.cs-body p{ margin:0; }
.cs-body p + p{ margin-top:${f(25, 15)}; }
.cs-h3{ margin:${f(34, 20)} 0 ${f(12, 8)}; font-family:var(--cs-georgia); font-weight:400; font-size:${f(30, 19)};
  line-height:1.2; letter-spacing:-0.6px; color:#42444d; }                 /* NOT IN FRAME — proposed H3 */

.cs-stats{ margin-top:${f(93, 55)}; display:grid; grid-template-columns:repeat(4, 1fr); gap:${f(31, 19)}; }
.cs-stat-n{ font-family:var(--cs-georgia); font-weight:400; font-size:${f(64.5, 40)}; letter-spacing:3.2px;
  line-height:1.13; color:#353535; }
.cs-stat-c{ margin-top:${f(9, 6)}; font-family:var(--cs-roboto); font-weight:400; font-size:${f(16, 13)};
  line-height:1.1875; color:#939393; max-width:${f(223, 132)}; }

.cs-footerwrap{ margin-top:${f(221, 131)}; border-top:1px solid var(--cs-divider); }

/* ---------- 768–1023: reflow, rail becomes a sticky top bar ---------- */
@media (max-width:1023px){
  .cs-wrap{ padding:0 40px; }
  .cs-grid{ display:block; padding-left:0; padding-right:0; }
  .cs-rail{ position:sticky; top:0; z-index:50; padding:10px 40px; margin:0 -40px; background:#fff; border-bottom:1px solid var(--cs-divider); }
  .cs-breadcrumb{ gap:7px; }
  .cs-bc-link{ font-size:15px; gap:7px; } .cs-bc-arrow{ font-size:20px; } .cs-bc-sep,.cs-bc-current{ font-size:15px; }
  .cs-nav{ margin-top:8px; max-width:none; max-height:none; overflow-x:auto; overflow-y:hidden; }
  .cs-nav ul{ flex-direction:row; gap:18px; white-space:nowrap; }
  .cs-nav a{ font-size:15px; }
  .cs-nav.single{ display:none; }
  .cs-content{ padding-top:24px; }
  .cs-h1{ font-size:30px; max-width:none; }
  .cs-hero{ width:100%; }
  .cs-notice-title{ font-size:20px; } .cs-notice-icon{ width:20px; height:20px; } .cs-notice-body{ font-size:14px; max-width:none; }
  .cs-meta-item{ width:calc(50% - 12px); } .cs-meta{ column-gap:24px; row-gap:20px; }
  .cs-meta-label{ font-size:12px; } .cs-meta-value{ font-size:17px; }
  .cs-meta-item.scope .cs-meta-value{ font-size:15px; max-width:none; }
  .cs-section + .cs-section{ margin-top:40px; }
  .cs-section{ scroll-margin-top:96px; }
  .cs-h2{ font-size:28px; } .cs-body{ font-size:17px; max-width:none; line-height:1.5; } .cs-body p + p{ margin-top:16px; }
  .cs-h3{ font-size:19px; margin-top:22px; }
  .cs-stats{ grid-template-columns:repeat(2, 1fr); gap:24px; row-gap:32px; }
  .cs-stat-n{ font-size:40px; } .cs-stat-c{ font-size:13px; }
  .cs-footerwrap{ margin-top:80px; }
}
@media (max-width:767px){
  .cs-wrap{ padding:0 24px; }
  .cs-rail{ padding:10px 24px; margin:0 -24px; }
}
@media (max-width:479px){
  .cs-meta-item{ width:100%; }
}
@media (prefers-reduced-motion: reduce){
  .cs *{ scroll-behavior:auto !important; }
}
`;
