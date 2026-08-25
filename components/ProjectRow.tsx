import Link from "next/link";
import type { Project } from "@/content/projects";
import ProjectCanvas from "./ProjectCanvas";

/** Facts shown on homepage rows — the case pages carry the full details. */
const ROW_FACTS = ["Role", "Team", "Scope", "Outcome"];

function Cover({ project, index }: { project: Project; index: number }) {
  return (
    <div className="aspect-[4/3] w-full overflow-hidden border border-rule">
      {project.video ? (
        <video
          src={project.video}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={`${project.title} — case study cover`}
          className="h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.01]"
        />
      ) : project.photo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.photo}
          alt={`${project.title} — case study cover`}
          className="h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.01]"
        />
      ) : (
        <ProjectCanvas index={index} alt={`${project.title} — case study cover`} />
      )}
    </div>
  );
}

/**
 * The single master project template: details on one side, cover on the
 * other, identical proportions and hierarchy for every project. Rows
 * alternate sides down the page — text left first, then flipped.
 */
export default function ProjectRow({
  project,
  index,
  flip,
}: {
  project: Project;
  index: number;
  flip: boolean;
}) {
  const facts = project.details.filter((d) => ROW_FACTS.includes(d.label));

  return (
    <article className="group grid grid-cols-12 items-center gap-x-8 gap-y-8">
      <div className={`col-span-12 lg:col-span-4 ${flip ? "lg:order-2 lg:col-start-9" : "lg:col-start-1"}`}>
        <p className="text-[12px] uppercase tracking-label text-muted">
          {project.confidential ? project.confidentialLabel : project.positioning}
        </p>
        <h3 className="display mt-4 text-[1.75rem] leading-[1.1] text-ink sm:text-[2rem]">
          <Link
            href={`/work/${project.slug}`}
            className="transition-opacity duration-200 hover:opacity-70"
          >
            {project.title}
          </Link>
        </h3>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">{project.description}</p>

        <dl className="mt-6 flex flex-col gap-3">
          {facts.map((d) => (
            <div key={d.label}>
              <dt className="text-[12px] uppercase tracking-label text-muted">{d.label}</dt>
              <dd className="mt-0.5 text-sm leading-relaxed text-ink/80">{d.value}</dd>
            </div>
          ))}
        </dl>

        <Link
          href={`/work/${project.slug}`}
          className="mt-7 inline-block text-sm text-ink underline-offset-4 transition-colors duration-200 hover:underline"
        >
          {project.cta} <span aria-hidden>↗</span>
        </Link>
      </div>

      <Link
        href={`/work/${project.slug}`}
        className={`col-span-12 block lg:col-span-7 ${flip ? "lg:order-1 lg:col-start-1" : "lg:col-start-6"}`}
        tabIndex={-1}
        aria-hidden
      >
        <Cover project={project} index={index} />
      </Link>
    </article>
  );
}
