import Link from "next/link";
import type { Project } from "@/content/projects";
import ProjectCanvas from "./ProjectCanvas";

const ASPECT: Record<Project["aspect"], string> = {
  "16/9": "aspect-[16/9]",
  "3/2": "aspect-[3/2]",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
};

function Cover({ project, index }: { project: Project; index: number }) {
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

function Details({ project, large }: { project: Project; large: boolean }) {
  return (
    <>
      {project.confidential && (
        <p className="text-[12px] uppercase tracking-label text-muted">
          {project.confidentialLabel}
        </p>
      )}
      <h3
        className={`display leading-[1.1] text-ink ${project.confidential ? "mt-4" : ""} ${
          large ? "text-[2rem] sm:text-[2.5rem] lg:text-[2.75rem]" : "text-[1.75rem] sm:text-[2rem]"
        }`}
      >
        <Link
          href={`/work/${project.slug}`}
          className="transition-opacity duration-200 hover:opacity-70"
        >
          {project.title}
        </Link>
      </h3>
      <p className="mt-3 text-[12px] uppercase tracking-label text-muted">{project.positioning}</p>
      <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-[17px]">
        {project.description}
      </p>
    </>
  );
}

function Facts({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-6">
      <dl className="flex flex-col gap-4">
        {project.details.map((d) => (
          <div key={d.label}>
            <dt className="text-[12px] uppercase tracking-label text-muted">{d.label}</dt>
            <dd className="mt-1 text-sm leading-relaxed text-ink/80">{d.value}</dd>
          </div>
        ))}
      </dl>
      <Link
        href={`/work/${project.slug}`}
        className="text-sm text-ink underline-offset-4 transition-colors duration-200 hover:underline"
      >
        {project.cta} <span aria-hidden>↗</span>
      </Link>
    </div>
  );
}

/**
 * One project in the editorial work list. Large rows lead with a full-width
 * cover, then split title/description from metadata. Medium rows sit the
 * cover beside the text, alternating sides.
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
  if (project.size === "large") {
    return (
      <article className="group">
        <Link href={`/work/${project.slug}`} className="block" tabIndex={-1} aria-hidden>
          <Cover project={project} index={index} />
        </Link>
        <div className="mt-8 grid grid-cols-12 gap-x-8 gap-y-8">
          <div className="col-span-12 lg:col-span-7">
            <Details project={project} large />
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <Facts project={project} />
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group grid grid-cols-12 items-start gap-x-8 gap-y-8">
      <Link
        href={`/work/${project.slug}`}
        className={`col-span-12 block lg:col-span-7 ${flip ? "lg:order-2 lg:col-start-6" : ""}`}
        tabIndex={-1}
        aria-hidden
      >
        <Cover project={project} index={index} />
      </Link>
      <div className={`col-span-12 lg:col-span-4 ${flip ? "lg:order-1 lg:col-start-1" : "lg:col-start-9"}`}>
        <Details project={project} large={false} />
        <div className="mt-6">
          <Facts project={project} />
        </div>
      </div>
    </article>
  );
}
