import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Site chrome — header and footer — wraps every page except standalone
 * case-study documents, which define their own full-page design.
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
