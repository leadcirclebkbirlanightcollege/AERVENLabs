import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ShieldCheck, Server } from 'lucide-react';
import { partnersData, partnersSectionConfig } from '../../data/partners';
import { Partner } from '../../types';

/**
 * Section 10: Technology Ecosystem & Infrastructure Partners.
 * Showcases verified technology platforms: Cloudflare & Vercel.
 * White-first presentation with protected authentic brand logos.
 */
export const Partners: React.FC = () => {
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
        duration: prefersReducedMotion ? 0.01 : 0.65,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="partners"
      aria-labelledby="partners-title"
      className="relative overflow-hidden bg-white border-b border-[#E6E9EF] py-20 sm:py-28 lg:py-32"
    >
      <div className="container-architectural relative z-10 w-full space-y-16">
        {/* Section Header */}
        <div className="grid-architectural items-start gap-8">
          <div className="lg:col-span-4 space-y-2">
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#315EFA]" />
              <span className="text-eyebrow font-mono text-xs font-semibold tracking-wider text-[#315EFA]">
                {partnersSectionConfig.eyebrow}
              </span>
            </div>
            <p className="text-xs font-mono uppercase tracking-widest text-[#667085]">
              {partnersSectionConfig.metaLabel}
            </p>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <h2
              id="partners-title"
              className="text-heading-1 sm:text-display-sm font-bold tracking-tight text-[#101828] leading-tight"
            >
              {partnersSectionConfig.headline}
            </h2>
            <p className="text-base sm:text-lg text-[#667085] max-w-2xl font-sans">
              {partnersSectionConfig.description}
            </p>
          </div>
        </div>

        {/* 2 Infrastructure Cards: Cloudflare & Vercel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {partnersData.map((partner: Partner) => (
            <motion.article
              key={partner.id}
              variants={itemVariants}
              className="editorial-card p-8 sm:p-10 flex flex-col justify-between space-y-6 group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="space-y-6">
                {/* Header Strip */}
                <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-4">
                  <span className="font-mono text-xs font-bold text-[#315EFA]">
                    {partner.infraId}
                  </span>
                  <span className="font-mono text-[11px] text-[#667085] bg-[#F7F8FA] px-2.5 py-1 rounded-[4px] border border-[#E6E9EF]">
                    {partner.category}
                  </span>
                </div>

                {/* Logo Artwork */}
                <div className="h-10 flex items-center">
                  {partner.id === 'cloudflare' && (
                    <div className="partner-logo-boundary">
                      <svg
                        viewBox="0 0 100 42"
                        className="h-8 w-auto"
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
                    <div className="partner-logo-boundary flex items-center gap-2">
                      <svg
                        viewBox="0 0 76 65"
                        className="h-7 w-auto"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-label="Vercel"
                        role="img"
                      >
                        <title>Vercel</title>
                        <path d="M37.5 0L75 65H0L37.5 0Z" fill="#101828" />
                      </svg>
                      <span className="font-bold text-lg text-[#101828] font-sans tracking-tight">Vercel</span>
                    </div>
                  )}
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-heading-2 font-bold text-[#101828]">
                    {partner.name}
                  </h3>
                  <p className="font-mono text-xs text-[#315EFA]">
                    {partner.techRole}
                  </p>
                </div>

                <p className="text-sm text-[#667085] leading-relaxed font-sans">
                  {partner.description}
                </p>
              </div>

              {partner.websiteUrl && (
                <div className="pt-4 border-t border-[#E6E9EF]">
                  <a
                    href={partner.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#101828] hover:text-[#315EFA] transition-colors"
                  >
                    <span>Visit {partner.name} Platform</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              )}
            </motion.article>
          ))}
        </motion.div>

        {/* Disclaimer / Standards Note */}
        <div className="p-6 rounded-[12px] bg-[#F7F8FA] border border-[#E6E9EF] flex items-center gap-3 text-xs text-[#667085]">
          <ShieldCheck className="h-4 w-4 text-[#315EFA] shrink-0" />
          <span>
            Infrastructure relationships reflect verified technical hosting and security layers. AERVENLabs maintains isolated deployment targets and does not claim unconfirmed sponsorships.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Partners;
