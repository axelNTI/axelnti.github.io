import type { linksType, projectsType } from "@/types/globals";
import ProjectLinks from "./ProjectLinks";
import ProjectTechs from "./ProjectTechs";

interface ProjectCardProps {
  project: projectsType;
}

export default ({ project }: ProjectCardProps) => {
  return (
    <div class="bg-white dark:bg-dark-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all transform hover:-translate-y-1 border border-transparent p-8 flex flex-col gap-6 max-w-md">
      <div class="flex justify-between flex-col md:flex-row items-start md:items-center gap-2">
        <h3 class="text-xl font-bold whitespace-nowrap">{project.name}</h3>
        <span
          class={`text-xs px-2 py-1 rounded-full whitespace-nowrap ${
            project.type === "solo"
              ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
              : "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
          }`}
        >
          {project.type === "solo" ? "Solo Project" : "Group Project"}
        </span>
      </div>
      <p class="text-gray-700 dark:text-gray-300 text-lg">{project.description}</p>
      <div class="flex flex-wrap gap-2 mt-auto">
        {project.technology_keys.map((tech) => (
          <ProjectTechs
            key={`${project.name}-${tech}`}
            tech={tech}
          />
        ))}
      </div>
      {/* Add the following to the end of the parent flex-col */}
      <div class="flex flex-wrap gap-3">
        {project.links?.map((link: linksType) => (
          <ProjectLinks
            key={`${project.name}-${link.type}-${link.link}`}
            link={link}
          />
        ))}
      </div>
    </div>
  );
};
