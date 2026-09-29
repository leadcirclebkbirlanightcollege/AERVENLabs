import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight, ShieldCheck, Server, Globe2 } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { routeSEOConfig } from '../data/seo';
import { generateBreadcrumbSchema } from '../lib/seo';
import { partnersData, partnersSectionConfig } from '../data/partners';
import { Partner } from '../types';

export const PartnersPage: React.FC = () => {
  useSEO(
    routeSEOConfig.partners,
    routeSEOConfig.partners?.breadcrumbs
      ? generateBreadcrumbSchema(routeSEOConfig.partners.breadcrumbs)
      : undefined
  );

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
        delayChildren: prefersReducedMotion ? 0 : 0.04,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: prefersReducedMotion ? 1 : 0,
      y: prefersReducedMotion ? 0 : 16,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  // Technical architectural specifications for verified partners
  const partnerTechnicalSpecs: Record<string, { label: string; detail: string }[]> = {
    cloudflare: [
      { label: 'GLOBAL ROUTING', detail: 'Anycast DNS Resolution' },
      { label: 'EDGE SECURITY', detail: 'Automated DDoS Mitigation & WAF' },
      { label: 'ENCRYPTION', detail: 'Strict TLS 1.3 Edge Handshake' },
      { label: 'AVAILABILITY', detail: 'High-Fidelity Edge Resilience' },
    ],
    vercel: [
      { label: 'DEPLOYMENT PIPELINE', detail: 'Automated Continuous Delivery' },
      { label: 'EDGE NETWORK', detail: 'Sub-Second Global Edge Distribution' },
      { label: 'SERVERLESS RUNTIME', detail: 'Isolated Node.js Execution' },
      { label: 'ASSET INTEGRITY', detail: 'Immutable Production Builds' },
    ],
  };

  return (
    <div
      data-testid="route-partners"
      className="min-h-screen bg-black text-foreground selection:bg-white selection:text-black overflow-x-hidden"
    >
      {/* Background Architectural Grid Lines */}
      <div
        className="pointer-events-none absolute inset-0 select-none opacity-25"
        aria-hidden="true"
      >
        <div className="container-architectural h-full w-full">
          <div className="h-full w-full border-x border-white/[0.04]">
            <div className="grid h-full grid-cols-1 md:grid-cols-6 lg:grid-cols-12 divide-x divide-white/[0.03]">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="h-full" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container-architectural relative z-10 py-16 sm:py-24 lg:py-32 space-y-16 sm:space-y-24 lg:space-y-32">
        {/* Dedicated Page Header */}
        <motion.header
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 border-b border-border-subtle pb-12 sm:pb-16"
        >
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <Link to="/" className="hover:text-white transition-colors duration-200">
              HOME
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-white" aria-current="page">
              PARTNERS
            </span>
          </nav>

          <div className="grid-architectural items-start gap-8">
            {/* Left Column: Eyebrow & Status */}
            <div className="lg:col-span-4 space-y-3">
              <div className="inline-flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
                <span className="text-eyebrow text-neutral-400">
                  {partnersSectionConfig.eyebrow}
                </span>
              </div>
              <p className="text-tech-label text-neutral-500 font-mono tracking-widest">
                {partnersSectionConfig.metaLabel}
              </p>
            </div>

            {/* Right Column: Monumental Headline & Narrative */}
            <div className="lg:col-span-8 space-y-6">
              <h1 className="text-heading-1 sm:text-display-sm lg:text-display font-semibold tracking-tight text-white uppercase leading-[0.95] select-none">
                {partnersSectionConfig.headline}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-secondary-text leading-relaxed max-w-3xl font-sans">
                {partnersSectionConfig.description}
              </p>
            </div>
          </div>
        </motion.header>

        {/* Infrastructure Partner Modules */}
        <section aria-label="Infrastructure partners catalogue" className="space-y-12 sm:space-y-16">
          <div className="flex items-center justify-between border-b border-border-subtle pb-4">
            <span className="text-tech-label text-neutral-400 font-mono tracking-widest uppercase">
              FOUNDATIONAL PLATFORMS // INFRASTRUCTURE
            </span>
            <span className="text-tech-label text-neutral-500 font-mono">
              VERIFIED RELATIONSHIPS
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {partnersData.map((partner: Partner) => {
              const specs = partnerTechnicalSpecs[partner.id] || [];

              return (
                <motion.article
                  key={partner.id}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  className="surface-level-1 p-8 sm:p-10 lg:p-12 space-y-8 rounded-[2px] border border-border-subtle hover:border-white/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    {/* Module Top Bezel */}
                    <div className="flex items-center justify-between border-b border-border-subtle pb-4">
                      <span className="font-mono text-xs font-semibold text-white tracking-wider">
                        {partner.infraId}
                      </span>
                      <span className="text-tech-label text-neutral-500 font-mono">
                        {partner.category.toUpperCase()}
                      </span>
                    </div>

                    {/* Logo Artwork with Protected Isolation Boundary */}
                    <div className="h-12 flex items-center">
                      {partner.id === 'cloudflare' && (
                        <div className="partner-logo-boundary">
                          <svg
                            viewBox="0 0 100 42"
                            className="h-9 w-auto"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-label="Cloudflare"
                            role="img"
                          >
                            <title>Cloudflare</title>
                            <path
                              d="M68.5 13.5C66.5 6 59.8 0.5 51.8 0.5C45.2 0.5 39.4 4.3 36.6 9.8C34.7 8.8 32.5 8.2 30.1 8.2C22.6 8.2 16.5 14.1 16.2 21.5C14.3 20.7 12.2 20.3 10 20.3C4.5 20.3 0 24.8 0 30.3C0 35.8 4.5 40.3 10 40.3H68.8C75.8 40.3 81.5 34.6 81.5 27.6C81.5 20.8 76.1 15.2 69.4 14.8"
                              fill="#F38020"
                            />
                            <path
                              d="M72.2 16.2C71.5 16.1 70.8 16 70.1 16C68.9 11.2 65.5 7.4 60.9 5.4C63.6 7.9 65.4 11.4 65.8 15.3C66.4 15.4 67 15.5 67.6 15.7C74.3 17.5 78.8 23.3 78.8 30.2C78.8 30.7 78.8 31.2 78.7 31.7C81.5 29.8 83.3 26.6 83.3 23C83.3 17.6 79.4 13.1 74.2 12.2"
                              fill="#FAAE40"
                            />
                          </svg>
                        </div>
                      )}

                      {partner.id === 'vercel' && (
                        <div className="partner-logo-boundary">
                          <svg
                            viewBox="0 0 76 65"
                            className="h-8 w-auto"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-label="Vercel"
                            role="img"
                          >
                            <title>Vercel</title>
                            <path d="M37.5 0L75 65H0L37.5 0Z" fill="#FFFFFF" />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Partner Name & Role */}
                    <div className="space-y-1.5">
                      <p className="text-tech-label text-neutral-400 font-mono tracking-wider">
                        {partner.techRole}
                      </p>
                      <h2 className="text-heading-2 font-semibold text-white tracking-tight">
                        {partner.name}
                      </h2>
                    </div>

                    {/* Hairline Accent Divider */}
                    <div className="h-[1px] w-12 bg-white/20" aria-hidden="true" />

                    {/* Factual Infrastructure Description */}
                    <p className="text-sm sm:text-base text-secondary-text leading-relaxed font-sans">
                      {partner.description}
                    </p>

                    {/* Technical Specifications Sub-matrix */}
                    {specs.length > 0 && (
                      <div className="pt-4 border-t border-border-subtle grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {specs.map((item) => (
                          <div key={item.label} className="space-y-0.5">
                            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">
                              {item.label}
                            </span>
                            <span className="text-xs font-mono text-neutral-300">
                              {item.detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* External Verified Link */}
                  {partner.websiteUrl && (
                    <div className="pt-6 border-t border-border-subtle">
                      <a
                        href={partner.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${partner.name}'s official website (opens in a new tab)`}
                        className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors duration-200 min-h-[48px] py-2"
                      >
                        <span className="uppercase tracking-wider">
                          VISIT {partner.name.toUpperCase()} INFRASTRUCTURE
                        </span>
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </div>
                  )}
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* Strategic Infrastructure Mandate Box */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="surface-level-1 border border-border-subtle p-8 sm:p-12 rounded-[2px] space-y-6"
        >
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-white" aria-hidden="true" />
            <span className="font-mono text-xs font-semibold text-white tracking-wider uppercase">
              INFRASTRUCTURE MANDATE // DISCIPLINE
            </span>
          </div>

          <p className="text-sm sm:text-base text-secondary-text leading-relaxed max-w-3xl font-sans">
            AervenLabs deploys software exclusively to isolated, verified infrastructure tiers. We do not maintain unauthenticated backend endpoints, unencrypted public transmission lines, or unverified hosting providers. Every layer is monitored for availability and data integrity.
          </p>

          <div className="pt-4 border-t border-border-subtle flex flex-wrap items-center justify-between gap-4 text-[10px] font-mono text-neutral-500 uppercase">
            <span>DNS // GLOBAL RESILIENCE</span>
            <span>EDGE // VERCEL PRODUCTION</span>
            <span>SECURITY // ZERO LEAKAGE</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PartnersPage;
