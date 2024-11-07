import Navbar from "@/components/layout/Navbar";
import Hero from "@/sections/Hero";
import ProjectsFeature from "@/sections/ProjectsFeature";
import ServicesSection from "@/sections/ServicesSection";
import React from "react";

export default function Home() {
  return (
    <main>
      <Hero text="Your Brand Deserves a Website that Captivates, Connects, and Converts" />
      <ProjectsFeature />
      <ServicesSection />
    </main>
  );
}
