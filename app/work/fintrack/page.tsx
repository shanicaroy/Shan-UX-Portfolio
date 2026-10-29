import type { Metadata } from "next";
import CaseStudy, { type CaseStudyProps } from "@/components/case/CaseStudy";

export const metadata: Metadata = {
  title: "Finance Management Mobile App (FinTrack)",
  description:
    "A personal finance management mobile app: tracking transactions, reports, and spending insights with a clear, trustworthy UX.",
};

/** FinTrack (non-NDA, freelance) — shared CaseStudy template. Still-image cover. */

const META: CaseStudyProps["meta"] = [
  { label: "Role", value: "UX Research & Design" },
  { label: "Timeline", value: "2021 (Freelance)" },
  { label: "Type", value: "Mobile" },
  { label: "Scope", value: "Personal finance app: transactions, reports, and spending insights", scope: true },
];

const SECTIONS: CaseStudyProps["sections"] = [
  {
    id: "overview",
    label: "Overview",
    heading: "Overview",
    blocks: [
      { k: "p", text: "A personal finance management mobile app: tracking transactions, reports, and spending insights with a clear, trustworthy UX." },
    ],
  },
];

export default function FintrackCaseStudy() {
  return (
    <CaseStudy
      breadcrumb="FinTrack"
      title="Finance Management Mobile App"
      hero={{ src: "/projects/fintrack.webp", kind: "img" }}
      meta={META}
      sections={SECTIONS}
    />
  );
}
