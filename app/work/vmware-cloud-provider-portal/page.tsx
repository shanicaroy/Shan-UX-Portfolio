import type { Metadata } from "next";
import CaseLayout from "@/components/case/CaseLayout";
import CaseNotice from "@/components/case/CaseNotice";

export const metadata: Metadata = {
  title: "VCCP - Customer Connect Cloud Service Portal Revamp",
  description:
    "VMware Customer Connect Portal (VCCP), a Clarity-based cloud service platform revamp. An NDA case study shared as an approved overview.",
};

/**
 * VMware (VCCP) — NDA case study, rendered through the shared CaseLayout that
 * is a pixel-exact port of Figma frame 2606:1537. Content is the live copy;
 * NDA adds the confidentiality notice and limits the left nav to Overview.
 */

const META = [
  { label: "Role", value: "Product Designer" },
  { label: "Timeline", value: "2023 Jun - Nov" },
  { label: "System", value: "Clarity DS" },
  {
    label: "Scope",
    value:
      "Revamp of the VCCP Configurator and its four purchasing flows (new, add-on, renewal, upgrade), plus the connected subscription service pages",
  },
] as const;

const SECTIONS = [
  {
    id: "overview",
    label: "Overview",
    heading: "Overview",
    body: [
      "I was asked to redesign the Cloud Provider purchasing portals and apply Clarity to them. On paper that reads like a restyle. It was not.",
      "The platform sold cloud infrastructure to businesses through one of the most layered commercial models I have worked with. A single line item could carry eight kinds of cost at once, sit inside a three-level nested table, and change behaviour by region and currency. The real work was understanding that model before changing a single screen, then making design decisions that protected the system instead of adding to its weight.",
    ],
  },
] as const;

const STATS = [
  { n: "8", c: "cost dimensions a single service line could carry at once" },
  { n: "3", c: "levels of drill-down the core table had to support" },
  { n: "4", c: "purchasing flows sharing one configurator" },
  { n: "0", c: "Clarity components that solved the core table out of the box" },
] as const;

const Notice = (
  <CaseNotice>
    This case study is shared under NDA. Every visual is an original schematic with placeholder data: no
    customer names, entitlement numbers, or account-tied figures appear. Clarity&rsquo;s own documentation is
    public. Please don&rsquo;t redistribute.
  </CaseNotice>
);

export default function VmwareCaseStudy() {
  return (
    <CaseLayout
      breadcrumbTitle="VMware"
      logo={{ src: "/hero/vmware-wordmark.png", w: 103, h: 16 }}
      title="VCCP - Customer Connect Cloud Service Portal Revamp"
      illustrationSrc="/projects/vmware-cloud-illustration.png"
      notice={Notice}
      meta={META}
      sections={SECTIONS}
      stats={STATS}
    />
  );
}
