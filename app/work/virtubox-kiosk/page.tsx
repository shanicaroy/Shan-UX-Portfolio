import type { Metadata } from "next";
import CaseLayout from "@/components/case/CaseLayout";

export const metadata: Metadata = {
  title: "VirtuBox Kiosk Design",
  description:
    "Designing a physical-digital kiosk experience and enterprise dashboards for a SaaS kiosk-building platform.",
};

/**
 * VirtuBox (non-NDA) — shared CaseLayout (pixel-exact port of Figma frame
 * 2606:1537), no confidentiality notice. Real, approved copy; detailed
 * write-up still pending.
 */

const META = [
  { label: "Role", value: "UI/UX Designer" },
  { label: "Timeline", value: "2020" },
  { label: "Client", value: "VirtuBox" },
  { label: "Scope", value: "Interactive shopping kiosk and enterprise dashboards for a SaaS kiosk-building platform" },
] as const;

const SECTIONS = [
  {
    id: "overview",
    label: "Overview",
    heading: "Overview",
    body: [
      "Designing a physical-digital experience where usability, operational constraints, business requirements, and real-world behavior had to converge.",
      "I designed an interactive shopping kiosk and enterprise dashboard solutions for a SaaS kiosk-building platform, keeping the on-screen experience usable for shoppers and the back end workable for operators.",
    ],
  },
] as const;

export default function VirtuboxCaseStudy() {
  return (
    <CaseLayout
      breadcrumbTitle="VirtuBox"
      logo={{ src: "/hero/virtubox-v2.svg", w: 40, h: 40 }}
      title="VirtuBox Kiosk Design"
      heroVideo="/projects/virtubox-kiosk.mp4"
      meta={META}
      sections={SECTIONS}
    />
  );
}
