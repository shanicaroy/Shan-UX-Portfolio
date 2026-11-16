import type { Metadata } from "next";
import VirtuboxCaseStudy from "@/components/case/VirtuboxCaseStudy";
import { pageMetadata } from "@/content/seo";

export const metadata: Metadata = pageMetadata({
  title: "VirtuBox Kiosk UX Case Study",
  description:
    "Shanica Roy's UX case study on designing a self-service wayfinding kiosk for shopping malls, from research and product priorities to the shipped product.",
  path: "/work/virtubox-kiosk",
});

/**
 * VirtuBox Kiosk — full, non-NDA case study on the shared case-study template
 * (same stylesheet, breadcrumb, sticky section nav and mobile rules) through
 * `VirtuboxCaseStudy`, which carries the content and media layout this write-up
 * needs: single figures with a lightbox, paired figures, and image
 * placeholders. All copy is Shanica's approved source, transcribed verbatim.
 */
export default function VirtuboxCaseStudyPage() {
  return <VirtuboxCaseStudy />;
}
