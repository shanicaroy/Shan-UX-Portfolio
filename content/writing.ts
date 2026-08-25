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

export const writing: Article[] = [
  { year: "2026", title: "[Article title]", category: "Design Leadership", href: "#" },
  { year: "2025", title: "[Article title]", category: "Product Design", href: "#" },
  { year: "2025", title: "[Article title]", category: "Psychology", href: "#" },
  { year: "2024", title: "[Article title]", category: "Technology", href: "#" },
];
