"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const RESUME = "https://drive.google.com/file/d/1zGPlamzV_6P_B7D8OPNq-CXjuq-McGtJ/view";
const LINKS = [
  { label: "WORK", href: "/" },
  { label: "APPLIED AI", href: "/ai-lab" },
  { label: "ABOUT", href: "/about" },
  { label: "WRITING", href: "/writing" },
];

/**
 * The site's single navigation, used identically on every page so the header
 * never changes shape between routes. It mirrors the Figma nav: a serif
 * "Shanica Roy" wordmark, centred Sora links (the current section in accent),
 * and a squared purple Resume button with an on-theme hover tooltip.
 *
 * Two modes, same markup and styling:
 *  - default (home): fixed overlay that stays hidden until the hero's own nav
 *    has scrolled away, then slides down.
 *  - solid (every other page): a sticky, always-visible bar in normal flow.
 */
export default function StickyNav({ solid = false }: { solid?: boolean }) {
  const [shown, setShown] = useState(solid);
  const [open, setOpen] = useState(false);
  const ticking = useRef(false);
  const pathname = usePathname();

  useEffect(() => {
    if (solid) return; // always visible — no scroll reveal
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        setShown(window.scrollY > 160);
        ticking.current = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [solid]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  // WORK points home: on the home page it must not reload or jump.
  const onLink = (href: string) => (e: React.MouseEvent) => {
    if (href === "/" && pathname === "/") e.preventDefault();
    setOpen(false);
  };

  const position = solid
    ? "sticky top-0 translate-y-0"
    : `fixed inset-x-0 top-0 transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)] ${
        shown ? "translate-y-0" : "-translate-y-full"
      }`;

  return (
    <div className={`z-50 bg-white/95 backdrop-blur ${position}`}>
      <div className="mx-auto flex h-[72px] w-full items-center justify-end px-5 sm:px-8 lg:px-[max(32px,min(6.83vw,118px))]">
        <nav
          aria-label="Primary"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center md:flex"
          style={{ fontFamily: '"Sora", "Helvetica Neue", Arial, sans-serif', gap: "clamp(26px,2.72vw,47px)" }}
        >
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={onLink(l.href)}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={`font-semibold tracking-[0.01em] transition-colors hover:text-accent ${
                isActive(l.href) ? "text-accent" : "text-[#4f4f5d]"
              }`}
              style={{ fontSize: "clamp(14px,0.98vw,17px)" }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="group/resume relative hidden md:inline-flex">
            <a
              href={RESUME}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[2px] bg-accent px-5 py-2.5 text-[14px] font-semibold uppercase tracking-[0.04em] text-white transition-opacity hover:opacity-90"
              style={{ fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif' }}
            >
              Resume
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                aria-hidden
                className="-mr-0.5 translate-y-px opacity-80 transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)] group-hover/resume:translate-y-[3px]"
              >
                <path d="M12 4v13M6 12l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <Tooltip label="Download resume" />
          </span>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <span className={`h-[2px] w-6 bg-[#4f4f5d] transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-[2px] w-6 bg-[#4f4f5d] transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-[2px] w-6 bg-[#4f4f5d] transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-[#ececec] transition-[max-height] duration-300 ease-[cubic-bezier(.22,1,.36,1)] md:hidden ${
          open ? "max-h-[360px]" : "max-h-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col px-5 pb-4 pt-1" style={{ fontFamily: '"Sora", "Helvetica Neue", Arial, sans-serif' }}>
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={onLink(l.href)}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={`border-b border-[#f0eeeb] py-3.5 text-[15px] font-semibold ${
                isActive(l.href) ? "text-accent" : "text-[#4f4f5d]"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href={RESUME}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-[2px] bg-accent px-5 py-3 text-[14px] font-semibold uppercase tracking-[0.04em] text-white"
            style={{ fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif' }}
          >
            Resume
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
              <path d="M12 4v13M6 12l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </nav>
      </div>
    </div>
  );
}

/**
 * On-theme hover tooltip — a rounded accent pill with a caret, used across the
 * site so every hover affordance reads the same. Shown via the parent's
 * `group/resume` hover state.
 */
function Tooltip({ label }: { label: string }) {
  return (
    <span className="pointer-events-none absolute left-1/2 top-[calc(100%+14px)] z-10 -translate-x-1/2 whitespace-nowrap">
      <span className="absolute -top-[6px] left-1/2 h-[13px] w-[13px] -translate-x-1/2 rotate-45 rounded-[3px] bg-accent opacity-0 transition-opacity duration-200 group-hover/resume:opacity-100" />
      <span
        className="relative inline-flex translate-y-1 scale-95 items-center rounded-[10px] bg-accent px-4 py-2.5 text-[14px] font-semibold text-white opacity-0 shadow-[0_12px_32px_rgba(122,90,178,0.34)] transition-all duration-200 ease-[cubic-bezier(.22,1,.36,1)] group-hover/resume:translate-y-0 group-hover/resume:scale-100 group-hover/resume:opacity-100"
        style={{ fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif' }}
        role="status"
      >
        {label}
      </span>
    </span>
  );
}
