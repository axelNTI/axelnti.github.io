import type { projectsType } from "@/types/globals";

const projects: projectsType[] = [
  {
    name: "Återbrukslabbet",
    type: "group",
    description:
      "Återbrukslabbet is a discontinued project, but was a webpage where companies could donate their unused items to schools, and schools could request items they need. The goal was to reduce waste and promote sustainability while reducing costs for schools. While the website has been taken down, the repository is still public.",
    technology_keys: [
      "nextjs",
      "tailwindcss",
      "typescript",
      "prisma",
      "clerk",
      "shadcn",
      "nodejs",
      "postgresql",
      "githubactions",
      "playwright",
      "husky",
    ],
    links: [
      {
        type: "github",
        link: "https://github.com/axelNTI/Stuns-Aterbrukslabbet/",
      },
    ],
  },
  {
    name: "Horizon Modding Studio",
    type: "solo",
    description:
      "Horizon Modding Studio is an open source tool currently in development to make modding Stellaris more accessible.",
    technology_keys: ["tauri", "typescript", "react", "vite", "unocss", "githubactions", "nodejs", "husky", "biomejs"],
    links: [
      {
        type: "github",
        link: "https://github.com/axelNTI/horizon-modding-studio/",
      },
      {
        type: "download",
        link: "https://github.com/axelNTI/horizon-modding-studio/releases/",
      },
    ],
  },
  {
    name: "Portfolio",
    type: "solo",
    description:
      "This portfolio is a personal project to showcase my skills and projects. It is hosted on GitHub Pages and built with a focus on both performance and ease of development.",
    technology_keys: ["typescript", "preact", "vite", "unocss", "githubactions", "nodejs", "biomejs"],
    links: [
      {
        type: "github",
        link: "https://github.com/axelNTI/axelnti.github.io/",
      },
    ],
  },
  {
    name: "Classroom Seating Planner",
    type: "group",
    description:
      "Classroom Seating Planner is a tool for teachers to plan seating arrangements in classrooms. The main focus of the project was creating an efficient algorithm to find the best seating arrangement based on various constraints.",
    technology_keys: ["wpf", "csharp", "dotnet"],
    links: [
      {
        type: "github",
        link: "https://github.com/NTIG-Uppsala/Classroom-Seating-Planner/",
      },
      {
        type: "download",
        link: "https://github.com/NTIG-Uppsala/Classroom-Seating-Planner/releases/",
      },
    ],
  },
  {
    name: "Diploma Project",
    type: "solo",
    description:
      "My High School diploma project was a comparative analysis of different sorting algorithms. I implemented several sorting algorithms in Python and extensively tested their performance using various datasets.",
    technology_keys: ["python", "plotly"],
    links: [
      {
        type: "github",
        link: "https://github.com/axelNTI/Gymnasiearbete/",
      },
      {
        type: "pdf",
        link: "./documents/Axel-Thornberg-Diploma-Project.pdf",
      },
    ],
  },
  {
    name: "Table Placement Optimiser",
    type: "group",
    description:
      "A spiritual successor to Classroom Seating Planner, Table Placement Optimiser aims to be a general purpose tool to generate seating arrangements in a wide range of applications. With its innovative system of 'wildcards' it allows for only a small amount of constraints to be used for most situations.",
    technology_keys: ["typescript", "nodejs", "biomejs", "express", "handlebars"],
    links: [
      {
        type: "github",
        link: "https://github.com/axelNTI/table-placement-optimiser/",
      },
    ],
  },
  {
    name: "Orbital Simulator",
    type: "group",
    description:
      "Group project from my Introduction to Information Technology course. The project is an orbital simulator where users can create and simulate the movement of various celestial bodies. The main focus of the project was to implement accurate physics calculations.",
    technology_keys: ["python", "pygame", "pandas", "matplotlib"],
    links: [
      {
        type: "github",
        link: "https://github.com/axelNTI/orbital-simulator/",
      },
    ],
  },
];

export default projects;
