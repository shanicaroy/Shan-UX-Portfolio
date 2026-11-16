import type { Metadata } from "next";
import ClmCaseStudy from "@/components/case/ClmCaseStudy";
import { pageMetadata } from "@/content/seo";

export const metadata: Metadata = pageMetadata({
  title: "Bhanzu CLM UX Case Study",
  description:
    "Shanica Roy's UX case study on leading the design of Bhanzu's support platform (CLM): IVR routing, the ticket workspace and role-based dashboards.",
  path: "/work/customer-lifecycle-management",
});

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
