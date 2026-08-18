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
 * One project in the two-column grid: a cover filling the column and a single
 * caption line beneath it — the project name alone, nothing split across the
 * row and no further lines.
 */
export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article>
      <Link href={`/work/${project.slug}`} className="group block">
        <div className={`w-full overflow-hidden ${ASPECT[project.aspect]}`}>
          <ProjectCanvas index={index} alt={`${project.title} — case study cover`} />
        </div>

        <h3 className="mt-4 font-mono text-[13px] font-medium uppercase leading-snug tracking-label text-ink transition-opacity duration-200 group-hover:opacity-70">
          {project.title}
        </h3>
      </Link>
    </article>
  );
}
