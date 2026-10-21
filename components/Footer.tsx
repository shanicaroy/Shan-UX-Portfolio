"use client";

import { useState } from "react";
import { siteConfig } from "@/content/config";

const ROBOTO = '"Roboto", "Helvetica Neue", Arial, sans-serif';
const INTER = '"Inter", "Helvetica Neue", Arial, sans-serif';
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
 * gutter). Links turn bold and accent-purple on hover — no underline — with a
 * reserved-width trick so the bold weight never shifts the row. The Email item
 * copies the address instead of opening a mail client and shows an on-theme
 * "Copy"/"Copied" tooltip.
 */
export default function Footer() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard blocked — nothing to do; the label stays "Copy".
    }
  }

  return (
    <footer className="border-t border-[#e2e2e2]" style={{ color: "#6d707c" }}>
      <div
        className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between"
        style={{
          paddingInline: "clamp(20px, 2.95vw, 51px)",
          paddingTop: "clamp(18px, 1.3vw, 22px)",
          paddingBottom: "clamp(22px, 1.6vw, 28px)",
          fontFamily: ROBOTO,
        }}
      >
        <p style={{ fontSize: fluid(24, 15) }}>&copy; Shanica Roy 2026</p>

        <nav aria-label="Social">
          <ul className="flex flex-wrap items-center" style={{ columnGap: "clamp(18px, 1.86vw, 32px)", rowGap: "10px", fontSize: fluid(24, 16) }}>
            {LINKS.map((link) =>
              "email" in link ? (
                <li key="Email" className="relative">
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="group/email relative inline-grid text-left transition-colors duration-200"
                    aria-label={`Copy email address ${EMAIL}`}
                  >
                    {/* reserved-width bold copy keeps the row from shifting on hover */}
                    <span aria-hidden className="invisible col-start-1 row-start-1 font-bold">Email</span>
                    <span className="col-start-1 row-start-1 transition-[font-weight,color] duration-200 group-hover/email:font-bold group-hover/email:text-accent">
                      Email
                    </span>
                    <EmailTooltip copied={copied} />
                  </button>
                </li>
              ) : (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link relative inline-grid transition-colors duration-200"
                  >
                    <span aria-hidden className="invisible col-start-1 row-start-1 font-bold">{link.label}</span>
                    <span className="col-start-1 row-start-1 transition-[font-weight,color] duration-200 group-hover/link:font-bold group-hover/link:text-accent">
                      {link.label}
                    </span>
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

/** On-theme accent tooltip above the Email button, with a caret and a copy icon. */
function EmailTooltip({ copied }: { copied: boolean }) {
  return (
    <span className="pointer-events-none absolute bottom-[calc(100%+14px)] left-1/2 z-10 -translate-x-1/2 whitespace-nowrap">
      <span
        className="relative inline-flex translate-y-1 scale-95 items-center gap-1.5 rounded-[10px] bg-accent px-4 py-2.5 text-[14px] font-semibold text-white opacity-0 shadow-[0_12px_32px_rgba(122,90,178,0.34)] transition-all duration-200 ease-[cubic-bezier(.22,1,.36,1)] group-hover/email:translate-y-0 group-hover/email:scale-100 group-hover/email:opacity-100"
        style={{ fontFamily: INTER }}
        role="status"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          {copied ? (
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          ) : (
            <>
              <rect x="9" y="9" width="11" height="11" rx="2" />
              <path d="M5 15V5a2 2 0 0 1 2-2h10" />
            </>
          )}
        </svg>
        {copied ? "Copied" : "Copy"}
      </span>
      <span className="absolute -bottom-[6px] left-1/2 h-[13px] w-[13px] -translate-x-1/2 rotate-45 rounded-[3px] bg-accent opacity-0 transition-opacity duration-200 group-hover/email:opacity-100" />
    </span>
  );
}
