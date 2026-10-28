import type { Metadata } from "next";
import AutoVideo from "@/components/AutoVideo";
import Footer from "@/components/Footer";
import CaseBreadcrumb from "@/components/case/CaseBreadcrumb";
import CaseSideNav from "@/components/case/CaseSideNav";
import ConfidentialityNotice from "@/components/case/ConfidentialityNotice";
import CaseMeta from "@/components/case/CaseMeta";

export const metadata: Metadata = {
  title: "Data Product Marketplace Revamp (EY)",
  description:
    "Designing the EY platform experience for building, cataloguing, and operating reusable data products. An NDA case study shared as an approved overview.",
};

/**
 * EY (Ernst & Young) — NDA case study, same editorial structure as VMware
 * (node 2606:1537): breadcrumb, company mark, serif title, wide illustration,
 * plain confidentiality notice, Role/Timeline/Scope metadata, approved
 * Overview, and the site footer. Overview-only (Part 6); approved content only.
 */

const SECTIONS = [{ id: "overview", label: "Overview" }] as const;

const META = [
  { label: "Role", value: "UX Design Lead" },
  { label: "Timeline", value: "2025" },
  { label: "Scope", value: "Reusable data products: building, cataloguing, and operating" },
] as const;

export default function EyCaseStudy() {
  return (
    <main id="main" className="min-h-screen bg-white">
      <div className="mx-auto max-w-[1320px] px-6 pt-8 md:px-10 md:pt-10">
        <CaseBreadcrumb title="EY" />
      </div>

      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-y-10 px-6 pb-20 pt-24 md:px-10 md:pt-32 lg:grid-cols-[120px_minmax(0,1fr)] lg:gap-x-[110px]">
        <div className="lg:pt-3">
          <CaseSideNav sections={SECTIONS} />
        </div>

        <article className="min-w-0">
          <img src="/hero/ey-v2.svg" alt="Ernst &amp; Young" className="h-10 w-10 rounded-[3px]" />

          <h1 className="mt-7 font-serif text-[clamp(2.4rem,4.6vw,3.9rem)] font-normal leading-[1.04] tracking-[-0.02em] text-[#42444d]">
            Data Product Marketplace Revamp
          </h1>

          <div className="mt-10 aspect-[1058/607] w-full overflow-hidden rounded-xl border border-rule bg-[#eef0f3]">
            <AutoVideo
              src="/projects/ey-data-product-factory.mp4"
              ariaLabel="EY Data Product Marketplace cover"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mt-11">
            <ConfidentialityNotice>
              This case study is shared under NDA. Every visual is an original schematic with placeholder data:
              no customer names, account figures, or confidential details appear. Please don&rsquo;t
              redistribute.
            </ConfidentialityNotice>
          </div>

          <div className="mt-10">
            <CaseMeta items={META} />
          </div>

          <section id="overview" className="mt-12 scroll-mt-24">
            <h2 className="font-serif text-[clamp(1.9rem,3.2vw,2.5rem)] font-normal tracking-[-0.01em] text-[#42444d]">
              Overview
            </h2>
            <div className="mt-6 max-w-[70ch] space-y-5 font-serif text-[19px] leading-[1.62] text-[#2b2b2e]">
              <p>
                Designing the platform experience for building, cataloguing, and operating reusable data
                products at enterprise scale.
              </p>
              <p>
                As UX Design Lead, I shaped how teams discover, compose, and operate data products so the
                marketplace stayed coherent as it grew.
              </p>
            </div>
          </section>
        </article>
      </div>

      <div className="border-t border-rule">
        <div className="mx-auto max-w-[1620px]">
          <Footer />
        </div>
      </div>
    </main>
  );
}
