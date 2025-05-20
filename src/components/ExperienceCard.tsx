import Icon from "@/components/Icon";
import type { workType } from "@/types/globals";

interface ExperienceCardProps {
  job: workType;
}

export default ({ job }: ExperienceCardProps) => {
  return (
    <div class="bg-white rounded-lg p-5 shadow-md hover:shadow-lg flex flex-col gap-2 transition-all transform hover:-translate-y-1 mx-auto w-full max-w-3xl">
      <div class="flex justify-between flex-col md:flex-row items-start md:items-center gap-2">
        <h3 class="text-xl font-bold">{job.position}</h3>
        <span class="text-sm py-1 rounded-full">
          {job.time.start === job.time.end ? job.time.start : `${job.time.start} - ${job.time.end}`}
        </span>
      </div>
      <div class="mb-2">
        <span class="font-medium">{job.employer}</span>
        <span class="mx-2">•</span>
        <span class="text-gray-600 dark:text-gray-400">{job.type}</span>
      </div>
      <div class="flex items-center gap-1">
        <Icon
          icon="map"
          className="w-4 h-4"
        />
        <span class="text-gray-700 dark:text-gray-300">{job.location}</span>
      </div>
    </div>
  );
};
