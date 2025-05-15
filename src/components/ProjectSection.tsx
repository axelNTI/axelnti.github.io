import projects from "@/data/projects.json";

import type { projectsType } from "@/types/globals";

import ProjectCard from "@/components/ProjectCard";

export default () => {
  const typedProects = projects as projectsType[];

  return (
    <section
      id="projects"
      class="py-16"
    >
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {typedProects.map((project: projectsType) => (
            <ProjectCard
              key={`project-${project.name}`}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
