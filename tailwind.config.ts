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
        // Light paper palette, taken from the case-study document —
        // hierarchy comes from scale, spacing and contrast alone.
        ground: "#FBFAF8",
        surface: "#FFFFFF",
        ink: "#1A1A17",
        muted: "#5C5C55",
        rule: "#E3E1DB",
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
