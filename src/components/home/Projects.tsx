import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink, ShieldCheck, Database, Calendar, Users, Cpu, CheckCircle2, Award } from 'lucide-react';
import { campusConnectCaseStudy } from '../../data/projects';

/**
 * Section 6: Featured Project — Campus Connect.
 * STRICT REQUIREMENT: Campus Connect is the ONLY project displayed anywhere on the website.
 *
 * Dedicated, premium Campus Connect showcase highlighting:
 * - Official campus navigation and event information.
 * - Student engagement and campus communication.
 * - College ecosystem and digital transformation.
 * - Features, product capabilities, verified metrics, and real implementation.
 */
export const Projects: React.FC = () => {
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
      id="featured-projects"
      aria-labelledby="featured-projects-title"
      className="relative overflow-hidden bg-white border-b border-[#E6E9EF] py-20 sm:py-28 lg:py-36"
    >
      <div className="container-architectural relative z-10 w-full space-y-16">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-8">
          <div className="lg:col-span-4 space-y-2">
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#315EFA]" />
              <span className="text-xs font-mono font-semibold tracking-wider text-[#315EFA] uppercase">
                FEATURED PROJECT // FLAGSHIP
              </span>
            </div>
            <p className="text-xs font-mono uppercase tracking-widest text-[#667085]">
              HIGHER EDUCATION OPERATING SYSTEM
            </p>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <h2
              id="featured-projects-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#101828] leading-tight"
            >
              Campus Connect.
            </h2>
            <p className="text-base sm:text-lg text-[#667085] max-w-2xl font-sans">
              A unified collegiate operating system connecting academic operations, dynamic QR attendance, verified digital credentials, campus events, and student engagement into one institutional platform.
            </p>
          </div>
        </div>

        {/* Heroic Flagship Showcase Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="p-8 sm:p-12 lg:p-16 rounded-[24px] bg-[#F7F8FA] border border-[#E6E9EF] shadow-sm space-y-12"
        >
          {/* Top Status Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E6E9EF] pb-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 rounded-full bg-[#DCE5FF] text-[#315EFA] font-mono text-xs font-semibold">
                CAMPUS CONNECT // v1.0.0
              </span>
              <span className="h-3 w-[1px] bg-[#D0D5DD] hidden sm:inline" />
              <span className="font-mono text-xs text-[#667085] hidden sm:inline">
                FOUNDING PARTNER: B. K. BIRLA COLLEGE
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 text-xs font-mono text-[#101828] bg-white border border-[#E6E9EF] rounded-[6px] font-medium">
                PRODUCTION-READY
              </span>
              <span className="px-3 py-1 text-xs font-mono text-[#315EFA] bg-[#DCE5FF]/50 rounded-[6px] font-medium">
                MULTI-TENANT
              </span>
            </div>
          </div>

          {/* Core Introduction & Visual Blueprint */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-mono text-[#315EFA] font-semibold tracking-wider uppercase block">
                  INSTITUTIONAL NERVOUS SYSTEM
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#101828]">
                  Your Entire College Life. One Connected Platform.
                </h3>
                <p className="text-base text-[#667085] leading-relaxed font-sans pt-1">
                  Co-developed and stress-tested directly within active collegiate workflows. Campus Connect replaces fragmented paper registers, lost physical records, and disconnected chat groups with an audited digital architecture.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/projects/campus-connect"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#101828] hover:bg-[#315EFA] text-white font-medium text-sm rounded-[8px] transition-colors shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-[#315EFA]"
                >
                  <span>Explore Case Study</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="https://campusconnect.indevs.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 bg-white hover:bg-[#F7F8FA] text-[#101828] border border-[#E6E9EF] font-medium text-sm rounded-[8px] transition-colors shadow-sm"
                >
                  <span>Live Platform</span>
                  <ExternalLink className="h-3.5 w-3.5 text-[#667085]" />
                </a>
              </div>
            </div>

            {/* Right Architecture Specs */}
            <div className="lg:col-span-6">
              <div className="p-6 sm:p-8 rounded-[16px] bg-white border border-[#E6E9EF] shadow-sm space-y-5">
                <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-3">
                  <span className="font-mono text-xs font-semibold text-[#101828] uppercase flex items-center gap-2">
                    <Cpu className="h-3.5 w-3.5 text-[#315EFA]" />
                    SYS_CORE // VERIFIED TELEMETRY
                  </span>
                  <span className="font-mono text-xs text-[#315EFA] font-medium">
                    POSTGRESQL RLS
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-[10px] bg-[#F7F8FA] border border-[#E6E9EF] space-y-1">
                    <span className="text-[10px] font-mono text-[#667085] uppercase tracking-wider block">RELATIONAL CORE</span>
                    <span className="text-2xl font-bold font-mono text-[#101828]">62 TABLES</span>
                    <p className="text-[11px] text-[#667085]">Strict college_id tenant isolation</p>
                  </div>
                  <div className="p-4 rounded-[10px] bg-[#F7F8FA] border border-[#E6E9EF] space-y-1">
                    <span className="text-[10px] font-mono text-[#667085] uppercase tracking-wider block">SERVERLESS COMPUTE</span>
                    <span className="text-2xl font-bold font-mono text-[#315EFA]">25 FUNCTIONS</span>
                    <p className="text-[11px] text-[#667085]">Stateless Deno edge endpoints</p>
                  </div>
                  <div className="p-4 rounded-[10px] bg-[#F7F8FA] border border-[#E6E9EF] space-y-1">
                    <span className="text-[10px] font-mono text-[#667085] uppercase tracking-wider block">VERIFICATION SUITES</span>
                    <span className="text-2xl font-bold font-mono text-[#101828]">309 TESTS</span>
                    <p className="text-[11px] text-[#667085]">Automated unit & security tests</p>
                  </div>
                  <div className="p-4 rounded-[10px] bg-[#F7F8FA] border border-[#E6E9EF] space-y-1">
                    <span className="text-[10px] font-mono text-[#667085] uppercase tracking-wider block">SCAN-TO-RECORD</span>
                    <span className="text-2xl font-bold font-mono text-[#315EFA]">&lt; 500MS</span>
                    <p className="text-[11px] text-[#667085]">Sub-second attendance handshake</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#E6E9EF] flex items-center justify-between text-xs font-mono text-[#667085]">
                  <span>ZERO SPECULATIVE METRICS</span>
                  <span className="text-[#315EFA] font-medium">1,547 GIT COMMITS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Three Key Pillars: Navigation & Events, Student Engagement, College Ecosystem */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {/* Pillar 1: Campus Navigation & Events */}
            <div className="editorial-card p-6 sm:p-7 rounded-[16px] space-y-4 bg-white border border-[#E6E9EF]">
              <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-3">
                <span className="text-xs font-mono text-[#315EFA] font-semibold tracking-wider">
                  PILLAR 01 // EVENTS & INFO
                </span>
                <Calendar className="h-4 w-4 text-[#315EFA]" />
              </div>
              <h4 className="text-lg font-bold text-[#101828] tracking-tight">
                Campus Navigation & Event Broadcasting
              </h4>
              <p className="text-sm text-[#667085] leading-relaxed font-sans">
                Official collegiate event calendar, workshop registrations, department directories, and administrative broadcast notices delivered via device-level Web Push notifications.
              </p>
              <ul className="space-y-2 pt-1 text-xs font-mono text-[#101828]" role="list">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#315EFA] shrink-0" />
                  <span>Centralized Collegiate Event Calendar</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#315EFA] shrink-0" />
                  <span>Department & Facility Directories</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#315EFA] shrink-0" />
                  <span>Administrative Push Notifications</span>
                </li>
              </ul>
            </div>

            {/* Pillar 2: Student Engagement & Attendance */}
            <div className="editorial-card p-6 sm:p-7 rounded-[16px] space-y-4 bg-white border border-[#E6E9EF]">
              <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-3">
                <span className="text-xs font-mono text-[#315EFA] font-semibold tracking-wider">
                  PILLAR 02 // ENGAGEMENT
                </span>
                <Users className="h-4 w-4 text-[#315EFA]" />
              </div>
              <h4 className="text-lg font-bold text-[#101828] tracking-tight">
                Student Engagement & Communication
              </h4>
              <p className="text-sm text-[#667085] leading-relaxed font-sans">
                Dynamic 10-minute rotating QR codes with 6-digit OTP fallback. Converts daily campus attendance into verified check-in streaks, tiered achievement badges, and collegiate progression.
              </p>
              <ul className="space-y-2 pt-1 text-xs font-mono text-[#101828]" role="list">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#315EFA] shrink-0" />
                  <span>Dynamic QR & OTP Attendance Logging</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#315EFA] shrink-0" />
                  <span>Daily Streaks & Engagement Leaderboards</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#315EFA] shrink-0" />
                  <span>Digital Student ID with Optical Hologram</span>
                </li>
              </ul>
            </div>

            {/* Pillar 3: College Ecosystem & Digital Transformation */}
            <div className="editorial-card p-6 sm:p-7 rounded-[16px] space-y-4 bg-white border border-[#E6E9EF]">
              <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-3">
                <span className="text-xs font-mono text-[#315EFA] font-semibold tracking-wider">
                  PILLAR 03 // ECOSYSTEM
                </span>
                <ShieldCheck className="h-4 w-4 text-[#315EFA]" />
              </div>
              <h4 className="text-lg font-bold text-[#101828] tracking-tight">
                College Ecosystem & Governance
              </h4>
              <p className="text-sm text-[#667085] leading-relaxed font-sans">
                Automated statutory monthly registers, SGPA/CGPA examination compilation, academic promotions, and public zero-auth credential verification without exposing student PII.
              </p>
              <ul className="space-y-2 pt-1 text-xs font-mono text-[#101828]" role="list">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#315EFA] shrink-0" />
                  <span>Automated Statutory Monthly Registers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#315EFA] shrink-0" />
                  <span>Examination & Cumulative CGPA Engine</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#315EFA] shrink-0" />
                  <span>Public Zero-Auth Credential Verification</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
