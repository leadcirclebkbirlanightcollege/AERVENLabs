import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { teamMembers, teamSectionConfig } from '../../data/team';
import { TeamMember } from '../../types';

export const Team: React.FC = () => {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Motion variants for section entry
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

  const hasVerifiedMembers = teamMembers.length > 0;
  const featuredMember = hasVerifiedMembers
    ? teamMembers.find((m) => m.featured) || teamMembers[0]
    : null;
  const secondaryMembers = hasVerifiedMembers
    ? teamMembers.filter((m) => m.id !== featuredMember?.id)
    : [];

  return (
    <section
      id="team"
      aria-labelledby="team-title"
      className="relative overflow-hidden bg-black text-foreground border-t border-border-subtle py-28 md:py-36 lg:py-44"
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

      <div className="container-architectural relative z-10 w-full">
        {/* Section Header: Structured Eyebrow, Heading, & Humanizing Description */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid-architectural items-start mb-16 sm:mb-20 lg:mb-28"
        >
          {/* Left Column: Eyebrow & Oversized Architectural 05 */}
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

            {/* Subtle Architectural 05 Numeral Device */}
            <div
              className="hidden lg:block select-none pointer-events-none opacity-[0.04] -translate-x-3"
              aria-hidden="true"
            >
              <span className="font-sans text-[10rem] font-bold leading-none tracking-tighter text-white">
                {teamSectionConfig.sectionId}
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Headline & Purpose Copy */}
          <div className="lg:col-span-8 space-y-6">
            <motion.div variants={itemVariants}>
              <h2
                id="team-title"
                className="text-heading-1 md:text-display-sm font-semibold tracking-tight text-white leading-tight"
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
        {/* CASE A: VERIFIED TEAM MEMBERS DATA POPULATED                   */}
        {/* ============================================================== */}
        {hasVerifiedMembers && (
          <div className="space-y-16 lg:space-y-24">
            {/* Featured Team Member Layout */}
            {featuredMember && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid-architectural items-center gap-8 lg:gap-16 border-b border-border-subtle pb-16 lg:pb-24"
              >
                {/* Left (Cols 1-6): Large Featured Portrait */}
                <motion.div variants={itemVariants} className="lg:col-span-6">
                  {featuredMember.image ? (
                    <div className="media-container-architectural relative overflow-hidden aspect-[4/5] bg-surface-dark border border-border-subtle">
                      <img
                        src={featuredMember.image}
                        alt={`Portrait of ${featuredMember.name}`}
                        loading="lazy"
                        className="media-monochrome h-full w-full object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                      />
                      <div className="media-overlay-vignette" aria-hidden="true" />
                    </div>
                  ) : (
                    <div className="media-container-architectural relative flex flex-col justify-between aspect-[4/5] bg-surface-dark border border-border-subtle p-8">
                      <div className="flex justify-between text-neutral-600 font-mono text-[10px]" aria-hidden="true">
                        <span>+ [PORTRAIT_NW]</span>
                        <span>+ [PORTRAIT_NE]</span>
                      </div>
                      <div className="text-center space-y-2">
                        <span className="font-mono text-3xl font-light text-white/20 select-none">
                          0{featuredMember.order || 1}
                        </span>
                        <p className="text-tech-label text-neutral-500 font-mono tracking-widest">
                          VERIFIED PROFILE
                        </p>
                      </div>
                      <div className="flex justify-between text-neutral-600 font-mono text-[10px]" aria-hidden="true">
                        <span>+ [PORTRAIT_SW]</span>
                        <span>+ [PORTRAIT_SE]</span>
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Right (Cols 7-12): Profile Information */}
                <motion.div variants={itemVariants} className="lg:col-span-6 space-y-6">
                  <div className="space-y-2">
                    <span className="text-tech-label text-neutral-400 font-mono tracking-wider">
                      {featuredMember.discipline || 'LEADERSHIP // ENGINEERING'}
                    </span>
                    <h3 className="text-heading-1 font-semibold text-white tracking-tight">
                      {featuredMember.name}
                    </h3>
                    <p className="text-sm font-mono text-neutral-400 uppercase tracking-wide">
                      {featuredMember.role}
                    </p>
                  </div>

                  <div className="h-[1px] w-14 bg-white/20" aria-hidden="true" />

                  {featuredMember.bio && (
                    <p className="text-base text-secondary-text leading-relaxed font-sans max-w-lg">
                      {featuredMember.bio}
                    </p>
                  )}

                  {/* Verified Social Channels */}
                  {featuredMember.links && (
                    <div className="flex items-center gap-4 pt-2">
                      {featuredMember.links.linkedin && (
                        <a
                          href={featuredMember.links.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${featuredMember.name}'s LinkedIn profile`}
                          className="text-neutral-400 hover:text-white transition-colors duration-200"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                      {featuredMember.links.github && (
                        <a
                          href={featuredMember.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${featuredMember.name}'s GitHub profile`}
                          className="text-neutral-400 hover:text-white transition-colors duration-200"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                      {featuredMember.links.twitter && (
                        <a
                          href={featuredMember.links.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${featuredMember.name}'s X profile`}
                          className="text-neutral-400 hover:text-white transition-colors duration-200"
                        >
                          <Twitter className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  )}
                </motion.div>
              </motion.div>
            )}

            {/* Secondary Team Members Grid */}
            {secondaryMembers.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {secondaryMembers.map((member: TeamMember) => (
                  <div
                    key={member.id}
                    className="surface-level-1 p-6 space-y-4 rounded-[2px] border border-border-subtle"
                  >
                    {member.image && (
                      <div className="media-container-architectural aspect-[4/5] overflow-hidden mb-4 bg-surface-dark">
                        <img
                          src={member.image}
                          alt={`Portrait of ${member.name}`}
                          loading="lazy"
                          className="media-monochrome h-full w-full object-cover object-center"
                        />
                      </div>
                    )}
                    <div className="space-y-1">
                      <h4 className="text-heading-3 font-semibold text-white tracking-tight">
                        {member.name}
                      </h4>
                      <p className="text-tech-label text-neutral-400 font-mono">
                        {member.role}
                      </p>
                    </div>
                    {member.bio && (
                      <p className="text-sm text-secondary-text leading-relaxed font-sans">
                        {member.bio}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ============================================================== */}
        {/* CASE B: EDITORIAL COLLECTIVE ARCHITECTURE (NO FAKE PERSONAS)    */}
        {/* ============================================================== */}
        {!hasVerifiedMembers && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12 lg:space-y-16"
          >
            {/* Monumental Collective Showcase Frame */}
            <motion.div
              variants={itemVariants}
              className="media-container-architectural relative overflow-hidden surface-level-1 border border-border-subtle p-8 sm:p-12 lg:p-16 space-y-10"
            >
              {/* Top Frame Bezel */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border-subtle pb-5">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" aria-hidden="true" />
                  <span className="text-tech-label text-neutral-300 font-mono tracking-widest">
                    COLLECTIVE SPECIFICATION // AERVENLABS CORE TEAM
                  </span>
                </div>
                <span className="text-tech-label text-neutral-500 font-mono">
                  STATUS // ASSEMBLED FOR IMPACT
                </span>
              </div>

              {/* Central Architectural Statement */}
              <div className="space-y-6 max-w-4xl">
                <p className="text-tech-label text-neutral-400 font-mono tracking-widest uppercase">
                  {teamSectionConfig.collectiveTitle}
                </p>

                <h3 className="text-heading-1 sm:text-display-sm lg:text-display-md font-semibold tracking-tight text-white leading-tight uppercase">
                  {teamSectionConfig.collectiveStatement}
                </h3>

                <div className="h-[1px] w-16 bg-white/20" aria-hidden="true" />

                <p className="text-base sm:text-lg text-secondary-text leading-relaxed font-sans max-w-3xl">
                  {teamSectionConfig.collectiveParagraph}
                </p>
              </div>

              {/* Three Disciplinary Core Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-border-subtle">
                {teamSectionConfig.pillars.map((pillar) => (
                  <div
                    key={pillar.number}
                    className="surface-level-2 p-6 space-y-3 rounded-[2px] border border-border-subtle"
                  >
                    <div className="flex items-center justify-between border-b border-border-subtle pb-2.5">
                      <span className="font-mono text-xs font-semibold text-white">
                        {pillar.number} // {pillar.label}
                      </span>
                      <span className="text-[10px] font-mono text-neutral-500">
                        DISCIPLINE
                      </span>
                    </div>

                    <p className="text-tech-label text-neutral-400 font-mono">
                      {pillar.discipline}
                    </p>

                    <p className="text-sm text-secondary-text leading-relaxed font-sans">
                      {pillar.detail}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom Frame Bezel */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border-subtle pt-5 text-neutral-500 font-mono text-[10px]">
                <span>AERVENLABS TECHNOLOGIES // BUILDERS & LEADERSHIP</span>
                <span>SYS_SPEC // TEAM_SPEC_05</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Team;
