"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/content/config";

/**
 * Password-entry form for the dedicated unlock PAGE (not a modal). Composition
 * follows the Lara Sanchez reference — a real page with the project title, a
 * short explanation, a labelled password field, and a submit button — rendered
 * in the site's own design language. Keyboard submit, visible focus, and
 * accessible error feedback. The gate is client-side (unchanged from before):
 * on the correct password it routes to the case study.
 */
export default function UnlockForm({ slug, title }: { slug: string; title: string }) {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [reveal, setReveal] = useState(false);
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const href = `/work/${slug}`;
  const requestHref =
    siteConfig.social.email && !siteConfig.social.email.includes("[")
      ? `mailto:${siteConfig.social.email}?subject=${encodeURIComponent(`Access request: ${title}`)}`
      : siteConfig.resume;

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (value === siteConfig.projectPassword) {
      router.push(href);
    } else {
      setError(true);
      inputRef.current?.focus();
    }
  }

  return (
    <section className="mx-auto w-full max-w-[560px] px-6 pb-28 pt-20 md:pt-28">
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="4.5" y="10.5" width="15" height="10" rx="1.6" stroke="#7a5ab2" strokeWidth="1.7" />
        <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" stroke="#7a5ab2" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
      <p className="mt-5 font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-accent">
        Password protected
      </p>
      <h1 className="mt-3 font-serif text-[clamp(2rem,4vw,2.9rem)] font-normal leading-[1.08] tracking-[-0.02em] text-[#42444d]">
        {title}
      </h1>
      <p className="mt-5 max-w-[46ch] font-serif text-[18px] leading-[1.6] text-muted">
        This case study is password protected. Enter the password from my resume or email to view it.
      </p>

      <form onSubmit={submit} className="mt-9">
        <label htmlFor="unlock-password" className="block font-sans text-[14px] font-medium text-[#3a3a3a]">
          Password
        </label>
        <div className="relative mt-3 border-b border-[#9a9a9a] focus-within:border-accent">
          <input
            ref={inputRef}
            id="unlock-password"
            type={reveal ? "text" : "password"}
            value={value}
            autoFocus
            onChange={(e) => {
              setValue(e.target.value);
              setError(false);
            }}
            aria-invalid={error}
            aria-describedby={error ? "unlock-error" : undefined}
            className="w-full border-0 bg-transparent pb-2 pr-10 font-sans text-[17px] text-ink outline-none"
            autoComplete="off"
          />
          <button
            type="button"
            onClick={() => setReveal((r) => !r)}
            aria-label={reveal ? "Hide password" : "Show password"}
            className="absolute right-0 top-1/2 -translate-y-1/2 pb-2 text-[#6b6b6b] transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
          >
            {reveal ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                <path d="M3 3l18 18M10.6 10.6a2 2 0 002.8 2.8" strokeLinecap="round" />
                <path d="M9.9 5.1A9.3 9.3 0 0112 5c5 0 9 4 10 7a15.3 15.3 0 01-3.2 4M6.1 7.1A15.6 15.6 0 002 12c1 3 5 7 10 7a9.6 9.6 0 004.5-1.1" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        </div>
        {error && (
          <p id="unlock-error" role="alert" className="mt-3 font-sans text-[14px] text-[#c0392b]">
            Incorrect password. Try the one from my resume or email.
          </p>
        )}

        <button
          type="submit"
          className="mt-8 w-full rounded-[2px] bg-accent py-3.5 font-sans text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition-opacity duration-200 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          View case study
        </button>
      </form>

      <p className="mt-6 font-sans text-[14px] text-[#6b6b6b]">
        No password?{" "}
        <a href={requestHref} className="font-medium text-accent underline underline-offset-2 hover:opacity-80">
          Request access
        </a>
      </p>
    </section>
  );
}
