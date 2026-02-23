import { Language } from "@/constants/languages";

export interface IAbout {
  aboutMeContent: string[];
  technicalStack: string[];
  softSkills: string[];
  showCvButton?: boolean;
}

export interface ProjectCardProps {
  title: string;
  description: string[];
  tags: string[];
  mainLanguage: Language;
  githubUrl?: string;
  status?: string;
}

export interface ExperimentCardProps {
  title: string;
  description: string;
  mainLanguage: Language;
  githubUrl?: string;
  type: "fork" | "merged" | "tool";
}

export interface JourneyItemProps {
  title: string;
  period: string;
  description: string;
}

export interface PortfolioData {
  about: IAbout;
  projects: ProjectCardProps[];
  experiments: ExperimentCardProps[];
  milestones: JourneyItemProps[];
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  telegram?: string;
}
