import type { Metadata } from "next";
import CaseLayout from "@/components/case/CaseLayout";
import CaseNotice from "@/components/case/CaseNotice";

export const metadata: Metadata = {
  title: "Data Product Marketplace Revamp (EY)",
  description:
    "Designing the EY platform experience for building, cataloguing, and operating reusable data products. An NDA case study shared as an approved overview.",
};

/**
 * EY (Ernst & Young) — NDA case study on the shared CaseLayout (pixel-exact
 * port of Figma frame 2606:1537). NDA adds the confidentiality notice and keeps
 * the left nav to Overview. Approved copy only; detailed write-up pending.
 */

const META = [
  { label: "Role", value: "UX Design Lead" },
  { label: "Timeline", value: "2025" },
  { label: "System", value: "Data platform" },
  { label: "Scope", value: "Reusable data products: building, cataloguing, and operating" },
] as const;

const SECTIONS = [
  {
    id: "overview",
    label: "Overview",
    heading: "Overview",
    body: [
      "Designing the platform experience for building, cataloguing, and operating reusable data products at enterprise scale.",
      "As UX Design Lead, I shaped how teams discover, compose, and operate data products so the marketplace stayed coherent as it grew.",
    ],
  },
] as const;

const Notice = (
  <CaseNotice>
    This case study is shared under NDA. Every visual is an original schematic with placeholder data: no
    customer names, account figures, or confidential details appear. Please don&rsquo;t redistribute.
  </CaseNotice>
);

export default function EyCaseStudy() {
  return (
    <CaseLayout
      breadcrumbTitle="EY"
      logo={{ src: "/hero/ey-v2.svg", w: 40, h: 40 }}
      title="Data Product Marketplace Revamp"
      heroVideo="/projects/ey-data-product-factory.mp4"
      notice={Notice}
      meta={META}
      sections={SECTIONS}
    />
  );
}
