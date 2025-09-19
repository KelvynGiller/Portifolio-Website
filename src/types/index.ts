export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  githubUrl?: string;
  technologies: string[];
  image?: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
