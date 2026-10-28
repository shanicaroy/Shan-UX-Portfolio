"use client";

import { useEffect, useState } from "react";

/**
 * Left-hand case-study section navigation. An intentional, persistent part of
 * the portfolio experience (kept even though the external references don't use
 * it). Legible Inter at a readable size (not the old tiny treatment), with a
 * subtle active-section indicator driven by scroll position. Sticky on desktop;
 * on smaller screens it renders as a quiet inline list above the content so it
 * never overlaps or causes horizontal overflow.
 */
export type CaseSection = { id: string; label: string };

export default function CaseSideNav({ sections }: { sections: readonly CaseSection[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    if (sections.length < 2) return; // single-section (NDA overview) needs no spy
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [sections]);

  return (
    <nav aria-label="Case study sections" className="lg:sticky lg:top-12">
      <p className="mb-4 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-[#b0b0b0]">
        Contents
      </p>
      <ul className="flex flex-wrap gap-x-5 gap-y-2 lg:flex-col lg:gap-0">
        {sections.map((s) => {
          const isActive = s.id === active;
          return (
            <li key={s.id} className="lg:border-l-2 lg:border-transparent lg:pl-4 lg:-ml-[2px]" style={isActive ? { borderColor: "#7a5ab2" } : undefined}>
              <a
                href={`#${s.id}`}
                aria-current={isActive ? "true" : undefined}
                className="inline-block py-1 font-sans text-[14px] leading-[1.5] transition-colors lg:py-2"
                style={{ color: isActive ? "#1a1a1d" : "#8a8a8a", fontWeight: isActive ? 500 : 400 }}
              >
                {s.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
