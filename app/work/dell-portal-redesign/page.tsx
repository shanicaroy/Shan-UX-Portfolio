import type { Metadata } from "next";
import DellCaseStudy from "@/components/case/DellCaseStudy";

export const metadata: Metadata = {
  // The root layout appends " · Shanica Roy" via its title template, so the
  // rendered title tag is "Dell Inventory Pipeline Tool · Shanica Roy".
  title: "Dell Inventory Pipeline Tool",
  description:
    "Redesigning an internal Dell tool for setting up and validating inventory pipelines. An NDA case study shared as an approved overview.",
};

/**
 * Dell Inventory Pipeline Tool - NDA case study, approved overview. Reuses the
 * shared case-study template through `DellCaseStudy`, which follows the same
 * content pattern (META row + typed SECTIONS) as the CLM page. Slug unchanged.
 */
export default function DellCaseStudyPage() {
  return <DellCaseStudy />;
}
