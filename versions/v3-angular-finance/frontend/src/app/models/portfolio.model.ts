export interface PortfolioMeta {
  name: string;
  title: string;
  location: string;
  targetRoles: string[];
  availability: string;
}

export interface PortfolioContact {
  email: string | null;
  linkedin: string | null;
  github: string | null;
  website: string | null;
}

export interface PortfolioEducation {
  institution: string;
  degree: string;
  period: string;
  type: string;
  technologies: string[];
}

export interface PortfolioExperience {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface PortfolioPublication {
  title: string;
  context: string;
  year: string;
  description: string;
}

export interface PortfolioVersion {
  id: string;
  name: string;
  period: string;
  technology: string;
  status: string;
  description: string;
}

export interface PortfolioData {
  meta: PortfolioMeta;
  contact: PortfolioContact;
  education: PortfolioEducation[];
  experience: PortfolioExperience[];
  skills: { [key: string]: string[] };
  metrics: { [key: string]: { [key: string]: string | number } };
  publications: PortfolioPublication[];
  versions: PortfolioVersion[];
}
