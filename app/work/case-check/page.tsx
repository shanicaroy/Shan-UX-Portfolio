import type { Metadata } from "next";
import CaseLayout from "@/components/case/CaseLayout";

export const metadata: Metadata = {
  title: "Case Check",
  description:
    "Designing and building Case Check, a portfolio-review agent, from the reasoning skeleton to a live, evaluated product.",
};

/**
 * Applied AI: Case Check (UXPective) — shared CaseLayout (pixel-exact port of
 * Figma frame 2606:1537). This one keeps its full multi-section write-up: the
 * left nav lists every section, matching the frame's multi-item nav. All copy
 * is the documented product/evaluation contract — no invented results.
 */

const META = [
  { label: "Status", value: "Build in progress" },
  { label: "Contract", value: "v0.1" },
  { label: "Evaluation", value: "Locked" },
  { label: "Results", value: "Not yet published" },
] as const;

const SECTIONS = [
  {
    id: "what-it-is",
    label: "What it is",
    heading: "What it is",
    body: [
      "Case Check is a narrow portfolio-review agent that makes its plan, evidence, uncertainty, and limits visible. This page shows the decisions already documented, not invented performance.",
      "The build is in progress. The product contract is at v0.1, the evaluation protocol is locked, and results are not yet published.",
    ],
  },
  {
    id: "product-contract",
    label: "Contract",
    heading: "The product contract",
    body: [
      "Find the weakest part of one case study, and the report says what it could not judge.",
      "It is for junior-to-mid UX designers preparing a portfolio. It is not for hiring decisions, deep visual critique, or accessibility and legal audits. The source of judgment is the UXPective case-study storytelling framework and my own review criteria.",
    ],
  },
  {
    id: "review-flow",
    label: "Review flow",
    heading: "The six-step review flow",
    body: [
      "Fetch reads the source. Classify resolves ambiguity. Plan shows checks first. Run checks combines text and vision. Self-verify rechecks every claim. Report returns one weakest part and one fix the designer can make.",
      "The final output is structured into weakest part, why it matters, one concrete fix, confidence, and what could not be judged. Secondary notes remain visibly secondary.",
    ],
  },
  {
    id: "evaluation",
    label: "Evaluation",
    heading: "The evaluation",
    body: [
      "The evaluation is defined before the first score: 40 permitted cases and problem inputs, 7 scored dimensions at 0 to 2 points each with 14 maximum, and 7 hard failures logged separately from the score. The evaluation has not been published.",
      "No percentage will appear until the full run is graded. The write-up will include the distribution, disagreements, hard failures, the worst examples, the design change they caused, and the re-run.",
    ],
  },
  {
    id: "current-limit",
    label: "Current limit",
    heading: "Current limit",
    body: [
      "Case Check evaluates the narrative of a case study. It does not decide whether someone is hireable, and its first version will not claim deep visual-craft judgment. Full craft evaluation is deliberately deferred.",
    ],
  },
] as const;

export default function CaseCheckCaseStudy() {
  return (
    <CaseLayout
      breadcrumbTitle="Case Check"
      eyebrow="Applied AI · UXPective"
      title="Applied AI: Case Check"
      heroVideo="/projects/casecheck.mp4"
      meta={META}
      sections={SECTIONS}
    />
  );
}
