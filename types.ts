
export interface Skill {
  name: string;
  icon: string;
  description?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  description?: string;
  items: string[];
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

export interface ExperienceItem {
  id: number;
  period: string;
  statusTag?: string;
  company?: string;
  role: string;
  description?: string;
  tasks?: string[];
  tags: string[];
  isCurrent?: boolean;
}

export type Theme = 'light' | 'dark';
