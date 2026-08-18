import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/content/projects";
import Shell from "@/components/Shell";
import ProjectCanvas from "@/components/ProjectCanvas";

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
  return { title: project.title, description: project.description };
}

/** Section scaffold real write-ups slot into — no claims are invented here. */
const SECTIONS = ["Context", "Problem", "Approach", "Outcome"] as const;

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article>
      <Shell className="pb-20 pt-24 lg:pt-28">
        <Link
          href="/#work"
          className="font-mono text-[12px] uppercase tracking-label text-muted transition-colors duration-200 hover:text-ink"
        >
          &larr; Selected Work
        </Link>

        <div className="mt-14 grid grid-cols-12 gap-x-8 gap-y-10">
          <div className="col-span-12 lg:col-span-7">
            <h1 className="display text-[2.25rem] leading-[1.08] text-ink sm:text-5xl lg:text-[3.75rem]">
              {project.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {project.description}
            </p>
          </div>

          <dl className="col-span-12 grid grid-cols-2 gap-8 self-end lg:col-span-4 lg:col-start-9 lg:grid-cols-1 lg:gap-6 lg:text-right">
            <div>
              <dt className="font-mono text-[12px] uppercase tracking-label text-muted">Category</dt>
              <dd className="mt-2 text-base text-ink">{project.category}</dd>
            </div>
            <div>
              <dt className="font-mono text-[12px] uppercase tracking-label text-muted">Year</dt>
              <dd className="mt-2 text-base text-ink">{project.year}</dd>
            </div>
            {project.company && (
              <div>
                <dt className="font-mono text-[12px] uppercase tracking-label text-muted">Company</dt>
                <dd className="mt-2 text-base text-ink">{project.company}</dd>
              </div>
            )}
          </dl>
        </div>
      </Shell>

      <Shell>
        <div className="w-full overflow-hidden border border-rule aspect-[4/3] sm:aspect-[3/2] lg:aspect-[16/10]">
          <ProjectCanvas index={index} alt={`${project.title} — case study cover`} />
        </div>
      </Shell>

      <Shell className="py-28 lg:py-36">
        <div className="grid grid-cols-12 gap-x-8 gap-y-14">
          {SECTIONS.map((heading) => (
            <section key={heading} className="col-span-12 lg:col-span-5 lg:even:col-start-8">
              <h2 className="border-t border-rule pt-5 font-mono text-[13px] uppercase tracking-label text-muted">
                {heading}
              </h2>
              <p className="mt-5 max-w-prose text-lg leading-relaxed text-ink/85">
                This section is awaiting its write-up.
              </p>
            </section>
          ))}
        </div>
      </Shell>

      {projects.length > 1 && (
        <div className="border-t border-rule">
          <Shell>
            <Link
              href={`/work/${next.slug}`}
              className="group flex items-baseline justify-between gap-10 py-20"
            >
              <div>
                <span className="font-mono text-[12px] uppercase tracking-label text-muted">Next project</span>
                <h2 className="mt-4 max-w-3xl text-2xl font-medium leading-[1.15] text-ink transition-opacity duration-200 group-hover:opacity-60 sm:text-3xl">
                  {next.title}
                </h2>
              </div>
              <span
                aria-hidden
                className="shrink-0 text-2xl text-muted transition-transform duration-300 ease-editorial group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </Link>
          </Shell>
        </div>
      )}
    </article>
  );
}
