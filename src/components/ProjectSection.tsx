import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects.json";
import type { projectsType } from "@/types/globals";

export default () => {
  const typedProects = projects as projectsType[];

  return (
    <section
      id="projects"
      class="py-16"
    >
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div class="flex flex-row flex-wrap gap-6 justify-center">
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
