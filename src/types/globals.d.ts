export type educationType =
  | {
      institution: string;
      location: string;
      title: string;
      program: never;
      time: {
        start: string;
        end: string;
      };
    }
  | {
      institution: string;
      location: string;
      title: never;
      program: string;
      time: {
        start: string;
        end: string;
      };
    };

export type workType = {
  type: string;
  employer: string;
  location: string;
  position: string;
  time: {
    start: string;
    end: string;
  };
};

export type linksType = {
  type: "github" | "website" | "download" | "pdf";
  link: string;
};

export type projectsType = {
  name: string;
  type: "group" | "solo";
  description: string;
  technology_keys: string[];
  links: linksType[];
};

export type otherType = {
  name: string;
  issuer?: string;
  date?: string;
  score?: string;
  link?: string;
};

export type languageType = {
  language: string;
  level: string;
  icon: string;
};

export type genericType = {
  name: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  github_link: string;
  linkedin: string;
};
