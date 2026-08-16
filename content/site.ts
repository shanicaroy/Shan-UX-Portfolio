// ---------------------------------------------------------------------------
// SITE CONTENT — sourced from shans-ux-folio.webflow.io.
// Items marked PLACEHOLDER still need real values.
// ---------------------------------------------------------------------------

export const site = {
  name: "Shanica",
  fullName: "Shanica Roy",
  role: "Product Designer",
  location: "Open to remote", // PLACEHOLDER
  email: "hello@yourdomain.com", // PLACEHOLDER — replace with your real email
  resumeHref: "/resume.pdf", // PLACEHOLDER — drop your resume in /public/resume.pdf
  social: {
    linkedin: "#", // PLACEHOLDER
    behance: "#", // PLACEHOLDER
    dribbble: "#", // PLACEHOLDER
  },
  nav: [
    { href: "/", label: "Home", glyph: "⌘" },
    { href: "/work", label: "UX in Action", glyph: "✦" },
    { href: "/about", label: "Who's She ?", glyph: "" },
    { href: "#contact", label: "Say Hi", glyph: "↗" },
  ],
  hero: {
    greeting: "Hi this is Shanica",
    // The words wrapped in the accent colour, matched against `headline`.
    headlineBefore: "I ",
    headlineAccent: "design PX",
    headlineAfter: " you'd actually wanna use",
    subhead:
      "Product Designer with 6 years of UX design experience, currently working for Salesforce at EY.",
    ctaPrimary: "Let's connect?",
  },
  workLabel: "Selected Work",
  about: {
    heading: "Who's She ?",
    body: [
      "Product Designer with 6 years of UX design experience, currently working for Salesforce at EY.",
      // PLACEHOLDER — add the rest of your About copy from the Webflow site
      "I work across research and interface design, most often on complex B2B products where the hard part is making an intricate system feel obvious to the person using it.",
      "I write down decisions, not just deliverables — so the team inherits the reasoning, not just the Figma file.",
    ],
    skills: [
      { label: "Research", items: ["Usability testing", "User interviews", "Journey mapping", "Competitive analysis"] },
      { label: "Design", items: ["Interaction design", "Design systems", "Prototyping", "Accessibility"] },
      { label: "Craft", items: ["Figma", "Webflow", "HTML / CSS", "Motion & micro-interaction"] },
      { label: "Practice", items: ["Product strategy", "Cross-functional facilitation", "Design critique", "Workshop facilitation"] },
    ],
    experience: [
      { period: "Present", role: "Product Designer — Salesforce", org: "EY" },
      { period: "2021 — 2023", role: "UX Designer", org: "Profisea Labs" },
    ],
  },
  contact: {
    eyebrow: "Say Hi",
    heading: "Let's build something people actually want to use.",
    body: "Open to full-time roles and select freelance work. Fastest way to reach me is email — I read everything.",
  },
} as const;
