import { projects } from "@/content/projects";
import Shell from "./Shell";
import SectionIntro from "./SectionIntro";
import ProjectRow from "./ProjectRow";

/**
 * Selected work: every project uses the same master template, alternating
 * sides in a zigzag — text left / cover right, then flipped.
 */
export default function WorkSection() {
  return (
    <Shell as="section" id="work" className="scroll-mt-16 pt-20 lg:pt-28">
      <SectionIntro
        label="Selected Work"
        heading="Selected work."
        support="A selection of product and UX work across complex systems, enterprise platforms, and real-world experiences."
      />

      <div className="mt-14 flex flex-col gap-24 lg:mt-20 lg:gap-28">
        {projects.map((project, i) => (
          <ProjectRow key={project.slug} project={project} index={i} flip={i % 2 === 1} />
        ))}
      </div>
    </Shell>
  );
}
