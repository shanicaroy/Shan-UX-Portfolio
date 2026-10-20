"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { projects, type Project } from "@/content/projects";
import { siteConfig } from "@/content/config";
import ProjectCanvas from "./ProjectCanvas";

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
  "dell-portal-redesign",
  "ey-data-product-factory",
  "case-check",
];

// Card captions, taken verbatim from the Figma Selected Work section:
// line 1 is the client + year (grey), line 2 is the project title, with an
// NDA lock badge on the confidential ones.
const CARD: Record<string, { client: string; year: string; title: string; nda?: boolean }> = {
  "vmware-cloud-provider-portal": { client: "VMware", year: "2023", title: "Cloud Service Portal (Enterprise Saas)", nda: true },
  "customer-lifecycle-management": { client: "Bhanzu", year: "2022", title: "Customer Lifecycle Management Saas Web Tool" },
  "virtubox-kiosk": { client: "VirtuBox Infotech", year: "2020", title: "VirtuBox Kiosk UI/UX Design" },
  "dell-portal-redesign": { client: "Dell Technologies", year: "2024", title: "Order & Inventory Logistics Suite", nda: true },
  "ey-data-product-factory": { client: "Ernst & Young", year: "2025", title: "Data Product Marketplace Revamp", nda: true },
  "case-check": { client: "UXPective", year: "2026", title: "Applied AI Build : Case Check Tool" },
};
const ROBOTO = '"Roboto", "Helvetica Neue", Arial, sans-serif';
const INTER = '"Inter", "Helvetica Neue", Arial, sans-serif';

// Keep the section's left/right edge aligned with the hero's 118px margin:
// 118 / 1728 = 6.83vw below the design width, capped at 118px above it.
const GUTTER = "min(6.83vw, 118px)";

export default function SelectedWork() {
  const ordered = GRID_ORDER.map((slug) => projects.find((p) => p.slug === slug)).filter(
    (p): p is Project => Boolean(p)
  );
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section
      id="work"
      aria-labelledby="selected-work-heading"
      style={{ paddingInline: GUTTER }}
      className="scroll-mt-10 bg-white pb-8 pt-14 lg:pb-10"
    >
      {/* Divider runs full-bleed to the screen edges (breaks out of the gutter). */}
      <div style={{ height: "1px", background: "#e8e6e2", marginInline: `calc(-1 * ${GUTTER})` }} />
      <h2
        id="selected-work-heading"
        className="font-serif font-normal text-[#42444d]"
        style={{
          fontFamily: '"Times New Roman", Times, Georgia, serif',
          fontSize: "clamp(34px, 3.47vw, 60px)",
          lineHeight: 0.94,
          letterSpacing: "-0.04em",
          marginTop: "63px",
        }}
      >
        Selected Work
      </h2>

      <div
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ marginTop: "22px", columnGap: "clamp(18px, 1.79vw, 31px)", rowGap: "22px" }}
      >
        {ordered.map((project, i) => (
          <WorkCard key={project.slug} project={project} index={i} onOpen={() => setActive(project)} />
        ))}
      </div>

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
  return (
    <button type="button" onClick={onOpen} className="group block w-full text-left" aria-haspopup="dialog">
      <div
        className="w-full overflow-hidden border border-[#ededed] bg-[#ededed]"
        style={{ aspectRatio: "743 / 525", borderRadius: "1px" }}
      >
        {project.video ? (
          <video
            src={project.video}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={`${project.title}, case study cover`}
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
        const card = CARD[project.slug];
        if (!card) return null;
        return (
          <div className="flex flex-col" style={{ marginTop: "20px", gap: "2px", fontFamily: ROBOTO }}>
            <div className="flex items-center justify-between gap-4 text-[#828282]" style={{ fontSize: "clamp(16px, 1.46vw, 25.285px)" }}>
              <span>{card.client}</span>
              <span className="shrink-0 tabular-nums">{card.year}</span>
            </div>
            <div className="flex items-end justify-between gap-4">
              <h3
                className="min-w-0 font-medium leading-[1.15] text-[#42444d]"
                style={{ fontFamily: INTER, fontSize: "clamp(21px, 1.86vw, 32.149px)", letterSpacing: "-0.05em" }}
              >
                {card.title}
              </h3>
              {card.nda && (
                <span
                  className="flex shrink-0 items-center font-medium uppercase text-[#7a5ab2]"
                  style={{ fontSize: "clamp(15px, 1.44vw, 24.794px)", gap: "9px" }}
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
  const inputRef = useRef<HTMLInputElement>(null);
  const href = `/work/${project.slug}`;
  const requestHref =
    siteConfig.social.email && !siteConfig.social.email.includes("[")
      ? `${siteConfig.social.email}?subject=${encodeURIComponent(`Access request: ${project.title}`)}`
      : siteConfig.resume;

  useEffect(() => {
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
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
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-5"
      style={{ background: "rgba(20,20,20,0.35)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} is password protected`}
        className="relative my-auto max-h-[92vh] w-full max-w-[560px] overflow-y-auto rounded-[18px] bg-white px-6 py-10 text-center shadow-[0_30px_80px_-20px_rgba(20,20,20,0.35)] sm:px-14 sm:py-11"
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

        <svg className="mx-auto" width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="4.5" y="10.5" width="15" height="10" rx="2" stroke="#7a5ab2" strokeWidth="2" />
          <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" stroke="#7a5ab2" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <p className="mt-3 text-[15px] font-semibold text-[#7a5ab2]">Password protected</p>

        <h3
          className="mx-auto mt-5 max-w-[12ch] font-normal leading-[1.08] tracking-[-0.01em] text-[#1a1a1d]"
          style={{ fontFamily: '"Times New Roman", Times, Georgia, serif', fontSize: "clamp(34px, 5vw, 52px)" }}
        >
          {project.title}
        </h3>
        <p className="mx-auto mt-5 max-w-[34ch] text-[16px] leading-relaxed text-[#6b6b6b]">
          Enter the password from my resume or email to view this case study.
        </p>

        <form onSubmit={submit} className="mt-9 text-left">
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
            className="mt-9 w-full rounded-[10px] bg-[#7a5ab2] py-4 text-[15px] font-semibold uppercase tracking-[0.1em] text-white transition-opacity duration-200 hover:opacity-90"
          >
            View case study
          </button>
        </form>

        <p className="mt-6 text-[15px] text-[#6b6b6b]">
          No password?{" "}
          <a href={requestHref} className="font-medium text-[#7a5ab2] underline underline-offset-2 hover:opacity-80">
            Request access
          </a>
        </p>
      </div>
    </div>
  );
}
