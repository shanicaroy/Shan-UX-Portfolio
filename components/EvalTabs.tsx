"use client";

import { useRef, useState } from "react";
import { appliedAI } from "@/content/applied-ai";

const tabs = appliedAI.evaluation.tabs;

/**
 * Interaction study 02's tabbed block: tab column on the left (active tab
 * lime with a dark left border), content panel on the right, stacked on
 * mobile. Same tablist keyboard contract as the six-step flow.
 */
export default function EvalTabs() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(e: React.KeyboardEvent, i: number) {
    let next: number | null = null;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = (i + 1) % tabs.length;
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = (i - 1 + tabs.length) % tabs.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = tabs.length - 1;
    if (next !== null) {
      e.preventDefault();
      setActive(next);
      tabRefs.current[next]?.focus();
    }
  }

  const tab = tabs[active];

  return (
    <div className="grid grid-cols-1 border-x border-b border-rule bg-ground lg:grid-cols-[1fr_2fr]">
      <div
        role="tablist"
        aria-label="Evaluation protocol"
        aria-orientation="vertical"
        className="flex flex-col"
      >
        {tabs.map((t, i) => (
          <button
            key={t.name}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            role="tab"
            id={`eval-tab-${i}`}
            aria-selected={i === active}
            aria-controls="eval-panel"
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKeyDown(e, i)}
            className={`border-b border-rule px-5 py-5 text-left text-[15px] font-medium transition-colors duration-200 lg:px-6 ${
              i === active
                ? "border-l-4 border-l-ink bg-lime text-ink"
                : "border-l-4 border-l-transparent text-muted hover:text-ink"
            }`}
          >
            {t.name}
          </button>
        ))}
        <div aria-hidden className="hidden flex-1 lg:block" />
      </div>

      <div
        role="tabpanel"
        id="eval-panel"
        aria-labelledby={`eval-tab-${active}`}
        className="border-t border-rule px-6 py-10 lg:border-l lg:border-t-0 lg:px-12 lg:py-12"
      >
        <p className="type-eyebrow text-muted">{tab.eyebrow}</p>
        <h4 className="type-statement mt-6 max-w-xl text-ink">{tab.headline}</h4>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">{tab.paragraph}</p>
        {tab.rows.length > 0 && (
          <dl className="mt-8">
            {tab.rows.map((row) => (
              <div key={row.label} className="border-t border-rule py-4">
                <dt className="type-eyebrow text-muted">{row.label}</dt>
                <dd className="mt-2 max-w-xl text-[15px] font-medium leading-relaxed text-ink">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </div>
  );
}
