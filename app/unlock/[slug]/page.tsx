import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import UnlockForm from "@/components/UnlockForm";
import CaseBreadcrumb from "@/components/case/CaseBreadcrumb";

/**
 * Dedicated password-entry page for a gated project (replaces the old modal).
 * It is a real route with the site's identity — breadcrumb, project title,
 * explanation, and password form — not an overlay over dimmed content. On the
 * correct password the form routes to /work/<slug>. The gate stays client-side,
 * exactly as before; this only changes the presentation from a dialog to a page.
 */
export function generateStaticParams() {
  // Orbit is open; everything else is gated behind this page.
  return projects.filter((p) => p.slug !== "orbit-design-system").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return { title: project ? `${project.title} (password protected)` : "Password protected" };
}

export default async function UnlockPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main id="main" className="flex min-h-screen flex-col bg-white">
      <div className="mx-auto w-full max-w-[1200px] px-6 pt-8 md:px-10 md:pt-10">
        <CaseBreadcrumb title={project.title} />
      </div>
      <div className="flex-1">
        <UnlockForm slug={project.slug} title={project.title} />
      </div>
    </main>
  );
}
