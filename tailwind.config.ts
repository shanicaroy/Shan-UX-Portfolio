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
        // Palette lifted from shans-ux-folio.webflow.io
        void: "#000000", // page background
        surface: "#141414", // cards, buttons, inset panels
        "surface-hi": "#1E1E1E", // hover state for surfaces
        chalk: "#EDEDED", // primary text
        ash: "#9A9A9A", // secondary / muted text
        neon: "#C6F73C", // accent — the lime glow
        "neon-dim": "#8FB32B",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        neon: "0 0 24px rgba(198, 247, 60, 0.45)",
        "neon-sm": "0 0 12px rgba(198, 247, 60, 0.35)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};
export default config;
