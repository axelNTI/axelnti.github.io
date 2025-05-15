import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectSection from "@/components/ProjectSection";

import generic from "@/data/generic.json";
import languages from "@/data/languages.json";
import other from "@/data/other.json";

import type { genericType, languageType, otherType } from "@/types/globals.d.ts";

import { useEffect, useState } from "preact/hooks";

export default () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Type assertions for imported JSON
  const typedGeneric = generic as genericType;
  const typedLanguages = languages as languageType[];
  const typedOther = other as otherType[];

  useEffect(() => {
    // Check for system preference or stored preference
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);

    // Apply theme to document
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div class="min-h-screen bg-light-100 dark:bg-dark-900 text-dark-800 dark:text-light-100 font-sans">
      {/* Header */}
      <header class="sticky top-0 z-50 backdrop-blur-sm bg-light-100/90 dark:bg-dark-900/90 shadow-sm">
        <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
          <a
            href="/"
            class="text-xl font-bold"
          >
            {typedGeneric.name}
          </a>
          <div class="flex items-center gap-6">
            <a
              href="#about"
              class="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 rounded px-1"
              aria-label="Navigate to About section"
            >
              About
            </a>
            <a
              href="#experience"
              class="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 rounded px-1"
              aria-label="Navigate to Experience section"
            >
              Experience
            </a>
            <a
              href="#projects"
              class="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 rounded px-1"
              aria-label="Navigate to Projects section"
            >
              Projects
            </a>
            <a
              href="#education"
              class="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 rounded px-1"
              aria-label="Navigate to Education section"
            >
              Education
            </a>
            <a
              href="#certifications"
              class="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 rounded px-1"
              aria-label="Navigate to Certifications section"
            >
              Certifications
            </a>

            <button
              type="button"
              onClick={toggleTheme}
              class="p-2 rounded-full bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Toggle dark/light theme"
            >
              <div class={theme === "dark" ? "i-mdi-weather-sunny w-5 h-5" : "i-mdi-weather-night w-5 h-5"} />
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section class="py-28 bg-gradient-to-b from-primary/10 to-transparent relative">
        {/* <div class="absolute top-0 left-0 w-full h-full opacity-15">
          <div
            class="absolute top-10 left-10 w-20 h-20 rounded-full bg-blue-500 animate-float"
            style="animation-delay: 0s;"
          />
          <div
            class="absolute top-40 right-20 w-16 h-16 rounded-full bg-red-500 animate-float"
            style="animation-delay: 1s;"
          />
          <div
            class="absolute bottom-20 left-1/4 w-24 h-24 rounded-full bg-green-500 animate-float"
            style="animation-delay: 2s;"
          />
          <div
            class="absolute bottom-40 right-1/4 w-12 h-12 rounded-full bg-yellow-500 animate-float"
            style="animation-delay: 3s;"
          />
        </div> */}
        <div class="container mx-auto px-4 flex flex-col items-center relative z-10">
          <div class="text-primary text-xl mb-2">Welcome to my portfolio</div>
          <h1 class="text-5xl md:text-7xl font-bold mb-6 text-center">
            <span class="text-primary">Hello, I'm </span>
            {typedGeneric.name}
          </h1>
          <p class="text-xl md:text-2xl mb-10 text-center max-w-2xl">
            I'm a developer based in {typedGeneric.location} focused on building modern web and desktop applications.
          </p>
          <div class="flex flex-wrap gap-4 justify-center">
            <a
              href={`mailto:${typedGeneric.email}`}
              class="btn bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transition-all hover:shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-dark-900"
              aria-label="Contact me via email"
            >
              Contact Me
            </a>
            <a
              href={typedGeneric.github_link}
              target="_blank"
              rel="noopener noreferrer"
              class="btn border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-lg transition-all hover:shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-dark-900"
              aria-label="Visit my GitHub profile"
            >
              <div class="i-mdi-github mr-2 inline-block" /> GitHub
            </a>
            <a
              href={typedGeneric.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              class="btn border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-lg transition-all hover:shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-dark-900"
              aria-label="Visit my LinkedIn profile"
            >
              <div class="i-mdi-linkedin mr-2 inline-block" /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        class="py-16"
      >
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div class="flex flex-wrap gap-8">
            <div class="grow basis-full md:basis-0">
              <div class="mb-6">
                <h3 class="text-xl font-semibold mb-3">Personal Info</h3>
                <div class="flex flex-col gap-2">
                  <div class="flex items-center gap-2">
                    <div class="i-material-symbols-mail-outline text-primary text-lg" />
                    <span>{typedGeneric.email}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <div class="i-material-symbols-phone-enabled-outline text-primary text-lg" />
                    <span>{typedGeneric.phone}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <div class="i-material-symbols-location-on-outline text-primary text-lg" />
                    <span>{typedGeneric.location}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <div class="i-mdi-github text-primary text-lg" />
                    <a
                      href={typedGeneric.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="hover:text-primary transition-colors"
                    >
                      @{typedGeneric.github}
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-3">Languages</h3>
                <div class="flex flex-col gap-2">
                  {typedLanguages.map((lang: languageType) => (
                    <div
                      key={lang.language}
                      class="flex items-center gap-2"
                    >
                      <span class="font-medium">{lang.language}:</span>
                      <span>{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div class="grow basis-full md:basis-0">
              <h3 class="text-xl font-semibold mb-3">About Me</h3>
              <p class="mb-4">
                I'm a passionate developer with experience in web and desktop application development. I pride myself on
                writing clean, structured, and efficient code while being able to employ the best tools for any given
                job.
              </p>
              <p>
                With a background and extensive education in information technology, I enjoy finding elegant solutions
                to complex problems. I'm constantly learning and expanding my skill set to stay at the forefront of
                technology and deliver high-quality, maintainable software that solves real-world challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ExperienceSection />

      <ProjectSection />

      <EducationSection />

      {/* Certifications Section */}
      <section
        id="certifications"
        class="py-16"
      >
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold mb-2 text-center">Certifications & Other</h2>
          <p class="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Professional certifications and additional qualifications
          </p>
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

      {/* Footer */}
      <footer class="py-16 bg-gray-100 dark:bg-dark-800">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 class="text-xl font-bold mb-4">About Me</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">
                A passionate developer focused on creating clean, efficient, and user-friendly applications using modern
                technologies.
              </p>
              <div class="flex items-center gap-2">
                <div class="i-material-symbols-location-on-outline text-primary" /> {typedGeneric.location}
              </div>
            </div>

            <div>
              <h3 class="text-xl font-bold mb-4">Quick Links</h3>
              <ul class="flex flex-col gap-2">
                <li>
                  <a
                    href="#about"
                    class="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    class="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    class="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#education"
                    class="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                  >
                    Education
                  </a>
                </li>
                <li>
                  <a
                    href="#certifications"
                    class="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                  >
                    Certifications
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-xl font-bold mb-4">Contact Me</h3>
              <div class="flex flex-col gap-3">
                <a
                  href={`mailto:${typedGeneric.email}`}
                  class="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  <div class="i-material-symbols-mail-outline" /> {typedGeneric.email}
                </a>
                <a
                  href={`tel:${typedGeneric.phone.replace(/\s/g, "")}`}
                  class="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  <div class="i-material-symbols-phone-enabled-outline" /> {typedGeneric.phone}
                </a>
                <a
                  href={typedGeneric.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  <div class="i-mdi-github" /> GitHub
                </a>
                <a
                  href={typedGeneric.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  <div class="i-mdi-linkedin" /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div class="border-t border-gray-200 dark:border-dark-700 pt-8 text-center">
            <p class="text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} {typedGeneric.name}. All rights reserved.
            </p>
            <div class="flex justify-center gap-6 mt-4">
              <a
                href={`mailto:${typedGeneric.email}`}
                class="text-gray-500 dark:text-gray-500 hover:text-primary transition-colors"
              >
                <div class="i-material-symbols-mail-outline w-6 h-6" />
              </a>
              <a
                href={typedGeneric.github_link}
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-500 dark:text-gray-500 hover:text-primary transition-colors"
              >
                <div class="i-mdi-github w-6 h-6" />
              </a>
              <a
                href={typedGeneric.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-500 dark:text-gray-500 hover:text-primary transition-colors"
              >
                <div class="i-mdi-linkedin w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
