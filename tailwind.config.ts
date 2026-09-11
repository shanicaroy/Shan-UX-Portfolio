import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // All values live as CSS custom properties in globals.css — one
        // source of truth (DESIGN-TOKENS.md), no hex in components.
        ground: "var(--c-ground)",
        surface: "#FFFFFF",
        ink: "var(--c-ink)",
        muted: "var(--c-muted)",
        rule: "var(--c-rule)",
        charcoal: "var(--c-charcoal)",
        navy: "var(--c-navy)",
        lime: "var(--c-lime)",
        accent: "var(--c-blue)",
        "muted-dark": "var(--c-muted-dark)",
        "rule-dark": "var(--c-rule-dark)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
        serif: ["var(--font-serif)", "Times New Roman", "Times", "serif"],
      },
      maxWidth: {
        shell: "1440px",
      },
      letterSpacing: {
        label: "0.08em",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
