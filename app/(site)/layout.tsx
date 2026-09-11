import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Site chrome — header and footer — wraps every page except standalone
 * case-study documents, which define their own full-page design.
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-square">
      <Header />
      {/* Top padding matches the fixed header's --nav-height. */}
      <main id="main" className="pt-[var(--nav-height)]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
