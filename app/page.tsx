import Link from "next/link";
import { site } from "@/content/site";
import { projects } from "@/content/projects";
import GridBackdrop from "@/components/GridBackdrop";
import SectionLabel from "@/components/SectionLabel";
import CoordinateReadout from "@/components/CoordinateReadout";
import InspectFrame from "@/components/InspectFrame";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <>
      {/* Hero — FIG. 00 */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <GridBackdrop variant="ink" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-between px-6 pb-12 pt-10 sm:px-10">
          <div className="flex items-center justify-between">
            <SectionLabel tone="paper">{site.hero.eyebrow}</SectionLabel>
            <CoordinateReadout />
          </div>

          <div className="max-w-3xl py-16">
            <InspectFrame tone="paper" label={site.role} className="inline-block">
              <h1 className="font-display text-4xl font-medium leading-[1.08] tracking-tight sm:text-6xl">
                {site.hero.headline}
              </h1>
            </InspectFrame>
            <p className="mt-8 max-w-xl text-lg text-paper/70">{site.hero.subhead}</p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="border border-paper px-6 py-3 font-mono text-xs uppercase tracking-[0.14em] transition-colors hover:border-signal hover:text-signal"
              >
                View work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 font-mono text-xs uppercase tracking-[0.14em] text-paper/60 transition-colors hover:text-signal"
              >
                Get in touch &rarr;
              </a>
            </div>
          </div>

          <div className="flex items-center justify-between font-mono text-xs text-paper/40">
            <span>{site.location}</span>
            <span>SCROLL — FIG. 01</span>
          </div>
        </div>
      </section>

      {/* Selected work — FIG. 01 */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
        <SectionLabel>Work — FIG. 01</SectionLabel>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-lg font-display text-3xl leading-tight text-ink sm:text-4xl">
            Selected work
          </h2>
          <Link
            href="/work"
            className="font-mono text-xs uppercase tracking-[0.14em] text-ink-soft transition-colors hover:text-signal"
          >
            Full index &rarr;
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-16 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* About teaser — FIG. 04 */}
      <section className="border-t border-ink/10 bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
          <SectionLabel>{site.about.eyebrow}</SectionLabel>
          <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="max-w-lg font-display text-3xl leading-tight text-ink sm:text-4xl">
              {site.about.body[0]}
            </h2>
            <Link
              href="/about"
              className="shrink-0 font-mono text-xs uppercase tracking-[0.14em] text-ink-soft transition-colors hover:text-signal"
            >
              More about me &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
