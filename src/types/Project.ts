export type Project = {
  slug: string;
  name: string;
  description: string;
  lengthyDescription: string;
  images: string[];
  link?: string;
  github?: string;
  techstack: string[];
};

export default Project;
