import other from "@/data/other.json";
import type { otherType } from "@/types/globals";

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
              class="bg-white dark:bg-dark-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all transform hover:-translate-y-1 border border-transparent hover:border-primary/20 p-6"
            >
              <div class="flex items-center mb-3">
                <div class="i-mdi-certificate text-primary text-2xl mr-3" />
                <h3 class="text-xl font-bold">{cert.name}</h3>
              </div>

              {cert.issuer && (
                <div class="mb-2 flex items-center">
                  <div class="i-mdi-building text-gray-500 dark:text-gray-400 mr-2" />
                  <span class="font-medium text-gray-700 dark:text-gray-300">{cert.issuer}</span>
                </div>
              )}

              {cert.date && (
                <div class="mb-2 flex items-center">
                  <div class="i-mdi-calendar text-gray-500 dark:text-gray-400 mr-2" />
                  <span class="text-gray-700 dark:text-gray-300">{cert.date}</span>
                </div>
              )}

              {cert.score && (
                <div class="mb-4 mt-2">
                  <div class="flex justify-between items-center mb-1">
                    <span class="font-medium text-sm">Score</span>
                    <span class="text-sm font-bold text-primary">{cert.score}</span>
                  </div>
                  <div class="h-2 rounded-full bg-gray-200 dark:bg-dark-600">
                    {/* Calculate score percentage */}
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
                        <div
                          class="h-full rounded-full bg-gradient-to-r from-primary to-primary/70"
                          style={{ width: `${percentage}%` }}
                        />
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
                  class="inline-flex items-center gap-1 text-primary hover:text-primary/80 mt-2 px-3 py-1 rounded-md border border-primary/30 hover:bg-primary/10 transition-colors"
                >
                  <div class="i-mdi-file-pdf-box w-5 h-5" />
                  <span>View Certificate</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
