import type { Metadata } from "next";
import AutoVideo from "@/components/AutoVideo";
import Footer from "@/components/Footer";
import CaseBreadcrumb from "@/components/case/CaseBreadcrumb";
import CaseSideNav from "@/components/case/CaseSideNav";
import ConfidentialityNotice from "@/components/case/ConfidentialityNotice";
import CaseMeta from "@/components/case/CaseMeta";

export const metadata: Metadata = {
  title: "Order & Inventory Logistics Suite (Dell)",
  description:
    "Reframing a complex Dell enterprise portal around clearer information architecture and workflows. An NDA case study shared as an approved overview.",
};

/**
 * Dell — NDA case study, same editorial structure as VMware (node 2606:1537):
 * breadcrumb, company mark, serif title, wide illustration, plain
 * confidentiality notice, Role/Timeline/Scope metadata, approved Overview, and
 * the site footer. Overview-only (Part 6); only approved, non-invented content.
 */

const SECTIONS = [{ id: "overview", label: "Overview" }] as const;

const META = [
  { label: "Role", value: "Senior UX Designer" },
  { label: "Timeline", value: "2024" },
  { label: "Scope", value: "C2C logistics template-builder platform (order & inventory)" },
] as const;

export default function DellCaseStudy() {
  return (
    <main id="main" className="min-h-screen bg-white">
      <div className="mx-auto max-w-[1320px] px-6 pt-8 md:px-10 md:pt-10">
        <CaseBreadcrumb title="Dell" />
      </div>

      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-y-10 px-6 pb-20 pt-24 md:px-10 md:pt-32 lg:grid-cols-[120px_minmax(0,1fr)] lg:gap-x-[110px]">
        <div className="lg:pt-3">
          <CaseSideNav sections={SECTIONS} />
        </div>

        <article className="min-w-0">
          <img src="/hero/dell-v2.svg" alt="Dell Technologies" className="h-10 w-10 rounded-[3px]" />

          <h1 className="mt-7 font-serif text-[clamp(2.4rem,4.6vw,3.9rem)] font-normal leading-[1.04] tracking-[-0.02em] text-[#42444d]">
            Order &amp; Inventory Logistics Suite
          </h1>

          <div className="mt-10 aspect-[1058/607] w-full overflow-hidden rounded-xl border border-rule bg-[#eef0f3]">
            <AutoVideo
              src="/projects/dell.mp4"
              ariaLabel="Dell Order and Inventory Logistics Suite cover"
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
                Reframing a complex enterprise portal around clearer information architecture, workflows, and
                user decision-making.
              </p>
              <p>
                I led user research, design, and delivery to engineering for a C2C logistics template-builder
                platform, keeping the information architecture coherent as the workflows grew.
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
