// ---------------------------------------------------------------------------
// CENTRAL SITE CONFIGURATION
// Everything personal lives here. Replace the bracketed placeholders with real
// values — nothing else in the codebase needs to change.
// ---------------------------------------------------------------------------

export const siteConfig = {
  name: "Shanica Roy",
  title: "UX & Product Design Leader",
  role: "UX Lead · Enterprise Product Design",

  metaTitle: "Shanica Roy — UX & Product Design Leader",
  metaDescription:
    "Shanica Roy is a UX and Product Design Leader combining hands-on UX, product strategy, research, and design leadership across complex B2B, SaaS, and enterprise products.",
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
    headline: "I'm Shanica, a UX & Product Design Leader.",
    support:
      "I lead complex product experiences from ambiguity to clarity — combining hands-on UX, product strategy, research, and design leadership to help teams build better products.",
    // The conceptual anchor of the portfolio — prominent, but smaller than the H1.
    positioning:
      "Hands-on when it matters. Strategic when it counts. Leadership wherever it creates leverage.",
    // Credential strip. "8+ years" is verified from the resume.
    credentials: ["8+ years in UX", "UX Lead at EY", "B2B · SaaS · Enterprise", "Product Strategy", "Design Leadership"],
  },

  about: {
    // Concise by design — not an autobiography, not a résumé.
    body: [
      "I lead product and UX work on complex systems — the kind where the hard part is making an intricate thing feel obvious to the person using it.",
      "My work sits across research, interaction design and product strategy, drawing on psychology and human behaviour to understand why people do what they do, and on technology to know what is actually buildable.",
    ],
  },

  footer: {
    signature: "Designed and coded by Shanica Roy.",
  },
} as const;

export const navigation = [
  { label: "Work", href: "#work" },
  { label: "Leadership", href: "#leadership" },
  { label: "About", href: "#about" },
  { label: "Writing", href: "#writing" },
] as const;

export const socialLinks = [
  { label: "LinkedIn", href: siteConfig.social.linkedin },
  { label: "Email", href: siteConfig.social.email },
  { label: "X", href: siteConfig.social.x },
  { label: "Medium", href: siteConfig.social.medium },
] as const;
