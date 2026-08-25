import type { Metadata } from "next";
import { siteConfig } from "@/content/config";
import Shell from "@/components/Shell";
import PeopleDevelopment from "@/components/PeopleDevelopment";

export const metadata: Metadata = {
  title: "About",
  description: siteConfig.metaDescription,
};

export default function AboutPage() {
  return (
    <>
    <Shell as="section" className="pt-14 sm:pt-16 lg:pt-20">
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
    <div className="pb-16 lg:pb-20">
      <PeopleDevelopment />
    </div>
    </>
  );
}
