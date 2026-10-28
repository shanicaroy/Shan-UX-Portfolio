import type { Metadata } from "next";
import AutoVideo from "@/components/AutoVideo";
import CaseBreadcrumb from "@/components/case/CaseBreadcrumb";
import CaseSideNav from "@/components/case/CaseSideNav";
import ConfidentialityNotice from "@/components/case/ConfidentialityNotice";
import CaseMeta from "@/components/case/CaseMeta";
import NextProjectCard from "@/components/case/NextProjectCard";

export const metadata: Metadata = {
  title: "VMware Customer Connect Portal (VCCP)",
  description:
    "VMware Customer Connect Portal (VCCP), a Clarity-based cloud purchasing platform revamp. An NDA case study shared as an approved overview.",
};

/**
 * VMware Cloud Provider Portal (VCPP) — NDA case study. Editorial hierarchy:
 * generous top gap, breadcrumb, VMware wordmark, project title (H1, no
 * "VMware" repeat since the wordmark carries it), a wide hero illustration
 * (≈956/564, the ratio from the Figma overlay), a plain confidentiality
 * notice (Ben Roach composition), Role/Timeline/Scope metadata, then the
 * approved Overview. Reading content is set in the site serif (Times New
 * Roman); small labels stay in Inter. NDA (Part 6): only the Overview renders.
 */

const SECTIONS = [{ id: "overview", label: "Overview" }] as const;

const META = [
  { label: "Role", value: "Product / UX Designer" },
  { label: "Timeline", value: "2023" },
  {
    label: "Scope",
    value:
      "The VCCP Configurator and its four purchasing flows (new, add-on, renewal, upgrade), plus the connected subscription service pages",
  },
  { label: "System", value: "Clarity (VMware, MIT-licensed)" },
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
      <div className="mx-auto max-w-[1200px] px-6 pt-8 md:px-12 md:pt-10">
        <CaseBreadcrumb title="VMware Customer Connect Portal" />
      </div>

      {/* Generous gap between the breadcrumb and where the project begins,
          echoing the homepage's nav-to-hero breathing room. */}
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-y-10 px-6 pb-16 pt-20 md:px-12 md:pt-28 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-x-14">
        <div className="lg:pt-2">
          <CaseSideNav sections={SECTIONS} />
        </div>

        <article className="min-w-0">
          <img src="/hero/vmware-wordmark.png" alt="VMware" className="h-[28px] w-auto" />

          <h1 className="mt-6 font-serif text-[clamp(2rem,4.3vw,3rem)] font-normal leading-[1.05] tracking-[-0.02em] text-[#42444d]">
            VMware Customer Connect Portal (VCCP)
          </h1>
          <p className="mt-3 font-serif text-[clamp(1.15rem,2vw,1.4rem)] leading-[1.3] text-muted">
            Cloud Service Platform Revamp
          </p>

          <div className="mt-8 aspect-[956/564] w-full overflow-hidden rounded-xl border border-rule bg-[#eef0f3]">
            <AutoVideo
              src="/projects/vmware-cloud-cover.mp4"
              ariaLabel="VMware Cloud Provider Portal cover illustration"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mt-9">
            <ConfidentialityNotice>
              This case study is shared under NDA. Every visual is an original schematic with placeholder data:
              no customer names, entitlement numbers, or account-tied figures appear. Clarity&rsquo;s own
              documentation is public. Please don&rsquo;t redistribute.
            </ConfidentialityNotice>
          </div>

          <div className="mt-9">
            <CaseMeta items={META} />
          </div>

          <section id="overview" className="mt-12 scroll-mt-24">
            <h2 className="font-serif text-[clamp(1.8rem,3.2vw,2.4rem)] font-normal tracking-[-0.01em] text-[#42444d]">
              Overview
            </h2>
            <div className="mt-5 max-w-[68ch] space-y-5 font-serif text-[19px] leading-[1.62] text-[#2b2b2e]">
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

            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.n + s.c}>
                  <dt className="font-serif text-[2.6rem] leading-none text-[#42444d]">{s.n}</dt>
                  <dd className="mt-2 font-sans text-[13px] leading-[1.45] text-muted">{s.c}</dd>
                </div>
              ))}
            </dl>
          </section>
        </article>
      </div>

      <div className="mx-auto max-w-[1200px] px-6 pb-24 md:px-12">
        <NextProjectCard
          href="/work/customer-lifecycle-management"
          meta="Bhanzu &middot; 2022"
          title="Customer Lifecycle Management SaaS Web Tool"
        />
      </div>
    </main>
  );
}
