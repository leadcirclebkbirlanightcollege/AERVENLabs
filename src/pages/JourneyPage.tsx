import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { routeSEOConfig } from '../data/seo';
import { generateBreadcrumbSchema } from '../lib/seo';
import { journeyMilestones, journeySectionConfig } from '../data/journey';
import { JourneyMilestone } from '../types';

export const JourneyPage: React.FC = () => {
  useSEO(
    routeSEOConfig.journey,
    routeSEOConfig.journey?.breadcrumbs
      ? generateBreadcrumbSchema(routeSEOConfig.journey.breadcrumbs)
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

  const milestoneDeliverables: Record<string, string[]> = {
    'origin-foundation': [
      'Founding Conviction & Architecture Framework',
      'System Architecture Specification Standards',
      'White-First Design System Principles',
    ],
    'systems-exploration': [
      'Reactive Client Architecture Patterns',
      'PostgreSQL Relational Schema Prototyping',
      'Geist Typography Scale & Token System',
    ],
    'campus-connect-platform': [
      'Collegiate Operating System Core Architecture',
      'Timing-Safe QR & OTP Attendance Protocol',
      'PostgreSQL Row-Level Security Isolation (62 Tables)',
      'Multi-Tenant Institution Engine (college_id Partitioning)',
    ],
    'ecosystem-expansion': [
      'Edge Runtime Computing (25 Deno Functions)',
      'Zero-Auth Cryptographic Credential Protocol',
      'NagrikSetu Civic Information Access Prototype',
      'RAILVERSE Railway Simulation & Telemetry Engine',
    ],
  };

  return (
    <div
      data-testid="route-journey"
      className="min-h-screen bg-white text-[#101828] selection:bg-[#DCE5FF] selection:text-[#101828] overflow-x-hidden"
    >
      <div className="container-architectural relative z-10 py-12 sm:py-20 lg:py-24 space-y-16 sm:space-y-24">
        {/* Dedicated Page Header */}
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
              OUR JOURNEY
            </span>
          </nav>

          <div className="grid-architectural items-start gap-8">
            <div className="lg:col-span-4 space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#315EFA]" aria-hidden="true" />
                <span className="text-eyebrow font-mono text-xs font-semibold tracking-wider text-[#315EFA]">
                  AERVENLABS // EVOLUTION
                </span>
              </div>
              <p className="text-xs font-mono uppercase tracking-widest text-[#667085]">
                PROGRESSION // 04 PHASES
              </p>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <h1 className="text-heading-1 sm:text-display-sm lg:text-display font-bold tracking-tight text-[#101828] leading-[1.05]">
                {journeySectionConfig.headline}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-[#667085] leading-relaxed max-w-3xl font-sans">
                {journeySectionConfig.description}
              </p>
            </div>
          </div>
        </motion.header>

        {/* Chronological Milestone Archive Grid */}
        <section aria-label="Chronological evolution phases" className="space-y-10 sm:space-y-14">
          <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-4">
            <span className="font-mono text-xs font-semibold text-[#101828] tracking-widest uppercase">
              ARCHITECTURAL PHASES // CHRONOLOGY
            </span>
            <span className="font-mono text-xs text-[#667085]">
              VERIFIED MILESTONES
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {journeyMilestones.map((milestone: JourneyMilestone) => {
              const deliverables = milestoneDeliverables[milestone.id] || [];

              return (
                <motion.article
                  key={milestone.id}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  className="editorial-card p-8 sm:p-10 flex flex-col justify-between space-y-8 group hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="space-y-6">
                    {/* Phase Bezel */}
                    <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-4">
                      <div className="flex items-center gap-2.5">
                        <span className="h-2 w-2 rounded-full bg-[#315EFA]" aria-hidden="true" />
                        <span className="font-mono text-xs font-bold text-[#315EFA] tracking-wider">
                          {milestone.phase}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] text-[#667085] bg-[#F7F8FA] px-2.5 py-1 rounded-[4px] border border-[#E6E9EF]">
                        {milestone.category}
                      </span>
                    </div>

                    {/* Title & Short Statement */}
                    <div className="space-y-1.5">
                      <h2 className="text-heading-2 font-bold text-[#101828] group-hover:text-[#315EFA] transition-colors">
                        {milestone.title}
                      </h2>
                      <p className="text-xs font-mono text-[#667085]">
                        {milestone.shortStatement}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-[#667085] leading-relaxed font-sans">
                      {milestone.description}
                    </p>
                  </div>

                  {/* Architectural Deliverables */}
                  {deliverables.length > 0 && (
                    <div className="pt-6 border-t border-[#E6E9EF] space-y-3">
                      <span className="font-mono text-xs font-semibold text-[#101828] uppercase tracking-wider block">
                        ARCHITECTURAL DELIVERABLES //
                      </span>
                      <ul className="space-y-2" aria-label={`Deliverables for ${milestone.title}`}>
                        {deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-xs font-mono text-[#101828]"
                          >
                            <CheckCircle2 className="h-4 w-4 text-[#315EFA] mt-0.5 shrink-0" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* Strategic Next Direction Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="p-8 sm:p-12 lg:p-14 rounded-[16px] bg-[#F7F8FA] border border-[#E6E9EF] shadow-sm space-y-6"
        >
          <div className="grid-architectural items-center gap-8">
            <div className="lg:col-span-8 space-y-3">
              <span className="font-mono text-xs font-semibold text-[#315EFA] uppercase tracking-wider block">
                CONTINUOUS EVOLUTION // THE HORIZON
              </span>
              <h3 className="text-heading-2 font-bold text-[#101828]">
                Ideas are easy. Systems that operate enduringly are engineered.
              </h3>
              <p className="text-sm sm:text-base text-[#667085] leading-relaxed max-w-2xl font-sans">
                Every milestone achieved at AERVENLabs informs our next architectural layer. Explore our flagship software product, Campus Connect, or connect with our engineering collective.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <Link
                to="/projects/campus-connect"
                className="inline-flex items-center justify-between gap-3 bg-[#101828] text-white font-medium text-xs tracking-wider uppercase px-6 py-3.5 rounded-[8px] hover:bg-[#315EFA] transition-colors shadow-sm"
              >
                <span>Campus Connect Spec</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-between gap-3 bg-white text-[#101828] font-medium text-xs tracking-wider uppercase px-6 py-3.5 rounded-[8px] border border-[#E6E9EF] hover:bg-[#F1F3F6] transition-colors shadow-sm"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="h-4 w-4 text-[#667085]" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default JourneyPage;
