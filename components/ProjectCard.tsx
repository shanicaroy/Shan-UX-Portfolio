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
 * row and no further lines. Locked (NDA) projects render the same card
 * without a link, with a padlock on the cover and beside the name.
 */
export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const card = (
    <>
      <div className={`w-full overflow-hidden border border-rule ${ASPECT[project.aspect]}`}>
        {project.video ? (
          <video
            src={project.video}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={`${project.title} — case study cover`}
            className="h-full w-full object-cover"
          />
        ) : (
          <ProjectCanvas
            index={index}
            locked={project.locked}
            alt={
              project.locked
                ? `${project.title} — locked, under NDA`
                : `${project.title} — case study cover`
            }
          />
        )}
      </div>

      <h3 className="mt-4 flex items-baseline gap-3 font-mono text-[13px] font-normal uppercase leading-snug tracking-label text-ink transition-opacity duration-200 group-hover:opacity-70">
        {project.title}
        {project.locked && (
          <span className="inline-flex items-center gap-1.5 text-muted">
            <svg
              aria-hidden
              width="10"
              height="12"
              viewBox="0 0 10 12"
              className="shrink-0 translate-y-px"
            >
              <rect x="0.5" y="4.5" width="9" height="7" rx="1" fill="none" stroke="currentColor" />
              <path d="M2.5 4.5V3a2.5 2.5 0 0 1 5 0v1.5" fill="none" stroke="currentColor" />
            </svg>
            Locked
          </span>
        )}
      </h3>
    </>
  );

  if (project.locked) {
    return <article aria-label={`${project.title} (locked)`}>{card}</article>;
  }

  return (
    <article>
      <Link href={`/work/${project.slug}`} className="group block">
        {card}
      </Link>
    </article>
  );
}
