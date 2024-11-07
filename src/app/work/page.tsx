import React from "react";
import { projects } from "@/lib/projects";
import Tabs from "@/components/ui/Tabs";
import Hero from "@/sections/Hero";
import FeaturesCard from "@/components/ui/FeaturesCard";


export default function Work() {
  return (
    <main className="">
      <Hero text="Explore Our Work" />
      <div className="grid grid-cols-4 gap-6 responsive py-6">
        {/* TODO: fix the project cards */}
        {projects.map((project: { id: React.Key | null | undefined; projectName: string; src: string; tabs: any[]; }) => (
          <FeaturesCard
            key={project.id}
            projectName={project.projectName}
            image={project.src}
          >
            <div className="flex flex-wrap gap-2">
              {project.tabs.map((tab: string) => (
                <Tabs key={tab} tab={tab} />
              ))}
            </div>
          </FeaturesCard>
        ))}
      </div>
    </main>
  );
}
