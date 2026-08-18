// ---------------------------------------------------------------------------
// CENTRAL SITE CONFIGURATION
// Everything personal lives here. Replace the bracketed placeholders with real
// values — nothing else in the codebase needs to change.
// ---------------------------------------------------------------------------

export const siteConfig = {
  name: "Shanica Roy",
  title: "UX Lead + Product Designer",
  role: "UX Lead · Product Designer",

  // SEO
  metaTitle: "Shanica Roy — UX Lead & Product Designer",
  metaDescription:
    "Shanica Roy is a UX Lead and Product Designer working at the intersection of technology, psychology and human behaviour.",
  url: "https://shanicaroy.com", // PLACEHOLDER — set to the live domain

  // Drop the real file at /public/resume.pdf
  resume: "/resume.pdf",

  social: {
    linkedin: "[LINKEDIN_URL]", // PLACEHOLDER
    email: "mailto:[EMAIL_ADDRESS]", // PLACEHOLDER
    x: "[X_URL]", // PLACEHOLDER
    medium: "[MEDIUM_URL]", // PLACEHOLDER
  },

  hero: {
    headline: "I'm Shanica, a UX Lead who engineers.",
    statement:
      "I design digital products and experiences at the intersection of technology, psychology and human behaviour.",
  },

  footer: {
    signature: "Designed & coded by Shanica Roy.",
  },
} as const;

export const navigation = [
  { label: "Work", href: "/#work" },
  { label: "Writing", href: "/writing" },
  { label: "About", href: "/about" },
] as const;

export const socialLinks = [
  { label: "LinkedIn", href: siteConfig.social.linkedin },
  { label: "Email", href: siteConfig.social.email },
  { label: "X", href: siteConfig.social.x },
  { label: "Medium", href: siteConfig.social.medium },
] as const;
