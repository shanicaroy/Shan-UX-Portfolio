import { projects } from "@/content/projects";
import Shell from "./Shell";
import SectionIntro from "./SectionIntro";
import ProjectRow from "./ProjectRow";

/**
 * Editorial work list: large → medium → large → medium, with medium covers
 * alternating sides. Not a card grid by design.
 */
export default function WorkSection() {
  const mediums = projects.filter((p) => p.size === "medium");

  return (
    <Shell as="section" id="work" className="scroll-mt-16 pt-20 lg:pt-28">
      <SectionIntro
        label="Selected Work"
        heading="Design leadership, through the work."
        support="I stay close to the problem and the product while creating the clarity, alignment, and systems that help teams move forward."
      />

      <div className="mt-14 flex flex-col gap-24 lg:mt-20 lg:gap-32">
        {projects.map((project, i) => (
          <ProjectRow
            key={project.slug}
            project={project}
            index={i}
            flip={project.size === "medium" && mediums.indexOf(project) % 2 === 1}
          />
        ))}
      </div>
    </Shell>
  );
}
