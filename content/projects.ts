// ---------------------------------------------------------------------------
// PROJECT / CASE STUDY CONTENT — placeholder data.
// Replace each entry with a real project. `cover` picks one of the abstract
// schematic patterns in components/CaseStudyCover.tsx — swap for a real
// screenshot by rendering an <img> instead once you have artwork.
// ---------------------------------------------------------------------------

export type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  duration: string;
  year: string;
  tags: string[];
  cover: "flow" | "grid" | "signal";
  metrics: { label: string; value: string }[];
  sections: {
    heading: string;
    body: string[];
  }[];
};

export const projects: Project[] = [
  {
    slug: "checkout-redesign",
    title: "Redesigning checkout for a retail app",
    summary:
      "Cut checkout abandonment by simplifying a five-step flow into two decisions, without removing any of the options finance needed to keep.",
    role: "Lead Product Designer",
    duration: "6 weeks",
    year: "2024",
    tags: ["Mobile", "E-commerce", "Research"],
    cover: "flow",
    metrics: [
      { label: "Checkout completion", value: "+18%" },
      { label: "Time to purchase", value: "-41%" },
      { label: "Support tickets", value: "-27%" },
    ],
    sections: [
      {
        heading: "The constraint",
        body: [
          "Checkout had grown one field at a time over three years — every team had a reason to add a step. The real constraint wasn't visual clutter, it was that finance, fraud, and marketing all owned pieces of the same screen and none of them wanted to lose their field.",
          "The brief wasn't 'simplify checkout.' It was 'simplify checkout without a single stakeholder feeling like they lost.'",
        ],
      },
      {
        heading: "Process",
        body: [
          "I mapped every field on the flow to the team that requested it and the data it fed, then sat with each stakeholder to ask what would break if it moved, not if it disappeared.",
          "That reframing turned an ownership fight into a sequencing problem — most fields didn't need to be seen, they needed to be collected at the right moment.",
        ],
      },
      {
        heading: "Solution",
        body: [
          "Two screens instead of five: a single review-and-pay step for returning customers, and a progressive step for new customers that only asked for what was needed to authorize the card in front of them.",
          "Fields that existed for internal reasons (fraud scoring, attribution) moved server-side or into passive capture, invisible to the user but intact for every team that depended on them.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "Shipped to 100% of traffic after a four-week A/B test. Checkout completion improved most for first-time mobile buyers, the segment with the highest historical drop-off.",
        ],
      },
    ],
  },
  {
    slug: "design-system-rollout",
    title: "Rolling out a design system across three product teams",
    summary:
      "Took a component library from one designer's Figma file to the shared source of truth for three teams shipping on different release cadences.",
    role: "Design Systems Lead",
    duration: "4 months",
    year: "2023",
    tags: ["Design Systems", "Cross-functional", "Documentation"],
    cover: "grid",
    metrics: [
      { label: "Design-to-dev handoff time", value: "-35%" },
      { label: "Components adopted", value: "94%" },
      { label: "Teams onboarded", value: "3" },
    ],
    sections: [
      {
        heading: "The constraint",
        body: [
          "The existing component library was accurate but unowned — no one had the authority to say no to a one-off variant, so every team had quietly forked it. Adoption wasn't a design problem, it was a governance problem.",
        ],
      },
      {
        heading: "Process",
        body: [
          "I audited every live product surface against the library, categorizing drift as 'missing capability' (the system's fault) versus 'unnecessary variant' (a process failure), which gave the rollout a legitimate, shared starting point.",
          "Each team nominated a design-systems contact who reviewed proposed additions with me weekly — small enough to move fast, visible enough that decisions stuck.",
        ],
      },
      {
        heading: "Solution",
        body: [
          "Rebuilt the library around documented usage rules, not just components — when to use which button variant, what spacing tokens meant, and what required a system-team review before shipping.",
          "Paired every component with a living code example so engineers could verify behavior without asking a designer.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "Within two quarters, 94% of new screens used system components without modification, and design QA time on handoff dropped by over a third.",
        ],
      },
    ],
  },
  {
    slug: "onboarding-activation",
    title: "Fixing a broken first-run experience",
    summary:
      "Diagnosed why 60% of new signups never reached the app's core action, and rebuilt onboarding around the one thing that predicted retention.",
    role: "Product Designer",
    duration: "8 weeks",
    year: "2022",
    tags: ["Onboarding", "Activation", "Data-informed"],
    cover: "signal",
    metrics: [
      { label: "Day-1 activation", value: "+52%" },
      { label: "7-day retention", value: "+19%" },
      { label: "Onboarding steps", value: "9 → 4" },
    ],
    sections: [
      {
        heading: "The constraint",
        body: [
          "Onboarding had nine steps because product, growth, and legal each needed something confirmed early. But the data showed only one action — creating a first project — actually predicted whether a user stuck around.",
        ],
      },
      {
        heading: "Process",
        body: [
          "I ran a cohort analysis against activation events to find which single action correlated most with 7-day retention, then watched ten first-run sessions to see exactly where people gave up before reaching it.",
          "Most drop-off wasn't confusion — it was users being asked to make five decisions before they'd seen any value.",
        ],
      },
      {
        heading: "Solution",
        body: [
          "Rebuilt onboarding around a single goal: get to a first project as fast as possible, with everything else — profile details, preferences, legal confirmations — deferred to contextual moments after activation.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "Day-1 activation rose 52% and stayed stable over the following two quarters, with no measurable increase in downstream support or compliance issues from the deferred steps.",
        ],
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
