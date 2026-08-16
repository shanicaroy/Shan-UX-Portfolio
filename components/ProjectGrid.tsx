import type { Project } from "@/content/projects";
import ProjectGridCard from "./ProjectGridCard";

/**
 * Full-bleed two-column project grid. The right column is offset downward on
 * desktop so the columns stagger rather than marching in lockstep — that offset
 * plus the per-project `aspect` value produces the masonry rhythm. Collapses to
 * one column below `lg`, where the offset is dropped.
 */
export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const left = projects.filter((_, i) => i % 2 === 0);
  const right = projects.filter((_, i) => i % 2 === 1);

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-24 lg:grid-cols-2 lg:gap-x-8">
      <div className="flex flex-col gap-24">
        {left.map((project) => (
          <ProjectGridCard key={project.slug} project={project} />
        ))}
      </div>
      <div className="flex flex-col gap-24 lg:mt-40">
        {right.map((project) => (
          <ProjectGridCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
