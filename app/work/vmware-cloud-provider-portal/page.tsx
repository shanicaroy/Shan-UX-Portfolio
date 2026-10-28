import type { Metadata } from "next";
import AutoVideo from "@/components/AutoVideo";
import Footer from "@/components/Footer";
import CaseBreadcrumb from "@/components/case/CaseBreadcrumb";
import CaseSideNav from "@/components/case/CaseSideNav";
import ConfidentialityNotice from "@/components/case/ConfidentialityNotice";
import CaseMeta from "@/components/case/CaseMeta";

export const metadata: Metadata = {
  title: "VCCP - Customer Connect Cloud Service Portal Revamp",
  description:
    "VMware Customer Connect Portal (VCCP), a Clarity-based cloud service platform revamp. An NDA case study shared as an approved overview.",
};

/**
 * VMware Customer Connect Portal (VCCP) — NDA case study, built to the final
 * Figma structure (node 2606:1537): breadcrumb, a generous top gap, VMware
 * wordmark, a single serif title, a wide hero illustration (1058/607 ≈ 1.74),
 * a plain "Confidentiality Notice", a four-field metadata row
 * (Role / Timeline / System / Scope), the approved Overview, stat tiles, and
 * the site footer. Reading content is set in the site serif (Times New Roman);
 * small labels stay in Inter. NDA (Part 6): only the Overview renders.
 */

const SECTIONS = [{ id: "overview", label: "Overview" }] as const;

const META = [
  { label: "Role", value: "Product Designer" },
  { label: "Timeline", value: "2023 Jun - Nov" },
  { label: "System", value: "Clarity DS" },
  {
    label: "Scope",
    value:
      "Revamp of the VCCP Configurator and its four purchasing flows (new, add-on, renewal, upgrade), plus the connected subscription service pages",
  },
] as const;

const STATS = [
  { n: "8", c: "cost dimensions a single service line could carry at once" },
  { n: "3", c: "levels of drill-down the core table had to support" },
  { n: "4", c: "purchasing flows sharing one configurator" },
  { n: "0", c: "Clarity components that solved the core table out of the box" },
] as const;

export default function VmwareCaseStudy() {
  return (
    <main id="main" className="min-h-screen bg-white">
      <div className="mx-auto max-w-[1320px] px-6 pt-8 md:px-10 md:pt-10">
        <CaseBreadcrumb title="VMware" />
      </div>

      {/* Generous gap between the breadcrumb and where the project begins,
          echoing the homepage nav-to-hero breathing room. */}
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-y-10 px-6 pb-20 pt-24 md:px-10 md:pt-32 lg:grid-cols-[120px_minmax(0,1fr)] lg:gap-x-[110px]">
        <div className="lg:pt-3">
          <CaseSideNav sections={SECTIONS} />
        </div>

        <article className="min-w-0">
          <img src="/hero/vmware-wordmark.png" alt="VMware" className="h-[26px] w-auto" />

          <h1 className="mt-7 font-serif text-[clamp(2.4rem,4.6vw,3.9rem)] font-normal leading-[1.04] tracking-[-0.02em] text-[#42444d]">
            VCCP - Customer Connect Cloud Service Portal Revamp
          </h1>

          <div className="mt-10 aspect-[1058/607] w-full overflow-hidden rounded-xl border border-rule bg-[#eef0f3]">
            <AutoVideo
              src="/projects/vmware-cloud-cover.mp4"
              ariaLabel="VMware Customer Connect Portal cover illustration"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mt-11">
            <ConfidentialityNotice>
              This case study is shared under NDA. Every visual is an original schematic with placeholder data:
              no customer names, entitlement numbers, or account-tied figures appear. Clarity&rsquo;s own
              documentation is public. Please don&rsquo;t redistribute.
            </ConfidentialityNotice>
          </div>

          <div className="mt-10">
            <CaseMeta items={META} />
          </div>

          <section id="overview" className="mt-12 scroll-mt-24">
            <h2 className="font-serif text-[clamp(1.9rem,3.2vw,2.5rem)] font-normal tracking-[-0.01em] text-[#42444d]">
              Overview
            </h2>
            <div className="mt-6 space-y-5 font-serif text-[19px] leading-[1.6] text-[#2b2b2e]">
              <p>
                I was asked to redesign the Cloud Provider purchasing portals and apply Clarity to them. On
                paper that reads like a restyle. It was not.
              </p>
              <p>
                The platform sold cloud infrastructure to businesses through one of the most layered commercial
                models I have worked with. A single line item could carry eight kinds of cost at once, sit
                inside a three-level nested table, and change behaviour by region and currency. The real work
                was understanding that model before changing a single screen, then making design decisions that
                protected the system instead of adding to its weight.
              </p>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.n + s.c}>
                  <dt className="font-serif text-[2.7rem] leading-none text-[#42444d]">{s.n}</dt>
                  <dd className="mt-3 font-sans text-[13px] leading-[1.45] text-muted">{s.c}</dd>
                </div>
              ))}
            </dl>
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
