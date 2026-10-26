"use client";

import { usePathname } from "next/navigation";

const RESUME = "https://drive.google.com/file/d/1zGPlamzV_6P_B7D8OPNq-CXjuq-McGtJ/view";

type Item = { label: string; href: string; external?: boolean; icon: React.ReactNode };

const ICON = "h-[22px] w-[22px]";
const sw = 1.7;

const ITEMS: Item[] = [
  {
    label: "Work",
    href: "/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} className={ICON} aria-hidden>
        <rect x="3.5" y="3.5" width="7" height="7" rx="1.6" />
        <rect x="13.5" y="3.5" width="7" height="7" rx="1.6" />
        <rect x="3.5" y="13.5" width="7" height="7" rx="1.6" />
        <rect x="13.5" y="13.5" width="7" height="7" rx="1.6" />
      </svg>
    ),
  },
  {
    label: "Applied AI",
    href: "/ai-lab",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinejoin="round" className={ICON} aria-hidden>
        <path d="M12 3c.4 3.6 1.9 5.1 5.5 5.5C13.9 8.9 12.4 10.4 12 14c-.4-3.6-1.9-5.1-5.5-5.5C10.1 8.1 11.6 6.6 12 3Z" />
        <path d="M18 14.5c.2 1.5.8 2.1 2.3 2.3-1.5.2-2.1.8-2.3 2.3-.2-1.5-.8-2.1-2.3-2.3 1.5-.2 2.1-.8 2.3-2.3Z" />
      </svg>
    ),
  },
  {
    label: "About",
    href: "/about",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" className={ICON} aria-hidden>
        <circle cx="12" cy="8" r="3.4" />
        <path d="M5.5 19.5a6.5 6.5 0 0 1 13 0" />
      </svg>
    ),
  },
  {
    label: "Writing",
    href: "/writing",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" className={ICON} aria-hidden>
        <path d="M15.5 5.5l3 3L9 18l-3.8.8L6 15 15.5 5.5Z" />
        <path d="M14 7l3 3" />
      </svg>
    ),
  },
  {
    label: "Resume",
    href: RESUME,
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" className={ICON} aria-hidden>
        <path d="M12 4v11" />
        <path d="M7.5 10.5 12 15l4.5-4.5" />
        <path d="M5 19.5h14" />
      </svg>
    ),
  },
];

/**
 * Mobile bottom navigation. Replaces the hamburger below md: a fixed bar with
 * five minimal line-icon tabs. The current section is accent-purple. Desktop
 * uses the top nav instead, so this is hidden there.
 */
export default function BottomNav() {
  const pathname = usePathname();
  const isActive = (href: string, external?: boolean) => {
    if (external) return false;
    return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-[#ececec] bg-white/95 backdrop-blur md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <ul className="mx-auto flex h-[62px] max-w-[520px] items-stretch">
        {ITEMS.map((it) => {
          const active = isActive(it.href, it.external);
          return (
            <li key={it.label} className="flex-1">
              <a
                href={it.href}
                {...(it.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                aria-current={active ? "page" : undefined}
                className={`flex h-full flex-col items-center justify-center gap-[3px] transition-colors ${
                  active ? "text-accent" : "text-[#6b6b73]"
                }`}
              >
                {it.icon}
                <span
                  className={`text-[10.5px] leading-none tracking-[0.01em] ${active ? "font-semibold" : "font-medium"}`}
                  style={{ fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif' }}
                >
                  {it.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
