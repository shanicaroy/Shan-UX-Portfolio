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
    --paper:#FBFAF8;
    --vink:#1A1A17;
    --sub:#5C5C55;
    --line:#E3E1DB;
    --line2:#CFCcC4;
    --accent:#0D4369;
    --accent-soft:#E7EDF3;
    --warn-bg:#FBF0E7;
    --warn-line:#E4B78C;
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

  /* layout */
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
  .vmw .standfirst{font-size:22px;color:#33332E;line-height:1.55;margin-bottom:30px}
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
  .vmw .lede{font-size:21px;color:#33332E}
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
  .vmw .chip{font-family:'Inter',sans-serif;font-size:12px;background:var(--accent-soft);border:1px solid #BECBDA;color:var(--accent);padding:7px 11px;border-radius:6px;text-align:center;line-height:1.3}
  .vmw .darrow{font-family:'Inter',sans-serif;color:var(--accent);font-size:20px;text-align:center;line-height:1}

  /* diagram 2: nested-datagrid trap */
  .vmw .nest{font-family:'Inter',sans-serif;font-size:12.5px;color:var(--vink);overflow:hidden;border-radius:8px}
  .vmw .nest .row{border:1px solid var(--line2);border-radius:6px;padding:9px 12px;margin-bottom:7px;background:var(--paper)}
  .vmw .nest .d1{margin-top:-12px;opacity:.45}
  .vmw .nest .d2{margin-left:22px;background:#F3F1EC}
  .vmw .nest .d3{margin-left:44px;background:#EBE8E1}
  .vmw .nest .warn{color:#B0651F}

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
  .vmw .band{height:11px;border-radius:3px;margin-bottom:6px;background:#DCD9D2}
  .vmw .band.cost{background:#CFDAE4}
  .vmw .band.tall{height:22px}
  .vmw .band.table{background:#E7C9A9;height:34px;border-radius:4px}
  .vmw .frame.bad .band.table{opacity:.35}
  .vmw .push{font-family:'Inter',sans-serif;font-size:10px;color:#B0651F;text-align:center;margin-top:4px}
  .vmw .ok{font-family:'Inter',sans-serif;font-size:10px;color:var(--accent);text-align:center;margin-top:4px}

  .vmw .warnbox{background:var(--warn-bg);border:1px solid var(--warn-line);border-radius:8px;padding:16px 20px;font-family:'Inter',sans-serif;font-size:14.5px;line-height:1.55;color:#6B4526;margin:26px 0}
  .vmw .warnbox b{color:#5A3416}

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

export const vmwareCaseBody = `
  <div class="progress" aria-hidden="true"></div>
  <aside>
    <a class="backlink" href="/">&larr; Shanica Roy</a>
    <div class="kicker">Case Study</div>
    <details class="secnav" open>
      <summary>Sections</summary>
      <nav aria-label="Sections">
        <ul class="toc">
          <li><a href="#overview">Overview</a></li>
          <li><a href="#brief">The brief</a></li>
          <li><a href="#platform">The platform</a></li>
          <li><a href="#constraint">The constraint</a></li>
          <li><a href="#decision">The call I made</a></li>
          <li><a href="#responsive">Designing for the floor</a></li>
          <li><a href="#leadership">Leading the room</a></li>
          <li><a href="#outcome">What changed</a></li>
          <li><a href="#reflection">What I'd do differently</a></li>
        </ul>
      </nav>
    </details>
  </aside>

  <main>
    <div class="eyebrow">VMware &middot; Enterprise cloud &middot; 2023</div>
    <h1>The portal I had to understand before I could touch it</h1>
    <p class="standfirst">Redesigning the purchasing portals inside VMware's Cloud Provider platform, in Clarity, the design system whose own team had already documented the wall I was about to hit.</p>
    <div class="factline">
      <span><b>Role</b> &nbsp;Product / UX Designer</span>
      <span><b>Scope</b> &nbsp;The VCPP Configurator and its four purchasing flows (new, add-on, renewal, upgrade), plus the connected subscription service pages</span>
      <span><b>System</b> &nbsp;Clarity (VMware, MIT-licensed)</span>
      <span class="nda"><b>Note</b> &nbsp;Visuals omitted under NDA. All diagrams here are original schematics with dummy values. Clarity's own documentation is public.</span>
    </div>

    <section id="overview">
      <h2>Overview</h2>
      <p class="lede">I was asked to redesign the Cloud Provider purchasing portals and apply Clarity to them. On paper that reads like a restyle. It was not.</p>
      <p>The platform sold cloud infrastructure to businesses through one of the most layered commercial models I have worked with. A single line item could carry eight kinds of cost at once, sit inside a three-level nested table, and change behaviour by region and currency. The real work was understanding that model before changing a single screen, then making design decisions that protected the system instead of adding to its weight.</p>
      <div class="stats">
        <div><b>8</b><span>cost dimensions a single service line could carry at once</span></div>
        <div><b>3</b><span>levels of drill-down the core table had to support</span></div>
        <div><b>4</b><span>purchasing flows sharing one configurator</span></div>
        <div><b>0</b><span>Clarity components that solved the core table out of the box</span></div>
      </div>
    </section>

    <section id="brief">
      <h2>The brief</h2>
      <h3>The ask was contained. The platform was not.</h3>
      <p>Apply the new design system to these portals. Clean them up. That was the brief.</p>
      <p>You cannot clean up something you do not understand, and I did not understand this yet. So the first thing I made was not a screen. It was a clear model of how the product actually sold.</p>
      <p>I made a deliberate call to invest in comprehension before touching the interface. On a platform this layered, that is not the slow path. It is the only path that keeps a redesign honest, because most of the difficulty here lived in the commercial model, not the visuals.</p>
    </section>

    <section id="platform">
      <h2>The platform</h2>
      <h3>What I was actually looking at.</h3>
      <p>A single subscription line could carry a one-time cost, a monthly cost, a prepaid cost, and an annual cost, all at the same time. The add-ons then carried their own one-time, monthly, prepaid, and annual versions of the same thing. On top of that sat a service term, a cloud type, a currency, and rules such as a minimum orderable quantity.</p>
      <p>The people using this were businesses buying cloud infrastructure, moving through steppers, committing real money. Different user types needed different things from the same flow. The confusion was not styling sitting on top of a clean product. The confusion was the product. That was the thing I had to design around.</p>
      <p>The currency and regional rules matter for a second reason. A purchasing flow that shifts by currency and region is an internationalization problem before it is a layout problem, and I designed the cost display to stay legible as those variables changed rather than assuming one region's shape.</p>
      <figure>
        <div class="diagram" role="img" aria-label="One purchasable service line fans out into eight simultaneous cost variables. Four base costs: a one-time cost around thirteen thousand dollars, a monthly cost around five dollars, a prepaid cost around four dollars, and an annual cost around twenty thousand dollars. Four matching add-on costs: one-time, monthly, prepaid, and annual. Beneath them sit the modifiers: a twelve-month service term, a cloud type, a currency, and a minimum orderable quantity rule. The buyer has to hold all of this at once before deciding. All values are illustrative, not real pricing.">
          <div class="dgroups" aria-hidden="true">
            <div class="dline">One service line</div>
            <div class="darrow">&darr;</div>
            <div class="dgroup">
              <div class="glabel">Base costs</div>
              <div class="chips">
                <span class="chip">One-time &asymp; $13,000</span>
                <span class="chip">Monthly &asymp; $5/mo</span>
                <span class="chip">Prepaid &asymp; $4</span>
                <span class="chip">Annual &asymp; $20,000/yr</span>
              </div>
            </div>
            <div class="dgroup">
              <div class="glabel">Add-on costs</div>
              <div class="chips">
                <span class="chip">One-time</span>
                <span class="chip">Monthly</span>
                <span class="chip">Prepaid</span>
                <span class="chip">Annual</span>
              </div>
            </div>
            <div class="dgroup">
              <div class="glabel">Modifiers</div>
              <div class="chips">
                <span class="chip">Service term &middot; 12 months</span>
                <span class="chip">Cloud type</span>
                <span class="chip">Currency</span>
                <span class="chip">Min quantity rule</span>
              </div>
            </div>
          </div>
        </div>
        <figcaption><b>The buyer's mental load, abstracted.</b> One purchasable line, eight simultaneous variables, before a decision could be made. Illustrative values, not real pricing.</figcaption>
      </figure>
    </section>

    <section id="constraint">
      <h2>The constraint</h2>
      <h3>The hardest screen was not a screen. It was a component that did not exist.</h3>
      <p>The portal needed a table inside a table. A row for a state. Expand it and you get a nested table of the products in that state. Inside that, the specific purchase. Three levels of drill-down, in one place, for people who needed to keep all of it straight.</p>
      <p>The engineering manager brought it to me and asked which way I wanted to go. My first move was not to invent something. It was to check what we already had. We went through Clarity together. His read was blunt. No equivalent component, and no clean alternative inside Clarity either.</p>
      <p>He was right, and Clarity's own team had already written down why. Their public design-system documentation records that the nested-datagrid pattern confused hierarchy instead of reinforcing it, and that teams nesting several levels deep would lose track of where they started. The child table would take up the full height of its parent and obscure the rows above it.</p>
      <p>So when the engineering manager and I agreed there was no good component for this, we were not stuck. We were standing where the design system's own authors had already stood.</p>
      <figure>
        <div class="diagram" role="img" aria-label="Three stacked and indented table rows show the nested-datagrid trap. The parent row, labelled State, is partly pushed out of view at the top. Inside it a nested table of products in that state, and inside that a purchase detail row flagged with a warning: focus lost, parent obscured. Nesting several levels deep hides the parent and loses the user's place.">
          <div class="nest" aria-hidden="true">
            <div class="row d1">&#9656; State &middot; parent row</div>
            <div class="row d2">&#9656; Products in state &middot; nested table</div>
            <div class="row d3">&#9656; Purchase detail &middot; nested table <span class="warn">&larr; focus lost, parent obscured</span></div>
          </div>
        </div>
        <figcaption><b>The pattern the brief implied, and why Clarity warned against it.</b> Redrawn from Clarity's public documentation, not from any product UI.</figcaption>
      </figure>
    </section>

    <section id="decision">
      <h2>The call I made</h2>
      <h3>Compose from what exists. Do not commission what does not.</h3>
      <p>The easy path is to ask for a brand-new custom component. I did not want that. A one-off component is a thing the whole system has to carry forever, and it pulls the product away from the design system instead of into it. On a platform this size, that is a governance decision, not a styling one. Every custom component is a long-term maintenance cost and a crack in the system's consistency.</p>
      <p>So I proposed the other path. Build the table out of parts Clarity already had. Take small existing components, an expandable row, the datagrid primitive, the detail-pane pattern, and group them into one composed component that behaved the way this table-in-a-table needed to, while still looking and feeling like Clarity. I had started working this out with a colleague before the meeting, so I walked in with a direction, not a question.</p>
      <figure>
        <div class="diagram" role="img" aria-label="Three labelled blocks, an expandable row, the datagrid primitive, and the detail-pane pattern, combine with a downward arrow into a single block labelled one composed component, still fully Clarity. The solution is assembled from the design system's own primitives instead of commissioning a custom build.">
          <div aria-hidden="true">
            <div class="compose">
              <span class="chip">Expandable<br>row</span>
              <span class="plus">+</span>
              <span class="chip">Datagrid<br>primitive</span>
              <span class="plus">+</span>
              <span class="chip">Detail-pane<br>pattern</span>
            </div>
            <div class="darrow" style="margin:10px 0">&darr;</div>
            <div class="compose"><span class="result">One composed component, still fully Clarity</span></div>
          </div>
        </div>
        <figcaption><b>The move.</b> Clarity's own recommended primitives became the parts I combined, instead of a custom build. Conceptual only.</figcaption>
      </figure>
      <p>The agreement we reached was clean. Same Clarity look and feel, colours mapped to Clarity equivalents, and the grouped component formalised so it could be reused. The system stayed intact. The problem still got solved.</p>
    </section>

    <section id="responsive">
      <h2>Designing for the floor</h2>
      <h3>The design that mattered was the one at minimum width.</h3>
      <p>The service page had a cost summary that grew with the user's choices. Default state, it showed one thing. Select a quantity and it filled in with whatever costs applied. Pick one type, one card. Pick several, several cards.</p>
      <p>That growth was the problem, and it only showed up if you were looking in the right place. I do detailed design at 1920, because that is where the fine decisions get made. The developer kept pulling me back to the minimum width, and he was right to. A page has to hold together at the smallest size it will ever run at, not the size it looks best at.</p>
      <p>At minimum width, a third cost card wrapped to a second line. Roughly seventy to eighty extra pixels in one block. Small on its own. But it pushed the table down, and pushed far enough, the user lands on the page and cannot see the thing they came to do.</p>
      <p>So I held the line. Not because the developer was careless. He was not, and his point that the user was still on the same page was fair. But "on the same page" and "can actually see the table" are two different bars, and I wanted the higher one. The honest hard part is that this constraint had no clean win. Even fully expanded at large sizes, the table was tight. What I held onto is the bar itself, and it is the same bar I hold today. The page's one job stays visible without scrolling, and everything else negotiates around that.</p>
      <figure>
        <div class="diagram" role="img" aria-label="Two page frames side by side at minimum width. In the left frame one cost card sits above the purchasing table and the table is fully visible, marked table visible. In the right frame three cost cards stack, the third wraps to a second line adding roughly 72 to 80 pixels, and the table is pushed below the fold, marked as failing. The page's one job has to survive the smallest screen.">
          <div class="resp" aria-hidden="true">
            <div class="frame">
              <div class="bar">min-width &middot; 1 cost type</div>
              <div class="body">
                <div class="band cost"></div>
                <div class="band table"></div>
                <div class="ok">table visible &check;</div>
              </div>
            </div>
            <div class="frame bad">
              <div class="bar">min-width &middot; 3 cost types</div>
              <div class="body">
                <div class="band cost tall"></div>
                <div class="band cost"></div>
                <div class="band table"></div>
                <div class="push">+72 to 80px wrap &rarr; table pushed below the fold</div>
              </div>
            </div>
          </div>
        </div>
        <figcaption><b>The hierarchy failure hiding in a responsive detail.</b> At minimum width, a third cost card wrapped and pushed the table, the page's whole purpose, out of view. Schematic, not real UI.</figcaption>
      </figure>
    </section>

    <section id="leadership">
      <h2>Leading the room</h2>
      <h3>Most of this project was a conversation, and I set its direction.</h3>
      <p>Two things are true about the decisions above, and both matter more than the pixels.</p>
      <p>I did not make either call by authority. I made them by walking into engineering conversations with a point of view, holding it against real pushback, and landing on something we both trusted. The composed-component path came out of a back-and-forth with the engineering manager, where I brought the direction. The responsive call came out of not backing down to a developer who had a fair counter-argument, and still landing it as a shared decision rather than a standoff.</p>
      <p>I also worked close to the build the whole way, often directly in the live product with dev tools open, checking how shipped screens matched the design and adjusting in place. A lot of the real finishing happened in the build, not in the file. That closeness is why the Clarity mapping held instead of drifting the moment it hit code.</p>
      <div class="warnbox"><b>On honesty.</b> When a question came up about adding search to one of these flows, I validated it with a product owner on the backend team, not with a real business user. I knew at the time it was a shortcut. I am naming it because it is the thing I would change, and it leads straight into the last section.</div>
    </section>

    <section id="outcome">
      <h2>What changed</h2>
      <h3>What I have, and what I am not going to invent.</h3>
      <p>The redesign covered the Configurator and its four purchasing flows and the connected subscription service pages, all rebuilt in Clarity, worked shoulder to shoulder with engineering through to the build.</p>
      <p>Here is what my decisions changed, stated plainly. The composed-component call kept a permanent one-off out of the design system, which is weight the whole platform would have carried indefinitely. The responsive call protected the core purchasing table from dropping below the fold at minimum width, which is the difference between a page that works and a page that fails at its one job. The comprehension work up front is why the redesign mapped to the real commercial model instead of prettifying a misunderstanding of it.</p>
      <p>I do not have outcome metrics from this work, and I am not going to invent any. On a redesign under NDA, the honest and the useful thing to show is the work and the decisions inside it. If you want to test how I think, the decisions are where to look.</p>
    </section>

    <section id="reflection">
      <h2>What I'd do differently</h2>
      <h3>Three things, honestly.</h3>
      <p><strong>Who I asked.</strong> A product owner can tell you how the system works. Only the real user can tell you whether a feature helps at the moment they are stuck. The closer I get to leading design, the more I see that fighting for access to the real user, even when the nearest person is easier to reach, is the job.</p>
      <p><strong>When I spoke up.</strong> So much of this portal's difficulty came from the thing being sold, not the screen selling it. Eight kinds of cost on one line is a commercial-model problem before it is an interface problem. Back then I took the model as fixed and built the best portal I could on top of it. Now I would want to be in the room earlier, when the model is still being shaped, asking whether the product could be simpler to buy, not just simpler to look at. Design is most useful upstream. I learned that here by feeling its absence.</p>
      <p><strong>Who owned my understanding.</strong> All that platform comprehension I did at the start, I did in my own head. Today I would make it visible and shared, a map the whole team could point at, so my understanding became the team's. That is the difference between doing the work and leading it, and this project is where I started to see it.</p>
    </section>

    <hr>
    <footer>
      <p>Clarity is open source under the MIT license and its documentation is public. All product screens and customer data are omitted under NDA. Diagrams here are original schematics with dummy values, not reproductions of any real UI. &nbsp;&middot;&nbsp; <a href="#overview">Back to top</a></p>
    </footer>
  </main>
`;
