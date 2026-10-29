import type { Metadata } from "next";
import CaseStudy, { type CaseStudyProps } from "@/components/case/CaseStudy";

export const metadata: Metadata = {
  title: "VirtuBox Kiosk Design",
  description:
    "Designing a physical-digital kiosk experience and enterprise dashboards for a SaaS kiosk-building platform.",
};

/** VirtuBox (non-NDA) — shared CaseStudy template. Approved copy. */

const META: CaseStudyProps["meta"] = [
  { label: "Role", value: "UI/UX Designer" },
  { label: "Timeline", value: "2020" },
  { label: "Client", value: "VirtuBox" },
  { label: "Scope", value: "Interactive shopping kiosk and enterprise dashboards for a SaaS kiosk-building platform", scope: true },
];

const SECTIONS: CaseStudyProps["sections"] = [
  {
    id: "overview",
    label: "Overview",
    heading: "Overview",
    blocks: [
      { k: "p", text: "Designing a physical-digital experience where usability, operational constraints, business requirements, and real-world behavior had to converge." },
      { k: "p", text: "I designed an interactive shopping kiosk and enterprise dashboard solutions for a SaaS kiosk-building platform, keeping the on-screen experience usable for shoppers and the back end workable for operators." },
    ],
  },
];

export default function VirtuboxCaseStudy() {
  return (
    <CaseStudy
      breadcrumb="VirtuBox"
      logo={{ src: "/hero/virtubox-v2.svg", w: 40, h: 40 }}
      title="VirtuBox Kiosk Design"
      hero={{ src: "/projects/virtubox-kiosk.mp4", kind: "video" }}
      meta={META}
      sections={SECTIONS}
    />
  );
}
