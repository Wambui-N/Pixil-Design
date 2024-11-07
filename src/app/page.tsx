import Navbar from "@/components/layout/Navbar";
import Hero from "@/sections/Hero";
import ProjectsFeature from "@/sections/ProjectsFeature";
import React from "react";

export default function Home() {
  return (
    <main>
      <Hero text="Your Brand Deserves a Website that Captivates, Connects, and Converts" />
      <ProjectsFeature />
    </main>
  );
}
