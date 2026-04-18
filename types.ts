
export interface Skill {
  name: string;
  icon: string;
  description?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

export interface ProfessionalProject {
  id: number;
  role: string;
  company: string;
  location: string;
  date: string;
  tasks: string[];
}

export type Theme = 'light' | 'dark';
