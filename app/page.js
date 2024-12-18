import AboutSection from "@/components/sections/services-section";
import HeroSection from "@/components/sections/hero-section";
import AnimationContainer from "@/lib/globals/animted-container";
import Image from "next/image";
import ServicesSection from "@/components/sections/services-section";
import Experience from "@/components/sections/experience-section";
import ProjectSection from "@/components/sections/projects-section";
import SkillsSection from "@/components/sections/skills-section";
import ContactMe from "@/components/sections/contact-me";
import { TextHoverEffect } from "@/components/text-hover-effect";

export default function Home() {
  return (
    <div className="overflow-x-hidden scrollbar-hide size-full">
      <HeroSection />

      {/* <AnimationContainer delay={0.5}>
        <ServicesSection />
      </AnimationContainer> */}

      <AnimationContainer delay={0.2}>
        <Experience />
      </AnimationContainer>
      <AnimationContainer delay={0.4}>
        <SkillsSection />
      </AnimationContainer>

      <AnimationContainer delay={0.3}>
        <ProjectSection />
      </AnimationContainer>

      <div id="contact">
        <ContactMe />
      </div>

      <div>
        <TextHoverEffect text="VENKAT" />
      </div>
    </div>
  );
}
