import ColourHero from "@/components/ColourHero";
import SelectedWork from "@/components/SelectedWork";
import AppliedAIPreview from "@/components/AppliedAIPreview";
import WritingSection from "@/components/WritingSection";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

/**
 * Home page. The hero is the locked Figma design (ColourHero). Below it,
 * Selected Work shows the six real projects (video covers + details, each
 * gated behind the password dialog), then the Applied AI, Writing and closing
 * sections, kept as they were. "How I lead" is removed.
 */
export default function Home() {
  return (
    <main id="main">
      <ColourHero />
      <SelectedWork />
      <AppliedAIPreview />
      <WritingSection />
      <FinalCta />
      <Footer />
    </main>
  );
}
