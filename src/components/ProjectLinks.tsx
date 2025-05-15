import Icon from "@/components/Icon";
import icons from "@/data/icons.json";
import type { linksType } from "@/types/globals";

interface ProjectTechsProps {
  link: linksType;
}

export default ({ link }: ProjectTechsProps) => {
  const label = icons[link.type]?.name || link.type;

  return (
    <a
      href={link.link}
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center gap-1 text-primary hover:text-primary/80"
      aria-label={`${label} link`}
    >
      <Icon
        icon={link.type}
        className="w-4 h-4"
      />
      <span class="inline-block">{label}</span>
    </a>
  );
};
