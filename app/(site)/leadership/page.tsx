import type { Metadata } from "next";
import { leadershipHero } from "@/content/leadership";
import Shell from "@/components/Shell";
import WhereIOperate from "@/components/WhereIOperate";
import LeadershipScope from "@/components/LeadershipScope";
import HowILead from "@/components/HowILead";
import LeadershipModel from "@/components/LeadershipModel";
import LeaderLifecycle from "@/components/LeaderLifecycle";
import ExperienceSection from "@/components/ExperienceSection";
import ProductStrategy from "@/components/ProductStrategy";
import CrossFunctional from "@/components/CrossFunctional";
import DesignQuality from "@/components/DesignQuality";
import OrgImpact from "@/components/OrgImpact";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "How Shanica Roy leads design — across craft, product thinking, team development, and organizational impact.",
};

/** The complete leadership argument lives here, off the lean homepage. */
export default function LeadershipPage() {
  return (
    <>
      <Shell as="section" className="pt-20 sm:pt-24 lg:pt-28">
        <h1 className="display max-w-[20ch] text-[2.5rem] leading-[1.08] text-ink sm:text-[3.25rem] lg:text-[3.75rem]">
          {leadershipHero.heading}
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {leadershipHero.support}
        </p>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {leadershipHero.belief}
        </p>
      </Shell>
      <WhereIOperate />
      <LeadershipScope />
      <HowILead />
      <LeadershipModel />
      <LeaderLifecycle />
      <ExperienceSection />
      <ProductStrategy />
      <CrossFunctional />
      <DesignQuality />
      <OrgImpact />
      <FinalCta />
    </>
  );
}
