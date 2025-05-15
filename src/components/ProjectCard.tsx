import type { linksType, projectsType } from "@/types/globals";
import ProjectLinks from "./ProjectLinks";
import ProjectTechs from "./ProjectTechs";

interface ProjectCardProps {
  project: projectsType;
}

export default ({ project }: ProjectCardProps) => {
  return (
    <div class="bg-white dark:bg-dark-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all transform hover:-translate-y-1 border border-transparent hover:border-primary/20">
      <div class="p-6">
        <div class="flex justify-between items-center mb-3">
          <h3 class="text-xl font-bold">{project.name}</h3>
          <span
            class={`text-xs px-2 py-1 rounded-full ${
              project.type === "solo"
                ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                : "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
            }`}
          >
            {project.type === "solo" ? "Solo Project" : "Group Project"}
          </span>
        </div>
        <p class="text-gray-700 dark:text-gray-300 mb-4 text-lg">{project.description}</p>
        <div class="flex flex-wrap gap-2 mb-4">
          {project.technology_keys.map((tech) => (
            <ProjectTechs
              key={`${project.name}-${tech}`}
              tech={tech}
            />
          ))}
        </div>
        <div class="flex flex-wrap gap-3 mt-4">
          {project.links?.map((link: linksType) => (
            <ProjectLinks
              key={`${project.name}-${link.type}-${link.link}`}
              link={link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
