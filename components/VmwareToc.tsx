"use client";

import { useEffect } from "react";

/**
 * Behaviour for the VMware case study: scroll-spy on the section nav, a thin
 * scroll-progress indicator, and the mobile section dropdown (open on
 * desktop, collapsible below 900px, closing after a section is chosen).
 */
export default function VmwareToc() {
  useEffect(() => {
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>(".vmw .toc a"));
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
      { rootMargin: "-20% 0px -70% 0px" }
    );
    document.querySelectorAll(".vmw section[id]").forEach((s) => obs.observe(s));

    const bar = document.querySelector<HTMLElement>(".vmw .progress");
    const onScroll = () => {
      if (!bar) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = max > 0 ? `${(window.scrollY / max) * 100}%` : "0";
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const details = document.querySelector<HTMLDetailsElement>(".vmw details.secnav");
    const mq = window.matchMedia("(min-width: 901px)");
    const sync = () => {
      if (details && mq.matches) details.open = true;
      else if (details) details.open = false;
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
  }, []);

  return null;
}
