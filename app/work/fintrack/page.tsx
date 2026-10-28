import type { Metadata } from "next";
import Footer from "@/components/Footer";
import CaseBreadcrumb from "@/components/case/CaseBreadcrumb";
import CaseSideNav from "@/components/case/CaseSideNav";
import CaseMeta from "@/components/case/CaseMeta";

export const metadata: Metadata = {
  title: "Finance Management Mobile App (FinTrack)",
  description:
    "A personal finance management mobile app: tracking transactions, reports, and spending insights with a clear, trustworthy UX.",
};

/**
 * FinTrack (non-NDA, freelance) — same editorial case structure as the VMware
 * template, without a confidentiality notice and (since there is no FinTrack
 * logo) with a small positioning eyebrow in place of a company mark. Serif
 * title, photo cover, Role/Timeline/Scope metadata, serif Overview, footer.
 * Real, approved copy; the detailed write-up is still pending.
 */

const SECTIONS = [{ id: "overview", label: "Overview" }] as const;

const META = [
  { label: "Role", value: "UX Research & Design" },
  { label: "Timeline", value: "2021 (Freelance)" },
  { label: "Scope", value: "Personal finance app: transactions, reports, and spending insights" },
] as const;

export default function FintrackCaseStudy() {
  return (
    <main id="main" className="min-h-screen bg-white">
      <div className="mx-auto max-w-[1320px] px-6 pt-8 md:px-10 md:pt-10">
        <CaseBreadcrumb title="FinTrack" />
      </div>

      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-y-10 px-6 pb-20 pt-24 md:px-10 md:pt-32 lg:grid-cols-[120px_minmax(0,1fr)] lg:gap-x-[110px]">
        <div className="lg:pt-3">
          <CaseSideNav sections={SECTIONS} />
        </div>

        <article className="min-w-0">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9a9a9a]">
            FinTrack &middot; Freelance
          </p>

          <h1 className="mt-4 font-serif text-[clamp(2.4rem,4.6vw,3.9rem)] font-normal leading-[1.04] tracking-[-0.02em] text-[#42444d]">
            Finance Management Mobile App
          </h1>

          <div className="mt-10 aspect-[1058/607] w-full overflow-hidden rounded-xl border border-rule bg-[#eef0f3]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/projects/fintrack.webp"
              alt="FinTrack finance management mobile app cover"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mt-11">
            <CaseMeta items={META} />
          </div>

          <section id="overview" className="mt-12 scroll-mt-24">
            <h2 className="font-serif text-[clamp(1.9rem,3.2vw,2.5rem)] font-normal tracking-[-0.01em] text-[#42444d]">
              Overview
            </h2>
            <div className="mt-6 max-w-[70ch] space-y-5 font-serif text-[19px] leading-[1.62] text-[#2b2b2e]">
              <p>
                A personal finance management mobile app: tracking transactions, reports, and spending insights
                with a clear, trustworthy UX.
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
