import Link from "next/link";
import Shell from "@/components/Shell";

export default function NotFound() {
  return (
    <Shell as="section" className="flex min-h-[60vh] flex-col justify-center py-24">
      <p className="font-mono text-xs uppercase tracking-label text-muted">404</p>
      <h1 className="mt-6 max-w-[16ch] font-serif text-[2.5rem] leading-[1.08] text-ink sm:text-5xl">
        This page doesn&rsquo;t exist.
      </h1>
      <Link
        href="/"
        className="mt-10 font-mono text-xs uppercase tracking-label text-muted transition-colors duration-200 hover:text-ink"
      >
        &larr; Back home
      </Link>
    </Shell>
  );
}
