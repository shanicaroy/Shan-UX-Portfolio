import type { Metadata } from "next";
import { orbitCaseStyles, orbitCaseBody } from "@/content/case-orbit";
import CaseToc from "@/components/CaseToc";

export const metadata: Metadata = {
  title: "Orbit Design System",
  description:
    "Standardizing UI through a design system: Orbit v1. Foundations, twelve components, and how it was adopted. A case study.",
};

/**
 * Standalone case-study document. Like the other case studies it lives outside
 * the (site) group so the portfolio header/footer are not wrapped around it;
 * the page defines its own palette end to end. Newsreader comes from Google
 * Fonts (Inter and Roboto Mono are already self-hosted). The content is ported
 * into the portfolio's left-nav / scrollable shell with white backgrounds.
 */
export default function OrbitCaseStudy() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: orbitCaseStyles }} />
      <div className="orbit" id="main" dangerouslySetInnerHTML={{ __html: orbitCaseBody }} />
      <CaseToc scope=".orbit" />
    </>
  );
}
