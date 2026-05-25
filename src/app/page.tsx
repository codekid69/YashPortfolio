import dynamic from "next/dynamic";
import HeroSection from "@/components/v2/HeroSection";

const MarqueeSection = dynamic(() => import("@/components/v2/MarqueeSection"));
const AboutSection = dynamic(() => import("@/components/v2/AboutSection"));
const ServicesSection = dynamic(() => import("@/components/v2/ServicesSection"));
const ProjectsSection = dynamic(() => import("@/components/v2/ProjectsSection"));
const ExperienceSection = dynamic(() => import("@/components/v2/ExperienceSection"));
const SkillsSection = dynamic(() => import("@/components/v2/SkillsSection"));
const ContactSection = dynamic(() => import("@/components/v2/ContactSection"));

export default function Home() {
  return (
    <main style={{ overflowX: "clip", backgroundColor: "#0C0C0C" }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
