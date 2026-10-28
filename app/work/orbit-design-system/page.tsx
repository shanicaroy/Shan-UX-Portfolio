import type { Metadata } from "next";
import CaseLayout from "@/components/case/CaseLayout";

export const metadata: Metadata = {
  title: "Orbit Design System",
  description:
    "Standardizing UI through a design system: Orbit v1. Foundations, twelve components, and how it was adopted. A case study.",
};

/**
 * Orbit Design System (UXPective) — shared CaseLayout (pixel-exact port of
 * Figma frame 2606:1537). No company wordmark, so a positioning eyebrow stands
 * in. The full detailed write-up is retained in content/case-orbit.ts for a
 * later long-form version; this is the uniform overview.
 */

const META = [
  { label: "Role", value: "Design systems lead" },
  { label: "Timeline", value: "2025" },
  { label: "Version", value: "Orbit v1" },
  { label: "Scope", value: "6 foundations, 12 components, adoption across a product" },
] as const;

const SECTIONS = [
  {
    id: "overview",
    label: "Overview",
    heading: "Overview",
    body: [
      "Standardizing UI through a design system: Orbit v1 — its foundations, twelve components, and how it was adopted across a product.",
      "I built the tokens, components, and documentation, then led the migration so the system became a single source of truth for UI.",
    ],
  },
] as const;

const STATS = [
  { n: "6", c: "foundations: color, type, space, elevation, motion, grid" },
  { n: "12", c: "components shipped in v1" },
  { n: "1", c: "single source of truth for UI across the product" },
] as const;

export default function OrbitCaseStudy() {
  return (
    <CaseLayout
      breadcrumbTitle="Orbit"
      eyebrow="UXPective · Design System"
      title="Orbit Design System"
      heroVideo="/projects/orbit.mp4"
      meta={META}
      sections={SECTIONS}
      stats={STATS}
    />
  );
}
