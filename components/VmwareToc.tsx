"use client";

import { useEffect } from "react";

/** Scroll-spy for the VMware case study's section nav. */
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
    return () => obs.disconnect();
  }, []);

  return null;
}
