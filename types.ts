
export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Mobile' | 'Cloud & BaaS' | 'DevOps & Tools' | 'Embedded / Low-level';
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  link?: string;
}
