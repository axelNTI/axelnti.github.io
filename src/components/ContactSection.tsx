import generic from "@/data/generic.json";
import type { genericType } from "@/types/globals";

export default () => {
  const typedGeneric = generic as genericType;

  return (
    <section
      id="contact"
      class="py-16 bg-light-100 dark:bg-dark-900 text-dark-800 dark:text-light-100 font-sans"
    >
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
    </section>
  );
};
