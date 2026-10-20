import ColourHero from "@/components/ColourHero";
import SelectedWork from "@/components/SelectedWork";
import WritingSection from "@/components/WritingSection";
import Footer from "@/components/Footer";

/**
 * Home page, matching the Figma frame end to end: the locked hero, Selected
 * Work, the Writing section with its essays, then a full-bleed line and the
 * footer links. The old closing CTA is removed — the page ends at the links.
 */
export default function Home() {
  return (
    <main id="main">
      <ColourHero />
      <SelectedWork />
      <WritingSection />
      <Footer />
    </main>
  );
}
