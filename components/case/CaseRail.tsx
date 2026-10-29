"use client";

import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/gelasio/400.css";
import "@fontsource/gelasio/500.css";
import "@fontsource/tinos/400.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import { useCallback, useEffect, useRef, useState } from "react";

export type RailSection = { id: string; label: string };

/**
 * Sticky section nav with scroll-spy. The active section is the one whose
 * heading most recently crossed the line just below the sticky bars; the last
 * section wins at the bottom of the page; a click sets the active item
 * immediately and locks the spy so it never flickers through the sections
 * scrolled past; focus lands on the heading. Breadcrumb lives in CaseStudy now.
 */
export default function CaseRail({ sections }: { sections: readonly RailSection[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? "");
  const navRef = useRef<HTMLElement>(null);
  const lock = useRef(false);
  const didInit = useRef(false);

  // The line just below the sticky breadcrumb bar (web) or below the stacked
  // breadcrumb + section bars (phones). No viewport scaling — fixed px.
  const anchorLine = useCallback(() => {
    if (typeof window === "undefined") return 88;
    const bc = document.querySelector<HTMLElement>(".cs-breadcrumb");
    const bcH = bc ? bc.getBoundingClientRect().height : 56;
    if (window.innerWidth < 768) {
      const bar = document.querySelector<HTMLElement>(".cs-rail");
      const barH = bar ? bar.getBoundingClientRect().height : 44;
      return bcH + barH + 8;
    }
    return bcH + 24;
  }, []);

  const computeActive = useCallback(() => {
    const L = anchorLine();
    let cur = sections[0]?.id ?? "";
    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (!el) continue;
      if (el.getBoundingClientRect().top - L <= 1) cur = s.id;
    }
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
      cur = sections[sections.length - 1]?.id ?? cur;
    }
    setActive(cur);
  }, [sections, anchorLine]);

  // Scroll-spy
  useEffect(() => {
    const onScroll = () => {
      if (lock.current) return;
      computeActive();
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [computeActive]);

  // Open at the hash on load — runs before the mirror effect sets it, so it
  // only reacts to a hash the visitor actually arrived with.
  useEffect(() => {
    const h = decodeURIComponent(location.hash.slice(1));
    if (h && sections.some((s) => s.id === h)) {
      const el = document.getElementById(h);
      if (el) {
        setActive(h);
        window.scrollTo({ top: window.scrollY + el.getBoundingClientRect().top - anchorLine(), behavior: "auto" });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep the active link in view (vertical nav on desktop, horizontal bar on
  // mobile) and mirror it to the hash — but never on the first render, so a
  // fresh load is not scrolled and the URL is not rewritten before the visitor acts.
  useEffect(() => {
    if (!didInit.current) {
      didInit.current = true;
      return;
    }
    if (!active) return;
    const a = navRef.current?.querySelector<HTMLElement>(`a[data-id="${active}"]`);
    a?.scrollIntoView({ block: "nearest", inline: "nearest" });
    try {
      history.replaceState(null, "", `#${active}`);
    } catch {
      /* no-op */
    }
  }, [active]);

  const onClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setActive(id);
    lock.current = true;
    const target = window.scrollY + el.getBoundingClientRect().top - anchorLine();
    window.scrollTo({ top: Math.max(0, target), behavior: reduce ? "auto" : "smooth" });
    try {
      history.replaceState(null, "", `#${id}`);
    } catch {
      /* no-op */
    }
    const heading = el.querySelector<HTMLElement>(".cs-h2") ?? el;
    heading.setAttribute("tabindex", "-1");
    window.setTimeout(() => heading.focus({ preventScroll: true }), reduce ? 0 : 450);

    // Keep the clicked section active until the visitor scrolls again — so the
    // spy never flickers through the sections passed on the way, and a
    // near-bottom section that can't reach the line stays the active one.
    const scrollKeys = new Set(["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " ", "Spacebar"]);
    const release = (ev: Event) => {
      if (ev.type === "keydown" && !scrollKeys.has((ev as KeyboardEvent).key)) return;
      lock.current = false;
      window.removeEventListener("wheel", release);
      window.removeEventListener("touchstart", release);
      window.removeEventListener("keydown", release);
    };
    window.addEventListener("wheel", release, { passive: true });
    window.addEventListener("touchstart", release, { passive: true });
    window.addEventListener("keydown", release);
  };

  const single = sections.length < 2;

  return (
    <nav ref={navRef} className={`cs-rail${single ? " single" : ""}`} aria-label="Case study sections">
      <ul>
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              data-id={s.id}
              aria-current={active === s.id ? "true" : undefined}
              className={active === s.id ? "active" : ""}
              onClick={(e) => onClick(e, s.id)}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
