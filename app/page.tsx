import Link from "next/link";
import { site } from "@/content/site";
import { projects } from "@/content/projects";
import ProjectGrid from "@/components/ProjectGrid";

export default function Home() {
  return (
    <>
      {/* Hero — centred, mirroring the Webflow site */}
      <section className="px-6 pb-28 pt-20 text-center sm:px-10 sm:pb-36 sm:pt-28">
        <p className="font-display text-3xl font-medium tracking-tight text-chalk sm:text-5xl">
          {site.hero.greeting}
        </p>
        <h1 className="mx-auto mt-4 max-w-5xl font-display text-3xl font-medium leading-[1.15] tracking-tight text-chalk sm:text-5xl lg:text-6xl">
          {site.hero.headlineBefore}
          <span className="neon-glow">{site.hero.headlineAccent}</span>
          {site.hero.headlineAfter}
        </h1>

        <p className="mx-auto mt-10 max-w-2xl text-base text-ash sm:text-lg">
          {site.hero.subhead}
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#contact"
            className="rounded-lg bg-surface px-8 py-4 text-base text-chalk transition-colors hover:bg-surface-hi"
          >
            {site.hero.ctaPrimary}
          </Link>
          <Link
            href="/work"
            className="rounded-lg border border-neon px-8 py-4 text-base text-chalk shadow-neon-sm transition-shadow hover:shadow-neon"
          >
            See the work
          </Link>
        </div>
      </section>

      {/* Selected work — full-bleed staggered grid */}
      <section id="work" className="px-6 pb-32 sm:px-8">
        <p className="mb-16 text-center font-mono text-xs uppercase tracking-[0.35em] text-chalk">
          <span aria-hidden className="mr-4 text-neon">
            ✦
          </span>
          {site.workLabel}
          <span aria-hidden className="ml-4 text-neon">
            ✦
          </span>
        </p>

        <ProjectGrid projects={projects} />
      </section>

      {/* About teaser */}
      <section className="border-t border-white/10 px-6 py-24 sm:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-2xl font-display text-2xl font-medium leading-snug tracking-tight text-chalk sm:text-3xl">
            {site.about.body[1]}
          </h2>
          <Link
            href="/about"
            className="shrink-0 text-base text-ash transition-colors hover:text-neon"
          >
            {site.about.heading} &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
