import FeaturesCard from "@/components/ui/FeaturesCard";
import { projects } from "@/lib/projects";
import Tabs from "@/components/ui/Tabs";
import Link from "next/link";
import React from "react";

const ProjectsFeature = () => {
  return (
    <div className="responsive flex flex-col gap-6 py-8">
      <div className="flex flex-row justify-between items-end">
        <p className="basis-1/2">
        Through design, branding, and SEO, we create websites that help your business stand out and succeed.
        </p>
        <Link
          className="basis-1/2 text-right text-orange font-medium"
          href="/work"
        >
          More Projects
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {projects.slice(0, 4).map((project: { id: React.Key | null | undefined; projectName: string; src: string; tabs: any[]; }) => (
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
    </div>
  );
};

export default ProjectsFeature;
