// ---------------------------------------------------------------------------
// VMWARE CASE STUDY — user-authored standalone page, kept verbatim.
//
// This document arrived as a complete designed HTML page and is preserved as
// one, rather than being decomposed into site components: it deliberately uses
// its own light "paper" palette and type system (Newsreader / Inter /
// JetBrains Mono), separate from the portfolio shell. Selectors are scoped
// under `.vmw` so nothing leaks into the rest of the site. The scroll-spy
// behaviour lives in components/VmwareToc.tsx.
// ---------------------------------------------------------------------------

export const vmwareCaseStyles = `
  .vmw{
    --paper:#FBFAF8;
    --vink:#1A1A17;
    --sub:#5C5C55;
    --line:#E3E1DB;
    --line2:#CFCcC4;
    --accent:#0B6E6B;
    --accent-soft:#E4EFEE;
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

  /* layout */
  .vmw .shellc{max-width:1180px;margin:0 auto;padding:0 32px;display:grid;grid-template-columns:210px 1fr;gap:56px}
  @media(max-width:900px){.vmw .shellc{grid-template-columns:1fr;gap:0}}

  /* sticky section nav */
  .vmw aside{position:sticky;top:0;align-self:start;height:100vh;padding:40px 0;display:flex;flex-direction:column}
  @media(max-width:900px){.vmw aside{position:static;height:auto;padding:24px 0;border-bottom:1px solid var(--line)}}
  .vmw .backlink{font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--sub);margin-bottom:14px;display:block}
  .vmw .kicker{font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);margin-bottom:26px}
  .vmw .toc{list-style:none;display:flex;flex-direction:column;gap:2px}
  @media(max-width:900px){.vmw .toc{flex-flow:row wrap;gap:6px 16px;margin-top:8px}}
  .vmw .toc a{
    font-family:'Inter',sans-serif;font-size:13.5px;color:var(--sub);
    display:block;padding:5px 0;border-left:2px solid transparent;padding-left:14px;margin-left:-2px;
    transition:color .15s,border-color .15s;
  }
  @media(max-width:900px){.vmw .toc a{border-left:none;padding-left:0;margin-left:0}}
  .vmw .toc a:hover{color:var(--vink);text-decoration:none}
  .vmw .toc a.active{color:var(--vink);border-color:var(--accent);font-weight:500}

  .vmw main{padding:56px 0 120px;max-width:680px}

  /* hero */
  .vmw .eyebrow{font-family:'JetBrains Mono',monospace;font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:var(--sub);margin-bottom:20px}
  .vmw h1{font-weight:500;font-size:clamp(34px,5vw,52px);line-height:1.1;letter-spacing:-.015em;margin-bottom:22px;font-family:'Newsreader',Georgia,serif;color:var(--vink)}
  .vmw .standfirst{font-size:22px;color:#33332E;line-height:1.55;margin-bottom:30px}
  .vmw .factline{
    font-family:'Inter',sans-serif;font-size:13px;color:var(--sub);
    display:flex;flex-wrap:wrap;gap:8px 20px;padding:20px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line);
  }
  .vmw .factline b{color:var(--vink);font-weight:600}
  .vmw .nda{color:var(--accent);font-weight:500}

  /* sections */
  .vmw section{padding-top:64px;scroll-margin-top:32px}
  .vmw h2{font-family:'Inter',sans-serif;font-weight:600;font-size:14px;letter-spacing:.02em;text-transform:uppercase;color:var(--accent);margin-bottom:18px}
  .vmw h3{font-weight:500;font-size:28px;line-height:1.2;letter-spacing:-.01em;margin:0 0 18px;font-family:'Newsreader',Georgia,serif;color:var(--vink)}
  .vmw p{margin-bottom:20px}
  .vmw .lede{font-size:21px;color:#33332E}
  .vmw strong{font-weight:600}

  /* pull stat row */
  .vmw .stats{display:grid;grid-template-columns:repeat(3,1fr);gap:0;border:1px solid var(--line);border-radius:10px;overflow:hidden;margin:28px 0}
  .vmw .stats div{padding:22px 20px;border-right:1px solid var(--line)}
  .vmw .stats div:last-child{border-right:none}
  .vmw .stats b{font-family:'Inter',sans-serif;font-weight:600;font-size:30px;display:block;line-height:1;margin-bottom:8px}
  .vmw .stats span{font-family:'Inter',sans-serif;font-size:12.5px;color:var(--sub);line-height:1.4}
  @media(max-width:620px){.vmw .stats{grid-template-columns:1fr}.vmw .stats div{border-right:none;border-bottom:1px solid var(--line)}.vmw .stats div:last-child{border-bottom:none}}

  /* quote from clarity docs */
  .vmw blockquote{
    margin:28px 0;padding:22px 26px;background:var(--card);
    border:1px solid var(--line);border-left:3px solid var(--accent);border-radius:0 8px 8px 0;
    font-size:19px;line-height:1.55;color:#2C2C27;
  }
  .vmw blockquote .src{font-family:'JetBrains Mono',monospace;font-size:11.5px;color:var(--sub);display:block;margin-top:12px;letter-spacing:.02em}

  /* figure / diagram */
  .vmw figure{margin:34px 0}
  .vmw .diagram{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:30px 26px}
  .vmw figcaption{font-family:'Inter',sans-serif;font-size:13px;color:var(--sub);margin-top:12px;line-height:1.5}
  .vmw figcaption b{color:var(--vink);font-weight:600}
  .vmw .mono{font-family:'JetBrains Mono',monospace}

  /* nested-table failure diagram */
  .vmw .nest{font-family:'JetBrains Mono',monospace;font-size:12.5px;color:var(--vink)}
  .vmw .nest .row{border:1px solid var(--line2);border-radius:6px;padding:9px 12px;margin-bottom:7px;background:var(--paper)}
  .vmw .nest .d1{margin-left:0}
  .vmw .nest .d2{margin-left:22px;background:#F3F1EC}
  .vmw .nest .d3{margin-left:44px;background:#EBE8E1}
  .vmw .nest .warn{color:#B0651F}

  /* compose diagram */
  .vmw .compose{display:flex;align-items:center;justify-content:center;gap:18px;flex-wrap:wrap}
  .vmw .chip{font-family:'JetBrains Mono',monospace;font-size:12px;background:var(--accent-soft);border:1px solid #B9D8D5;color:#0A5350;padding:8px 12px;border-radius:6px;text-align:center;line-height:1.3}
  .vmw .plus{font-family:'JetBrains Mono',monospace;color:var(--sub);font-size:18px}
  .vmw .arrow{font-family:'JetBrains Mono',monospace;color:var(--accent);font-size:20px;width:100%;text-align:center;margin:6px 0}
  .vmw .result{font-family:'JetBrains Mono',monospace;font-size:12.5px;background:var(--vink);color:#fff;padding:12px 18px;border-radius:8px;text-align:center}

  /* responsive diagram */
  .vmw .resp{display:grid;grid-template-columns:1fr 1fr;gap:16px}
  @media(max-width:560px){.vmw .resp{grid-template-columns:1fr}}
  .vmw .frame{border:1px solid var(--line2);border-radius:8px;overflow:hidden;background:var(--paper)}
  .vmw .frame .bar{font-family:'JetBrains Mono',monospace;font-size:10.5px;color:var(--sub);padding:6px 10px;border-bottom:1px solid var(--line);background:var(--card)}
  .vmw .frame .body{padding:10px}
  .vmw .band{height:11px;border-radius:3px;margin-bottom:6px;background:#DCD9D2}
  .vmw .band.cost{background:#CFE4E2}
  .vmw .band.tall{height:22px}
  .vmw .band.table{background:#E7C9A9;height:34px;border-radius:4px}
  .vmw .frame.bad .band.table{opacity:.35}
  .vmw .push{font-family:'JetBrains Mono',monospace;font-size:10px;color:#B0651F;text-align:center;margin-top:4px}
  .vmw .ok{font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--accent);text-align:center;margin-top:4px}

  .vmw .warnbox{background:var(--warn-bg);border:1px solid var(--warn-line);border-radius:8px;padding:16px 20px;font-family:'Inter',sans-serif;font-size:14.5px;line-height:1.55;color:#6B4526;margin:26px 0}
  .vmw .warnbox b{color:#5A3416}

  .vmw hr{border:none;border-top:1px solid var(--line);margin:56px 0 0}

  .vmw footer{max-width:680px;margin-top:20px;font-family:'Inter',sans-serif;font-size:14px;color:var(--sub)}
  .vmw footer a{font-weight:500}
`;

export const vmwareCaseBody = `
  <aside>
    <a class="backlink" href="/">&larr; Shanica Roy</a>
    <div class="kicker">Case Study</div>
    <nav aria-label="Sections">
      <ul class="toc">
        <li><a href="#overview">Overview</a></li>
        <li><a href="#brief">The brief</a></li>
        <li><a href="#platform">The platform</a></li>
        <li><a href="#constraint">The constraint</a></li>
        <li><a href="#decision">The decision</a></li>
        <li><a href="#responsive">Designing for the floor</a></li>
        <li><a href="#leadership">Working with the team</a></li>
        <li><a href="#outcome">Where it landed</a></li>
        <li><a href="#reflection">What I'd do differently</a></li>
      </ul>
    </nav>
  </aside>

  <main>
    <div class="eyebrow">VMware · Enterprise cloud · 2023</div>
    <h1>The portal I had to understand before I could touch it</h1>
    <p class="standfirst">Redesigning VMware's Cloud Provider purchasing portals in Clarity, the design system whose own team had already documented the wall I was about to hit.</p>
    <div class="factline">
      <span><b>Role</b> &nbsp;Product / UX Designer</span>
      <span><b>Scope</b> &nbsp;Cloud Provider portal + connected service portals</span>
      <span><b>System</b> &nbsp;Clarity (VMware, MIT-licensed)</span>
      <span class="nda">Visuals omitted under NDA · Clarity artifacts are public</span>
    </div>

    <section id="overview">
      <h2>Overview</h2>
      <p class="lede">I was asked to redesign VMware's Cloud Provider portal and the service portals connected to it, using Clarity. On paper that reads like a restyle. It wasn't. The platform sold cloud infrastructure to businesses through one of the most layered commercial models I've worked with, and the real work was understanding it before changing a single screen.</p>
      <div class="stats">
        <div><b>8</b><span>cost dimensions a single service line could carry at once</span></div>
        <div><b>3</b><span>levels of drill-down the core table had to support</span></div>
        <div><b>0</b><span>Clarity components that solved it out of the box</span></div>
      </div>
    </section>

    <section id="brief">
      <h2>The brief</h2>
      <h3>The ask was small. The platform was not.</h3>
      <p>Apply the new design system to these portals. Clean them up. That was the brief. But you can't clean up something you don't understand, and I didn't understand this yet. So the first real thing I made wasn't a screen. It was sense.</p>
      <p>I spent a long time just learning the platform. Longer than felt comfortable to admit at the time. I get now that this was the right instinct, not a slow one. Back then it just felt like I was behind. I wasn't. I was doing the only thing that would keep the redesign honest.</p>
    </section>

    <section id="platform">
      <h2>The platform</h2>
      <h3>What I was actually looking at.</h3>
      <p>Here's what made it hard, and it wasn't the visuals. A single subscription line could carry a one-time cost, a monthly cost, a prepaid cost, and an annual cost, all at once. The add-ons then carried their own one-time, monthly, and annual versions of the same thing. On top of that sat a service term, a cloud type, a currency, and rules like a minimum quantity you were allowed to order.</p>
      <p>A person using this portal had to hold all of that in their head before they committed real money. And these weren't casual users. They were businesses buying cloud infrastructure, moving through steppers, with different user types needing different things from the same flow. The confusion wasn't styling sitting on top of a clean product. The confusion <em>was</em> the product. That was the thing I had to design around.</p>
      <figure>
        <div class="diagram">
          <div class="compose" style="gap:10px">
            <span class="chip">One-time</span><span class="chip">Monthly</span><span class="chip">Prepaid</span><span class="chip">Annual</span>
            <span class="chip">+ add-on ×3</span><span class="chip">Service term</span><span class="chip">Cloud type</span><span class="chip">Currency</span>
          </div>
        </div>
        <figcaption><b>The buyer's mental load, abstracted.</b> One purchasable line, eight simultaneous variables, before a decision could be made. No VMware data — a schematic of the problem shape.</figcaption>
      </figure>
    </section>

    <section id="constraint">
      <h2>The constraint</h2>
      <h3>The hardest screen wasn't a screen. It was a component that didn't exist.</h3>
      <p>The portal needed a table inside a table. A row for a state; expand it and you got a whole nested table of the products in that state; inside that, the specific purchase. Three levels of drill-down, in one place, for people who needed to keep all of it straight.</p>
      <p>The engineering manager brought it to me and asked which way I wanted to go. My first instinct wasn't to invent something. It was to check what we already had. We went through Clarity together. His read was blunt: no equivalent component, and no alternative inside Clarity either.</p>
      <p>He was right, and I can prove it, because Clarity's own team wrote down exactly why this pattern is a trap. Their public design-system wiki says the nested-datagrid approach:</p>
      <blockquote>
        confused hierarchy instead of reinforcing it, and was prone to abuse — datagrids nested within datagrids until it became easy to lose one's focus.
        <span class="src">— Clarity Design System wiki, "Hierarchical datagrid" (public, MIT)</span>
      </blockquote>
      <p>And on the exact failure I was worried about — the child table swallowing its parent:</p>
      <blockquote>
        a nested datagrid would commonly take up the full height of its parent, obscuring the parent's rows; teams nesting three to four deep meant you'd go down a couple of levels and have to scroll to find where you started.
        <span class="src">— Clarity Design System wiki, "Hierarchical datagrid"</span>
      </blockquote>
      <figure>
        <div class="diagram">
          <div class="nest" aria-hidden="true">
            <div class="row d1">▸ State — parent row</div>
            <div class="row d2">▸ Products in state — nested table</div>
            <div class="row d3">▸ Purchase detail — nested table <span class="warn">← focus lost, parent obscured</span></div>
          </div>
        </div>
        <figcaption><b>The pattern the brief implied, and why Clarity warned against it.</b> Redrawn from Clarity's public documentation, not from VMware UI.</figcaption>
      </figure>
      <p>So when the EM and I stood there agreeing "there's no good component for this," we weren't stuck. We were standing exactly where the design system's authors had already stood.</p>
    </section>

    <section id="decision">
      <h2>The decision</h2>
      <h3>Compose from what exists, don't commission what doesn't.</h3>
      <p>The easy path is to ask for a brand-new custom component to be built. I didn't want that. A one-off component is a thing the whole system then has to carry forever, and it pulls the product away from the design system instead of into it.</p>
      <p>So I proposed the other path: build the thing out of parts Clarity already had. Take small existing components and group them into one composed component that behaved the way this table-in-a-table needed to, while still looking and feeling like Clarity. I'd started working this out with a colleague before the meeting, so I walked in with a direction rather than a question.</p>
      <figure>
        <div class="diagram">
          <div class="compose">
            <span class="chip">Expandable<br>row</span>
            <span class="plus">+</span>
            <span class="chip">Datagrid<br>primitive</span>
            <span class="plus">+</span>
            <span class="chip">Detail-pane<br>pattern</span>
          </div>
          <div class="arrow">↓</div>
          <div class="compose"><span class="result">One composed component — still 100% Clarity</span></div>
        </div>
        <figcaption><b>The move, abstracted.</b> Clarity's own recommended alternatives — expandable rows, the detail pane, a dedicated detail view — became the primitives I combined, instead of a custom build. Conceptual only.</figcaption>
      </figure>
      <p>The agreement we reached in the room was clean: same Clarity look and feel, colours mapped to Clarity equivalents, and engineering would decide whether to combine the existing components or formalise the grouped one. The system stayed intact. The problem still got solved.</p>
    </section>

    <section id="responsive">
      <h2>Designing for the floor</h2>
      <h3>The design that mattered was the one at minimum width.</h3>
      <p>The service page had a cost summary that grew with the user's choices. Default state, it showed one thing. Select a quantity in the table below and it filled in — one-time, monthly, whatever applied. Pick one type, one card. Pick several, several cards.</p>
      <p>That growth was the problem, and it only showed up if you were looking in the right place. I do detailed design at 1920, because that's where the fine decisions get made. But the developer kept pulling me back to the minimum width, and he was right to. A page has to hold together at the smallest size it will ever run at, not the size it looks best at.</p>
      <figure>
        <div class="resp">
          <div class="frame">
            <div class="bar">min-width · 1 cost type</div>
            <div class="body">
              <div class="band cost"></div>
              <div class="band table"></div>
              <div class="ok">table visible ✓</div>
            </div>
          </div>
          <div class="frame bad">
            <div class="bar">min-width · 3 cost types</div>
            <div class="body">
              <div class="band cost tall"></div>
              <div class="band cost"></div>
              <div class="band table"></div>
              <div class="push">+72–80px wrap → table pushed below the fold</div>
            </div>
          </div>
        </div>
        <figcaption><b>The hierarchy failure hiding in a responsive detail.</b> At minimum width, a third cost card wrapped to a second line, pushing the table — the page's whole purpose — out of view. Schematic, not VMware UI.</figcaption>
      </figure>
      <p>Roughly 72 to 80 extra pixels in one block. Small on its own. But it pushed the table down, and if you push it far enough the user lands on the page and can't see the thing they came to do. That's not a styling nitpick. That's the page failing at its one job.</p>
      <p>So I pushed on it. Not because the developer was careless — he wasn't, and his point that the user was still on the same page was fair. But "on the same page" and "can actually see the table" are two different bars, and I wanted the higher one. The honest hard part: this constraint had no clean win. Even at large sizes, fully expanded, the table was tight. Some of that was just how much this page had to show at once. What I held onto is the bar we were arguing about, because it's the same bar I hold today — the page's one job stays visible without scrolling, and everything else negotiates around that.</p>
    </section>

    <section id="leadership">
      <h2>Working with the team</h2>
      <h3>Most of this project was a conversation.</h3>
      <p>Two things are true about the decisions above, and both matter more than the pixels. First, I didn't make either call alone or by authority. I made them by walking into engineering conversations with a point of view, holding it against real pushback, and landing on something we both trusted. The composed-component decision came out of a back-and-forth with the engineering manager. The responsive decision came out of not backing down to a developer who had a fair counter-argument.</p>
      <p>Second, I worked close to the build the whole way — often directly in the live product with the browser's dev tools open, checking how shipped screens matched the design and adjusting in place. A lot of the real finishing happened in the build, not in the file. That closeness is why the Clarity mapping actually held instead of drifting the moment it hit code.</p>
      <div class="warnbox"><b>On honesty:</b> when a question came up about adding search to one of these flows, I validated it with a product owner on the backend team — not with an actual business user. I knew at the time it was a shortcut. Naming it here is deliberate; it's the thing I'd change, and it leads directly into the next section.</div>
    </section>

    <section id="outcome">
      <h2>Where it landed</h2>
      <h3>What I have, and what I don't.</h3>
      <p>The redesign covered the Cloud Provider portal and the service portals connected to it, all rebuilt in Clarity, worked shoulder-to-shoulder with engineering through to the build.</p>
      <p>I don't have outcome metrics from this work, and I'm not going to invent any. What I have is the work itself and the decisions inside it — which, for a project like this, is the honest and the useful thing to show. If you want to test how I think, the decisions are where to look.</p>
    </section>

    <section id="reflection">
      <h2>What I'd do differently</h2>
      <h3>Three things, honestly.</h3>
      <p><strong>Who I asked.</strong> A product owner can tell you how the system works. Only the real user can tell you whether a feature helps at the moment they're stuck. The closer I get to leading design, the more I see that protecting that difference — and fighting for access to the real user even when the nearest person is easier to reach — is the job.</p>
      <p><strong>When I spoke up.</strong> So much of this portal's difficulty came from the thing being sold, not the screen selling it. Eight kinds of cost on one line is a commercial-model problem before it's an interface problem. Three levels of nested tables exist because the model underneath is that layered. Back then I took the model as fixed and built the best portal I could on top of it. Now I'd want to be in the room earlier, when the model is still being shaped, asking whether the product could be simpler to <em>buy</em>, not just simpler to look at. Design is most useful upstream. I learned that here by feeling its absence.</p>
      <p><strong>Who owned my understanding.</strong> All that platform comprehension I did at the start, I did silently, in my own head. Today I'd make it visible and shared — a map the whole team could point at — so my understanding became the team's. That's the difference between doing the work and leading it, and this project is where I started to see it.</p>
    </section>

    <hr>
    <footer>
      <p>Clarity is open source under the MIT license; its documentation and components are public. All VMware product screens and customer data are omitted under NDA. Diagrams here are abstract schematics, not reproductions of VMware UI. &nbsp;·&nbsp; <a href="#overview">Back to top</a></p>
    </footer>
  </main>
`;
