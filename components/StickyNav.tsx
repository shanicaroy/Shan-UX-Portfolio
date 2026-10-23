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

// Exact Figma value at the 1728 design width, scaling down proportionally.
const fluid = (px: number, min: number) => `clamp(${min}px, ${((px / 1728) * 100).toFixed(3)}vw, ${px}px)`;

const SORA = '"Sora", "Helvetica Neue", Arial, sans-serif';
const INTER = '"Inter", "Helvetica Neue", Arial, sans-serif';

/**
 * The site's single navigation, identical on every page so the header never
 * changes shape between routes. It mirrors the locked hero nav exactly —
 * centred Sora links (the current section in accent), a squared purple Resume
 * button at the hero's size, no wordmark, no bottom line — using the same
 * 1728-based fluid scale as the hero so the two always match.
 *
 *  - default (home): fixed overlay, hidden until the hero nav scrolls away.
 *  - solid (every other page): a sticky, always-visible bar in normal flow.
 */
export default function StickyNav({ solid = false }: { solid?: boolean }) {
  const [shown, setShown] = useState(solid);
  const [open, setOpen] = useState(false);
  const ticking = useRef(false);
  const pathname = usePathname();

  useEffect(() => {
    if (solid) return;
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
      <div
        className="relative mx-auto flex w-full items-center justify-end"
        style={{
          height: fluid(94, 64),
          paddingLeft: fluid(118, 20),
          paddingRight: fluid(94, 20),
        }}
      >
        <nav
          aria-label="Primary"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center md:flex"
          style={{ fontFamily: SORA, gap: fluid(47, 22) }}
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
              style={{ fontSize: fluid(17, 13) }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center" style={{ gap: fluid(16, 10) }}>
          <span className="group/resume relative hidden md:inline-flex">
            <a
              href={RESUME}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-[2px] bg-accent font-semibold uppercase tracking-[0.02em] text-white transition-opacity hover:opacity-90"
              style={{
                fontFamily: INTER,
                width: fluid(204, 132),
                height: fluid(64, 44),
                fontSize: fluid(20.4, 14),
              }}
            >
              Resume
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
        className={`overflow-hidden transition-[max-height] duration-300 ease-[cubic-bezier(.22,1,.36,1)] md:hidden ${
          open ? "max-h-[360px]" : "max-h-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col px-5 pb-4 pt-1" style={{ fontFamily: SORA }}>
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
            className="mt-4 inline-flex items-center justify-center rounded-[2px] bg-accent px-5 py-3.5 text-[15px] font-semibold uppercase tracking-[0.02em] text-white"
            style={{ fontFamily: INTER }}
          >
            Resume
          </a>
        </nav>
      </div>
    </div>
  );
}

/** On-theme accent hover tooltip, matching the hero's Resume tooltip. */
function Tooltip({ label }: { label: string }) {
  return (
    <span className="pointer-events-none absolute left-1/2 top-[calc(100%+12px)] z-10 -translate-x-1/2 whitespace-nowrap">
      <span className="absolute -top-[6px] left-1/2 h-[13px] w-[13px] -translate-x-1/2 rotate-45 rounded-[3px] bg-accent opacity-0 transition-opacity duration-200 group-hover/resume:opacity-100" />
      <span
        className="relative inline-flex translate-y-1 scale-95 items-center rounded-[10px] bg-accent px-4 py-2.5 text-[14px] font-semibold text-white opacity-0 shadow-[0_12px_32px_rgba(122,90,178,0.34)] transition-all duration-200 ease-[cubic-bezier(.22,1,.36,1)] group-hover/resume:translate-y-0 group-hover/resume:scale-100 group-hover/resume:opacity-100"
        style={{ fontFamily: INTER }}
        role="status"
      >
        {label}
      </span>
    </span>
  );
}
