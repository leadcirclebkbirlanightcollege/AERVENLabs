import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
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
      className="min-h-screen bg-white text-[#101828] overflow-x-hidden"
    >
      <div className="container-architectural relative z-10 py-16 sm:py-24 lg:py-32 space-y-16 sm:space-y-24">
        {/* Dedicated Page Header */}
        <motion.header
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 border-b border-[#E6E9EF] pb-12 sm:pb-16"
        >
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#667085]">
            <Link to="/" className="hover:text-[#101828] transition-colors duration-200">
              HOME
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#101828] font-medium" aria-current="page">
              PARTNERS
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Eyebrow & Status */}
            <div className="lg:col-span-4 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F1F3F6] border border-[#E6E9EF] rounded-full text-xs font-mono text-[#315EFA]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#315EFA]" aria-hidden="true" />
                <span>{partnersSectionConfig.eyebrow}</span>
              </div>
              <p className="text-xs text-[#667085] font-mono tracking-widest uppercase">
                {partnersSectionConfig.metaLabel}
              </p>
            </div>

            {/* Right Column: Monumental Headline & Narrative */}
            <div className="lg:col-span-8 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#101828] leading-[1.08]">
                {partnersSectionConfig.headline}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-[#667085] leading-relaxed max-w-3xl font-sans">
                {partnersSectionConfig.description}
              </p>
            </div>
          </div>
        </motion.header>

        {/* Infrastructure Partner Modules */}
        <section aria-label="Infrastructure partners catalogue" className="space-y-12 sm:space-y-16">
          <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-4">
            <span className="text-xs font-mono text-[#315EFA] tracking-widest uppercase font-semibold">
              FOUNDATIONAL PLATFORMS // INFRASTRUCTURE
            </span>
            <span className="text-xs text-[#667085] font-mono">
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
                  className="editorial-card p-8 sm:p-10 lg:p-12 space-y-8 rounded-[16px] hover:border-[#315EFA]/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    {/* Module Top Bezel */}
                    <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-4">
                      <span className="font-mono text-xs font-semibold text-[#315EFA] tracking-wider">
                        {partner.infraId}
                      </span>
                      <span className="text-xs text-[#667085] font-mono uppercase">
                        {partner.category}
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
                            <path d="M37.5 0L75 65H0L37.5 0Z" fill="#101828" />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Partner Name & Role */}
                    <div className="space-y-1.5">
                      <p className="text-xs text-[#667085] font-mono tracking-wider uppercase">
                        {partner.techRole}
                      </p>
                      <h2 className="text-2xl font-bold text-[#101828] tracking-tight">
                        {partner.name}
                      </h2>
                    </div>

                    {/* Hairline Accent Divider */}
                    <div className="h-[1px] w-12 bg-[#315EFA]/30" aria-hidden="true" />

                    {/* Factual Infrastructure Description */}
                    <p className="text-sm sm:text-base text-[#667085] leading-relaxed font-sans">
                      {partner.description}
                    </p>

                    {/* Technical Specifications Sub-matrix */}
                    {specs.length > 0 && (
                      <div className="pt-4 border-t border-[#E6E9EF] grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {specs.map((item) => (
                          <div key={item.label} className="space-y-0.5">
                            <span className="text-[10px] font-mono text-[#667085] uppercase tracking-widest block">
                              {item.label}
                            </span>
                            <span className="text-xs font-mono text-[#101828] font-medium">
                              {item.detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* External Verified Link */}
                  {partner.websiteUrl && (
                    <div className="pt-6 border-t border-[#E6E9EF]">
                      <a
                        href={partner.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${partner.name}'s official website (opens in a new tab)`}
                        className="inline-flex items-center gap-2 text-xs font-mono text-[#315EFA] hover:text-[#254dd4] transition-colors duration-200 min-h-[44px] py-2 font-medium"
                      >
                        <span className="uppercase tracking-wider">
                          VISIT {partner.name.toUpperCase()} INFRASTRUCTURE
                        </span>
                        <ArrowUpRight className="h-4 w-4" />
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
          className="bg-[#F7F8FA] border border-[#E6E9EF] p-8 sm:p-12 rounded-[16px] space-y-6"
        >
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-[#315EFA]" aria-hidden="true" />
            <span className="font-mono text-xs font-semibold text-[#101828] tracking-wider uppercase">
              INFRASTRUCTURE MANDATE // DISCIPLINE
            </span>
          </div>

          <p className="text-sm sm:text-base text-[#667085] leading-relaxed max-w-3xl font-sans">
            AERVENLabs deploys software exclusively to isolated, verified infrastructure tiers. We do not maintain unauthenticated backend endpoints, unencrypted public transmission lines, or unverified hosting providers. Every layer is monitored for availability and data integrity.
          </p>

          <div className="pt-4 border-t border-[#E6E9EF] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#667085] uppercase">
            <span>DNS // GLOBAL RESILIENCE</span>
            <span>EDGE // VERCEL PRODUCTION</span>
            <span className="text-[#315EFA] font-medium">SECURITY // ZERO DATA MONETIZATION</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PartnersPage;
