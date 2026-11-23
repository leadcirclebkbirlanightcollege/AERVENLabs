import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Linkedin, Github } from 'lucide-react';
import { teamMembers, teamSectionConfig } from '../../data/team';
import { TeamMember } from '../../types';
import { TeamPortrait } from './TeamPortrait';

/**
 * Section 9: The Team.
 * Clean, white-first editorial presentation of all 8 authentic team members.
 */
export const Team: React.FC = () => {
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
      id="team"
      aria-labelledby="team-title"
      className="relative overflow-hidden bg-[#F7F8FA] border-b border-[#E6E9EF] py-20 sm:py-28 lg:py-36"
    >
      <div className="container-architectural relative z-10 w-full space-y-16">
        {/* Section Header */}
        <div className="grid-architectural items-start gap-8">
          <div className="lg:col-span-4 space-y-2">
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#315EFA]" />
              <span className="text-eyebrow font-mono text-xs font-semibold tracking-wider text-[#315EFA]">
                {teamSectionConfig.eyebrow}
              </span>
            </div>
            <p className="text-xs font-mono uppercase tracking-widest text-[#667085]">
              {teamSectionConfig.metaLabel}
            </p>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <h2
              id="team-title"
              className="text-heading-1 sm:text-display-sm font-bold tracking-tight text-[#101828] leading-tight"
            >
              {teamSectionConfig.headline}
            </h2>
            <p className="text-base sm:text-lg text-[#667085] max-w-2xl font-sans">
              {teamSectionConfig.description}
            </p>
          </div>
        </div>

        {/* 8-Member Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {teamMembers.map((member: TeamMember, index: number) => (
            <motion.article
              key={member.id}
              variants={itemVariants}
              className="editorial-card p-5 sm:p-6 flex flex-col justify-between space-y-5 group hover:-translate-y-1 transition-all duration-300"
            >
              {/* Member Portrait */}
              <div className="w-full">
                <TeamPortrait
                  member={member}
                  index={index}
                  prefersReducedMotion={Boolean(prefersReducedMotion)}
                />
              </div>

              {/* Bio & Details */}
              <div className="space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-[#315EFA]">
                      0{member.order} // {member.role.toUpperCase()}
                    </span>
                    {member.discipline && (
                      <span className="font-mono text-[10px] text-[#98A2B3]">
                        {member.discipline}
                      </span>
                    )}
                  </div>

                  <h3 className="text-heading-3 font-bold text-[#101828] group-hover:text-[#315EFA] transition-colors">
                    {member.name}
                  </h3>

                  {member.bio && (
                    <p className="text-xs text-[#667085] leading-relaxed font-sans line-clamp-3">
                      {member.bio}
                    </p>
                  )}
                </div>

                {/* Social links & status */}
                <div className="pt-3 border-t border-[#E6E9EF] flex items-center justify-between">
                  <span className="font-mono text-[11px] text-[#667085]">
                    {member.role}
                  </span>

                  <div className="flex items-center gap-2">
                    {member.links?.linkedin && (
                      <a
                        href={member.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#98A2B3] hover:text-[#315EFA] transition-colors p-1"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin className="h-3.5 w-3.5" />
                      </a>
                    )}
                    {member.links?.github && (
                      <a
                        href={member.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#98A2B3] hover:text-[#101828] transition-colors p-1"
                        aria-label={`${member.name} GitHub`}
                      >
                        <Github className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Collective Statement & Team Page Link */}
        <div className="p-8 sm:p-10 rounded-[16px] bg-white border border-[#E6E9EF] shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <h4 className="font-bold text-base text-[#101828]">
              {teamSectionConfig.collectiveStatement}
            </h4>
            <p className="text-sm text-[#667085]">
              {teamSectionConfig.collectiveParagraph}
            </p>
          </div>

          <Link
            to="/team"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-[8px] bg-[#101828] text-white hover:bg-[#315EFA] text-xs font-semibold tracking-wider uppercase transition-colors shrink-0 shadow-sm"
          >
            <span>Meet All 8 Builders</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Team;
