import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Layers,
  ShieldCheck,
  Calendar,
  Users,
  Award,
  ExternalLink,
  Code2,
  FileCheck2,
  Clock,
  Sparkles,
} from 'lucide-react';
import { campusConnectCaseStudy } from '../data/projects';
import { useSEO } from '../hooks/useSEO';
import { routeSEOConfig } from '../data/seo';
import { generateSoftwareApplicationSchema, generateBreadcrumbSchema } from '../lib/seo';
import { CampusConnectArchitecturalVisual } from '../components/projects/CampusConnectArchitecturalVisual';

/**
 * CampusConnectPage — Dedicated Flagship Showcase ('/projects/campus-connect')
 *
 * STRICT REQUIREMENT: Campus Connect is the ONLY project displayed anywhere on the website.
 * Comprehensive 12-Section Storytelling Framework:
 * 1. Project Hero
 * 2. Project Overview & Institutional Partner Context
 * 3. Problem or Opportunity
 * 4. Vision and Objectives
 * 5. Solution Architecture
 * 6. Key Features & Capabilities (Navigation, Events, Engagement, Communication, Ecosystem)
 * 7. Verified Technology Stack
 * 8. Screenshots & Architectural Visual Gallery
 * 9. Real Implementation & Development Journey
 * 10. Current Project Status & Audited Metrics
 * 11. Verified Future Roadmap
 * 12. Back to Projects Navigation & Deployment CTA
 *
 * Strict White-First Design: #FFFFFF canvas, #F7F8FA secondary, #101828 text, #315EFA accents.
 */
export const CampusConnectPage: React.FC = () => {
  const caseStudy = campusConnectCaseStudy;

  useSEO(
    routeSEOConfig.campusConnect,
    {
      '@context': 'https://schema.org',
      '@graph': [
        generateSoftwareApplicationSchema({
          id: caseStudy.id,
          slug: caseStudy.slug,
          title: caseStudy.title,
          tagline: caseStudy.primaryTagline,
          category: caseStudy.category,
          description: caseStudy.shortPositioning,
          capabilities: caseStudy.systems.map(s => s.name),
          status: 'production-ready',
          featured: true,
        }),
        ...(routeSEOConfig.campusConnect?.breadcrumbs
          ? [generateBreadcrumbSchema(routeSEOConfig.campusConnect.breadcrumbs)]
          : []),
      ],
    }
  );

  return (
    <div className="min-h-screen bg-white text-[#101828] overflow-x-hidden">
      {/* =========================================================================
          SECTION 12 (TOP BAR): BACK TO PROJECTS NAV
          ========================================================================= */}
      <div className="border-b border-[#E6E9EF] bg-white sticky top-[64px] z-30">
        <div className="container-architectural py-3 flex items-center justify-between text-xs font-mono">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-[#667085] hover:text-[#101828] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>PROJECTS OVERVIEW</span>
          </Link>

          <div className="flex items-center gap-2 text-[#667085]">
            <span className="hidden sm:inline">AERVENLABS // FLAGSHIP PRODUCT</span>
            <span className="hidden sm:inline">/</span>
            <span className="text-[#315EFA] font-semibold uppercase">CAMPUS CONNECT</span>
          </div>
        </div>
      </div>

      <div className="container-architectural py-12 sm:py-16 lg:py-20 space-y-20 sm:space-y-28">
        {/* =========================================================================
            SECTION 1: PROJECT HERO
            ========================================================================= */}
        <section aria-label="Project Hero" className="space-y-8 border-b border-[#E6E9EF] pb-12 sm:pb-16">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-medium border bg-[#F1F3F6] text-[#315EFA] border-[#E6E9EF]">
              {caseStudy.secondaryPositioning}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#F7F8FA] border border-[#E6E9EF] text-[#101828] font-medium">
              {caseStudy.status}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#F7F8FA] border border-[#E6E9EF] text-[#667085]">
              {caseStudy.version}
            </span>
          </div>

          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#101828] leading-[1.06]">
              {caseStudy.title}
            </h1>
            <p className="text-xl sm:text-2xl text-[#101828] font-medium font-sans leading-relaxed">
              {caseStudy.primaryTagline}
            </p>
            <p className="text-base sm:text-lg text-[#667085] font-sans leading-relaxed max-w-3xl">
              {caseStudy.shortPositioning}
            </p>
          </div>

          {/* Platform Badges & Direct Links */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#E6E9EF]">
            <div className="flex flex-wrap items-center gap-2">
              {caseStudy.platformBadges.map((badge: string) => (
                <span
                  key={badge}
                  className="px-3 py-1 bg-[#F7F8FA] border border-[#E6E9EF] rounded-[6px] text-xs font-mono text-[#667085]"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://campusconnect.indevs.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[8px] text-xs font-mono font-semibold text-white bg-[#315EFA] hover:bg-[#254dd4] shadow-sm transition-colors"
              >
                <span>VISIT LIVE PLATFORM</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>

              <a
                href="#architecture-blueprint"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[8px] text-xs font-mono font-semibold text-[#101828] bg-[#F7F8FA] border border-[#E6E9EF] hover:border-[#101828] transition-colors"
              >
                <Cpu className="h-3.5 w-3.5 text-[#315EFA]" />
                <span>INSPECT BLUEPRINT</span>
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: PROJECT OVERVIEW & INSTITUTIONAL PARTNER CONTEXT
            ========================================================================= */}
        <section aria-label="Project Overview" className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-3 text-xs font-mono">
            <span className="font-semibold text-[#101828] uppercase tracking-wider">
              02 // PROJECT OVERVIEW & INSTITUTIONAL CONTEXT
            </span>
            <span className="text-[#667085]">VALIDATED WORKFLOWS</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#101828] tracking-tight">
                Designed to Modernize the Collegiate Experience
              </h2>
              <p className="text-base text-[#667085] leading-relaxed font-sans">
                Higher education institutions routinely struggle with fragmented communication channels, lost paper attendance logs, manual grade compilation, and insecure student identity cards.
              </p>
              <p className="text-base text-[#667085] leading-relaxed font-sans">
                Campus Connect resolves these systemic bottlenecks by unifying attendance logging, daily timetables, examination marks, campus event notices, digital student identity, and zero-auth public credentials into an enterprise-grade multi-tenant operating system.
              </p>
            </div>

            <div className="lg:col-span-5 bg-[#F7F8FA] border border-[#E6E9EF] p-6 sm:p-8 rounded-[16px] space-y-4">
              <span className="text-xs font-mono text-[#315EFA] font-semibold tracking-wider uppercase block">
                FOUNDING INSTITUTION PARTNER
              </span>
              <h3 className="text-lg font-bold text-[#101828]">
                {caseStudy.foundingInstitution.name}
              </h3>
              <p className="text-xs font-mono text-[#667085] uppercase">
                {caseStudy.foundingInstitution.relationship}
              </p>
              <div className="h-[1px] w-full bg-[#E6E9EF]" />
              <p className="text-sm text-[#667085] font-sans leading-relaxed">
                {caseStudy.foundingInstitution.description}
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: PROBLEM OR OPPORTUNITY
            ========================================================================= */}
        <section aria-label="Problems & Opportunities" className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-3 text-xs font-mono">
            <span className="font-semibold text-[#101828] uppercase tracking-wider">
              03 // CHALLENGES IN CAMPUS ADMINISTRATION
            </span>
            <span className="text-[#667085]">06 PAIN POINTS SOLVED</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudy.problems.map((prob) => (
              <div
                key={prob.number}
                className="editorial-card p-6 rounded-[16px] space-y-3 bg-white border border-[#E6E9EF]"
              >
                <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-2 text-xs font-mono">
                  <span className="font-semibold text-[#315EFA]">CHALLENGE {prob.number}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E6E9EF]" />
                </div>
                <h3 className="text-base font-bold text-[#101828] tracking-tight">
                  {prob.title}
                </h3>
                <p className="text-sm text-[#667085] leading-relaxed font-sans">
                  {prob.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: VISION & OBJECTIVES
            ========================================================================= */}
        <section aria-label="Vision and Objectives" className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-3 text-xs font-mono">
            <span className="font-semibold text-[#101828] uppercase tracking-wider">
              04 // VISION AND STRATEGIC OBJECTIVES
            </span>
            <span className="text-[#667085]">ARCHITECTURAL MANDATES</span>
          </div>

          <div className="bg-[#F7F8FA] border border-[#E6E9EF] p-8 sm:p-10 rounded-[16px] space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#101828] tracking-tight max-w-3xl">
              Engineering technology that promotes academic focus and administrative calm.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#E6E9EF]">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#315EFA] shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base text-[#101828] font-sans leading-relaxed">
                  <strong>Zero Proxy Attendance:</strong> Enforce 10-minute dynamic cryptographic QR tokens with timing-safe validation and single-use OTP fallback.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#315EFA] shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base text-[#101828] font-sans leading-relaxed">
                  <strong>Zero Data Leakage:</strong> Enforce PostgreSQL Row-Level Security on every query, guaranteeing mathematical isolation by <code>college_id</code>.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#315EFA] shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base text-[#101828] font-sans leading-relaxed">
                  <strong>Sub-Second Response:</strong> Deliver instant scan confirmation, dynamic timetable rendering, and push notifications regardless of device tier.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#315EFA] shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base text-[#101828] font-sans leading-relaxed">
                  <strong>Trustless Public Credentials:</strong> Enable third-party employers to verify student credentials at <code>/verify/:reference</code> without account registration or PII exposure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: SOLUTION ARCHITECTURE
            ========================================================================= */}
        <section aria-label="Solution Architecture" className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-3 text-xs font-mono">
            <span className="font-semibold text-[#101828] uppercase tracking-wider">
              05 // SOLUTION ARCHITECTURE
            </span>
            <span className="text-[#667085]">MULTI-TENANT RELATIONAL OS</span>
          </div>

          <div className="editorial-card p-8 sm:p-12 rounded-[16px] space-y-8 bg-white border border-[#E6E9EF]">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-mono font-semibold tracking-wider uppercase text-[#315EFA]">
                HOLISTIC SYSTEM SOLUTION
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101828] tracking-tight">
                An integrated platform uniting students, faculty, and administration.
              </h2>
              <p className="text-base sm:text-lg text-[#667085] leading-relaxed font-sans">
                {caseStudy.solutionOverview}
              </p>
            </div>

            {/* 4-Stage Experience Flow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-[#E6E9EF]">
              {caseStudy.experienceFlow.map((flow) => (
                <div key={flow.step} className="p-4 rounded-[10px] bg-[#F7F8FA] border border-[#E6E9EF] space-y-2">
                  <span className="text-xs font-mono font-semibold text-[#315EFA] block">
                    STAGE {flow.step} // {flow.label}
                  </span>
                  <p className="text-xs text-[#667085] leading-relaxed font-sans">
                    {flow.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: KEY FEATURES & CAPABILITIES
            ========================================================================= */}
        <section aria-label="Key Features" className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-3 text-xs font-mono">
            <span className="font-semibold text-[#101828] uppercase tracking-wider">
              06 // KEY CAPABILITIES & SUBSYSTEMS
            </span>
            <span className="text-[#667085]">07 CORE ENGINES</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudy.systems.map((system) => (
              <div
                key={system.id}
                className="editorial-card p-6 sm:p-7 rounded-[16px] space-y-4 bg-white border border-[#E6E9EF] hover:border-[#315EFA]/50 transition-all"
              >
                <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-2 text-xs font-mono">
                  <span className="font-semibold text-[#315EFA]">ENGINE {system.number}</span>
                  <span className="text-[10px] uppercase text-[#667085] bg-[#F7F8FA] px-2 py-0.5 rounded-[4px]">
                    {system.tagline}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#101828] tracking-tight">
                  {system.name}
                </h3>
                <p className="text-sm text-[#667085] leading-relaxed font-sans">
                  {system.description}
                </p>
                <ul className="space-y-1.5 pt-2 border-t border-[#E6E9EF] text-xs font-mono text-[#101828]" role="list">
                  {system.capabilities.slice(0, 3).map((cap) => (
                    <li key={cap} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#315EFA] shrink-0" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 7: TECHNOLOGY STACK (VERIFIED)
            ========================================================================= */}
        <section aria-label="Technology Stack" className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-3 text-xs font-mono">
            <span className="font-semibold text-[#101828] uppercase tracking-wider">
              07 // VERIFIED TECHNOLOGY STACK
            </span>
            <span className="text-[#667085]">PRODUCTION ARCHITECTURE</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudy.techStack.map((stack) => (
              <div
                key={stack.category}
                className="bg-[#F7F8FA] border border-[#E6E9EF] p-6 rounded-[16px] space-y-4"
              >
                <div className="flex items-center gap-2 border-b border-[#E6E9EF] pb-2">
                  <Cpu className="h-4 w-4 text-[#315EFA]" />
                  <span className="text-xs font-mono font-semibold uppercase text-[#101828]">
                    {stack.category}
                  </span>
                </div>

                <ul className="space-y-3" role="list">
                  {stack.technologies.map((t) => (
                    <li key={t.name} className="space-y-0.5">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="font-semibold text-[#101828]">{t.name}</span>
                        {t.version && (
                          <span className="text-[#315EFA]">{t.version}</span>
                        )}
                      </div>
                      {t.detail && (
                        <p className="text-[11px] text-[#667085] font-sans">
                          {t.detail}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 8: SCREENSHOTS & ARCHITECTURAL VISUAL GALLERY
            ========================================================================= */}
        <section id="architecture-blueprint" aria-label="Visual Gallery & Architecture" className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-3 text-xs font-mono">
            <span className="font-semibold text-[#101828] uppercase tracking-wider">
              08 // ARCHITECTURAL SCHEMATIC & NODE INSPECTION
            </span>
            <span className="text-[#667085]">INTERACTIVE BLUEPRINT</span>
          </div>

          {/* Interactive Campus Connect Node Visual */}
          <CampusConnectArchitecturalVisual />
        </section>

        {/* =========================================================================
            SECTION 9: REAL IMPLEMENTATION & DEVELOPMENT JOURNEY
            ========================================================================= */}
        <section aria-label="Development Journey" className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-3 text-xs font-mono">
            <span className="font-semibold text-[#101828] uppercase tracking-wider">
              09 // REAL IMPLEMENTATION & EVOLUTION
            </span>
            <span className="text-[#667085]">04 PHASE JOURNEY</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudy.evolution.map((phase) => (
              <div
                key={phase.phase}
                className="bg-[#F7F8FA] border border-[#E6E9EF] p-6 rounded-[16px] space-y-3"
              >
                <span className="text-xs font-mono font-semibold text-[#315EFA]">
                  {phase.phase}
                </span>
                <h3 className="text-base font-bold text-[#101828]">
                  {phase.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#667085] font-sans leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 10: CURRENT PROJECT STATUS & AUDITED METRICS
            ========================================================================= */}
        <section aria-label="Current Status" className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-3 text-xs font-mono">
            <span className="font-semibold text-[#101828] uppercase tracking-wider">
              10 // CURRENT STATUS & MEASURED REPOSITORY TELEMETRY
            </span>
            <span className="text-[#667085]">ZERO SPECULATIVE CODE</span>
          </div>

          <div className="editorial-card p-6 sm:p-8 rounded-[16px] space-y-6 bg-white border border-[#E6E9EF]">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#E6E9EF]">
              {caseStudy.metrics.map((metric, idx) => (
                <div
                  key={metric.label}
                  className={`space-y-1.5 ${idx > 0 ? 'sm:pl-6 pt-4 sm:pt-0' : ''}`}
                >
                  <span className="text-[10px] font-mono text-[#667085] uppercase tracking-widest block">
                    {metric.label}
                  </span>
                  <div className="font-mono text-2xl sm:text-3xl font-bold text-[#101828] tracking-tight">
                    {metric.value}
                  </div>
                  <p className="text-xs text-[#667085] font-sans leading-tight">
                    {metric.sublabel}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#E6E9EF] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#667085]">
              <span>SOURCE: PRODUCTION REPOSITORY AUDIT</span>
              <span className="text-[#315EFA] font-medium">LIVE COMPILATION // SDK 36 RELEASE APK</span>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 11: VERIFIED FUTURE ROADMAP
            ========================================================================= */}
        <section aria-label="Verified Roadmap" className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-3 text-xs font-mono">
            <span className="font-semibold text-[#101828] uppercase tracking-wider">
              11 // VERIFIED FUTURE ROADMAP & SCALABILITY DIRECTIVES
            </span>
            <span className="text-[#667085]">CONTINUOUS ENGINEERING</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#F7F8FA] border border-[#E6E9EF] p-6 rounded-[16px] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#315EFA]">
                <FileCheck2 className="h-4 w-4" />
                <span>DIRECTIVE 01 // STATUTORY REPORTING</span>
              </div>
              <h3 className="text-base font-bold text-[#101828]">
                Statutory Export Automation
              </h3>
              <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                Automated generation of university-compliant monthly attendance registers and examination transcripts exported directly to signed PDF and CSV bundles.
              </p>
            </div>

            <div className="bg-[#F7F8FA] border border-[#E6E9EF] p-6 rounded-[16px] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#315EFA]">
                <Clock className="h-4 w-4" />
                <span>DIRECTIVE 02 // OFFLINE SYNC</span>
              </div>
              <h3 className="text-base font-bold text-[#101828]">
                Offline-First Session Caching
              </h3>
              <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                Enhanced Service Worker background sync using TanStack Query caching for faculty classrooms experiencing intermittent cellular connectivity.
              </p>
            </div>

            <div className="bg-[#F7F8FA] border border-[#E6E9EF] p-6 rounded-[16px] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#315EFA]">
                <Sparkles className="h-4 w-4" />
                <span>DIRECTIVE 03 // FEDERATION</span>
              </div>
              <h3 className="text-base font-bold text-[#101828]">
                Multi-Campus Administrative Federation
              </h3>
              <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                Unified cross-campus administrative visibility for educational trusts governing multiple collegiate units under centralized oversight.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 12: NAVIGATION CLOSURE & CONVERSATION CTA
            ========================================================================= */}
        <section aria-label="Closure & Inquiries" className="bg-[#F7F8FA] border border-[#E6E9EF] p-8 sm:p-12 rounded-[16px] space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#101828]">
                {caseStudy.cta.headline}
              </h3>
              <p className="text-sm sm:text-base text-[#667085] font-sans max-w-2xl">
                {caseStudy.cta.copy}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-[8px] bg-white border border-[#E6E9EF] hover:border-[#101828] text-xs font-mono font-semibold text-[#101828] transition-colors"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>PROJECT ARCHIVE</span>
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-[8px] bg-[#315EFA] text-white text-xs font-mono font-semibold hover:bg-[#254dd4] transition-colors shadow-sm"
              >
                <span>{caseStudy.cta.buttonText}</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CampusConnectPage;
