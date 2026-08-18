// ---------------------------------------------------------------------------
// CENTRAL SITE CONFIGURATION
// Everything personal lives here. Replace the bracketed placeholders with real
// values — nothing else in the codebase needs to change.
// ---------------------------------------------------------------------------

export const siteConfig = {
  name: "Shanica Roy",
  title: "UX Lead + Product Designer",
  role: "UX Lead · Product Designer",

  metaTitle: "Shanica Roy — UX Lead & Product Designer",
  metaDescription:
    "Shanica Roy is a UX Lead and Product Designer working at the intersection of technology, psychology and human behaviour.",
  url: "https://shanicaroy.com", // PLACEHOLDER — set to the live domain

  // ⚠️ The file does not exist yet. Add the real PDF at
  // /public/Shanica-Roy-Resume.pdf or this link will 404.
  resume: "/Shanica-Roy-Resume.pdf",

  social: {
    linkedin: "[LINKEDIN_URL]", // PLACEHOLDER
    email: "mailto:[EMAIL_ADDRESS]", // PLACEHOLDER
    x: "[X_URL]", // PLACEHOLDER
    medium: "[MEDIUM_URL]", // PLACEHOLDER
  },

  hero: {
    // Two lines, broken deliberately.
    headlineLineOne: "I'm Shanica, a UX Lead",
    headlineLineTwo: "who develops.",
    statement:
      "I design digital products and experiences at the intersection of technology, psychology and human behaviour.",
  },

  about: {
    // Concise by design — not an autobiography, not a résumé.
    body: [
      "I lead product and UX work on complex systems — the kind where the hard part is making an intricate thing feel obvious to the person using it.",
      "My work sits across research, interaction design and product strategy, drawing on psychology and human behaviour to understand why people do what they do, and on technology to know what is actually buildable.",
      "I write down decisions, not just deliverables, so teams inherit the reasoning rather than only the file.",
    ],
  },

  footer: {
    signature: "Designed and coded by Shanica Roy.",
  },
} as const;

export const navigation = [
  { label: "Work", href: "#work" },
  { label: "Writing", href: "#writing" },
  { label: "About", href: "#about" },
] as const;

export const socialLinks = [
  { label: "LinkedIn", href: siteConfig.social.linkedin },
  { label: "Email", href: siteConfig.social.email },
  { label: "X", href: siteConfig.social.x },
  { label: "Medium", href: siteConfig.social.medium },
] as const;
