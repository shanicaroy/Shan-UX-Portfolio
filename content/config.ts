// ---------------------------------------------------------------------------
// CENTRAL SITE CONFIGURATION
// Everything personal lives here. Replace the bracketed placeholders with real
// values — nothing else in the codebase needs to change.
// ---------------------------------------------------------------------------

export const siteConfig = {
  name: "Shanica Roy",
  title: "UX & Product Design Leader",
  role: "UX Lead · Enterprise Product Design",

  metaTitle: "Shanica Roy - UX Design Portfolio and Case Studies",
  metaDescription:
    "The UX design portfolio of Shanica Roy, UX Design Lead. Product design case studies from enterprise and SaaS work with EY, Dell, VMware and Bhanzu.",
  url: "https://work.shanicaroy.com",

  // SEO. Google ranks on visible text, titles and descriptions, so these
  // phrases are also worked into page titles and descriptions. The keywords
  // list feeds the <meta name="keywords"> tag, which Google ignores but some
  // other search engines still read.
  seo: {
    // Short suffix appended to every inner page title, e.g.
    // "Bhanzu CLM - Shanica Roy UX Portfolio".
    titleSuffix: "Shanica Roy UX Portfolio",
    keywords: [
      "Shanica portfolio",
      "Shanica Roy portfolio",
      "Shanica Roy UX portfolio",
      "Shanica Roy UX design portfolio",
      "Shanica Roy design portfolio",
      "Shanica Roy product design portfolio",
      "Shanica Roy case studies",
      "Shanica work",
      "Shanica UX design",
      "Shanica Roy UX Design",
    ],
    // Other names the site is known by; used in the structured data so
    // Google connects these searches to the same site.
    alternateNames: [
      "Shanica Roy portfolio",
      "Shanica Roy UX portfolio",
      "Shanica Roy UX design portfolio",
      "Shanica Roy product design portfolio",
      "Shanica Roy case studies",
    ],
    jobTitle: "UX Design Lead",
    knowsAbout: [
      "UX design",
      "Product design",
      "Enterprise UX",
      "SaaS product design",
      "Design systems",
      "UX research",
      "Design leadership",
    ],
  },

  // Shanica's resume on Google Drive; opens in a new tab from the nav button
  // and the closing CTA.
  resume: "https://drive.google.com/file/d/188gIggemonNBhwXutyOp0PTvHuFOhjOp/view",

  // Password for the gated project cards. PLACEHOLDER — until Shanica sets a
  // real one, every entry is rejected. This gate is client-side only: it
  // deters casual visitors, it does not secure the pages.
  projectPassword: "Shan2.0",

  social: {
    linkedin: "https://www.linkedin.com/in/shanica-roy-19a42814b/",
    email: "shanicaroy22@gmail.com", // plain address — the footer copies it, never opens a mail client
    x: "https://x.com/ShanicaRoy",
    medium: "[MEDIUM_URL]", // PLACEHOLDER
    github: "https://github.com/shanicaroy",
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
      "I lead product and UX work on complex systems, the kind where the hard part is making an intricate thing feel obvious to the person using it.",
      "My work sits across research, interaction design and product strategy, drawing on psychology and human behaviour to understand why people do what they do, and on technology to know what is actually buildable.",
    ],
  },

  footer: {
    signature: "Designed and coded by Shanica Roy.",
  },
} as const;

export const navigation = [
  { label: "Work", href: "/" },
  // Temporarily hidden for launch; re-enable when ready to publish.
  // { label: "Applied AI", href: "/ai-lab" },
  { label: "About", href: "/about" },
  // { label: "Writing", href: "/writing" },
] as const;

export const socialLinks = [
  { label: "LinkedIn", href: siteConfig.social.linkedin },
  { label: "Email", href: siteConfig.social.email },
  { label: "X", href: siteConfig.social.x },
  { label: "Medium", href: siteConfig.social.medium },
  { label: "Github", href: siteConfig.social.github },
] as const;
