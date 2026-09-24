import { useEffect } from 'react';
import { SEOConfig } from '../types';
import { defaultSEO } from '../data/seo';
import { getCanonicalUrl } from '../lib/seo';

/**
 * Custom React hook for dynamic document head SEO management.
 * Dynamically updates title, meta tags, canonical link, and JSON-LD schema.
 */
export function useSEO(config?: Partial<SEOConfig>, jsonLdSchema?: object) {
  useEffect(() => {
    const mergedConfig: SEOConfig = {
      ...defaultSEO,
      ...config,
      openGraph: {
        ...defaultSEO.openGraph,
        ...config?.openGraph,
      },
      twitter: {
        ...defaultSEO.twitter,
        ...config?.twitter,
      },
    };

    // Update title
    document.title = mergedConfig.title;

    // Helper to set or create meta tag
    const setMetaTag = (attributeName: string, attributeValue: string, content: string) => {
      let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Description & robots
    if (mergedConfig.description) {
      setMetaTag('name', 'description', mergedConfig.description);
    }
    if (mergedConfig.robots) {
      setMetaTag('name', 'robots', mergedConfig.robots);
    }
    if (mergedConfig.keywords && mergedConfig.keywords.length > 0) {
      setMetaTag('name', 'keywords', mergedConfig.keywords.join(', '));
    }

    // Canonical link
    const canonicalHref = mergedConfig.canonicalUrl || getCanonicalUrl(window.location.pathname);
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalHref);

    // Open Graph
    if (mergedConfig.openGraph?.title) {
      setMetaTag('property', 'og:title', mergedConfig.openGraph.title);
    }
    if (mergedConfig.openGraph?.description) {
      setMetaTag('property', 'og:description', mergedConfig.openGraph.description);
    }
    if (mergedConfig.openGraph?.type) {
      setMetaTag('property', 'og:type', mergedConfig.openGraph.type);
    }
    setMetaTag('property', 'og:url', canonicalHref);

    // Twitter
    if (mergedConfig.twitter?.card) {
      setMetaTag('name', 'twitter:card', mergedConfig.twitter.card);
    }
    if (mergedConfig.twitter?.title) {
      setMetaTag('name', 'twitter:title', mergedConfig.twitter.title);
    }
    if (mergedConfig.twitter?.description) {
      setMetaTag('name', 'twitter:description', mergedConfig.twitter.description);
    }

    // JSON-LD structured data script
    let scriptElement: HTMLScriptElement | null = null;
    if (jsonLdSchema) {
      scriptElement = document.createElement('script');
      scriptElement.type = 'application/ld+json';
      scriptElement.text = JSON.stringify(jsonLdSchema);
      document.head.appendChild(scriptElement);
    }

    return () => {
      if (scriptElement && scriptElement.parentNode) {
        scriptElement.parentNode.removeChild(scriptElement);
      }
    };
  }, [config, jsonLdSchema]);
}
