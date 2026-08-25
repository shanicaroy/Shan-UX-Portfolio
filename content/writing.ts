// ---------------------------------------------------------------------------
// WRITING
// Bracketed rows are PLACEHOLDERS — no article titles have been invented.
// Replace them with real pieces, or empty the array to hide the list entirely
// (the section renders a quiet note in that case).
//
// Topics the section is built to carry: UX, product design, psychology,
// neuroscience, human behaviour, technology, design leadership.
// ---------------------------------------------------------------------------

export type Article = {
  year: string;
  title: string;
  category: string;
  href: string;
};

// Topic-driven titles set by Shanica; link each to the real piece when it
// publishes.
export const writing: Article[] = [
  {
    year: "2026",
    title: "Leading design without stepping away from the craft",
    category: "Design Leadership",
    href: "#",
  },
  {
    year: "2025",
    title: "Influencing product direction before the first screen",
    category: "Product Strategy",
    href: "#",
  },
  {
    year: "2025",
    title: "Designing for how people actually decide",
    category: "UX · Human Behavior",
    href: "#",
  },
  {
    year: "2024",
    title: "Designing AI features people can trust",
    category: "AI · Technology",
    href: "#",
  },
];
