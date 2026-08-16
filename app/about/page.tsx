import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `${site.about.heading} — ${site.fullName}`,
};

export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-32 pt-20 sm:px-10 sm:pt-28">
      <h1 className="font-display text-4xl font-medium leading-[1.15] tracking-tight text-chalk sm:text-6xl">
        Who&rsquo;s <span className="neon-glow">She</span> ?
      </h1>

      <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div>
          <div className="flex max-w-2xl flex-col gap-6 text-lg text-ash">
            {site.about.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <a
            href={site.resumeHref}
            className="mt-12 inline-flex items-center gap-3 rounded-lg border border-neon px-6 py-4 text-base text-chalk shadow-neon-sm transition-shadow hover:shadow-neon"
          >
            Download resume
            <span aria-hidden>&darr;</span>
          </a>

          <div className="mt-24">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-neon">Toolkit</span>
            <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2">
              {site.about.skills.map((group) => (
                <div key={group.label}>
                  <h2 className="font-display text-xl font-medium text-chalk">{group.label}</h2>
                  <ul className="mt-4 flex flex-col gap-2">
                    {group.items.map((item) => (
                      <li key={item} className="text-base text-ash">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="h-fit rounded-xl bg-surface p-8">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-neon">Experience</span>
          <ol className="mt-8 flex flex-col gap-8">
            {site.about.experience.map((entry) => (
              <li key={`${entry.period}-${entry.role}`}>
                <span className="block font-mono text-xs text-ash">{entry.period}</span>
                <span className="mt-2 block font-display text-lg font-medium text-chalk">
                  {entry.role}
                </span>
                <span className="block text-sm text-ash">{entry.org}</span>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </section>
  );
}
