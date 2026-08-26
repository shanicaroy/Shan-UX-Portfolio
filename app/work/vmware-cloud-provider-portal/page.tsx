import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { vmwareCaseStyles, vmwareCaseBody } from "@/content/case-vmware";
import VmwareToc from "@/components/VmwareToc";

export const metadata: Metadata = {
  title: "VMware Cloud Provider Portal",
  description:
    "Redesigning the purchasing portals inside VMware's Cloud Provider platform, in Clarity. A case study in understanding a platform before touching it.",
};

/**
 * Standalone case-study document. It lives outside the (site) group on
 * purpose: the page defines its own light palette and type system end to end,
 * so the site header and footer are not rendered around it. Newsreader comes
 * from Google Fonts (Inter is already self-hosted).
 */
// The VMware case study is locked for now. Flip to false to reopen it.
const LOCKED = true;

export default function VmwareCaseStudy() {
  if (LOCKED) notFound();
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: vmwareCaseStyles }} />
      <div className="vmw" id="main">
        <div className="shellc" dangerouslySetInnerHTML={{ __html: vmwareCaseBody }} />
      </div>
      <VmwareToc />
    </>
  );
}
