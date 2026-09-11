import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import AboutDark from "@/components/AboutDark";
import AppliedAIPreview from "@/components/AppliedAIPreview";
import WritingSection from "@/components/WritingSection";
import FinalCta from "@/components/FinalCta";

/** Section order from the redesign brief. */
export default function Home() {
  return (
    <>
      <Hero />
      <WorkSection />
      <div className="mt-20 lg:mt-28">
        <AboutDark />
      </div>
      <AppliedAIPreview />
      <WritingSection />
      <FinalCta />
    </>
  );
}
