import { site } from "@/content/site";
import GridBackdrop from "./GridBackdrop";
import SectionLabel from "./SectionLabel";
import CoordinateReadout from "./CoordinateReadout";

const socialLinks = [
  { label: "LinkedIn", href: site.social.linkedin },
  { label: "Dribbble", href: site.social.dribbble },
  { label: "GitHub", href: site.social.github },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-ink text-paper">
      <GridBackdrop variant="ink" />
      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:px-10">
        <SectionLabel tone="paper">{site.contact.eyebrow}</SectionLabel>

        <h2 className="max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
          {site.contact.heading}
        </h2>
        <p className="mt-6 max-w-md text-paper/70">{site.contact.body}</p>

        <a
          href={`mailto:${site.email}`}
          className="mt-10 inline-flex items-center gap-3 border border-paper/25 px-6 py-4 font-mono text-sm uppercase tracking-[0.12em] transition-colors hover:border-signal hover:text-signal"
        >
          {site.email}
          <span aria-hidden>&rarr;</span>
        </a>

        <div className="mt-20 flex flex-col gap-6 border-t border-paper/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-wide text-paper/60">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition-colors hover:text-signal">
                {link.label}
              </a>
            ))}
          </div>
          <CoordinateReadout />
          <span className="font-mono text-xs text-paper/40">
            &copy; {new Date().getFullYear()} {site.name} — Built with Next.js
          </span>
        </div>
      </div>
    </footer>
  );
}
