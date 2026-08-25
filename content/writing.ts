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

// Empty until real articles exist — the homepage hides the list rather than
// showing invented titles. Priority order when adding: Design Leadership,
// Product Strategy, UX / Human Behavior, AI / Technology.
export const writing: Article[] = [];
