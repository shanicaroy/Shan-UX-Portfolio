"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig, navigation } from "@/content/config";
import Shell from "./Shell";

const linkClass =
  "text-[11px] uppercase tracking-label text-muted transition-colors duration-200 hover:text-ink";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const items = (
    <>
      {navigation.map((item) => (
        <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={linkClass}>
          {item.label}
        </Link>
      ))}
      <a
        href={siteConfig.resume}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setOpen(false)}
        className={linkClass}
      >
        Resume
      </a>
    </>
  );

  return (
    <header className="relative z-40">
      <Shell className="flex items-start justify-between gap-8 pt-10 sm:pt-12">
        {/* Identity — name over designation, top-left */}
        <Link href="/" className="flex flex-col gap-1.5">
          <span className="text-[13px] uppercase tracking-label text-ink">{siteConfig.name}</span>
          <span className="text-[11px] uppercase tracking-label text-muted">
            {siteConfig.title}
          </span>
        </Link>

        {/* Desktop navigation — right aligned, no pill, no hamburger */}
        <nav aria-label="Main" className="hidden items-center gap-10 pt-0.5 md:flex">
          {items}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className={`${linkClass} pt-0.5 md:hidden`}
        >
          {open ? "Close" : "Menu"}
        </button>
      </Shell>

      {open && (
        <nav id="mobile-nav" aria-label="Main" className="md:hidden">
          <Shell className="flex flex-col gap-5 pb-2 pt-8">{items}</Shell>
        </nav>
      )}
    </header>
  );
}
