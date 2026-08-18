import { projects } from "@/content/projects";
import Shell from "./Shell";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

export default function WorkSection() {
  return (
    <Shell as="section" className="scroll-mt-24 pb-24 sm:pb-32">
      <div id="work" className="scroll-mt-24" />
      <SectionHeading>Selected Work</SectionHeading>

      <div className="mt-12 grid grid-cols-12 gap-x-8 gap-y-24 sm:gap-y-32">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Shell>
  );
}
