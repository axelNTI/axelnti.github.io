import generic from "@/data/generic.json";
import type { genericType } from "@/types/globals";

export default () => {
  const typedGeneric = generic as genericType;

  return (
    <section
      class="min-h-100dvh flex flex-col gap-36 items-center justify-center"
      id="hero"
    >
      <div class="flex flex-col items-center gap-4 text-align-center">
        <div class="text-4xl">Hello, I'm</div>
        <h1 class="text-5xl md:text-7xl font-bold">{typedGeneric.name}</h1>
        <div class="text-3xl">Welcome to my portfolio</div>
        <p class="text-xl md:text-2xl max-w-xl">
          I'm a developer based in {typedGeneric.location} focused on building modern web and desktop applications.
        </p>
      </div>
      <div class="max-w-lg text-align-center px-4">
        <h2 class="text-3xl font-bold mb-8 text-center">About Me</h2>
        <p class="my-8 text-lg line-height-5">
          I'm a passionate developer with experience in web and desktop application development. I pride myself on
          writing clean, structured, and efficient code while being able to employ the best tools for any given job.
        </p>
        <p class="my-8 text-lg line-height-5">
          With a background and extensive education in information technology, I enjoy finding elegant solutions to
          complex problems. I'm constantly learning and expanding my skill set to stay at the forefront of technology
          and deliver high-quality, maintainable software that solves real-world challenges.
        </p>
      </div>
    </section>
  );
};
