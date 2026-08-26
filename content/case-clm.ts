// ---------------------------------------------------------------------------
// CLM TICKETING PLATFORM CASE STUDY (Bhanzu). Uses the same template, voice,
// and styles as the VMware case study (vmwareCaseStyles, scoped under .vmw).
//
// STATUS: DRAFT. The dashed "To fill in" blocks are questions only Shanica
// can answer. This page must not ship to production until every one of them
// is replaced with her real account, and all screen media is confirmed to
// show dummy data only.
// ---------------------------------------------------------------------------

export const clmCaseBody = `
  <div class="progress" aria-hidden="true"></div>
  <aside>
    <a class="backlink" href="/">&larr; Shanica Roy</a>
    <div class="kicker">Case Study</div>
    <details class="secnav" open>
      <summary>Sections</summary>
      <nav aria-label="Sections">
        <ul class="toc">
          <li><a href="#overview">Overview</a></li>
          <li><a href="#bet">The bet</a></li>
          <li><a href="#routing">The routing problem</a></li>
          <li><a href="#surface">The real design problem</a></li>
          <li><a href="#sla">Designing under a clock</a></li>
          <li><a href="#roles">One system, four points of view</a></li>
          <li><a href="#leadership">Leading the team</a></li>
          <li><a href="#outcome">What shipped</a></li>
          <li><a href="#reflection">What I'd do differently</a></li>
        </ul>
      </nav>
    </details>
  </aside>

  <main>
    <div class="eyebrow">Bhanzu &middot; EdTech &middot; Ticketing platform</div>
    <h1>Replacing the tool, not just the screens</h1>
    <p class="standfirst">Bhanzu ran customer support on Zendesk. The business wanted off it, onto a ticketing system we owned and could shape around how the company actually worked. I led the design of that system. The interesting part was never the tickets. It was everything the company knew about a customer, and getting it to the right person at the right moment.</p>
    <div class="factline">
      <span><b>Role</b> &nbsp;Design Lead</span>
      <span><b>Team</b> &nbsp;[X] designers, reporting to [X]</span>
      <span><b>Scope</b> &nbsp;IVR-driven ticket routing, the CLM ticket workspace, and role-based dashboards from agent to leadership</span>
      <span class="nda"><b>Note</b> &nbsp;Customer data shown here is illustrative. This was an internal tool built at Bhanzu.</span>
    </div>

    <section id="overview">
      <h2>Overview</h2>
      <p class="lede">Bhanzu is an EdTech platform. When a customer called, the old path ran through Zendesk, and Zendesk did not know who was calling or what they were worth to the business. The company wanted a system that did.</p>
      <p>So the build had two halves. First, routing. Recognise the caller through IVR, work out whether they were a paying student, an existing customer, or a new enquiry, and send the ticket to the team that should own it. Second, the workspace. Give the person who caught that ticket everything about the customer on one surface, under a clock, so they could actually resolve it.</p>
      <p>I led the design across both halves. What follows is the decisions that shaped it, and the parts I would do differently now.</p>
    </section>

    <section id="bet">
      <h2>The bet</h2>
      <h3>Build, not buy.</h3>
      <p>Replacing a working tool is not a design preference. It is a business bet, with a cost and an operational risk behind it. Zendesk worked. It also could not tell a paying student from a cold enquiry, and that gap was costing the support team time on every call.</p>
      <div class="todo"><b>To fill in before publishing.</b> Who made the build-versus-buy call, and what was your part in it? Did you argue the case, size the cost of staying on Zendesk, or map what a custom system could do that Zendesk could not? One real moment where a design decision connected to a business reason belongs here. If the call was made above you and you designed to it, say that honestly.</div>
    </section>

    <section id="routing">
      <h2>The routing problem</h2>
      <h3>The ticket had to know who was calling before a human did.</h3>
      <p>This is the logic that made the system worth building. A caller hits the IVR. The system recognises them. If they are a paying customer or an existing student, the ticket routes to a CLM, a customer lifecycle manager, and lands in the CLM workspace. If they are a new enquiry, it routes to general support instead. Same call, different destination, decided before anyone picked up.</p>
      <p>Designing that meant designing the fork, not just the screens on either side of it. The ticket carried its own source and category from the start. You can see it on every ticket: a source of IVR, a category, an SLA, all set at creation, because the routing decision is baked into the ticket before a person ever opens it.</p>
      <div class="todo"><b>To fill in before publishing.</b> Whose call was the routing logic? Did you shape the recognition rules and the CLM-versus-support fork with product and engineering, or did you take the logic as given and design the surfaces around it? Either answer works. It changes how this section is framed.</div>
    </section>

    <section id="surface">
      <h2>The real design problem</h2>
      <h3>One ticket. Everything the company knows about a customer.</h3>
      <p>Here is where the difficulty actually lived. When a CLM opened a ticket, they did not need a support form. They needed the whole customer. Who the student is, their parents, their address, their siblings, the course they bought, the batch they are in, their sessions, their refund eligibility, their entire support history, their parent-teacher meetings, their assessments. All of it, on one surface, under a two-hour clock.</p>
      <p>Dump that on a page and it is unusable. So the ticket workspace is built as progressive disclosure. A compact ticket header carries the essentials the agent needs first: ticket ID, lead ID, primary contact, SLA, source, a short description. Below it, everything else sits in labelled, collapsible sections. Student Personal Info, Course, Sibling, Batch, Session, Refund, Support Ticket History, PTM, Assessment. The agent opens only what the call needs. The depth is there, but it is quiet until asked for.</p>
      <p>Beside it runs a communication rail with three views. Ticket Comms, where the WhatsApp thread, the messages, and even a call recording with playback all live in one place. Activity Log, for what happened to the ticket. Ticket Timeline, which threads a ticket back to its root ticket so an agent can see the whole history of a recurring issue rather than treating each call as new.</p>
      <p>The design problem was not making this pretty. It was deciding what an agent sees first, what they see on demand, and what stays one click away, so that a huge data model reads as a calm, workable page under time pressure.</p>
      <figure>
        <div class="media">
          <video src="/projects/clm.mp4" autoplay muted loop playsinline aria-label="A walkthrough of the CLM ticket workspace. A compact ticket header carries the ticket ID, lead ID, primary contact, SLA, source, and a short description. Below it, collapsible sections hold student personal information, course, sibling, batch, session, refund, support ticket history, parent-teacher meetings, and assessments. A communication rail beside the ticket shows the message thread, activity log, and ticket timeline. Customer data shown is illustrative."></video>
        </div>
        <figcaption><b>The CLM ticket workspace.</b> The compact header, the collapsible sections, and the communication rail. Customer data shown is illustrative.</figcaption>
      </figure>
      <div class="todo"><b>To fill in before publishing.</b> Screens still to feature: the expanded Student Personal Info section and the comms rail with the WhatsApp thread and call recording. Confirm every visible email, name, and address in the media is a dummy before this page ships.</div>
    </section>

    <section id="sla">
      <h2>Designing under a clock</h2>
      <h3>The SLA was a design constraint, not a label.</h3>
      <p>Every ticket carried an SLA, shown on the ticket and echoed on the dashboard. The agent's whole job was resolving before that clock ran out, so the design had to make time visible and make the next action obvious.</p>
      <p>The status model carried that. A ticket moved through Open, Pending, Follow up, On Hold, and Close, and each status was its own designed flow, not just a coloured label. Changing status was a deliberate action with its own path, because in a support system the status is the work. Getting the status flows right is what let a team of agents keep dozens of time-boxed tickets straight.</p>
      <div class="todo"><b>To fill in before publishing.</b> If you designed the dashboard's breach view, the resolve-within-24-to-48-hours filtering, or the way breaching tickets surface, describe it in a sentence or two. It is a strong, concrete craft detail.</div>
    </section>

    <section id="roles">
      <h2>One system, four points of view</h2>
      <h3>The same platform looked different depending on who you were.</h3>
      <p>A CLM, a team leader, another team, and leadership do not need the same screen. So the system was designed as role-based views over one shared model. The CLM worked tickets. The team leader had a dashboard over their team, could add and edit the CLMs under them, and could see the team's load. Other teams had their own dashboard. Leadership had an overview across all of it.</p>
      <p>This is where the design stopped being a set of screens and became a system. Designing four coherent points of view onto the same data, with the right things visible and the right things hidden at each level, is an information-architecture problem before it is a UI one. I even designed the access edges, down to the 403 state a user hits when they reach for something their role does not own. A system is not finished at the happy path. It is finished at the forbidden one.</p>
      <div class="todo"><b>To fill in before publishing.</b> Screens to feature: the CLM dashboard, the team-leader dashboard with My Team add and edit, and the leadership or other-team view. The 403 error state is worth showing as a small detail.</div>
    </section>

    <section id="leadership">
      <h2>Leading the team</h2>
      <h3>I set the direction. The team built it out.</h3>
      <div class="todo"><b>To fill in before publishing: how the work was split.</b> Who owned what? A system this size has natural seams: routing, the ticket workspace, dashboards, the comms rail, batch allocation. Did you divide it along those, and how did you keep it coherent so it read as one product?</div>
      <div class="todo"><b>To fill in before publishing: leading, not designing.</b> Two or three concrete moments. A direction you set. A review where you redirected someone's work. A standard you held. If you wrote specs like the batch-allocation rules for others to build to, that is direction-setting made visible.</div>
      <div class="todo"><b>To fill in before publishing: the hardest call.</b> Where did you disagree with a PM, an engineer, or one of your own designers, and hold or change the direction?</div>
      <div class="todo"><b>To fill in before publishing: stakeholder alignment.</b> Replacing Zendesk touched the business, support ops, and engineering. Who did you have to bring along, and how? Did you present the design direction to anyone above you?</div>
    </section>

    <section id="outcome">
      <h2>What shipped</h2>
      <h3>What changed because the system was built this way.</h3>
      <div class="todo"><b>To fill in before publishing.</b> Real outcomes stated plainly, no invented numbers. Did the system ship and replace Zendesk? Did routing get customers to the right team faster? Could CLMs catch SLA breaches they used to miss? Qualitative outcomes told plainly are enough.</div>
    </section>

    <section id="reflection">
      <h2>What I'd do differently</h2>
      <h3>Honest reflections.</h3>
      <div class="todo"><b>To fill in before publishing.</b> Two or three honest, specific reflections. Something in the routing or the data model you would simplify now, a research shortcut you took, or a place where you led by doing rather than making your thinking visible to the team.</div>
    </section>

    <hr>
    <footer>
      <p>Customer data shown in these screens is illustrative and has been replaced. This was an internal tool built at Bhanzu. &nbsp;&middot;&nbsp; <a href="#overview">Back to top</a></p>
    </footer>
  </main>
`;
