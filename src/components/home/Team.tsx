import React from 'react';
import { motion } from 'motion/react';
import { teamMembers, teamSectionConfig } from '../../data/team';
import { TeamMember } from '../../types';
import { TeamPortrait } from './TeamPortrait';

/**
 * Homepage Section 06: The People.
 * Core statement: "People behind the systems."
 * Strictly verified roster of all 8 authentic team members:
 * - Mr. Amit N. Rai — Mentor
 * - Atharv A. Jadhav — Founder & CEO
 * - Pransu B. Mishra — Co-Founder & CTO
 * - Aditya S. Pandey — Lead Product Engineer
 * - Aditya V. Mishra — Product & UI/UX Designer
 * - Subhasree G. Padhi — Creative & Communications Lead
 * - Avadhut G. Kashid — Software Engineer
 * - Ajay A. Prajapati — Application Developer
 * Premium cinematic monochrome portraits with restrained signal-entry transitions.
 * No fabricated bios, credentials, or corporate milestones.
 */
export const Team: React.FC = () => {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Staggered motion variants for section entry
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
    <section
      id="the-people"
      aria-labelledby="the-people-title"
      className="relative overflow-hidden bg-black text-foreground border-t border-border-subtle py-24 sm:py-32 md:py-36 lg:py-44"
    >
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

      <div className="container-architectural relative z-10 w-full space-y-16 sm:space-y-20 lg:space-y-28">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid-architectural items-start"
        >
          {/* Left Column: Eyebrow & Architectural Numeral 06 */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <motion.div variants={itemVariants} className="space-y-3">
              <div className="inline-flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
                <span className="text-eyebrow text-neutral-400">
                  {teamSectionConfig.eyebrow}
                </span>
              </div>
              <p className="text-tech-label text-neutral-500 font-mono tracking-widest">
                {teamSectionConfig.metaLabel}
              </p>
            </motion.div>

            {/* Architectural 06 Numeral Device */}
            <div
              className="hidden lg:block select-none pointer-events-none opacity-[0.04] -translate-x-3"
              aria-hidden="true"
            >
              <span className="font-sans text-[11rem] font-bold leading-none tracking-tighter text-white">
                {teamSectionConfig.sectionId}
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Headline & Purpose Copy */}
          <div className="lg:col-span-8 space-y-6">
            <motion.div variants={itemVariants}>
              <h2
                id="the-people-title"
                className="text-heading-1 sm:text-display-sm lg:text-display font-semibold tracking-tight text-white leading-tight"
              >
                {teamSectionConfig.headline}
              </h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-base sm:text-lg text-secondary-text leading-relaxed max-w-2xl font-sans">
                {teamSectionConfig.description}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* ============================================================== */}
        {/* 12-COLUMN EDITORIAL TEAM PORTRAIT SYSTEM (ALL 8 MEMBERS)       */}
        {/* ============================================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch"
        >
          {teamMembers.map((member: TeamMember, index: number) => {
            // Editorial grid allocation:
            // Leadership (Founder & Co-Founder) allocated 6 columns on large screens
            // Advisory & Core Engineering / Design allocated 4 columns on large screens
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
                  <h3
                    className={`${
                      member.featured ? 'text-heading-2 sm:text-heading-1' : 'text-heading-3 sm:text-heading-2'
                    } font-semibold text-white tracking-tight uppercase leading-snug`}
                  >
                    {member.name}
                  </h3>

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

        {/* Bottom Architectural Readout */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border-subtle pt-6 text-neutral-500 font-mono text-[10px] select-none" aria-hidden="true">
          <span>AERVENLABS TECHNOLOGIES // 08 VERIFIED BUILDERS</span>
          <span>SYS_SPEC // HUMAN_CAPITAL_ARCH</span>
        </div>
      </div>
    </section>
  );
};

export default Team;
