import ColourHero from "@/components/ColourHero";
import StickyNav from "@/components/StickyNav";
import SelectedWork from "@/components/SelectedWork";
import Footer from "@/components/Footer";

/**
 * Home page, matching the Figma frame end to end: the locked hero, Selected
 * Work, then the footer. The Writing section was removed from the home page in
 * the latest Figma — the page now ends at Selected Work and the footer links.
 */
export default function Home() {
  return (
    <main id="main">
      <StickyNav />
      <ColourHero />
      <SelectedWork />
      <Footer />
    </main>
  );
}
