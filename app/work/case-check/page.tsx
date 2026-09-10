import type { Metadata } from "next";
import { vmwareCaseStyles } from "@/content/case-vmware";
import { caseCheckBody } from "@/content/case-casecheck";
import VmwareToc from "@/components/VmwareToc";

export const metadata: Metadata = {
  title: "Case Check",
  description:
    "The review before the review. Designing and building Case Check, a portfolio review agent, from the reasoning skeleton to a live, evaluated product.",
};

/** Standalone case-study document on the shared case template. */
export default function CaseCheckCaseStudy() {
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
        <div className="shellc" dangerouslySetInnerHTML={{ __html: caseCheckBody }} />
      </div>
      <VmwareToc />
    </>
  );
}
