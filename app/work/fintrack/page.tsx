import type { Metadata } from "next";
import CaseLayout from "@/components/case/CaseLayout";

export const metadata: Metadata = {
  title: "Finance Management Mobile App (FinTrack)",
  description:
    "A personal finance management mobile app: tracking transactions, reports, and spending insights with a clear, trustworthy UX.",
};

/**
 * FinTrack (non-NDA, freelance) — shared CaseLayout (pixel-exact port of Figma
 * frame 2606:1537). No company wordmark, so a small positioning eyebrow stands
 * in for the logo. Still image cover. Real, approved copy; write-up pending.
 */

const META = [
  { label: "Role", value: "UX Research & Design" },
  { label: "Timeline", value: "2021 (Freelance)" },
  { label: "Type", value: "Mobile" },
  { label: "Scope", value: "Personal finance app: transactions, reports, and spending insights" },
] as const;

const SECTIONS = [
  {
    id: "overview",
    label: "Overview",
    heading: "Overview",
    body: [
      "A personal finance management mobile app: tracking transactions, reports, and spending insights with a clear, trustworthy UX.",
    ],
  },
] as const;

export default function FintrackCaseStudy() {
  return (
    <CaseLayout
      breadcrumbTitle="FinTrack"
      eyebrow="FinTrack · Freelance"
      title="Finance Management Mobile App"
      illustrationSrc="/projects/fintrack.webp"
      meta={META}
      sections={SECTIONS}
    />
  );
}
