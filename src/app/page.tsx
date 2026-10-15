import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import TalentCalculator from "@/components/TalentCalculator";
import TrainingSpotlight from "@/components/TrainingSpotlight";
import TechStackSection from "@/components/TechStackSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <TalentCalculator />
      <TrainingSpotlight />
      <TechStackSection />
      <CaseStudiesSection />
      <ContactSection />
    </>
  );
}
