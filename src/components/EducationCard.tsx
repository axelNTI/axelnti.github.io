import Icon from "@/components/Icon";
import type { educationType } from "@/types/globals";

type EducationCardProps = {
  education: educationType;
};

export default ({ education }: EducationCardProps) => {
  return (
    <div class="bg-white rounded-lg p-5 shadow-md hover:shadow-lg flex flex-col gap-2 transition-all transform hover:-translate-y-1 mx-auto w-full max-w-3xl">
      <div class="flex justify-between flex-col md:flex-row items-start md:items-center gap-2">
        <h3 class="text-xl font-bold">{education.title || education.program}</h3>
        <span class="text-sm py-1 rounded-full">
          {education.time.start === education.time.end
            ? education.time.start
            : `${education.time.start} - ${education.time.end}`}
        </span>
      </div>
      <div class="mb-2">
        <span class="font-medium">{education.institution}</span>{" "}
      </div>{" "}
      <div class="flex items-center gap-1">
        <Icon
          icon="map"
          className="w-4 h-4"
        />
        <span class="text-gray-700">{education.location}</span>
      </div>
    </div>
  );
};
