export interface Social {
  github?: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
  facebook?: string;
  instagram?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category?: 'frontend' | 'backend' | 'tools' | 'database' | 'other';
}

export interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'work' | 'education' | 'certificate';
}

export interface ProjectFrontmatter {
  title: string;
  date: string;
  tags: string[];
  thumb: string | string[]; // Support single image or array of images
  demo?: string;
  repo?: string;
  excerpt: string;
  roles?: string[];
  featured?: boolean;
}

export interface SiteConfig {
  title: string;
  name: string;
  role: string;
  bio: string | string[];
  avatar: string;
  email: string;
  resume: string;
  social: Social;
  skills: Skill[];
  timeline: TimelineItem[];
  experience: {
    years: number;
    status: 'available' | 'contracted' | 'busy';
  };
}
