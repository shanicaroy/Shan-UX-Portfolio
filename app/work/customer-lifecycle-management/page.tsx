import type { Metadata } from "next";
import { vmwareCaseStyles } from "@/content/case-vmware";
import { clmCaseBody } from "@/content/case-clm";
import VmwareToc from "@/components/VmwareToc";

export const metadata: Metadata = {
  title: "CLM Ticketing Platform",
  description:
    "Replacing the tool, not just the screens. Leading the design of Bhanzu's in-house ticketing system, from IVR routing to the CLM workspace and role-based dashboards.",
};

/**
 * Standalone case-study document on the shared case template. DRAFT: the
 * dashed fill-in notes inside must be resolved before this page ships.
 */
export default function ClmCaseStudy() {
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
        <div className="shellc" dangerouslySetInnerHTML={{ __html: clmCaseBody }} />
      </div>
      <VmwareToc />
    </>
  );
}
