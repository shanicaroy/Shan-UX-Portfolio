import type { Metadata } from "next";
import CaseStudy, { type CaseStudyProps } from "@/components/case/CaseStudy";

export const metadata: Metadata = {
  title: "VCCP - Customer Connect Cloud Service Portal Revamp",
  description:
    "VMware Customer Connect Portal (VCCP), a Clarity-based cloud service platform revamp. An NDA case study shared as an approved overview.",
};

/**
 * VMware (VCCP) — NDA case study on the shared CaseStudy template (a 1:1 port of
 * Figma frame 2699:4272). NDA: a confidentiality notice and Overview only.
 * Copy is the live copy; the frame's text is placeholder.
 */

const META: CaseStudyProps["meta"] = [
  { label: "Role", value: "Product Designer" },
  { label: "Timeline", value: "2023 Jun - Nov" },
  { label: "System", value: "Clarity DS" },
  {
    label: "Scope",
    value:
      "Revamp of the VCCP Configurator and its four purchasing flows (new, add-on, renewal, upgrade), plus the connected subscription service pages",
    scope: true,
  },
];

const SECTIONS: CaseStudyProps["sections"] = [
  {
    id: "overview",
    label: "Overview",
    heading: "Overview",
    blocks: [
      {
        k: "p",
        text: "I was asked to redesign the Cloud Provider purchasing portals and apply Clarity to them. On paper that reads like a restyle. It was not.",
      },
      {
        k: "p",
        text: "The platform sold cloud infrastructure to businesses through one of the most layered commercial models I have worked with. A single line item could carry eight kinds of cost at once, sit inside a three-level nested table, and change behaviour by region and currency. The real work was understanding that model before changing a single screen, then making design decisions that protected the system instead of adding to its weight.",
      },
    ],
  },
];

const STATS: CaseStudyProps["stats"] = [
  { n: "8", c: "cost dimensions a single service line could carry at once" },
  { n: "3", c: "levels of drill-down the core table had to support" },
  { n: "4", c: "purchasing flows sharing one configurator" },
  { n: "0", c: "Clarity components that solved the core table out of the box" },
];

const NOTICE =
  "This case study is shared under NDA. Every visual is an original schematic with placeholder data: no customer names, entitlement numbers, or account-tied figures appear. Clarity's own documentation is public. Please don't redistribute.";

export default function VmwareCaseStudy() {
  return (
    <CaseStudy
      breadcrumb="VMware"
      logo={{ src: "/hero/vmware-wordmark.png", w: 87, h: 13 }}
      title="VCCP - Customer Connect Cloud Service Portal Revamp"
      hero={{ src: "/projects/vmware-cloud-illustration.png", kind: "img" }}
      notice={NOTICE}
      meta={META}
      sections={SECTIONS}
      stats={STATS}
    />
  );
}
