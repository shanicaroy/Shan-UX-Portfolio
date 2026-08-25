// ---------------------------------------------------------------------------
// LEADERSHIP NARRATIVE
// Every [X] is a deliberate placeholder — no metric here may be invented.
// Replace each [X] with a verified figure; the layout does not change.
// ---------------------------------------------------------------------------

/** 04 — Leadership proof grid. */
export const leadershipProof = {
  label: "Leadership / 01",
  heading: "The scope I bring to design leadership.",
  support:
    "I work across people, product, design, and organizational problems — helping teams navigate ambiguity, make better decisions, and raise the quality of what they ship.",
  columns: [
    {
      label: "People",
      metric: "[X]+",
      metricNote: "designers mentored",
      body: "Developing designers through critique, coaching, feedback, teaching, and career guidance.",
    },
    {
      label: "Product",
      metric: "[X]",
      metricNote: "products / product areas",
      body: "Leading UX and product strategy across complex B2B, SaaS, and enterprise experiences.",
    },
    {
      label: "Scale",
      metric: "[X]",
      metricNote: "teams / stakeholders",
      body: "Aligning Design, Product, Engineering, Research, Data, and business stakeholders.",
    },
    {
      label: "Impact",
      metric: "[X]",
      metricNote: "measurable outcomes",
      body: "Connecting design decisions to customer, product, business, and team outcomes.",
    },
  ],
} as const;

/** 05 — What I lead: 2×2 editorial grid. */
export const whatILead = {
  label: "Leadership / 02",
  heading: "I lead beyond the interface.",
  quadrants: [
    {
      title: "People",
      body: "I help designers do their best work — through clarity, feedback, mentorship, critique, and meaningful ownership.",
      list: ["Mentorship", "Coaching", "Hiring", "Career development", "Design critique"],
    },
    {
      title: "Product",
      body: "I turn ambiguous customer and business problems into product direction, experience strategy, and actionable decisions.",
      list: ["Product strategy", "Discovery", "Prioritization", "Roadmap influence", "Customer outcomes"],
    },
    {
      title: "Design",
      body: "I set the quality bar while creating the systems, principles, and practices that allow teams to design consistently at scale.",
      list: ["UX strategy", "Design systems", "Accessibility", "Research", "Design quality"],
    },
    {
      title: "Organization",
      body: "I connect Design with Product, Engineering, Research, Data, and leadership to make better decisions across the organization.",
      list: [
        "Stakeholder alignment",
        "Executive communication",
        "Design operations",
        "Cross-team influence",
        "Design maturity",
      ],
    },
  ],
} as const;

/** 11 — How I lead: five principles. */
export const howILead = {
  label: "Leadership / 03",
  heading: "How I lead.",
  support:
    "Good design leadership isn't about having the best answers. It's about creating the conditions for teams to find the right answers — and knowing when to challenge, decide, or get out of the way.",
  principles: [
    {
      title: "Create clarity before creating artifacts.",
      body: "I help teams understand the problem, the constraints, and the decision we're actually trying to make before we start producing solutions.",
    },
    {
      title: "Give teams context, not instructions.",
      body: "Strong designers don't need every answer. They need enough context to make good decisions independently.",
    },
    {
      title: "Make decisions explicit.",
      body: "I write down decisions, not just deliverables, so teams inherit the reasoning rather than only the file.",
    },
    {
      title: "Raise the bar without becoming the bottleneck.",
      body: "I care deeply about craft and quality, but leadership means building systems and developing people that make quality scalable.",
    },
    {
      title: "Develop people while delivering outcomes.",
      body: "The measure of a strong design leader isn't only what gets shipped. It's what the team becomes capable of shipping without you.",
    },
  ],
} as const;

/** 13 — People development. The 5,000+ figure is verified from the resume. */
export const peopleDevelopment = {
  label: "People / 01",
  heading: "I develop designers, not just designs.",
  support:
    "Design leadership compounds when knowledge, judgment, and confidence move through the team — not just through the leader.",
  blocks: [
    {
      title: "Mentorship",
      metric: "[X]+",
      metricNote: "designers / students mentored",
      body: "Mentoring designers across UX craft, product thinking, portfolios, career decisions, and professional growth.",
    },
    {
      title: "Teaching",
      metric: "5,000+",
      metricNote: "learners taught and mentored",
      body: "Teaching design through structured programs, workshops, critique, and practical project work.",
    },
    {
      title: "Community",
      metric: "[X]+",
      metricNote: "[verified community metric]",
      body: "Building spaces where designers can learn from one another and develop stronger professional judgment.",
    },
  ],
} as const;

/** 14 — Organizational impact. Examples must come from Shanica — none invented. */
export const orgImpact = {
  label: "Organization / 01",
  heading: "Making design work better at scale.",
  support:
    "My role doesn't stop at the product. I look for the systems around the work — how teams collaborate, how decisions get made, how quality is maintained, and how design can create more leverage.",
  areas: [
    { title: "Design Operations", example: "[Problem → what changed → adoption → outcome]" },
    { title: "Design Systems", example: "[Problem → what changed → adoption → outcome]" },
    { title: "Research Practice", example: "[Problem → what changed → adoption → outcome]" },
    { title: "Team Rituals", example: "[Problem → what changed → adoption → outcome]" },
  ],
} as const;

/**
 * 17 — Testimonials. Empty until real quotes arrive — the section renders only
 * when this array has entries. Never populate with invented quotes.
 */
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company?: string;
};

export const testimonials: Testimonial[] = [];

/** 15 — Beyond the product strands. */
export const beyondTheProduct = {
  heading: "Beyond the product.",
  support:
    "I write and speak about the things underneath good product design: human behavior, decision-making, psychology, technology, and the way design teams work.",
  strands: ["Writing", "Speaking", "Mentorship", "Community"],
  writingIntro:
    "I write about UX, product strategy, design leadership, human behavior, and the systems that shape how people make decisions.",
} as const;

/** 18 — Final CTA. */
export const finalCta = {
  heading: "Building better products starts with building better clarity.",
  support:
    "Whether the challenge is a complex product, a growing design team, or an organization trying to raise its design maturity, I'm interested in the problems worth solving.",
} as const;
