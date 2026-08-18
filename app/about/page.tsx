import type { Metadata } from "next";
import { siteConfig } from "@/content/config";
import Shell from "@/components/Shell";

export const metadata: Metadata = {
  title: "About",
  description: siteConfig.metaDescription,
};

/**
 * PLACEHOLDER COPY. Each block below is a prompt for real content — replace the
 * body text, keep the structure. Nothing here should be published as-is.
 */
const sections = [
  {
    heading: "Introduction",
    body: "Placeholder — a short introduction in Shanica's own voice. Who she is, and how she thinks about the work.",
  },
  {
    heading: "Background",
    body: "Placeholder — professional background: the arc of the career so far, the kinds of teams and products worked on.",
  },
  {
    heading: "Design philosophy",
    body: "Placeholder — how design decisions get made. What she optimises for, and what she is willing to trade away.",
  },
  {
    heading: "Areas of expertise",
    body: "Placeholder — the disciplines she works across, e.g. product design, UX research, design systems, design leadership.",
  },
  {
    heading: "Current work",
    body: "Placeholder — what she is working on now, and what kind of problems she is drawn to.",
  },
  {
    heading: "Speaking",
    body: "Placeholder — talks, panels or workshops. Remove this section if not applicable.",
  },
  {
    heading: "Mentoring",
    body: "Placeholder — mentoring and community work. Remove this section if not applicable.",
  },
  {
    heading: "Writing",
    body: "Placeholder — what she writes about and where it is published.",
  },
];

export default function AboutPage() {
  return (
    <Shell as="section" className="py-24 sm:py-32">
      <h1 className="max-w-[18ch] font-serif text-[2.5rem] leading-[1.05] text-ink sm:text-6xl">
        {siteConfig.hero.headline}
      </h1>
      <p className="mt-8 max-w-xl font-sans text-base leading-relaxed text-muted sm:text-lg">
        {siteConfig.hero.statement}
      </p>

      <div className="mt-24 grid grid-cols-1 gap-x-16 gap-y-14 lg:grid-cols-2">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="border-t border-rule pt-5 font-sans text-xs uppercase tracking-label text-muted">
              {section.heading}
            </h2>
            <p className="mt-5 max-w-prose font-sans text-base leading-relaxed text-ink/85">
              {section.body}
            </p>
          </section>
        ))}
      </div>

      <p className="mt-20 font-sans text-xs text-muted/60">
        Placeholder copy — replace it in <code>app/about/page.tsx</code>.
      </p>
    </Shell>
  );
}
