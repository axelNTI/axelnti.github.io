import Icon from "@/components/Icon";
import type { workType } from "@/types/globals";

interface ExperienceCardProps {
  job: workType;
}

export default ({ job }: ExperienceCardProps) => {
  return (
    <div class="relative items-start flex flex-col gap-2 md:flex-row md:gap-4 mb-8 w-full">
      <span class="text-md font-semibold inline-block px-3 py-1 rounded-full flex md:justify-end w-full md:w-1/2 md:mt-2">
        {job.time.start === job.time.end ? job.time.start : `${job.time.start} - ${job.time.end}`}
      </span>

      <div class="bg-white dark:bg-dark-700 rounded-lg p-5 shadow-md hover:shadow-lg border border-gray-100 dark:border-dark-600 flex flex-col gap-2 w-full md:w-1/2 transition-all transform hover:-translate-y-1">
        <h3 class="text-xl font-bold mb-1">{job.position}</h3>
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
    </div>
  );
};
