import type { Metadata } from "next";
import AutoVideo from "@/components/AutoVideo";
import CaseBreadcrumb from "@/components/case/CaseBreadcrumb";
import CaseSideNav from "@/components/case/CaseSideNav";
import ConfidentialityNotice from "@/components/case/ConfidentialityNotice";
import CaseMeta from "@/components/case/CaseMeta";
import NextProjectCard from "@/components/case/NextProjectCard";

export const metadata: Metadata = {
  title: "VMware Cloud Provider Portal",
  description:
    "Redesigning the purchasing portals inside VMware's Cloud Provider platform, in Clarity. An NDA case study shared as an approved overview.",
};

/**
 * VMware Cloud Provider Portal — NDA case study, redesigned to the editorial
 * hierarchy: breadcrumb, company mark, project title (H1), contained hero
 * illustration, confidentiality notice, metadata, then the approved Overview.
 * NDA rule (Part 6): only the Overview is rendered; no detailed sections are
 * present in the page output, so no restricted narrative is delivered. Built
 * from the shared components in components/case/* in the site's own type system.
 */

const SECTIONS = [{ id: "overview", label: "Overview" }] as const;

const META = [
  { label: "Role", value: "Product / UX Designer" },
  { label: "Timeline", value: "2023" },
  {
    label: "Scope",
    value:
      "The VCPP Configurator and its four purchasing flows (new, add-on, renewal, upgrade), plus the connected subscription service pages",
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
      <div className="mx-auto max-w-[1180px] px-6 pt-8 md:px-10 md:pt-10">
        <CaseBreadcrumb title="VMware Cloud Provider Portal" />
      </div>

      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-y-10 px-6 pb-16 pt-9 md:px-10 lg:grid-cols-[170px_minmax(0,1fr)] lg:gap-x-16">
        <div className="lg:pt-1">
          <CaseSideNav sections={SECTIONS} />
        </div>

        <article className="min-w-0 max-w-[760px]">
          <img
            src="/hero/vmware-v2.svg"
            alt="VMware"
            width={44}
            height={44}
            className="h-11 w-11 rounded-[3px]"
          />
          <h1 className="mt-5 font-serif text-[clamp(2.1rem,4.6vw,3.1rem)] font-normal leading-[1.04] tracking-[-0.02em] text-[#42444d]">
            VMware Cloud Provider Portal
          </h1>
          <p className="mt-5 font-sans text-[17px] leading-[1.6] text-muted">
            Redesigning the purchasing portals inside VMware&rsquo;s Cloud Provider platform, in Clarity, the
            design system whose own team had already documented the wall I was about to hit.
          </p>

          <div className="mt-8 overflow-hidden rounded-xl border border-rule bg-[#f4f5f7]">
            <AutoVideo
              src="/projects/vmware-cloud-cover.mp4"
              ariaLabel="VMware Cloud Provider Portal cover illustration"
              className="block h-auto w-full"
            />
          </div>

          <div className="mt-6">
            <ConfidentialityNotice>
              This case study is shared under NDA. Every visual is an original schematic with placeholder data:
              no customer names, entitlement numbers, or account-tied figures appear. Clarity&rsquo;s own
              documentation is public. Please don&rsquo;t redistribute.
            </ConfidentialityNotice>
          </div>

          <div className="mt-8">
            <CaseMeta items={META} />
          </div>

          <section id="overview" className="mt-10 scroll-mt-24">
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.1rem)] font-normal tracking-[-0.01em] text-[#42444d]">
              Overview
            </h2>
            <p className="mt-4 font-sans text-[18px] leading-[1.7] text-ink">
              I was asked to redesign the Cloud Provider purchasing portals and apply Clarity to them. On paper
              that reads like a restyle. It was not.
            </p>
            <p className="mt-4 font-sans text-[16px] leading-[1.75] text-[#3a3a3a]">
              The platform sold cloud infrastructure to businesses through one of the most layered commercial
              models I have worked with. A single line item could carry eight kinds of cost at once, sit inside a
              three-level nested table, and change behaviour by region and currency. The real work was
              understanding that model before changing a single screen, then making design decisions that
              protected the system instead of adding to its weight.
            </p>

            <dl className="mt-9 grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.n + s.c}>
                  <dt className="font-serif text-[2.4rem] leading-none text-[#42444d]">{s.n}</dt>
                  <dd className="mt-2 font-sans text-[13px] leading-[1.45] text-muted">{s.c}</dd>
                </div>
              ))}
            </dl>
          </section>
        </article>
      </div>

      <div className="mx-auto max-w-[1180px] px-6 pb-24 md:px-10">
        <NextProjectCard
          href="/work/customer-lifecycle-management"
          meta="Bhanzu &middot; 2022"
          title="Customer Lifecycle Management SaaS Web Tool"
        />
      </div>
    </main>
  );
}
