import Hero from "@/components/Hero";
import HowIWork from "@/components/HowIWork";
import WorkSection from "@/components/WorkSection";
import PeopleDevelopment from "@/components/PeopleDevelopment";
import WritingSection from "@/components/WritingSection";
import Testimonials from "@/components/Testimonials";
import FinalCta from "@/components/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <HowIWork />
      <WorkSection />
      <PeopleDevelopment />
      <WritingSection />
      <Testimonials />
      <FinalCta />
    </>
  );
}
