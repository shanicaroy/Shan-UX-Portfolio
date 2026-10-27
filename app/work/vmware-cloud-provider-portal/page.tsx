import type { Metadata } from "next";
import { vmwareCaseStyles, vmwareCaseBody } from "@/content/case-vmware";
import VmwareToc from "@/components/VmwareToc";
import AutoVideo from "@/components/AutoVideo";

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
export default function VmwareCaseStudy() {
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
        <div className="topnav">
          <a className="backlink" href="/#work">&larr; Selected Work</a>
        </div>
        <section className="vmwhero">
          <div className="cover">
            <AutoVideo src="/projects/vmware-cloud-cover.mp4" ariaLabel="VMware Cloud Provider Portal — cover animation" />
          </div>
        </section>
        <section className="confnote" aria-label="Confidentiality notice">
          <div className="box">
            <svg className="ic" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
              <rect x="4.5" y="10.5" width="15" height="10" rx="1.6" />
              <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" strokeLinecap="round" />
            </svg>
            <p>
              <b>Confidential.</b> This case study is shared under NDA. Every visual is an original schematic
              with placeholder data — no customer names, entitlement numbers, or account-tied figures appear.
              Please don&rsquo;t redistribute.
            </p>
          </div>
        </section>
        <div className="shellc" dangerouslySetInnerHTML={{ __html: vmwareCaseBody }} />
      </div>
      <VmwareToc />
    </>
  );
}
