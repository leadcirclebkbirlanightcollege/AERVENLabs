import { BreadcrumbItem, Company, Project } from '../types';
import { siteConfig } from '../config/site';

/**
 * SEO & Structured Data (JSON-LD) generation utilities.
 * Follows schema.org standards for Organization, WebSite, SoftwareApplication, and BreadcrumbList.
 */

export function getCanonicalUrl(path: string = ''): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.url}${cleanPath === '/' ? '' : cleanPath}`;
}

export function generateOrganizationSchema(company: Company = {
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  tagline: siteConfig.tagline,
  description: siteConfig.description,
  email: siteConfig.email,
  websiteUrl: siteConfig.url,
  socialLinks: siteConfig.links,
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.name,
    legalName: company.legalName,
    url: company.websiteUrl,
    logo: `${siteConfig.url}/assets/aervenlabs-logo.png`,
    description: company.description,
    email: company.email,
    sameAs: Object.values(company.socialLinks).filter(Boolean),
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };
}

export function generateSoftwareApplicationSchema(project: Project) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.title,
    applicationCategory: project.category,
    operatingSystem: 'All',
    description: project.description,
    url: project.links?.demo || `${siteConfig.url}/projects/${project.slug}`,
    author: {
      '@type': 'Organization',
      name: siteConfig.legalName,
    },
  };
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: getCanonicalUrl(item.path),
    })),
  };
}

export function generateJsonLdScript(schema: object): string {
  return JSON.stringify(schema, null, 2);
}
