import type { Metadata } from "next";
import AppliedAISection from "@/components/AppliedAISection";

export const metadata: Metadata = {
  title: "AI Lab",
  description:
    "The Applied AI practice in full: Case Check's product contract, the six-step review flow, designed failure states, the evaluation protocol, and its current limit.",
};

/** The full Applied AI practice, moved off the home page. */
export default function AiLabPage() {
  return <AppliedAISection />;
}
