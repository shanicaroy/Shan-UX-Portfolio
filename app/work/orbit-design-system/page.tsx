import type { Metadata } from "next";
import CaseStudy, { type CaseStudyProps } from "@/components/case/CaseStudy";

export const metadata: Metadata = {
  title: "Orbit Design System",
  description:
    "Standardizing UI through a design system: Orbit v1. Foundations, twelve components, and how it was adopted. A case study.",
};

/**
 * Orbit Design System (UXPective) — shared CaseStudy template. The full
 * detailed write-up is retained in content/case-orbit.ts for a later long-form
 * version; this is the uniform overview.
 */

const META: CaseStudyProps["meta"] = [
  { label: "Role", value: "Design systems lead" },
  { label: "Timeline", value: "2025" },
  { label: "Version", value: "Orbit v1" },
  { label: "Scope", value: "6 foundations, 12 components, adoption across a product", scope: true },
];

const SECTIONS: CaseStudyProps["sections"] = [
  {
    id: "overview",
    label: "Overview",
    heading: "Overview",
    blocks: [
      { k: "p", text: "Standardizing UI through a design system: Orbit v1 — its foundations, twelve components, and how it was adopted across a product." },
      { k: "p", text: "I built the tokens, components, and documentation, then led the migration so the system became a single source of truth for UI." },
    ],
  },
];

const STATS: CaseStudyProps["stats"] = [
  { n: "6", c: "foundations: color, type, space, elevation, motion, grid" },
  { n: "12", c: "components shipped in v1" },
  { n: "1", c: "single source of truth for UI across the product" },
];

export default function OrbitCaseStudy() {
  return (
    <CaseStudy
      breadcrumb="Orbit"
      title="Orbit Design System"
      hero={{ src: "/projects/orbit.mp4", kind: "video" }}
      meta={META}
      sections={SECTIONS}
      stats={STATS}
    />
  );
}
