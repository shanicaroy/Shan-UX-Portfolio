// ---------------------------------------------------------------------------
// SITE CONTENT — edit everything in this file with your real details.
// Nothing here is fetched from anywhere; it's the single source of truth
// for copy that appears across the site (nav, hero, about, contact, footer).
// ---------------------------------------------------------------------------

export const site = {
  name: "Shan", // PLACEHOLDER — replace with your full name
  role: "Product & UX Designer",
  location: "Based in — / Open to remote",
  email: "hello@yourdomain.com", // PLACEHOLDER
  resumeHref: "/resume.pdf", // PLACEHOLDER — drop your resume in /public/resume.pdf
  social: {
    linkedin: "#", // PLACEHOLDER
    dribbble: "#", // PLACEHOLDER
    github: "#", // PLACEHOLDER
  },
  hero: {
    eyebrow: "Portfolio — FIG. 00",
    headline: "I design the parts of the product people don't notice are working.",
    subhead:
      "I'm Shan, a product designer who spends most of my time in the gap between what a system does and what a person expects it to do. Below is a set of measured, shipped work — not concepts.",
  },
  about: {
    eyebrow: "About — FIG. 04",
    heading: "How I work",
    body: [
      "I start every project by finding the constraint that actually matters — the one piece of technical debt, business pressure, or user habit that will decide whether the design succeeds. Everything downstream gets measured against it.",
      "I prototype in the fidelity that answers the question in front of me: sometimes that's a paper sketch, sometimes it's production-quality code. I'd rather be wrong fast than polished slow.",
      "I write down decisions, not just deliverables — so the team inherits the reasoning, not just the Figma file.",
    ],
    skills: [
      { label: "Research", items: ["Usability testing", "Diary studies", "Stakeholder interviews", "Journey mapping"] },
      { label: "Design", items: ["Interaction design", "Design systems", "Prototyping", "Accessibility (WCAG 2.2)"] },
      { label: "Craft", items: ["Figma", "Framer", "HTML / CSS", "Motion & micro-interaction"] },
      { label: "Practice", items: ["Product strategy", "Cross-functional facilitation", "Design critique", "Metrics & experimentation"] },
    ],
    experience: [
      { period: "2023 — Present", role: "Senior Product Designer", org: "Company Name" }, // PLACEHOLDER
      { period: "2021 — 2023", role: "Product Designer", org: "Company Name" }, // PLACEHOLDER
      { period: "2019 — 2021", role: "UX Designer", org: "Company Name" }, // PLACEHOLDER
    ],
  },
  contact: {
    eyebrow: "Contact — FIG. 05",
    heading: "Let's talk about your product.",
    body: "Open to full-time roles and select freelance case work. Fastest way to reach me is email — I read everything.",
  },
} as const;
