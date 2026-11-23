import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Code, Globe, Smartphone, Server, Shield, Sparkles, CheckCircle2 } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { routeSEOConfig } from '../data/seo';
import { generateBreadcrumbSchema } from '../lib/seo';
import { capabilitiesData, capabilitiesSectionConfig } from '../data/capabilities';

export const WhatWeBuildPage: React.FC = () => {
  useSEO(
    routeSEOConfig.whatWeBuild,
    routeSEOConfig.whatWeBuild?.breadcrumbs
      ? generateBreadcrumbSchema(routeSEOConfig.whatWeBuild.breadcrumbs)
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
        duration: prefersReducedMotion ? 0.01 : 0.65,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const icons = [Code, Globe, Smartphone, Server, Shield, Sparkles];

  return (
    <div
      data-testid="route-what-we-build"
      className="min-h-screen bg-white text-[#101828] selection:bg-[#DCE5FF] selection:text-[#101828] overflow-x-hidden"
    >
      <div className="container-architectural relative z-10 py-12 sm:py-20 lg:py-24 space-y-16 sm:space-y-24">
        {/* Page Header */}
        <motion.header
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 border-b border-[#E6E9EF] pb-10 sm:pb-14"
        >
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#667085]">
            <Link to="/" className="hover:text-[#101828] transition-colors">
              HOME
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#101828] font-semibold" aria-current="page">
              WHAT WE BUILD
            </span>
          </nav>

          <div className="grid-architectural items-start gap-8">
            <div className="lg:col-span-4 space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#315EFA]" />
                <span className="text-eyebrow font-mono text-xs font-semibold tracking-wider text-[#315EFA]">
                  AERVENLABS // CAPABILITIES
                </span>
              </div>
              <p className="text-xs font-mono uppercase tracking-widest text-[#667085]">
                SYSTEMS ARCHITECTURE & SOFTWARE ENGINEERING
              </p>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <h1 className="text-heading-1 sm:text-display-sm lg:text-display font-bold tracking-tight text-[#101828] leading-[1.05]">
                {capabilitiesSectionConfig.headline}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-[#667085] leading-relaxed max-w-3xl font-sans">
                {capabilitiesSectionConfig.description}
              </p>
            </div>
          </div>
        </motion.header>

        {/* 6 Capabilities In-Depth Grid */}
        <section aria-label="Capabilities grid" className="space-y-8">
          <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-3">
            <span className="font-mono text-xs font-semibold text-[#101828] tracking-widest uppercase">
              APPROVED ENGINEERING DISCIPLINES // 06 DOMAINS
            </span>
            <span className="font-mono text-xs text-[#667085]">
              VERIFIED ARCHITECTURE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilitiesData.map((cap, index) => {
              const IconComponent = icons[index % icons.length];
              return (
                <motion.article
                  key={cap.id}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  className="editorial-card p-7 sm:p-8 flex flex-col justify-between space-y-6 group hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="space-y-5">
                    {/* Top Bezel */}
                    <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-3.5">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-[6px] bg-[#DCE5FF] text-[#315EFA]">
                          <IconComponent className="h-4 w-4" />
                        </div>
                        <span className="font-mono text-xs font-bold text-[#315EFA]">
                          0{cap.order}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] text-[#667085] bg-[#F7F8FA] px-2.5 py-1 rounded-[4px] border border-[#E6E9EF]">
                        {cap.category}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h2 className="text-heading-3 font-bold text-[#101828] group-hover:text-[#315EFA] transition-colors">
                        {cap.title}
                      </h2>
                      <p className="text-xs font-mono text-[#667085]">
                        {cap.tagline}
                      </p>
                    </div>

                    <p className="text-sm text-[#667085] leading-relaxed font-sans">
                      {cap.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="space-y-2 pt-2 border-t border-[#E6E9EF]">
                      <span className="font-mono text-[10px] text-[#98A2B3] uppercase block">
                        STACK INTEGRATIONS //
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {cap.technologies?.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 rounded-[4px] bg-[#F7F8FA] border border-[#E6E9EF] font-mono text-[11px] text-[#101828]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E6E9EF] flex items-center justify-between text-xs font-mono text-[#98A2B3]">
                    <span>{cap.systemCode}</span>
                    <span className="text-[#315EFA] font-medium">OPERATIONAL</span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* Closing Action Block */}
        <div className="p-8 sm:p-12 rounded-[16px] bg-[#F7F8FA] border border-[#E6E9EF] shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h3 className="font-bold text-lg text-[#101828]">
              Ready to explore our software in production?
            </h3>
            <p className="text-sm text-[#667085]">
              Explore our project portfolio or connect with our engineering collective to discuss custom platforms.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[8px] bg-[#101828] text-white hover:bg-[#315EFA] text-sm font-semibold transition-colors shadow-sm"
            >
              <span>Explore Projects</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[8px] bg-white border border-[#E6E9EF] text-[#101828] hover:bg-[#F1F3F6] text-sm font-semibold transition-colors shadow-sm"
            >
              <span>Start Conversation</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeBuildPage;
