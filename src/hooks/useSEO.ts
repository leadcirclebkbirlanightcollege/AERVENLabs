import { useEffect, useRef } from 'react';
import { SEOConfig } from '../types';
import { defaultSEO } from '../data/seo';
import { getCanonicalUrl } from '../lib/seo';

/** Unique marker attribute used to identify managed JSON-LD script tags. */
const JSON_LD_ATTR = 'data-agy-jsonld';

/**
 * Custom React hook for dynamic document head SEO management.
 * Dynamically updates title, meta tags, canonical link, and JSON-LD schema.
 *
 * JSON-LD scripts are deduplicated via a `data-agy-jsonld` attribute so that
 * navigating between routes never accumulates stale structured-data blocks.
 */
export function useSEO(config?: Partial<SEOConfig>, jsonLdSchema?: object) {
  const scriptRef = useRef<HTMLScriptElement | null>(null);

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

    // ── Title ────────────────────────────────────────────────────────────────
    document.title = mergedConfig.title;

    // ── Helper: upsert a <meta> element ─────────────────────────────────────
    const setMetaTag = (
      attributeName: string,
      attributeValue: string,
      content: string
    ) => {
      let element = document.querySelector(
        `meta[${attributeName}="${attributeValue}"]`
      ) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // ── Standard meta ────────────────────────────────────────────────────────
    if (mergedConfig.description) {
      setMetaTag('name', 'description', mergedConfig.description);
    }
    if (mergedConfig.robots) {
      setMetaTag('name', 'robots', mergedConfig.robots);
    }
    if (mergedConfig.keywords && mergedConfig.keywords.length > 0) {
      setMetaTag('name', 'keywords', mergedConfig.keywords.join(', '));
    }

    // ── Canonical link ───────────────────────────────────────────────────────
    const canonicalHref =
      mergedConfig.canonicalUrl || getCanonicalUrl(window.location.pathname);
    let canonicalLink = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalHref);

    // ── Open Graph ───────────────────────────────────────────────────────────
    if (mergedConfig.openGraph?.title) {
      setMetaTag('property', 'og:title', mergedConfig.openGraph.title);
    }
    if (mergedConfig.openGraph?.description) {
      setMetaTag(
        'property',
        'og:description',
        mergedConfig.openGraph.description
      );
    }
    if (mergedConfig.openGraph?.type) {
      setMetaTag('property', 'og:type', mergedConfig.openGraph.type);
    }
    setMetaTag('property', 'og:url', canonicalHref);
    if (mergedConfig.openGraph?.siteName) {
      setMetaTag('property', 'og:site_name', mergedConfig.openGraph.siteName);
    }

    // ── Twitter Card ─────────────────────────────────────────────────────────
    if (mergedConfig.twitter?.card) {
      setMetaTag('name', 'twitter:card', mergedConfig.twitter.card);
    }
    if (mergedConfig.twitter?.title) {
      setMetaTag('name', 'twitter:title', mergedConfig.twitter.title);
    }
    if (mergedConfig.twitter?.description) {
      setMetaTag(
        'name',
        'twitter:description',
        mergedConfig.twitter.description
      );
    }

    // ── JSON-LD structured data (deduplicated) ───────────────────────────────
    // Remove any previously injected script before writing a new one.
    const existing = document.querySelector(
      `script[type="application/ld+json"][${JSON_LD_ATTR}]`
    );
    if (existing) {
      existing.parentNode?.removeChild(existing);
      scriptRef.current = null;
    }

    if (jsonLdSchema) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute(JSON_LD_ATTR, 'true');
      script.text = JSON.stringify(jsonLdSchema);
      document.head.appendChild(script);
      scriptRef.current = script;
    }

    // ── Cleanup on unmount ───────────────────────────────────────────────────
    return () => {
      if (scriptRef.current && scriptRef.current.parentNode) {
        scriptRef.current.parentNode.removeChild(scriptRef.current);
        scriptRef.current = null;
      }
    };
  }, [config, jsonLdSchema]);
}
