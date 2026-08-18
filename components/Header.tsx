"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig, navigation } from "@/content/config";
import Shell from "./Shell";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu on navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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

  const linkClass = (active: boolean) =>
    `text-xs uppercase tracking-label transition-colors duration-200 ${
      active ? "text-copper" : "text-muted hover:text-ink"
    }`;

  return (
    <header className="border-b border-rule">
      <Shell className="flex items-center justify-between gap-8 py-6 sm:py-8">
        <Link href="/" className="group flex flex-col gap-1">
          <span className="font-sans text-sm uppercase tracking-label text-ink">
            {siteConfig.name}
          </span>
          <span className="font-sans text-[11px] uppercase tracking-label text-muted">
            {siteConfig.title}
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden items-center gap-10 sm:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass(isActive(item.href))}>
              {item.label}
            </Link>
          ))}
          <a
            href={siteConfig.resume}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass(false)}
          >
            Resume
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="text-xs uppercase tracking-label text-muted transition-colors hover:text-ink sm:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </Shell>

      {/* Mobile navigation */}
      {open && (
        <nav id="mobile-nav" aria-label="Main" className="border-t border-rule sm:hidden">
          <Shell className="flex flex-col gap-5 py-6">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className={linkClass(isActive(item.href))}>
                {item.label}
              </Link>
            ))}
            <a
              href={siteConfig.resume}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass(false)}
            >
              Resume
            </a>
          </Shell>
        </nav>
      )}
    </header>
  );
}
