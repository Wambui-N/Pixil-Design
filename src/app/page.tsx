import Hero from "@/sections/Hero";
import {Booking} from "@/sections/Booking";
import ProjectsFeature from "@/sections/ProjectsFeature";
import ServicesSection from "@/sections/ServicesSection";
import React from "react";

export default function Home() {
  return (
    <main>
      <Hero text="Your Brand Deserves a Website that Captivates, Connects, and Converts" />
      <ProjectsFeature />
      <ServicesSection />
      <Booking />
    </main>
  );
}
