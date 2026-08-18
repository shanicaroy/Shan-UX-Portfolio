import Link from "next/link";
import type { Project } from "@/content/projects";
import ProjectCanvas from "./ProjectCanvas";

/**
 * One editorial project feature: a cover that fills the content width at large
 * vertical scale, then a metadata row — title and description left, category /
 * year / company right.
 */
export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article>
      <Link href={`/work/${project.slug}`} className="group block">
        {/* Cover — spans the full content width; tall enough to dominate the viewport */}
        <div className="w-full overflow-hidden border border-rule aspect-[4/3] sm:aspect-[3/2] lg:aspect-[16/10]">
          <ProjectCanvas index={index} alt={`${project.title} — case study cover`} />
        </div>

        <div className="mt-8 grid grid-cols-12 gap-x-8 gap-y-5">
          <div className="col-span-12 lg:col-span-7">
            <h3 className="display max-w-3xl text-2xl font-medium leading-[1.15] text-ink sm:text-3xl lg:text-[2.5rem]">
              {project.title}
            </h3>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              {project.description}
            </p>
          </div>

          <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:text-right">
            <p className="text-[11px] uppercase tracking-label text-muted">
              {project.category}
              <span aria-hidden className="mx-2 text-rule">
                ·
              </span>
              {project.year}
            </p>
            {project.company && (
              <p className="mt-2 text-[11px] uppercase tracking-label text-muted/60">
                {project.company}
              </p>
            )}
            <span className="mt-5 inline-block text-[11px] uppercase tracking-label text-muted transition-colors duration-200 group-hover:text-ink">
              View case study
              <span
                aria-hidden
                className="ml-2 inline-block transition-transform duration-300 ease-editorial group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
