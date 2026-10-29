import type { Metadata } from "next";
import ClmCaseStudy from "@/components/case/ClmCaseStudy";

export const metadata: Metadata = {
  title: "Building Bhanzu's in-house customer support platform (CLM)",
  description:
    "Leading the design of Bhanzu's in-house support platform (CLM): IVR-based routing, the CLM ticket workspace, root and child tickets, status flows, role-based dashboards and access states.",
};

/**
 * Customer Lifecycle Management (Bhanzu) — full, non-NDA case study.
 *
 * The page reuses the shared case-study template's exact visual system (same
 * stylesheet, breadcrumb, sticky section nav and mobile rules) through
 * `ClmCaseStudy`, which also carries the content types this write-up needs
 * (styled tables, full-width clickable diagrams, numbered image placeholders
 * and highlighted TODO notes). All copy is Shanica's approved source document,
 * transcribed verbatim; bracketed notes render as visible TODOs to resolve
 * before anything goes live.
 */
export default function ClmCaseStudyPage() {
  return <ClmCaseStudy />;
}
