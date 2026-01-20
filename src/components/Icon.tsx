import type { ComponentType, JSX } from "preact";
import { useEffect, useState } from "preact/hooks";
import icons from "@/data/icons.json";

type IconProps = {
  icon: string;
  className?: string;
};

export default function Icon({ icon, className = "w-4 h-4" }: IconProps) {
  const [IconComponent, setIconComponent] = useState<ComponentType<JSX.SVGAttributes<SVGSVGElement>> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const data = (icons as Record<string, { name: string; icon: string }>)[icon];

    if (!data) {
      setError(true);
      setIsLoading(false);
      return;
    }

    const iconPathParts = data.icon.split("/");
    const filename = iconPathParts[iconPathParts.length - 1] || "";
    const componentName = filename.replace(".tsx", "");

    import(`../icons/${componentName}.tsx`)
      .then((module) => {
        setIconComponent(() => module[componentName]);
        setIsLoading(false);
      })
      .catch(() => {
        setError(true);
        setIsLoading(false);
      });
  }, [icon]);

  if (isLoading || error || !IconComponent) {
    return <div className={className} />;
  }

  return <IconComponent className={className} />;
}
