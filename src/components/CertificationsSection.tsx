import other from "@/data/other.json";
import type { otherType } from "@/types/globals";
import Icon from "./Icon";

export default () => {
  const typedOther = other as otherType[];

  return (
    <section
      id="certifications"
      class="py-16"
    >
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-2 text-center">Other Merits</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {typedOther.map((cert: otherType) => (
            <div
              key={cert.name}
              class="bg-white  rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all transform hover:-translate-y-1 border border-transparent hover:border-primary/20 p-6"
            >
              <div class="flex items-center mb-3">
                <h3 class="text-xl font-bold">{cert.name}</h3>
              </div>

              {cert.issuer && (
                <div class="mb-2 flex items-center">
                  <span class="font-medium text-gray-700 ">{cert.issuer}</span>
                </div>
              )}

              {cert.date && (
                <div class="mb-2 flex items-center">
                  <span class="text-gray-700">{cert.date}</span>
                </div>
              )}

              {cert.score && (
                <div class="mb-4 mt-2">
                  <div class="flex justify-between items-center mb-1">
                    <span class="font-medium text-sm">Score</span>
                    <span class="text-sm font-bold text-text">{cert.score}</span>
                  </div>
                  <div class="h-2 rounded-full bg-gray-200 ">
                    {(() => {
                      let percentage = 100;
                      if (cert.score?.includes("/")) {
                        const parts = cert.score.split("/");
                        if (parts.length === 2) {
                          const value = Number.parseFloat(parts[0]?.trim() || "0");
                          const total = Number.parseFloat(parts[1]?.trim() || "1");
                          if (!Number.isNaN(value) && !Number.isNaN(total) && total > 0) {
                            percentage = (value / total) * 100;
                          }
                        }
                      }
                      return (
                        <div class="relative h-2 rounded-full bg-primary/20 w-full overflow-hidden">
                          <div
                            class="absolute left-0 top-0 h-2 rounded-full bg-primary transition-all duration-300"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      );
                    })()}
                  </div>
                </div>
              )}

              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-1"
                  aria-label="pdf link"
                >
                  <Icon
                    icon="pdf"
                    className="w-4 h-4 text-black"
                  />
                  <span class="inline-block">View Certificate</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
