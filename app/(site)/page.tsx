import Hero from "@/components/Hero";
import LeadershipProof from "@/components/LeadershipProof";
import WhatILead from "@/components/WhatILead";
import WorkSection from "@/components/WorkSection";
import HowILead from "@/components/HowILead";
import ExperienceSection from "@/components/ExperienceSection";
import PeopleDevelopment from "@/components/PeopleDevelopment";
import OrgImpact from "@/components/OrgImpact";
import AboutSection from "@/components/AboutSection";
import BeyondTheProduct from "@/components/BeyondTheProduct";
import Testimonials from "@/components/Testimonials";
import FinalCta from "@/components/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <LeadershipProof />
      <WhatILead />
      <WorkSection />
      <HowILead />
      <ExperienceSection />
      <PeopleDevelopment />
      <OrgImpact />
      <AboutSection />
      <BeyondTheProduct />
      <Testimonials />
      <FinalCta />
    </>
  );
}
