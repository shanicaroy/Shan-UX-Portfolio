import type { Metadata } from "next";
import CaseLayout from "@/components/case/CaseLayout";
import CaseNotice from "@/components/case/CaseNotice";

export const metadata: Metadata = {
  title: "Customer Lifecycle Management SaaS Web Tool",
  description:
    "Leading the design of Bhanzu's in-house lifecycle tooling, from IVR routing to the CLM ticket workspace and role-based dashboards. A confidential case study shared as an approved overview.",
};

/**
 * Customer Lifecycle Management (Bhanzu) — confidential case study on the
 * shared CaseLayout (pixel-exact port of Figma frame 2606:1537). The notice is
 * kept and the left nav is Overview. Approved copy only; the full write-up is
 * retained in content/case-clm.ts for a later detailed version.
 */

const META = [
  { label: "Role", value: "Design Lead" },
  { label: "Timeline", value: "2022" },
  { label: "Client", value: "Bhanzu" },
  { label: "Scope", value: "IVR routing, CLM ticket workspace, role-based dashboards" },
] as const;

const SECTIONS = [
  {
    id: "overview",
    label: "Overview",
    heading: "Overview",
    body: [
      "A complex enterprise SaaS experience involving multiple users, workflows, business rules, and operational constraints.",
      "I set the design direction for Bhanzu's in-house lifecycle tooling — IVR routing, the CLM ticket workspace, batch allocation, and role-based dashboards — so the operational flow stayed coherent across every role.",
    ],
  },
] as const;

const Notice = (
  <CaseNotice>
    This case study is shared confidentially. Every visual is an original schematic with placeholder data: no
    customer names, account figures, or confidential details appear. Please don&rsquo;t redistribute.
  </CaseNotice>
);

export default function ClmCaseStudy() {
  return (
    <CaseLayout
      breadcrumbTitle="Bhanzu"
      logo={{ src: "/hero/bhanzu-v2.svg", w: 40, h: 40 }}
      title="Customer Lifecycle Management SaaS Web Tool"
      heroVideo="/projects/clm.mp4"
      notice={Notice}
      meta={META}
      sections={SECTIONS}
    />
  );
}
