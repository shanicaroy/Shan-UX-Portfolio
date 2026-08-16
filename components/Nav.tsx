import Link from "next/link";
import { site } from "@/content/site";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-void/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-6 sm:justify-between sm:px-10">
        {site.nav.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-base text-chalk transition-colors hover:text-neon"
          >
            {link.label}
            {link.glyph && (
              <span aria-hidden className="ml-1.5 text-sm text-ash">
                {link.glyph}
              </span>
            )}
          </Link>
        ))}
      </nav>
    </header>
  );
}
