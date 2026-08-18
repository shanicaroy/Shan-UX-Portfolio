"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig, navigation } from "@/content/config";
import Shell from "./Shell";

const linkClass =
  "font-mono text-[12px] uppercase tracking-label text-muted transition-colors duration-200 hover:text-ink";

/**
 * Three-zone header matching the reference: identity on the left, section
 * links held at the centre of the page, Resume alone on the right. Below `md`
 * the two nav zones collapse into one toggled list.
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

  const resumeLink = (
    <a
      href={siteConfig.resume}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => setOpen(false)}
      className={linkClass}
    >
      Resume
    </a>
  );

  return (
    <header className="relative z-40">
      <Shell className="grid grid-cols-[1fr_auto] items-start gap-8 pt-8 sm:pt-10 md:grid-cols-[1fr_auto_1fr]">
        {/* Identity — name over designation, top-left */}
        <Link href="/" className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
          <span className="font-mono text-[13px] font-medium uppercase tracking-label text-ink">
            {siteConfig.name}
          </span>
          <span className="hidden font-mono text-[12px] uppercase tracking-label text-muted sm:inline">
            {siteConfig.title}
          </span>
        </Link>

        {/* Centre — section links */}
        <nav aria-label="Main" className="hidden items-center gap-10 pt-0.5 md:flex">
          {sectionLinks}
        </nav>

        {/* Right — resume */}
        <div className="hidden justify-end pt-0.5 md:flex">{resumeLink}</div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className={`${linkClass} justify-self-end pt-0.5 md:hidden`}
        >
          {open ? "Close" : "Menu"}
        </button>
      </Shell>

      {open && (
        <nav id="mobile-nav" aria-label="Main" className="md:hidden">
          <Shell className="flex flex-col gap-5 pb-2 pt-8">
            {sectionLinks}
            {resumeLink}
          </Shell>
        </nav>
      )}
    </header>
  );
}
