// ---------------------------------------------------------------------------
// CASE CHECK CASE STUDY. Uses the shared case template (vmwareCaseStyles,
// scoped under .vmw). Every claim here is bounded by what is verifiably real:
// the live product at casecheck.uxpective.com, the public repo, two of six
// agent steps on real infrastructure, and an evaluation that is designed and
// locked but not yet run. Nothing beyond that may be stated as done.
// ---------------------------------------------------------------------------

export const caseCheckBody = `
  <div class="progress" aria-hidden="true"></div>
  <aside>
    <a class="backlink" href="/">&larr; Shanica Roy</a>
    <div class="kicker">Case Study</div>
    <details class="secnav" open>
      <summary>Sections</summary>
      <nav aria-label="Sections">
        <ul class="toc">
          <li><a href="#overview">Case Check</a></li>
          <li><a href="#problem">The problem I was solving</a></li>
          <li><a href="#skeleton">Skeleton before UI</a></li>
          <li><a href="#rubric">The rubric is the product</a></li>
          <li><a href="#agent">The agent, and why six steps</a></li>
          <li><a href="#evaluation">Evaluation</a></li>
          <li><a href="#frontend">Frontend and motion</a></li>
          <li><a href="#decisions">The decisions I drove</a></li>
          <li><a href="#split">What I did vs what the AI did</a></li>
        </ul>
      </nav>
    </details>
  </aside>

  <main>
    <div class="eyebrow">UXPective &middot; Applied AI &middot; Solo build</div>
    <h1>The review before the review</h1>
    <p class="standfirst">Case Check is a portfolio review agent with one narrow job: read a designer's case study, find its weakest part, and say plainly what it could not judge. I designed and built it alone, and it is live. This page is about how an AI product gets made when a designer owns every layer of it.</p>
    <div class="factline">
      <span><b>Role</b> &nbsp;Sole designer and builder</span>
      <span><b>Stack</b> &nbsp;Next.js, TypeScript, the model key held server-side</span>
      <span><b>Status</b> &nbsp;In build: two of six agent steps live, evaluation designed, hardening ahead</span>
      <span class="nda"><b>Proof</b> &nbsp;Live at <a href="https://casecheck.uxpective.com" target="_blank" rel="noopener noreferrer">casecheck.uxpective.com</a> &nbsp;&middot;&nbsp; code at <a href="https://github.com/shanicaroy/casecheck" target="_blank" rel="noopener noreferrer">github.com/shanicaroy/casecheck</a></span>
    </div>

    <figure>
      <div class="media">
        <video src="/projects/casecheck.mp4" autoplay muted loop playsinline aria-label="Case Check's interface: the review field and the floating mark on a white ground, with the brand gradient."></video>
      </div>
      <figcaption><b>Case Check.</b> The live product at casecheck.uxpective.com.</figcaption>
    </figure>

    <section id="overview">
      <h2>Case Check</h2>
      <p class="lede">I am a product designer building AI-native products. I am not a software engineer, and this page does not pretend I am. The claim it makes is different, and I think stronger: I can take an AI product from nothing to a working, evaluated thing, own every decision in it, and understand every layer well enough to direct it and catch its mistakes.</p>
      <p>I do not hand-write the code. I architect it, I read it, I refuse anything I cannot explain, and I fix what is wrong. The model is not fine-tuned on anything of mine; it runs my written rubric as instructions, which means the judgment in the product is mine and stays legible to me. That method is stated here as a method, not as an apology.</p>
      <p>The current state, honestly: the product is live, the repository is public with real component structure, tests against local fixtures, and a decision log in docs. Two of the six agent steps run on real infrastructure. The evaluation is designed and locked but has not been run. The hardening pass is ahead, and it is named at the end of this page rather than claimed.</p>
    </section>

    <section id="problem">
      <h2>The problem I was solving</h2>
      <h3>Most of a paid review goes to problems that do not need me.</h3>
      <p>Designers book 45-minute portfolio reviews with me. Most of that time goes to basic narrative issues: a case study that opens with the solution, a process section with no decision in it, an outcome nobody could check. Those problems are real, but they do not need my expertise to find, and finding them live costs the designer time they paid for.</p>
      <p>Case Check is my second brain. It runs the first pass, so a paid call with me starts where a human is actually needed: taste, orchestration, and how someone thinks. The tool clears the ground; the call spends its minutes on the things only a person across the table can do.</p>
      <p>There was a second reason, and it belongs on the page: I wanted concrete proof that I can design and build AI-native products. Not a concept deck, not a prompt screenshot. A live thing with an evaluation waiting to score it.</p>
    </section>

    <section id="skeleton">
      <h2>Skeleton before UI</h2>
      <h3>I did not start with screens.</h3>
      <p class="lede">The first thing I built was invisible: the rubric, the agent steps, and the evaluation design. The reasoning skeleton. I tested whether the system hallucinated before I made anything pretty.</p>
      <p>This ordering is the point of the whole project. A review tool that looks trustworthy and quietly invents quotes is worse than no tool, so the trust layer had to exist before the visual layer had any right to. I spent the early weeks on how a case study gets read, what gets checked, what happens when a check fails, and how I would know if the output was wrong.</p>
      <p>That is the line between system thinking and decoration. Anyone can put a well-set interface over a model call. The work is deciding what the model is allowed to do, what it is never asked to do, and how its failures are made visible instead of smoothed over.</p>
    </section>

    <section id="rubric">
      <h2>The rubric is the product</h2>
      <h3>Twelve dimensions, written down for the first time.</h3>
      <p>Case Check judges a case study against twelve evaluation dimensions drawn from my years of UX work and interviewing. I had been applying them in every review I gave; this project forced me to write them down in one place for the first time, precisely enough that a machine could follow them and I could audit whether it had.</p>
      <p>That framework is the moat. The model is only delivery: it carries my rubric to a case study and comes back with findings I can trace to a rule I wrote. Swap the model and the product survives; delete the rubric and there is no product.</p>
      <p>One scope decision worth naming: the rubric covers narrative judgment, not visual craft. I deferred visual evaluation to a later version and the product says so, rather than faking coverage it does not have.</p>
    </section>

    <section id="agent">
      <h2>The agent, and why six steps</h2>
      <h3>Each step exists to constrain the next, or to make a failure visible.</h3>
      <p>The agent is a six-step pipeline. Six is not decoration; every boundary between steps is a place where something can be checked, refused, or surfaced instead of silently guessed.</p>
      <ul class="dlist">
        <li><b>Fetch.</b> Read the source and establish what evidence actually exists before anything is judged.</li>
        <li><b>Classify.</b> Resolve what kind of input this is, so ambiguity is handled here and not smeared across every later step.</li>
        <li><b>Plan.</b> Decide and show the checks before running them, so the review is inspectable rather than an oracle.</li>
        <li><b>Run checks.</b> Execute the rubric checks across text and, where possible, vision.</li>
        <li><b>Self-verify.</b> Recheck every claim the review wants to make before it is allowed into the report.</li>
        <li><b>Report.</b> Return one weakest part, one concrete fix, a confidence level, and what could not be judged.</li>
      </ul>
      <p>Two engineering decisions in this pipeline are mine, and I would defend both in any room.</p>
      <p><strong>Which case study gets reviewed is decided in code, not by the model.</strong> When a portfolio has several projects, selection is a deterministic rule the user can see and steer, not a model preference. Control and predictability belong to the person, so that choice was never delegated.</p>
      <p><strong>Self-verify starts with a plain text search, before any model is consulted.</strong> Every quote the review wants to cite is searched for, literally, in the source. A text search cannot be fooled by a fluent hallucination: the string is there or it is not. Only claims that survive that search go on to the model-side checks. It is the anti-hallucination guardrail, and it is the strongest systems decision in the project.</p>
    </section>

    <section id="evaluation">
      <h2>Evaluation</h2>
      <h3>The tool is measured against me, and the results get published either way.</h3>
      <p>The evaluation is designed and locked before the first score, so the numbers cannot be quietly shaped after the fact. The design:</p>
      <div class="stats">
        <div><b>40</b><span>real case studies in the test set, used with permission</span></div>
        <div><b>7</b><span>graded dimensions per case</span></div>
        <div><b>1</b><span>sealed verdict per case: my own weakest-part call, written before the tool runs</span></div>
        <div><b>0</b><span>results published yet; they will be, whatever they say</span></div>
      </div>
      <p>My own verdict on each case is sealed in writing before the tool sees it, so Case Check is scored against my judgment, not against a rubric it could satisfy on a technicality. Hard failures are counted separately from the graded score, because a review that invents evidence should not be able to average its way to respectability.</p>
      <p>Hallucination gets its own metric: claims made versus claims surviving verification. A blind subset of the test set is re-graded by other designers, so the ground truth is not only mine.</p>
      <p>The numbers are to come. That is the honest state, and publishing them, good or bad, is part of the design.</p>
    </section>

    <section id="frontend">
      <h2>Frontend and motion</h2>
      <h3>A real product surface, built on a fixed system.</h3>
      <p>The interface is not a demo shell; it is a product surface I designed and built on deliberately narrow rules. One typeface. A white ground. The brand gradient appears in exactly three places. The report reads as a document, not a dashboard, because the output of a review is something you sit with and act on.</p>
      <p>The motion in the repo is real and hand-directed. The mark floats and glows on an idle loop I tuned by hand. The review field responds to the cursor. The running state streams real per-step events from the agent with an honest elapsed timer; there is no fake progress bar anywhere in the product, because a trust tool that lies about its own progress has already lost the argument.</p>
      <p>What this layer has not had yet, named plainly as the next push: a typed component API, a proper motion library instead of hand-rolled easing, tokens and Storybook, an accessibility audit, and a pull-request review by an engineer. None of that is claimed above; all of it is queued.</p>
    </section>

    <section id="decisions">
      <h2>The decisions I drove</h2>
      <h3>Directed, not generated.</h3>
      <ul class="dlist">
        <li><b>Narrowed the scope to one job.</b> Find the weakest part of one case study. Every tempting adjacent feature was cut.</li>
        <li><b>Refused to claim work that was not mine.</b> On this page and in the product: no engineering credentials, no invented coverage.</li>
        <li><b>Chose trust over telemetry.</b> Machine readouts are hidden; the assumptions the review made are shown. The person needs the second, not the first.</li>
        <li><b>Rejected my own first mockup.</b> It looked like a dashboard and read like one. The document-style report replaced it.</li>
        <li><b>Caught a contradiction in my own spec.</b> Found it while reading, not while shipping, and rewrote the spec before the code moved.</li>
        <li><b>Reframed around the real problem.</b> Not "AI portfolio feedback" but the first pass before a paid human review. The whole product got simpler the day that sentence got honest.</li>
      </ul>
    </section>

    <section id="split">
      <h2>What I did vs what the AI did</h2>
      <h3>An honest split.</h3>
      <div class="split">
        <div>
          <h4>Mine</h4>
          <ul>
            <li>The problem, and the decision to build at all</li>
            <li>The twelve-dimension rubric</li>
            <li>The six-step architecture and both guardrail decisions</li>
            <li>The evaluation design, sealed verdicts included</li>
            <li>Every product and interface decision</li>
            <li>Reading the output critically, every session</li>
            <li>Every debugging call</li>
          </ul>
        </div>
        <div>
          <h4>The AI's</h4>
          <ul>
            <li>Lines of code, written one understood slice at a time</li>
            <li>Under one standing rule: I do not accept a file I cannot explain</li>
          </ul>
        </div>
      </div>
      <p class="lede">I can explain every file in this project.</p>
    </section>

    <hr>
    <footer>
      <p>Case Check is live at <a href="https://casecheck.uxpective.com" target="_blank" rel="noopener noreferrer">casecheck.uxpective.com</a> and the code is public at <a href="https://github.com/shanicaroy/casecheck" target="_blank" rel="noopener noreferrer">github.com/shanicaroy/casecheck</a>. &nbsp;&middot;&nbsp; <a href="#overview">Back to top</a></p>
    </footer>
  </main>
`;
