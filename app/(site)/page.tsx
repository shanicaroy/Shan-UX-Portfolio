import Hero from "@/components/Hero";
import LeadershipModel from "@/components/LeadershipModel";
import WorkSection from "@/components/WorkSection";
import WritingSection from "@/components/WritingSection";
import Testimonials from "@/components/Testimonials";
import FinalCta from "@/components/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <LeadershipModel />
      <WorkSection />
      <WritingSection />
      <Testimonials />
      <FinalCta />
    </>
  );
}
