// ---------------------------------------------------------------------------
// CENTRAL SITE CONFIGURATION
// Everything personal lives here. Replace the bracketed placeholders with real
// values — nothing else in the codebase needs to change.
// ---------------------------------------------------------------------------

export const siteConfig = {
  name: "Shanica Roy",
  title: "UX & Product Design Leader",
  role: "UX Lead · Enterprise Product Design",

  metaTitle: "Shanica Roy - UX & Product Design Leadership",
  metaDescription:
    "Shanica Roy is a UX and Product Design Leader combining hands-on UX, product strategy, research, and design leadership across complex B2B, SaaS, and enterprise products.",
  url: "https://work.shanicaroy.com",

  // ⚠️ The file does not exist yet. Add the real PDF at
  // /public/Shanica-Roy-Resume.pdf or this link will 404.
  resume: "/Shanica-Roy-Resume.pdf",

  // Password for the gated project cards. PLACEHOLDER — until Shanica sets a
  // real one, every entry is rejected. This gate is client-side only: it
  // deters casual visitors, it does not secure the pages.
  projectPassword: "[SET_PASSWORD]",

  social: {
    linkedin: "[LINKEDIN_URL]", // PLACEHOLDER
    email: "mailto:[EMAIL_ADDRESS]", // PLACEHOLDER
    x: "[X_URL]", // PLACEHOLDER
    medium: "[MEDIUM_URL]", // PLACEHOLDER
  },

  hero: {
    // Copy supplied verbatim in the redesign brief.
    eyebrow: {
      lead: "AI-native Product & UX Leader",
      tail: "Enterprise to Frontier",
    },
    headline: "I design the behavior, systems and interfaces that make AI worth trusting.",
    support:
      "Previously at EY, Dell Technologies, VMware, and startups. I work where product strategy, human judgment, model behavior, and exacting craft meet.",
    primaryCta: { label: "Explore selected work", href: "#work" },
    secondaryCta: { label: "Enter the AI lab", href: "/ai-lab" },
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
  { label: "Work", href: "/#work" },
  { label: "Applied AI", href: "/ai-lab" },
  { label: "Leadership", href: "/leadership" },
  { label: "About", href: "/about" },
  { label: "Writing", href: "/writing" },
] as const;

export const socialLinks = [
  { label: "LinkedIn", href: siteConfig.social.linkedin },
  { label: "Email", href: siteConfig.social.email },
  { label: "X", href: siteConfig.social.x },
  { label: "Medium", href: siteConfig.social.medium },
] as const;
