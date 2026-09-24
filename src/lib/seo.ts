import { BreadcrumbItem, Company, Project } from '../types';
import { siteConfig } from '../config/site';

/**
 * SEO & Structured Data (JSON-LD) generation utilities.
 * Follows schema.org standards for Organization, WebSite, SoftwareApplication, and BreadcrumbList.
 */

/** Normalise a URL path and prepend the canonical base. */
export function getCanonicalUrl(path: string = ''): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.url}${cleanPath === '/' ? '' : cleanPath}`;
}

/**
 * Organization schema — legal entity identity.
 * No speculative data: only verified, factual fields are included.
 */
export function generateOrganizationSchema(
  company: Company = {
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    tagline: siteConfig.tagline,
    description: siteConfig.description,
    email: siteConfig.email,
    websiteUrl: siteConfig.url,
    socialLinks: siteConfig.links,
  }
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: company.name,
    legalName: company.legalName,
    url: company.websiteUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.url}/assets/aervenlabs-logo.png`,
    },
    description: company.description,
    email: company.email,
    sameAs: Object.values(company.socialLinks).filter(Boolean),
  };
}

/**
 * WebSite schema — site-level entity with @id anchor.
 */
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      '@id': `${siteConfig.url}/#organization`,
    },
  };
}

/**
 * WebPage schema — per-route page entity.
 */
export function generateWebPageSchema(opts: {
  title: string;
  description: string;
  path: string;
}) {
  const url = getCanonicalUrl(opts.path);
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: opts.title,
    description: opts.description,
    isPartOf: { '@id': `${siteConfig.url}/#website` },
    publisher: { '@id': `${siteConfig.url}/#organization` },
  };
}

/**
 * SoftwareApplication schema — for project/product pages.
 */
export function generateSoftwareApplicationSchema(project: Project) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.title,
    applicationCategory: project.category,
    operatingSystem: 'All',
    description: project.description,
    url:
      project.links?.demo ||
      `${siteConfig.url}/projects/${project.slug}`,
    author: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.legalName,
    },
  };
}

/**
 * BreadcrumbList schema — for inner route navigation context.
 */
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

/**
 * @graph composer — wraps multiple schema objects into a single JSON-LD block.
 * Prevents duplicate <script> tags and validates as a single structured-data unit.
 */
export function generateGraphSchema(...schemas: object[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': schemas,
  };
}

/** Serialise a schema object to a JSON-LD string. */
export function generateJsonLdScript(schema: object): string {
  return JSON.stringify(schema, null, 2);
}
