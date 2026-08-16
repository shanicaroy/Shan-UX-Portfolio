import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/content/projects";
import { site } from "@/content/site";
import SectionLabel from "@/components/SectionLabel";
import GridBackdrop from "@/components/GridBackdrop";
import CaseStudyCover from "@/components/CaseStudyCover";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: `${project.title} — ${site.name}` };
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article>
      <header className="relative overflow-hidden bg-ink text-paper">
        <GridBackdrop variant="ink" />
        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-10 sm:px-10">
          <Link
            href="/work"
            className="font-mono text-xs uppercase tracking-[0.14em] text-paper/60 transition-colors hover:text-signal"
          >
            &larr; Work index
          </Link>

          <div className="mt-10">
            <SectionLabel tone="paper">
              {`Case Study — FIG. 0${index + 2}`}
            </SectionLabel>
            <h1 className="max-w-3xl font-display text-4xl leading-tight sm:text-5xl">
              {project.title}
            </h1>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-paper/15 pt-8 sm:grid-cols-4">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-wide text-paper/50">Role</dt>
              <dd className="mt-1 text-sm">{project.role}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-wide text-paper/50">Duration</dt>
              <dd className="mt-1 text-sm">{project.duration}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-wide text-paper/50">Year</dt>
              <dd className="mt-1 text-sm">{project.year}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-wide text-paper/50">Focus</dt>
              <dd className="mt-1 text-sm">{project.tags.join(", ")}</dd>
            </div>
          </dl>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="-mt-1 aspect-[16/7] w-full">
          <CaseStudyCover variant={project.cover} className="h-full w-full" />
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 py-20 sm:px-10 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="space-y-16">
          {project.sections.map((section, i) => (
            <div key={section.heading}>
              <span className="font-mono text-xs text-signal">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-2 font-display text-2xl text-ink sm:text-3xl">
                {section.heading}
              </h2>
              <div className="mt-4 max-w-2xl space-y-4 text-ink-soft">
                {section.body.map((paragraph, pi) => (
                  <p key={pi}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <aside className="h-fit border border-ink/10 p-6 lg:sticky lg:top-24">
          <span className="font-mono text-xs uppercase tracking-wide text-ink-soft">
            Outcome — measured
          </span>
          <dl className="mt-6 space-y-6">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <dt className="text-xs text-ink-soft">{metric.label}</dt>
                <dd className="font-display text-3xl text-ink">{metric.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>

      <div className="border-t border-ink/10 bg-paper">
        <Link
          href={`/work/${next.slug}`}
          className="group mx-auto flex max-w-6xl items-center justify-between px-6 py-16 sm:px-10"
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-wide text-ink-soft">
              Next case study
            </span>
            <h3 className="mt-2 font-display text-2xl text-ink transition-colors group-hover:text-signal sm:text-3xl">
              {next.title}
            </h3>
          </div>
          <span className="font-display text-3xl text-ink-soft transition-transform group-hover:translate-x-2 group-hover:text-signal">
            &rarr;
          </span>
        </Link>
      </div>
    </article>
  );
}
