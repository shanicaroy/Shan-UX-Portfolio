import type { Metadata } from "next";
import AutoVideo from "@/components/AutoVideo";
import Footer from "@/components/Footer";
import CaseBreadcrumb from "@/components/case/CaseBreadcrumb";
import CaseSideNav from "@/components/case/CaseSideNav";
import CaseMeta from "@/components/case/CaseMeta";

export const metadata: Metadata = {
  title: "VirtuBox Kiosk Design",
  description:
    "Designing a physical-digital kiosk experience and enterprise dashboards for a SaaS kiosk-building platform.",
};

/**
 * VirtuBox (non-NDA) — same editorial case structure as the VMware template,
 * without the confidentiality notice: breadcrumb, company mark, serif title,
 * wide cover, Role/Timeline/Scope metadata, serif Overview, footer. Content is
 * the project's real, approved copy; the detailed write-up is still pending.
 */

const SECTIONS = [{ id: "overview", label: "Overview" }] as const;

const META = [
  { label: "Role", value: "UI/UX Designer" },
  { label: "Timeline", value: "2020" },
  { label: "Scope", value: "Interactive shopping kiosk and enterprise dashboards for a SaaS kiosk-building platform" },
] as const;

export default function VirtuboxCaseStudy() {
  return (
    <main id="main" className="min-h-screen bg-white">
      <div className="mx-auto max-w-[1320px] px-6 pt-8 md:px-10 md:pt-10">
        <CaseBreadcrumb title="VirtuBox" />
      </div>

      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-y-10 px-6 pb-20 pt-24 md:px-10 md:pt-32 lg:grid-cols-[120px_minmax(0,1fr)] lg:gap-x-[110px]">
        <div className="lg:pt-3">
          <CaseSideNav sections={SECTIONS} />
        </div>

        <article className="min-w-0">
          <img src="/hero/virtubox-v2.svg" alt="VirtuBox Infotech" className="h-10 w-10 rounded-[3px]" />

          <h1 className="mt-7 font-serif text-[clamp(2.4rem,4.6vw,3.9rem)] font-normal leading-[1.04] tracking-[-0.02em] text-[#42444d]">
            VirtuBox Kiosk Design
          </h1>

          <div className="mt-10 aspect-[1058/607] w-full overflow-hidden rounded-xl border border-rule bg-[#eef0f3]">
            <AutoVideo
              src="/projects/virtubox-kiosk.mp4"
              ariaLabel="VirtuBox Kiosk cover"
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
                Designing a physical-digital experience where usability, operational constraints, business
                requirements, and real-world behavior had to converge.
              </p>
              <p>
                I designed an interactive shopping kiosk and enterprise dashboard solutions for a SaaS
                kiosk-building platform, keeping the on-screen experience usable for shoppers and the back end
                workable for operators.
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
