import type { Metadata } from "next";
import VirtuboxCaseStudy from "@/components/case/VirtuboxCaseStudy";

export const metadata: Metadata = {
  title: "VirtuBox Kiosk Design",
  description:
    "Designing a self-service wayfinding kiosk for shopping malls: research, product priorities and the end-to-end experience, from brief to shipped product.",
};

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
