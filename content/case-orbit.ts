// -------------------------------------------------------------------------
// ORBIT DESIGN SYSTEM CASE STUDY
// Content is the author's own case-study document, ported into the
// portfolio case-study shell (left section nav + scrollable column). The
// document's colored section bands are neutralized to white; only specimen
// swatches keep their colors, since those ARE the documented content.
// Behavior (scroll-spy / progress / mobile dropdown) lives in CaseToc.tsx.
// -------------------------------------------------------------------------

export const orbitCaseStyles = `.orbit, .orbit{ margin: 0; padding: 0; background: #FFFFFF; color: #1A1A1A; font-family: 'Inter', system-ui, sans-serif; -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility; }*{ box-sizing: border-box; }.orbit ::selection{ background: #00A7FF; color: #FFFFFF; }.orbit a{ color: inherit; }.orbit .display{ font-family: 'Satoshi', sans-serif; font-weight: 700; letter-spacing: -0.025em; line-height: 0.98; }.orbit .mono{ font-family: 'JetBrains Mono', monospace; }.orbit .eyebrow{ font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: #666666; }.orbit .lead{ font-size: 22px; line-height: 1.5; color: #1A1A1A; font-weight: 400; }.orbit .body{ font-size: 16px; line-height: 1.7; color: #1A1A1A; font-weight: 400; }.orbit .grad-text{ background: var(--uxp-accent-fill, linear-gradient(90deg, #00A7FF 0%, #C648E6 50%, #FF921E 100%)); -webkit-background-clip: var(--uxp-accent-clip, text); background-clip: var(--uxp-accent-clip, text); color: var(--uxp-accent-color, transparent); }.orbit .section-divider{ height: 1px; background: #EFEFEC; flex: 1; }.orbit .tok-chip{ font-family: 'JetBrains Mono', monospace; font-size: 12px; background: #F7F7F5; padding: 2px 8px; border-radius: 3px; color: #1A1A1A; display: inline-block; }.orbit .surface{ background: #FFFFFF; border: 1px solid #EFEFEC; border-radius: 4px; }.orbit .well{ background: #FCFCFA; border: 1px solid #EFEFEC; border-radius: 4px; }.orbit h2.section-h{ font-family: 'Satoshi', sans-serif; font-weight: 700; font-size: clamp(40px, 5.5vw, 72px); line-height: 1.0; letter-spacing: -0.025em; margin: 0 0 28px; color: #1A1A1A; }.orbit h3.sub-h{ font-family: 'Satoshi', sans-serif; font-weight: 600; font-size: 24px; line-height: 1.2; letter-spacing: -0.015em; margin: 40px 0 12px; color: #1A1A1A; }.orbit h4.mini-h{ font-family: 'Inter', sans-serif; font-weight: 700; font-size: 14px; letter-spacing: 0.04em; text-transform: uppercase; margin: 0 0 12px; color: #1A1A1A; }.orbit p{ margin: 0 0 18px; }.orbit ul.tight{ margin: 0 0 18px; padding-left: 20px; }.orbit ul.tight li{ font-size: 15px; line-height: 1.65; color: #1A1A1A; margin-bottom: 6px; }.orbit .pull{ font-family: 'Satoshi', sans-serif; font-weight: 500; font-size: 26px; line-height: 1.3; letter-spacing: -0.02em; color: #1A1A1A; padding: 24px 0; border-top: 1px solid #1A1A1A; border-bottom: 1px solid #EFEFEC; margin: 32px 0; }.orbit .num{ font-family: 'JetBrains Mono', monospace; font-size: 13px; color: #1A1A1A; letter-spacing: 0.04em; }.orbit .annot{ font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; color: #666; }.orbit kbd{ font-family: 'JetBrains Mono', monospace; font-size: 11px; background: #F7F7F5; border: 1px solid #EFEFEC; padding: 2px 6px; border-radius: 3px; }


/* ---- portfolio shell + white-background overrides (Orbit) ---- */
.orbit{ --vink:#1a1a1d; --sub:#797979; --line:#E5E5E5; --accent:#7A5AB2; background:#FFFFFF; color:var(--vink); min-height:100vh; }
.orbit, .orbit *{ box-sizing:border-box; }
.orbit .progress{position:fixed;top:0;left:0;height:2px;width:0;background:var(--accent);z-index:60}
.orbit .shellc{max-width:1200px;margin:0 auto;padding:0 24px;display:grid;grid-template-columns:238px 1fr;gap:56px}
@media(max-width:960px){.orbit .shellc{grid-template-columns:1fr;gap:0;padding:0 20px}}
.orbit aside{position:sticky;top:0;align-self:start;height:100vh;padding:40px 0;display:flex;flex-direction:column;overflow-y:auto}
.orbit aside::-webkit-scrollbar{width:0}
@media(max-width:960px){.orbit aside{position:sticky;top:0;z-index:50;height:auto;padding:12px 0;background:#fff;border-bottom:1px solid var(--line);overflow:visible}}
.orbit .backlink{font-family:'Inter',sans-serif;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--sub);margin-bottom:14px;display:block;text-decoration:none}
.orbit .backlink:hover{color:var(--vink)}
.orbit .kicker{font-family:'Inter',sans-serif;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);margin-bottom:22px}
@media(max-width:960px){.orbit .backlink{display:inline;margin:0 16px 0 0}.orbit .kicker{display:inline;margin:0}}
.orbit .secnav summary{display:none;font-family:'Inter',sans-serif;font-size:13px;color:var(--vink);cursor:pointer;padding:8px 0;list-style:none}
.orbit .secnav summary::-webkit-details-marker{display:none}
@media(max-width:960px){.orbit .secnav summary{display:block}.orbit .secnav summary::after{content:" \\2193";color:var(--sub)}.orbit .secnav[open] summary::after{content:" \\2191"}}
.orbit .toc{list-style:none;display:flex;flex-direction:column;gap:1px;margin:0;padding:0}
.orbit .toc .grp{font-family:'Inter',sans-serif;font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#A9A9A9;margin:20px 0 7px;padding-left:14px}
.orbit .toc .grp:first-child{margin-top:0}
.orbit .toc a{font-family:'Inter',sans-serif;font-size:13px;color:var(--sub);display:block;padding:4px 0 4px 14px;border-left:2px solid transparent;margin-left:-2px;text-decoration:none;transition:color .15s,border-color .15s;line-height:1.3}
.orbit .toc a:hover{color:var(--vink)}
.orbit .toc a.active{color:var(--vink);border-color:var(--accent);font-weight:500}
.orbit main{padding:48px 0 120px;min-width:0;max-width:760px}
@media(max-width:960px){.orbit main{padding-top:28px}}
/* neutralize the document's full-bleed section chrome: white, left-aligned, no tint */
.orbit main section{padding:52px 0!important;background:transparent!important;border-top:1px solid var(--line)!important;border-bottom:0!important;scroll-margin-top:24px}
.orbit main > section:first-of-type{border-top:0!important;padding-top:8px!important}
.orbit main section > div{max-width:100%!important;margin:0!important;padding:0!important}
/* map bundled faces to available ones */
.orbit h1,.orbit .display,.orbit h2.section-h{font-family:'Newsreader',Georgia,serif!important;color:var(--vink)!important}
.orbit h3.sub-h{font-family:'Inter',"Helvetica Neue",Arial,sans-serif!important;color:var(--vink)!important;font-weight:600}
.orbit .num,.orbit .eyebrow,.orbit .tok-chip,.orbit kbd,.orbit code,.orbit .mono{font-family:'Roboto Mono',ui-monospace,Menlo,monospace!important}
.orbit .lead,.orbit .body,.orbit p{font-family:'Inter',"Helvetica Neue",Arial,sans-serif}
.orbit .lead{color:var(--vink)!important}
/* divider slides -> plain white group intros */
.orbit main section.divider{text-align:left}
.orbit main section.divider .display{font-size:clamp(30px,4vw,44px)!important}
.orbit main section.divider .lead{color:#3A3A3A!important}
.orbit h1{font-weight:500;font-size:clamp(34px,5vw,56px);line-height:1.08;letter-spacing:-.02em}
.orbit h2.section-h{font-weight:500;font-size:clamp(30px,4vw,44px)!important;line-height:1.05;letter-spacing:-.02em;margin:0 0 20px}
.orbit .section-divider{background:var(--line)!important}
`;

export const orbitCaseBody = `<div class="progress"></div>
<div class="shellc">
  <aside>
    <a class="backlink" href="/">← Selected Work</a>
    <div class="kicker">Orbit Design System</div>
    <details class="secnav" open>
      <summary>Sections</summary>
      <nav class="toc" aria-label="Case study sections">
            <li class="grp">The problem</li>
            <a href="#friction">The gradient problem</a>
            <a href="#why-system">When to systematize</a>
            <a href="#scope">Scope of the library</a>
            <li class="grp">Foundations</li>
            <a href="#grid">Layout grid</a>
            <a href="#color">Color</a>
            <a href="#spacing">Spacing</a>
            <a href="#icons">Icons</a>
            <a href="#type">Typography</a>
            <a href="#shadow">Box shadow</a>
            <li class="grp">Components</li>
            <a href="#button">Button</a>
            <a href="#link">Link</a>
            <a href="#tab">Tab</a>
            <a href="#lang">Language switcher</a>
            <a href="#textfield">Text field</a>
            <a href="#card">Card</a>
            <a href="#modal">Modal</a>
            <a href="#search">Search bar</a>
            <a href="#pagination">Pagination</a>
            <a href="#accordion">Accordion</a>
            <a href="#checkbox">Checkbox</a>
            <a href="#table">Data table</a>
            <li class="grp">Shipping it</li>
            <a href="#adoption">Adoption</a>
            <a href="#changed">What changed</a>
            <a href="#differently">What I'd do differently</a>
            <a href="#next">What's next</a>
      </nav>
    </details>
  </aside>
  <main>
<section id="friction" style="padding: 128px 40px 96px">
  <div style="max-width: 880px; margin: 0 auto;">
    <div style="display:flex; align-items:baseline; gap:16px; margin-bottom: 32px;">
      <span class="num">A</span>
      <span class="eyebrow">Framing · What was breaking</span>
      <span class="section-divider"></span>
    </div>
    <h2 class="section-h">The title gradient <span style="color:#666;">ran the wrong way.</span></h2>
    <p class="lead">Not abstractly. On one screen the brand gradient ran blue → purple → orange. On the next it ran orange → purple → blue. Same three colors. Reversed. Three weeks apart, both designed by me.</p>
    <p class="body">That was the symptom that stopped feeling like a one-off. When I started looking, it kept happening. <strong>Three near-identical blues</strong> were drifting across screens, one cyan-ish in a hero, one slightly grey in a sub-head, one color-picked from a screenshot of an old export. Form fields were being rebuilt every time a new screen needed one, with different paddings, different focus rings, and three different ideas of what “required” looked like. The logo's three colors, blue, purple, orange, were being pulled apart and used as flat brand palettes, as if the gradient between them had never existed.</p>

    <!-- Title gradient evidence -->
    <div class="well" style="padding: 40px; margin: 40px 0 32px;">
      <div class="eyebrow" style="margin-bottom: 28px;">Evidence · the title gradient, three runs of the same week</div>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; align-items: start;">
        <div>
          <div class="surface" style="padding: 28px 20px; display:flex; align-items:center; justify-content:center; min-height: 110px;">
            <div class="display" style="font-size: 30px; font-weight:800; letter-spacing:-0.03em; background: linear-gradient(90deg, #00A7FF 0%, #C648E6 50%, #FF921E 100%); -webkit-background-clip:text; background-clip:text; color:transparent;">UXPective</div>
          </div>
          <div class="annot" style="margin-top: 12px;">Screen 01 · the intended run</div>
          <div style="font-size: 13px; color:#1A1A1A; margin-top: 4px; line-height: 1.5;">Blue → Purple → Orange. 90°.</div>
        </div>
        <div>
          <div class="surface" style="padding: 28px 20px; display:flex; align-items:center; justify-content:center; min-height: 110px;">
            <div class="display" style="font-size: 30px; font-weight:800; letter-spacing:-0.03em; background: linear-gradient(90deg, #FF921E 0%, #C648E6 50%, #00A7FF 100%); -webkit-background-clip:text; background-clip:text; color:transparent;">UXPective</div>
          </div>
          <div class="annot" style="margin-top: 12px;">Screen 02 · reversed</div>
          <div style="font-size: 13px; color:#1A1A1A; margin-top: 4px; line-height: 1.5;">Orange → Purple → Blue. Same hue stops, mirrored.</div>
        </div>
        <div>
          <div class="surface" style="padding: 28px 20px; display:flex; align-items:center; justify-content:center; min-height: 110px;">
            <div class="display" style="font-size: 30px; font-weight:800; letter-spacing:-0.03em; background: linear-gradient(135deg, #00A7FF 0%, #C648E6 50%, #FF921E 100%); -webkit-background-clip:text; background-clip:text; color:transparent;">UXPective</div>
          </div>
          <div class="annot" style="margin-top: 12px;">Screen 03 · re-angled</div>
          <div style="font-size: 13px; color:#1A1A1A; margin-top: 4px; line-height: 1.5;">Correct stops. 135° instead of 90°. Wrong, subtly.</div>
        </div>
      </div>
    </div>

    <!-- Three blues drifting -->
    <h3 class="sub-h">Three blues, drifting</h3>
    <p class="body">The blue I had in my head was #00A7FF. The blues actually shipping were these:</p>
    <div class="well" style="padding: 32px; margin: 8px 0 24px;">
      <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap: 24px;">
        <div>
          <div style="height:80px; background:#00A7FF; border-radius:4px;"></div>
          <div class="mono" style="font-size:11px; color:#1A1A1A; margin-top:10px;">#00A7FF</div>
          <div style="font-size:13px; color:#666; margin-top:2px;">Intended.</div>
        </div>
        <div>
          <div style="height:80px; background:#1DB2FF; border-radius:4px;"></div>
          <div class="mono" style="font-size:11px; color:#1A1A1A; margin-top:10px;">#1DB2FF</div>
          <div style="font-size:13px; color:#666; margin-top:2px;">Slightly cyan. Used in a hero.</div>
        </div>
        <div>
          <div style="height:80px; background:#3A9CD5; border-radius:4px;"></div>
          <div class="mono" style="font-size:11px; color:#1A1A1A; margin-top:10px;">#3A9CD5</div>
          <div style="font-size:13px; color:#666; margin-top:2px;">Greyed. Color-picked from a JPEG.</div>
        </div>
      </div>
    </div>

    <p class="body">None of these are <em>wrong</em> on their own. Placed next to each other on the same surface, they read as a brand losing its grip. The fracture wasn't in any single decision; it was in <strong>re-deciding the same thing every time I opened the file</strong>.</p>

    <div class="pull">A trustworthy brand is one where the small decisions have been made once. The system is the place those decisions live so I stop re-making them at 11pm.</div>
  </div>
</section>
<section id="why-system" style="padding: 96px 40px">
  <div style="max-width: 880px; margin: 0 auto;">
    <div style="display:flex; align-items:baseline; gap:16px; margin-bottom: 32px;">
      <span class="num">B</span>
      <span class="eyebrow">Framing · Why a system was the right answer</span>
      <span class="section-divider"></span>
    </div>
    <h2 class="section-h">Not every inconsistency <span style="color:#666;">needs a system.</span></h2>
    <p class="lead">Most small projects don't earn one. A design system is a heavy artifact, somebody has to build it, maintain it, version it, and document it, and that work only pays back if the cost of <em>not</em> having one has crossed a threshold.</p>

    <p class="body">Three things made the threshold clear for me, in this order:</p>

    <div style="display:grid; grid-template-columns: 1fr; gap: 12px; margin: 28px 0 28px;">
      <div class="surface" style="padding: 28px 32px;">
        <div class="eyebrow" style="margin-bottom: 8px;">Signal 01</div>
        <div style="font-family:'Satoshi',sans-serif; font-weight:600; font-size: 22px; letter-spacing:-0.015em; color:#1A1A1A; line-height: 1.25;">The number of distinct surfaces I was maintaining alone</div>
        <p style="font-size:15px; line-height:1.65; color:#1A1A1A; margin: 10px 0 0;">Up to three or four surfaces, I could hold the whole UI in my head. Past that, every new screen started from a screenshot of the last one, and inherited every uncorrected error in it. The error compounds; it doesn't average out.</p>
      </div>
      <div class="surface" style="padding: 28px 32px;">
        <div class="eyebrow" style="margin-bottom: 8px;">Signal 02</div>
        <div style="font-family:'Satoshi',sans-serif; font-weight:600; font-size: 22px; letter-spacing:-0.015em; color:#1A1A1A; line-height: 1.25;">The rate at which I was shipping new screens</div>
        <p style="font-size:15px; line-height:1.65; color:#1A1A1A; margin: 10px 0 0;">Roughly one new screen a week. At that pace, ad-hoc consistency is a fiction. Either there is a referable source, or there are forty subtly different button paddings.</p>
      </div>
      <div class="surface" style="padding: 28px 32px;">
        <div class="eyebrow" style="margin-bottom: 8px;">Signal 03</div>
        <div style="font-family:'Satoshi',sans-serif; font-weight:600; font-size: 22px; letter-spacing:-0.015em; color:#1A1A1A; line-height: 1.25;">The cost of re-deciding the same patterns</div>
        <p style="font-size:15px; line-height:1.65; color:#1A1A1A; margin: 10px 0 0;">Half of every new screen was rebuilding the obvious: form fields, button states, section padding. Time spent re-deciding is time not spent thinking about the screen itself. That's the cost you can't see until you measure it.</p>
      </div>
    </div>

    <h3 class="sub-h">The threshold, named plainly</h3>
    <p class="body"><strong>It stopped being optional the moment I caught myself rebuilding a text field for the third time and could not remember which of the previous two was the “right” one.</strong> Not a metric. A felt threshold. If the question is “which version of the thing I made last month do I copy?” and the honest answer is “I don't know,” the system has already become necessary; I'm just still pretending it hasn't.</p>

    <p class="body">A system was right not because I wanted polish, but because the cost of not having one had become legible. A new screen was taking five days. About four of those days were rebuilding things that already existed. A library of foundations and components hands those four days back to actual design work.</p>
  </div>
</section>
<section id="scope" style="padding: 96px 40px">
  <div style="max-width: 880px; margin: 0 auto;">
    <div style="display:flex; align-items:baseline; gap:16px; margin-bottom: 32px;">
      <span class="num">C</span>
      <span class="eyebrow">Framing · What I put in scope</span>
      <span class="section-divider"></span>
    </div>
    <h2 class="section-h">The library stays small <span style="color:#666;">on purpose.</span></h2>
    <p class="lead">I scoped the system to two things: foundations (the visual primitives every screen depends on) and a reusable component library (the patterns I'd already built more than once). Everything else stayed local to the screen it was on.</p>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin: 32px 0;">
      <div class="surface" style="padding: 32px;">
        <div class="eyebrow" style="color:#1A1A1A; margin-bottom: 14px;">In the system</div>
        <ul class="tight">
          <li>Six foundations: grid, color, spacing, icons, typography, shadow</li>
          <li>Twelve components, button through data table</li>
          <li>Gradient tokens, the brand mark belongs here, not in pages</li>
          <li>Shared form patterns</li>
          <li>Accessibility tokens, focus ring, motion, contrast</li>
        </ul>
      </div>
      <div class="surface" style="padding: 32px;">
        <div class="eyebrow" style="color:#666; margin-bottom: 14px;">Out of the system</div>
        <ul class="tight">
          <li>Anything that has shipped exactly once</li>
          <li>Page-specific illustrations and hero treatments</li>
          <li>Long-form editorial layouts (those live as one-off templates)</li>
          <li>Marketing copy patterns, content has its own home</li>
          <li>Any pattern that hasn't yet hurt to rebuild</li>
        </ul>
      </div>
    </div>

    <h3 class="sub-h">The earns-a-place test · three questions</h3>
    <p class="body">A pattern earns a place in the library if it passes three questions. <strong>(1)</strong> Does it appear on at least three screens? <strong>(2)</strong> Does it have at least three meaningful variants? <strong>(3)</strong> Is composing it from existing primitives genuinely worse than naming it as its own component? If two of three answers come back weak, the pattern stays local, and a comment in the design file points at what it's almost-but-not-quite. <strong>The library being small is what makes it usable.</strong> A big library is a graveyard of single-use components nobody can find.</p>

    <h3 class="sub-h">Who decides</h3>
    <p class="body">I do. There is no team. There is no review committee. The system is solo work, I am the only signature on every decision, which is a constraint and a freedom. The constraint: nobody catches my blind spots. The freedom: the system doesn't have to survive a politics. I built in the three-question gate above precisely because the loneliest version of a solo system is one where every passing whim becomes a permanent component.</p>

    <p class="body" style="color:#666;">What follows is the system itself, six foundations, then twelve components. Each page reads like documentation a designer would open mid-build. That's the voice I was missing during the first months I shipped this; it's what I would have wanted to be reading.</p>
  </div>
</section>
<section id="part-1" class="divider" style="padding: 96px 40px">
  <div style="max-width: 880px; margin: 0 auto">
    <div class="eyebrow" style="FFF; margin-bottom: 20px">Part One · Foundations</div>
    <h2 class="display" style="font-size: clamp(40px, 5vw, 64px); font-weight:700; letter-spacing:-0.025em; margin:0; FFF">
      Six foundations. <span style="color:#666">The substrate.</span>
    </h2>
    <p class="lead" style="margin-top: 24px; max-width: 720px">Grid, color, spacing, icons, typography, shadow. Every component is composed from these. Get them right and the components come out almost on their own.</p>
  </div>
</section>
<section id="grid" style="padding: 128px 40px 96px">
  <div style="max-width: 880px; margin: 0 auto;">
    <div style="display:flex; align-items:baseline; gap:16px; margin-bottom: 32px;">
      <span class="num">01 / 06</span>
      <span class="eyebrow">Foundation · Layout grid</span>
      <span class="section-divider"></span>
    </div>
    <h2 class="section-h">Layout grid</h2>
    <p class="lead">A 12-column desktop grid that thins to 8 on tablet and 4 on mobile. Same grid through every surface. Same logic for breakpoints. Same max content width. The grid is the cheapest piece of consistency in the system, and the first thing to lose if you don't tokenize it.</p>

    <h3 class="sub-h">Breakpoints</h3>
    <div class="surface" style="padding: 24px 0; overflow: hidden;">
      <table style="width:100%; border-collapse: collapse; font-size: 13px;">
        <thead>
          <tr style="text-align:left; color:#666; font-family:'JetBrains Mono',monospace; font-size: 11px; letter-spacing:0.1em; text-transform:uppercase;">
            <th style="padding: 10px 24px; font-weight:500;">Token</th>
            <th style="padding: 10px 24px; font-weight:500;">Range</th>
            <th style="padding: 10px 24px; font-weight:500;">Columns</th>
            <th style="padding: 10px 24px; font-weight:500;">Margin</th>
            <th style="padding: 10px 24px; font-weight:500;">Gutter</th>
          </tr>
        </thead>
        <tbody style="font-family:'JetBrains Mono',monospace; color:#1A1A1A;">
          <tr style="border-top:1px solid #EFEFEC;"><td style="padding:12px 24px;">uxp-bp-xs</td><td style="padding:12px 24px;">0 – 479</td><td style="padding:12px 24px;">4</td><td style="padding:12px 24px;">16</td><td style="padding:12px 24px;">12</td></tr>
          <tr style="border-top:1px solid #EFEFEC;"><td style="padding:12px 24px;">uxp-bp-sm</td><td style="padding:12px 24px;">480 – 767</td><td style="padding:12px 24px;">4</td><td style="padding:12px 24px;">24</td><td style="padding:12px 24px;">16</td></tr>
          <tr style="border-top:1px solid #EFEFEC;"><td style="padding:12px 24px;">uxp-bp-md</td><td style="padding:12px 24px;">768 – 1023</td><td style="padding:12px 24px;">8</td><td style="padding:12px 24px;">32</td><td style="padding:12px 24px;">20</td></tr>
          <tr style="border-top:1px solid #EFEFEC;"><td style="padding:12px 24px;">uxp-bp-lg</td><td style="padding:12px 24px;">1024 – 1439</td><td style="padding:12px 24px;">12</td><td style="padding:12px 24px;">64</td><td style="padding:12px 24px;">24</td></tr>
          <tr style="border-top:1px solid #EFEFEC;"><td style="padding:12px 24px;">uxp-bp-xl</td><td style="padding:12px 24px;">1440 +</td><td style="padding:12px 24px;">12</td><td style="padding:12px 24px;">auto</td><td style="padding:12px 24px;">24</td></tr>
        </tbody>
      </table>
    </div>

    <p class="body" style="margin-top:32px;">Max content width is 1280px. Past uxp-bp-xl, the page stops growing and the outer margins absorb the rest. I tried a 1440 max in early drafts; anything that wasn't a hero felt thin at the edges.</p>

    <h3 class="sub-h">Specimen · the 12-column grid at lg</h3>
    <div class="well" style="padding: 32px; margin: 16px 0 24px;">
      <div class="annot" style="margin-bottom: 18px;">Annotated · columns · gutters · margins · content area</div>
      <div style="position:relative; background:#FFFFFF; border:1px solid #EFEFEC; border-radius:4px; padding: 28px 20px;">
        <div style="display:grid; grid-template-columns: repeat(12, 1fr); gap: 12px;">
          <div style="grid-column: 1 / 8; background: rgba(0,167,255,0.07); border:1px dashed #BFE7FF; border-radius:2px; padding: 24px 12px; font-family:'Inter',sans-serif; font-size: 13px; color:#1A1A1A;">
            <div class="annot" style="margin-bottom:8px; color:#0078B8;">Content · cols 1–7</div>
            Asymmetric primary column. The long-form text and headlines live here.
          </div>
          <div style="grid-column: 9 / 13; background: rgba(255,146,30,0.07); border:1px dashed #FFC380; border-radius:2px; padding: 24px 12px; font-family:'Inter',sans-serif; font-size: 13px; color:#1A1A1A;">
            <div class="annot" style="margin-bottom:8px; color:#B86405;">Sidebar · cols 9–12</div>
            Secondary column. Meta, callouts, asides.
          </div>
        </div>
        <div style="display:grid; grid-template-columns: repeat(12, 1fr); gap: 12px; margin-top: 12px;">
          <div class="mono" style="font-size:9px; color:#999; text-align:center;">01</div>
          <div class="mono" style="font-size:9px; color:#999; text-align:center;">02</div>
          <div class="mono" style="font-size:9px; color:#999; text-align:center;">03</div>
          <div class="mono" style="font-size:9px; color:#999; text-align:center;">04</div>
          <div class="mono" style="font-size:9px; color:#999; text-align:center;">05</div>
          <div class="mono" style="font-size:9px; color:#999; text-align:center;">06</div>
          <div class="mono" style="font-size:9px; color:#999; text-align:center;">07</div>
          <div class="mono" style="font-size:9px; color:#999; text-align:center;">08</div>
          <div class="mono" style="font-size:9px; color:#999; text-align:center;">09</div>
          <div class="mono" style="font-size:9px; color:#999; text-align:center;">10</div>
          <div class="mono" style="font-size:9px; color:#999; text-align:center;">11</div>
          <div class="mono" style="font-size:9px; color:#999; text-align:center;">12</div>
        </div>
        <div style="display:flex; justify-content:space-between; margin-top: 18px;">
          <div class="annot">← 64px margin</div>
          <div class="annot">24px gutter · 1280 max width</div>
          <div class="annot">64px margin →</div>
        </div>
      </div>
    </div>

    <h3 class="sub-h">When to break the grid</h3>
    <p class="body">Three sanctioned cases. <strong>(1)</strong> Full-bleed gradient backgrounds, the brand band runs edge to edge and the column structure is irrelevant. <strong>(2)</strong> Display type at sizes larger than the grid, the headline is allowed to extrude into the outer margin at lg and above. <strong>(3)</strong> Photographic full-bleed sections. Everything else stays in the grid. If I'm reaching for a fourth exception, it's almost always a content problem disguised as a layout problem.</p>
  </div>
</section>
<section id="color" style="padding: 128px 40px 96px">
  <div style="max-width: 880px; margin: 0 auto;">
    <div style="display:flex; align-items:baseline; gap:16px; margin-bottom: 32px;">
      <span class="num">02 / 06</span>
      <span class="eyebrow">Foundation · Color</span>
      <span class="section-divider"></span>
    </div>
    <h2 class="section-h">Color</h2>
    <p class="lead">Three primaries from the brand mark, three decorative secondaries, a tight neutral set, four dedicated status colors, and a signature gradient. The palette expresses personality; the status layer communicates state. They are kept separate on purpose.</p>

    <h3 class="sub-h">Primaries</h3>
    <p class="body" style="margin-top:-4px;">The three colors that live inside the brand mark. They are one unified palette for one platform, they are not assigned to product areas or business lines.</p>
    <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 24px 0 12px;">
      <div>
        <div style="background:#00A7FF; height: 140px; border-radius: 4px;"></div>
        <div style="margin-top: 12px;">
          <div style="font-family:'Satoshi',sans-serif; font-weight:600; font-size: 17px;">Blue</div>
          <div class="mono" style="font-size: 11px; color:#666; margin-top:4px;">uxp-blue-500</div>
          <div class="mono" style="font-size: 11px; color:#1A1A1A;">#00A7FF · rgb(0 167 255) · hsl(201 100% 50%)</div>
        </div>
      </div>
      <div>
        <div style="background:#C648E6; height: 140px; border-radius: 4px;"></div>
        <div style="margin-top: 12px;">
          <div style="font-family:'Satoshi',sans-serif; font-weight:600; font-size: 17px;">Purple</div>
          <div class="mono" style="font-size: 11px; color:#666; margin-top:4px;">uxp-purple-500</div>
          <div class="mono" style="font-size: 11px; color:#1A1A1A;">#C648E6 · rgb(198 72 230) · hsl(289 78% 59%)</div>
        </div>
      </div>
      <div>
        <div style="background:#FF921E; height: 140px; border-radius: 4px;"></div>
        <div style="margin-top: 12px;">
          <div style="font-family:'Satoshi',sans-serif; font-weight:600; font-size: 17px;">Orange</div>
          <div class="mono" style="font-size: 11px; color:#666; margin-top:4px;">uxp-orange-500</div>
          <div class="mono" style="font-size: 11px; color:#1A1A1A;">#FF921E · rgb(255 146 30) · hsl(31 100% 56%)</div>
        </div>
      </div>
    </div>

    <h3 class="sub-h">Secondaries · decorative only</h3>
    <p class="body" style="margin-top:-4px;">These extend the palette for headers, illustrative moments, and accents. They are deliberately kept out of the status layer because their warmth reads as <em>brand</em>, not as <em>signal</em>.</p>
    <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 24px 0 12px;">
      <div>
        <div style="background:#FF9884; height: 100px; border-radius: 4px;"></div>
        <div style="margin-top: 10px;">
          <div style="font-family:'Satoshi',sans-serif; font-weight:600; font-size: 15px;">Coral</div>
          <div class="mono" style="font-size: 11px; color:#666;">uxp-coral-500 · #FF9884</div>
        </div>
      </div>
      <div>
        <div style="background:#F882E0; height: 100px; border-radius: 4px;"></div>
        <div style="margin-top: 10px;">
          <div style="font-family:'Satoshi',sans-serif; font-weight:600; font-size: 15px;">Pink</div>
          <div class="mono" style="font-size: 11px; color:#666;">uxp-pink-500 · #F882E0</div>
        </div>
      </div>
      <div>
        <div style="background:#AA75FF; height: 100px; border-radius: 4px;"></div>
        <div style="margin-top: 10px;">
          <div style="font-family:'Satoshi',sans-serif; font-weight:600; font-size: 15px;">Light Purple</div>
          <div class="mono" style="font-size: 11px; color:#666;">uxp-lpurple-500 · #AA75FF</div>
        </div>
      </div>
    </div>

    <h3 class="sub-h">Neutrals</h3>
    <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin: 24px 0 12px;">
      <div>
        <div style="background:#1A1A1A; height: 80px; border-radius: 4px;"></div>
        <div class="mono" style="font-size: 11px; color:#666; margin-top:8px;">uxp-ink-900</div>
        <div class="mono" style="font-size: 11px; color:#1A1A1A;">#1A1A1A</div>
        <div style="font-size: 12px; color:#666; margin-top: 4px;">Primary text. <strong>System addition.</strong></div>
      </div>
      <div>
        <div style="background:#666666; height: 80px; border-radius: 4px;"></div>
        <div class="mono" style="font-size: 11px; color:#666; margin-top:8px;">uxp-ink-500</div>
        <div class="mono" style="font-size: 11px; color:#1A1A1A;">#666666</div>
        <div style="font-size: 12px; color:#666; margin-top: 4px;">Body / secondary.</div>
      </div>
      <div>
        <div style="background:#EFEFEC; height: 80px; border-radius: 4px;"></div>
        <div class="mono" style="font-size: 11px; color:#666; margin-top:8px;">uxp-ink-100</div>
        <div class="mono" style="font-size: 11px; color:#1A1A1A;">#EFEFEC</div>
        <div style="font-size: 12px; color:#666; margin-top: 4px;">Hairline borders.</div>
      </div>
      <div>
        <div style="background:#FFFFFF; height: 80px; border-radius: 4px; border:1px solid #EFEFEC;"></div>
        <div class="mono" style="font-size: 11px; color:#666; margin-top:8px;">uxp-ink-0</div>
        <div class="mono" style="font-size: 11px; color:#1A1A1A;">#FFFFFF</div>
        <div style="font-size: 12px; color:#666; margin-top: 4px;">Base surface.</div>
      </div>
    </div>

    <p class="body" style="margin-top:24px;"><strong>System addition.</strong> The source palette stopped at #666666 for ink. That isn't dark enough for long-form reading on white. uxp-ink-900 · #1A1A1A is mine, flagged in the changelog as “System addition, not in the brand spec.” It carries 17.4:1 contrast and replaces #666 for any primary text role.</p>

    <h3 class="sub-h">Status colors · chosen for clarity, kept separate</h3>
    <p class="body">This is the place a brand-driven palette most often goes wrong. If I'd used coral for warnings and light purple for info, both of which sit in the brand secondary, I would have been running two color systems competing for the same job. Coral reads as <em>soft, decorative, friendly</em>. Caution does not. A user glancing at a form needs the warning to <em>look like a warning at a glance</em>, not like a brand moment.</p>
    <p class="body">So the system adds dedicated status colors that don't try to be on-brand. Their job is to communicate state instantly. Brand expression happens elsewhere.</p>

    <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin: 24px 0 24px;">
      <div>
        <div style="background:#2E9E5B; height: 100px; border-radius: 4px;"></div>
        <div style="margin-top: 10px;">
          <div style="font-family:'Satoshi',sans-serif; font-weight:600; font-size: 15px;">Success</div>
          <div class="mono" style="font-size: 11px; color:#666;">uxp-status-success · #2E9E5B</div>
          <div style="font-size: 12px; color:#666; margin-top: 4px;">Dedicated green. The brand has none.</div>
        </div>
      </div>
      <div>
        <div style="background:#E5484D; height: 100px; border-radius: 4px;"></div>
        <div style="margin-top: 10px;">
          <div style="font-family:'Satoshi',sans-serif; font-weight:600; font-size: 15px;">Error / destructive</div>
          <div class="mono" style="font-size: 11px; color:#666;">uxp-status-error · #E5484D</div>
          <div style="font-size: 12px; color:#666; margin-top: 4px;">A true red. Not coral.</div>
        </div>
      </div>
      <div>
        <div style="background:#F5A623; height: 100px; border-radius: 4px;"></div>
        <div style="margin-top: 10px;">
          <div style="font-family:'Satoshi',sans-serif; font-weight:600; font-size: 15px;">Warning</div>
          <div class="mono" style="font-size: 11px; color:#666;">uxp-status-warning · #F5A623</div>
          <div style="font-size: 12px; color:#666; margin-top: 4px;">Amber. Distinct from brand orange.</div>
        </div>
      </div>
      <div>
        <div style="background:#00A7FF; height: 100px; border-radius: 4px;"></div>
        <div style="margin-top: 10px;">
          <div style="font-family:'Satoshi',sans-serif; font-weight:600; font-size: 15px;">Info</div>
          <div class="mono" style="font-size: 11px; color:#666;">uxp-status-info · #00A7FF</div>
          <div style="font-size: 12px; color:#666; margin-top: 4px;">Brand blue. Blue conventionally is information.</div>
        </div>
      </div>
    </div>

    <p class="body"><strong>Why brand orange and warning amber both exist.</strong> Brand orange (#FF921E) and warning amber (#F5A623) are deliberately close in hue and pointedly different in saturation. The brand orange is warm and decorative; the warning amber is darker, more golden, and reads as caution. Placed on a screen together, only one of them feels like the system is asking for attention. That separation is the whole point of having dedicated status colors.</p>

    <h3 class="sub-h">Primitive ramps</h3>
    <p class="body">Each primary expands to a 50 → 900 ramp. Primitives are unopinionated, they don't know what they're for. Semantic tokens reference them. Designers never reach for primitives directly except inside the system.</p>

    <div style="margin-top: 16px;">
      <div class="eyebrow" style="margin-bottom:8px;">uxp-blue · 50 → 900</div>
      <div style="display:grid; grid-template-columns: repeat(10, 1fr); gap: 4px; margin-bottom: 24px;">
        <div style="background:#E6F6FF; height:36px; border-radius:2px;"></div>
        <div style="background:#BFE7FF; height:36px; border-radius:2px;"></div>
        <div style="background:#80CFFF; height:36px; border-radius:2px;"></div>
        <div style="background:#40B7FF; height:36px; border-radius:2px;"></div>
        <div style="background:#00A7FF; height:36px; border-radius:2px; outline: 2px solid #1A1A1A; outline-offset:2px;"></div>
        <div style="background:#0095E5; height:36px; border-radius:2px;"></div>
        <div style="background:#0078B8; height:36px; border-radius:2px;"></div>
        <div style="background:#005B8C; height:36px; border-radius:2px;"></div>
        <div style="background:#003D5E; height:36px; border-radius:2px;"></div>
        <div style="background:#001F30; height:36px; border-radius:2px;"></div>
      </div>
      <div class="eyebrow" style="margin-bottom:8px;">uxp-purple · 50 → 900</div>
      <div style="display:grid; grid-template-columns: repeat(10, 1fr); gap: 4px; margin-bottom: 24px;">
        <div style="background:#F9ECFC; height:36px; border-radius:2px;"></div>
        <div style="background:#EFC9F8; height:36px; border-radius:2px;"></div>
        <div style="background:#E0A0F2; height:36px; border-radius:2px;"></div>
        <div style="background:#D274EC; height:36px; border-radius:2px;"></div>
        <div style="background:#C648E6; height:36px; border-radius:2px; outline: 2px solid #1A1A1A; outline-offset:2px;"></div>
        <div style="background:#B43AD1; height:36px; border-radius:2px;"></div>
        <div style="background:#922AA8; height:36px; border-radius:2px;"></div>
        <div style="background:#6F1F80; height:36px; border-radius:2px;"></div>
        <div style="background:#4B1457; height:36px; border-radius:2px;"></div>
        <div style="background:#270A2D; height:36px; border-radius:2px;"></div>
      </div>
      <div class="eyebrow" style="margin-bottom:8px;">uxp-orange · 50 → 900</div>
      <div style="display:grid; grid-template-columns: repeat(10, 1fr); gap: 4px; margin-bottom: 16px;">
        <div style="background:#FFF1E0; height:36px; border-radius:2px;"></div>
        <div style="background:#FFDDB5; height:36px; border-radius:2px;"></div>
        <div style="background:#FFC380; height:36px; border-radius:2px;"></div>
        <div style="background:#FFA84D; height:36px; border-radius:2px;"></div>
        <div style="background:#FF921E; height:36px; border-radius:2px; outline: 2px solid #1A1A1A; outline-offset:2px;"></div>
        <div style="background:#E67E0F; height:36px; border-radius:2px;"></div>
        <div style="background:#B86405; height:36px; border-radius:2px;"></div>
        <div style="background:#8C4B00; height:36px; border-radius:2px;"></div>
        <div style="background:#5E3200; height:36px; border-radius:2px;"></div>
        <div style="background:#301900; height:36px; border-radius:2px;"></div>
      </div>
      <p style="font-size:13px; color:#666; margin-top:4px;">The 500 stop in each ramp is the brand color. Outlined for orientation.</p>
    </div>

    <h3 class="sub-h">Semantic tokens</h3>
    <p class="body">Semantic tokens reference primitives. Components and screens only ever consume semantics. When the brand shifts, the primitive map shifts; semantics keep their names and everything downstream survives.</p>

    <div class="surface" style="padding: 0; overflow: hidden; margin-bottom: 16px;">
      <table style="width:100%; border-collapse: collapse; font-size: 13px;">
        <thead><tr style="text-align:left; color:#666; font-family:'JetBrains Mono',monospace; font-size: 11px; letter-spacing:0.08em; text-transform:uppercase;">
          <th style="padding: 10px 20px; font-weight:500;">Semantic</th>
          <th style="padding: 10px 20px; font-weight:500;">Resolves to</th>
          <th style="padding: 10px 20px; font-weight:500;">Used for</th>
        </tr></thead>
        <tbody style="font-family:'JetBrains Mono',monospace;">
          <tr style="border-top:1px solid #EFEFEC;"><td style="padding:10px 20px;">uxp-color-bg-surface</td><td style="padding:10px 20px;">uxp-ink-0</td><td style="padding:10px 20px; font-family:'Inter',sans-serif;">Page &amp; card background.</td></tr>
          <tr style="border-top:1px solid #EFEFEC;"><td style="padding:10px 20px;">uxp-color-bg-muted</td><td style="padding:10px 20px;">#FCFCFA</td><td style="padding:10px 20px; font-family:'Inter',sans-serif;">Section bands, wells.</td></tr>
          <tr style="border-top:1px solid #EFEFEC;"><td style="padding:10px 20px;">uxp-color-text-primary</td><td style="padding:10px 20px;">uxp-ink-900</td><td style="padding:10px 20px; font-family:'Inter',sans-serif;">Headings &amp; body.</td></tr>
          <tr style="border-top:1px solid #EFEFEC;"><td style="padding:10px 20px;">uxp-color-text-secondary</td><td style="padding:10px 20px;">uxp-ink-500</td><td style="padding:10px 20px; font-family:'Inter',sans-serif;">Captions, helper text.</td></tr>
          <tr style="border-top:1px solid #EFEFEC;"><td style="padding:10px 20px;">uxp-color-border</td><td style="padding:10px 20px;">uxp-ink-100</td><td style="padding:10px 20px; font-family:'Inter',sans-serif;">Hairlines, dividers.</td></tr>
          <tr style="border-top:1px solid #EFEFEC;"><td style="padding:10px 20px;">uxp-color-action-primary</td><td style="padding:10px 20px;">uxp-blue-500</td><td style="padding:10px 20px; font-family:'Inter',sans-serif;">Buttons, links, focus.</td></tr>
          <tr style="border-top:1px solid #EFEFEC;"><td style="padding:10px 20px;">uxp-color-action-emphasis</td><td style="padding:10px 20px;">uxp-purple-500</td><td style="padding:10px 20px; font-family:'Inter',sans-serif;">Hover destination, emphasis.</td></tr>
          <tr style="border-top:1px solid #EFEFEC;"><td style="padding:10px 20px;">uxp-color-status-success</td><td style="padding:10px 20px;">#2E9E5B</td><td style="padding:10px 20px; font-family:'Inter',sans-serif;">Validated state, success toasts.</td></tr>
          <tr style="border-top:1px solid #EFEFEC;"><td style="padding:10px 20px;">uxp-color-status-error</td><td style="padding:10px 20px;">#E5484D</td><td style="padding:10px 20px; font-family:'Inter',sans-serif;">Validation error, destructive.</td></tr>
          <tr style="border-top:1px solid #EFEFEC;"><td style="padding:10px 20px;">uxp-color-status-warning</td><td style="padding:10px 20px;">#F5A623</td><td style="padding:10px 20px; font-family:'Inter',sans-serif;">Caution, attention required.</td></tr>
          <tr style="border-top:1px solid #EFEFEC;"><td style="padding:10px 20px;">uxp-color-status-info</td><td style="padding:10px 20px;">uxp-blue-500</td><td style="padding:10px 20px; font-family:'Inter',sans-serif;">Informational toasts, hints.</td></tr>
        </tbody>
      </table>
    </div>

    <h3 class="sub-h">Gradient tokens</h3>
    <p class="body">The gradient is brand. Tokenizing it is what stopped it from drifting. Two named gradients cover everything I've needed.</p>

    <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 16px 0;">
      <div>
        <div style="height: 80px; border-radius: 4px; background: linear-gradient(90deg, #00A7FF 0%, #C648E6 50%, #FF921E 100%);"></div>
        <div class="mono" style="font-size:11px; color:#666; margin-top:8px;">uxp-gradient-brand</div>
        <div style="font-size: 12px; color:#1A1A1A; margin-top:2px;">90deg · blue → purple → orange. The brand mark, title treatments, emphasis moments.</div>
      </div>
      <div>
        <div style="height: 80px; border-radius: 4px; background: linear-gradient(90deg, #00A7FF 0%, #C648E6 100%);"></div>
        <div class="mono" style="font-size:11px; color:#666; margin-top:8px;">uxp-gradient-emphasis</div>
        <div style="font-size: 12px; color:#1A1A1A; margin-top:2px;">90deg · blue → purple. Two-stop. Quieter emphasis for interactive surfaces.</div>
      </div>
    </div>

    <h3 class="sub-h">Contrast, where the orange can carry text</h3>
    <p class="body">Orange is the hardest color in the palette. It's the highest-saturation brand color and the worst contrast performer on white. The system handles it by reserving the 500 stop for fills and large display type only, and pushing UI labels to the 700 stop.</p>

    <div class="surface" style="padding: 0; overflow: hidden; margin-bottom: 8px;">
      <table style="width:100%; border-collapse: collapse; font-size: 13px;">
        <thead><tr style="text-align:left; color:#666; font-family:'JetBrains Mono',monospace; font-size: 11px; letter-spacing:0.08em; text-transform:uppercase;">
          <th style="padding: 10px 20px; font-weight:500;">Pair</th>
          <th style="padding: 10px 20px; font-weight:500;">Ratio</th>
          <th style="padding: 10px 20px; font-weight:500;">WCAG</th>
          <th style="padding: 10px 20px; font-weight:500;">OK for</th>
        </tr></thead>
        <tbody style="font-family:'Inter',sans-serif;">
          <tr style="border-top:1px solid #EFEFEC;"><td style="padding:10px 20px;"><span style="color:#1A1A1A;">Ink-900 on white</span></td><td style="padding:10px 20px;" class="mono">17.4 : 1</td><td style="padding:10px 20px;">AAA</td><td style="padding:10px 20px;">All text.</td></tr>
          <tr style="border-top:1px solid #EFEFEC;"><td style="padding:10px 20px;"><span style="color:#666;">Ink-500 on white</span></td><td style="padding:10px 20px;" class="mono">5.7 : 1</td><td style="padding:10px 20px;">AA</td><td style="padding:10px 20px;">Body, captions.</td></tr>
          <tr style="border-top:1px solid #EFEFEC;"><td style="padding:10px 20px;"><span style="color:#0078B8;">Blue-700 on white</span></td><td style="padding:10px 20px;" class="mono">5.1 : 1</td><td style="padding:10px 20px;">AA</td><td style="padding:10px 20px;">Inline links, UI labels.</td></tr>
          <tr style="border-top:1px solid #EFEFEC;"><td style="padding:10px 20px;"><span style="color:#00A7FF;">Blue-500 on white</span></td><td style="padding:10px 20px;" class="mono">2.9 : 1</td><td style="padding:10px 20px;">FAIL</td><td style="padding:10px 20px;">Display ≥ 32px only.</td></tr>
          <tr style="border-top:1px solid #EFEFEC;"><td style="padding:10px 20px;"><span style="color:#922AA8;">Purple-700 on white</span></td><td style="padding:10px 20px;" class="mono">6.4 : 1</td><td style="padding:10px 20px;">AA</td><td style="padding:10px 20px;">Inline emphasis.</td></tr>
          <tr style="border-top:1px solid #EFEFEC;"><td style="padding:10px 20px;"><span style="color:#FF921E;">Orange-500 on white</span></td><td style="padding:10px 20px;" class="mono">2.3 : 1</td><td style="padding:10px 20px;">FAIL</td><td style="padding:10px 20px;">Display ≥ 32px only. Never body.</td></tr>
          <tr style="border-top:1px solid #EFEFEC;"><td style="padding:10px 20px;"><span style="color:#B86405;">Orange-700 on white</span></td><td style="padding:10px 20px;" class="mono">4.6 : 1</td><td style="padding:10px 20px;">AA-large</td><td style="padding:10px 20px;">Headings, eyebrow labels.</td></tr>
          <tr style="border-top:1px solid #EFEFEC;"><td style="padding:10px 20px;">White on Orange-500</td><td style="padding:10px 20px;" class="mono">2.3 : 1</td><td style="padding:10px 20px;">FAIL</td><td style="padding:10px 20px;">Never, use Ink-900 on Orange-500 (7.6:1).</td></tr>
        </tbody>
      </table>
    </div>
    <p style="font-size:13px; color:#666;">Computed against sRGB. The rule that falls out of the matrix: <strong>UI labels in brand color use the 700 stop, not the 500.</strong> The 500 stops are for fills and display.</p>

    <h3 class="sub-h">Dark mode, deferred to v1.3</h3>
    <p class="body">Dark mode for a brand built on a saturated tri-color gradient is its own project. The gradient becomes a muddy bruise on near-black unless every stop is re-tuned. Every secondary needs a new ramp. The status colors need to be re-balanced to stay legible at the same psychological weight. None of the screens I was building in v1 needed dark mode as the primary experience, so I deferred it honestly and put it on the roadmap. The decision is on the changelog.</p>
  </div>
</section>
<section id="spacing" style="padding: 128px 40px 96px">
  <div style="max-width: 880px; margin: 0 auto;">
    <div style="display:flex; align-items:baseline; gap:16px; margin-bottom: 32px;">
      <span class="num">03 / 06</span>
      <span class="eyebrow">Foundation · Spacing</span>
      <span class="section-divider"></span>
    </div>
    <h2 class="section-h">Spacing</h2>
    <p class="lead">A 4-pixel base scale. Eleven steps for components, three named tokens for section rhythm. Every padding, margin, and gap snaps to one of them, or it doesn't ship.</p>

    <h3 class="sub-h">The scale</h3>
    <div class="surface" style="padding: 32px; margin-bottom: 24px;">
      <div style="display:grid; grid-template-columns: 100px 60px 1fr; gap: 8px 24px; align-items:center; font-family:'JetBrains Mono',monospace; font-size: 12px;">
        <div class="eyebrow" style="margin:0;">Token</div><div class="eyebrow" style="margin:0;">px</div><div class="eyebrow" style="margin:0;">Visual</div>
        <div>uxp-space-1</div><div>4</div><div><div style="height:8px; width:4px; background:#1A1A1A;"></div></div>
        <div>uxp-space-2</div><div>8</div><div><div style="height:8px; width:8px; background:#1A1A1A;"></div></div>
        <div>uxp-space-3</div><div>12</div><div><div style="height:8px; width:12px; background:#1A1A1A;"></div></div>
        <div>uxp-space-4</div><div>16</div><div><div style="height:8px; width:16px; background:#1A1A1A;"></div></div>
        <div>uxp-space-5</div><div>20</div><div><div style="height:8px; width:20px; background:#1A1A1A;"></div></div>
        <div>uxp-space-6</div><div>24</div><div><div style="height:8px; width:24px; background:#1A1A1A;"></div></div>
        <div>uxp-space-8</div><div>32</div><div><div style="height:8px; width:32px; background:#1A1A1A;"></div></div>
        <div>uxp-space-10</div><div>40</div><div><div style="height:8px; width:40px; background:#1A1A1A;"></div></div>
        <div>uxp-space-12</div><div>48</div><div><div style="height:8px; width:48px; background:#1A1A1A;"></div></div>
        <div>uxp-space-16</div><div>64</div><div><div style="height:8px; width:64px; background:#1A1A1A;"></div></div>
        <div>uxp-space-20</div><div>80</div><div><div style="height:8px; width:80px; background:#1A1A1A;"></div></div>
      </div>
      <div style="margin-top: 28px; padding-top: 24px; border-top: 1px dashed #EFEFEC; display:grid; grid-template-columns: 1fr 1fr 1fr; gap:24px;">
        <div>
          <div class="mono" style="font-size:11px; color:#666;">uxp-space-section-sm</div>
          <div class="mono" style="font-size:11px; color:#1A1A1A;">64px</div>
          <div style="font-size:12px; color:#666; margin-top:4px;">Inside a section, between sub-blocks.</div>
        </div>
        <div>
          <div class="mono" style="font-size:11px; color:#666;">uxp-space-section-md</div>
          <div class="mono" style="font-size:11px; color:#1A1A1A;">96px</div>
          <div style="font-size:12px; color:#666; margin-top:4px;">Between sections on mobile / tablet.</div>
        </div>
        <div>
          <div class="mono" style="font-size:11px; color:#666;">uxp-space-section-lg</div>
          <div class="mono" style="font-size:11px; color:#1A1A1A;">128px</div>
          <div style="font-size:12px; color:#666; margin-top:4px;">Between sections on desktop.</div>
        </div>
      </div>
    </div>

    <h3 class="sub-h">Why a constrained scale beats per-screen judgment</h3>
    <p class="body">My designer judgment is excellent at deciding what spacing should communicate, “this group is tight, this group is breathing.” It is worse at producing consistent results across many screens at midnight. Eleven tokens is enough that no decision feels constrained; it is small enough to hold in my head while I'm working. The scale is the choreography. The judgment is which step.</p>

    <h3 class="sub-h">Mapping · padding · margin · gap</h3>
    <p class="body">Same tokens, different uses. There is no separate padding scale or margin scale, only the spacing scale, applied differently depending on what is doing the spacing.</p>
    <ul class="tight">
      <li><strong>Padding</strong> inside containers, choose the step that gives the content visual breathing without crowding the border.</li>
      <li><strong>Margin</strong> between flow elements, the smallest reasonable step that still separates them.</li>
      <li><strong>Gap</strong> in flex/grid groups, almost always the same step as the padding around the group.</li>
    </ul>

    <h3 class="sub-h">Worked example · a primary button, token by token</h3>
    <p class="body">The medium primary button, dissected. Every visual decision points at exactly one token.</p>

    <div class="well" style="padding: 40px; margin: 16px 0 24px;">
      <div style="display:flex; align-items:center; justify-content:center; padding: 32px; background:#FFFFFF; border:1px solid #EFEFEC; border-radius:4px; position:relative;">
        <div style="position:relative; display:inline-flex; align-items:center; padding: 12px 24px; background: linear-gradient(90deg, #00A7FF 0%, #C648E6 100%); border-radius: 4px; color:#FFF; font-family:'Inter',sans-serif; font-weight:600; font-size:15px; gap: 8px;">
          Continue
          <span style="display:inline-block;">→</span>
        </div>
      </div>
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 16px 32px; margin-top: 24px; font-size: 13px;">
        <div><span class="mono" style="color:#0078B8;">uxp-space-3</span> · 12px vertical padding</div>
        <div><span class="mono" style="color:#0078B8;">uxp-space-6</span> · 24px horizontal padding</div>
        <div><span class="mono" style="color:#0078B8;">uxp-space-2</span> · 8px gap between label and arrow</div>
        <div><span class="mono" style="color:#0078B8;">uxp-radius-1</span> · 4px corner radius</div>
        <div><span class="mono" style="color:#0078B8;">uxp-gradient-emphasis</span> · two-stop background</div>
        <div><span class="mono" style="color:#0078B8;">text/button-md</span> · 15 / 600 / Inter</div>
      </div>
    </div>

    <h3 class="sub-h">Component spacing rules</h3>
    <ul class="tight">
      <li><strong>Button inner padding:</strong> sm space-2 / space-4, md space-3 / space-6, lg space-4 / space-8.</li>
      <li><strong>Card padding:</strong> space-6 at the standard surface, space-8 on feature cards.</li>
      <li><strong>Form field stacking:</strong> space-2 between label and input, space-6 between two fields.</li>
      <li><strong>Section rhythm:</strong> space-section-md on tablet, space-section-lg on desktop.</li>
    </ul>

    <p class="body" style="color:#666;">The arguments about spacing don't disappear once the scale exists. They move up a layer, to “which step does this group call for,” which is the better argument to be having.</p>
  </div>
</section>
<section id="icons" style="padding: 128px 40px 96px">
  <div style="max-width: 880px; margin: 0 auto;">
    <div style="display:flex; align-items:baseline; gap:16px; margin-bottom: 32px;">
      <span class="num">04 / 06</span>
      <span class="eyebrow">Foundation · Icons</span>
      <span class="section-divider"></span>
    </div>
    <h2 class="section-h">Icons</h2>
    <p class="lead">A single icon set drawn to a 24×24 grid at 1.5px stroke, with a 2px emphasis variant for moments that need to read at distance. Functional, never decorative.</p>

    <h3 class="sub-h">Grid &amp; stroke</h3>
    <p class="body">Every glyph is drawn inside a 24×24 box on a 1px subgrid, with 2px of padding inside the box for optical breathing. Strokes are 1.5px for outline and 2px for emphasis. Corners use a 1.5px radius, soft enough to feel intentional, sharp enough to feel like a system.</p>

    <div class="surface" style="padding: 40px; display: grid; grid-template-columns: repeat(6, 1fr); gap: 32px; align-items:center; margin-bottom: 24px;">
      <div style="text-align:center;">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
        <div class="mono" style="font-size:10px; color:#666; margin-top:8px;">icon-arrow-right</div>
      </div>
      <div style="text-align:center;">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 21l-4.35-4.35M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"></path></svg>
        <div class="mono" style="font-size:10px; color:#666; margin-top:8px;">icon-search</div>
      </div>
      <div style="text-align:center;">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>
        <div class="mono" style="font-size:10px; color:#666; margin-top:8px;">icon-check</div>
      </div>
      <div style="text-align:center;">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4M12 16h0"></path></svg>
        <div class="mono" style="font-size:10px; color:#666; margin-top:8px;">icon-info</div>
      </div>
      <div style="text-align:center;">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        <div class="mono" style="font-size:10px; color:#666; margin-top:8px;">icon-message</div>
      </div>
      <div style="text-align:center;">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="#2E9E5B"><path d="M20.285 6.708L9 17.99l-5.285-5.281 1.414-1.414L9 15.166l9.871-9.871z"></path></svg>
        <div class="mono" style="font-size:10px; color:#666; margin-top:8px;">icon-check-filled</div>
      </div>
    </div>

    <h3 class="sub-h">Sizing scale</h3>
    <div style="display:flex; align-items:flex-end; gap: 32px; margin: 16px 0 24px;">
      <div style="text-align:center;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" stroke-width="1.5"><path d="M5 12h14M13 6l6 6-6 6"></path></svg><div class="mono" style="font-size:10px; color:#666; margin-top:4px;">16</div><div style="font-size:11px; color:#666;">inline</div></div>
      <div style="text-align:center;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" stroke-width="1.5"><path d="M5 12h14M13 6l6 6-6 6"></path></svg><div class="mono" style="font-size:10px; color:#666; margin-top:4px;">20</div><div style="font-size:11px; color:#666;">UI</div></div>
      <div style="text-align:center;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" stroke-width="1.5"><path d="M5 12h14M13 6l6 6-6 6"></path></svg><div class="mono" style="font-size:10px; color:#666; margin-top:4px;">24</div><div style="font-size:11px; color:#666;">nav</div></div>
      <div style="text-align:center;"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"></path></svg><div class="mono" style="font-size:10px; color:#666; margin-top:4px;">32</div><div style="font-size:11px; color:#666;">emphasis</div></div>
      <div style="text-align:center;"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"></path></svg><div class="mono" style="font-size:10px; color:#666; margin-top:4px;">48</div><div style="font-size:11px; color:#666;">feature</div></div>
    </div>

    <h3 class="sub-h">Outline vs filled</h3>
    <ul class="tight">
      <li><strong>Outline</strong>, navigation, action triggers, list bullets, anything that should read as a neutral affordance. The library default.</li>
      <li><strong>Filled</strong>, status (success ✓, error ⨯), play / pause, any glyph that needs to read at a glance from a distance.</li>
    </ul>

    <h3 class="sub-h">Naming</h3>
    <p class="body">All icons are icon-{noun} for outline and icon-{noun}-filled for filled. Direction is part of the noun: icon-arrow-right, icon-chevron-down. The naming is what makes the set discoverable in the Figma picker without scrolling.</p>

    <h3 class="sub-h">How I add a new icon</h3>
    <p class="body">A glyph enters the library after it has been used twice in shipped screens. Until then it lives in the requesting screen's own assets, with a TODO comment. This sounds bureaucratic; it isn't. It's the only thing that kept the library from becoming a graveyard of single-use icons during the first months. (I shipped more icons than I should have in v1, see “What I'd do differently.”)</p>

    <h3 class="sub-h">Starter set · organized by category</h3>
    <p class="body">Thirty-six glyphs in v1, after I trimmed the over-shipped first cut. Five categories.</p>
    <ul class="tight">
      <li><strong>Navigation</strong>, arrow-right, arrow-left, chevron-down, chevron-up, menu, close, external-link.</li>
      <li><strong>Action</strong>, search, download, upload, share, edit, copy, plus, trash.</li>
      <li><strong>Status</strong>, check, check-filled, x-circle, alert, info, clock.</li>
      <li><strong>Social</strong>, generic platform glyphs: link, mail, send.</li>
      <li><strong>Content</strong>, play, pause, image, file, calendar, eye, eye-off.</li>
    </ul>
  </div>
</section>
<section id="type" style="padding: 128px 40px 96px">
  <div style="max-width: 880px; margin: 0 auto;">
    <div style="display:flex; align-items:baseline; gap:16px; margin-bottom: 32px;">
      <span class="num">05 / 06</span>
      <span class="eyebrow">Foundation · Typography</span>
      <span class="section-divider"></span>
    </div>
    <h2 class="section-h">Typography</h2>
    <p class="lead">Three typefaces, each doing one job. Satoshi does the talking. Inter does the working. JetBrains Mono does the labeling. Everything else is the scale.</p>

    <h3 class="sub-h">The three typefaces, why this much contrast, no more</h3>
    <p class="body">A display face, a body face, and a mono accent is the smallest set that still gives me three meaningfully different voices. Two faces (display + body) reads as flat, the eyebrows, tokens, and data lines have nowhere to go but italics or all-caps body, both of which get tired fast. Four faces is one face too many; a designer starts choosing between “Inter for buttons or maybe Söhne for buttons” and the system loses authority. Three is the floor and the ceiling.</p>

    <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap: 24px; margin: 16px 0 24px;">
      <div class="surface" style="padding: 28px;">
        <div style="font-family:'Satoshi',sans-serif; font-weight:700; font-size: 56px; line-height: 1; letter-spacing: -0.03em;">Aa</div>
        <div class="eyebrow" style="margin-top: 16px;">Display</div>
        <div style="font-family:'Satoshi',sans-serif; font-weight:600; font-size: 18px; margin-top: 4px;">Satoshi</div>
        <div style="font-size: 12px; color:#666; margin-top: 8px; line-height:1.55;">Weights 400 / 600 / 700 / 800. Modern editorial sans with tight, expressive letterforms at large sizes. Used for headlines, section titles, large stat numbers, and card/specimen headings.</div>
      </div>
      <div class="surface" style="padding: 28px;">
        <div style="font-family:'Inter',sans-serif; font-weight:600; font-size: 56px; line-height: 1; letter-spacing: -0.02em;">Aa</div>
        <div class="eyebrow" style="margin-top: 16px;">Body / UI</div>
        <div style="font-family:'Inter',sans-serif; font-weight:600; font-size: 18px; margin-top: 4px;">Inter</div>
        <div style="font-size: 12px; color:#666; margin-top: 8px; line-height:1.55;">Weights 400 / 500 / 600 / 700 / 800. Neutral humanist grotesque that holds up at every size. Used for paragraphs, nav links, button labels, badges, and all interface text inside component specimens.</div>
      </div>
      <div class="surface" style="padding: 28px;">
        <div style="font-family:'JetBrains Mono',monospace; font-weight:500; font-size: 56px; line-height: 1;">Aa</div>
        <div class="eyebrow" style="margin-top: 16px;">Mono · accent</div>
        <div style="font-family:'JetBrains Mono',monospace; font-weight:500; font-size: 16px; margin-top: 4px;">JetBrains Mono</div>
        <div style="font-size: 12px; color:#666; margin-top: 8px; line-height:1.55;">Weights 400 / 500 / 700. Used for eyebrow labels, token names, data-style callouts, and the section numbering across this case study.</div>
      </div>
    </div>

    <h3 class="sub-h">Type scale</h3>
    <div class="surface" style="padding: 0; overflow: hidden;">
      <table style="width:100%; border-collapse: collapse; font-size: 13px;">
        <thead><tr style="text-align:left; color:#666; font-family:'JetBrains Mono',monospace; font-size: 11px; letter-spacing:0.08em; text-transform:uppercase;">
          <th style="padding: 10px 20px; font-weight:500;">Token</th>
          <th style="padding: 10px 20px; font-weight:500;">Face</th>
          <th style="padding: 10px 20px; font-weight:500;">Wt</th>
          <th style="padding: 10px 20px; font-weight:500;">Size / LH</th>
          <th style="padding: 10px 20px; font-weight:500;">Tracking</th>
          <th style="padding: 10px 20px; font-weight:500;">Specimen</th>
        </tr></thead>
        <tbody style="font-family:'JetBrains Mono',monospace; color:#1A1A1A;">
          <tr style="border-top:1px solid #EFEFEC;"><td style="padding:10px 20px;">display-xl</td><td style="padding:10px 20px;">Satoshi</td><td style="padding:10px 20px;">700</td><td style="padding:10px 20px;">96 / 0.98</td><td style="padding:10px 20px;">-0.025</td><td style="padding:10px 20px; font-family:'Satoshi',sans-serif; font-weight:700; font-size: 32px; letter-spacing:-0.025em; line-height:1;">Cover title</td></tr>
          <tr style="border-top:1px solid #EFEFEC;"><td style="padding:10px 20px;">display-lg</td><td style="padding:10px 20px;">Satoshi</td><td style="padding:10px 20px;">700</td><td style="padding:10px 20px;">72 / 1.0</td><td style="padding:10px 20px;">-0.02</td><td style="padding:10px 20px; font-family:'Satoshi',sans-serif; font-weight:700; font-size: 28px; letter-spacing:-0.02em;">Section title</td></tr>
          <tr style="border-top:1px solid #EFEFEC;"><td style="padding:10px 20px;">heading-1</td><td style="padding:10px 20px;">Satoshi</td><td style="padding:10px 20px;">700</td><td style="padding:10px 20px;">48 / 1.1</td><td style="padding:10px 20px;">-0.02</td><td style="padding:10px 20px; font-family:'Satoshi',sans-serif; font-weight:700; font-size: 22px;">Page heading</td></tr>
          <tr style="border-top:1px solid #EFEFEC;"><td style="padding:10px 20px;">heading-2</td><td style="padding:10px 20px;">Satoshi</td><td style="padding:10px 20px;">600</td><td style="padding:10px 20px;">36 / 1.15</td><td style="padding:10px 20px;">-0.015</td><td style="padding:10px 20px; font-family:'Satoshi',sans-serif; font-weight:600; font-size: 20px;">Sub heading</td></tr>
          <tr style="border-top:1px solid #EFEFEC;"><td style="padding:10px 20px;">heading-3</td><td style="padding:10px 20px;">Satoshi</td><td style="padding:10px 20px;">600</td><td style="padding:10px 20px;">28 / 1.2</td><td style="padding:10px 20px;">-0.015</td><td style="padding:10px 20px; font-family:'Satoshi',sans-serif; font-weight:600; font-size: 18px;">Card title</td></tr>
          <tr style="border-top:1px solid #EFEFEC;"><td style="padding:10px 20px;">heading-4</td><td style="padding:10px 20px;">Inter</td><td style="padding:10px 20px;">700</td><td style="padding:10px 20px;">20 / 1.3</td><td style="padding:10px 20px;">-0.01</td><td style="padding:10px 20px; font-family:'Inter',sans-serif; font-weight:700; font-size: 16px;">Component label</td></tr>
          <tr style="border-top:1px solid #EFEFEC;"><td style="padding:10px 20px;">heading-5</td><td style="padding:10px 20px;">Inter</td><td style="padding:10px 20px;">600</td><td style="padding:10px 20px;">18 / 1.35</td><td style="padding:10px 20px;">-0.01</td><td style="padding:10px 20px; font-family:'Inter',sans-serif; font-weight:600; font-size: 15px;">Field label</td></tr>
          <tr style="border-top:1px solid #EFEFEC;"><td style="padding:10px 20px;">heading-6</td><td style="padding:10px 20px;">Inter</td><td style="padding:10px 20px;">600</td><td style="padding:10px 20px;">16 / 1.4</td><td style="padding:10px 20px;">0</td><td style="padding:10px 20px; font-family:'Inter',sans-serif; font-weight:600; font-size: 14px;">Inline label</td></tr>
          <tr style="border-top:1px solid #EFEFEC;"><td style="padding:10px 20px;">body-lg</td><td style="padding:10px 20px;">Inter</td><td style="padding:10px 20px;">400</td><td style="padding:10px 20px;">18 / 1.55</td><td style="padding:10px 20px;">0</td><td style="padding:10px 20px; font-family:'Inter',sans-serif; font-size: 15px;">Lead paragraph.</td></tr>
          <tr style="border-top:1px solid #EFEFEC;"><td style="padding:10px 20px;">body-md</td><td style="padding:10px 20px;">Inter</td><td style="padding:10px 20px;">400</td><td style="padding:10px 20px;">16 / 1.6</td><td style="padding:10px 20px;">0</td><td style="padding:10px 20px; font-family:'Inter',sans-serif; font-size: 14px;">Body paragraph.</td></tr>
          <tr style="border-top:1px solid #EFEFEC;"><td style="padding:10px 20px;">body-sm</td><td style="padding:10px 20px;">Inter</td><td style="padding:10px 20px;">400</td><td style="padding:10px 20px;">14 / 1.55</td><td style="padding:10px 20px;">0</td><td style="padding:10px 20px; font-family:'Inter',sans-serif; font-size: 13px;">Helper, captions.</td></tr>
          <tr style="border-top:1px solid #EFEFEC;"><td style="padding:10px 20px;">caption</td><td style="padding:10px 20px;">Inter</td><td style="padding:10px 20px;">500</td><td style="padding:10px 20px;">12 / 1.5</td><td style="padding:10px 20px;">0.01</td><td style="padding:10px 20px; font-family:'Inter',sans-serif; font-weight:500; font-size: 11px;">Caption</td></tr>
          <tr style="border-top:1px solid #EFEFEC;"><td style="padding:10px 20px;">overline</td><td style="padding:10px 20px;">Mono</td><td style="padding:10px 20px;">500</td><td style="padding:10px 20px;">11 / 1.4</td><td style="padding:10px 20px;">0.16</td><td style="padding:10px 20px; font-family:'JetBrains Mono',monospace; font-size: 11px; letter-spacing:0.16em; text-transform:uppercase;">EYEBROW LABEL</td></tr>
        </tbody>
      </table>
    </div>

    <h3 class="sub-h">Responsive type</h3>
    <p class="body">display-xl scales with a clamp, clamp(60px, 9vw, 132px). At uxp-bp-xs the cover title sits at 60px on three lines. At uxp-bp-xl it sits at 132px on two. The line-height stays at 0.98 throughout, display reads tight at every size, not just on desktop.</p>

    <h3 class="sub-h">Semantic roles</h3>
    <ul class="tight">
      <li><strong>Display</strong>, once per page. The brand moment. Satoshi 700/800.</li>
      <li><strong>Heading-1</strong>, page-level title. Once per page. Satoshi.</li>
      <li><strong>Heading-2/3</strong>, section structure. Multiple per page. Satoshi.</li>
      <li><strong>Heading-4/5/6</strong>, component-level labels. Inter; gives an obvious visual hand-off from “editorial” to “UI.”</li>
      <li><strong>Body-lg</strong>, lead paragraphs only. Never the workhorse, it gets exhausting after two paragraphs.</li>
      <li><strong>Overline</strong>, section eyebrows, surface labels. Mono. Never inside body. Never standalone, always sits above something.</li>
    </ul>

    <h3 class="sub-h">The gradient title treatment, tokenized</h3>
    <p class="body">The title gradient is a treatment, not a one-off. uxp-text-style-title-gradient applies uxp-gradient-brand to whatever text it wraps, with the right blend mode and a fallback solid color for browsers that don't support background-clipped text. Designers don't reinvent this. They don't need to.</p>

    <div class="well" style="padding: 32px; margin: 16px 0 24px;">
      <div class="display grad-text" style="font-size: 72px; font-weight:800; letter-spacing:-0.03em;">design system.</div>
      <div class="mono" style="font-size:11px; color:#666; margin-top: 16px;">uxp-text-style-title-gradient</div>
      <div style="font-size: 13px; color:#666; margin-top: 6px;">Satoshi 800 · uxp-gradient-brand · text-clip with solid #1A1A1A fallback.</div>
    </div>
  </div>
</section>
<section id="shadow" style="padding: 128px 40px 96px">
  <div style="max-width: 880px; margin: 0 auto;">
    <div style="display:flex; align-items:baseline; gap:16px; margin-bottom: 32px;">
      <span class="num">06 / 06</span>
      <span class="eyebrow">Foundation · Box shadow</span>
      <span class="section-divider"></span>
    </div>
    <h2 class="section-h">Box shadow</h2>
    <p class="lead">Five elevations. Each one signals something different about how a surface relates to the rest of the page. Elevation is a language; if every card is elevated, the language is dead.</p>

    <div style="display:grid; grid-template-columns: repeat(5, 1fr); gap: 16px; margin: 28px 0 32px;">
      <div style="text-align:center;">
        <div style="height: 100px; background:#FFFFFF; border:1px solid #EFEFEC; border-radius: 4px; margin-bottom: 16px; box-shadow: none;"></div>
        <div class="mono" style="font-size:11px; color:#666;">elevation-0</div>
        <div style="font-size:12px; color:#1A1A1A; margin-top:2px; font-weight:600;">Flat</div>
      </div>
      <div style="text-align:center;">
        <div style="height: 100px; background:#FFFFFF; border-radius: 4px; margin-bottom: 16px; box-shadow: 0 1px 2px rgba(26,26,26,0.04), 0 2px 6px rgba(26,26,26,0.04);"></div>
        <div class="mono" style="font-size:11px; color:#666;">elevation-1</div>
        <div style="font-size:12px; color:#1A1A1A; margin-top:2px; font-weight:600;">Resting</div>
      </div>
      <div style="text-align:center;">
        <div style="height: 100px; background:#FFFFFF; border-radius: 4px; margin-bottom: 16px; box-shadow: 0 2px 4px rgba(26,26,26,0.06), 0 8px 16px rgba(26,26,26,0.06); transform: translateY(-2px);"></div>
        <div class="mono" style="font-size:11px; color:#666;">elevation-2</div>
        <div style="font-size:12px; color:#1A1A1A; margin-top:2px; font-weight:600;">Hover</div>
      </div>
      <div style="text-align:center;">
        <div style="height: 100px; background:#FFFFFF; border-radius: 4px; margin-bottom: 16px; box-shadow: 0 4px 8px rgba(26,26,26,0.08), 0 12px 28px rgba(26,26,26,0.08);"></div>
        <div class="mono" style="font-size:11px; color:#666;">elevation-3</div>
        <div style="font-size:12px; color:#1A1A1A; margin-top:2px; font-weight:600;">Popover</div>
      </div>
      <div style="text-align:center;">
        <div style="height: 100px; background:#FFFFFF; border-radius: 4px; margin-bottom: 16px; box-shadow: 0 12px 24px rgba(26,26,26,0.1), 0 32px 64px rgba(26,26,26,0.12);"></div>
        <div class="mono" style="font-size:11px; color:#666;">elevation-4</div>
        <div style="font-size:12px; color:#1A1A1A; margin-top:2px; font-weight:600;">Modal</div>
      </div>
    </div>

    <div class="surface" style="padding: 0; overflow:hidden;">
      <table style="width:100%; border-collapse:collapse; font-size:13px;">
        <thead><tr style="text-align:left; color:#666; font-family:'JetBrains Mono',monospace; font-size: 11px; letter-spacing:0.08em; text-transform:uppercase;">
          <th style="padding: 10px 20px; font-weight:500;">Token</th>
          <th style="padding: 10px 20px; font-weight:500;">Value</th>
          <th style="padding: 10px 20px; font-weight:500;">Signals</th>
        </tr></thead>
        <tbody>
          <tr style="border-top:1px solid #EFEFEC;"><td class="mono" style="padding:10px 20px;">uxp-elevation-0</td><td class="mono" style="padding:10px 20px;">none</td><td style="padding:10px 20px; font-family:'Inter',sans-serif;">Flush with page. Sections, layout containers.</td></tr>
          <tr style="border-top:1px solid #EFEFEC;"><td class="mono" style="padding:10px 20px;">uxp-elevation-1</td><td class="mono" style="padding:10px 20px; font-size:11px;">0 1 2 rgba(0,0,0,.04), 0 2 6 rgba(0,0,0,.04)</td><td style="padding:10px 20px; font-family:'Inter',sans-serif;">Slightly off the page. Cards at rest.</td></tr>
          <tr style="border-top:1px solid #EFEFEC;"><td class="mono" style="padding:10px 20px;">uxp-elevation-2</td><td class="mono" style="padding:10px 20px; font-size:11px;">0 2 4 rgba(0,0,0,.06), 0 8 16 rgba(0,0,0,.06)</td><td style="padding:10px 20px; font-family:'Inter',sans-serif;">Interactive lift. Hover state for elevated cards.</td></tr>
          <tr style="border-top:1px solid #EFEFEC;"><td class="mono" style="padding:10px 20px;">uxp-elevation-3</td><td class="mono" style="padding:10px 20px; font-size:11px;">0 4 8 rgba(0,0,0,.08), 0 12 28 rgba(0,0,0,.08)</td><td style="padding:10px 20px; font-family:'Inter',sans-serif;">Floating. Dropdowns, popovers, tooltips.</td></tr>
          <tr style="border-top:1px solid #EFEFEC;"><td class="mono" style="padding:10px 20px;">uxp-elevation-4</td><td class="mono" style="padding:10px 20px; font-size:11px;">0 12 24 rgba(0,0,0,.10), 0 32 64 rgba(0,0,0,.12)</td><td style="padding:10px 20px; font-family:'Inter',sans-serif;">Surface above everything. Modals.</td></tr>
        </tbody>
      </table>
    </div>

    <h3 class="sub-h">When elevation is wrong</h3>
    <p class="body">When every card hovers, no card hovers. I default to elevation-0 with a hairline border, and reserve elevation-1 for surfaces that are genuinely interactive or genuinely above the page. Static content lives flat.</p>

    <p class="body">Three other places elevation breaks. <strong>(1)</strong> Shadows on dark backgrounds, the shadow has nothing to fall on, so the surface just looks blurry; use a hairline border at 10% white instead. <strong>(2)</strong> Shadows on full-bleed gradient sections, same problem, and the gradient eats the shadow color. <strong>(3)</strong> Hover lift on a non-clickable card, the affordance is a lie.</p>
  </div>
</section>
<section id="part-2" class="divider" style="padding: 96px 40px">
  <div style="max-width: 880px; margin: 0 auto">
    <div class="eyebrow" style="FFF; margin-bottom: 20px">Part Two · Components</div>
    <h2 class="display" style="font-size: clamp(40px, 5vw, 64px); font-weight:700; letter-spacing:-0.025em; margin:0; FFF">
      Twelve components. <span style="color:#666">No more.</span>
    </h2>
    <p class="lead" style="margin-top: 24px; max-width: 720px">Each one was earned through the three-question gate. Each page reads the same way: anatomy · variants · sizes · states · usage (when and when not) · accessibility notes · tokens · a specimen example.</p>
  </div>
</section>
<section id="button" style="padding: 128px 40px 96px">
  <div style="max-width: 880px; margin: 0 auto;">
    <div style="display:flex; align-items:baseline; gap:16px; margin-bottom: 32px;">
      <span class="num">07 / 18</span>
      <span class="eyebrow">Component · Button</span>
      <span class="section-divider"></span>
    </div>
    <h2 class="section-h">Button</h2>
    <p class="lead">Four variants, three sizes. Anything more would have been six, then ten, then a designer asking what the difference between “primary-soft” and “secondary-strong” is. I stopped at four.</p>

    <h3 class="sub-h">Anatomy</h3>
    <div class="surface" style="padding: 40px; margin-bottom: 16px;">
      <div style="display:flex; align-items:center; justify-content:center;">
        <div style="position:relative;">
          <button style="font-family:'Inter',sans-serif; font-weight:600; font-size:15px; color:#FFFFFF; background: linear-gradient(90deg, #00A7FF 0%, #C648E6 100%); border:none; padding: 12px 24px; border-radius: 4px; cursor:pointer; display:inline-flex; align-items:center; gap:8px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFF" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"></path></svg>
            Continue
            <span style="display:inline-block;">→</span>
          </button>
        </div>
      </div>
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 8px 32px; margin-top: 24px; font-size: 13px; color:#666;">
        <div>① Leading icon · 16px, optional</div>
        <div>② Label · 15/600/Inter</div>
        <div>③ Trailing icon · 16px, optional</div>
        <div>④ Padding · 12 × 24 (md)</div>
        <div>⑤ Radius · 4px</div>
        <div>⑥ Background · variant-specific</div>
      </div>
    </div>

    <h3 class="sub-h">Variants</h3>
    <div class="surface" style="padding: 40px; margin-bottom: 8px;">
      <div style="display:flex; flex-wrap:wrap; gap: 16px 24px; align-items:center;">
        <button style="font-family:'Inter',sans-serif; font-weight:600; font-size:15px; color:#FFFFFF; background: linear-gradient(90deg, #00A7FF 0%, #C648E6 100%); border:none; padding: 12px 24px; border-radius: 4px; cursor:pointer;">Primary</button>
        <button style="font-family:'Inter',sans-serif; font-weight:600; font-size:15px; color:#0078B8; background:#FFFFFF; border: 1.5px solid #0078B8; padding: 11px 22px; border-radius: 4px; cursor:pointer;">Secondary</button>
        <button style="font-family:'Inter',sans-serif; font-weight:600; font-size:15px; color:#1A1A1A; background:transparent; border: none; padding: 12px 16px; border-radius: 4px; cursor:pointer;">Tertiary</button>
        <button style="font-family:'Inter',sans-serif; font-weight:600; font-size:15px; color:#FFFFFF; background:#E5484D; border:none; padding: 12px 24px; border-radius: 4px; cursor:pointer;">Destructive</button>
      </div>
      <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-top: 18px; font-family:'JetBrains Mono',monospace; font-size: 10px; color:#666;">
        <div>primary · gradient</div>
        <div>secondary · outline</div>
        <div>tertiary · ghost</div>
        <div>destructive · status-error</div>
      </div>
    </div>
    <p class="body" style="margin-top:18px;"><strong>Why four.</strong> Primary uses the brand gradient because the gradient is brand; promoting the most important action carries the most brand. Secondary outlines so it can sit next to primary on the same screen without competing for attention. Tertiary reads as text but behaves as button, for everything that wants to feel quiet. Destructive uses the dedicated status-error red (not coral) because users need destructive to be unmistakable. Any fifth variant would be one I couldn't defend at the gate.</p>

    <h3 class="sub-h">Sizes</h3>
    <div class="surface" style="padding: 32px; display:flex; gap: 24px; align-items:center; margin-bottom: 18px;">
      <button style="font-family:'Inter',sans-serif; font-weight:600; font-size:13px; color:#FFF; background: linear-gradient(90deg, #00A7FF 0%, #C648E6 100%); border:none; padding: 8px 16px; border-radius: 4px;">Small</button>
      <button style="font-family:'Inter',sans-serif; font-weight:600; font-size:15px; color:#FFF; background: linear-gradient(90deg, #00A7FF 0%, #C648E6 100%); border:none; padding: 12px 24px; border-radius: 4px;">Medium</button>
      <button style="font-family:'Inter',sans-serif; font-weight:600; font-size:17px; color:#FFF; background: linear-gradient(90deg, #00A7FF 0%, #C648E6 100%); border:none; padding: 16px 32px; border-radius: 4px;">Large</button>
      <div style="font-family:'JetBrains Mono',monospace; font-size: 11px; color:#666; margin-left:auto;">
        <div>sm · 32h · text 13</div>
        <div>md · 44h · text 15</div>
        <div>lg · 52h · text 17</div>
      </div>
    </div>
    <p class="body">Mobile-safe hit targets are md and above (44px minimum). sm is for desktop secondary actions only, filter chips, table actions, in-row controls.</p>

    <h3 class="sub-h">States</h3>
    <div class="surface" style="padding: 32px; margin-bottom: 16px;">
      <div style="display:grid; grid-template-columns: repeat(6, 1fr); gap: 16px;">
        <div style="text-align:center;">
          <button style="font-family:'Inter',sans-serif; font-weight:600; font-size:14px; color:#FFF; background: linear-gradient(90deg, #00A7FF 0%, #C648E6 100%); border:none; padding: 10px 18px; border-radius: 4px;">Continue</button>
          <div class="mono" style="font-size:10px; color:#666; margin-top:8px;">default</div>
        </div>
        <div style="text-align:center;">
          <button style="font-family:'Inter',sans-serif; font-weight:600; font-size:14px; color:#FFF; background: linear-gradient(90deg, #00A7FF 0%, #C648E6 60%, #FF921E 100%); border:none; padding: 10px 18px; border-radius: 4px;">Continue</button>
          <div class="mono" style="font-size:10px; color:#666; margin-top:8px;">hover</div>
        </div>
        <div style="text-align:center;">
          <button style="font-family:'Inter',sans-serif; font-weight:600; font-size:14px; color:#FFF; background: linear-gradient(90deg, #00A7FF 0%, #C648E6 100%); border:none; padding: 10px 18px; border-radius: 4px; outline: 2px solid #00A7FF; outline-offset: 2px;">Continue</button>
          <div class="mono" style="font-size:10px; color:#666; margin-top:8px;">focus-visible</div>
        </div>
        <div style="text-align:center;">
          <button style="font-family:'Inter',sans-serif; font-weight:600; font-size:14px; color:#FFF; background: linear-gradient(90deg, #0095E5 0%, #B43AD1 100%); border:none; padding: 10px 18px; border-radius: 4px; transform: scale(0.97);">Continue</button>
          <div class="mono" style="font-size:10px; color:#666; margin-top:8px;">active</div>
        </div>
        <div style="text-align:center;">
          <button style="font-family:'Inter',sans-serif; font-weight:600; font-size:14px; color:#FFF; background:#CCCCCC; border:none; padding: 10px 18px; border-radius: 4px; cursor:not-allowed;">Continue</button>
          <div class="mono" style="font-size:10px; color:#666; margin-top:8px;">disabled</div>
        </div>
        <div style="text-align:center;">
          <button style="font-family:'Inter',sans-serif; font-weight:600; font-size:14px; color:#FFF; background: linear-gradient(90deg, #00A7FF 0%, #C648E6 100%); border:none; padding: 10px 18px; border-radius: 4px; opacity:0.85;">
            <span style="display:inline-block; width:10px; height:10px; border:2px solid #FFF; border-top-color:transparent; border-radius:50%; vertical-align:-1px; margin-right:6px;"></span>Continue
          </button>
          <div class="mono" style="font-size:10px; color:#666; margin-top:8px;">loading</div>
        </div>
      </div>
    </div>
    <p class="body"><strong>Hover.</strong> The gradient warms, its stops shift toward orange. uxp-gradient-emphasis → uxp-gradient-brand. The third brand color earns its job in the interaction model: it only appears on intent.</p>
    <p class="body"><strong>Focus-visible.</strong> Always present, never removed. 2px uxp-blue-500 outline at 2px offset, on every variant. Focus-visible (not focus) so it only shows for keyboard users, mouse clicks don't leave the ring stuck.</p>

    <h3 class="sub-h">Usage · button vs link</h3>
    <p class="body" style="padding: 20px 24px; border-left: 3px solid #00A7FF; background:#FCFCFA;">If the control stays on this page or mutates state, it's a button. If it takes you to another URL, it's a link, even when it's styled to look like a button. Use &lt;a class="uxp-button"&gt; for nav-styled-as-button. The rule is semantic, not visual. Style is negotiable; semantics aren't.</p>

    <h3 class="sub-h">Accessibility</h3>
    <ul class="tight">
      <li>Min hit target 44 × 44 at md and above. Below 44 only at desktop-only sm.</li>
      <li>Loading state announces via aria-busy="true"; the label stays the same, not “Loading…”.</li>
      <li>Disabled buttons are still focusable so screen reader users can hear why they're disabled (via aria-disabled, not the native disabled attribute).</li>
      <li>Icon-only buttons require aria-label; the label is the verb (“Close,” not “X”).</li>
    </ul>

    <h3 class="sub-h">Tokens used</h3>
    <p class="body">uxp-gradient-emphasis · uxp-blue-500 · uxp-color-status-error · uxp-radius-1 · uxp-space-3 · uxp-space-6 · uxp-elevation-0 · text style button-md.</p>

    <h3 class="sub-h">Specimen · the three variants in a real screen</h3>
    <div class="well" style="padding: 40px; margin: 16px 0;">
      <div style="display:flex; gap:16px; flex-wrap:wrap; align-items:center;">
        <button style="font-family:'Inter',sans-serif; font-weight:600; font-size:15px; color:#FFF; background: linear-gradient(90deg, #00A7FF 0%, #C648E6 100%); border:none; padding: 12px 24px; border-radius: 4px; cursor:pointer; display:inline-flex; align-items:center; gap:8px;">Save changes <span>→</span></button>
        <button style="font-family:'Inter',sans-serif; font-weight:600; font-size:15px; color:#0078B8; background:#FFFFFF; border: 1.5px solid #0078B8; padding: 11px 22px; border-radius: 4px; cursor:pointer;">Discard</button>
        <button style="font-family:'Inter',sans-serif; font-weight:600; font-size:15px; color:#1A1A1A; background:transparent; border: none; padding: 12px 16px; border-radius: 4px; cursor:pointer;">Cancel</button>
      </div>
      <div class="annot" style="margin-top: 20px;">A typical settings save-bar · primary · secondary · tertiary</div>
    </div>
  </div>
</section>
<section id="link" style="padding: 128px 40px 96px">
  <div style="max-width: 880px; margin: 0 auto;">
    <div style="display:flex; align-items:baseline; gap:16px; margin-bottom: 32px;">
      <span class="num">08 / 18</span>
      <span class="eyebrow">Component · Link</span>
      <span class="section-divider"></span>
    </div>
    <h2 class="section-h">Link</h2>
    <p class="lead">The simplest component in the system and the easiest to get wrong. There are two kinds: inline (inside a paragraph) and standalone (its own line). They behave differently.</p>

    <h3 class="sub-h">Inline vs standalone</h3>
    <div class="surface" style="padding: 32px; margin-bottom: 24px;">
      <p style="font-family:'Inter',sans-serif; font-size: 16px; line-height: 1.65; color: #1A1A1A; margin: 0 0 24px;">
        The token reference is in <a href="#" style="color:#0078B8; text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 3px;">the typography foundation</a>, and the contrast table sits inside <a href="#" style="color:#0078B8; text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 3px;">the color foundation</a>.
      </p>
      <div class="eyebrow" style="margin-bottom: 12px;">Standalone</div>
      <a href="#" style="font-family:'Inter',sans-serif; font-weight:500; font-size: 15px; color:#0078B8; text-decoration:none; display:inline-flex; align-items:center; gap:6px;">Read the full token reference <span>↓</span></a>
    </div>

    <p class="body"><strong>Inline links are always underlined.</strong> Thickness 1px, offset 3px, present at rest, not just on hover. Underlines are the only thing that reliably distinguishes a link from body text for users not picking up subtle color differences. Color is uxp-blue-700 · #0078B8 so contrast clears AA on white.</p>
    <p class="body"><strong>Standalone links can drop the underline</strong> in favor of a trailing glyph. They occupy their own line; they don't need underline to be findable.</p>

    <h3 class="sub-h">States</h3>
    <div class="surface" style="padding: 28px; display:grid; grid-template-columns: repeat(5, 1fr); gap: 16px; margin-bottom: 16px;">
      <div style="text-align:center;"><a href="#" style="color:#0078B8; font-size:14px; text-decoration:underline; text-underline-offset:3px;">Link</a><div class="mono" style="font-size:10px; color:#666; margin-top:6px;">default</div></div>
      <div style="text-align:center;"><a href="#" style="color:#922AA8; font-size:14px; text-decoration:underline; text-underline-offset:3px;">Link</a><div class="mono" style="font-size:10px; color:#666; margin-top:6px;">hover</div></div>
      <div style="text-align:center;"><a href="#" style="color:#0078B8; font-size:14px; text-decoration:underline; text-underline-offset:3px; outline:2px solid #00A7FF; outline-offset:2px;">Link</a><div class="mono" style="font-size:10px; color:#666; margin-top:6px;">focus</div></div>
      <div style="text-align:center;"><a href="#" style="color:#6F1F80; font-size:14px; text-decoration:underline; text-underline-offset:3px;">Link</a><div class="mono" style="font-size:10px; color:#666; margin-top:6px;">visited</div></div>
      <div style="text-align:center;"><a href="#" style="color:#999; font-size:14px; text-decoration:underline; text-underline-offset:3px; pointer-events:none;">Link</a><div class="mono" style="font-size:10px; color:#666; margin-top:6px;">disabled</div></div>
    </div>
    <p class="body">Default uxp-blue-700 → hover uxp-purple-700. The brand's hand-off: action color drifts toward emphasis color when you reach for it. Visited settles at uxp-purple-800. Cool → warm → settled. It reads naturally before you can name why.</p>

    <h3 class="sub-h">Usage · link vs button, plainly</h3>
    <p class="body"><strong>Goes to a URL → link.</strong> <strong>Triggers an action → button.</strong> If you're choosing between them and unsure, ask: would right-click → “open in new tab” make sense? If yes, it's a link. Style follows semantics, not the other way around.</p>

    <h3 class="sub-h">Accessibility</h3>
    <ul class="tight">
      <li>Color alone never carries link-ness, underlines do.</li>
      <li>Standalone links need a visible focus ring (not just hover state); the ring is the same as buttons.</li>
      <li>External links carry a small icon-external-link and aria-label appendix “opens in new window.”</li>
    </ul>
  </div>
</section>
<section id="tab" style="padding: 128px 40px 96px">
  <div style="max-width: 880px; margin: 0 auto;">
    <div style="display:flex; align-items:baseline; gap:16px; margin-bottom: 32px;">
      <span class="num">09 / 18</span>
      <span class="eyebrow">Component · Tab</span>
      <span class="section-divider"></span>
    </div>
    <h2 class="section-h">Tab</h2>
    <p class="lead">Horizontal for switching between views inside a page (a settings page's “Profile · Notifications · Billing”). Vertical for sectioned documentation (a docs sidebar). One component, one set of states, two layouts.</p>

    <h3 class="sub-h">Horizontal</h3>
    <div class="surface" style="padding: 0; overflow:hidden; margin-bottom:18px;">
      <div style="display:flex; align-items:center; gap: 0; padding: 0 32px; border-bottom: 1px solid #EFEFEC;">
        <a href="#" style="text-decoration:none; padding: 20px 20px; font-family:'Inter',sans-serif; font-size:14px; font-weight:700; color:#1A1A1A; position:relative;">
          Profile
          <span style="position:absolute; left:16px; right:16px; bottom:-1px; height:3px; background: linear-gradient(90deg, #00A7FF 0%, #C648E6 100%); border-radius:2px;"></span>
        </a>
        <a href="#" style="text-decoration:none; padding: 20px 20px; font-family:'Inter',sans-serif; font-size:14px; font-weight:600; color:#666;">Notifications</a>
        <a href="#" style="text-decoration:none; padding: 20px 20px; font-family:'Inter',sans-serif; font-size:14px; font-weight:600; color:#666;">Billing</a>
        <a href="#" style="text-decoration:none; padding: 20px 20px; font-family:'Inter',sans-serif; font-size:14px; font-weight:600; color:#666;">Integrations</a>
        <a href="#" style="text-decoration:none; padding: 20px 20px; font-family:'Inter',sans-serif; font-size:14px; font-weight:600; color:#666;">Security</a>
      </div>
    </div>
    <p class="body"><strong>Active state.</strong> A 3px gradient underline (uxp-gradient-emphasis) flush with the bottom border, plus weight bumped from 600 to 700. I tried a solid-blue underline first; it read as unrelated to the brand. The gradient is the only piece of chrome where the brand mark steps in.</p>
    <p class="body"><strong>Mobile overflow.</strong> At uxp-bp-sm the tab row scrolls horizontally with momentum, and a fade mask on the right edge signals more. I don't collapse a low tab count (3–7) to a hamburger; a scrolling row keeps the structure visible.</p>

    <h3 class="sub-h">Vertical</h3>
    <div class="surface" style="padding: 24px; margin-bottom: 18px;">
      <div style="display:grid; grid-template-columns: 240px 1fr; gap: 32px; align-items:start;">
        <div style="display:flex; flex-direction:column; gap: 4px;">
          <a href="#" style="text-decoration:none; padding: 10px 14px; font-family:'Inter',sans-serif; font-size:14px; font-weight:500; color:#666; border-radius: 4px;">Layout grid</a>
          <a href="#" style="text-decoration:none; padding: 10px 14px; font-family:'Inter',sans-serif; font-size:14px; font-weight:700; color:#FFFFFF; background:#1A1A1A; border-radius: 4px;">Color</a>
          <a href="#" style="text-decoration:none; padding: 10px 14px; font-family:'Inter',sans-serif; font-size:14px; font-weight:500; color:#666; border-radius: 4px;">Spacing</a>
          <a href="#" style="text-decoration:none; padding: 10px 14px; font-family:'Inter',sans-serif; font-size:14px; font-weight:500; color:#666; border-radius: 4px;">Icons</a>
          <a href="#" style="text-decoration:none; padding: 10px 14px; font-family:'Inter',sans-serif; font-size:14px; font-weight:500; color:#666; border-radius: 4px;">Typography</a>
          <a href="#" style="text-decoration:none; padding: 10px 14px; font-family:'Inter',sans-serif; font-size:14px; font-weight:500; color:#666; border-radius: 4px;">Shadow</a>
        </div>
        <div style="font-size: 13px; color:#666; padding-top: 10px;">Filled near-black pill for the active state. Inherits page chrome, the brand gradient stays reserved for horizontal tabs and brand moments. Vertical tab lists are workspaces; they shouldn't carry that level of brand weight.</div>
      </div>
    </div>

    <h3 class="sub-h">Usage · tabs vs segmented controls vs separate page</h3>
    <ul class="tight">
      <li><strong>Tabs</strong>, switching between views of the same thing. Three to seven options.</li>
      <li><strong>Segmented control</strong>, a binary or trinary toggle (e.g. Compact / Comfortable / Roomy). Different component.</li>
      <li><strong>Separate page</strong>, when the user needs to deep-link or share a view. If the URL has to point at the specific view, it's a page, not a tab.</li>
    </ul>

    <h3 class="sub-h">Accessibility</h3>
    <ul class="tight">
      <li>role="tablist" on the container; each tab is role="tab" with aria-selected.</li>
      <li>Arrow keys walk tabs; <kbd>Home</kbd> / <kbd>End</kbd> jump to first / last.</li>
      <li>Focus visible on the tab itself, not the panel, focus and selection are decoupled.</li>
    </ul>
  </div>
</section>
<section id="lang" style="padding: 128px 40px 96px">
  <div style="max-width: 880px; margin: 0 auto;">
    <div style="display:flex; align-items:baseline; gap:16px; margin-bottom: 32px;">
      <span class="num">10 / 18</span>
      <span class="eyebrow">Component · Language switcher</span>
      <span class="section-divider"></span>
    </div>
    <h2 class="section-h">Language switcher</h2>
    <p class="lead">A dropdown of language codes and native names. Small, anonymous, identical on every screen that needs it.</p>

    <h3 class="sub-h">Pattern · dropdown with code + native name</h3>
    <div style="display:flex; gap: 32px; align-items:flex-start; margin: 16px 0 24px; flex-wrap: wrap;">
      <div class="surface" style="padding: 6px; border-radius: 4px; display:inline-block;">
        <button style="font-family:'Inter',sans-serif; font-weight:500; font-size:13px; color:#1A1A1A; background:transparent; border:none; padding: 6px 10px; border-radius:3px; cursor:pointer; display:inline-flex; align-items:center; gap:6px;">
          <span class="mono" style="font-size:11px; color:#0078B8;">EN</span>
          English
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="1.75" stroke-linecap="round"><path d="M6 9l6 6 6-6"></path></svg>
        </button>
      </div>
      <div class="surface" style="padding: 6px 0; border-radius: 4px; display:inline-block; box-shadow: 0 4px 8px rgba(26,26,26,0.08), 0 12px 28px rgba(26,26,26,0.08); min-width: 220px;">
        <a href="#" style="text-decoration:none; display:flex; align-items:center; gap: 12px; padding: 8px 14px; font-family:'Inter',sans-serif; font-size:13px; color:#1A1A1A; background:#F7F7F5;"><span class="mono" style="font-size:11px; color:#0078B8; width:24px;">EN</span> English</a>
        <a href="#" lang="ar" dir="rtl" style="text-decoration:none; display:flex; align-items:center; gap: 12px; padding: 8px 14px; font-family:'Inter',sans-serif; font-size:13px; color:#1A1A1A;"><span class="mono" style="font-size:11px; color:#666; width:24px;">AR</span> العربية</a>
        <a href="#" lang="hi" style="text-decoration:none; display:flex; align-items:center; gap: 12px; padding: 8px 14px; font-family:'Inter',sans-serif; font-size:13px; color:#1A1A1A;"><span class="mono" style="font-size:11px; color:#666; width:24px;">HI</span> हिन्दी</a>
        <a href="#" lang="es" style="text-decoration:none; display:flex; align-items:center; gap: 12px; padding: 8px 14px; font-family:'Inter',sans-serif; font-size:13px; color:#1A1A1A;"><span class="mono" style="font-size:11px; color:#666; width:24px;">ES</span> Español</a>
        <a href="#" lang="pt-BR" style="text-decoration:none; display:flex; align-items:center; gap: 12px; padding: 8px 14px; font-family:'Inter',sans-serif; font-size:13px; color:#1A1A1A;"><span class="mono" style="font-size:11px; color:#666; width:24px;">PT</span> Português (Brasil)</a>
      </div>
    </div>

    <p class="body"><strong>Code + name, always.</strong> A flag is a country, not a language. Brazil and Portugal share Portuguese; Spain and Mexico share Spanish. I use the ISO 639-1 code plus the language's name written in its own script. The code answers “which language is this?” faster than the name does, especially in scripts the user can't yet read.</p>

    <h3 class="sub-h">Long names &amp; RTL</h3>
    <p class="body">The dropdown sets min-width: 220px and lets names wrap to two lines when they have to. The trigger shows only the code (“EN”) below uxp-bp-md. RTL languages open with dir="rtl" applied per option, code on the right, name on the left, matching reading direction. The switcher is RTL-aware before the rest of the platform is, so I don't have to ship the switcher twice.</p>

    <h3 class="sub-h">Accessibility</h3>
    <ul class="tight">
      <li>Trigger has aria-haspopup="listbox" and an explicit aria-label="Select language".</li>
      <li>Each option carries the right lang="…" attribute so screen readers switch voice.</li>
      <li>Selection is announced via a live region as “Language changed to Arabic”, in the user's <em>current</em> language, not the destination. Most screen readers can't pronounce a language they don't have a voice for.</li>
    </ul>
  </div>
</section>
<section id="textfield" style="padding: 128px 40px 96px">
  <div style="max-width: 880px; margin: 0 auto;">
    <div style="display:flex; align-items:baseline; gap:16px; margin-bottom: 32px;">
      <span class="num">11 / 18</span>
      <span class="eyebrow">Component · Text field</span>
      <span class="section-divider"></span>
    </div>
    <h2 class="section-h">Text field</h2>
    <p class="lead">The component that was being rebuilt from scratch every time I started a new screen. One field, six states, one validation pattern, across every form in the system.</p>

    <h3 class="sub-h">Anatomy</h3>
    <div class="surface" style="padding: 40px; margin-bottom: 18px;">
      <div style="max-width: 480px;">
        <label style="font-family:'Inter',sans-serif; font-weight:500; font-size:13px; color:#1A1A1A; display:block; margin-bottom: 6px;">Work email <span style="color:#666;">·</span> <span style="color:#666; font-weight:400;">required</span></label>
        <div style="position:relative;">
          <input type="email" placeholder="you@studio.com" style="font-family:'Inter',sans-serif; font-size:15px; color:#1A1A1A; background:#FFFFFF; border:1.5px solid #EFEFEC; padding: 11px 14px 11px 38px; border-radius: 4px; width:100%; outline:none;">
          <svg style="position:absolute; left:12px; top:50%; transform:translateY(-50%); pointer-events:none;" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"></rect><path d="M2 7l10 7 10-7"></path></svg>
        </div>
        <div style="font-family:'Inter',sans-serif; font-size:12px; color:#666; margin-top: 6px;">We'll only use this to send a confirmation.</div>
      </div>
      <div style="display:grid; grid-template-columns: repeat(2, 1fr); gap: 12px 32px; margin-top: 28px; font-size: 12px; color:#666;">
        <div>① Label · 13/500/ink-900</div>
        <div>② Required marker · “· required” in ink-500</div>
        <div>③ Prefix icon · 16px, ink-500</div>
        <div>④ Input · 15/400/Inter, 44px tall</div>
        <div>⑤ Placeholder · ink-500 at 60%</div>
        <div>⑥ Helper · 12/400/ink-500, max 80ch</div>
      </div>
    </div>

    <h3 class="sub-h">Variants &amp; sizes</h3>
    <p class="body">One variant. Size scale matches the button scale, sm 36px, md 44px (default), lg 52px. Prefix and suffix slots accept either an icon or a short label (e.g. “https://”). A character count sits in the bottom-right when maxLength is set.</p>

    <h3 class="sub-h">States</h3>
    <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
      <div class="surface" style="padding: 20px;">
        <div class="mono" style="font-size:10px; color:#666; margin-bottom:8px;">DEFAULT</div>
        <input placeholder="Your name" style="font-family:'Inter',sans-serif; font-size:15px; color:#1A1A1A; background:#FFFFFF; border:1.5px solid #EFEFEC; padding: 11px 14px; border-radius: 4px; width:100%; outline:none;">
      </div>
      <div class="surface" style="padding: 20px;">
        <div class="mono" style="font-size:10px; color:#666; margin-bottom:8px;">FOCUS</div>
        <input placeholder="Your name" style="font-family:'Inter',sans-serif; font-size:15px; color:#1A1A1A; background:#FFFFFF; border:1.5px solid #00A7FF; padding: 11px 14px; border-radius: 4px; width:100%; outline: 2px solid rgba(0,167,255,0.25); outline-offset: 0;">
      </div>
      <div class="surface" style="padding: 20px;">
        <div class="mono" style="font-size:10px; color:#666; margin-bottom:8px;">FILLED</div>
        <input value="Maya Lambert" style="font-family:'Inter',sans-serif; font-size:15px; color:#1A1A1A; background:#FFFFFF; border:1.5px solid #EFEFEC; padding: 11px 14px; border-radius: 4px; width:100%; outline:none;">
      </div>
      <div class="surface" style="padding: 20px;">
        <div class="mono" style="font-size:10px; color:#666; margin-bottom:8px;">ERROR</div>
        <input value="not-an-email" style="font-family:'Inter',sans-serif; font-size:15px; color:#1A1A1A; background:#FFFFFF; border:1.5px solid #E5484D; padding: 11px 14px; border-radius: 4px; width:100%; outline:none;">
        <div style="font-family:'Inter',sans-serif; font-size:12px; color:#E5484D; margin-top:6px; display:flex; align-items:center; gap:4px;">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#E5484D" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4M12 16h0"></path></svg>
          Add the <strong style="font-weight:600;">@</strong>, this looks like a username, not an email.
        </div>
      </div>
      <div class="surface" style="padding: 20px;">
        <div class="mono" style="font-size:10px; color:#666; margin-bottom:8px;">DISABLED</div>
        <input value="reserved@example.com" disabled="" style="font-family:'Inter',sans-serif; font-size:15px; color:#999; background:#F7F7F5; border:1.5px solid #EFEFEC; padding: 11px 14px; border-radius: 4px; width:100%; cursor:not-allowed;">
      </div>
      <div class="surface" style="padding: 20px;">
        <div class="mono" style="font-size:10px; color:#666; margin-bottom:8px;">READ-ONLY</div>
        <input value="Maya Lambert" readonly="" style="font-family:'Inter',sans-serif; font-size:15px; color:#1A1A1A; background:#FCFCFA; border:1.5px solid #EFEFEC; padding: 11px 14px; border-radius: 4px; width:100%; outline:none;">
      </div>
    </div>
    <p class="body">Error uses the dedicated uxp-color-status-error · #E5484D, a true red, not the brand coral. A user scanning a form needs the error to read as <em>error</em> at a glance, not as a brand moment.</p>

    <h3 class="sub-h">Validation · inline on blur, summary on submit</h3>
    <p class="body">The field validates when the user leaves it, never while they're typing, because validating mid-keystroke makes the field feel hostile. On submit, every invalid field is summarized at the top of the form with focus moved to the first one. Required fields use “· required” after the label, not the universal red asterisk; an asterisk pattern reads as decoration before it reads as meaning.</p>

    <h3 class="sub-h">Usage · when not to use</h3>
    <ul class="tight">
      <li>For a single-character input (PIN code), use a code-input component instead.</li>
      <li>For a known short list, use a select.</li>
      <li>For dates and time, use the date picker, never coerce users into typing “MM/DD/YYYY”.</li>
    </ul>

    <h3 class="sub-h">Specimen · a generic sign-up form</h3>
    <div class="well" style="padding: 40px; margin: 16px 0;">
      <div style="max-width: 480px;">
        <div class="eyebrow" style="margin-bottom: 24px;">Create your account</div>
        <label style="font-family:'Inter',sans-serif; font-weight:500; font-size:13px; color:#1A1A1A; display:block; margin-bottom: 6px;">Full name · <span style="color:#666; font-weight:400;">required</span></label>
        <input placeholder="Your name" style="font-family:'Inter',sans-serif; font-size:15px; color:#1A1A1A; background:#FFFFFF; border:1.5px solid #EFEFEC; padding: 11px 14px; border-radius: 4px; width:100%; outline:none; margin-bottom: 20px;">
        <label style="font-family:'Inter',sans-serif; font-weight:500; font-size:13px; color:#1A1A1A; display:block; margin-bottom: 6px;">Work email · <span style="color:#666; font-weight:400;">required</span></label>
        <input placeholder="you@studio.com" style="font-family:'Inter',sans-serif; font-size:15px; color:#1A1A1A; background:#FFFFFF; border:1.5px solid #EFEFEC; padding: 11px 14px; border-radius: 4px; width:100%; outline:none; margin-bottom: 20px;">
        <label style="font-family:'Inter',sans-serif; font-weight:500; font-size:13px; color:#1A1A1A; display:block; margin-bottom: 6px;">Role <span style="color:#666; font-weight:400;">· optional</span></label>
        <input placeholder="e.g. Product Designer" style="font-family:'Inter',sans-serif; font-size:15px; color:#1A1A1A; background:#FFFFFF; border:1.5px solid #EFEFEC; padding: 11px 14px; border-radius: 4px; width:100%; outline:none; margin-bottom: 24px;">
        <button style="font-family:'Inter',sans-serif; font-weight:600; font-size:15px; color:#FFF; background: linear-gradient(90deg, #00A7FF 0%, #C648E6 100%); border:none; padding: 12px 24px; border-radius: 4px; cursor:pointer;">Continue</button>
      </div>
    </div>
  </div>
</section>
<section id="card" style="padding: 128px 40px 96px">
  <div style="max-width: 880px; margin: 0 auto;">
    <div style="display:flex; align-items:baseline; gap:16px; margin-bottom: 32px;">
      <span class="num">12 / 18</span>
      <span class="eyebrow">Component · Card</span>
      <span class="section-divider"></span>
    </div>
    <h2 class="section-h">Card</h2>
    <p class="lead">Four structural variants, content, media, stat, quote. The variants exist because the structure of what's inside actually differs. I did not start with variants and look for content to fit them.</p>

    <h3 class="sub-h">Variants</h3>
    <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 16px 0 24px;">

      <!-- Content card -->
      <div style="background:#FFFFFF; border:1px solid #EFEFEC; border-radius: 4px; padding: 24px;">
        <div class="eyebrow" style="margin-bottom:10px; color:#0078B8;">Content</div>
        <div style="font-family:'Satoshi',sans-serif; font-weight:600; font-size: 20px; line-height:1.25; letter-spacing:-0.015em; color:#1A1A1A;">Designing systems that don't collapse</div>
        <div style="font-size: 14px; color:#666; margin-top: 10px; line-height:1.55;">An article about the threshold where a design system stops being optional.</div>
        <div class="mono" style="font-size:11px; color:#666; margin-top: 24px;">12 MIN READ</div>
      </div>

      <!-- Media card -->
      <div style="background:#FFFFFF; border:1px solid #EFEFEC; border-radius: 4px; padding: 0; overflow:hidden;">
        <div style="aspect-ratio: 16/9; background: linear-gradient(135deg, #00A7FF 0%, #C648E6 50%, #FF921E 100%);"></div>
        <div style="padding: 20px;">
          <div class="eyebrow" style="margin-bottom:6px; color:#922AA8;">Media</div>
          <div style="font-family:'Satoshi',sans-serif; font-weight:600; font-size: 18px; line-height:1.3; color:#1A1A1A;">A specimen of the brand gradient at hero scale</div>
          <div style="font-size:13px; color:#666; margin-top: 8px;">Image-first card. Crops at 16:9.</div>
        </div>
      </div>

      <!-- Stat card -->
      <div style="background:#FFFFFF; border:1px solid #EFEFEC; border-radius: 4px; padding: 28px;">
        <div class="eyebrow" style="margin-bottom:18px;">Stat</div>
        <div class="display" style="font-size: 56px; font-weight:800; letter-spacing:-0.03em; line-height:1;"><span class="grad-text">214</span></div>
        <div style="font-family:'Inter',sans-serif; font-weight:500; font-size:14px; color:#1A1A1A; margin-top: 12px;">tokens defined in v1</div>
        <div style="font-family:'JetBrains Mono',monospace; font-size:11px; color:#666; margin-top:4px;">across foundations + components</div>
      </div>

      <!-- Quote card -->
      <div style="background:#1A1A1A; color:#FFFFFF; border:none; border-radius: 4px; padding: 28px;">
        <div class="eyebrow" style="margin-bottom:14px; color:#FF921E;">Quote</div>
        <div style="font-family:'Satoshi',sans-serif; font-weight:500; font-size: 20px; line-height:1.35; letter-spacing:-0.01em; color:#FFFFFF;">“A library is small not because it's incomplete, but because that's what makes it usable.”</div>
        <div style="font-family:'Inter',sans-serif; font-size:13px; color:#999; margin-top: 16px;">, Notes to myself, month 03</div>
      </div>

    </div>

    <h3 class="sub-h">Padding rules</h3>
    <ul class="tight">
      <li><strong>Standard card</strong> (content, media body): space-6 (24px).</li>
      <li><strong>Feature card</strong> (stat, quote): space-7 (28px), slightly larger because the typography is heavier.</li>
      <li><strong>Media card image</strong>: zero inner padding on the image; full-bleed crop at 16:9.</li>
    </ul>

    <h3 class="sub-h">Clickable cards</h3>
    <p class="body">If the whole card is clickable, the focus ring goes on the card root (2px uxp-blue-500, 2px offset), the title becomes the link, the rest of the card carries aria-hidden="true" for screen readers, and hover lifts elevation from 1 to 2. Internal interactive elements stop propagation. Cards within cards do not exist.</p>

    <h3 class="sub-h">When a card is wrong</h3>
    <p class="body">When the content is one item. A single featured piece doesn't need a card, it's just section content. When the card is decorative, borders around static text to make it feel “designed” are a tell. When the card is hiding poor copy. Cards are containers; they don't make weak content stronger. They just make weak content look more deliberate, which is worse.</p>
  </div>
</section>
<section id="modal" style="padding: 128px 40px 96px">
  <div style="max-width: 880px; margin: 0 auto;">
    <div style="display:flex; align-items:baseline; gap:16px; margin-bottom: 32px;">
      <span class="num">13 / 18</span>
      <span class="eyebrow">Component · Modal</span>
      <span class="section-divider"></span>
    </div>
    <h2 class="section-h">Modal</h2>
    <p class="lead">Three sizes, sm, md, lg, covering confirmations, forms, and rich content. Modals are interruptions. The component is shaped around making interruptions worth it.</p>

    <h3 class="sub-h">Anatomy</h3>
    <div class="well" style="padding: 40px; margin: 16px 0;">
      <div style="background: rgba(26,26,26,0.45); border-radius: 4px; padding: 32px; position:relative;">
        <div style="background:#FFFFFF; border-radius: 4px; box-shadow: 0 12px 24px rgba(26,26,26,0.1), 0 32px 64px rgba(26,26,26,0.12); max-width: 480px; margin: 0 auto; overflow:hidden;">
          <div style="padding: 24px 24px 0 24px; display:flex; align-items:flex-start; justify-content:space-between; gap: 16px;">
            <div>
              <div class="eyebrow" style="margin-bottom: 8px;">Confirm</div>
              <div style="font-family:'Satoshi',sans-serif; font-weight:700; font-size: 22px; line-height:1.2; letter-spacing:-0.015em; color:#1A1A1A;">Delete this draft?</div>
            </div>
            <button aria-label="Close" style="background:transparent; border:none; padding:6px; cursor:pointer;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="1.75" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"></path></svg>
            </button>
          </div>
          <div style="padding: 16px 24px 24px 24px; font-family:'Inter',sans-serif; font-size: 14px; color:#1A1A1A; line-height:1.6;">
            A confirmation is short. Two sentences, two actions: keep the work, or proceed.
          </div>
          <div style="padding: 16px 24px; background:#FCFCFA; border-top: 1px solid #EFEFEC; display:flex; gap: 12px; justify-content:flex-end;">
            <button style="font-family:'Inter',sans-serif; font-weight:600; font-size: 14px; color:#1A1A1A; background:transparent; border:none; padding: 9px 16px; border-radius:4px;">Keep editing</button>
            <button style="font-family:'Inter',sans-serif; font-weight:600; font-size: 14px; color:#FFF; background:#E5484D; border:none; padding: 9px 18px; border-radius:4px;">Delete</button>
          </div>
        </div>
      </div>
      <div style="display:grid; grid-template-columns: repeat(2, 1fr); gap: 8px 32px; margin-top: 24px; font-size: 12px; color:#666;">
        <div>1. Overlay, ink-900 at 45 percent</div>
        <div>2. Container, ink-0, radius-1, elevation-4</div>
        <div>3. Header, eyebrow plus title plus close</div>
        <div>4. Body, 14 Inter, max 60ch</div>
        <div>5. Footer, bg-muted, actions right-aligned</div>
        <div>6. Close affordance, always top-right</div>
      </div>
    </div>

    <h3 class="sub-h">Sizes</h3>
    <ul class="tight">
      <li><strong>sm</strong>, 400px max-width. Confirmations. One sentence body, two actions.</li>
      <li><strong>md</strong>, 560px max-width. Forms that fit a short flow on a single screen.</li>
      <li><strong>lg</strong>, 800px max-width. Rich content that the user reads inside the overlay.</li>
    </ul>

    <h3 class="sub-h">Behavior</h3>
    <p class="body"><strong>Focus trap.</strong> Tab cycles inside the modal, Shift Tab cycles back. Focus moves to the first focusable element on open (the close button), and returns to the trigger on close. <strong>ESC dismisses.</strong> Always. <strong>Click outside dismisses</strong> for sm and md, but not for lg. If a user is reading a rich modal, an accidental click on the overlay should not lose their scroll. Body scroll is locked while the modal is open. The modal owns the viewport.</p>

    <h3 class="sub-h">When a modal is wrong</h3>
    <p class="body">Multi-step flows. If a task has more than two screens it belongs on a page with a URL. Modals do not survive a browser reload, the user loses their work. A two-step form is a modal; a five-step application is a page. Every step has a URL. The friction of clicking next is much smaller than the friction of getting lost inside a stack of modal screens.</p>
    <p class="body">Other wrong moments: warning the user about something they are not currently doing (use an inline banner), confirming an action they took thirty seconds ago (use a toast), upselling anything (use a section).</p>

    <h3 class="sub-h">Accessibility</h3>
    <ul class="tight">
      <li>role="dialog" with aria-modal="true" and an aria-labelledby pointing at the title.</li>
      <li>Background content carries inert on supported browsers, aria-hidden as a fallback.</li>
      <li>Focus return is handled in JS, not relying on browser default, because the trigger may have unmounted.</li>
    </ul>
  </div>
</section>
<section id="search" style="padding: 128px 40px 96px">
  <div style="max-width: 880px; margin: 0 auto;">
    <div style="display:flex; align-items:baseline; gap:16px; margin-bottom: 32px;">
      <span class="num">14 / 18</span>
      <span class="eyebrow">Component, Search bar</span>
      <span class="section-divider"></span>
    </div>
    <h2 class="section-h">Search bar</h2>
    <p class="lead">A search bar is an input plus a contract. The contract: type, see suggestions, choose, refine with filter chips. The component is the input. The rest is rules.</p>

    <h3 class="sub-h">Anatomy</h3>
    <div class="surface" style="padding: 32px; margin-bottom: 18px;">
      <div style="position:relative;">
        <input type="text" placeholder="Search by name, skill, or topic" value="design systems" style="font-family:'Inter',sans-serif; font-size:15px; color:#1A1A1A; background:#FFFFFF; border:1.5px solid #EFEFEC; padding: 14px 14px 14px 44px; border-radius: 4px; width:100%; outline:none;">
        <svg style="position:absolute; left:14px; top:50%; transform:translateY(-50%);" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 21l-4.35-4.35M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"></path></svg>
        <button aria-label="Clear" style="position:absolute; right:10px; top:50%; transform:translateY(-50%); background:#F7F7F5; border:none; width:24px; height:24px; border-radius:50%; cursor:pointer; display:flex; align-items:center; justify-content:center;">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2.5" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"></path></svg>
        </button>
      </div>
      <div style="display:flex; flex-wrap:wrap; gap: 8px; margin-top: 16px;">
        <span style="font-family:'Inter',sans-serif; font-size: 13px; padding: 6px 12px; border-radius:999px; background:#1A1A1A; color:#FFF; display:inline-flex; align-items:center; gap: 6px;">Recent <button style="background:transparent; border:none; padding:0; color:#FFF; cursor:pointer; font-size: 14px; line-height: 1; margin-left:2px;">x</button></span>
        <span style="font-family:'Inter',sans-serif; font-size: 13px; padding: 6px 12px; border-radius:999px; background:#1A1A1A; color:#FFF; display:inline-flex; align-items:center; gap: 6px;">Tagged: foundations <button style="background:transparent; border:none; padding:0; color:#FFF; cursor:pointer; font-size: 14px; line-height: 1; margin-left:2px;">x</button></span>
        <span style="font-family:'Inter',sans-serif; font-size: 13px; padding: 6px 12px; border-radius:999px; background:#FFFFFF; color:#1A1A1A; border:1px solid #EFEFEC; cursor:pointer;">+ Add filter</span>
      </div>
      <div style="margin-top: 18px; font-family:'JetBrains Mono',monospace; font-size: 11px; color:#666;">12 results, sorted by relevance.</div>
    </div>

    <h3 class="sub-h">States</h3>
    <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
      <div class="surface" style="padding:18px;"><div class="mono" style="font-size:10px; color:#666; margin-bottom:8px;">EMPTY</div><div style="display:flex; align-items:center; gap:10px; padding: 10px 14px; border:1.5px solid #EFEFEC; border-radius:4px; color:#666; font-size:14px;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="1.75"><path d="M21 21l-4.35-4.35M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"></path></svg> Search</div></div>
      <div class="surface" style="padding:18px;"><div class="mono" style="font-size:10px; color:#666; margin-bottom:8px;">TYPING with suggestions</div><div style="border:1.5px solid #00A7FF; border-radius:4px; padding: 10px 14px; font-size:14px; color:#1A1A1A; background:#FFF;">design syst</div><div style="margin-top:4px; background:#FFF; border:1px solid #EFEFEC; border-radius:4px; padding:6px 0;"><div style="padding: 6px 14px; font-size:13px; color:#1A1A1A; background:#F7F7F5;">design <strong>systems</strong></div><div style="padding: 6px 14px; font-size:13px; color:#1A1A1A;">design <strong>system foundations</strong></div></div></div>
      <div class="surface" style="padding:18px;"><div class="mono" style="font-size:10px; color:#666; margin-bottom:8px;">NO RESULTS</div><div style="padding: 16px; border:1px dashed #EFEFEC; border-radius:4px; text-align:center; color:#666; font-size:13px;"><div style="color:#1A1A1A; font-weight:600; margin-bottom: 4px;">Nothing matches "xr haptics"</div>Try a broader term, or clear filters.</div></div>
      <div class="surface" style="padding:18px;"><div class="mono" style="font-size:10px; color:#666; margin-bottom:8px;">LOADING</div><div style="display:flex; align-items:center; gap:10px; padding: 10px 14px; border:1.5px solid #EFEFEC; border-radius:4px; color:#1A1A1A; font-size:14px;"><span style="display:inline-block; width:12px; height:12px; border:2px solid #00A7FF; border-top-color:transparent; border-radius:50%;"></span> Looking up matches.</div></div>
    </div>

    <h3 class="sub-h">Keyboard model</h3>
    <ul class="tight">
      <li>Type, the suggestions list opens.</li>
      <li><kbd>down arrow</kbd> and <kbd>up arrow</kbd> walk suggestions. <kbd>Enter</kbd> picks. <kbd>Esc</kbd> clears.</li>
      <li><kbd>/</kbd> from anywhere on the page focuses the search input.</li>
      <li>Filter chips remove with <kbd>Backspace</kbd> when the search input is empty.</li>
    </ul>

    <h3 class="sub-h">Accessibility</h3>
    <p class="body">The input is the search role with a labelled live region for result counts. Announces "12 results loaded" on every new query, debounced to once per 400ms so the user is not interrupted mid-search. Suggestions are an aria-listbox attached via aria-controls.</p>
  </div>
</section>
<section id="pagination" style="padding: 128px 40px 96px">
  <div style="max-width: 880px; margin: 0 auto;">
    <div style="display:flex; align-items:baseline; gap:16px; margin-bottom: 32px;">
      <span class="num">15 / 18</span>
      <span class="eyebrow">Component, Pagination</span>
      <span class="section-divider"></span>
    </div>
    <h2 class="section-h">Pagination</h2>
    <p class="lead">Three patterns: numbered, load more, infinite. The component is really a decision rule about which one fits the content.</p>

    <h3 class="sub-h">Patterns</h3>
    <div class="surface" style="padding: 28px; margin-bottom: 18px;">
      <div class="eyebrow" style="margin-bottom: 14px;">Numbered</div>
      <div style="display:flex; gap: 4px; align-items:center;">
        <button style="font-family:'Inter',sans-serif; font-weight:500; font-size:13px; color:#666; background:#FFF; border:1px solid #EFEFEC; padding: 8px 12px; border-radius:4px;">&lt;</button>
        <button style="font-family:'Inter',sans-serif; font-weight:600; font-size:13px; color:#FFF; background:#1A1A1A; border:none; padding: 8px 12px; border-radius:4px;">1</button>
        <button style="font-family:'Inter',sans-serif; font-weight:500; font-size:13px; color:#1A1A1A; background:#FFF; border:1px solid #EFEFEC; padding: 8px 12px; border-radius:4px;">2</button>
        <button style="font-family:'Inter',sans-serif; font-weight:500; font-size:13px; color:#1A1A1A; background:#FFF; border:1px solid #EFEFEC; padding: 8px 12px; border-radius:4px;">3</button>
        <span style="font-family:'Inter',sans-serif; font-size:13px; color:#666; padding: 0 6px;">...</span>
        <button style="font-family:'Inter',sans-serif; font-weight:500; font-size:13px; color:#1A1A1A; background:#FFF; border:1px solid #EFEFEC; padding: 8px 12px; border-radius:4px;">12</button>
        <button style="font-family:'Inter',sans-serif; font-weight:500; font-size:13px; color:#1A1A1A; background:#FFF; border:1px solid #EFEFEC; padding: 8px 12px; border-radius:4px;">&gt;</button>
        <span style="font-family:'JetBrains Mono',monospace; font-size:11px; color:#666; margin-left: 16px;">Page 1 of 12</span>
      </div>
    </div>

    <div class="surface" style="padding: 28px; margin-bottom: 18px; text-align:center;">
      <div class="eyebrow" style="margin-bottom: 14px; text-align:left;">Load more</div>
      <button style="font-family:'Inter',sans-serif; font-weight:600; font-size:14px; color:#1A1A1A; background:#FFF; border:1.5px solid #1A1A1A; padding: 12px 28px; border-radius:4px; cursor:pointer;">Show 12 more</button>
      <div style="font-family:'JetBrains Mono',monospace; font-size:11px; color:#666; margin-top: 12px;">Showing 12 of 84</div>
    </div>

    <div class="surface" style="padding: 28px;">
      <div class="eyebrow" style="margin-bottom: 14px;">Infinite</div>
      <div style="display:flex; align-items:center; gap: 10px; color:#666; font-size:13px;">
        <span style="display:inline-block; width:12px; height:12px; border:2px solid #00A7FF; border-top-color:transparent; border-radius:50%;"></span>
        Loading more results.
      </div>
      <div style="font-family:'JetBrains Mono',monospace; font-size:11px; color:#666; margin-top: 12px;">Aria live announces 20 new results loaded.</div>
    </div>

    <h3 class="sub-h">Decision logic</h3>
    <ul class="tight">
      <li><strong>Numbered</strong>, for tables and lists where the user needs to deep link or compare position. The URL carries ?page=3.</li>
      <li><strong>Load more</strong>, for content lists with a clear end. Manual, predictable, fast at the end.</li>
      <li><strong>Infinite</strong>, for feeds with no meaningful end. Pair with a sticky back-to-top after three pages.</li>
    </ul>

    <h3 class="sub-h">Mobile collapse and accessibility</h3>
    <p class="body">On uxp-bp-sm, numbered collapses to "&lt; 3 / 12 &gt;". The middle is a tappable input, the user jumps. Live regions announce "Page 3 of 12" on change and "20 more results loaded" for load more and infinite. The load more button keeps focus on itself after click so keyboard users stay in place. scrollIntoView is never called.</p>
  </div>
</section>
<section id="accordion" style="padding: 128px 40px 96px">
  <div style="max-width: 880px; margin: 0 auto;">
    <div style="display:flex; align-items:baseline; gap:16px; margin-bottom: 32px;">
      <span class="num">16 / 18</span>
      <span class="eyebrow">Component, Accordion</span>
      <span class="section-divider"></span>
    </div>
    <h2 class="section-h">Accordion</h2>
    <p class="lead">Single expand for FAQ-style content, multi expand for dense lists where the user is comparing panels. One component, one HTML details tree under the hood, styled into the system.</p>

    <h3 class="sub-h">Anatomy</h3>
    <div class="surface" style="padding: 0; margin-bottom: 18px; overflow:hidden;">
      <details open="" style="border-bottom: 1px solid #EFEFEC;">
        <summary style="list-style:none; padding: 20px 24px; cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:16px;">
          <div>
            <div class="mono" style="font-size:10px; color:#0078B8; margin-bottom: 4px;">SECTION 01</div>
            <div style="font-family:'Satoshi',sans-serif; font-weight:600; font-size: 18px; color:#1A1A1A;">When does a card become a section?</div>
          </div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" style="transform: rotate(180deg);"><path d="M6 9l6 6 6-6"></path></svg>
        </summary>
        <div style="padding: 0 24px 24px 24px; font-size: 14px; color:#1A1A1A; line-height:1.65;">
          When the content earns the visual weight of the surrounding page, it stops being a card and starts being a section. A card with eight items in it is a section that has not noticed it is a section.
        </div>
      </details>
      <details style="border-bottom: 1px solid #EFEFEC;">
        <summary style="list-style:none; padding: 20px 24px; cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:16px;">
          <div>
            <div class="mono" style="font-size:10px; color:#0078B8; margin-bottom: 4px;">SECTION 02</div>
            <div style="font-family:'Satoshi',sans-serif; font-weight:600; font-size: 18px; color:#1A1A1A;">Why two faces are not enough</div>
          </div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"></path></svg>
        </summary>
      </details>
      <details>
        <summary style="list-style:none; padding: 20px 24px; cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:16px;">
          <div>
            <div class="mono" style="font-size:10px; color:#0078B8; margin-bottom: 4px;">SECTION 03</div>
            <div style="font-family:'Satoshi',sans-serif; font-weight:600; font-size: 18px; color:#1A1A1A;">The threshold for a system</div>
          </div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"></path></svg>
        </summary>
      </details>
    </div>

    <h3 class="sub-h">Animation, tokenized</h3>
    <p class="body">Duration uxp-motion-duration-md, 280ms. Easing uxp-motion-ease-out-expo, cubic-bezier(0.22, 1, 0.36, 1). The panel uses grid-template-rows animation (0fr to 1fr) so the height animates without measuring DOM. The chevron rotates 180 degrees on the same curve. Both share the token, change it once and everything follows.</p>

    <h3 class="sub-h">Single vs multi expand</h3>
    <ul class="tight">
      <li><strong>Single</strong>, FAQs. Opening one closes the others. Reduces overwhelm on long lists.</li>
      <li><strong>Multi</strong>, dense settings or long syllabi. The user compares panels.</li>
    </ul>

    <h3 class="sub-h">Accordion vs tabs vs separate page</h3>
    <p class="body">If the content is parallel and short, tabs. If parallel and long, accordion. If the user might link to it from outside, a page. The clearest test: does each panel deserve its own URL? If yes, it is a page. If no, accordion is the right enclosure.</p>
  </div>
</section>
<section id="checkbox" style="padding: 128px 40px 96px">
  <div style="max-width: 880px; margin: 0 auto;">
    <div style="display:flex; align-items:baseline; gap:16px; margin-bottom: 32px;">
      <span class="num">17 / 18</span>
      <span class="eyebrow">Component, Checkbox</span>
      <span class="section-divider"></span>
    </div>
    <h2 class="section-h">Checkbox</h2>
    <p class="lead">Small component, full attention. Most of the system's accessibility decisions ended up showing up here first, then propagated to the other input components.</p>

    <h3 class="sub-h">States</h3>
    <div class="surface" style="padding: 32px; display:grid; grid-template-columns: repeat(7, 1fr); gap: 20px; margin-bottom: 16px; align-items:center;">
      <div style="text-align:center;"><div style="width:20px; height:20px; border:1.5px solid #EFEFEC; border-radius: 3px; background:#FFF; margin: 0 auto;"></div><div class="mono" style="font-size:9px; color:#666; margin-top:8px;">UNCHECKED</div></div>
      <div style="text-align:center;"><div style="width:20px; height:20px; border:none; border-radius: 3px; background:#00A7FF; margin: 0 auto; display:flex; align-items:center; justify-content:center;"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"></path></svg></div><div class="mono" style="font-size:9px; color:#666; margin-top:8px;">CHECKED</div></div>
      <div style="text-align:center;"><div style="width:20px; height:20px; border:none; border-radius: 3px; background:#00A7FF; margin: 0 auto; display:flex; align-items:center; justify-content:center;"><div style="width:10px; height:2px; background:#FFF; border-radius:1px;"></div></div><div class="mono" style="font-size:9px; color:#666; margin-top:8px;">INDETERMINATE</div></div>
      <div style="text-align:center;"><div style="width:20px; height:20px; border:1.5px solid #00A7FF; border-radius: 3px; background:#E6F6FF; margin: 0 auto;"></div><div class="mono" style="font-size:9px; color:#666; margin-top:8px;">HOVER</div></div>
      <div style="text-align:center;"><div style="width:20px; height:20px; border:1.5px solid #EFEFEC; border-radius: 3px; background:#FFF; margin: 0 auto; outline:2px solid #00A7FF; outline-offset:2px;"></div><div class="mono" style="font-size:9px; color:#666; margin-top:8px;">FOCUS</div></div>
      <div style="text-align:center;"><div style="width:20px; height:20px; border:1.5px solid #EFEFEC; border-radius: 3px; background:#F7F7F5; margin: 0 auto;"></div><div class="mono" style="font-size:9px; color:#666; margin-top:8px;">DISABLED</div></div>
      <div style="text-align:center;"><div style="width:20px; height:20px; border:1.5px solid #E5484D; border-radius: 3px; background:#FFF; margin: 0 auto;"></div><div class="mono" style="font-size:9px; color:#666; margin-top:8px;">ERROR</div></div>
    </div>

    <h3 class="sub-h">Label and hit area</h3>
    <p class="body"><strong>The whole row is clickable.</strong> Not just the 20 by 20 square. The label and the row's padding all toggle the checkbox. Hit target ends up around 44 by 44 even though the visual is 20 by 20. This is the single most common a11y fix in legacy forms, I made it the default. Label sits to the right of the box, 12px gap, 14px Inter regular, color uxp-ink-900.</p>

    <h3 class="sub-h">Group behavior, select all</h3>
    <div class="surface" style="padding: 24px; margin-bottom: 16px;">
      <label style="display:flex; align-items:center; gap: 12px; padding: 8px 0; font-family:'Inter',sans-serif; font-size:14px; color:#1A1A1A; cursor:pointer;">
        <div style="width:18px; height:18px; border:none; border-radius:3px; background:#00A7FF; display:flex; align-items:center; justify-content:center;"><div style="width:10px; height:2px; background:#FFF; border-radius:1px;"></div></div>
        <strong style="font-weight:600;">Select all (2 of 4 selected)</strong>
      </label>
      <div style="margin-left: 30px; display:flex; flex-direction:column; gap: 4px;">
        <label style="display:flex; align-items:center; gap: 12px; padding: 6px 0; font-family:'Inter',sans-serif; font-size:14px; color:#1A1A1A; cursor:pointer;">
          <div style="width:18px; height:18px; border:none; border-radius:3px; background:#00A7FF; display:flex; align-items:center; justify-content:center;"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FFF" stroke-width="3"><path d="M5 13l4 4L19 7"></path></svg></div>
          Marketing emails
        </label>
        <label style="display:flex; align-items:center; gap: 12px; padding: 6px 0; font-family:'Inter',sans-serif; font-size:14px; color:#1A1A1A; cursor:pointer;">
          <div style="width:18px; height:18px; border:none; border-radius:3px; background:#00A7FF; display:flex; align-items:center; justify-content:center;"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FFF" stroke-width="3"><path d="M5 13l4 4L19 7"></path></svg></div>
          Product updates
        </label>
        <label style="display:flex; align-items:center; gap: 12px; padding: 6px 0; font-family:'Inter',sans-serif; font-size:14px; color:#666; cursor:pointer;">
          <div style="width:18px; height:18px; border:1.5px solid #EFEFEC; border-radius:3px; background:#FFF;"></div>
          Weekly digest
        </label>
        <label style="display:flex; align-items:center; gap: 12px; padding: 6px 0; font-family:'Inter',sans-serif; font-size:14px; color:#666; cursor:pointer;">
          <div style="width:18px; height:18px; border:1.5px solid #EFEFEC; border-radius:3px; background:#FFF;"></div>
          Event invitations
        </label>
      </div>
    </div>
    <p class="body">The select all parent shows <strong>indeterminate</strong> when some but not all children are checked. Click the parent, toggle all children. Click a child, recompute parent. The pattern is standard, the failures are usually in the visual, I made indeterminate a clear horizontal bar, not a half-fade.</p>

    <h3 class="sub-h">Validation for required groups</h3>
    <p class="body">"Pick at least one" is communicated above the group, not below. Below the group is the destination for error messages, if the rule is up front, errors are easier to interpret. Required group label is space-3 above the first row, error message space-2 below the last.</p>
  </div>
</section>
<section id="table" style="padding: 128px 40px 96px">
  <div style="max-width: 880px; margin: 0 auto;">
    <div style="display:flex; align-items:baseline; gap:16px; margin-bottom: 32px;">
      <span class="num">18 / 18</span>
      <span class="eyebrow">Component, Data table</span>
      <span class="section-divider"></span>
    </div>
    <h2 class="section-h">Data table</h2>
    <p class="lead">The hardest component in the system to get right. A table is two components in a trench coat, a data structure and a layout. The library can standardize the layout. It cannot standardize the data.</p>

    <h3 class="sub-h">Specimen</h3>
    <div class="surface" style="padding: 0; overflow:hidden; margin-bottom: 18px;">
      <div style="padding: 16px 20px; border-bottom: 1px solid #EFEFEC; display:flex; align-items:center; gap: 12px;">
        <div style="font-family:'Satoshi',sans-serif; font-weight:600; font-size: 16px; color:#1A1A1A;">Items</div>
        <span style="font-family:'JetBrains Mono',monospace; font-size: 11px; color:#666;">120</span>
        <div style="flex:1;"></div>
        <div style="position:relative;">
          <input placeholder="Search" style="font-family:'Inter',sans-serif; font-size:13px; color:#1A1A1A; background:#FCFCFA; border:1px solid #EFEFEC; padding: 6px 12px 6px 30px; border-radius: 4px; width: 200px; outline:none;">
          <svg style="position:absolute; left:10px; top:50%; transform:translateY(-50%);" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="1.75"><path d="M21 21l-4.35-4.35M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"></path></svg>
        </div>
        <button style="font-family:'Inter',sans-serif; font-weight:500; font-size: 13px; color:#1A1A1A; background:#FFFFFF; border:1px solid #EFEFEC; padding: 7px 12px; border-radius:4px; cursor:pointer;">Filter</button>
      </div>
      <table style="width:100%; border-collapse: collapse; font-size: 13px;">
        <thead>
          <tr style="text-align:left; background:#FCFCFA;">
            <th style="padding: 12px 20px; font-family:'JetBrains Mono',monospace; font-size: 10px; letter-spacing:0.1em; text-transform:uppercase; color:#666; font-weight:500; width: 40px;"><input type="checkbox" style="accent-color:#00A7FF;"></th>
            <th style="padding: 12px 20px; font-family:'JetBrains Mono',monospace; font-size: 10px; letter-spacing:0.1em; text-transform:uppercase; color:#666; font-weight:500;">Name (sorted)</th>
            <th style="padding: 12px 20px; font-family:'JetBrains Mono',monospace; font-size: 10px; letter-spacing:0.1em; text-transform:uppercase; color:#666; font-weight:500;">Type</th>
            <th style="padding: 12px 20px; font-family:'JetBrains Mono',monospace; font-size: 10px; letter-spacing:0.1em; text-transform:uppercase; color:#666; font-weight:500;">Value</th>
            <th style="padding: 12px 20px; font-family:'JetBrains Mono',monospace; font-size: 10px; letter-spacing:0.1em; text-transform:uppercase; color:#666; font-weight:500;">Status</th>
            <th style="padding: 12px 20px;"></th>
          </tr>
        </thead>
        <tbody style="font-family:'Inter',sans-serif;">
          <tr style="border-top: 1px solid #EFEFEC;">
            <td style="padding: 14px 20px;"><input type="checkbox" style="accent-color:#00A7FF;" checked=""></td>
            <td style="padding: 14px 20px; color:#1A1A1A; font-weight:500;">uxp-color-action-primary</td>
            <td style="padding: 14px 20px; color:#1A1A1A;">semantic</td>
            <td style="padding: 14px 20px; color:#1A1A1A; font-family:'JetBrains Mono',monospace;">#00A7FF</td>
            <td style="padding: 14px 20px;"><span style="font-family:'Inter',sans-serif; font-size:11px; padding: 2px 8px; border-radius: 999px; background:#E6F6FF; color:#0078B8;">ACTIVE</span></td>
            <td style="padding: 14px 20px; text-align:right;"><a href="#" style="color:#0078B8; text-decoration:none; font-weight:500;">View</a></td>
          </tr>
          <tr style="border-top: 1px solid #EFEFEC;">
            <td style="padding: 14px 20px;"><input type="checkbox" style="accent-color:#00A7FF;"></td>
            <td style="padding: 14px 20px; color:#1A1A1A; font-weight:500;">uxp-space-section-lg</td>
            <td style="padding: 14px 20px; color:#1A1A1A;">primitive</td>
            <td style="padding: 14px 20px; color:#1A1A1A; font-family:'JetBrains Mono',monospace;">128px</td>
            <td style="padding: 14px 20px;"><span style="font-family:'Inter',sans-serif; font-size:11px; padding: 2px 8px; border-radius: 999px; background:#E8F5EE; color:#1E6B3F;">STABLE</span></td>
            <td style="padding: 14px 20px; text-align:right;"><a href="#" style="color:#0078B8; text-decoration:none; font-weight:500;">View</a></td>
          </tr>
          <tr style="border-top: 1px solid #EFEFEC;">
            <td style="padding: 14px 20px;"><input type="checkbox" style="accent-color:#00A7FF;"></td>
            <td style="padding: 14px 20px; color:#1A1A1A; font-weight:500;">uxp-motion-duration-md</td>
            <td style="padding: 14px 20px; color:#1A1A1A;">semantic</td>
            <td style="padding: 14px 20px; color:#1A1A1A; font-family:'JetBrains Mono',monospace;">280ms</td>
            <td style="padding: 14px 20px;"><span style="font-family:'Inter',sans-serif; font-size:11px; padding: 2px 8px; border-radius: 999px; background:#FEF3D7; color:#8A5A00;">DRAFT</span></td>
            <td style="padding: 14px 20px; text-align:right;"><a href="#" style="color:#0078B8; text-decoration:none; font-weight:500;">View</a></td>
          </tr>
          <tr style="border-top: 1px solid #EFEFEC;">
            <td style="padding: 14px 20px;"><input type="checkbox" style="accent-color:#00A7FF;"></td>
            <td style="padding: 14px 20px; color:#1A1A1A; font-weight:500;">uxp-elevation-3</td>
            <td style="padding: 14px 20px; color:#1A1A1A;">semantic</td>
            <td style="padding: 14px 20px; color:#1A1A1A; font-family:'JetBrains Mono',monospace;">popover</td>
            <td style="padding: 14px 20px;"><span style="font-family:'Inter',sans-serif; font-size:11px; padding: 2px 8px; border-radius: 999px; background:#E8F5EE; color:#1E6B3F;">STABLE</span></td>
            <td style="padding: 14px 20px; text-align:right;"><a href="#" style="color:#0078B8; text-decoration:none; font-weight:500;">View</a></td>
          </tr>
        </tbody>
      </table>
      <div style="padding: 14px 20px; background:#1A1A1A; color:#FFF; display:flex; align-items:center; gap: 16px;">
        <span style="font-family:'JetBrains Mono',monospace; font-size: 11px;">1 SELECTED</span>
        <button style="font-family:'Inter',sans-serif; font-weight:500; font-size: 13px; color:#FFF; background:transparent; border:1px solid rgba(255,255,255,0.2); padding: 6px 12px; border-radius: 4px; cursor:pointer;">Tag</button>
        <button style="font-family:'Inter',sans-serif; font-weight:500; font-size: 13px; color:#FFF; background:transparent; border:1px solid rgba(255,255,255,0.2); padding: 6px 12px; border-radius: 4px; cursor:pointer;">Export</button>
        <div style="flex:1;"></div>
        <button style="font-family:'Inter',sans-serif; font-weight:500; font-size: 13px; color:#E5484D; background:transparent; border:1px solid rgba(229,72,77,0.4); padding: 6px 12px; border-radius: 4px; cursor:pointer;">Deprecate</button>
      </div>
    </div>

    <h3 class="sub-h">Column types</h3>
    <ul class="tight">
      <li><strong>Text</strong>, left aligned, Inter regular, primary color, optional weight 500 for the row identifier.</li>
      <li><strong>Number</strong>, right aligned, mono (JetBrains 13/400). Right align is non-negotiable, numbers compare visually only when their decimal places line up.</li>
      <li><strong>Status badge</strong>, pill with optional leading dot. Background uses the status semantic token's 50 ramp, text uses its 700.</li>
      <li><strong>Action</strong>, text link, right aligned. Icon-only actions only in a row-end overflow menu.</li>
      <li><strong>Selection</strong>, checkbox column, fixed 40px width, parent shows indeterminate when partial.</li>
    </ul>

    <h3 class="sub-h">Density variants</h3>
    <p class="body">Three densities: <strong>compact</strong> (40px rows), <strong>default</strong> (52px), <strong>comfortable</strong> (64px), controlled by a segmented control in the table toolbar. I argued with myself about defaults, default is default.</p>

    <h3 class="sub-h">Responsive, the table breaks first</h3>
    <p class="body">On uxp-bp-md the table scrolls horizontally inside its own container, sticky first column carrying the identifier. On uxp-bp-sm and below the table re-renders as stacked cards, one card per row, with column labels as inline keys. The stacked view loses sortability (there is no good way to sort a card stack), so on small screens the sort controls are hidden and a "Sort by" select takes their place.</p>

    <h3 class="sub-h">The honest tradeoff</h3>
    <p class="body">The library ships the chrome: toolbar, selection model, density toggle, responsive collapse. Column definitions live in the consuming screen as a config array. That is the seam. Without it the table tried to be everything and shipped six months late, with it, the table is a workable surface that I can extend per screen.</p>
  </div>
</section>
<section id="part-3" class="divider" style="padding: 128px 40px">
  <div style="max-width: 880px; margin: 0 auto">
    <div class="eyebrow" style="FFF; margin-bottom: 24px">Part Three, after the build</div>
    <h2 class="display" style="font-size: clamp(48px, 7vw, 96px); font-weight:700; letter-spacing:-0.03em; line-height:1; margin:0; FFF">
      A system is not shipped <span style="color:#666">when it is built.</span>
    </h2>
    <p class="lead" style="margin-top: 24px; max-width: 720px">
      It is shipped when I start reaching for it instead of opening a blank file. That part took longer than the build did.
    </p>
  </div>
</section>
<section id="adoption" style="padding: 128px 40px 96px">
  <div style="max-width: 880px; margin: 0 auto;">
    <div style="display:flex; align-items:baseline; gap:16px; margin-bottom: 32px;">
      <span class="num">CLOSE / 01</span>
      <span class="eyebrow">Adoption</span>
      <span class="section-divider"></span>
    </div>
    <h2 class="section-h">Adoption</h2>
    <p class="lead">Solo, the question of adoption is honest: am I using my own system, or am I drifting back into one-off decisions every time I open a new file? Three things kept me honest.</p>

    <h3 class="sub-h">A documentation page that mirrors the tokens</h3>
    <p class="body">I built a single internal documentation page on the system itself. Every component page reads in the same order as this case study: anatomy, variants, sizes, states, usage, accessibility, tokens, specimen. Writing the docs is what surfaces the holes, the moment I cannot describe a usage rule cleanly, the component is not done.</p>

    <h3 class="sub-h">A Figma library that mirrors code</h3>
    <p class="body">Same component names, same prop names, same variant names. If the code button has variant primary, the Figma component has the same. I do not let the two drift, they drift the moment I add a Figma-only variant for a single mock. New variants in Figma go through the three-question gate just as code does.</p>

    <h3 class="sub-h">Migration screen by screen</h3>
    <p class="body">I did not migrate everything at once. I picked the screen that had hurt the most to maintain, rebuilt it on the system, and shipped it. Then the next worst screen. Then the next. The slowest screen to migrate was always the one where I had been most creative with one-off layout, those were the screens that needed to lose a little personality and gain a system.</p>

    <p class="body" style="color:#666;">There is no team to evangelize to. There is just me, this case study, and the file I am about to open next. Adoption for a solo system is the moment that file feels like an extension of the library, not a place to redesign it.</p>
  </div>
</section>
<section id="changed" style="padding: 128px 40px 96px">
  <div style="max-width: 880px; margin: 0 auto;">
    <div style="display:flex; align-items:baseline; gap:16px; margin-bottom: 32px;">
      <span class="num">CLOSE / 02</span>
      <span class="eyebrow">What changed</span>
      <span class="section-divider"></span>
    </div>
    <h2 class="section-h">What changed.</h2>

    <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 24px 0 32px;">
      <div class="surface" style="padding: 32px;">
        <div class="display" style="font-size: 64px; font-weight:800; letter-spacing:-0.03em; line-height:1;"><span class="grad-text">1 day</span></div>
        <div style="font-family:'Inter',sans-serif; font-weight:500; font-size:14px; color:#1A1A1A; margin-top: 16px;">to ship a new screen</div>
        <div style="font-family:'JetBrains Mono',monospace; font-size:11px; color:#666; margin-top:4px;">Was a week. Four days returned.</div>
      </div>
      <div class="surface" style="padding: 32px;">
        <div class="display" style="font-size: 64px; font-weight:800; letter-spacing:-0.03em; line-height:1; color:#1A1A1A;">0</div>
        <div style="font-family:'Inter',sans-serif; font-weight:500; font-size:14px; color:#1A1A1A; margin-top: 16px;">re-decided patterns per screen</div>
        <div style="font-family:'JetBrains Mono',monospace; font-size:11px; color:#666; margin-top:4px;">The system carries them now.</div>
      </div>
      <div class="surface" style="padding: 32px;">
        <div class="display" style="font-size: 64px; font-weight:800; letter-spacing:-0.03em; line-height:1; color:#1A1A1A;">1</div>
        <div style="font-family:'Inter',sans-serif; font-weight:500; font-size:14px; color:#1A1A1A; margin-top: 16px;">visual identity across every surface</div>
        <div style="font-family:'JetBrains Mono',monospace; font-size:11px; color:#666; margin-top:4px;">Was three blues, two gradients.</div>
      </div>
    </div>

    <p class="body">Numbers I trust because I watched them happen. A new screen now takes a day, with the qualification that "a day" means a screen composed from existing components with new copy and new imagery, a screen with a custom interactive module still takes the rest of the week. That is the right number, not the friction.</p>

    <p class="body">The harder-to-measure change: <strong>visual consistency.</strong> The fracture I described at the top of this case study is the kind of inconsistency that does not show up in a metric, but it does show up the moment a designer opens two files side by side. There is no longer a "wrong" version of the gradient on a screen. There is no longer three blues. That is unglamorous, and it is the actual outcome.</p>

    <p class="body" style="color:#666;">What did not change as much as I hoped: the rate at which I want to add new components. Every interesting screen still tempts me to invent something. The system slows that down, it has not stopped it.</p>
  </div>
</section>
<section id="differently" style="padding: 128px 40px 96px">
  <div style="max-width: 880px; margin: 0 auto;">
    <div style="display:flex; align-items:baseline; gap:16px; margin-bottom: 32px;">
      <span class="num">CLOSE / 03</span>
      <span class="eyebrow">What I would do differently</span>
      <span class="section-divider"></span>
    </div>
    <h2 class="section-h">What I would do <span style="color:#666;">differently.</span></h2>

    <h3 class="sub-h">Accessibility tokens in v1, not as a layer on top</h3>
    <p class="body">Focus rings, contrast pairs, motion-reduced variants, prefers-reduced-transparency. I added these in v1.1 as a separate layer, and every component had to be revisited. Three weeks of rework I would have spent up front, gladly, if I had known.</p>

    <h3 class="sub-h">The icon set, over-scoped</h3>
    <p class="body">I shipped 60 icons in v1 expecting them all to land. 22 actually got used. The other 38 sat in the library, came up in icon picker searches, and made the picker harder to scan. v1.1 trimmed back to 36. The lesson, the icon set is a part of the system that resists the three-question gate because adding an icon feels free. It is not free, it costs attention.</p>

    <h3 class="sub-h">Some components shipped before their usage rules were clear</h3>
    <p class="body">I shipped the card variants before I had a clear rule for when a card was the right enclosure, and shipped the modal before I had decided what belonged inside one vs on a page. The components themselves were fine, the usage stories were not. People (me, mostly) reached for them in places that did not deserve them. Now the docs page is part of the ship gate. If I cannot write the "when not to use" section, the component is not ready.</p>
  </div>
</section>
<section id="next" style="padding: 128px 40px 96px">
  <div style="max-width: 880px; margin: 0 auto;">
    <div style="display:flex; align-items:baseline; gap:16px; margin-bottom: 32px;">
      <span class="num">CLOSE / 04</span>
      <span class="eyebrow">What is next</span>
      <span class="section-divider"></span>
    </div>
    <h2 class="section-h">What is <span class="grad-text">next.</span></h2>

    <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin: 24px 0;">
      <div class="surface" style="padding: 28px;">
        <div class="eyebrow" style="color:#0078B8; margin-bottom:10px;">v 1.2, motion tokens</div>
        <div style="font-family:'Satoshi',sans-serif; font-weight:600; font-size: 20px; line-height:1.2; letter-spacing:-0.015em; color:#1A1A1A;">A motion language, not free easings</div>
        <p class="body" style="margin-top: 12px; margin-bottom: 0; font-size: 14px;">Six tokenized durations, four easings, two motion-reduced fallbacks. Every animated component speaks the same vocabulary.</p>
      </div>
      <div class="surface" style="padding: 28px;">
        <div class="eyebrow" style="color:#922AA8; margin-bottom:10px;">v 1.3, dark mode</div>
        <div style="font-family:'Satoshi',sans-serif; font-weight:600; font-size: 20px; line-height:1.2; letter-spacing:-0.015em; color:#1A1A1A;">Re-tune every stop in the ramp</div>
        <p class="body" style="margin-top: 12px; margin-bottom: 0; font-size: 14px;">Deferred from v1 for a reason. The gradient becomes muddy on dark, every secondary needs its own re-balance, status colors need to stay psychologically equal.</p>
      </div>
      <div class="surface" style="padding: 28px;">
        <div class="eyebrow" style="color:#B86405; margin-bottom:10px;">v 1.4, content / voice layer</div>
        <div style="font-family:'Satoshi',sans-serif; font-weight:600; font-size: 20px; line-height:1.2; letter-spacing:-0.015em; color:#1A1A1A;">Voice as a layer of the system</div>
        <p class="body" style="margin-top: 12px; margin-bottom: 0; font-size: 14px;">Tone, sentence rhythm, casing, when to use "you" vs "I", how numbers get rendered. Writing is not currently in the system. It belongs there.</p>
      </div>
    </div>

    <p class="body" style="color:#666;">A design system is never finished. It is a working surface, its job is to be useful, then to keep being useful, which means it has to keep changing. The components in this case study look like a settled product because they ship. The system itself is mid-sentence.</p>
  </div>
</section>
<section id="part-4" class="divider" style="padding: 96px 40px 64px">
  <div style="max-width: 880px; margin: 0 auto; border-top: 1px solid #1A1A1A; padding-top: 48px">
    <div class="eyebrow" style="margin-bottom: 32px">Colophon</div>
    <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap: 40px; font-family:'Inter',sans-serif; font-size: 13px; line-height: 1.7">
      <div>
        <div class="annot" style="margin-bottom: 6px">Author</div>
        <div style="color:#1A1A1A">Shanica Roy</div>
        <div style="color:#666">Solo work. The system, every decision, every component.</div>
      </div>
      <div>
        <div class="annot" style="margin-bottom: 6px">Setting</div>
        <div style="color:#1A1A1A">Set in Satoshi, Inter, JetBrains Mono.</div>
        <div style="color:#666">Display, body, mono.</div>
      </div>
      <div>
        <div class="annot" style="margin-bottom: 6px">Version</div>
        <div style="color:#1A1A1A">Case study v 1.0</div>
        <div style="color:#666">Spring 2026, against system v 1.1.</div>
      </div>
    </div>
    <div style="margin-top: 48px; display:flex; justify-content:space-between; align-items:center; font-family:'JetBrains Mono',monospace; font-size: 10px; letter-spacing:0.14em; text-transform:uppercase; color:#666">
      <div>End of case study</div>
      <div>UXPective Design System</div>
    </div>
  </div>
</section>
  </main>
</div>`;
