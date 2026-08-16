import Link from "next/link";
import type { Project } from "@/content/projects";
import CaseStudyCover from "./CaseStudyCover";
import InspectFrame from "./InspectFrame";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <InspectFrame label={`${project.role} · ${project.duration}`} className="block">
        <div className="overflow-hidden border border-ink/10">
          <div className="aspect-[4/3]">
            <CaseStudyCover
              variant={project.cover}
              className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
          </div>
        </div>
      </InspectFrame>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <span className="font-mono text-xs text-ink-soft">
            {String(index + 1).padStart(2, "0")} / {project.year}
          </span>
          <h3 className="mt-2 font-display text-2xl leading-snug text-ink group-hover:text-signal transition-colors">
            {project.title}
          </h3>
          <p className="mt-2 max-w-md text-sm text-ink-soft">{project.summary}</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[10px] uppercase tracking-wide border border-ink/15 px-2 py-1 text-ink-soft"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
