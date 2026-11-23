import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useSEO } from '../hooks/useSEO';
import { routeSEOConfig } from '../data/seo';
import { generateBreadcrumbSchema } from '../lib/seo';
import { teamMembers, teamSectionConfig } from '../data/team';
import { TeamMember } from '../types';
import { TeamPortrait } from '../components/home/TeamPortrait';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';

/**
 * Dedicated Team Page ('/team').
 * Editorial gallery showcasing the 8 real members of AERVENLabs Technologies Pvt. Ltd.
 * Driven by the centralized src/data/team.ts single source of truth.
 * White-first Apple-disciplined aesthetic.
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
        staggerChildren: prefersReducedMotion ? 0 : 0.06,
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

  return (
    <div className="bg-white text-[#101828] min-h-screen">
      <div className="container-architectural relative z-10 py-16 sm:py-24 lg:py-32 space-y-16 sm:space-y-24">
        {/* Dedicated Page Header: Breadcrumb + Monumental Title + Purpose */}
        <motion.div
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
              TEAM
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Eyebrow & Status */}
            <div className="lg:col-span-4 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F1F3F6] border border-[#E6E9EF] rounded-full text-xs font-mono text-[#315EFA]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#315EFA]" aria-hidden="true" />
                <span>AERVENLABS // TEAM DIRECTORY</span>
              </div>
              <p className="text-xs text-[#667085] font-mono tracking-widest uppercase">
                VERIFIED ROSTER // 08 BUILDERS
              </p>
            </div>

            {/* Right Column: Monumental Headline & Narrative */}
            <div className="lg:col-span-8 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#101828] leading-[1.08]">
                People behind the systems.
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-[#667085] leading-relaxed max-w-3xl font-sans">
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
                className={`group editorial-card p-6 sm:p-7 rounded-[12px] hover:border-[#315EFA]/40 transition-all duration-300 flex flex-col justify-between ${gridSpanClass}`}
              >
                {/* 1. Portrait Frame */}
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
                  <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-3 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#315EFA]" aria-hidden="true" />
                      <span className="font-semibold text-[#101828]">
                        0{member.order} // {member.role.toUpperCase()}
                      </span>
                    </div>
                    {member.discipline && (
                      <span className="text-[#667085]">
                        {member.discipline}
                      </span>
                    )}
                  </div>

                  {/* Member Name */}
                  <h2
                    className={`${
                      member.featured ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
                    } font-bold text-[#101828] tracking-tight leading-snug`}
                  >
                    {member.name}
                  </h2>

                  {/* System Label / Tag */}
                  <p className="text-xs text-[#667085] font-mono tracking-wide leading-relaxed">
                    {member.systemLabel}
                  </p>

                  {/* Bio if available */}
                  {member.bio && (
                    <p className="text-sm text-[#667085] leading-relaxed font-sans line-clamp-3">
                      {member.bio}
                    </p>
                  )}

                  {/* Hairline Accent Divider */}
                  <div className="h-[1px] w-12 bg-[#315EFA]/30" aria-hidden="true" />

                  {/* Formal Role & Social Links */}
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs font-mono text-[#101828] font-medium">
                      {member.role}
                    </span>
                    {(member.links?.linkedin || member.socialLinks?.linkedin) && (
                      <a
                        href={member.links?.linkedin || member.socialLinks?.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono text-[#315EFA] hover:underline"
                        aria-label={`${member.name} on LinkedIn`}
                      >
                        <span>Profile</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Closing Collective Narrative Block */}
        <div className="bg-[#F7F8FA] border border-[#E6E9EF] p-8 sm:p-12 lg:p-16 rounded-[16px] space-y-8">
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs font-mono text-[#315EFA] uppercase tracking-widest">
              {teamSectionConfig.collectiveTitle}
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101828] tracking-tight leading-tight">
              {teamSectionConfig.collectiveStatement}
            </h3>
            <div className="h-[1px] w-14 bg-[#315EFA]/40" aria-hidden="true" />
            <p className="text-base sm:text-lg text-[#667085] leading-relaxed font-sans">
              {teamSectionConfig.collectiveParagraph}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#E6E9EF] pt-6 text-[#667085] font-mono text-xs">
            <span>AERVENLABS TECHNOLOGIES PVT. LTD. // CORE COLLECTIVE</span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-3.5 w-3.5 text-[#315EFA]" />
              INTENT_DRIVEN // ENDURING_VALUE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
