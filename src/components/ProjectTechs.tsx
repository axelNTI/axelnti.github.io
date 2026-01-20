import Icon from "@/components/Icon";
import programmingLanguages from "@/data/icons.json";

type ProjectTechsProps = {
  tech: string;
};

export default ({ tech }: ProjectTechsProps) => {
  const techData = (programmingLanguages as Record<string, { name: string; icon: string }>)[tech];
  return techData ? (
    <div class="flex items-center gap-1 text-xs px-2 py-1 bg-gray-100 rounded-md transition-colors">
      <Icon
        icon={tech}
        className="w-4 h-4"
      />
      <span>{techData.name}</span>
    </div>
  ) : null;
};
