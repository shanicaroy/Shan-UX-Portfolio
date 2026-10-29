import type { Metadata } from "next";
import CaseStudy, { type CaseStudyProps } from "@/components/case/CaseStudy";

export const metadata: Metadata = {
  title: "Order & Inventory Logistics Suite (Dell)",
  description:
    "Reframing a complex Dell enterprise portal around clearer information architecture and workflows. An NDA case study shared as an approved overview.",
};

/** Dell — NDA case study on the shared CaseStudy template (Overview only). */

const META: CaseStudyProps["meta"] = [
  { label: "Role", value: "Senior UX Designer" },
  { label: "Timeline", value: "2024" },
  { label: "System", value: "Enterprise" },
  { label: "Scope", value: "C2C logistics template-builder platform (order & inventory)", scope: true },
];

const SECTIONS: CaseStudyProps["sections"] = [
  {
    id: "overview",
    label: "Overview",
    heading: "Overview",
    blocks: [
      { k: "p", text: "Reframing a complex enterprise portal around clearer information architecture, workflows, and user decision-making." },
      { k: "p", text: "I led user research, design, and delivery to engineering for a C2C logistics template-builder platform, keeping the information architecture coherent as the workflows grew." },
    ],
  },
];

const NOTICE =
  "This case study is shared under NDA. Every visual is an original schematic with placeholder data: no customer names, account figures, or confidential details appear. Please don't redistribute.";

export default function DellCaseStudy() {
  return (
    <CaseStudy
      breadcrumb="Dell"
      logo={{ src: "/hero/dell-v2.svg", w: 40, h: 40 }}
      title="Order & Inventory Logistics Suite"
      hero={{ src: "/projects/dell.mp4", kind: "video" }}
      notice={NOTICE}
      meta={META}
      sections={SECTIONS}
    />
  );
}
