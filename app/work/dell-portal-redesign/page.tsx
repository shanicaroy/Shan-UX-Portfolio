import type { Metadata } from "next";
import DellCaseStudy from "@/components/case/DellCaseStudy";
import { pageMetadata } from "@/content/seo";

// The root layout appends " - Shanica Roy UX Portfolio" via its title template,
// so the rendered title tag is
// "Dell Inventory Pipeline Tool UX Case Study - Shanica Roy UX Portfolio".
export const metadata: Metadata = pageMetadata({
  title: "Dell Inventory Pipeline Tool UX Case Study",
  description:
    "Shanica Roy's UX case study on redesigning an internal Dell tool for setting up and validating inventory pipelines, shared as an approved NDA overview.",
  path: "/work/dell-portal-redesign",
});

/**
 * Dell Inventory Pipeline Tool - NDA case study, approved overview. Reuses the
 * shared case-study template through `DellCaseStudy`, which follows the same
 * content pattern (META row + typed SECTIONS) as the CLM page. Slug unchanged.
 */
export default function DellCaseStudyPage() {
  return <DellCaseStudy />;
}
