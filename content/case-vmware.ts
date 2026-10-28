// ---------------------------------------------------------------------------
// VMWARE CASE STUDY. Final copy supplied by Shanica; build around it, do not
// rewrite it. The page keeps its own light "paper" palette and type system
// (Newsreader / Inter), separate from the portfolio shell. Selectors are
// scoped under `.vmw` so nothing leaks into the rest of the site. Scroll-spy,
// scroll progress, and the mobile section dropdown live in
// components/VmwareToc.tsx.
//
// NDA rules: no product screenshots; every visual is an original schematic
// with dummy values. No customer names, entitlement numbers, commit IDs, or
// account-tied figures anywhere, including comments and alt text.
// ---------------------------------------------------------------------------

export const vmwareCaseStyles = `
  .vmw{
    --paper:#FFFFFF;
    --vink:#1a1a1d;
    --sub:#797979;
    --line:#E5E5E5;
    --line2:#CFCFCF;
    --accent:#7A5AB2;
    --accent-soft:#F1ECF9;
    --warn-bg:#F5F5F5;
    --warn-line:#CFCFCF;
    --card:#FFFFFF;
  }
  .vmw, .vmw *{margin:0;padding:0;box-sizing:border-box}
  .vmw{
    background:var(--paper);color:var(--vink);
    font-family:'Newsreader',Georgia,serif;
    font-size:19px;line-height:1.66;-webkit-font-smoothing:antialiased;
    min-height:100vh;
  }
  .vmw a{color:var(--accent);text-decoration:none}
  .vmw a:hover{text-decoration:underline}
  .vmw a:focus-visible{outline:2px solid var(--accent);outline-offset:3px}
  .vmw .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}

  /* scroll progress */
  .vmw .progress{position:fixed;top:0;left:0;height:2px;width:0;background:var(--accent);z-index:60}

  /* case-study hero: the cover animation, then a confidential notice */
  .vmw .vmwhero{max-width:1180px;margin:0 auto;padding:40px 24px 0}
  .vmw .vmwhero .cover{position:relative;width:100%;aspect-ratio:1486/1050;border-radius:14px;overflow:hidden;border:1px solid var(--line);background:#0b0b0d}
  .vmw .vmwhero .cover video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}
  .vmw .confnote{max-width:1180px;margin:18px auto 0;padding:0 24px}
  .vmw .confnote .box{display:flex;gap:12px;align-items:flex-start;border:1px solid #E6DEF5;background:var(--accent-soft);border-radius:10px;padding:15px 18px}
  .vmw .confnote .box .ic{flex:none;margin-top:1px;color:var(--accent)}
  .vmw .confnote .box p{margin:0;font-family:'Inter',sans-serif;font-size:13.5px;line-height:1.55;color:var(--vink)}
  .vmw .confnote .box b{font-weight:600;color:var(--vink)}
  @media(max-width:900px){.vmw .vmwhero{padding:22px 20px 0}.vmw .confnote{padding:0 20px}}

  /* layout */
  .vmw .topnav{max-width:1180px;margin:0 auto;padding:30px 24px 0}
  .vmw .topnav .backlink{margin-bottom:0}
  @media(max-width:900px){.vmw .topnav{padding:18px 20px 0}}
  .vmw .shellc{max-width:1180px;margin:0 auto;padding:0 24px;display:grid;grid-template-columns:210px 1fr;gap:56px}
  @media(max-width:900px){.vmw .shellc{grid-template-columns:1fr;gap:0}}

  /* sticky section nav */
  .vmw aside{position:sticky;top:0;align-self:start;height:100vh;padding:40px 0;display:flex;flex-direction:column}
  @media(max-width:900px){.vmw aside{position:sticky;top:0;z-index:50;height:auto;padding:12px 0;background:var(--paper);border-bottom:1px solid var(--line)}}
  .vmw .backlink{font-family:'Inter',sans-serif;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--sub);margin-bottom:14px;display:block}
  .vmw .kicker{font-family:'Inter',sans-serif;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);margin-bottom:26px}
  @media(max-width:900px){.vmw .backlink{display:inline;margin:0 16px 0 0}.vmw .kicker{display:inline;margin:0}}
  .vmw .secnav summary{display:none;font-family:'Inter',sans-serif;font-size:13px;color:var(--vink);cursor:pointer;padding:8px 0;list-style:none}
  .vmw .secnav summary::-webkit-details-marker{display:none}
  @media(max-width:900px){
    .vmw .secnav{margin-top:6px}
    .vmw .secnav summary{display:block}
    .vmw .secnav summary::after{content:" \\2193";color:var(--sub)}
    .vmw .secnav[open] summary::after{content:" \\2191"}
  }
  .vmw .toc{list-style:none;display:flex;flex-direction:column;gap:2px}
  @media(max-width:900px){.vmw .toc{padding-bottom:8px}}
  .vmw .toc a{
    font-family:'Inter',sans-serif;font-size:13.5px;color:var(--sub);
    display:block;padding:5px 0;border-left:2px solid transparent;padding-left:14px;margin-left:-2px;
    transition:color .15s,border-color .15s;
  }
  .vmw .toc a:hover{color:var(--vink);text-decoration:none}
  .vmw .toc a.active{color:var(--vink);border-color:var(--accent);font-weight:500}

  .vmw main{padding:56px 0 96px;max-width:680px}
  @media(max-width:900px){.vmw main{padding-top:32px}}

  /* hero */
  .vmw .eyebrow{font-family:'Inter',sans-serif;font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:var(--sub);margin-bottom:20px}
  .vmw h1{font-weight:500;font-size:clamp(34px,5vw,52px);line-height:1.1;letter-spacing:-.015em;margin-bottom:22px;font-family:'Newsreader',Georgia,serif;color:var(--vink)}
  .vmw .standfirst{font-size:22px;color:#3A3A3A;line-height:1.55;margin-bottom:30px}
  .vmw .factline{
    font-family:'Inter',sans-serif;font-size:13px;color:var(--sub);
    display:flex;flex-wrap:wrap;gap:8px 20px;padding:20px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line);
  }
  .vmw .factline b{color:var(--vink);font-weight:600}
  .vmw .nda{color:var(--accent);font-weight:500}

  /* sections */
  .vmw section{padding-top:56px;scroll-margin-top:56px}
  .vmw h2{font-family:'Inter',sans-serif;font-weight:600;font-size:14px;letter-spacing:.02em;text-transform:uppercase;color:var(--accent);margin-bottom:18px}
  .vmw h3{font-weight:500;font-size:28px;line-height:1.2;letter-spacing:-.01em;margin:0 0 18px;font-family:'Newsreader',Georgia,serif;color:var(--vink)}
  .vmw p{margin-bottom:20px}
  .vmw .lede{font-size:21px;color:#3A3A3A}
  .vmw strong{font-weight:600}

  /* pull stat row */
  .vmw .stats{display:grid;grid-template-columns:repeat(4,1fr);gap:0;border:1px solid var(--line);border-radius:10px;overflow:hidden;margin:28px 0}
  .vmw .stats div{padding:20px 18px;border-right:1px solid var(--line)}
  .vmw .stats div:last-child{border-right:none}
  .vmw .stats b{font-family:'Inter',sans-serif;font-weight:600;font-size:30px;display:block;line-height:1;margin-bottom:8px}
  .vmw .stats span{font-family:'Inter',sans-serif;font-size:12.5px;color:var(--sub);line-height:1.4}
  @media(max-width:900px){.vmw .stats{grid-template-columns:1fr 1fr}.vmw .stats div{border-bottom:1px solid var(--line)}.vmw .stats div:nth-child(2n){border-right:none}.vmw .stats div:nth-child(n+3){border-bottom:none}}
  @media(max-width:480px){.vmw .stats{grid-template-columns:1fr}.vmw .stats div{border-right:none;border-bottom:1px solid var(--line)}.vmw .stats div:last-child{border-bottom:none}}

  /* figure / diagram */
  .vmw figure{margin:34px 0}
  .vmw .diagram{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:28px 24px}
  .vmw figcaption{font-family:'Inter',sans-serif;font-size:13px;color:var(--sub);margin-top:12px;line-height:1.5}
  .vmw figcaption b{color:var(--vink);font-weight:600}

  /* diagram 1: eight-dimension cost load */
  .vmw .dgroups{display:flex;flex-direction:column;gap:16px}
  .vmw .dline{font-family:'Inter',sans-serif;font-size:12.5px;font-weight:600;background:var(--vink);color:#fff;padding:10px 16px;border-radius:8px;align-self:center;text-align:center}
  .vmw .dgroup{border:1px solid var(--line);border-radius:8px;padding:12px 14px}
  .vmw .dgroup .glabel{font-family:'Inter',sans-serif;font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--sub);margin-bottom:8px}
  .vmw .chips{display:flex;flex-wrap:wrap;gap:8px}
  .vmw .chip{font-family:'Inter',sans-serif;font-size:12px;background:var(--accent-soft);border:1px solid #D8CCEC;color:var(--accent);padding:7px 11px;border-radius:6px;text-align:center;line-height:1.3}
  .vmw .darrow{font-family:'Inter',sans-serif;color:var(--accent);font-size:20px;text-align:center;line-height:1}

  /* diagram 2: nested-datagrid trap */
  .vmw .nest{font-family:'Inter',sans-serif;font-size:12.5px;color:var(--vink);overflow:hidden;border-radius:8px}
  .vmw .nest .row{border:1px solid var(--line2);border-radius:6px;padding:9px 12px;margin-bottom:7px;background:var(--paper)}
  .vmw .nest .d1{margin-top:-12px;opacity:.45}
  .vmw .nest .d2{margin-left:22px;background:#F2F2F2}
  .vmw .nest .d3{margin-left:44px;background:#E5E5E5}
  .vmw .nest .warn{color:#7A5AB2}

  /* diagram 3: composing from primitives */
  .vmw .compose{display:flex;align-items:center;justify-content:center;gap:14px;flex-wrap:wrap}
  .vmw .plus{font-family:'Inter',sans-serif;color:var(--sub);font-size:18px}
  .vmw .result{font-family:'Inter',sans-serif;font-size:12.5px;background:var(--vink);color:#fff;padding:12px 18px;border-radius:8px;text-align:center}

  /* diagram 4: responsive wrap failure */
  .vmw .resp{display:grid;grid-template-columns:1fr 1fr;gap:16px}
  @media(max-width:560px){.vmw .resp{grid-template-columns:1fr}}
  .vmw .frame{border:1px solid var(--line2);border-radius:8px;overflow:hidden;background:var(--paper)}
  .vmw .frame .bar{font-family:'Inter',sans-serif;font-size:10.5px;color:var(--sub);padding:6px 10px;border-bottom:1px solid var(--line);background:var(--card)}
  .vmw .frame .body{padding:10px}
  .vmw .band{height:11px;border-radius:3px;margin-bottom:6px;background:#DEDEDE}
  .vmw .band.cost{background:#D8CCEC}
  .vmw .band.tall{height:22px}
  .vmw .band.table{background:#B49BE0;height:34px;border-radius:4px}
  .vmw .frame.bad .band.table{opacity:.35}
  .vmw .push{font-family:'Inter',sans-serif;font-size:10px;color:#7A5AB2;text-align:center;margin-top:4px}
  .vmw .ok{font-family:'Inter',sans-serif;font-size:10px;color:var(--accent);text-align:center;margin-top:4px}

  .vmw .warnbox{background:var(--warn-bg);border:1px solid var(--warn-line);border-radius:8px;padding:16px 20px;font-family:'Inter',sans-serif;font-size:14.5px;line-height:1.55;color:#4A4A4A;margin:26px 0}
  .vmw .warnbox b{color:#1a1a1d}

  /* editorial fill-in note: must be resolved before a page ships */
  .vmw .todo{border:1px dashed var(--line2);border-radius:8px;padding:14px 18px;font-family:'Inter',sans-serif;font-size:13.5px;line-height:1.55;color:var(--sub);margin:22px 0}
  .vmw .todo b{color:var(--vink);font-weight:600}

  /* inline media figure */
  .vmw .media{border:1px solid var(--line);border-radius:12px;overflow:hidden;background:var(--card)}
  .vmw .media video{display:block;width:100%;height:auto}

  /* ruled list for decisions and step-by-step reasoning */
  .vmw .dlist{list-style:none;margin:26px 0;padding:0}
  .vmw .dlist li{padding:14px 0;border-top:1px solid var(--line);font-size:16.5px;line-height:1.65}
  .vmw .dlist li:last-child{border-bottom:1px solid var(--line)}
  .vmw .dlist b{color:var(--vink);font-weight:600}

  /* honest two-column split (mine vs the machine's) */
  .vmw .split{display:grid;grid-template-columns:1fr 1fr;border:1px solid var(--line);border-radius:10px;overflow:hidden;margin:26px 0}
  .vmw .split>div{padding:22px 20px}
  .vmw .split>div+div{border-left:1px solid var(--line)}
  .vmw .split h4{font-family:'Inter',sans-serif;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--sub);margin:0 0 12px;font-weight:600}
  .vmw .split ul{margin:0;padding-left:18px;font-size:15.5px;line-height:1.7}
  .vmw .split li{margin:6px 0}
  @media(max-width:700px){.vmw .split{grid-template-columns:1fr}.vmw .split>div+div{border-left:none;border-top:1px solid var(--line)}}

  .vmw hr{border:none;border-top:1px solid var(--line);margin:56px 0 0}

  .vmw footer{max-width:680px;margin-top:20px;font-family:'Inter',sans-serif;font-size:14px;color:var(--sub)}
  .vmw footer a{font-weight:500}

  @media(prefers-reduced-motion:reduce){
    .vmw *,.vmw *::before,.vmw *::after{transition-duration:.01ms !important;animation-duration:.01ms !important}
  }
`;
