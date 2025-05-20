import work from "@/data/work.json";
import type { workType } from "@/types/globals";
import ExperienceCard from "./ExperienceCard";

export default () => {
  return (
    <section
      id="experience"
      class="py-16"
    >
      <div class="container mx-auto px-4 relative max-w-5xl mx-auto">
        <h2 class="text-3xl font-bold mb-8 text-center">Work Experience</h2>
        <div class="flex flex-col gap-4">
          {work.map((job: workType) => (
            <ExperienceCard
              key={`job-${job.employer}-${job.position}-${job.time.start}`}
              job={job}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
