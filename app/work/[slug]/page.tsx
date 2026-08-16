import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/content/projects";
import { site } from "@/content/site";
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
  return { title: `${project.title} — ${site.fullName}` };
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article>
      <header className="px-6 pt-16 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <Link href="/work" className="text-sm text-ash transition-colors hover:text-neon">
            &larr; UX in Action
          </Link>

          <h1 className="mt-10 font-display text-3xl font-medium leading-[1.15] tracking-tight text-chalk sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 text-lg text-ash">
            {project.client} ({project.year})
          </p>
          <span className="mt-6 inline-block rounded-lg border border-neon px-4 py-2 text-sm text-chalk shadow-neon-sm">
            {project.discipline}
          </span>
        </div>
      </header>

      <div className="px-6 pt-14 sm:px-8">
        <div className="aspect-[16/8] w-full overflow-hidden rounded-xl border border-white/5">
          <CaseStudyCover variant={project.cover} className="h-full w-full" />
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 py-24 sm:px-10 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="flex flex-col gap-16">
          {project.sections.map((section, i) => (
            <div key={section.heading}>
              <span className="font-mono text-xs text-neon">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-3 font-display text-2xl font-medium tracking-tight text-chalk sm:text-3xl">
                {section.heading}
              </h2>
              <div className="mt-5 flex max-w-2xl flex-col gap-4 text-lg text-ash">
                {section.body.map((paragraph, pi) => (
                  <p key={pi}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <aside className="h-fit rounded-xl bg-surface p-8 lg:sticky lg:top-28">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-neon">At a glance</span>
          <dl className="mt-8 flex flex-col gap-7">
            <div>
              <dt className="text-xs text-ash">Role</dt>
              <dd className="mt-1 text-base text-chalk">{project.role}</dd>
            </div>
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <dt className="text-xs text-ash">{metric.label}</dt>
                <dd className="mt-1 font-display text-2xl font-medium text-chalk">{metric.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>

      {projects.length > 1 && (
        <div className="border-t border-white/10">
          <Link
            href={`/work/${next.slug}`}
            className="group mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 py-20 sm:px-10"
          >
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-ash">
                Next case study
              </span>
              <h2 className="mt-3 max-w-2xl font-display text-2xl font-medium tracking-tight text-chalk transition-colors group-hover:text-neon sm:text-3xl">
                {next.title}
              </h2>
            </div>
            <span
              aria-hidden
              className="shrink-0 text-3xl text-ash transition-transform duration-300 group-hover:translate-x-2 group-hover:text-neon"
            >
              &rarr;
            </span>
          </Link>
        </div>
      )}
    </article>
  );
}
