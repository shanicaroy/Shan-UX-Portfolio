// ---------------------------------------------------------------------------
// LEADERSHIP NARRATIVE — the UX Lead × Design Manager intersection.
// Every [X] and [bracketed line] is a deliberate placeholder — no metric or
// example here may be invented. Replace with verified content; the layout
// does not change.
// ---------------------------------------------------------------------------

/** Homepage — How I work: the only leadership-oriented section on the home page. */
export const howIWork = {
  heading: "How I work.",
  support:
    "I stay close to the problem, the product, and the people doing the work — moving between strategy, design, and leadership depending on what the team needs.",
  principles: [
    {
      title: "Understand before solving.",
      body: "I start with the problem, the people experiencing it, and the context around it before jumping into solutions.",
    },
    {
      title: "Create clarity.",
      body: "I turn ambiguity into a shared understanding of what we're solving, why it matters, and what success looks like.",
    },
    {
      title: "Stay close to the work.",
      body: "I believe strong leadership requires enough proximity to the work to challenge decisions, raise the bar, and understand the details.",
    },
    {
      title: "Give people ownership.",
      body: "I provide context and direction while giving designers the autonomy to make meaningful decisions.",
    },
    {
      title: "Connect design to outcomes.",
      body: "I care about the experience, but also what the experience enables for customers, the product, and the business.",
    },
  ],
} as const;

/** Leadership page hero. */
export const leadershipHero = {
  heading: "I lead design by making people, products, and decisions better.",
  support:
    "My approach to leadership sits at the intersection of design craft, product thinking, team development, and organizational impact.",
  belief:
    "I believe strong design leadership isn't about moving away from the work. It's about creating the clarity, context, and conditions that allow people and products to do better work.",
} as const;

/** 04 — Where I operate: the three pillars. */
export const whereIOperate = {
  label: "Positioning / 01",
  heading: "I operate where design, product, and people meet.",
  support:
    "My work sits between making the experience better, helping the team make better decisions, and making sure the product is solving the right problem in the first place.",
  pillars: [
    {
      title: "Design",
      body: "I stay close enough to the work to understand the details, challenge decisions, and maintain a high bar for UX quality.",
      list: [
        "Research",
        "Interaction Design",
        "Information Architecture",
        "Prototyping",
        "Accessibility",
        "Design Systems",
      ],
    },
    {
      title: "Product",
      body: "I connect user needs with product and business priorities, turning ambiguous problems into clear direction and decisions.",
      list: [
        "Product Strategy",
        "Discovery",
        "Prioritization",
        "Roadmap Influence",
        "Customer Outcomes",
        "Business Context",
      ],
    },
    {
      title: "Leadership",
      body: "I create clarity for teams, develop designers, align stakeholders, and build ways of working that help good design scale.",
      list: [
        "Mentorship",
        "Design Critique",
        "Team Leadership",
        "Stakeholder Alignment",
        "Design Operations",
        "Strategy",
      ],
    },
  ],
} as const;

/** 05 — My leadership model: the progression. */
export const leadershipModel = {
  label: "How I work",
  heading: "Lead from the work. Scale through people.",
  steps: [
    "Hands-on craft",
    "Design direction",
    "Product influence",
    "Team enablement",
    "Organizational impact",
  ],
  footnote:
    "I don't see hands-on design and leadership as opposites. The right level of involvement changes with the problem, the team, and the stage of the work.",
} as const;

/** Home — the charcoal About block. Copy from the redesign brief, verbatim. */
export const aboutDark = {
  eyebrow: "03 / About",
  heading: "How I lead",
  support:
    "My job is to make the consequential thing clearer, then build the judgment and systems that let a team carry it forward.",
  statement:
    "I move from model behavior to interface detail to product strategy without losing the thread: what should this system do for people, and how will we know?",
  link: { label: "More about how I lead", href: "/leadership" },
} as const;

/** 06 — Leadership scope proof grid. Metrics stay [X] until verified. */
export const leadershipScope = {
  label: "Positioning / 02",
  heading: "The scope I bring to the table.",
  columns: [
    {
      label: "Design",
      metric: "[X]",
      metricNote: "products / initiatives",
      body: "Hands-on UX and design direction across complex product experiences.",
    },
    {
      label: "People",
      metric: "[X]+",
      metricNote: "designers mentored",
      body: "Developing designers through critique, coaching, teaching, and feedback.",
    },
    {
      label: "Product",
      metric: "[X]",
      metricNote: "strategic initiatives",
      body: "Translating customer problems into product and experience direction.",
    },
    {
      label: "Collaboration",
      metric: "[X]",
      metricNote: "teams / stakeholders",
      body: "Working across Product, Engineering, Research, Data, and business leadership.",
    },
  ],
} as const;

/** 13 — How I lead design: four principles. */
export const howILead = {
  label: "Leadership / 03",
  heading: "I lead design without stepping away from design.",
  support:
    "Leadership doesn't mean being furthest from the work. It means knowing where your involvement creates the most leverage.",
  principles: [
    {
      kicker: "Set direction",
      title: "Create clarity before creating artifacts.",
      body: "I help teams understand the problem, constraints, users, and desired outcome before deciding what to build.",
    },
    {
      kicker: "Raise the bar",
      title: "Stay close enough to challenge the work.",
      body: "I use critique, design reviews, and hands-on involvement to maintain quality without becoming the bottleneck.",
    },
    {
      kicker: "Create ownership",
      title: "Give designers context, autonomy, and accountability.",
      body: "I don't believe strong teams need someone solving every design problem for them. They need the context and trust to solve problems well.",
    },
    {
      kicker: "Scale through people",
      title: "Make the team better, not just the output.",
      body: "The strongest leadership outcome is a team that can make better decisions with increasing independence.",
    },
  ],
} as const;

/** 14 — The work I do as a leader: the lifecycle. */
export const leaderLifecycle = {
  label: "How I work",
  heading: "The work I do as a leader.",
  steps: [
    { title: "Define", body: "Clarify the problem and opportunity." },
    { title: "Discover", body: "Bring research and evidence into the decision." },
    { title: "Direct", body: "Establish experience and product direction." },
    { title: "Design", body: "Stay close to the craft where it matters." },
    { title: "Align", body: "Bring Product, Engineering, Research, and business stakeholders together." },
    { title: "Develop", body: "Coach designers and create stronger teams." },
    { title: "Scale", body: "Turn good practices into repeatable systems." },
  ],
} as const;

/** 18 — People development. The 5,000+ figure is verified from the resume. */
export const peopleDevelopment = {
  label: "People / 01",
  heading: "I develop people as deliberately as I develop products.",
  support:
    "Design leadership compounds when knowledge, judgment, and confidence move through a team.",
  blocks: [
    {
      title: "Mentorship",
      metric: "[X]+",
      metricNote: "designers mentored",
      body: "Mentoring designers across UX craft, product thinking, portfolios, career decisions, and professional growth.",
    },
    {
      title: "Teaching",
      metric: "5,000+",
      metricNote: "people taught",
      body: "Teaching design through structured programs, workshops, critique, and practical project work.",
    },
    {
      title: "Community",
      metric: "[X]+",
      metricNote: "people reached",
      body: "Building spaces where designers can learn from one another and develop stronger professional judgment.",
    },
  ],
} as const;

/** 19 — Product strategy. */
export const productStrategy = {
  label: "Product / 01",
  heading: "I don't just solve the problem. I help define the problem worth solving.",
  support:
    "My work begins before the interface — understanding customers, business priorities, constraints, and opportunities so design can influence product direction rather than simply respond to it.",
  areas: [
    "Discovery",
    "Research",
    "Opportunity framing",
    "Prioritization",
    "Product strategy",
    "Roadmap influence",
  ],
} as const;

/** 20 — Cross-functional leadership. */
export const crossFunctional = {
  label: "Collaboration / 01",
  heading: "Design rarely succeeds in isolation.",
  support:
    "I work across Product, Engineering, Research, Data, and business teams to turn different perspectives into a shared direction.",
  functions: ["Design", "Product", "Engineering", "Research", "Data", "Business"],
  metrics: ["[X] stakeholders", "[X] teams", "[X] functions", "[X] business units"],
} as const;

/** 21 — Design quality: the craft side of the intersection. */
export const designQuality = {
  label: "Design / 01",
  heading: "Leadership shouldn't come at the expense of craft.",
  support:
    "I stay close to interaction, information architecture, accessibility, systems, and the details that make complex products feel simple.",
  areas: [
    "Interaction",
    "Information Architecture",
    "Accessibility",
    "Design Systems",
    "Experience Quality",
  ],
} as const;

/** 22 — Organizational impact. Examples must come from Shanica — none invented. */
export const orgImpact = {
  label: "Scale / 01",
  heading: "Make good design repeatable.",
  support:
    "Beyond individual products, I look for ways to improve how design teams make decisions, collaborate, document work, and maintain quality.",
  areas: [
    { title: "Design Systems", example: "[Problem → intervention → outcome]" },
    { title: "Design Operations", example: "[Problem → intervention → outcome]" },
    { title: "Design Critique", example: "[Problem → intervention → outcome]" },
    { title: "Documentation", example: "[Problem → intervention → outcome]" },
    { title: "Research Practice", example: "[Problem → intervention → outcome]" },
  ],
} as const;

/**
 * 24 — Testimonials. Empty until real quotes arrive — the section renders only
 * when this array has entries. Never populate with invented quotes.
 */
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company?: string;
};

export const testimonials: Testimonial[] = [];

export const testimonialsIntro = {
  label: "People I've worked with",
  heading: "The work is mine. The impact is shared.",
} as const;

/** 23 — Writing strands, in priority order. */
export const beyondTheProduct = {
  heading: "Beyond the product.",
  support:
    "I write about UX, product strategy, design leadership, human behavior, and the systems behind how people make decisions.",
  strands: ["Design Leadership", "Product Strategy", "UX", "Psychology / Human Behavior", "AI / Technology"],
} as const;

/** 25 — Final CTA. */
export const finalCta = {
  heading: "Let's build something worth leading.",
  support:
    "I'm interested in complex products, ambitious teams, and the problems that sit between customer needs and business reality.",
} as const;
