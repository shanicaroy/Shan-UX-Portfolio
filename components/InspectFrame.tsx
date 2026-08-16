"use client";

import { ReactNode } from "react";

type InspectFrameProps = {
  children: ReactNode;
  label: string;
  tone?: "ink" | "paper";
  className?: string;
};

/**
 * Wraps content in a Figma-inspect-style bounding box: faint corner ticks
 * that brighten on hover/focus and reveal a mono metadata label. This is
 * the site's recurring signature motif — used on the hero headline and on
 * every project card.
 */
export default function InspectFrame({ children, label, tone = "ink", className = "" }: InspectFrameProps) {
  const tickColor = tone === "paper" ? "border-paper/25 group-hover:border-paper/70" : "border-ink/20 group-hover:border-signal";
  const labelColor = tone === "paper" ? "text-paper/80" : "text-signal";
  const labelBg = tone === "paper" ? "bg-ink" : "bg-paper";

  return (
    <div className={`group relative ${className}`}>
      <span
        aria-hidden
        className={`absolute -top-2 -left-2 h-4 w-4 border-l border-t transition-colors duration-300 ${tickColor}`}
      />
      <span
        aria-hidden
        className={`absolute -top-2 -right-2 h-4 w-4 border-r border-t transition-colors duration-300 ${tickColor}`}
      />
      <span
        aria-hidden
        className={`absolute -bottom-2 -left-2 h-4 w-4 border-l border-b transition-colors duration-300 ${tickColor}`}
      />
      <span
        aria-hidden
        className={`absolute -bottom-2 -right-2 h-4 w-4 border-r border-b transition-colors duration-300 ${tickColor}`}
      />
      <span
        aria-hidden
        className={`pointer-events-none absolute -bottom-2 right-2 translate-y-full whitespace-nowrap px-2 py-1 font-mono text-[10px] tracking-wide opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100 ${labelColor} ${labelBg}`}
      >
        {label}
      </span>
      {children}
    </div>
  );
}
