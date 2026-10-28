import type { Metadata } from "next";
import CaseStudy, { type CaseStudyProps } from "@/components/case/CaseStudy";

export const metadata: Metadata = {
  title: "Replacing the tool, not just the screens (Bhanzu CLM)",
  description:
    "Leading the design of Bhanzu's in-house ticketing system, from IVR-driven routing to the CLM ticket workspace and role-based dashboards.",
};

/**
 * Customer Lifecycle Management (Bhanzu) — full, non-NDA case study on the
 * shared CaseStudy template (frame 2699:4272). Copy is Shanica's approved prose
 * from content/case-clm.ts; the draft's unanswered "to fill in" prompts and the
 * placeholder-only sections (Leading the team, What shipped, What I'd do
 * differently) are held back until she supplies them.
 */

const META: CaseStudyProps["meta"] = [
  { label: "Role", value: "Design Lead" },
  { label: "Timeline", value: "2022" },
  { label: "Domain", value: "EdTech" },
  {
    label: "Scope",
    value: "IVR-driven ticket routing, the CLM ticket workspace, and role-based dashboards from agent to leadership",
    scope: true,
  },
];

const SECTIONS: CaseStudyProps["sections"] = [
  {
    id: "overview",
    label: "Overview",
    heading: "Overview",
    blocks: [
      {
        k: "p",
        text: "Bhanzu is an EdTech platform. When a customer called, the old path ran through Zendesk, and Zendesk did not know who was calling or what they were worth to the business. The company wanted a system that did.",
      },
      {
        k: "p",
        text: "So the build had two halves. First, routing. Recognise the caller through IVR, work out whether they were a paying student, an existing customer, or a new enquiry, and send the ticket to the team that should own it. Second, the workspace. Give the person who caught that ticket everything about the customer on one surface, under a clock, so they could actually resolve it.",
      },
      {
        k: "p",
        text: "I led the design across both halves. What follows is the decisions that shaped it, and the parts I would do differently now.",
      },
    ],
  },
  {
    id: "bet",
    label: "The bet",
    heading: "The bet",
    blocks: [
      { k: "h3", text: "Build, not buy." },
      {
        k: "p",
        text: "Replacing a working tool is not a design preference. It is a business bet, with a cost and an operational risk behind it. Zendesk worked. It also could not tell a paying student from a cold enquiry, and that gap was costing the support team time on every call.",
      },
    ],
  },
  {
    id: "routing",
    label: "The routing problem",
    heading: "The routing problem",
    blocks: [
      { k: "h3", text: "The ticket had to know who was calling before a human did." },
      {
        k: "p",
        text: "This is the logic that made the system worth building. A caller hits the IVR. The system recognises them. If they are a paying customer or an existing student, the ticket routes to a CLM, a customer lifecycle manager, and lands in the CLM workspace. If they are a new enquiry, it routes to general support instead. Same call, different destination, decided before anyone picked up.",
      },
      {
        k: "p",
        text: "Designing that meant designing the fork, not just the screens on either side of it. The ticket carried its own source and category from the start. You can see it on every ticket: a source of IVR, a category, an SLA, all set at creation, because the routing decision is baked into the ticket before a person ever opens it.",
      },
    ],
  },
  {
    id: "surface",
    label: "The real design problem",
    heading: "The real design problem",
    blocks: [
      { k: "h3", text: "One ticket. Everything the company knows about a customer." },
      {
        k: "p",
        text: "Here is where the difficulty actually lived. When a CLM opened a ticket, they did not need a support form. They needed the whole customer. Who the student is, their parents, their address, their siblings, the course they bought, the batch they are in, their sessions, their refund eligibility, their entire support history, their parent-teacher meetings, their assessments. All of it, on one surface, under a two-hour clock.",
      },
      {
        k: "p",
        text: "Dump that on a page and it is unusable. So the ticket workspace is built as progressive disclosure. A compact ticket header carries the essentials the agent needs first: ticket ID, lead ID, primary contact, SLA, source, a short description. Below it, everything else sits in labelled, collapsible sections. Student Personal Info, Course, Sibling, Batch, Session, Refund, Support Ticket History, PTM, Assessment. The agent opens only what the call needs. The depth is there, but it is quiet until asked for.",
      },
      {
        k: "p",
        text: "Beside it runs a communication rail with three views. Ticket Comms, where the WhatsApp thread, the messages, and even a call recording with playback all live in one place. Activity Log, for what happened to the ticket. Ticket Timeline, which threads a ticket back to its root ticket so an agent can see the whole history of a recurring issue rather than treating each call as new.",
      },
      {
        k: "p",
        text: "The design problem was not making this pretty. It was deciding what an agent sees first, what they see on demand, and what stays one click away, so that a huge data model reads as a calm, workable page under time pressure.",
      },
    ],
  },
  {
    id: "sla",
    label: "Designing under a clock",
    heading: "Designing under a clock",
    blocks: [
      { k: "h3", text: "The SLA was a design constraint, not a label." },
      {
        k: "p",
        text: "Every ticket carried an SLA, shown on the ticket and echoed on the dashboard. The agent's whole job was resolving before that clock ran out, so the design had to make time visible and make the next action obvious.",
      },
      {
        k: "p",
        text: "The status model carried that. A ticket moved through Open, Pending, Follow up, On Hold, and Close, and each status was its own designed flow, not just a coloured label. Changing status was a deliberate action with its own path, because in a support system the status is the work. Getting the status flows right is what let a team of agents keep dozens of time-boxed tickets straight.",
      },
    ],
  },
  {
    id: "roles",
    label: "One system, four points of view",
    heading: "One system, four points of view",
    blocks: [
      { k: "h3", text: "The same platform looked different depending on who you were." },
      {
        k: "p",
        text: "A CLM, a team leader, another team, and leadership do not need the same screen. So the system was designed as role-based views over one shared model. The CLM worked tickets. The team leader had a dashboard over their team, could add and edit the CLMs under them, and could see the team's load. Other teams had their own dashboard. Leadership had an overview across all of it.",
      },
      {
        k: "p",
        text: "This is where the design stopped being a set of screens and became a system. Designing four coherent points of view onto the same data, with the right things visible and the right things hidden at each level, is an information-architecture problem before it is a UI one. I even designed the access edges, down to the 403 state a user hits when they reach for something their role does not own. A system is not finished at the happy path. It is finished at the forbidden one.",
      },
    ],
  },
];

export default function ClmCaseStudy() {
  return (
    <CaseStudy
      breadcrumb="Bhanzu"
      logo={{ src: "/hero/bhanzu-v2.svg", w: 28, h: 28 }}
      title="Replacing the tool, not just the screens"
      hero={{ src: "/projects/clm.mp4", kind: "video" }}
      meta={META}
      sections={SECTIONS}
    />
  );
}
