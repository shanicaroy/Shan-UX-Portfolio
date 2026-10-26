import StickyNav from "@/components/StickyNav";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";

/**
 * Site chrome — the shared navigation and footer — wraps every page except
 * standalone case-study documents, which define their own full-page design.
 * The nav and footer are the exact components the home page uses and sit
 * OUTSIDE `.site-square`, so the square-corner rule only applies to the page
 * content and the chrome looks identical on every route (home included).
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StickyNav solid />
      <main id="main">
        <div className="site-square">{children}</div>
      </main>
      <Footer />
      <div className="h-[62px] md:hidden" aria-hidden />
      <BottomNav />
    </>
  );
}
