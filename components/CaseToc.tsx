"use client";

import { useEffect } from "react";

/**
 * Shared behaviour for the standalone case studies: scroll-spy that lights the
 * active section in the left nav, a thin scroll-progress bar, and the mobile
 * section dropdown (open on desktop, collapsible below 960px, closing after a
 * section is chosen). `scope` is the case study's root class, e.g. ".orbit".
 */
export default function CaseToc({ scope = ".orbit" }: { scope?: string }) {
  useEffect(() => {
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>(`${scope} .toc a`));
    const map = new Map(links.map((a) => [a.getAttribute("href")!.slice(1), a]));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            links.forEach((l) => l.classList.remove("active"));
            const a = map.get(e.target.id);
            if (a) a.classList.add("active");
          }
        });
      },
      { rootMargin: "-18% 0px -72% 0px" }
    );
    // Observe every element the nav points at — some targets are sections,
    // others are sub-section headings (e.g. each foundation).
    links.forEach((a) => {
      const el = document.getElementById(a.getAttribute("href")!.slice(1));
      if (el) obs.observe(el);
    });

    const bar = document.querySelector<HTMLElement>(`${scope} .progress`);
    const onScroll = () => {
      if (!bar) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = max > 0 ? `${(window.scrollY / max) * 100}%` : "0";
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const details = document.querySelector<HTMLDetailsElement>(`${scope} details.secnav`);
    const mq = window.matchMedia("(min-width: 961px)");
    const sync = () => {
      if (details) details.open = mq.matches;
    };
    sync();
    mq.addEventListener("change", sync);
    const closeOnPick = () => {
      if (details && !mq.matches) details.open = false;
    };
    links.forEach((a) => a.addEventListener("click", closeOnPick));

    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", onScroll);
      mq.removeEventListener("change", sync);
      links.forEach((a) => a.removeEventListener("click", closeOnPick));
    };
  }, [scope]);

  return null;
}
