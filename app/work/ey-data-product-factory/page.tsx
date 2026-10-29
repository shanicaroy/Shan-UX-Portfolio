import type { Metadata } from "next";
import CaseStudy, { type CaseStudyProps } from "@/components/case/CaseStudy";

export const metadata: Metadata = {
  title: "Data Product Marketplace Revamp (EY)",
  description:
    "Designing the EY platform experience for building, cataloguing, and operating reusable data products. An NDA case study shared as an approved overview.",
};

/** EY (Ernst & Young) — NDA case study on the shared CaseStudy template (Overview only). */

const META: CaseStudyProps["meta"] = [
  { label: "Role", value: "UX Design Lead" },
  { label: "Timeline", value: "2025" },
  { label: "System", value: "Data platform" },
  { label: "Scope", value: "Reusable data products: building, cataloguing, and operating", scope: true },
];

const SECTIONS: CaseStudyProps["sections"] = [
  {
    id: "overview",
    label: "Overview",
    heading: "Overview",
    blocks: [
      { k: "p", text: "Designing the platform experience for building, cataloguing, and operating reusable data products at enterprise scale." },
      { k: "p", text: "As UX Design Lead, I shaped how teams discover, compose, and operate data products so the marketplace stayed coherent as it grew." },
    ],
  },
];

const NOTICE =
  "This case study is shared under NDA. Every visual is an original schematic with placeholder data: no customer names, account figures, or confidential details appear. Please don't redistribute.";

export default function EyCaseStudy() {
  return (
    <CaseStudy
      breadcrumb="EY"
      logo={{ src: "/hero/ey-v2.svg", w: 40, h: 40 }}
      title="Data Product Marketplace Revamp"
      hero={{ src: "/projects/ey-data-product-factory.mp4", kind: "video" }}
      notice={NOTICE}
      meta={META}
      sections={SECTIONS}
    />
  );
}
