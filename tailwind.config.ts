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
        // Warm off-black editorial palette. No accent colour by design —
        // hierarchy comes from scale, spacing and contrast alone.
        ground: "#11110F",
        surface: "#171715",
        ink: "#EAE7DF",
        muted: "#9A9891",
        rule: "#292925",
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
        label: "0.12em",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
