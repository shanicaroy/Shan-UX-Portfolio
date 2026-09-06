import Link from "next/link";
import type { Project } from "@/content/projects";
import ProjectCanvas from "./ProjectCanvas";

/**
 * One card component for all six projects: cover on top (looping video where
 * it exists, designed poster where it does not), then name with the arrow on
 * the same row, the one-line descriptor, and the company-or-type eyebrow.
 * Square corners by rule. Locked projects render unlinked with the lock tag
 * in place of the arrow.
 */
export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const body = (
    <>
      <CoverBox project={project} index={index} />
      <div className="mt-5 flex items-start justify-between gap-6">
        <h3 className="text-[1.3rem] font-medium leading-[1.3] tracking-[-0.01em] text-ink transition-opacity duration-200 group-hover:opacity-70">
          {project.title}
        </h3>
        {project.locked ? (
          <span className="type-eyebrow inline-flex shrink-0 items-center gap-1.5 pt-1.5 text-muted">
            <svg aria-hidden width="10" height="12" viewBox="0 0 10 12" className="shrink-0">
              <rect x="0.5" y="4.5" width="9" height="7" fill="none" stroke="currentColor" />
              <path d="M2.5 4.5V3a2.5 2.5 0 0 1 5 0v1.5" fill="none" stroke="currentColor" />
            </svg>
            Locked
          </span>
        ) : (
          <span
            aria-hidden
            className="shrink-0 pt-1 text-xl leading-none text-muted transition-transform duration-300 ease-editorial group-hover:translate-x-1 group-hover:text-ink"
          >
            &rarr;
          </span>
        )}
      </div>
      <p className="mt-2 max-w-prose text-[15px] leading-relaxed text-muted">
        {project.description}
      </p>
      <p className="type-eyebrow mt-3 text-muted">{project.positioning}</p>
    </>
  );

  if (project.locked) {
    return <article aria-label={`${project.title} (locked)`}>{body}</article>;
  }

  return (
    <article>
      <Link href={`/work/${project.slug}`} className="group block">
        {body}
      </Link>
    </article>
  );
}

function CoverBox({ project, index }: { project: Project; index: number }) {
  return (
    <div className="aspect-[3/2] w-full overflow-hidden border border-rule">
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
