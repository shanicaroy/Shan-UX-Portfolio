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
  const caption = (
    <h3 className="mt-4 flex items-baseline gap-3 text-[13px] font-normal uppercase leading-snug tracking-label text-ink transition-opacity duration-200 group-hover:opacity-70">
      {project.title}
      {project.locked && (
        <span className="inline-flex items-center gap-1.5 text-muted">
          <svg aria-hidden width="10" height="12" viewBox="0 0 10 12" className="shrink-0 translate-y-px">
            <rect x="0.5" y="4.5" width="9" height="7" rx="1" fill="none" stroke="currentColor" />
            <path d="M2.5 4.5V3a2.5 2.5 0 0 1 5 0v1.5" fill="none" stroke="currentColor" />
          </svg>
          Locked
        </span>
      )}
    </h3>
  );

  if (project.locked) {
    return (
      <article aria-label={`${project.title} (locked)`}>
        <CoverBox project={project} index={index} />
        {caption}
      </article>
    );
  }

  return (
    <article>
      <Link href={`/work/${project.slug}`} className="group block">
        <CoverBox project={project} index={index} />
        {caption}
      </Link>
    </article>
  );
}

function CoverBox({ project, index }: { project: Project; index: number }) {
  return (
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
  );
}
