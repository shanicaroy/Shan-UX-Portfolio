import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/content/projects";
import Shell from "@/components/Shell";
import ProjectMedia from "@/components/ProjectMedia";

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

/**
 * Reusable case-study shell. The section headings below are the structure real
 * write-ups will slot into — no case-study claims are invented here.
 */
const CASE_STUDY_SECTIONS = ["Context", "Problem", "Approach", "Outcome"] as const;

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article>
      <Shell className="py-16 sm:py-24">
        <Link
          href="/#work"
          className="font-sans text-xs uppercase tracking-label text-muted transition-colors duration-200 hover:text-ink"
        >
          &larr; Selected Work
        </Link>

        <h1 className="mt-12 max-w-[20ch] font-serif text-[2.25rem] leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
          {project.title}
        </h1>
        <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-muted sm:text-lg">
          {project.description}
        </p>

        <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-rule pt-8 sm:grid-cols-3">
          <div>
            <dt className="font-sans text-[11px] uppercase tracking-label text-muted">Category</dt>
            <dd className="mt-2 font-sans text-sm text-ink">{project.category}</dd>
          </div>
          <div>
            <dt className="font-sans text-[11px] uppercase tracking-label text-muted">Year</dt>
            <dd className="mt-2 font-sans text-sm text-ink">{project.year}</dd>
          </div>
          {project.client && (
            <div>
              <dt className="font-sans text-[11px] uppercase tracking-label text-muted">Client</dt>
              <dd className="mt-2 font-sans text-sm text-ink">{project.client}</dd>
            </div>
          )}
        </dl>
      </Shell>

      <Shell>
        <div className="aspect-[16/9] w-full overflow-hidden border border-rule">
          <ProjectMedia src={project.image} alt={`${project.title} — case study cover`} />
        </div>
      </Shell>

      <Shell className="py-24 sm:py-32">
        <div className="grid grid-cols-1 gap-x-16 gap-y-14 lg:grid-cols-2">
          {CASE_STUDY_SECTIONS.map((heading) => (
            <section key={heading}>
              <h2 className="border-t border-rule pt-5 font-sans text-xs uppercase tracking-label text-muted">
                {heading}
              </h2>
              <p className="mt-5 max-w-prose font-sans text-base leading-relaxed text-ink/85">
                Placeholder — the {heading.toLowerCase()} section of this case study.
              </p>
            </section>
          ))}
        </div>

        <p className="mt-16 font-sans text-xs text-muted/60">
          Placeholder copy — replace it in <code>app/work/[slug]/page.tsx</code>.
        </p>
      </Shell>

      {projects.length > 1 && (
        <div className="border-t border-rule">
          <Shell>
            <Link href={`/work/${next.slug}`} className="group flex items-baseline justify-between gap-8 py-14">
              <div>
                <span className="font-sans text-xs uppercase tracking-label text-muted">
                  Next project
                </span>
                <h2 className="mt-3 max-w-2xl font-serif text-2xl leading-snug text-ink transition-colors duration-200 group-hover:text-copper sm:text-3xl">
                  {next.title}
                </h2>
              </div>
              <span
                aria-hidden
                className="shrink-0 font-serif text-2xl text-muted transition-all duration-300 ease-editorial group-hover:translate-x-1 group-hover:text-copper"
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
