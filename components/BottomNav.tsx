"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const RESUME = "https://drive.google.com/file/d/1zGPlamzV_6P_B7D8OPNq-CXjuq-McGtJ/view";

type Item = { label: string; href: string; external?: boolean; icon: React.ReactNode };

const sw = 1.7;

const ITEMS: Item[] = [
  {
    label: "Work",
    href: "/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} className="bnav-ico" aria-hidden>
        <rect x="3.5" y="3.5" width="7" height="7" rx="1.6" />
        <rect x="13.5" y="3.5" width="7" height="7" rx="1.6" />
        <rect x="3.5" y="13.5" width="7" height="7" rx="1.6" />
        <rect x="13.5" y="13.5" width="7" height="7" rx="1.6" />
      </svg>
    ),
  },
  {
    label: "About",
    href: "/about",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" className="bnav-ico" aria-hidden>
        <circle cx="12" cy="8" r="3.4" />
        <path d="M5.5 19.5a6.5 6.5 0 0 1 13 0" />
      </svg>
    ),
  },
  // Temporarily hidden for launch; re-enable when ready to publish.
  // {
  //   label: "Applied AI",
  //   href: "/ai-lab",
  //   icon: (
  //     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinejoin="round" className="bnav-ico" aria-hidden>
  //       <path d="M12 3c.4 3.6 1.9 5.1 5.5 5.5C13.9 8.9 12.4 10.4 12 14c-.4-3.6-1.9-5.1-5.5-5.5C10.1 8.1 11.6 6.6 12 3Z" />
  //       <path d="M18 14.5c.2 1.5.8 2.1 2.3 2.3-1.5.2-2.1.8-2.3 2.3-.2-1.5-.8-2.1-2.3-2.3 1.5-.2 2.1-.8 2.3-2.3Z" />
  //     </svg>
  //   ),
  // },
  {
    label: "Resume",
    href: RESUME,
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" className="bnav-ico" aria-hidden>
        <path d="M12 4v11" />
        <path d="M7.5 10.5 12 15l4.5-4.5" />
        <path d="M5 19.5h14" />
      </svg>
    ),
  },
];

/**
 * Mobile bottom navigation (hidden at md+, where the top nav takes over).
 *
 * A floating, glassy bar that sits above the bottom edge instead of spanning
 * it: squared 2px corners to match the desktop Resume button, blur + soft
 * shadow, four line-icon tabs. The current section shows as a filled accent
 * pill that opens to reveal its label; the rest stay icon-only. The bar slides
 * away on scroll-down and returns on scroll-up (and always shows near the top).
 */
const bnavCss = `
.bnav-dock{
  position: fixed; left: 0; right: 0; bottom: 0; z-index: 50;
  display: flex; justify-content: center;
  padding-left: max(16px, env(safe-area-inset-left, 0px));
  padding-right: max(16px, env(safe-area-inset-right, 0px));
  padding-bottom: calc(14px + env(safe-area-inset-bottom, 0px));
  pointer-events: none;
  transition: transform .42s cubic-bezier(.22,1,.36,1), opacity .3s ease;
}
.bnav-dock[data-hidden="true"]{ transform: translateY(180%); opacity: 0; }
.bnav-bar{
  pointer-events: auto;
  display: flex; align-items: center; gap: 4px; padding: 6px;
  border-radius: 2px;
  background: rgba(255,255,255,0.72);
  -webkit-backdrop-filter: blur(18px) saturate(1.5);
  backdrop-filter: blur(18px) saturate(1.5);
  border: 1px solid rgba(26,26,29,0.07);
  box-shadow:
    0 1px 0 rgba(255,255,255,.6) inset,
    0 10px 28px -8px rgba(26,26,29,.26),
    0 3px 10px -4px rgba(26,26,29,.18);
}
.bnav-tab{
  position: relative; display: flex; align-items: center;
  height: 44px; min-width: 44px; padding: 0;
  border-radius: 2px;
  color: #6b6b73; text-decoration: none;
  white-space: nowrap; overflow: hidden;
  transition: background .32s cubic-bezier(.22,1,.36,1), color .22s ease, padding .32s cubic-bezier(.22,1,.36,1);
}
.bnav-ico{ width: 21px; height: 21px; flex: none; margin: 0 auto; }
.bnav-lbl{
  max-width: 0; opacity: 0;
  font-size: 13px; font-weight: 600; letter-spacing: .005em; line-height: 1;
  font-family: "Inter", "Helvetica Neue", Arial, sans-serif;
  transition: max-width .32s cubic-bezier(.22,1,.36,1), opacity .22s ease, margin .32s ease;
}
.bnav-tab[aria-current="page"]{ background: var(--c-blue, #7a5ab2); color: #fff; padding: 0 16px; }
.bnav-tab[aria-current="page"] .bnav-ico{ margin: 0; }
.bnav-tab[aria-current="page"] .bnav-lbl{ max-width: 120px; opacity: 1; margin-left: 8px; }
.bnav-tab:focus-visible{ outline: 2px solid var(--c-blue, #7a5ab2); outline-offset: 2px; }
@media (min-width: 768px){ .bnav-dock{ display: none; } }
@media (prefers-reduced-motion: reduce){
  .bnav-dock, .bnav-tab, .bnav-lbl{ transition: none !important; }
}
`;

export default function BottomNav() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);

  const isActive = (href: string, external?: boolean) => {
    if (external) return false;
    return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
  };

  // Slide away on scroll-down, return on scroll-up; always visible near the top.
  useEffect(() => {
    let last = window.scrollY;
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      if (y < 24) setHidden(false);
      else if (y > last + 6) setHidden(true);
      else if (y < last - 6) setHidden(false);
      last = y;
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: bnavCss }} />
      <div className="bnav-dock" data-hidden={hidden ? "true" : "false"}>
        <nav className="bnav-bar" aria-label="Primary">
          {ITEMS.map((it) => {
            const active = isActive(it.href, it.external);
            return (
              <a
                key={it.label}
                href={it.href}
                {...(it.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                aria-current={active ? "page" : undefined}
                aria-label={it.label}
                className="bnav-tab"
              >
                {it.icon}
                <span className="bnav-lbl">{it.label}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </>
  );
}
