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
 * The published card treatment: a bordered cover at the project's own aspect
 * ratio, then a single caption line — the project name alone.
 */
export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article>
      <Link href={`/work/${project.slug}`} className="group block">
        <div className={`w-full overflow-hidden border border-rule ${ASPECT[project.aspect]}`}>
          {project.video ? (
            <video
              src={project.video}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={`${project.title}, case study cover`}
              className="h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.01]"
            />
          ) : project.photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.photo}
              alt={`${project.title}, case study cover`}
              className="h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.01]"
            />
          ) : (
            <ProjectCanvas index={index} alt={`${project.title}, case study cover`} />
          )}
        </div>

        <h3 className="mt-4 text-[13px] font-normal uppercase leading-snug tracking-label text-ink transition-opacity duration-200 group-hover:opacity-70">
          {project.title}
        </h3>
      </Link>
    </article>
  );
}
