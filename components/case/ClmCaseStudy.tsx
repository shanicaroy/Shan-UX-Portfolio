"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import CaseRail from "@/components/case/CaseRail";
import { caseStudyCss } from "@/content/case-study-styles";

/**
 * Bhanzu CLM case study.
 *
 * This page REUSES the shared case-study template verbatim: it injects the exact
 * same frozen stylesheet (`caseStudyCss`) and the same `CaseRail`, and renders
 * the same DOM shell (`.cs > .cs-page > .cs-breadcrumb + CaseRail + .cs-content`),
 * so layout, fonts, spacing, the sticky breadcrumb, the sticky section nav and
 * its scroll behaviour, and the mobile rules are identical to every other case
 * study. The shared template files are NOT touched.
 *
 * The new content types this write-up needs (styled tables, full-width
 * clickable diagrams, numbered image placeholders and highlighted TODO notes)
 * are added through ONE extra, additive, page-local stylesheet (`clmExtrasCss`)
 * of new `.cs-*` classes that no other page uses, plus the block renderers
 * below. Copy is transcribed verbatim from the source document.
 */

// ---------------------------------------------------------------------------
// Content model
// ---------------------------------------------------------------------------

type TableData = { head?: string[]; rows: string[][]; wide?: boolean };
type Block =
  | { t: "p"; text: string }
  | { t: "h3"; text: string }
  | { t: "ul"; items: string[] }
  | ({ t: "table" } & TableData)
  | { t: "figure"; src?: string; file: string; alt: string; n: number }
  | { t: "ph"; n: number; name: string; desc: string }
  | { t: "todo"; text: string };
type Section = { id: string; label: string; heading: string; blocks: Block[] };

// The overview area (cover, metadata table, highlights) sits above the sections,
// in the template's hero/overview region.
const COVER = {
  n: 1,
  name: "clm-img-01-cover-ticket-details",
  desc: "Cover, the ticket details page",
};

const OVERVIEW_TABLE: TableData = {
  rows: [
    ["Role", "Design Lead and sprint lead"],
    ["Company", "Bhanzu (EdTech)"],
    ["Timeline", "Mar - Dec 2022 (9 months)"],
    [
      "Team",
      "3 designers I led, 20 to 25 engineers (front end, back end, full stack), 2 product managers, support operations and operations staff",
    ],
    ["Platform", "Web, internal tool"],
    [
      "Scope",
      "IVR-based routing, CLM ticket workspace, root and child tickets, status flows, role-based dashboards, access states",
    ],
  ],
};

const HIGHLIGHTS: string[] = [
  "Led research across every operations function and with the operations team lead, and turned it into the brief for a platform built around a brand-new role.",
  "Set the product's structure: rejected a tab-based dashboard and built the platform around the ticket, because a CLM's whole day is tickets.",
  "Aligned 3 designers, 20 to 25 engineers, 2 product managers and the operations team through sprints, with operations reviewing the work as it was built.",
  "Negotiated the version 1 scope with product and engineering: the ticket journey moved to its own page, and expandable dashboard rows went on the version 2 plan.",
  "Shipped a platform that gives every paying student one CLM and puts every ticket, around 500 to 600 a day, on a two-hour SLA.",
];

const SECTIONS: Section[] = [
  {
    id: "overview",
    label: "Overview",
    heading: "Overview",
    blocks: [
      {
        t: "p",
        text: "I led the design of CLM (Customer Lifecycle Management), the in-house support platform that replaced Zendesk at Bhanzu. CLM gives every paying student one Customer Lifecycle Manager, recognises callers through the IVR, and routes each ticket to the right person before anyone answers. The platform handled around 500 to 600 tickets a day. Every paying student got one point of contact, and every ticket got a category, an owner and an SLA.",
      },
      { t: "h3", text: "My contribution" },
      {
        t: "ul",
        items: [
          "Joined the early planning with the CTO and two product managers as the user research lead.",
          "Ran discovery with every operations executive and the operations team lead: their processes, query types, communication channels and resolution times.",
          "Led the project's sprints with a cross-functional team of designers, engineers, product managers, support operations and operations staff.",
          "Led a team of three designers: assigned the work, set the direction and reviewed the output.",
          "After group brainstorming, designed the wireframes, the structure and the core flows myself.",
          "Designed the CLM ticket workspace end to end: the student and batch details, and the communication log on the right.",
          "Decided what would be prototyped and how.",
        ],
      },
    ],
  },
  {
    id: "context",
    label: "Context",
    heading: "Context",
    blocks: [
      {
        t: "p",
        text: "Before CLM, Bhanzu handled support on Zendesk, where any agent could pick up any call. A student or parent who called back about the same issue usually reached a different person and had to explain it again. Until the issue was resolved, every call started from zero.",
      },
      {
        t: "p",
        text: "The business wanted to put its existing, paying students first, give them better service and bring refund requests down. The CTO and two product managers raised the change, and I joined those conversations as the user research lead. The decision was to give every paying student one Customer Lifecycle Manager (CLM) as their single point of contact, and to build a platform around that role.",
      },
      {
        t: "p",
        text: "Support handled around 500 to 600 tickets a day (approximate). A separate floor of around 20 to 25 operations agents handled them, and all of them were to move onto CLM.",
      },
      { t: "ph", n: 2, name: "clm-img-02-zendesk-queue", desc: "The Excel sheets or Zendesk queue the team worked from, if you have one" },
      { t: "h3", text: "Problems with the existing setup" },
      {
        t: "ul",
        items: [
          "No single owner. Repeat calls from the same student reached different agents.",
          "Lost context. Customers explained their problem again on every call until it was resolved.",
          "No structure. Tickets had no category, so nothing showed whether a query came from a new or an existing student.",
          "No time limits. There was no SLA, and the team lead was not alerted when tickets stayed open.",
          "Scattered tracking. Agents worked across Zendesk, personal notes and several Excel sheets.",
          "No visibility for the team lead. He could not see which tickets were breaching or who was responsible.",
        ],
      },
    ],
  },
  {
    id: "research",
    label: "Research",
    heading: "Research",
    blocks: [
      {
        t: "p",
        text: "Research was the largest part of this project. Before designing anything, I spoke to every operations executive and to the operations team lead. I wanted to understand how each workflow ran in Zendesk, how the teams communicated with students and parents, and what moving all of it to a new platform would mean for them.",
      },
      { t: "h3", text: "Calls with the operations executives" },
      {
        t: "p",
        text: "I ran one-to-one calls with each operations executive, then a separate session with the operations team lead. Each executive owned a different part of the student's journey, so together the calls covered every part of how a student was supported.",
      },
      {
        t: "table",
        head: ["Who I spoke to", "Their responsibility"],
        rows: [
          ["Operations executive", "Batch allocation"],
          ["Operations executive", "Creating new batches"],
          ["Operations executive", "Onboarding students onto the platform"],
          ["Operations executive", "Refunds"],
          ["Operations team lead", "Leading the whole operations team"],
        ],
      },
      { t: "p", text: "With each executive, I walked through their work step by step:" },
      {
        t: "ul",
        items: [
          "How does a query reach you?",
          "How do you solve it in Zendesk, from start to finish?",
          "How do you keep the student or parent informed, and on which channels?",
          "How do you keep track of open queries?",
        ],
      },
      {
        t: "p",
        text: "Across all four functions, the picture was the same. Queries were handled in Zendesk alongside personal notes and several Excel sheets. Tickets had no category, there was no time limit for resolving a query, and nothing alerted the team lead when tickets stayed unresolved.",
      },
      { t: "ph", n: 3, name: "clm-img-03-ops-exec-calls-gallery", desc: "Screenshots from the calls with the operations executives, as a small gallery. Caption: who each call was with, and one thing it changed in the design." },
      { t: "h3", text: "Communication channels" },
      {
        t: "p",
        text: "I also mapped every channel a conversation ran through: email, WhatsApp and the direct call line. No single place showed a student's conversation across all three. [Confirm this line.]",
      },
      { t: "h3", text: "Session with the operations team lead" },
      { t: "p", text: "I then spoke with the operations team lead about the team as a whole. I asked:" },
      {
        t: "ul",
        items: [
          "What challenges does the team face most often?",
          "Which queries come in most?",
          "Who usually resolves each type, and how?",
          "How long does each type take to resolve?",
        ],
      },
      {
        t: "p",
        text: "He told me he had little to no visibility. He needed to see how many tickets were breaching, have tickets escalate when they stayed open past a set time, and know which CLM was responsible so he could follow up with them.",
      },
      {
        t: "p",
        text: "The CLMs and agents needed two things urgently. First, to see the tickets assigned to them as soon as they logged in. Second, to see what was urgent: the SLA time left, and how many tickets were breached, pending, on track and due to close that day.",
      },
      { t: "ph", n: 4, name: "clm-img-04-team-lead-session", desc: "Screenshot from the session with the operations team lead" },
      { t: "h3", text: "Market scan" },
      {
        t: "p",
        text: "To understand how similar platforms handle support, I reviewed Zendesk alternatives: Freshdesk from Freshworks, Intercom and Zoho Desk. I looked at how each one routes and assigns tickets, shows SLAs, and keeps conversations from different channels on the ticket. [Confirm what you compared.]",
      },
      {
        t: "table",
        head: ["Platform", "What I took from it"],
        rows: [
          ["Freshdesk (Freshworks)", "[ ]"],
          ["Intercom", "[ ]"],
          ["Zoho Desk", "[ ]"],
        ],
      },
      { t: "todo", text: "[What none of them solved for Bhanzu's model, in one or two sentences.]" },
      { t: "h3", text: "From Zendesk to CLM" },
      {
        t: "p",
        text: "For every workflow, I mapped how it ran in Zendesk and what it would need to become on the new platform. This mapping became the brief for the design.",
      },
      {
        t: "table",
        wide: true,
        head: ["Today, in Zendesk", "What CLM needed to do"],
        rows: [
          ["Any agent picked up any call", "Route each existing student to their own CLM"],
          ["Tickets had no category; new and existing students were mixed", "Recognise the caller and categorise the ticket when it is created"],
          ["No time limits and no escalation", "Put an SLA on every ticket and make breaches visible"],
          ["Work tracked across Zendesk, notes and Excel sheets", "Hold the student record and the conversation on one ticket page"],
          ["Conversations spread across email, WhatsApp and calls", "Bring the conversation into the ticket"],
          ["CLMs could not see their own work or what was urgent", "Show assigned tickets and SLA status first on the dashboard"],
          ["The team lead had little visibility", "Give the team lead a view of the team's tickets and load"],
          ["Many queries needed another team to resolve [confirm]", "Let the CLM pass work to other teams without losing ownership"],
        ],
      },
      { t: "ph", n: 5, name: "clm-img-05-workflow-mapping", desc: "Your workflow mapping or notes from the research, if you have them" },
    ],
  },
  {
    id: "the-problem",
    label: "The problem",
    heading: "The problem",
    blocks: [
      { t: "p", text: "The work split into two problems: getting each call to the right owner, and giving that owner what they needed to resolve it." },
      { t: "h3", text: "The routing problem" },
      {
        t: "p",
        text: "The system had to identify the caller and decide where the ticket goes before an agent picked up. An existing, paying student should reach their own CLM. A new or unrecognised caller should go to the support or inquiry team. Zendesk could not make that decision because it did not hold Bhanzu's customer data.",
      },
      {
        t: "p",
        text: "This meant designing the routing decision itself, not only the screens before and after it. The ticket had to carry its source, category and SLA from the moment it was created.",
      },
      { t: "h3", text: "The design problem" },
      {
        t: "p",
        text: "Once a ticket reached a CLM, they needed the whole customer, not a support form. That meant the student's personal details, parents, siblings, course, batch, sessions, refund eligibility, support history, parent-teacher meetings and assessments. All of it had to be workable on one screen, within a two-hour SLA.",
      },
      {
        t: "p",
        text: "Shown all at once, that data is unusable. The challenge was deciding what an agent sees first, what they open on demand, and what stays in the background.",
      },
      {
        t: "p",
        text: "A CLM also could not resolve everything alone. Refunds, batch changes and onboarding sat with other teams. The CLM needed a way to hand that work over without losing ownership of the student.",
      },
      { t: "h3", text: "Problem statement" },
      {
        t: "p",
        text: "Design a support platform that gives every paying student one point of contact. It had to identify the caller, route each ticket to the right owner, and give that owner enough context to resolve it within the SLA, pulling in other teams when needed. It also had to give team leaders and leadership visibility over load and performance.",
      },
      { t: "p", text: "The business goals behind it were better service for existing students and fewer refund requests." },
    ],
  },
  {
    id: "navigating-ambiguity",
    label: "Navigating ambiguity",
    heading: "Navigating ambiguity",
    blocks: [
      {
        t: "p",
        text: "The CLM role was new. The business had decided that every paying student would get a Customer Lifecycle Manager, but nobody had yet defined what a CLM's day looked like, how tickets would be sorted, or what counted as urgent. Before I could design the platform, I had to answer those questions with the operations team.",
      },
      {
        t: "table",
        wide: true,
        head: ["Open question at the start", "How I resolved it"],
        rows: [
          ["What does a CLM actually do all day?", "Mapped it with the operations team. Every task a CLM does starts and ends with a ticket, so the platform is built around the ticket"],
          ["How does a ticket reach the right person?", "The IVR recognises the caller, and the ticket is categorised and routed when it is created"],
          ["What happens when a CLM cannot resolve a query alone?", "The CLM keeps the root ticket and creates child tickets for the teams that can resolve each part"],
          ["What counts as urgent?", "A two-hour SLA on every ticket, with breached, pending and on-track counts on the dashboard"],
          ["How does the team lead stay in control?", "A team leader view of the team's tickets and load"],
        ],
      },
      { t: "ph", n: 6, name: "clm-img-06-whiteboard-brainstorm", desc: "Whiteboard or brainstorm from the early sessions, if you have one" },
    ],
  },
  {
    id: "how-i-led-the-project",
    label: "How I led the project",
    heading: "How I led the project",
    blocks: [
      { t: "p", text: "I ran the project in sprints and led a cross-functional team of designers, engineers, product managers, support operations and operations staff." },
      { t: "figure", n: 7, src: "/clm-images/sprint-1-team.webp", file: "clm-images/sprint-1-team.webp", alt: "The project team at UX Design Sprint 1.0" },
      {
        t: "table",
        wide: true,
        head: ["Phase", "What happened", "My part"],
        rows: [
          ["Discovery", "Calls with every operations executive and the operations team lead", "Planned and ran the sessions; mapped processes, channels and pain points"],
          ["Structure and core flows (Sprint 1)", "Wireframes, routing and the ticket workspace", "Designed the wireframes, structure and core flows myself"],
          ["Dashboards and SLA visibility", "Role-based dashboards, SLA cards, status flows", "Designed the SLA cards and filtering [confirm what else you designed here]"],
          ["Build and version 1 scope", "Engineering build, scope decisions with PMs and engineers", "Agreed the version 1 scope; moved the ticket journey to its own page"],
        ],
      },
      { t: "todo", text: "[Confirm the order and roughly how long each phase took.]" },
      { t: "p", text: "The work ran in sprints over nine months." },
      { t: "ph", n: 7, name: "clm-img-07-sprint1-board", desc: "Sprint 1 board with the screens I designed. Caption: what these screens set up for the rest of the build." },
      { t: "h3", text: "How the work was split" },
      {
        t: "p",
        text: "The team brainstormed together, then I designed the wireframes, the structure and the core flows myself. That includes the CLM ticket workspace, where the ticket lands after routing. I assigned work across the three designers and decided what would be prototyped and how. The designers built the prototypes.",
      },
      { t: "ph", n: 8, name: "clm-img-08-ticket-details-wireframes", desc: "My wireframes of the ticket details page" },
      { t: "h3", text: "Operations in the sprints" },
      {
        t: "p",
        text: "I brought the operations executives and the team lead into the sprints. The people who would use CLM every day reviewed the work and gave feedback as it was built, rather than seeing it for the first time at launch.",
      },
      { t: "h3", text: "Aligning product and engineering" },
      {
        t: "p",
        text: "With 20 to 25 engineers and two product managers on the project, scope had to be agreed, not handed over. The clearest example was the ticket journey. I proposed showing it in expandable rows on the dashboard. The product managers and engineers pushed back on the complexity for version 1, and we agreed to give it its own ticket details page and plan the expandable rows for version 2 (decision 8).",
      },
      { t: "ph", n: 9, name: "clm-img-09-sprint-review", desc: "The team, or operations staff, in a sprint review. Caption: which sprint, and what was being decided." },
    ],
  },
  {
    id: "constraints",
    label: "Constraints",
    heading: "Constraints",
    blocks: [
      { t: "p", text: "The design had to work within the support operation, the data that existed, and what engineering could build in the first release." },
      {
        t: "table",
        wide: true,
        head: ["Constraint", "Type", "What it meant for the design"],
        rows: [
          ["The version 1 front end had to stay simple", "Engineering", "The ticket journey moved from expandable dashboard rows to its own ticket details page; expandable rows went to version 2"],
          ["Two-hour SLA on every ticket", "Business", "Time left had to be visible on the ticket and the dashboard, and the next action had to be obvious"],
          ["Caller recognition depended on the IVR", "Engineering", "The routing decision is made when the ticket is created [what recognition matched on, for example the registered phone number]"],
          ["Student data spanned personal details, course, batch, session, refund, PTM and assessment", "Data", "Collapsible sections on the ticket page [which data was available at launch]"],
          ["Different roles could see different data", "Engineering", "Access rules per role, and a designed state for blocked access"],
        ],
      },
    ],
  },
  {
    id: "system-view",
    label: "System view",
    heading: "System view",
    blocks: [
      {
        t: "p",
        text: "CLM is not a set of screens for one user. It connects a caller, a routing system, a new role, several operations teams and their leads. I designed it as one ticket model that every role works from, with access rules deciding what each role can see and do. That kept every role looking at the same ticket, instead of separate tools drifting out of sync.",
      },
      { t: "figure", n: 1, src: "/clm-diagrams/01-system-view.webp", file: "clm-diagrams/01-system-view.png", alt: "System view: every role works from the same tickets" },
    ],
  },
  {
    id: "core-flows",
    label: "Core flows",
    heading: "Core flows",
    blocks: [
      {
        t: "p",
        text: "The core flow is the routing decision. The system identifies the caller through the IVR and sends the ticket to the student's CLM or to the support or inquiry team before an agent answers.",
      },
      { t: "figure", n: 2, src: "/clm-diagrams/02-routing-flow.webp", file: "clm-diagrams/02-routing-flow.png", alt: "IVR routing flow: the call is routed before anyone picks up" },
      { t: "todo", text: "[Confirm the flow: what recognition matched on, and what happened when a known customer's CLM was unavailable.]" },
      { t: "h3", text: "Root and child tickets" },
      {
        t: "p",
        text: "When a query needs another team, the CLM does not hand the student over. The ticket stays with the CLM as the root ticket, and the CLM creates child tickets for the teams that can resolve each part. The student keeps one point of contact throughout.",
      },
      { t: "figure", n: 3, src: "/clm-diagrams/03-root-and-child-tickets.webp", file: "clm-diagrams/03-root-and-child-tickets.png", alt: "Root and child tickets: the CLM owns the root ticket while other teams work child tickets" },
      { t: "todo", text: "[Confirm: who closes the root ticket, and whether it can close before every child ticket is resolved.]" },
      { t: "h3", text: "Information architecture" },
      { t: "p", text: "The platform has a home for each role, with every CLM ticket opening into one ticket details page." },
      { t: "figure", n: 4, src: "/clm-diagrams/04-information-architecture.webp", file: "clm-diagrams/04-information-architecture.png", alt: "CLM information architecture, the full sitemap across roles" },
      {
        t: "p",
        text: "The key structural call was decision 1: the CLM's work lives inside the ticket, not across tabs. The dashboard lists the tickets assigned to the CLM, and each ticket ID opens a page that holds everything about that ticket.",
      },
      { t: "figure", n: 5, src: "/clm-diagrams/05-navigation-explored-vs-chosen.webp", file: "clm-diagrams/05-navigation-explored-vs-chosen.png", alt: "Navigation explored and chosen: the CLM's work lives inside the ticket, not across tabs" },
      { t: "h3", text: "A CLM's ticket, from assignment to close" },
      {
        t: "p",
        text: "This is the CLM's core user flow. From the moment a ticket is assigned to the moment it closes, every step happens on the ticket page.",
      },
      { t: "figure", n: 6, src: "/clm-diagrams/06-clm-user-flow.webp", file: "clm-diagrams/06-clm-user-flow.png", alt: "User flow: a CLM's ticket, from assignment to close" },
      { t: "h3", text: "Entry points" },
      {
        t: "p",
        text: "The IVR call is the main entry point. [Confirm the others, for example inbound WhatsApp, a ticket raised by an agent, or a handoff from another team.]",
      },
      { t: "h3", text: "Ticket lifecycle" },
      {
        t: "table",
        head: ["Status", "Meaning"],
        rows: [
          ["Open", "[confirm]"],
          ["Pending", "[confirm]"],
          ["Follow up", "[confirm]"],
          ["On Hold", "[confirm]"],
          ["Close", "[confirm]"],
        ],
      },
      { t: "todo", text: "[Add the allowed moves between statuses, for example whether On Hold can return to Open, and what each status change asks the agent to fill in.]" },
    ],
  },
  {
    id: "explorations-and-design-decisions",
    label: "Explorations and design decisions",
    heading: "Explorations and design decisions",
    blocks: [
      { t: "p", text: "Eight decisions shaped the platform." },
      { t: "h3", text: "1. Build everything around the ticket" },
      {
        t: "p",
        text: "I first explored a standard dashboard layout with a fixed left navigation, where CLMs would switch between tabs for the CLM dashboard, student data and other sections. I rejected it after looking at what a CLM does day to day. Everything a CLM works on is a ticket: the call and its duration, who it is with, what the query is, the earlier conversation and the communication log. A CLM only needs student data when a ticket is about it, so a separate tab for it would rarely be opened.",
      },
      {
        t: "p",
        text: "So I made the ticket the centre of the platform. Each ticket ID opens a page that holds everything about it: the root and child tickets, the conversation before and after, the logs and the student's details. A CLM goes from picking up a live ticket to closing it without leaving that page.",
      },
      { t: "ph", n: 10, name: "clm-img-10-leftnav-vs-ticket-page", desc: "The early left-navigation exploration next to the final ticket page" },
      { t: "h3", text: "2. Show the essentials first, keep the rest one click away" },
      { t: "p", text: "I split the customer record into three levels by how often an agent needed it on a call." },
      {
        t: "table",
        wide: true,
        head: ["Level", "What sits there", "Why"],
        rows: [
          ["Visible on open", "Ticket ID, lead ID, primary contact, SLA, source, short description", "Needed on every call"],
          ["One click away", "Student Personal Info, Course, Sibling, Batch, Session, Refund, Support Ticket History, PTM, Assessment, as collapsible sections", "Needed on some calls, depending on the issue"],
          ["On demand", "Call recordings, full message threads, activity log", "Needed to investigate, not to answer"],
        ],
      },
      { t: "h3", text: "3. Keep all communication beside the ticket" },
      {
        t: "p",
        text: "I placed a communication rail next to the ticket with three views: Ticket Comms, Activity Log and Ticket Timeline. Ticket Comms holds the WhatsApp thread, messages and call recordings with playback, so an agent never leaves the ticket to check what was said.",
      },
      { t: "h3", text: "4. Link every ticket to its history" },
      {
        t: "p",
        text: "Ticket Timeline shows the root ticket and every child ticket under it, with the team each one went to. A CLM handling a repeat issue sees its full history in one place, instead of starting from zero.",
      },
      { t: "h3", text: "5. Make status changes deliberate" },
      {
        t: "p",
        text: "A ticket moves through Open, Pending, Follow up, On Hold and Close. I designed each status change as its own flow rather than a label switch. [What each change asked for, for example a follow-up date or a reason for hold. Confirm.]",
      },
      { t: "h3", text: "6. One data model, a view per role" },
      {
        t: "p",
        text: "CLMs, team leaders, other teams and leadership work from the same data but need different screens. I designed role-based views over one shared model instead of separate tools, with access rules defining what each role sees. I also designed the blocked-access state (403) for when a user reaches for something outside their role.",
      },
      { t: "h3", text: "7. SLA cards at the top of the dashboard" },
      {
        t: "p",
        text: "Discovery gave me two clear needs. CLMs had to see the tickets assigned to them as soon as they logged in, and they had to see what was urgent. That meant the SLA time left, and how many tickets were breached, pending, on track and due to close that day.",
      },
      {
        t: "p",
        text: "My first version used small filter icons in every column header of the ticket table. I replaced them with SLA cards at the top of the dashboard. Each card shows a count, breaching tickets turn red, and clicking a card filters the table to those tickets. Urgent work became visible at a glance and one click away, instead of sitting behind small icons.",
      },
      { t: "ph", n: 11, name: "clm-img-11-column-filters-vs-sla-cards", desc: "The early version with column filters next to the final SLA cards" },
      { t: "h3", text: "8. The ticket journey on the home dashboard (moved to version 2)" },
      {
        t: "p",
        text: "I proposed expandable rows on the CLM home dashboard. Expanding a row would show the ticket's full journey: when it opened and closed, who it was assigned to along the way, its child tickets, and the teams they went to. A CLM could track every ticket without opening it.",
      },
      {
        t: "p",
        text: "The product managers felt it added complexity, and engineering pushed back because it made the version 1 front end harder to build. We agreed to move it to version 2. For version 1, the ticket journey moved to its own page. Clicking a ticket ID opens the ticket details page, with the ticket details, student details, ticket comms, ticket timeline and the assignee's details in one place.",
      },
      { t: "todo", text: "[Did it ship in version 2? If yes, add the screen.]" },
    ],
  },
  {
    id: "final-design",
    label: "Final design",
    heading: "Final design",
    blocks: [
      { t: "p", text: "The shipped platform has four parts: the ticket workspace, the status flows, the role-based dashboards and the access states." },
      { t: "h3", text: "Ticket workspace" },
      {
        t: "p",
        text: "Clicking a ticket ID opens the ticket details page. I designed this page myself, from wireframe to final layout. The ticket header carries the essentials, the collapsible sections hold the student and batch details, and the communication log sits on the right.",
      },
      { t: "ph", n: 12, name: "clm-img-12-ticket-details-full", desc: "The full ticket details page, header and collapsed sections" },
      { t: "ph", n: 13, name: "clm-img-13-student-personal-info-expanded", desc: "Student Personal Info expanded" },
      { t: "ph", n: 14, name: "clm-img-14-communication-log", desc: "The communication log with the WhatsApp thread and a call recording" },
      { t: "ph", n: 15, name: "clm-img-15-ticket-timeline", desc: "Ticket Timeline showing a root ticket and its child tickets" },
      { t: "h3", text: "Status flows" },
      { t: "ph", n: 16, name: "clm-img-16-change-status-flow", desc: "The Change Status flow, with one status opened" },
      { t: "h3", text: "Role-based dashboards" },
      {
        t: "table",
        wide: true,
        head: ["Role", "What they see", "What they can do"],
        rows: [
          ["CLM", "Their assigned tickets, how many are breaching the SLA, and other tickets assigned to other people or teams", "Work tickets, change status, create child tickets for other teams"],
          ["Team leader", "Their team's tickets and load", "Add and edit the CLMs in their team [reassign tickets? Confirm]"],
          ["Other teams", "Child tickets assigned to their team [confirm]", "[Confirm]"],
          ["Leadership", "Overview across all teams [which metrics? Confirm]", "[Confirm]"],
        ],
      },
      {
        t: "p",
        text: "The CLM dashboard opens on the tickets assigned to that CLM. SLA cards at the top show how many are breached, pending and on track. Breaching tickets turn red, and clicking a card filters the table to those tickets.",
      },
      {
        t: "p",
        text: "The dashboard also has an Other Tickets view. Because the IVR routes every call into one system, a CLM can see tickets assigned to other people or teams, such as the refunds team, and know where a student's issue has gone.",
      },
      { t: "ph", n: 17, name: "clm-img-17-clm-dashboard", desc: "CLM dashboard with the SLA cards and the Other Tickets view" },
      { t: "ph", n: 18, name: "clm-img-18-team-leader-dashboard", desc: "Team leader dashboard with My Team" },
      { t: "ph", n: 19, name: "clm-img-19-leadership-overview", desc: "Leadership overview" },
      { t: "h3", text: "Access states" },
      { t: "ph", n: 20, name: "clm-img-20-403-state", desc: "The 403 state for a user without access to a page" },
      { t: "todo", text: "[If batch allocation and lifecycle automation were part of this project, add them here with one screen each.]" },
    ],
  },
  {
    id: "testing-with-operations",
    label: "Testing with operations",
    heading: "Testing with operations",
    blocks: [
      {
        t: "p",
        text: "Testing ran inside the sprints. The operations executives and the team lead reviewed the designs and the prototypes as they were built, and their feedback went into the next round. I decided which flows to prototype and how, and the designers on my team built the prototypes.",
      },
      { t: "h3", text: "What changed after testing" },
      {
        t: "table",
        head: ["What we heard", "What I changed"],
        rows: [
          ["[feedback]", "[change]"],
          ["[feedback]", "[change]"],
        ],
      },
      { t: "todo", text: "[Two or three real changes are enough. This table shows iteration with reasoning, which reviewers look for.]" },
    ],
  },
  {
    id: "outcome",
    label: "Outcome",
    heading: "Outcome",
    blocks: [
      { t: "p", text: "CLM changed how Bhanzu's support worked, from who answers a call to how a team lead sees what is breaching." },
      {
        t: "table",
        wide: true,
        head: ["Area", "Before, on Zendesk", "After, on CLM"],
        rows: [
          ["Ownership", "Any agent picked up any call", "Every paying student has one CLM"],
          ["Routing", "Agents identified callers by hand", "The IVR recognises the caller and routes the ticket"],
          ["Ticket structure", "No category on tickets", "Every ticket is categorised when it is created"],
          ["Time limits", "No SLA", "A two-hour SLA, with breaching tickets in red"],
          ["Customer record", "Zendesk, notes and Excel sheets", "One ticket page with the student record and the conversation"],
          ["Work across teams", "No structure for handoffs", "Child tickets assigned to the team that can resolve them"],
          ["Team lead visibility", "Little to none", "A view of the team's tickets and load"],
          ["Operations agents", "Around 20 to 25", "Fewer agents needed"],
        ],
      },
      { t: "todo", text: "[Measurable results: ask a former colleague at Bhanzu, such as the operations team lead or one of the product managers, for approximate figures on repeat calls, refund requests or SLA adherence after launch. Add only figures they confirm.]" },
    ],
  },
  {
    id: "reflection",
    label: "Reflection",
    heading: "Reflection",
    blocks: [
      {
        t: "ul",
        items: [
          "Measure from day one. I do not have measured results from after launch. If I ran this again, I would agree baseline measures with the product managers at the start, such as repeat calls, refund requests and SLA adherence, so the impact could be shown in numbers.",
          "[A second point in your own words, for example what you learned from bringing operations into the sprints, or from moving the ticket journey to version 2.]",
        ],
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Rendering
// ---------------------------------------------------------------------------

// Highlight any [square-bracketed] note inline as a visible TODO mark, so every
// note to the user is findable in prose, list items and table cells. Copy is
// otherwise rendered verbatim.
function renderInline(text: string) {
  const parts = text.split(/(\[[^\]]*\])/g);
  return parts.map((p, i) =>
    /^\[[^\]]*\]$/.test(p) ? (
      <mark key={i} className="cs-todo-in" title="TODO: note to fill in">
        {p}
      </mark>
    ) : (
      <span key={i}>{p}</span>
    )
  );
}

function Table({ head, rows, wide }: TableData) {
  return (
    <div className={`cs-tablewrap${wide ? " wide" : ""}`}>
      <table className="cs-table">
        {head ? (
          <thead>
            <tr>
              {head.map((h, i) => (
                <th key={i}>{renderInline(h)}</th>
              ))}
            </tr>
          </thead>
        ) : null}
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((c, j) => (
                <td key={j}>{renderInline(c)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Placeholder({ n, name, desc }: { n: number; name: string; desc: string }) {
  const num = String(n).padStart(2, "0");
  return (
    <figure className="cs-ph" data-img={name} aria-label={`Image placeholder ${num}: ${desc}`}>
      <div className="cs-ph-num">Image {num}</div>
      <div className="cs-ph-desc">{desc}</div>
      <div className="cs-ph-name">{name}</div>
    </figure>
  );
}

export default function ClmCaseStudy() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const railSections = SECTIONS.map((s) => ({ id: s.id, label: s.label }));

  const close = useCallback(() => setLightbox(null), []);
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [lightbox, close]);

  const renderBlock = (b: Block, key: number) => {
    switch (b.t) {
      case "p":
        return (
          <div key={key} className="cs-body">
            <p>{renderInline(b.text)}</p>
          </div>
        );
      case "h3":
        return (
          <h3 key={key} className="cs-h3">
            {b.text}
          </h3>
        );
      case "ul":
        return (
          <ul key={key} className="cs-ul">
            {b.items.map((it, i) => (
              <li key={i}>{renderInline(it)}</li>
            ))}
          </ul>
        );
      case "table":
        return <Table key={key} head={b.head} rows={b.rows} wide={b.wide} />;
      case "ph":
        return <Placeholder key={key} n={b.n} name={b.name} desc={b.desc} />;
      case "todo":
        return (
          <div key={key} className="cs-todo">
            <span className="cs-todo-tag">TODO</span>
            <span className="cs-todo-text">{b.text}</span>
          </div>
        );
      case "figure": {
        const num = String(b.n).padStart(2, "0");
        if (!b.src) {
          return (
            <figure key={key} className="cs-fig cs-fig-missing" aria-label={`Diagram ${num} pending: ${b.alt}`}>
              <div className="cs-fig-missing-tag">Diagram {num} pending</div>
              <div className="cs-fig-missing-desc">{b.alt}</div>
              <div className="cs-fig-missing-file">{b.file} was not provided</div>
            </figure>
          );
        }
        return (
          <figure key={key} className="cs-fig">
            <button type="button" className="cs-fig-btn" onClick={() => setLightbox({ src: b.src as string, alt: b.alt })} aria-label={`Open full size: ${b.alt}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={b.src} alt={b.alt} />
              <span className="cs-fig-zoom" aria-hidden>
                Click to enlarge
              </span>
            </button>
            <figcaption>{b.alt}</figcaption>
          </figure>
        );
      }
      default:
        return null;
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: caseStudyCss }} />
      <style dangerouslySetInnerHTML={{ __html: clmExtrasCss }} />
      <main className="cs" id="main">
        <div className="cs-page">
          <nav className="cs-breadcrumb" aria-label="Breadcrumb">
            <Link href="/#work" className="cs-bc-link">
              <svg className="cs-bc-arrow" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M19 12H5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Work
            </Link>
            <span className="cs-bc-sep" aria-hidden>
              /
            </span>
            <span className="cs-bc-current">Bhanzu CLM</span>
          </nav>

          <CaseRail sections={railSections} />

          <div className="cs-content">
            <h1 className="cs-h1">Building Bhanzu&apos;s in-house customer support platform</h1>
            <p className="cs-subtitle">Customer Lifecycle Management (CLM), Bhanzu</p>

            {/* Overview area: cover, the overview table, and the highlights */}
            <Placeholder n={COVER.n} name={COVER.name} desc={COVER.desc} />

            <hr className="cs-div cs-div-hero" />

            <Table rows={OVERVIEW_TABLE.rows} />

            <div className="cs-highlights">
              <div className="cs-highlights-label">Highlights</div>
              <ul className="cs-ul">
                {HIGHLIGHTS.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>

            <hr className="cs-div cs-div-meta" />

            <div className="cs-sections">
              {SECTIONS.map((s) => (
                <section key={s.id} id={s.id} className="cs-section">
                  <h2 className="cs-h2">{s.heading}</h2>
                  {s.blocks.map((b, i) => renderBlock(b, i))}
                </section>
              ))}
            </div>
          </div>
        </div>

        <div className="cs-footerwrap">
          <Footer />
        </div>
      </main>

      {lightbox ? (
        <div className="cs-lightbox" role="dialog" aria-modal="true" aria-label={lightbox.alt} onClick={close}>
          <button type="button" className="cs-lightbox-close" onClick={close} aria-label="Close">
            &times;
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={lightbox.src} alt={lightbox.alt} onClick={(e) => e.stopPropagation()} />
        </div>
      ) : null}
    </>
  );
}

// ---------------------------------------------------------------------------
// Page-local additive styles. New `.cs-*` classes only; nothing here overrides
// a shared template rule or affects any other case study. Font stacks are
// written literally (the template's own variables resolve on this page because
// the same `.cs` root is used, but figures/tables/placeholders live inside it).
// ---------------------------------------------------------------------------

const clmExtrasCss = `
.cs-subtitle{ margin:12px 0 0; font-family:var(--inter); font-weight:400; font-size:18px; line-height:1.5; color:#8c8c8c; max-width:var(--col); }

/* figures sit full content width; placeholders and figures can exceed the text column */
.cs-content{ --fig: 100%; }

/* ---- tables ---- */
.cs-tablewrap{ margin-top:24px; max-width:var(--col); overflow-x:auto; }
.cs-tablewrap.wide{ max-width:100%; }
.cs-table{ width:100%; border-collapse:collapse; font-family:var(--inter); }
.cs-table th{ text-align:left; vertical-align:top; padding:12px 18px 12px 0; font-weight:600; font-size:13px; letter-spacing:0.06em; text-transform:uppercase; color:#969696; border-bottom:1.5px solid var(--divider); }
.cs-table td{ text-align:left; vertical-align:top; padding:14px 18px 14px 0; font-size:16px; line-height:1.5; color:#464646; border-bottom:1px solid var(--divider); }
.cs-table td:last-child, .cs-table th:last-child{ padding-right:0; }
.cs-table tbody tr:last-child td{ border-bottom:0; }
/* first column reads as the row's label */
.cs-table td:first-child{ font-weight:500; color:#42444d; }
.cs-table.wide td, .cs-table.wide th{ padding-right:28px; }
/* wide (3-column) tables keep readable columns and scroll inside their wrapper
   rather than widening the shared content column */
.cs-tablewrap.wide .cs-table{ min-width:560px; }

/* ---- body lists ---- */
.cs-ul{ margin:16px 0 0; padding-left:22px; max-width:var(--col); font-family:var(--times); font-size:18px; line-height:1.6; color:#464646; }
.cs-ul li{ margin:0; padding-left:4px; }
.cs-ul li::marker{ color:#b4a4d2; }
.cs-ul li + li{ margin-top:10px; }

/* ---- highlights (overview area) ---- */
.cs-highlights{ margin-top:28px; max-width:var(--col); border-left:3px solid var(--accent); padding:4px 0 4px 22px; }
.cs-highlights-label{ font-family:var(--inter); font-weight:600; font-size:13px; letter-spacing:0.08em; text-transform:uppercase; color:#969696; }
.cs-highlights .cs-ul{ margin-top:12px; padding-left:18px; }

/* ---- figures / diagrams ---- */
.cs-fig{ margin:28px 0 0; width:100%; }
.cs-fig-btn{ display:block; width:100%; padding:0; border:1px solid var(--divider); border-radius:8px; background:#fff; cursor:zoom-in; overflow:hidden; position:relative; }
.cs-fig-btn:hover{ border-color:#cdbdea; }
.cs-fig-btn:focus-visible{ outline:2px solid var(--accent); outline-offset:3px; }
.cs-fig-btn img{ display:block; width:100%; height:auto; }
.cs-fig-zoom{ position:absolute; right:12px; bottom:12px; font-family:var(--inter); font-size:12px; font-weight:500; color:#5b5b5b; background:rgba(255,255,255,0.92); border:1px solid var(--divider); border-radius:999px; padding:5px 11px; opacity:0; transition:opacity .15s; pointer-events:none; }
.cs-fig-btn:hover .cs-fig-zoom, .cs-fig-btn:focus-visible .cs-fig-zoom{ opacity:1; }
.cs-fig figcaption{ margin-top:10px; font-family:var(--inter); font-size:13px; line-height:1.45; color:#8c8c8c; }

.cs-fig-missing{ border:1.5px dashed #d8b4b4; border-radius:8px; background:#fdf6f6; padding:28px; }
.cs-fig-missing-tag{ font-family:var(--inter); font-weight:600; font-size:12px; letter-spacing:0.06em; text-transform:uppercase; color:#b5584f; }
.cs-fig-missing-desc{ margin-top:8px; font-family:var(--inter); font-size:16px; color:#5f5f5f; }
.cs-fig-missing-file{ margin-top:6px; font-family:var(--roboto); font-size:13px; color:#9a9a9a; }

/* ---- image placeholders ---- */
.cs-ph{ margin:28px 0 0; width:100%; min-height:200px; border:1.5px dashed #cfcfcf; border-radius:8px; background:#fafafa; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; gap:8px; padding:36px 28px; }
.cs-ph-num{ font-family:var(--inter); font-weight:600; font-size:12px; letter-spacing:0.1em; text-transform:uppercase; color:var(--accent); }
.cs-ph-desc{ font-family:var(--inter); font-size:16px; line-height:1.5; color:#5f5f5f; max-width:560px; }
.cs-ph-name{ font-family:var(--roboto); font-size:12.5px; color:#a6a6a6; background:#f0f0f0; border-radius:4px; padding:3px 9px; }

/* ---- TODO notes to the user ---- */
.cs-todo{ margin-top:20px; max-width:var(--col); display:flex; gap:12px; align-items:flex-start; background:#fff7d6; border:1px solid #f0d675; border-left:3px solid #e0a800; border-radius:6px; padding:12px 16px; }
.cs-todo-tag{ flex:none; font-family:var(--inter); font-weight:700; font-size:11px; letter-spacing:0.08em; color:#8a6d00; background:#ffe99a; border-radius:4px; padding:3px 7px; margin-top:1px; }
.cs-todo-text{ font-family:var(--inter); font-size:15px; line-height:1.55; color:#6b5600; }
.cs-todo-in{ background:#ffe99a; color:#6b5600; border-radius:3px; padding:0 4px; box-decoration-break:clone; -webkit-box-decoration-break:clone; }

@media (max-width:767px){
  /* let the single mobile column shrink below its content's intrinsic width, so
     a wide table scrolls inside its own wrapper instead of forcing the whole
     page (H1, dividers, placeholders) wider than the viewport. Page-local; the
     shared stylesheet is untouched. */
  .cs-page{ grid-template-columns:minmax(0,1fr); }
  .cs-subtitle{ font-size:16px; }
  .cs-table td{ font-size:15px; }
  .cs-ul{ font-size:16px; }
  .cs-ph{ min-height:160px; padding:28px 20px; }
}

/* ---- lightbox ---- */
.cs-lightbox{ position:fixed; inset:0; z-index:100; background:rgba(20,20,22,0.82); display:flex; align-items:center; justify-content:center; padding:32px; }
.cs-lightbox img{ max-width:min(1400px, 95vw); max-height:92vh; width:auto; height:auto; border-radius:8px; box-shadow:0 20px 60px rgba(0,0,0,0.4); background:#fff; cursor:default; }
.cs-lightbox-close{ position:fixed; top:18px; right:22px; width:40px; height:40px; border:0; border-radius:999px; background:rgba(255,255,255,0.14); color:#fff; font-size:26px; line-height:1; cursor:pointer; }
.cs-lightbox-close:hover{ background:rgba(255,255,255,0.26); }
.cs-lightbox-close:focus-visible{ outline:2px solid #fff; outline-offset:2px; }
`;
