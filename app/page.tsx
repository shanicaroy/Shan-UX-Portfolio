import ColourHero from "@/components/ColourHero";
import SelectedWork from "@/components/SelectedWork";
import WritingSection from "@/components/WritingSection";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

/**
 * Home page. The hero is the locked Figma design (ColourHero). Below it,
 * Selected Work shows the six real projects (video covers + details, each
 * gated behind the password dialog), then the Writing and closing sections.
 * The Applied AI / Case Check section and "How I lead" are removed.
 */
export default function Home() {
  return (
    <main id="main">
      <ColourHero />
      <SelectedWork />
      <WritingSection />
      <FinalCta />
      <Footer />
    </main>
  );
}
