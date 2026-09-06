"use client";

import { useRef, useState } from "react";
import { appliedAI } from "@/content/applied-ai";

const steps = appliedAI.flow.steps;

/**
 * Interaction study 01: navy step list on the left, cream detail panel on the
 * right, stacked list-above-detail on mobile. A proper tablist: buttons with
 * aria-selected, arrow-key navigation, first step selected by default so the
 * panel is never empty.
 */
export default function SixStepFlow() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(e: React.KeyboardEvent, i: number) {
    let next: number | null = null;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = (i + 1) % steps.length;
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = (i - 1 + steps.length) % steps.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = steps.length - 1;
    if (next !== null) {
      e.preventDefault();
      setActive(next);
      tabRefs.current[next]?.focus();
    }
  }

  const step = steps[active];

  return (
    <div className="grid grid-cols-1 border border-rule-dark lg:grid-cols-[2fr_3fr]">
      <div
        role="tablist"
        aria-label="Review flow steps"
        aria-orientation="vertical"
        className="flex flex-col"
      >
        {steps.map((s, i) => (
          <button
            key={s.name}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            role="tab"
            id={`flow-tab-${i}`}
            aria-selected={i === active}
            aria-controls="flow-panel"
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKeyDown(e, i)}
            className={`grid grid-cols-[3rem_1fr] items-baseline gap-x-4 border-b border-rule-dark px-5 py-5 text-left transition-colors duration-200 last:border-b-0 lg:px-6 lg:py-6 ${
              i === active
                ? "border-l-4 border-l-lime bg-ground/5"
                : "border-l-4 border-l-transparent hover:bg-ground/5"
            }`}
          >
            <span className="type-eyebrow text-muted-dark tabular-nums">
              0{i + 1}
            </span>
            <span>
              <span className="block text-[17px] font-medium text-ground">{s.name}</span>
              <span className="mt-1 block text-sm text-muted-dark">{s.short}</span>
            </span>
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id="flow-panel"
        aria-labelledby={`flow-tab-${active}`}
        className="border-t border-rule-dark bg-ground px-6 py-10 lg:border-l lg:border-t-0 lg:px-12 lg:py-14"
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="type-eyebrow text-muted">{step.label}</p>
          <p className="type-eyebrow border border-rule px-3 py-1.5 text-muted">{step.tag}</p>
        </div>
        <h4 className="type-statement mt-8 max-w-xl text-ink">{step.headline}</h4>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">{step.paragraph}</p>
        <dl className="mt-10">
          <div className="border-t border-rule py-4">
            <dt className="type-eyebrow text-muted">Interface must show</dt>
            <dd className="mt-2 text-[15px] font-medium text-ink">{step.show}</dd>
          </div>
          <div className="border-t border-rule py-4">
            <dt className="type-eyebrow text-muted">Technical primitive</dt>
            <dd className="mt-2 text-[15px] font-medium text-ink">{step.primitive}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
