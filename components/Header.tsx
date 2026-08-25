"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig, navigation } from "@/content/config";
import Shell from "./Shell";

const linkClass =
  "font-mono text-[13px] uppercase tracking-label text-muted transition-colors duration-200 hover:text-ink";

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
    <header className="relative z-40 border-b border-rule">
      <Shell className="grid grid-cols-[1fr_auto] items-baseline gap-8 py-5 md:grid-cols-[1fr_auto_1fr] md:py-6">
        {/* Identity — name over designation, top-left */}
        <Link href="/" className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
          <span className="font-mono text-[15px] font-bold uppercase tracking-label text-ink">
            {siteConfig.name}
          </span>
          <span className="hidden font-mono text-[13px] uppercase tracking-label text-muted sm:inline">
            {siteConfig.title}
          </span>
        </Link>

        {/* Centre — section links */}
        <nav aria-label="Main" className="hidden items-baseline gap-10 md:flex">
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
        <nav id="mobile-nav" aria-label="Main" className="md:hidden">
          <Shell className="flex flex-col gap-5 pb-6 pt-2">
            {sectionLinks}
            {resumeLink}
          </Shell>
        </nav>
      )}
    </header>
  );
}
