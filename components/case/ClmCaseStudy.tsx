"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import CaseRail from "@/components/case/CaseRail";
import { caseStudyCss } from "@/content/case-study-styles";

/**
 * Bhanzu CLM case study.
 *
 * Reuses the shared case-study template verbatim: the same frozen stylesheet
 * (`caseStudyCss`), the same `CaseRail`, the same DOM shell and the original
 * horizontal meta row. Layout, fonts, spacing, sticky breadcrumb, sticky nav
 * and mobile rules are the template's; only the content and the content-level
 * layout (tables, diagrams, placeholders, paired and half-width media) live
 * here, through one additive page-local stylesheet (`clmExtrasCss`). Copy is
 * transcribed verbatim from the source file. The shared template files are not
 * touched.
 */

// ---------------------------------------------------------------------------
// Content model
// ---------------------------------------------------------------------------

type TableData = { head?: string[]; rows: string[][] };
type MediaItem = { n: number; name: string; desc: string; src?: string; alt?: string };
type Block =
  | { t: "p"; text: string }
  | { t: "h3"; text: string }
  | { t: "ul"; items: string[] }
  | ({ t: "table" } & TableData)
  | { t: "figure"; src: string; alt: string }
  | { t: "ph"; n: number; name: string; desc: string }
  | { t: "pair"; items: [MediaItem, MediaItem] }
  | { t: "halfText"; item: MediaItem; text: string };
type Section = { id: string; label: string; heading: string; blocks: Block[] };

// Overview area (above the sections): the cover, then the original horizontal
// meta row filled from the file's "Project details" line.
const COVER = { n: 1, name: "clm-img-01-cover-ticket-details", desc: "Cover, the ticket details page" };

const META: { label: string; value: string }[] = [
  { label: "Role", value: "Design Lead" },
  { label: "Company", value: "Bhanzu, EdTech" },
  { label: "Timeline", value: "Mar - Dec 2022" },
  { label: "Team", value: "3 designers, 20 to 25 engineers, 2 product managers" },
  { label: "Platform", value: "Web, internal tool" },
];

const SECTIONS: Section[] = [
  {
    id: "overview",
    label: "Overview",
    heading: "Overview",
    blocks: [
      {
        t: "p",
        text: "I led the design of CLM (Customer Lifecycle Management), the in-house support platform that replaced Zendesk at Bhanzu. CLM gives every paying student one Customer Lifecycle Manager, recognises callers through the IVR, and routes each ticket to the right person before anyone answers. The platform handled around 500 to 600 tickets a day. Every paying student got one point of contact, and every ticket got a category, an owner and an SLA. The scope covered IVR-based routing, the ticket workspace, root and child tickets, status flows, role-based dashboards and access states.",
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
      { t: "ph", n: 2, name: "clm-img-02-ops-calls-gallery", desc: "Screenshots from the calls with the operations executives and the operations team lead. Caption: who each call was with." },
      { t: "h3", text: "Communication channels" },
      {
        t: "p",
        text: "I also mapped every channel a conversation ran through: email, WhatsApp and the direct call line. No single place showed a student's conversation across all three.",
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
      { t: "h3", text: "Market scan" },
      {
        t: "p",
        text: "To understand how similar platforms handle support, I reviewed Zendesk alternatives: Freshdesk from Freshworks, Intercom and Zoho Desk. I looked at how each one routes and assigns tickets, shows SLAs, and keeps conversations from different channels on the ticket.",
      },
      {
        t: "table",
        head: ["Platform", "What it is built around", "What I took from it"],
        rows: [
          ["Freshdesk (Freshworks)", "Ticketing with SLA policies and automatic assignment", "SLA timers belong on the ticket itself, not in a separate report"],
          ["Intercom", "A messaging inbox that brings conversations into one thread", "The conversation should sit beside the ticket, not in another tool"],
          ["Zoho Desk", "Ticketing with SLAs and escalation for support teams", "Team leads need breaches surfaced for them, not hunted for"],
        ],
      },
      {
        t: "p",
        text: "All three are built for general support teams. None of them came with Bhanzu's own student data, such as course, batch and refund eligibility. CLM needed that data on every ticket, so it had to be built around Bhanzu's own systems.",
      },
      { t: "h3", text: "From Zendesk to CLM" },
      {
        t: "p",
        text: "For every workflow, I mapped how it ran in Zendesk and what it would need to become on the new platform. This mapping became the brief for the design.",
      },
      {
        t: "table",
        head: ["Today, in Zendesk", "What CLM needed to do"],
        rows: [
          ["Any agent picked up any call", "Route each existing student to their own CLM"],
          ["Tickets had no category; new and existing students were mixed", "Recognise the caller and categorise the ticket when it is created"],
          ["No time limits and no escalation", "Put an SLA on every ticket and make breaches visible"],
          ["Work tracked across Zendesk, notes and Excel sheets", "Hold the student record and the conversation on one ticket page"],
          ["Conversations spread across email, WhatsApp and calls", "Bring the conversation into the ticket"],
          ["CLMs could not see their own work or what was urgent", "Show assigned tickets and SLA status first on the dashboard"],
          ["The team lead had little visibility", "Give the team lead a view of the team's tickets and load"],
          ["Many queries needed another team to resolve", "Let the CLM pass work to other teams without losing ownership"],
        ],
      },
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
        head: ["Open question at the start", "How I resolved it"],
        rows: [
          ["What does a CLM actually do all day?", "Mapped it with the operations team. Every task a CLM does starts and ends with a ticket, so the platform is built around the ticket"],
          ["How does a ticket reach the right person?", "The IVR recognises the caller, and the ticket is categorised and routed when it is created"],
          ["What happens when a CLM cannot resolve a query alone?", "The CLM keeps the root ticket and creates child tickets for the teams that can resolve each part"],
          ["What counts as urgent?", "A two-hour SLA on every ticket, with breached, pending and on-track counts on the dashboard"],
          ["How does the team lead stay in control?", "A team leader view of the team's tickets and load"],
        ],
      },
      { t: "h3", text: "How a call reaches the right person" },
      {
        t: "p",
        text: "The routing flow answered the second question. The system identifies the caller through the IVR and sends the ticket to the student's CLM or to the support or inquiry team before an agent answers.",
      },
      { t: "figure", src: "/clm-diagrams/02-routing-flow.webp", alt: "IVR routing flow: the call is routed before anyone picks up" },
      { t: "h3", text: "When a CLM needs another team" },
      {
        t: "p",
        text: "When a query needs another team, the CLM does not hand the student over. The ticket stays with the CLM as the root ticket, and the CLM creates child tickets for the teams that can resolve each part. The student keeps one point of contact throughout.",
      },
      { t: "figure", src: "/clm-diagrams/03-root-and-child-tickets.webp", alt: "Root and child tickets: the CLM owns the root ticket while other teams work child tickets" },
    ],
  },
  {
    id: "how-i-led-the-project",
    label: "How I led the project",
    heading: "How I led the project",
    blocks: [
      { t: "p", text: "I ran the project in sprints and led a cross-functional team of designers, engineers, product managers, support operations and operations staff." },
      { t: "figure", src: "/clm-images/sprint-1-team.webp", alt: "Sprint 1, with designers, engineers, product managers and operations staff in the room" },
      {
        t: "p",
        text: "The work ran in sprints over nine months. Discovery came first: I planned and ran the calls with every operations executive and the operations team lead, and mapped their processes, channels and pain points. In Sprint 1, I designed the wireframes, the structure and the core flows myself, including routing and the ticket workspace.",
      },
      {
        t: "p",
        text: "The next phase covered the role-based dashboards, the SLA cards and the status flows, where I designed the SLA cards and the filtering. The last phase was the engineering build. I agreed the version 1 scope with the product managers and engineers, and moved the ticket journey to its own page.",
      },
      {
        t: "pair",
        items: [
          { n: 3, name: "clm-img-03-sprint-1", desc: "Sprint 1", src: "/clm-images/sprint-1.webp", alt: "Sprint 1" },
          { n: 4, name: "clm-img-04-sprint-3", desc: "Sprint 3", src: "/clm-images/sprint-3.webp", alt: "Sprint 3" },
        ],
      },
      { t: "h3", text: "How the work was split" },
      {
        t: "p",
        text: "The team brainstormed together, then I designed the wireframes, the structure and the core flows myself. That includes the CLM ticket workspace, where the ticket lands after routing. I assigned work across the three designers and decided what would be prototyped and how. The designers built the prototypes.",
      },
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
        head: ["Constraint", "Type", "What it meant for the design"],
        rows: [
          ["The version 1 front end had to stay simple", "Engineering", "The ticket journey moved from expandable dashboard rows to its own ticket details page; expandable rows went to version 2"],
          ["Two-hour SLA on every ticket", "Business", "Time left had to be visible on the ticket and the dashboard, and the next action had to be obvious"],
          ["Caller recognition depended on the IVR", "Engineering", "The routing decision is made when the ticket is created"],
          ["Student data spanned personal details, course, batch, session, refund, PTM and assessment", "Data", "Collapsible sections on the ticket page"],
          ["Different roles could see different data", "Engineering", "Access rules per role, and a designed state for blocked access"],
          ["No design system at the time", "Design", "The screens were built on a purchased UI component library, so designers and engineers worked from one shared set of components"],
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
      { t: "figure", src: "/clm-diagrams/01-system-view.webp", alt: "System view: every role works from the same tickets" },
    ],
  },
  {
    id: "core-flows",
    label: "Core flows",
    heading: "Core flows",
    blocks: [
      {
        t: "p",
        text: "The CLM's core user flow is the ticket journey. From the moment a ticket is assigned to the moment it closes, every step happens on the ticket page.",
      },
      { t: "figure", src: "/clm-diagrams/06-clm-user-flow.webp", alt: "User flow: a CLM's ticket, from assignment to close" },
      { t: "h3", text: "Entry points" },
      { t: "p", text: "The IVR call is the main entry point. Other teams receive work as child tickets created by a CLM." },
      { t: "h3", text: "Ticket lifecycle" },
      {
        t: "table",
        head: ["Status", "Meaning"],
        rows: [
          ["Open", "New ticket, not yet worked on"],
          ["Pending", "Being worked on, waiting for the next step"],
          ["Follow up", "The CLM needs to get back to the customer"],
          ["On Hold", "Paused, waiting on another team or the customer"],
          ["Close", "Resolved"],
        ],
      },
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
      { t: "figure", src: "/clm-diagrams/05-navigation-explored-vs-chosen.webp", alt: "Navigation explored and chosen: the CLM's work lives inside the ticket, not across tabs" },
      { t: "h3", text: "2. Show the essentials first, keep the rest one click away" },
      { t: "p", text: "I split the customer record into three levels by how often an agent needed it on a call." },
      {
        t: "table",
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
        text: "A ticket moves through Open, Pending, Follow up, On Hold and Close. I designed each status change as its own flow rather than a label switch.",
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
      { t: "h3", text: "8. The ticket journey on the home dashboard (moved to version 2)" },
      {
        t: "p",
        text: "I proposed expandable rows on the CLM home dashboard. Expanding a row would show the ticket's full journey: when it opened and closed, who it was assigned to along the way, its child tickets, and the teams they went to. A CLM could track every ticket without opening it.",
      },
      {
        t: "p",
        text: "The product managers felt it added complexity, and engineering pushed back because it made the version 1 front end harder to build. We agreed to move it to version 2. For version 1, the ticket journey moved to its own page. Clicking a ticket ID opens the ticket details page, with the ticket details, student details, ticket comms, ticket timeline and the assignee's details in one place.",
      },
    ],
  },
  {
    id: "information-architecture",
    label: "Information architecture",
    heading: "Information architecture",
    blocks: [
      {
        t: "p",
        text: "The final structure gives each role its own home, and every CLM ticket opens into one ticket details page. It follows from decision 1: the CLM's work lives inside the ticket, not across tabs.",
      },
      { t: "figure", src: "/clm-diagrams/04-information-architecture.webp", alt: "CLM information architecture, the full sitemap across roles" },
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
      { t: "ph", n: 5, name: "clm-img-05-ticket-details-full", desc: "The full ticket details page, header and collapsed sections" },
      {
        t: "pair",
        items: [
          { n: 6, name: "clm-img-06-student-personal-info", desc: "Student Personal Info expanded" },
          { n: 7, name: "clm-img-07-communication-log", desc: "The communication log with the WhatsApp thread and a call recording" },
        ],
      },
      { t: "h3", text: "Status flows and ticket history" },
      {
        t: "pair",
        items: [
          { n: 8, name: "clm-img-08-change-status-flow", desc: "The Change Status flow, with one status opened" },
          { n: 9, name: "clm-img-09-ticket-timeline", desc: "Ticket Timeline showing a root ticket and its child tickets" },
        ],
      },
      { t: "h3", text: "Role-based dashboards" },
      {
        t: "table",
        head: ["Role", "What they see", "What they can do"],
        rows: [
          ["CLM", "Their assigned tickets, how many are breaching the SLA, and other tickets assigned to other people or teams", "Work tickets, change status, create child tickets for other teams"],
          ["Team leader", "Their team's tickets and load", "Add and edit the CLMs in their team"],
          ["Other teams", "Child tickets assigned to their team", "Work and resolve those child tickets"],
          ["Leadership", "Overview across all teams", "Monitor load and SLA status across teams"],
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
      { t: "ph", n: 10, name: "clm-img-10-clm-dashboard", desc: "CLM dashboard with the SLA cards and the Other Tickets view" },
      {
        t: "pair",
        items: [
          { n: 11, name: "clm-img-11-team-leader-dashboard", desc: "Team leader dashboard with My Team" },
          { n: 12, name: "clm-img-12-leadership-overview", desc: "Leadership overview" },
        ],
      },
      { t: "h3", text: "Access states" },
      {
        t: "halfText",
        item: { n: 13, name: "clm-img-13-403-state", desc: "The 403 state for a user without access to a page" },
        text: "Each role sees only what it needs. When a user opens a page outside their role, they see a designed blocked-access state instead of a dead end.",
      },
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
      { t: "h3", text: "What changed across the sprints" },
      {
        t: "table",
        head: ["Before", "After", "Why"],
        rows: [
          ["A dashboard with a fixed left navigation and separate tabs", "Everything inside the ticket details page", "A CLM's whole day is tickets, and they rarely needed to switch tabs"],
          ["Small filter icons in every column header", "Clickable SLA cards at the top of the dashboard", "Urgent work had to be visible at a glance"],
          ["The ticket journey in expandable dashboard rows", "The ticket journey on its own ticket details page", "The version 1 front end had to stay simple"],
        ],
      },
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
      { t: "h3", text: "What success looked like" },
      {
        t: "p",
        text: "The goals behind CLM were one point of contact for every paying student, a two-hour SLA on every ticket, and fewer refund requests from existing students. The platform delivered the first two by design. I do not have refund figures from after launch, which is why measurement is the first point in my reflection.",
      },
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
          "Bring engineering in before the detail. My expandable-rows proposal moved to version 2 because of front-end complexity. Today I would test feasibility with engineering at the concept stage, before a design is fully detailed.",
        ],
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Rendering
// ---------------------------------------------------------------------------

// Render any [square-bracketed] note inline as a visible mark (none remain in
// the current copy, kept as a safeguard). Copy is otherwise verbatim.
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

function Table({ head, rows }: TableData) {
  return (
    <div className="cs-tablewrap">
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

  // A clickable, keyboard-accessible figure (a div, not a <button>, so it does
  // not size to the image's intrinsic width). Scales to its container, aspect
  // kept, never cropped.
  const figure = (key: string | number, src: string, alt: string, caption?: string) => {
    const open = () => setLightbox({ src, alt });
    return (
      <figure key={key} className="cs-fig">
        <div
          className="cs-fig-btn"
          role="button"
          tabIndex={0}
          onClick={open}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              open();
            }
          }}
          aria-label={`Open full size: ${alt}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} />
          <span className="cs-fig-zoom" aria-hidden>
            Click to enlarge
          </span>
        </div>
        {caption ? <figcaption>{caption}</figcaption> : <figcaption>{alt}</figcaption>}
      </figure>
    );
  };

  // One media slot: a real image (figure) when a src is supplied, otherwise a
  // numbered placeholder. Used on its own and inside pairs / half-width rows.
  const mediaItem = (it: MediaItem, key: string | number) =>
    it.src ? figure(key, it.src, it.alt ?? it.desc, it.desc) : <Placeholder key={key} n={it.n} name={it.name} desc={it.desc} />;

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
        return <Table key={key} head={b.head} rows={b.rows} />;
      case "ph":
        return <Placeholder key={key} n={b.n} name={b.name} desc={b.desc} />;
      case "figure":
        return figure(key, b.src, b.alt);
      case "pair":
        return (
          <div key={key} className="cs-pair">
            {mediaItem(b.items[0], 0)}
            {mediaItem(b.items[1], 1)}
          </div>
        );
      case "halfText":
        return (
          <div key={key} className="cs-halftext">
            {mediaItem(b.item, 0)}
            <div className="cs-halftext-body">{renderInline(b.text)}</div>
          </div>
        );
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

            {/* Cover, then the original horizontal meta row */}
            <Placeholder n={COVER.n} name={COVER.name} desc={COVER.desc} />

            <hr className="cs-div cs-div-hero" />

            <div className="cs-meta">
              {META.map((m) => (
                <div key={m.label} className="cs-meta-item">
                  <div className="cs-meta-label">{m.label}</div>
                  <div className="cs-meta-value">{m.value}</div>
                </div>
              ))}
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
// a shared template rule or affects any other case study. Every content element
// is capped at the body text column (var(--col)) and never wider.
// ---------------------------------------------------------------------------

const clmExtrasCss = `
.cs-subtitle{ margin:12px 0 0; font-family:var(--inter); font-weight:400; font-size:18px; line-height:1.5; color:#8c8c8c; max-width:var(--col); }

/* ---- tables (share the body text column) ---- */
.cs-tablewrap{ margin-top:24px; width:100%; max-width:var(--col); overflow-x:auto; }
.cs-table{ width:100%; border-collapse:collapse; font-family:var(--inter); }
.cs-table th{ text-align:left; vertical-align:top; padding:12px 18px 12px 0; font-weight:600; font-size:13px; letter-spacing:0.06em; text-transform:uppercase; color:#969696; border-bottom:1.5px solid var(--divider); }
.cs-table td{ text-align:left; vertical-align:top; padding:14px 18px 14px 0; font-family:var(--body); font-size:16px; line-height:1.33; letter-spacing:normal; color:#464646; border-bottom:1px solid var(--divider); }
.cs-table td:last-child, .cs-table th:last-child{ padding-right:0; }
.cs-table tbody tr:last-child td{ border-bottom:0; }
.cs-table td strong, .cs-table td b{ font-weight:600; }
.cs-table td:first-child{ font-weight:600; color:#42444d; }

/* ---- body lists ---- */
.cs-ul{ margin:16px 0 0; padding-left:22px; max-width:var(--col); font-family:var(--body); font-size:16px; line-height:1.33; letter-spacing:normal; color:#464646; }
.cs-ul li{ margin:0; padding-left:4px; }
.cs-ul li::marker{ color:#b4a4d2; }
.cs-ul li + li{ margin-top:8px; }
.cs-ul strong, .cs-ul b{ font-weight:600; }

/* ---- figures / diagrams (capped at the body column; scale down, aspect kept) ---- */
.cs-fig{ margin:28px 0 0; width:100%; max-width:var(--col); }
.cs-fig-btn{ display:block; width:100%; max-width:100%; min-width:0; padding:0; border:1px solid var(--divider); border-radius:8px; background:#fff; cursor:zoom-in; overflow:hidden; position:relative; }
.cs-fig-btn:hover{ border-color:#cdbdea; }
.cs-fig-btn:focus-visible{ outline:2px solid var(--accent); outline-offset:3px; }
.cs-fig-btn img{ display:block; width:100%; max-width:100%; height:auto; }
.cs-fig-zoom{ position:absolute; right:12px; bottom:12px; font-family:var(--inter); font-size:12px; font-weight:500; color:#5b5b5b; background:rgba(255,255,255,0.92); border:1px solid var(--divider); border-radius:999px; padding:5px 11px; opacity:0; transition:opacity .15s; pointer-events:none; }
.cs-fig-btn:hover .cs-fig-zoom, .cs-fig-btn:focus-visible .cs-fig-zoom{ opacity:1; }
.cs-fig figcaption{ margin-top:10px; font-family:var(--inter); font-size:13px; line-height:1.45; color:#8c8c8c; }

/* ---- image placeholders (full column) ---- */
.cs-ph{ margin:28px 0 0; width:100%; max-width:var(--col); min-height:200px; border:1.5px dashed #cfcfcf; border-radius:8px; background:#fafafa; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; gap:8px; padding:36px 28px; }
.cs-ph-num{ font-family:var(--inter); font-weight:600; font-size:12px; letter-spacing:0.1em; text-transform:uppercase; color:var(--accent); }
.cs-ph-desc{ font-family:var(--inter); font-size:16px; line-height:1.5; color:#5f5f5f; max-width:560px; }
.cs-ph-name{ font-family:var(--roboto); font-size:12.5px; color:#a6a6a6; background:#f0f0f0; border-radius:4px; padding:3px 9px; }

/* ---- paired media: two equal items side by side inside the body column; stack on mobile ---- */
.cs-pair{ margin:28px 0 0; max-width:var(--col); display:grid; grid-template-columns:1fr 1fr; gap:16px; align-items:stretch; }
.cs-pair .cs-ph, .cs-pair .cs-fig{ margin:0; max-width:none; }
.cs-pair .cs-ph{ min-height:150px; padding:28px 18px; }
/* real images keep their natural height (equal width, never cropped);
   placeholders stretch to equal height */
.cs-pair .cs-fig{ align-self:start; }

/* ---- half-width media with the text beside it; stack on mobile ---- */
.cs-halftext{ margin:28px 0 0; max-width:var(--col); display:grid; grid-template-columns:1fr 1fr; gap:24px; align-items:center; }
.cs-halftext .cs-ph, .cs-halftext .cs-fig{ margin:0; max-width:none; }
.cs-halftext .cs-ph{ min-height:180px; }
.cs-halftext-body{ font-family:var(--body); font-size:16px; line-height:1.33; color:#464646; }

/* ---- inline note highlight (kept for any bracketed note) ---- */
.cs-todo-in{ background:#ffe99a; color:#6b5600; border-radius:3px; padding:0 4px; box-decoration-break:clone; -webkit-box-decoration-break:clone; }

@media (max-width:767px){
  .cs-subtitle{ font-size:16px; }
  .cs-table td{ font-size:15px; }
  .cs-ul{ font-size:16px; }
  .cs-ph{ min-height:160px; padding:28px 20px; }
  .cs-pair{ grid-template-columns:1fr; }
  .cs-halftext{ grid-template-columns:1fr; }
}

/* ---- lightbox ---- */
.cs-lightbox{ position:fixed; inset:0; z-index:100; background:rgba(20,20,22,0.82); display:flex; align-items:center; justify-content:center; padding:32px; }
.cs-lightbox img{ max-width:min(1400px, 95vw); max-height:92vh; width:auto; height:auto; border-radius:8px; box-shadow:0 20px 60px rgba(0,0,0,0.4); background:#fff; cursor:default; }
.cs-lightbox-close{ position:fixed; top:18px; right:22px; width:40px; height:40px; border:0; border-radius:999px; background:rgba(255,255,255,0.14); color:#fff; font-size:26px; line-height:1; cursor:pointer; }
.cs-lightbox-close:hover{ background:rgba(255,255,255,0.26); }
.cs-lightbox-close:focus-visible{ outline:2px solid #fff; outline-offset:2px; }
`;
