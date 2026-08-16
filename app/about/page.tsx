import type { Metadata } from "next";
import { site } from "@/content/site";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: `About — ${site.name}`,
};

export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
      <SectionLabel>{site.about.eyebrow}</SectionLabel>
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div>
          <h1 className="max-w-xl font-display text-4xl leading-tight text-ink sm:text-5xl">
            {site.about.heading}
          </h1>
          <div className="mt-8 max-w-2xl space-y-5 text-ink-soft">
            {site.about.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <a
            href={site.resumeHref}
            className="mt-10 inline-flex items-center gap-3 border border-ink px-6 py-3 font-mono text-xs uppercase tracking-[0.14em] text-ink transition-colors hover:border-signal hover:text-signal"
          >
            Download resume
            <span aria-hidden>&darr;</span>
          </a>

          <div className="mt-20">
            <span className="font-mono text-xs uppercase tracking-wide text-ink-soft">
              Toolkit — FIG. 04a
            </span>
            <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {site.about.skills.map((group) => (
                <div key={group.label}>
                  <h3 className="font-display text-lg text-ink">{group.label}</h3>
                  <ul className="mt-3 space-y-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm text-ink-soft">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="h-fit border-l border-ink/10 pl-8">
          <span className="font-mono text-xs uppercase tracking-wide text-ink-soft">
            Timeline — FIG. 04b
          </span>
          <ol className="mt-6 space-y-8">
            {site.about.experience.map((entry) => (
              <li key={`${entry.period}-${entry.role}`} className="relative pl-6">
                <span className="absolute left-0 top-1.5 h-2 w-2 -translate-x-1/2 rounded-full bg-signal" />
                <span className="block font-mono text-xs text-ink-soft">{entry.period}</span>
                <span className="mt-1 block font-display text-lg text-ink">{entry.role}</span>
                <span className="block text-sm text-ink-soft">{entry.org}</span>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </section>
  );
}
