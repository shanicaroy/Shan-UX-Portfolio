import Link from "next/link";
import { projects, type Project } from "@/content/projects";
import ProjectCanvas from "./ProjectCanvas";
import Reveal from "./Reveal";
import AutoVideo from "./AutoVideo";

/**
 * Selected Work — the six real projects, rendered below the locked hero in a
 * responsive two-column grid that keeps the hero's side margin (118/1728 of
 * the width, i.e. 6.83vw up to the 1728px design width). Each card carries a
 * live video cover, the project title, its one-line descriptor, and the
 * positioning eyebrow. Every card is gated: clicking one opens the password
 * dialog (the design Shanica supplied) before the case study opens.
 */
const GRID_ORDER = [
  "vmware-cloud-provider-portal",
  "customer-lifecycle-management",
  "virtubox-kiosk",
  "orbit-design-system",
  "case-check",
  "dell-portal-redesign",
  "ey-data-product-factory",
  "fintrack",
];

// Card captions, taken verbatim from the Figma — including its per-card size
// differences, which are reproduced exactly rather than normalised: line 1 is
// "Client - Year" (grey), line 2 the project title, with an NDA lock on the
// confidential ones. metaPx/titlePx/gapPx are the Figma values per card.
const CARD: Record<
  string,
  { meta: string; title: string; titlePx: number; coverGap: number; nda?: boolean; href?: string }
> = {
  "vmware-cloud-provider-portal": { meta: "VMware - 2023", title: "Cloud Service Portal (Enterprise Saas Solution)", titlePx: 25.644, coverGap: 9.863, nda: true },
  "customer-lifecycle-management": { meta: "Bhanzu - 2022", title: "Customer Lifecycle Management Saas Web Tool", titlePx: 25.644, coverGap: 7.89 },
  "virtubox-kiosk": { meta: "VirtuBox Infotech - 2020", title: "VirtuBox Kiosk UI/UX Design - Service Experience", titlePx: 25.644, coverGap: 7.89 },
  "orbit-design-system": { meta: "UXPective - 2025", title: "Orbit Design System - WCAG 2.1 AA Standard", titlePx: 25.644, coverGap: 7.89, href: "/work/orbit-design-system" },
  "case-check": { meta: "UXPective - 2026", title: "Applied AI Build : Case Check Tool", titlePx: 25.644, coverGap: 7.89 },
  "dell-portal-redesign": { meta: "Dell Technologies - 2024", title: "Order & Inventory Logistics Suite", titlePx: 25.644, coverGap: 7.89, nda: true },
  "ey-data-product-factory": { meta: "Ernst & Young - 2025", title: "Data Product Marketplace Revamp", titlePx: 25.644, coverGap: 7.89, nda: true },
  "fintrack": { meta: "Fintrack - 2021 (Freelance)", title: "Finance Management Mobile App", titlePx: 25.644, coverGap: 7.89 },
};
const ROBOTO = '"Roboto", "Helvetica Neue", Arial, sans-serif';
const INTER = '"Inter", "Helvetica Neue", Arial, sans-serif';

// Exact px at the 1728 design width, scaling proportionally with the viewport
// both below and above it (so the grid tracks the full-bleed hero on wide
// screens). The upper bound is effectively uncapped for any real display.
const fluid = (px: number, min: number) =>
  `clamp(${min}px, ${((px / 1728) * 100).toFixed(3)}vw, ${(px * 4).toFixed(1)}px)`;

// Keep the section's left/right edge aligned with the hero's 119px margin at
// every width: 119 / 1728 = 6.887vw, uncapped so it tracks the scaled hero.
const GUTTER = "6.887vw";

// One shared gap between every cover and its caption, so captions sit on the
// same line across a row regardless of per-card Figma values. A single rule,
// not per-card offsets (Part 4).
const COVER_GAP = fluid(7.89, 6);

export default function SelectedWork() {
  const ordered = GRID_ORDER.map((slug) => projects.find((p) => p.slug === slug)).filter(
    (p): p is Project => Boolean(p)
  );

  return (
    <section
      id="work"
      aria-labelledby="selected-work-heading"
      style={{ paddingInline: GUTTER, paddingTop: "4.86vw", paddingBottom: "7.5vw" }}
      className="scroll-mt-10 bg-white"
    >
      <Reveal
        as="h2"
        id="selected-work-heading"
        className="font-serif font-normal text-[#42444d]"
        style={{
          fontFamily: '"Times New Roman", Times, Georgia, serif',
          fontSize: fluid(42, 26),
          lineHeight: 0.94,
          letterSpacing: "-0.04em",
        }}
      >
        Selected Work
      </Reveal>

      <Reveal
        delay={120}
        className="grid grid-cols-1 items-start gap-y-9 md:grid-cols-2 md:gap-y-7"
        style={{ marginTop: "2.083vw", columnGap: fluid(30.575, 18) }}
      >
        {ordered.map((project, i) => (
          <WorkCard key={project.slug} project={project} index={i} />
        ))}
      </Reveal>
    </section>
  );
}

function WorkCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const card = CARD[project.slug];
  const inner = (
    <>
      <div
        className="w-full overflow-hidden border border-[#ededed] bg-[#ededed]"
        style={{ aspectRatio: "732.816 / 517.804", borderRadius: "1px" }}
      >
        {project.video ? (
          <AutoVideo
            src={project.video}
            ariaLabel={`${project.title}, case study cover`}
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.015]"
          />
        ) : project.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.photo}
            alt={`${project.title}, case study cover`}
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.015]"
          />
        ) : (
          <ProjectCanvas index={index} alt={`${project.title}, case study cover`} />
        )}
      </div>

      {(() => {
        if (!card) return null;
        return (
          <div className="flex flex-col" style={{ marginTop: COVER_GAP, gap: "3.945px", fontFamily: ROBOTO }}>
            <p className="text-[#828282]" style={{ fontSize: fluid(19.726, 12) }}>
              {card.meta}
            </p>
            <div className="flex items-end justify-between gap-3">
              <h3
                className="min-w-0 font-medium leading-[1.12] text-[#42444d]"
                style={{ fontFamily: INTER, fontSize: fluid(card.titlePx, 15), letterSpacing: "-0.03em" }}
              >
                {card.title}
              </h3>
              {card.nda && (
                <span
                  className="flex shrink-0 items-center font-medium uppercase text-[#7a5ab2]"
                  style={{ fontSize: fluid(24.454, 12), gap: "8.877px" }}
                  aria-label="Under NDA"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden className="h-[1.05em] w-[1.05em]">
                    <rect x="4.5" y="10.5" width="15" height="10" rx="1.6" />
                    <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" strokeLinecap="round" />
                  </svg>
                  NDA
                </span>
              )}
            </div>
          </div>
        );
      })()}
    </>
  );

  // Password gating is removed for now: every card links straight to its case
  // study (Orbit keeps its explicit href, the rest go to /work/<slug>).
  const target = card?.href ?? `/work/${project.slug}`;
  return (
    <Link href={target} className="group block w-full text-left">
      {inner}
    </Link>
  );
}

