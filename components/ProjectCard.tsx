import Link from "next/link";
import type { Project } from "@/content/projects";
import ProjectCanvas from "./ProjectCanvas";

const ASPECT: Record<Project["aspect"], string> = {
  "16/9": "aspect-[16/9]",
  "3/2": "aspect-[3/2]",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
};

/**
 * One project in the two-column grid: a cover filling the column, then a
 * caption whose first line puts the title left and the metadata right — the
 * description sits beneath, where a long title has room to breathe.
 */
export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article>
      <Link href={`/work/${project.slug}`} className="group block">
        <div className={`w-full overflow-hidden border border-rule ${ASPECT[project.aspect]}`}>
          <ProjectCanvas index={index} alt={`${project.title} — case study cover`} />
        </div>

        {/* Title and metadata only share a baseline once the column is wide
            enough for it; below `xl` the metadata drops beneath so long titles
            aren't squeezed into a narrow measure. */}
        <div className="mt-6 flex flex-col gap-x-8 gap-y-3 xl:flex-row xl:items-baseline xl:justify-between">
          <h3 className="display max-w-xl text-xl font-medium leading-[1.2] text-ink transition-opacity duration-200 group-hover:opacity-70 sm:text-2xl">
            {project.title}
          </h3>
          <p className="shrink-0 text-[11px] uppercase tracking-label text-muted xl:text-right">
            {project.category}
            <span aria-hidden className="mx-2 text-rule">
              ·
            </span>
            {project.year}
          </p>
        </div>

        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">{project.description}</p>

        {project.company && (
          <p className="mt-3 text-[11px] uppercase tracking-label text-muted/55">
            {project.company}
          </p>
        )}
      </Link>
    </article>
  );
}
