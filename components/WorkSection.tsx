import { projects } from "@/content/projects";
import Shell from "./Shell";
import ProjectCard from "./ProjectCard";

/**
 * Two-column project grid. Both columns begin at the same height and projects
 * alternate between them; the stagger comes entirely from covers of differing
 * aspect ratios, so each column packs to its own rhythm. Collapses to a single
 * column below `lg`.
 */
export default function WorkSection() {
  const columns: (typeof projects)[] = [
    projects.filter((_, i) => i % 2 === 0),
    projects.filter((_, i) => i % 2 === 1),
  ];

  return (
    <Shell as="section" id="work" className="scroll-mt-16 pb-20 lg:pb-28">
      <h2 className="sr-only">Selected Work</h2>

      <div className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-2">
        {columns.map((column, col) => (
          <div key={col} className="flex flex-col gap-12 lg:gap-14">
            {column.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={projects.indexOf(project)}
              />
            ))}
          </div>
        ))}
      </div>
    </Shell>
  );
}
