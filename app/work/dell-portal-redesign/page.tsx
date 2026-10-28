import type { Metadata } from "next";
import CaseLayout from "@/components/case/CaseLayout";
import CaseNotice from "@/components/case/CaseNotice";

export const metadata: Metadata = {
  title: "Order & Inventory Logistics Suite (Dell)",
  description:
    "Reframing a complex Dell enterprise portal around clearer information architecture and workflows. An NDA case study shared as an approved overview.",
};

/**
 * Dell — NDA case study on the shared CaseLayout (pixel-exact port of Figma
 * frame 2606:1537). NDA adds the confidentiality notice and keeps the left nav
 * to Overview. Approved copy only; the detailed write-up is still pending.
 */

const META = [
  { label: "Role", value: "Senior UX Designer" },
  { label: "Timeline", value: "2024" },
  { label: "System", value: "Enterprise" },
  { label: "Scope", value: "C2C logistics template-builder platform (order & inventory)" },
] as const;

const SECTIONS = [
  {
    id: "overview",
    label: "Overview",
    heading: "Overview",
    body: [
      "Reframing a complex enterprise portal around clearer information architecture, workflows, and user decision-making.",
      "I led user research, design, and delivery to engineering for a C2C logistics template-builder platform, keeping the information architecture coherent as the workflows grew.",
    ],
  },
] as const;

const Notice = (
  <CaseNotice>
    This case study is shared under NDA. Every visual is an original schematic with placeholder data: no
    customer names, account figures, or confidential details appear. Please don&rsquo;t redistribute.
  </CaseNotice>
);

export default function DellCaseStudy() {
  return (
    <CaseLayout
      breadcrumbTitle="Dell"
      logo={{ src: "/hero/dell-v2.svg", w: 40, h: 40 }}
      title="Order & Inventory Logistics Suite"
      heroVideo="/projects/dell.mp4"
      notice={Notice}
      meta={META}
      sections={SECTIONS}
    />
  );
}
