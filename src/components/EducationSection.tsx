import education from "@/data/education";

import EducationCard from "./EducationCard";
export default () => {
  return (
    <section
      id="education"
      class="py-16"
    >
      <div class="container mx-auto px-4 relative max-w-5xl mx-auto">
        <h2 class="text-3xl font-bold mb-8 text-center">Education</h2>
        <div class="flex flex-col gap-4">
          {education.map((edu) => (
            <EducationCard
              key={`edu-${edu.institution}-${edu.program}-${edu.time.start}`}
              education={edu}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
