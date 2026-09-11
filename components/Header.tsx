"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig, navigation } from "@/content/config";
import Shell from "./Shell";

const linkBase =
  "font-mono text-[13px] uppercase tracking-label transition-colors duration-200";

/**
 * Fixed full-width bar with no hairline: identity left, section links centre,
 * the Resume button pinned right. The item for the page in view is colored
 * with the accent. Below `md` the nav collapses into one toggled list.
 */
export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function isActive(href: string) {
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  const sectionLinks = navigation.map((item) => (
    <Link
      key={item.href}
      href={item.href}
      onClick={() => setOpen(false)}
      aria-current={isActive(item.href) ? "page" : undefined}
      className={`${linkBase} ${
        isActive(item.href) ? "text-accent" : "text-muted hover:text-ink"
      }`}
    >
      {item.label}
    </Link>
  ));

  // Resume stays a button, in ink.
  const resumeLink = (
    <a
      href={siteConfig.resume}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => setOpen(false)}
      className="inline-flex items-center bg-ink px-5 py-2 font-mono text-[13px] uppercase tracking-label text-ground transition-opacity duration-200 hover:opacity-85"
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
          className={`${linkBase} justify-self-end text-muted hover:text-ink md:hidden`}
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
          <Shell className="flex flex-col items-start gap-5 pb-6 pt-4">
            {sectionLinks}
            {resumeLink}
          </Shell>
        </nav>
      )}
    </header>
  );
}
