import Link from "next/link";
import type { Project } from "@/content/projects";
import ProjectMedia from "./ProjectMedia";

/**
 * Column span and crop for each layout type. Every variant resolves to the same
 * 12-column grid, so the composition varies without anything drifting off-grid.
 */
const LAYOUT: Record<Project["layout"], { span: string; aspect: string }> = {
  featured: { span: "lg:col-span-12", aspect: "aspect-[16/9]" },
  standard: { span: "lg:col-span-8", aspect: "aspect-[4/3]" },
  offset: { span: "lg:col-span-8 lg:col-start-5", aspect: "aspect-[4/3]" },
  wide: { span: "lg:col-span-12", aspect: "aspect-[21/9]" },
};

export default function ProjectCard({ project }: { project: Project }) {
  const { span, aspect } = LAYOUT[project.layout];

  return (
    <article className={`col-span-12 ${span}`}>
      <Link href={`/work/${project.slug}`} className="group block">
        <div className={`w-full overflow-hidden border border-rule ${aspect}`}>
          <ProjectMedia src={project.image} alt={`${project.title} — case study cover`} />
        </div>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-12">
          <div className="max-w-2xl">
            <h3 className="font-serif text-2xl leading-snug text-ink sm:text-3xl">
              {project.title}
              <span
                aria-hidden
                className="ml-3 inline-block text-copper opacity-0 transition-all duration-300 ease-editorial group-hover:translate-x-1 group-hover:opacity-100"
              >
                &rarr;
              </span>
            </h3>
            <p className="mt-3 font-sans text-sm leading-relaxed text-muted sm:text-base">
              {project.description}
            </p>
          </div>

          <div className="shrink-0 sm:text-right">
            <p className="font-sans text-xs uppercase tracking-label text-muted">
              {project.category}
              <span className="mx-2 text-rule" aria-hidden>
                ·
              </span>
              {project.year}
            </p>
            {project.client && (
              <p className="mt-1.5 font-sans text-xs uppercase tracking-label text-muted/55">
                {project.client}
              </p>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}
