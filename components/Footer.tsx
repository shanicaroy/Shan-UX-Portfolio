"use client";

import { useState } from "react";
import { siteConfig } from "@/content/config";

const ROBOTO = '"Roboto", "Helvetica Neue", Arial, sans-serif';
const fluid = (px: number, min: number) => `clamp(${min}px, ${((px / 1728) * 100).toFixed(3)}vw, ${px}px)`;

const EMAIL = siteConfig.social.email;
const LINKS = [
  { label: "LinkedIn", href: siteConfig.social.linkedin },
  { label: "Email", email: true as const },
  { label: "X", href: siteConfig.social.x },
  { label: "Medium", href: siteConfig.social.medium },
  { label: "Github", href: siteConfig.social.github },
];

/**
 * Footer, matching the Figma: a full-bleed line, then the copyright on the left
 * and the social links on the right (small edge padding, not the content
 * gutter). The Email item copies the address instead of opening a mail client,
 * and shows a "copy"/"copied" tooltip on hover.
 */
export default function Footer() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard blocked — select nothing; the address is visible on hover.
    }
  }

  return (
    <footer className="border-t border-[#e2e2e2]" style={{ color: "#6d707c" }}>
      <div
        className="flex flex-col items-start gap-5 py-9 sm:flex-row sm:items-center sm:justify-between"
        style={{ paddingInline: "min(2.3vw, 40px)", fontFamily: ROBOTO }}
      >
        <p style={{ fontSize: fluid(24, 15) }}>&copy; Shanica Roy 2026</p>

        <nav aria-label="Social">
          <ul className="flex flex-wrap items-center" style={{ columnGap: "clamp(16px, 1.86vw, 32px)", rowGap: "10px", fontSize: fluid(24, 16) }}>
            {LINKS.map((link) =>
              "email" in link ? (
                <li key="Email" className="relative">
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="group/email inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-accent"
                    aria-label={`Copy email address ${EMAIL}`}
                  >
                    Email
                    <span
                      className="pointer-events-none absolute bottom-[calc(100%+8px)] left-1/2 flex -translate-x-1/2 items-center gap-1 whitespace-nowrap rounded-[4px] bg-[#1a1a1d] px-2.5 py-1.5 text-[12px] font-medium text-white opacity-0 transition-opacity duration-200 group-hover/email:opacity-100"
                      role="status"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                        <rect x="9" y="9" width="11" height="11" rx="2" />
                        <path d="M5 15V5a2 2 0 0 1 2-2h10" />
                      </svg>
                      {copied ? "Copied" : "Copy"}
                    </span>
                  </button>
                </li>
              ) : (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-offset-[6px] transition-colors duration-200 hover:text-accent hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
