import Hero from "@/components/Hero";
import HowIWork from "@/components/HowIWork";
import WorkSection from "@/components/WorkSection";
import PeopleDevelopment from "@/components/PeopleDevelopment";
import BeyondTheProduct from "@/components/BeyondTheProduct";
import Testimonials from "@/components/Testimonials";
import FinalCta from "@/components/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <HowIWork />
      <WorkSection />
      <PeopleDevelopment />
      <BeyondTheProduct />
      <Testimonials />
      <FinalCta />
    </>
  );
}
