import { Hero } from "@/components/hero";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { PhilosophySection } from "@/components/philosophy-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ProjectsSection />
      <SkillsSection />
      <PhilosophySection />
      <ContactSection />
    </div>
  );
}
