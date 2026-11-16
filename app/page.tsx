import type { Metadata } from "next";
import { homeJsonLd } from "@/content/seo";
import ColourHero from "@/components/ColourHero";
import StickyNav from "@/components/StickyNav";
import SelectedWork from "@/components/SelectedWork";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";

/**
 * Home page, matching the Figma frame end to end: the locked hero, Selected
 * Work, then the footer. The Writing section was removed from the home page in
 * the latest Figma — the page now ends at Selected Work and the footer links.
 */
// Title, description and share card come from the root layout's defaults.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        // Static, site-owned data only; escape "<" so the JSON can never close the tag.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd()).replace(/</g, "\\u003c") }}
      />
      <StickyNav />
      <ColourHero />
      <SelectedWork />
      <Footer />
      <div className="h-[62px] md:hidden" aria-hidden />
      <BottomNav />
    </main>
  );
}
