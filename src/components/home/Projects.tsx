import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Calendar,
  Users,
  Cpu,
  CheckCircle2,
  Trophy,
  Sparkles,
  MapPin,
  GraduationCap,
} from 'lucide-react';
import { campusConnectCaseStudy, unnatiCaseStudy } from '../../data/projects';

/**
 * Section 6: Our Work — Selected Digital Products & Experiences.
 *
 * STRICT REQUIREMENT: Showcase ONLY TWO works:
 * 1. Campus Connect — Higher Education Campus Operating System (B. K. Birla College Partner)
 * 2. UNNATI 2026–27 — Roots & Rhythm 16th Inter-Collegiate Fest (MKMP College Thakurli)
 *
 * Both projects receive equal, sophisticated editorial design attention under
 * the AERVENLabs white-first design system.
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
      id="our-work"
      aria-labelledby="our-work-title"
      className="relative overflow-hidden bg-white border-b border-[#E6E9EF] py-20 sm:py-28 lg:py-36"
    >
      <div className="container-architectural relative z-10 w-full space-y-16 sm:space-y-24">
        {/* =====================================================================
            SECTION HEADER & BRAND POSITIONING
        ====================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-8 border-b border-[#E6E9EF] pb-12 sm:pb-16">
          <div className="lg:col-span-4 space-y-2">
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#315EFA]" />
              <span className="text-xs font-mono font-semibold tracking-wider text-[#315EFA] uppercase">
                06 // OUR WORK
              </span>
            </div>
            <p className="text-xs font-mono uppercase tracking-widest text-[#667085]">
              SELECTED DIGITAL PRODUCTS &amp; EXPERIENCES
            </p>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <h2
              id="our-work-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#101828] leading-[1.12]"
            >
              We turn ideas into digital experiences that move institutions forward.
            </h2>
            <p className="text-base sm:text-lg text-[#667085] max-w-2xl font-sans leading-relaxed">
              From student-focused digital ecosystems to institutional event experiences, AERVENLabs works at the intersection of technology, design, and practical innovation.
            </p>
          </div>
        </div>

        {/* =====================================================================
            WORK 01: CAMPUS CONNECT — COLLEGIATE OPERATING SYSTEM
        ====================================================================== */}
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
                WORK 01 // CAMPUS CONNECT
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

          {/* Narrative & Verified Architecture */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-mono text-[#315EFA] font-semibold tracking-wider uppercase block">
                  HIGHER EDUCATION OPERATING SYSTEM
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#101828]">
                  Campus Connect.
                </h3>
                <p className="text-base text-[#667085] leading-relaxed font-sans">
                  A unified collegiate operating system connecting academic operations, dynamic QR attendance, verified digital credentials, campus events, and student engagement into one institutional platform.
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

            {/* Right Telemetry Matrix */}
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
                    <p className="text-[11px] text-[#667085]">Strict tenant isolation</p>
                  </div>
                  <div className="p-4 rounded-[10px] bg-[#F7F8FA] border border-[#E6E9EF] space-y-1">
                    <span className="text-[10px] font-mono text-[#667085] uppercase tracking-wider block">EDGE COMPUTE</span>
                    <span className="text-2xl font-bold font-mono text-[#315EFA]">25 FUNCTIONS</span>
                    <p className="text-[11px] text-[#667085]">Stateless Deno endpoints</p>
                  </div>
                  <div className="p-4 rounded-[10px] bg-[#F7F8FA] border border-[#E6E9EF] space-y-1">
                    <span className="text-[10px] font-mono text-[#667085] uppercase tracking-wider block">AUTOMATED TESTS</span>
                    <span className="text-2xl font-bold font-mono text-[#101828]">309 SUITES</span>
                    <p className="text-[11px] text-[#667085]">Verified test coverage</p>
                  </div>
                  <div className="p-4 rounded-[10px] bg-[#F7F8FA] border border-[#E6E9EF] space-y-1">
                    <span className="text-[10px] font-mono text-[#667085] uppercase tracking-wider block">SCAN-TO-RECORD</span>
                    <span className="text-2xl font-bold font-mono text-[#315EFA]">&lt; 500MS</span>
                    <p className="text-[11px] text-[#667085]">Fast QR handshake</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#E6E9EF] flex items-center justify-between text-xs font-mono text-[#667085]">
                  <span>ZERO SPECULATIVE CLAIMS</span>
                  <span className="text-[#315EFA] font-medium">B. K. BIRLA COLLEGE VALIDATED</span>
                </div>
              </div>
            </div>
          </div>

          {/* Three Key Pillars: Navigation, Engagement, Governance */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="editorial-card p-6 sm:p-7 rounded-[16px] space-y-4 bg-white border border-[#E6E9EF]">
              <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-3">
                <span className="text-xs font-mono text-[#315EFA] font-semibold tracking-wider">
                  PILLAR 01 // EVENTS &amp; NOTICES
                </span>
                <Calendar className="h-4 w-4 text-[#315EFA]" />
              </div>
              <h4 className="text-lg font-bold text-[#101828] tracking-tight">
                Official Campus Navigation &amp; Event Broadcasts
              </h4>
              <p className="text-sm text-[#667085] leading-relaxed font-sans">
                Official collegiate event calendar, workshop registrations, department directories, and push notifications.
              </p>
            </div>

            <div className="editorial-card p-6 sm:p-7 rounded-[16px] space-y-4 bg-white border border-[#E6E9EF]">
              <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-3">
                <span className="text-xs font-mono text-[#315EFA] font-semibold tracking-wider">
                  PILLAR 02 // ENGAGEMENT
                </span>
                <Users className="h-4 w-4 text-[#315EFA]" />
              </div>
              <h4 className="text-lg font-bold text-[#101828] tracking-tight">
                Student Engagement &amp; Attendance Streaks
              </h4>
              <p className="text-sm text-[#667085] leading-relaxed font-sans">
                Dynamic 10-minute rotating QR codes with OTP fallback, check-in streaks, badges, and digital student IDs.
              </p>
            </div>

            <div className="editorial-card p-6 sm:p-7 rounded-[16px] space-y-4 bg-white border border-[#E6E9EF]">
              <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-3">
                <span className="text-xs font-mono text-[#315EFA] font-semibold tracking-wider">
                  PILLAR 03 // GOVERNANCE
                </span>
                <ShieldCheck className="h-4 w-4 text-[#315EFA]" />
              </div>
              <h4 className="text-lg font-bold text-[#101828] tracking-tight">
                College Ecosystem &amp; Governance
              </h4>
              <p className="text-sm text-[#667085] leading-relaxed font-sans">
                Automated monthly registers, SGPA/CGPA examination compilation, and public zero-auth credential verification.
              </p>
            </div>
          </div>
        </motion.div>

        {/* =====================================================================
            WORK 02: UNNATI 2026–27 — ROOTS & RHYTHM FESTIVAL EXPERIENCE
        ====================================================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="p-8 sm:p-12 lg:p-16 rounded-[24px] bg-[#FAF7F2] border border-[#E6E9EF] shadow-sm space-y-12"
        >
          {/* Top Status Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E6E9EF] pb-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 rounded-full bg-[#881337]/10 text-[#881337] border border-[#881337]/20 font-mono text-xs font-semibold">
                WORK 02 // UNNATI 2026–27
              </span>
              <span className="h-3 w-[1px] bg-[#D0D5DD] hidden sm:inline" />
              <span className="font-mono text-xs text-[#667085] hidden sm:inline">
                HOST: MKMP COLLEGE THAKURLI (EAST)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 text-xs font-mono text-[#881337] bg-white border border-[#881337]/20 rounded-[6px] font-medium">
                16TH INTER-COLLEGIATE FEST
              </span>
              <span className="px-3 py-1 text-xs font-mono text-[#101828] bg-white border border-[#E6E9EF] rounded-[6px] font-medium">
                DEC 3–5, 2026
              </span>
            </div>
          </div>

          {/* Narrative & Visual Preview Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-mono text-[#881337] font-semibold tracking-wider uppercase block">
                  THEME: ROOTS &amp; RHYTHM // EVENT PLATFORM
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#101828]">
                  UNNATI 2026–27.
                </h3>
                <p className="text-base text-[#667085] leading-relaxed font-sans">
                  The official digital event platform engineered for the landmark 16th Inter-Collegiate Cultural Festival at MKMP College Thakurli. Features 23 competitions across performing arts, fine arts, sports, eSports, and management with real-time schedule discovery and online registration.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/projects/unnati-2026-27"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#101828] hover:bg-[#881337] text-white font-medium text-sm rounded-[8px] transition-colors shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-[#881337]"
                >
                  <span>Explore Case Study</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="https://unnatiatmkmp.runs-on.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 bg-white hover:bg-[#F7F8FA] text-[#881337] border border-[#881337]/30 font-medium text-sm rounded-[8px] transition-colors shadow-sm"
                >
                  <span>Visit Live Website</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Right Visual Card with High-Res Screenshot Preview */}
            <div className="lg:col-span-6">
              <div className="editorial-card rounded-[18px] p-4 sm:p-6 bg-white border border-[#E6E9EF] shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-3">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-[4px] bg-[#FAF7F2] p-1 flex items-center justify-center">
                      <img
                        src="/assets/projects/unnati/mkmp-college-logo.png"
                        alt="MKMP College"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <span className="font-mono text-xs font-semibold text-[#101828] uppercase">
                      OFFICIAL WEBSITE SPECIMEN
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[#881337] font-medium">
                    VERCEL EDGE
                  </span>
                </div>

                <div className="relative aspect-[16/9] rounded-[10px] overflow-hidden bg-[#FAF7F2] border border-[#E6E9EF]">
                  <img
                    src="/assets/projects/unnati/unnati-og-banner.jpg"
                    alt="Official UNNATI 2026–27 website hero preview"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>

                <div className="pt-1 flex items-center justify-between text-xs font-mono text-[#667085]">
                  <span>23 ACTIVITIES // 3-DAY TIMELINE</span>
                  <span className="text-[#881337] font-semibold">unnatiatmkmp.runs-on.dev</span>
                </div>
              </div>
            </div>
          </div>

          {/* Three Key UNNATI Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="editorial-card p-6 sm:p-7 rounded-[16px] space-y-4 bg-white border border-[#E6E9EF]">
              <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-3">
                <span className="text-xs font-mono text-[#881337] font-semibold tracking-wider">
                  FEATURE 01 // COMPETITIONS
                </span>
                <Trophy className="h-4 w-4 text-[#881337]" />
              </div>
              <h4 className="text-lg font-bold text-[#101828] tracking-tight">
                23 Inter-Collegiate Competitions
              </h4>
              <p className="text-sm text-[#667085] leading-relaxed font-sans">
                Full competition matrix across Performing Arts (Dance, Singing, Fashion, NAAD), Fine Arts, Sports (Box Cricket, Chess, Carrom), eSports (BGMI, Free Fire), and Management.
              </p>
            </div>

            <div className="editorial-card p-6 sm:p-7 rounded-[16px] space-y-4 bg-white border border-[#E6E9EF]">
              <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-3">
                <span className="text-xs font-mono text-[#881337] font-semibold tracking-wider">
                  FEATURE 02 // SCHEDULE
                </span>
                <Calendar className="h-4 w-4 text-[#881337]" />
              </div>
              <h4 className="text-lg font-bold text-[#101828] tracking-tight">
                3-Day Multi-Venue Timeline
              </h4>
              <p className="text-sm text-[#667085] leading-relaxed font-sans">
                Interactive schedule for December 3–5, 2026, detailing exact reporting times, rules, stages, and faculty coordinator desks at MKMP College Thakurli.
              </p>
            </div>

            <div className="editorial-card p-6 sm:p-7 rounded-[16px] space-y-4 bg-white border border-[#E6E9EF]">
              <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-3">
                <span className="text-xs font-mono text-[#881337] font-semibold tracking-wider">
                  FEATURE 03 // REGISTRATION
                </span>
                <CheckCircle2 className="h-4 w-4 text-[#881337]" />
              </div>
              <h4 className="text-lg font-bold text-[#101828] tracking-tight">
                Digital Registration &amp; Status Tracking
              </h4>
              <p className="text-sm text-[#667085] leading-relaxed font-sans">
                Streamlined registration modal allowing students and contingents to enter event rosters, review rulebook requirements, and track verification status.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
