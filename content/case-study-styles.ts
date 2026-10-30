// ---------------------------------------------------------------------------
// Shared case-study stylesheet, scoped under `.cs`.
//
// A normal, centered, responsive page — NO viewport scaling. Type sizes are
// fixed, ordinary px; the layout is a centered 1400px container with a sticky
// left section-nav rail and a main content column. Nothing is tied to a
// reference width or a scaling unit. Below 768px it collapses to a single
// column with a sticky breadcrumb + horizontal section bar.
// ---------------------------------------------------------------------------

export const caseStudyCss = `
.cs{
  --georgia: Georgia, "Gelasio", "Times New Roman", serif;
  --times: "Times New Roman", "Tinos", Times, serif;
  --inter: Inter, "Helvetica Neue", Arial, sans-serif;
  --roboto: Roboto, "Helvetica Neue", Arial, sans-serif;
  --body: Georgia, "Times New Roman", serif;
  --divider: #e4e4e4;
  --accent: #7a5ab2;
  --col: 760px;   /* the one body column every element shares: text, metadata, dividers, hero, stats */
  background:#fff; color:#202124;
}
.cs *{ box-sizing:border-box; }

/* centered page container + two-column grid (breadcrumb spans both) */
.cs-page{
  max-width:1400px; margin-inline:auto; padding:28px 64px 0;
  display:grid; grid-template-columns:200px minmax(0,1fr); column-gap:80px;
  grid-template-areas:"bc bc" "nav main";
}

/* breadcrumb — full width, above both columns, sticky */
.cs-breadcrumb{
  grid-area:bc; position:sticky; top:0; z-index:20; background:#fff;
  display:flex; align-items:center; gap:8px; white-space:nowrap;
  padding:14px 0 16px; font-family:var(--inter);
}
.cs-bc-link{ display:inline-flex; align-items:center; gap:7px; color:#a2a2a2; text-decoration:none; font-size:16px; }
.cs-bc-link:hover{ color:var(--accent); }
.cs-bc-arrow{ width:19px; height:19px; flex:none; display:block; margin-top:1px; }
.cs-bc-sep{ color:#cccccc; font-size:16px; }
.cs-bc-current{ color:#202124; font-weight:500; font-size:16px; }

/* section nav rail — sticky, below the breadcrumb bar */
.cs-rail{
  grid-area:nav; position:sticky; top:62px; align-self:start;
  max-height:calc(100vh - 84px); overflow-y:auto; overflow-x:hidden; scrollbar-width:none; padding-top:6px;
}
.cs-rail::-webkit-scrollbar{ width:0; height:0; }
.cs-rail ul{ list-style:none; margin:0; padding:0; display:flex; flex-direction:column; gap:16px; }
.cs-rail a{ display:block; font-family:var(--inter); font-weight:500; font-size:14px; line-height:1.35; color:#acacac; text-decoration:none; transition:color .15s; }
.cs-rail a:hover{ color:var(--accent); }
.cs-rail a.active{ color:var(--accent); }
.cs-rail a:focus-visible{ outline:2px solid var(--accent); outline-offset:4px; border-radius:2px; }

/* content column */
.cs-content{ grid-area:main; min-width:0; padding-top:6px; }
.cs-logo{ display:block; width:calc(var(--logo-w) * 1px); height:auto; }
.cs-h1{ margin:28px 0 0; font-family:var(--georgia); font-weight:400; font-size:44px; line-height:1.15; letter-spacing:-0.5px; color:#42444d; max-width:var(--col); }
.cs-hero{ margin-top:28px; width:100%; max-width:var(--col); height:auto; display:block; border-radius:0; }
/* flat, square corners on all case-study media (images, diagrams, video) */
.cs img, .cs video{ border-radius:0; }

.cs-notice{ margin-top:40px; }
.cs-notice-head{ display:flex; align-items:center; gap:8px; }
.cs-notice-icon{ width:26px; height:26px; flex:none; display:block; }
.cs-notice-title{ font-family:var(--inter); font-weight:500; font-size:22px; line-height:1.3; color:#464646; }
.cs-notice-body{ margin:14px 0 0; font-family:var(--inter); font-weight:400; font-size:16px; line-height:1.55; color:#8c8c8c; max-width:var(--col); }

.cs-div{ height:1px; background:var(--divider); border:0; width:100%; max-width:var(--col); }
.cs-div-hero{ margin-top:40px; }
.cs-div-notice{ margin-top:28px; }
.cs-div-meta{ margin-top:32px; }

.cs-meta{ margin-top:32px; display:flex; flex-wrap:wrap; column-gap:56px; row-gap:24px; align-items:flex-start; max-width:var(--col); }
.cs-meta-label{ font-family:var(--inter); font-weight:600; font-size:13px; letter-spacing:0.08em; text-transform:uppercase; color:#969696; }
.cs-meta-value{ margin-top:8px; font-family:var(--roboto); font-weight:400; font-size:17px; line-height:1.4; color:#4f4f4f; }
.cs-meta-item.scope .cs-meta-value{ max-width:320px; }

.cs-sections{ margin-top:32px; }
.cs-section{ scroll-margin-top:88px; }
.cs-section + .cs-section{ margin-top:48px; }
.cs-h2{ margin:0; font-family:var(--georgia); font-weight:400; font-size:30px; line-height:1.2; letter-spacing:-0.3px; color:#42444d; outline:none; }
.cs-body{ margin-top:16px; font-family:var(--body); font-size:16px; line-height:1.33; letter-spacing:normal; color:#464646; max-width:var(--col); }
.cs-body p{ margin:0; }
.cs-body p + p{ margin-top:11px; }
.cs-body strong, .cs-body b{ font-weight:600; }
.cs-h3{ margin:28px 0 8px; font-family:var(--georgia); font-weight:400; font-size:22px; line-height:1.3; letter-spacing:-0.2px; color:#42444d; }

.cs-stats{ margin-top:48px; display:grid; grid-template-columns:repeat(4, 1fr); gap:28px; max-width:var(--col); }
.cs-stat-n{ font-family:var(--georgia); font-weight:400; font-size:48px; line-height:1.1; color:#353535; }
.cs-stat-c{ margin-top:8px; font-family:var(--roboto); font-weight:400; font-size:14px; line-height:1.35; color:#939393; }

.cs-footerwrap{ max-width:1400px; margin:96px auto 0; border-top:1px solid var(--divider); }

/* ---------- phones (<768px): single column, sticky breadcrumb + section bar ---------- */
@media (max-width:767px){
  .cs-page{ grid-template-columns:1fr; grid-template-areas:"bc" "nav" "main"; column-gap:0; padding:0 24px; }
  .cs-breadcrumb{ padding:12px 0; margin:0 -24px; padding-left:24px; padding-right:24px; border-bottom:1px solid var(--divider); }
  .cs-bc-link{ font-size:15px; } .cs-bc-arrow{ width:18px; height:18px; } .cs-bc-sep,.cs-bc-current{ font-size:15px; }
  .cs-rail{ position:sticky; top:49px; z-index:19; max-height:none; overflow:visible; background:#fff; margin:0 -24px; padding:8px 24px; border-bottom:1px solid var(--divider); }
  .cs-rail ul{ flex-direction:row; gap:18px; overflow-x:auto; white-space:nowrap; }
  .cs-rail a{ font-size:13px; }
  .cs-rail.single{ display:none; }
  .cs-content{ padding-top:20px; }
  .cs-h1{ font-size:30px; line-height:1.18; margin-top:20px; }
  .cs-notice-title{ font-size:20px; } .cs-notice-icon{ width:22px; height:22px; }
  .cs-meta{ column-gap:24px; row-gap:20px; } .cs-meta-item{ width:calc(50% - 12px); }
  .cs-section{ scroll-margin-top:104px; }
  .cs-section + .cs-section{ margin-top:40px; }
  .cs-h2{ font-size:26px; }
  .cs-stats{ grid-template-columns:repeat(2, 1fr); gap:24px; row-gap:28px; }
  .cs-stat-n{ font-size:40px; }
  .cs-footerwrap{ margin-top:64px; }
}
@media (max-width:479px){
  .cs-meta-item{ width:100%; }
}
@media (prefers-reduced-motion: reduce){
  .cs *{ scroll-behavior:auto !important; }
}
`;
