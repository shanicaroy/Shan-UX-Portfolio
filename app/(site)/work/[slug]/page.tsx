import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/content/projects";
import Shell from "@/components/Shell";
import ProjectCanvas from "@/components/ProjectCanvas";

// VMware, CLM, and Case Check have bespoke standalone pages under app/work/*.
const BESPOKE = [
  "vmware-cloud-provider-portal",
  "customer-lifecycle-management",
  "case-check",
];
const SCAFFOLDED = (p: (typeof projects)[number]) => !BESPOKE.includes(p.slug);

const openProjects = projects.filter(SCAFFOLDED);

export function generateStaticParams() {
  return openProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.description };
}

/** Section scaffold real write-ups slot into — no claims are invented here. */
const SECTIONS = ["Context", "Problem", "Approach", "Outcome"] as const;

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project || !SCAFFOLDED(project)) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const openIndex = openProjects.findIndex((p) => p.slug === project.slug);
  const next = openProjects[(openIndex + 1) % openProjects.length];

  return (
    <article>
      <Shell className="pb-20 pt-24 lg:pt-28">
        <Link
          href="/#work"
          className="text-[12px] uppercase tracking-label text-muted transition-colors duration-200 hover:text-ink"
        >
          &larr; Selected Work
        </Link>

        <div className="mt-14 grid grid-cols-12 gap-x-8 gap-y-10">
          <div className="col-span-12 lg:col-span-7">
            {project.confidential && (
              <p className="mb-5 text-[12px] uppercase tracking-label text-muted">
                {project.confidentialLabel}
              </p>
            )}
            <h1 className="display text-[2.25rem] leading-[1.08] text-ink sm:text-5xl lg:text-[3.75rem]">
              {project.title}
            </h1>
            <p className="mt-4 text-[12px] uppercase tracking-label text-muted">
              {project.positioning}
            </p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {project.description}
            </p>
          </div>

          <dl className="col-span-12 flex flex-col gap-4 self-end lg:col-span-4 lg:col-start-9">
            {project.details.map((d) => (
              <div key={d.label}>
                <dt className="text-[12px] uppercase tracking-label text-muted">{d.label}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-ink/80">{d.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Shell>

      <Shell>
        <div className="w-full overflow-hidden border border-rule aspect-[4/3] sm:aspect-[3/2] lg:aspect-[16/10]">
          {project.video ? (
            <video
              src={project.video}
              autoPlay
              muted
              loop
              playsInline
              aria-label={`${project.title}, case study cover`}
              className="h-full w-full object-cover"
            />
          ) : project.photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.photo}
              alt={`${project.title}, case study cover`}
              className="h-full w-full object-cover"
            />
          ) : (
            <ProjectCanvas index={index} alt={`${project.title}, case study cover`} />
          )}
        </div>
      </Shell>

      <Shell className="py-28 lg:py-36">
        <div className="grid grid-cols-12 gap-x-8 gap-y-14">
          {(
            project.sections ??
            SECTIONS.map((heading) => ({ heading, body: null as readonly string[] | null }))
          ).map(({ heading, body }) => (
            <section key={heading} className="col-span-12 lg:col-span-5 lg:even:col-start-8">
              <h2 className="border-t border-rule pt-5 text-[13px] uppercase tracking-label text-muted">
                {heading}
              </h2>
              {(body ?? ["This section is awaiting its write-up."]).map((paragraph) => (
                <p key={paragraph} className="mt-5 max-w-prose text-lg leading-relaxed text-ink/85">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </Shell>

      {openProjects.length > 1 && (
        <div className="border-t border-rule">
          <Shell>
            <Link
              href={`/work/${next.slug}`}
              className="group flex items-baseline justify-between gap-10 py-20"
            >
              <div>
                <span className="text-[12px] uppercase tracking-label text-muted">Next project</span>
                <h2 className="mt-4 max-w-3xl text-2xl font-medium leading-[1.15] text-ink transition-opacity duration-200 group-hover:opacity-60 sm:text-3xl">
                  {next.title}
                </h2>
              </div>
              <span
                aria-hidden
                className="shrink-0 text-2xl text-muted transition-transform duration-300 ease-editorial group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </Link>
          </Shell>
        </div>
      )}
    </article>
  );
}
