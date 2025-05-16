import generic from "@/data/generic.json";

import type { genericType } from "@/types/globals.d.ts";

export default () => {
  const typedGeneric = generic as genericType;

  return (
    <footer class="py-16 bg-footer">
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
  );
};
