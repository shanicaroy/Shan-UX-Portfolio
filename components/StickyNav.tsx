"use client";

import { useEffect, useRef, useState } from "react";

const RESUME = "https://drive.google.com/file/d/1zGPlamzV_6P_B7D8OPNq-CXjuq-McGtJ/view";
const LINKS = [
  { label: "WORK", href: "/", work: true },
  { label: "APPLIED AI", href: "/ai-lab" },
  { label: "ABOUT", href: "/about" },
  { label: "WRITING", href: "/writing" },
];

/**
 * Sticky navigation. The hero carries its own pixel-exact nav; this bar stays
 * pinned to the top and slides in once the hero nav has scrolled away, so the
 * navigation is always reachable. Matches the Figma nav styling (Sora, slate
 * links, squared accent Resume button).
 */
export default function StickyNav() {
  const [shown, setShown] = useState(false);
  const [open, setOpen] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
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
  }, []);

  const noop = (e: React.MouseEvent) => {
    if (window.location.pathname === "/") e.preventDefault();
    setOpen(false);
  };

  return (
    <div
      className={`fixed inset-x-0 top-0 z-50 border-b border-[#ececec] bg-white/95 backdrop-blur transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)] ${
        shown ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex h-[64px] w-full items-center justify-between px-5 sm:px-8 lg:px-[max(24px,min(6.83vw,118px))]">
        <a
          href="/"
          onClick={noop}
          className="font-serif text-[18px] text-[#42444d] sm:text-[20px]"
          style={{ fontFamily: '"Times New Roman", Times, Georgia, serif', letterSpacing: "-0.01em" }}
        >
          Shanica Roy
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-[clamp(20px,2.4vw,40px)] md:flex"
          style={{ fontFamily: '"Sora", "Helvetica Neue", Arial, sans-serif' }}
        >
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={l.work ? noop : () => setOpen(false)}
              className={`font-semibold tracking-[0.01em] ${l.work ? "text-accent" : "text-[#4f4f5d]"} transition-colors hover:text-accent`}
              style={{ fontSize: "clamp(13px,0.98vw,15px)" }}
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
              className="inline-flex items-center justify-center rounded-[2px] bg-accent px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.04em] text-white transition-opacity hover:opacity-90"
              style={{ fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif' }}
            >
              Resume
            </a>
            <span className="pointer-events-none absolute left-1/2 top-[calc(100%+8px)] -translate-x-1/2 whitespace-nowrap rounded-[4px] bg-[#1a1a1d] px-2.5 py-1.5 text-[12px] font-medium text-white opacity-0 transition-opacity duration-200 group-hover/resume:opacity-100">
              Download
            </span>
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
              onClick={l.work ? noop : () => setOpen(false)}
              className={`border-b border-[#f0eeeb] py-3.5 text-[15px] font-semibold ${l.work ? "text-accent" : "text-[#4f4f5d]"}`}
            >
              {l.label}
            </a>
          ))}
          <a
            href={RESUME}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center justify-center rounded-[2px] bg-accent px-5 py-3 text-[14px] font-semibold uppercase tracking-[0.04em] text-white"
            style={{ fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif' }}
          >
            Resume
          </a>
        </nav>
      </div>
    </div>
  );
}
