import type { Metadata } from "next";
import { siteConfig } from "@/content/config";
import Shell from "@/components/Shell";

export const metadata: Metadata = {
  title: "About",
  description: siteConfig.metaDescription,
};

export default function AboutPage() {
  return (
    <Shell as="section" className="pb-24 pt-20 sm:pt-24 lg:pb-32 lg:pt-28">
      <p className="text-[12px] uppercase tracking-label text-muted">About</p>
      <div className="mt-8 grid grid-cols-12 gap-x-8">
        <div className="col-span-12 flex flex-col gap-6 lg:col-span-7">
          {siteConfig.about.body.map((paragraph, i) => (
            <p key={i} className="display text-2xl leading-[1.4] text-ink sm:text-[1.75rem]">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Shell>
  );
}
