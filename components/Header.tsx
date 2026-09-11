"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig, navigation } from "@/content/config";
import Shell from "./Shell";

const linkClass =
  "font-mono text-[13px] uppercase tracking-label text-muted transition-colors duration-200 hover:text-ink";

/**
 * Fixed full-width bar: solid ground, 1px hairline underneath, no shadow or
 * blur. Identity left, section links centre, Resume right. Height is
 * --nav-height; the site layout pads the page by the same amount so nothing
 * hides behind the bar. Below `md` the two nav zones collapse into one
 * toggled list that drops below the bar.
 */
export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const sectionLinks = navigation.map((item) => (
    <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={linkClass}>
      {item.label}
    </Link>
  ));

  // Resume is a solid button, pinned to the far right of the bar.
  const resumeLink = (
    <a
      href={siteConfig.resume}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => setOpen(false)}
      className="inline-flex items-center bg-accent px-5 py-2 font-mono text-[13px] uppercase tracking-label text-ground transition-opacity duration-200 hover:opacity-85"
    >
      Resume
    </a>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-40 h-[var(--nav-height)] bg-ground">
      <Shell className="grid h-full grid-cols-[1fr_auto] items-center gap-8 md:grid-cols-[1fr_auto_1fr]">
        {/* Identity — name, top-left */}
        <Link href="/" className="flex items-baseline">
          <span className="font-mono text-[15px] font-bold uppercase tracking-label text-ink">
            {siteConfig.name}
          </span>
        </Link>

        {/* Centre — section links */}
        <nav aria-label="Main" className="hidden items-baseline gap-8 md:flex lg:gap-10">
          {sectionLinks}
        </nav>

        {/* Right — resume */}
        <div className="hidden justify-end md:flex">{resumeLink}</div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className={`${linkClass} justify-self-end md:hidden`}
        >
          {open ? "Close" : "Menu"}
        </button>
      </Shell>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="absolute inset-x-0 top-full border-b border-rule bg-ground md:hidden"
        >
          <Shell className="flex flex-col gap-5 pb-6 pt-4">
            {sectionLinks}
            {resumeLink}
          </Shell>
        </nav>
      )}
    </header>
  );
}
