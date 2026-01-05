
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  longContent: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular: boolean;
  cta: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  growth: string;
  metric: string;
  image: string;
  summary: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  socials: {
    linkedin?: string;
    twitter?: string;
  };
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}
