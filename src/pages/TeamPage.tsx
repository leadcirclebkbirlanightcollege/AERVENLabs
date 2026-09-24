import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useSEO } from '../hooks/useSEO';
import { routeSEOConfig } from '../data/seo';
import { generateBreadcrumbSchema } from '../lib/seo';
import { teamMembers, teamSectionConfig } from '../data/team';
import { TeamMember } from '../types';
import { TeamPortrait } from '../components/home/TeamPortrait';

/**
 * Dedicated Team Page ('/team').
 * Full architectural gallery showcasing the 8 real members of AervenLabs Technologies Pvt. Ltd.
 * Driven by the centralized src/data/team.ts single source of truth.
 */
export const TeamPage: React.FC = () => {
  useSEO(
    routeSEOConfig.team,
    routeSEOConfig.team?.breadcrumbs
      ? generateBreadcrumbSchema(routeSEOConfig.team.breadcrumbs)
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
        duration: prefersReducedMotion ? 0.01 : 0.7,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <div className="bg-black text-foreground min-h-screen">
      {/* Background Architectural Grid Lines */}
      <div
        className="pointer-events-none absolute inset-0 select-none opacity-40"
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
        {/* Dedicated Page Header: Breadcrumb + Monumental Title + Purpose */}
        <motion.div
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
            <span>/</span>
            <span className="text-white" aria-current="page">
              TEAM
            </span>
          </nav>

          <div className="grid-architectural items-start gap-8">
            {/* Left Column: Eyebrow & Status */}
            <div className="lg:col-span-4 space-y-3">
              <div className="inline-flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
                <span className="text-eyebrow text-neutral-400">
                  AERVENLABS // TEAM DIRECTORY
                </span>
              </div>
              <p className="text-tech-label text-neutral-500 font-mono tracking-widest">
                VERIFIED ROSTER // 08 BUILDERS
              </p>
            </div>

            {/* Right Column: Monumental Headline & Narrative */}
            <div className="lg:col-span-8 space-y-6">
              <h1 className="text-heading-1 sm:text-display-sm lg:text-display font-semibold tracking-tight text-white leading-[1.04]">
                People behind the systems.
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-secondary-text leading-relaxed max-w-3xl font-sans">
                {teamSectionConfig.description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* 12-Column Team Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch"
        >
          {teamMembers.map((member: TeamMember, index: number) => {
            const getGridClasses = (id: string) => {
              switch (id) {
                case 'atharv-a-jadhav':
                  return 'lg:col-span-6 lg:order-1';
                case 'pransu-b-mishra':
                  return 'lg:col-span-6 lg:order-2';
                case 'amit-n-rai':
                  return 'lg:col-span-4 lg:order-3';
                case 'aditya-s-pandey':
                  return 'lg:col-span-4 lg:order-4';
                case 'aditya-v-mishra':
                  return 'lg:col-span-4 lg:order-5';
                case 'subhasree-g-padhi':
                  return 'lg:col-span-4 lg:order-6';
                case 'avadhut-g-kashid':
                  return 'lg:col-span-4 lg:order-7';
                case 'ajay-a-prajapati':
                  return 'lg:col-span-4 lg:order-8';
                default:
                  return 'lg:col-span-4';
              }
            };

            const gridSpanClass = getGridClasses(member.id);

            return (
              <motion.article
                key={member.id}
                variants={itemVariants}
                className={`group surface-level-1 p-5 sm:p-6 lg:p-7 rounded-[2px] border border-border-subtle hover:border-white/30 transition-all duration-300 flex flex-col justify-between ${gridSpanClass}`}
              >
                {/* 1. Portrait Frame with Cinematic Glitch Entry */}
                <div className="w-full">
                  <TeamPortrait
                    member={member}
                    index={index}
                    prefersReducedMotion={Boolean(prefersReducedMotion)}
                  />
                </div>

                {/* 2. Architectural Information Layer */}
                <div className="space-y-4 pt-6">
                  {/* Top Bezel: Sequence Number & Discipline */}
                  <div className="flex items-center justify-between border-b border-border-subtle pb-3">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
                      <span className="font-mono text-xs font-semibold text-white tracking-wider">
                        0{member.order} // {member.role.toUpperCase()}
                      </span>
                    </div>
                    {member.discipline && (
                      <span className="text-tech-label text-neutral-500 font-mono">
                        {member.discipline}
                      </span>
                    )}
                  </div>

                  {/* Member Name */}
                  <h2
                    className={`${
                      member.featured ? 'text-heading-2 sm:text-heading-1' : 'text-heading-3 sm:text-heading-2'
                    } font-semibold text-white tracking-tight uppercase leading-snug`}
                  >
                    {member.name}
                  </h2>

                  {/* System Label */}
                  <p className="text-tech-label text-neutral-400 font-mono tracking-widest leading-relaxed">
                    {member.systemLabel}
                  </p>

                  {/* Hairline Accent Divider */}
                  <div className="h-[1px] w-12 bg-white/20" aria-hidden="true" />

                  {/* Formal Role Readout */}
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs sm:text-sm font-mono text-neutral-300">
                      {member.role}
                    </span>
                    <span className="text-tech-label text-neutral-600 font-mono">
                      VERIFIED // 2026
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Closing Collective Narrative Block */}
        <div className="surface-level-1 p-8 sm:p-12 lg:p-16 rounded-[2px] border border-border-subtle space-y-8">
          <div className="space-y-4 max-w-3xl">
            <span className="text-tech-label text-neutral-400 font-mono tracking-widest uppercase">
              {teamSectionConfig.collectiveTitle}
            </span>
            <h3 className="text-heading-2 sm:text-heading-1 font-semibold text-white tracking-tight uppercase leading-tight">
              {teamSectionConfig.collectiveStatement}
            </h3>
            <div className="h-[1px] w-14 bg-white/20" aria-hidden="true" />
            <p className="text-base sm:text-lg text-secondary-text leading-relaxed font-sans">
              {teamSectionConfig.collectiveParagraph}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border-subtle pt-6 text-neutral-500 font-mono text-[10px]">
            <span>AERVENLABS TECHNOLOGIES PVT. LTD. // CORE COLLECTIVE</span>
            <span>INTENT_DRIVEN // ENDURING_VALUE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
