/**
 * Core type definitions for AervenLabs Technologies Pvt. Ltd. website.
 * These types establish strong typing for all structured data models.
 */

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  youtube?: string;
  instagram?: string;
  email?: string;
}

export interface Company {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  email: string;
  websiteUrl: string;
  socialLinks: SocialLinks;
}

export interface OriginPhilosophy {
  sectionId: string;
  eyebrow: string;
  headline: string;
  paragraphs: string[];
  principles: { label: string; detail: string }[];
}

export interface NavigationItem {
  id: string;
  label: string;
  path: string;
  isExternal?: boolean;
  order: number;
}

export interface JourneyMilestone {
  id: string;
  year?: string;
  date?: string;
  phase?: string;
  category?: string;
  title: string;
  shortStatement: string;
  description?: string;
  order: number;
}

export interface Capability {
  id: string;
  title: string;
  tagline?: string;
  category: string;
  description: string;
  shortDescription?: string;
  systemCode?: string;
  discipline?: string;
  technologies?: string[];
  order: number;
}

export type ProjectStatus = 'concept' | 'in-development' | 'active' | 'archived';

export interface ProjectLinks {
  demo?: string;
  github?: string;
  caseStudy?: string;
  playStore?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  capabilities: string[];
  features?: string[];
  discipline?: string;
  platforms?: string[];
  technologies?: string[];
  metrics?: Record<string, string>;
  status: ProjectStatus;
  featured: boolean;
  image?: string;
  links?: ProjectLinks;
  order?: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  discipline?: string;
  bio?: string;
  image?: string;
  links?: SocialLinks;
  order: number;
  featured?: boolean;
}

export interface Partner {
  id: string;
  name: string;
  category: string;
  role: string;
  description?: string;
  infraId?: string;
  techRole?: string;
  websiteUrl?: string;
  logo?: string;
}

export interface OpenGraphMetadata {
  title?: string;
  description?: string;
  type?: 'website' | 'article' | 'profile';
  url?: string;
  image?: string;
  siteName?: string;
}

export interface TwitterMetadata {
  card?: 'summary' | 'summary_large_image';
  title?: string;
  description?: string;
  image?: string;
  creator?: string;
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface SEOConfig {
  title: string;
  description: string;
  canonicalUrl?: string;
  openGraph?: OpenGraphMetadata;
  twitter?: TwitterMetadata;
  keywords?: string[];
  robots?: string;
  breadcrumbs?: BreadcrumbItem[];
}
