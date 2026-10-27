"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { projects, type Project } from "@/content/projects";
import { siteConfig } from "@/content/config";
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

export default function SelectedWork() {
  const ordered = GRID_ORDER.map((slug) => projects.find((p) => p.slug === slug)).filter(
    (p): p is Project => Boolean(p)
  );
  const [active, setActive] = useState<Project | null>(null);

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
        className="grid grid-cols-1 gap-y-9 md:grid-cols-2 md:gap-y-7"
        style={{ marginTop: "2.083vw", columnGap: fluid(30.575, 18) }}
      >
        {ordered.map((project, i) => (
          <WorkCard key={project.slug} project={project} index={i} onOpen={() => setActive(project)} />
        ))}
      </Reveal>

      {active && <PasswordDialog project={active} onClose={() => setActive(null)} />}
    </section>
  );
}

function WorkCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
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
          <div className="flex flex-col" style={{ marginTop: `${card.coverGap}px`, gap: "3.945px", fontFamily: ROBOTO }}>
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

  // Orbit opens its case study directly; the rest open the password dialog.
  if (card?.href) {
    return (
      <Link href={card.href} className="group block w-full text-left">
        {inner}
      </Link>
    );
  }
  return (
    <button type="button" onClick={onOpen} className="group block w-full text-left" aria-haspopup="dialog">
      {inner}
    </button>
  );
}

/**
 * Password dialog, matching Shanica's design: a centred white card over a
 * blurred, dimmed page, with a lock mark, the project title in serif, an
 * underlined password field with a show/hide eye, a full-width accent button,
 * and a "request access" fallback. Client-side gate only — the pages stay
 * reachable by URL; this just keeps casual visitors out.
 */
function PasswordDialog({ project, onClose }: { project: Project; onClose: () => void }) {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [reveal, setReveal] = useState(false);
  const [error, setError] = useState(false);
  const [enter, setEnter] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const href = `/work/${project.slug}`;
  const requestHref =
    siteConfig.social.email && !siteConfig.social.email.includes("[")
      ? `mailto:${siteConfig.social.email}?subject=${encodeURIComponent(`Access request: ${project.title}`)}`
      : siteConfig.resume;

  useEffect(() => {
    inputRef.current?.focus();
    // Play the entrance on the next frame so the transition runs from the
    // hidden start state instead of snapping straight to visible.
    const raf = requestAnimationFrame(() => setEnter(true));
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (value === siteConfig.projectPassword) {
      router.push(href);
    } else {
      setError(true);
    }
  }

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-5 transition-opacity duration-300 ease-[cubic-bezier(.22,1,.36,1)] ${
        enter ? "opacity-100" : "opacity-0"
      }`}
      style={{ background: "rgba(20,20,20,0.35)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} is password protected`}
        className={`relative my-auto max-h-[92vh] w-full max-w-[760px] overflow-y-auto rounded-[3px] bg-white px-8 py-9 text-center shadow-[0_24px_60px_-24px_rgba(20,20,20,0.3)] transition-[transform,opacity] duration-[340ms] ease-[cubic-bezier(.22,1,.36,1)] sm:px-12 ${
          enter ? "translate-y-0 scale-100 opacity-100" : "translate-y-3 scale-[0.98] opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full text-[#6b6b6b] transition-colors hover:bg-[#f3f3f3] hover:text-[#1a1a1d]"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>

        <svg className="mx-auto" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="4.5" y="10.5" width="15" height="10" rx="1.6" stroke="#7a5ab2" strokeWidth="1.8" />
          <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" stroke="#7a5ab2" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <p className="mt-2.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#7a5ab2]">Password protected</p>

        <h3
          className="mx-auto mt-3 font-normal leading-[1.14] tracking-[-0.02em] text-[#42444d] sm:whitespace-nowrap"
          style={{ fontFamily: '"Times New Roman", Times, Georgia, serif', fontSize: "clamp(19px, 1.9vw, 25px)" }}
        >
          {project.title}
        </h3>
        <p className="mx-auto mt-2.5 max-w-[34ch] text-[13.5px] leading-relaxed text-[#6b6b6b]">
          Enter the password from my resume or email to view this case study.
        </p>

        <form onSubmit={submit} className="mt-7 text-left">
          <label htmlFor="work-password" className="block text-[15px] font-medium text-[#3a3a3a]">
            Password
          </label>
          <div className="relative mt-3 border-b border-[#9a9a9a] focus-within:border-[#7a5ab2]">
            <input
              ref={inputRef}
              id="work-password"
              type={reveal ? "text" : "password"}
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                setError(false);
              }}
              className="w-full bg-transparent pb-2 pr-9 text-[17px] text-[#1a1a1d] outline-none focus:outline-none focus-visible:outline-none"
              autoComplete="off"
            />
            <button
              type="button"
              onClick={() => setReveal((r) => !r)}
              aria-label={reveal ? "Hide password" : "Show password"}
              className="absolute right-0 top-1/2 -translate-y-1/2 pb-2 text-[#6b6b6b] transition-colors hover:text-[#1a1a1d]"
            >
              {reveal ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                  <path d="M3 3l18 18M10.6 10.6a2 2 0 002.8 2.8" strokeLinecap="round" />
                  <path d="M9.9 5.1A9.3 9.3 0 0112 5c5 0 9 4 10 7a15.3 15.3 0 01-3.2 4M6.1 7.1A15.6 15.6 0 002 12c1 3 5 7 10 7a9.6 9.6 0 004.5-1.1" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                  <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          </div>
          {error && (
            <p role="alert" className="mt-3 text-[14px] text-[#c0392b]">
              Incorrect password. Try the one from my resume or email.
            </p>
          )}

          <button
            type="submit"
            className="mt-7 w-full rounded-[2px] bg-[#7a5ab2] py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition-opacity duration-200 hover:opacity-90"
          >
            View case study
          </button>
        </form>

        <p className="mt-5 text-[13.5px] text-[#6b6b6b]">
          No password?{" "}
          <a href={requestHref} className="font-medium text-[#7a5ab2] underline underline-offset-2 hover:opacity-80">
            Request access
          </a>
        </p>
      </div>
    </div>
  );
}
