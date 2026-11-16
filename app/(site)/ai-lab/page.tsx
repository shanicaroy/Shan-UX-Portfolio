import type { Metadata } from "next";
import AppliedAISection from "@/components/AppliedAISection";
import Reveal from "@/components/Reveal";
import { pageMetadata } from "@/content/seo";

// Hidden from the nav for launch: kept out of search results until it is
// re-enabled. Remove `noindex` and add "/ai-lab" to INDEXED_PATHS then.
export const metadata: Metadata = pageMetadata({
  title: "AI Lab",
  description:
    "The Applied AI practice in full: Case Check's product contract, the six-step review flow, designed failure states, the evaluation protocol, and its current limit.",
  path: "/ai-lab",
  noindex: true,
});

/** The full Applied AI practice, moved off the home page. */
export default function AiLabPage() {
  return (
    <Reveal>
      <AppliedAISection />
    </Reveal>
  );
}
