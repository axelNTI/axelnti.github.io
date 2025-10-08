import Icon from "@/components/Icon";
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
            <p class="text-gray-600 mb-4">
              A passionate developer focused on creating clean, efficient, and user-friendly applications using modern
              technologies.
            </p>
            <div class="flex items-center gap-2">
              <Icon icon="map" /> {typedGeneric.location}
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold mb-4">Quick Links</h3>
            <ul class="flex flex-col gap-2">
              <li>
                <a
                  href="#hero"
                  class="text-gray-600 hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  class="text-gray-600 hover:text-primary transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  class="text-gray-600 hover:text-primary transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  class="text-gray-600 hover:text-primary transition-colors"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#certifications"
                  class="text-gray-600 hover:text-primary transition-colors"
                >
                  Other Merits
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-bold mb-4">Contact Me</h3>
            <div class="flex flex-col gap-3">
              <a
                href={`mailto:${typedGeneric.email}`}
                class="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
              >
                <Icon icon="mail" /> {typedGeneric.email}
              </a>
              <a
                href={`tel:${typedGeneric.phone.replace(/\s|-/g, "")}`}
                class="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
              >
                <Icon icon="phone" /> {typedGeneric.phone}
              </a>
              <a
                href={typedGeneric.github_link}
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
              >
                <Icon icon="github" /> GitHub
              </a>
              <a
                href={typedGeneric.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
              >
                <Icon icon="linkedin" /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-200 pt-8 text-center">
          <p class="text-gray-600">
            © {new Date().getFullYear()} {typedGeneric.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
