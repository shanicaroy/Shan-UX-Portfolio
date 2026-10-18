import ColourHero from "@/components/ColourHero";
import AppliedAIPreview from "@/components/AppliedAIPreview";
import WritingSection from "@/components/WritingSection";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

/**
 * Home page. The hero is the locked Figma design (ColourHero); below it the
 * Applied AI, Writing and closing sections are kept as they were. "How I lead"
 * is removed.
 */
export default function Home() {
  return (
    <main id="main">
      <ColourHero />
      <AppliedAIPreview />
      <WritingSection />
      <FinalCta />
      <Footer />
    </main>
  );
}
