import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ArrowUpRight, 
  ExternalLink, 
  Shield, 
  Lock, 
  Database, 
  Layers, 
  Terminal, 
  Building2, 
  Cpu, 
  Activity, 
  CheckCircle2, 
  FileCode2, 
  GitCommit, 
  TestTube2,
  Boxes
} from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { routeSEOConfig } from '../data/seo';
import { generateBreadcrumbSchema, generateSoftwareApplicationSchema } from '../lib/seo';
import { projectsData } from '../data/projects';
import { CampusConnectHeroVisual } from '../components/case-study/CampusConnectHeroVisual';
import { SystemModulesExplorer } from '../components/case-study/SystemModulesExplorer';
import { RoleArchitectureMatrix } from '../components/case-study/RoleArchitectureMatrix';
import { ArchitecturePipeline } from '../components/case-study/ArchitecturePipeline';
import { buttonVariants } from '../components/ui/button';

export const CampusConnectPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const campusConnectProject = projectsData.find((p) => p.slug === 'campus-connect');
  const caseStudy = campusConnectProject?.caseStudy;

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useSEO(
    routeSEOConfig.campusConnect,
    campusConnectProject
      ? {
          '@context': 'https://schema.org',
          '@graph': [
            generateSoftwareApplicationSchema(campusConnectProject),
            ...(routeSEOConfig.campusConnect?.breadcrumbs
              ? [generateBreadcrumbSchema(routeSEOConfig.campusConnect.breadcrumbs)]
              : []),
          ],
        }
      : undefined
  );

  if (!caseStudy) {
    return null;
  }

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
        duration: prefersReducedMotion ? 0.01 : 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <article 
      ref={containerRef}
      className="min-h-screen bg-black text-foreground selection:bg-white selection:text-black"
    >
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <header className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-36 border-b border-border-subtle overflow-hidden">
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
          {/* Eyebrow and Status Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border-subtle pb-4 mb-8">
            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-white" aria-hidden="true" />
              <span className="font-mono text-xs font-semibold text-white tracking-widest uppercase">
                PROJECT 01 // FLAGSHIP PRODUCT
              </span>
              <span className="h-3 w-[1px] bg-white/20 hidden sm:inline" aria-hidden="true" />
              <span className="text-tech-label text-neutral-400 font-mono hidden sm:inline">
                {caseStudy.category}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 text-tech-label font-mono text-white bg-surface-dark border border-white/20 rounded-[2px]">
                {caseStudy.status}
              </span>
              <span className="px-2.5 py-0.5 text-tech-label font-mono text-neutral-300 bg-surface-dark border border-white/10 rounded-[2px]">
                {caseStudy.version}
              </span>
            </div>
          </div>

          {/* Hero Titles & Short Positioning */}
          <div className="grid-architectural items-start gap-8 lg:gap-12 mb-12 sm:mb-16">
            <div className="lg:col-span-8 space-y-6">
              <h1 className="text-display-sm sm:text-display-md lg:text-display-lg font-bold tracking-tight text-white uppercase leading-none font-sans">
                {caseStudy.title}
              </h1>

              <p className="text-heading-2 sm:text-heading-1 font-mono text-neutral-300 tracking-tight leading-snug">
                {caseStudy.primaryTagline}
              </p>

              <p className="text-base sm:text-lg text-secondary-text leading-relaxed font-sans max-w-3xl">
                {caseStudy.shortPositioning}
              </p>
            </div>

            {/* Platform Badges & Direct Links */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-6 lg:border-l lg:border-border-subtle lg:pl-8">
              <div className="space-y-3">
                <span className="text-tech-label text-neutral-500 font-mono block">
                  DEPLOYMENT SPECIFICATION //
                </span>
                <div className="flex flex-col gap-2">
                  {caseStudy.platformBadges.map((badge) => (
                    <div
                      key={badge}
                      className="px-3 py-2 text-xs font-mono text-neutral-300 bg-surface-level-1 border border-border-subtle rounded-[2px] flex items-center justify-between"
                    >
                      <span>{badge}</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <a
                  href={`https://${caseStudy.deployment.web.domains[0]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${buttonVariants({
                    variant: 'default',
                    size: 'lg',
                  })} group gap-2.5 w-full justify-center`}
                >
                  <span className="tracking-wide">VISIT LIVE DEPLOYMENT</span>
                  <ExternalLink className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <p className="text-[10px] font-mono text-neutral-500 text-center">
                  Production endpoint: {caseStudy.deployment.web.domains[0]}
                </p>
              </div>
            </div>
          </div>

          {/* Hero Visual: Technical Product Architecture Visualization */}
          <div className="mt-8 sm:mt-12">
            <div className="mb-3 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span>FIG 01 // CENTRAL OPERATING LAYER MATRIX</span>
              <span>RESTRICTED ARCHITECTURE SCHEMATIC</span>
            </div>
            <CampusConnectHeroVisual />
          </div>
        </div>
      </header>

      {/* =========================================================================
          01 / THE PLATFORM
          ========================================================================= */}
      <section 
        id="platform" 
        aria-labelledby="platform-title"
        className="py-24 md:py-32 lg:py-40 border-b border-border-subtle"
      >
        <div className="container-architectural">
          <div className="grid-architectural items-start gap-8 lg:gap-12">
            <div className="lg:col-span-4 space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                <span className="text-eyebrow text-neutral-400">01 / THE PLATFORM</span>
              </div>
              <p className="text-tech-label text-neutral-500 font-mono">
                COLLEGIATE NERVOUS SYSTEM
              </p>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <h2
                id="platform-title"
                className="text-heading-1 sm:text-display-sm font-semibold tracking-tight text-white leading-tight"
              >
                One operating layer for the modern campus.
              </h2>

              <p className="text-lg sm:text-xl text-secondary-text leading-relaxed font-sans max-w-3xl">
                {caseStudy.solutionOverview}
              </p>

              {/* Core Pillars Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-border-subtle">
                <div className="space-y-1.5">
                  <span className="text-tech-label text-white font-mono">01 // CONVERGENCE</span>
                  <p className="text-xs text-neutral-400 font-sans">
                    Unifies disconnected attendance registers, timetable sheets, notices, and marksheets into a single interface.
                  </p>
                </div>
                <div className="space-y-1.5">
                  <span className="text-tech-label text-white font-mono">02 // ISOLATION</span>
                  <p className="text-xs text-neutral-400 font-sans">
                    Multi-tenant data scoping guarantees complete institutional privacy via PostgreSQL Row-Level Security.
                  </p>
                </div>
                <div className="space-y-1.5">
                  <span className="text-tech-label text-white font-mono">03 // VERIFIABILITY</span>
                  <p className="text-xs text-neutral-400 font-sans">
                    Zero-auth public endpoint enables instant cryptographic verification of student credentials and certificates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          02 / THE PROBLEM
          ========================================================================= */}
      <section 
        id="problem" 
        aria-labelledby="problem-title"
        className="py-24 md:py-32 lg:py-40 border-b border-border-subtle surface-level-1"
      >
        <div className="container-architectural">
          <div className="grid-architectural items-start gap-8 lg:gap-12 mb-16">
            <div className="lg:col-span-4 space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                <span className="text-eyebrow text-neutral-400">02 / THE PROBLEM</span>
              </div>
              <p className="text-tech-label text-neutral-500 font-mono">
                INSTITUTIONAL WORKFLOW FRICTION
              </p>
            </div>

            <div className="lg:col-span-8">
              <h2
                id="problem-title"
                className="text-heading-1 sm:text-display-sm font-semibold tracking-tight text-white leading-tight"
              >
                Higher education is often fragmented across disconnected workflows.
              </h2>
            </div>
          </div>

          {/* 6 Problem Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {caseStudy.problems.map((problem) => (
              <div
                key={problem.number}
                className="surface-level-2 border border-border-subtle p-6 rounded-[2px] space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-border-subtle pb-3">
                    <span className="text-xs font-mono font-bold text-white">
                      AREA {problem.number}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-500">OPERATIONAL PAIN</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight">
                    {problem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-secondary-text leading-relaxed font-sans">
                    {problem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          03 / THE SOLUTION
          ========================================================================= */}
      <section 
        id="solution" 
        aria-labelledby="solution-title"
        className="py-24 md:py-32 lg:py-40 border-b border-border-subtle"
      >
        <div className="container-architectural space-y-16">
          <div className="grid-architectural items-start gap-8 lg:gap-12">
            <div className="lg:col-span-4 space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                <span className="text-eyebrow text-neutral-400">03 / THE SOLUTION</span>
              </div>
              <p className="text-tech-label text-neutral-500 font-mono">
                ROLE-ISOLATED ARCHITECTURE
              </p>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <h2
                id="solution-title"
                className="text-heading-1 sm:text-display-sm font-semibold tracking-tight text-white leading-tight"
              >
                A connected operating system for the entire institution.
              </h2>
              <p className="text-base sm:text-lg text-secondary-text leading-relaxed font-sans max-w-2xl">
                Rather than forcing everyone into an undifferentiated portal, Campus Connect deploys strictly role-isolated workspaces for Students, Faculty, Administrators, Platform Operators, and External Verifiers.
              </p>
            </div>
          </div>

          {/* Solution Topology Representation */}
          <div className="surface-level-1 border border-border-subtle rounded-[2px] p-6 sm:p-10 space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border-subtle pb-4 text-xs font-mono text-neutral-400">
              <span>TOPOLOGY // MULTI-ACTOR HUB ARCHITECTURE</span>
              <span>ENFORCED BY ROW-LEVEL SECURITY</span>
            </div>

            <div className="max-w-2xl mx-auto py-6">
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 items-center text-center">
                <div className="surface-level-2 border border-border-subtle p-3 rounded-[2px]">
                  <span className="text-xs font-mono font-semibold text-white">STUDENT</span>
                  <span className="text-[10px] text-neutral-500 block mt-0.5">Learner UI</span>
                </div>
                <div className="hidden sm:block text-neutral-600 font-mono text-xs">──┼──</div>
                <div className="surface-level-2 border-2 border-white p-4 rounded-[2px] bg-black">
                  <span className="text-xs font-mono font-bold text-white block">CAMPUS CONNECT</span>
                  <span className="text-[9px] font-mono text-neutral-400 uppercase">SHARED OS CORE</span>
                </div>
                <div className="hidden sm:block text-neutral-600 font-mono text-xs">──┼──</div>
                <div className="surface-level-2 border border-border-subtle p-3 rounded-[2px]">
                  <span className="text-xs font-mono font-semibold text-white">ADMIN</span>
                  <span className="text-[10px] text-neutral-500 block mt-0.5">Governance</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center text-center mt-4 pt-4 border-t border-white/10">
                <div className="surface-level-2 border border-border-subtle p-3 rounded-[2px]">
                  <span className="text-xs font-mono font-semibold text-white">FACULTY</span>
                  <span className="text-[10px] text-neutral-500 block mt-0.5">Lecture Control</span>
                </div>
                <div className="surface-level-2 border border-border-subtle p-3 rounded-[2px]">
                  <span className="text-xs font-mono font-semibold text-white">SUPER ADMIN</span>
                  <span className="text-[10px] text-neutral-500 block mt-0.5">Multi-Tenant Ops</span>
                </div>
                <div className="surface-level-2 border border-border-subtle p-3 rounded-[2px]">
                  <span className="text-xs font-mono font-semibold text-white">PUBLIC VERIFIER</span>
                  <span className="text-[10px] text-neutral-500 block mt-0.5">Zero-Auth /verify</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          04 / THE SYSTEM (8 Operational Modules)
          ========================================================================= */}
      <section 
        id="systems" 
        aria-labelledby="systems-title"
        className="py-24 md:py-32 lg:py-40 border-b border-border-subtle"
      >
        <div className="container-architectural space-y-12">
          <div className="grid-architectural items-start gap-8 lg:gap-12">
            <div className="lg:col-span-4 space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                <span className="text-eyebrow text-neutral-400">04 / THE SYSTEM</span>
              </div>
              <p className="text-tech-label text-neutral-500 font-mono">
                8 CORE OPERATIONAL SUBSYSTEMS
              </p>
            </div>

            <div className="lg:col-span-8">
              <h2
                id="systems-title"
                className="text-heading-1 sm:text-display-sm font-semibold tracking-tight text-white leading-tight"
              >
                One platform. Multiple operational layers.
              </h2>
            </div>
          </div>

          {/* Interactive System Explorer */}
          <SystemModulesExplorer systems={caseStudy.systems} />
        </div>
      </section>

      {/* =========================================================================
          05 / BUILT FOR EVERY ROLE
          ========================================================================= */}
      <section 
        id="roles" 
        aria-labelledby="roles-title"
        className="py-24 md:py-32 lg:py-40 border-b border-border-subtle surface-level-1"
      >
        <div className="container-architectural space-y-12">
          <div className="grid-architectural items-start gap-8 lg:gap-12">
            <div className="lg:col-span-4 space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                <span className="text-eyebrow text-neutral-400">05 / BUILT FOR EVERY ROLE</span>
              </div>
              <p className="text-tech-label text-neutral-500 font-mono">
                PERSONA ISOLATION & CAPABILITIES
              </p>
            </div>

            <div className="lg:col-span-8">
              <h2
                id="roles-title"
                className="text-heading-1 sm:text-display-sm font-semibold tracking-tight text-white leading-tight"
              >
                Delivering tailored authority to every campus participant.
              </h2>
            </div>
          </div>

          {/* Role Matrix Component */}
          <RoleArchitectureMatrix personas={caseStudy.personas} />
        </div>
      </section>

      {/* =========================================================================
          06 / THE EXPERIENCE (Conceptual End-to-End Flow)
          ========================================================================= */}
      <section 
        id="experience" 
        aria-labelledby="experience-title"
        className="py-24 md:py-32 lg:py-40 border-b border-border-subtle"
      >
        <div className="container-architectural space-y-16">
          <div className="grid-architectural items-start gap-8 lg:gap-12">
            <div className="lg:col-span-4 space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                <span className="text-eyebrow text-neutral-400">06 / THE EXPERIENCE</span>
              </div>
              <p className="text-tech-label text-neutral-500 font-mono">
                CONNECTED LIFECYCLE
              </p>
            </div>

            <div className="lg:col-span-8">
              <h2
                id="experience-title"
                className="text-heading-1 sm:text-display-sm font-semibold tracking-tight text-white leading-tight"
              >
                The continuous collegiate ecosystem flow.
              </h2>
            </div>
          </div>

          {/* Experience Flow Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
            {caseStudy.experienceFlow.map((step, idx) => (
              <div
                key={step.step}
                className="surface-level-1 border border-border-subtle p-4 rounded-[2px] space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-neutral-500 font-bold">{step.step}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                  </div>
                  <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider">
                    {step.label}
                  </h3>
                  <p className="text-xs text-secondary-text font-sans leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {idx < caseStudy.experienceFlow.length - 1 && (
                  <div className="hidden lg:flex justify-end pt-2 text-neutral-600">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          07 / THE ARCHITECTURE & TECH STACK
          ========================================================================= */}
      <section 
        id="architecture" 
        aria-labelledby="architecture-title"
        className="py-24 md:py-32 lg:py-40 border-b border-border-subtle surface-level-1"
      >
        <div className="container-architectural space-y-16">
          <div className="grid-architectural items-start gap-8 lg:gap-12">
            <div className="lg:col-span-4 space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                <span className="text-eyebrow text-neutral-400">07 / THE ARCHITECTURE</span>
              </div>
              <p className="text-tech-label text-neutral-500 font-mono">
                ENGINEERING FOUNDATIONS
              </p>
            </div>

            <div className="lg:col-span-8 space-y-3">
              <h2
                id="architecture-title"
                className="text-heading-1 sm:text-display-sm font-semibold tracking-tight text-white leading-tight"
              >
                {caseStudy.architecture.headline}
              </h2>
              <p className="text-base sm:text-lg text-secondary-text leading-relaxed font-sans max-w-2xl">
                {caseStudy.architecture.description}
              </p>
            </div>
          </div>

          {/* Architecture Pipeline & Tech Stack */}
          <ArchitecturePipeline
            layers={caseStudy.architecture.layers}
            techStack={caseStudy.techStack}
          />
        </div>
      </section>

      {/* =========================================================================
          08 / TRUST & ISOLATION (Security & Multi-Tenancy)
          ========================================================================= */}
      <section 
        id="security" 
        aria-labelledby="security-title"
        className="py-24 md:py-32 lg:py-40 border-b border-border-subtle"
      >
        <div className="container-architectural space-y-16">
          <div className="grid-architectural items-start gap-8 lg:gap-12">
            <div className="lg:col-span-4 space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                <span className="text-eyebrow text-neutral-400">08 / TRUST & ISOLATION</span>
              </div>
              <p className="text-tech-label text-neutral-500 font-mono">
                MULTI-TENANCY & DATA PROTECTION
              </p>
            </div>

            <div className="lg:col-span-8 space-y-3">
              <h2
                id="security-title"
                className="text-heading-1 sm:text-display-sm font-semibold tracking-tight text-white leading-tight"
              >
                {caseStudy.securityAndMultiTenancy.headline}
              </h2>
              <p className="text-base sm:text-lg text-secondary-text leading-relaxed font-sans max-w-2xl">
                {caseStudy.securityAndMultiTenancy.description}
              </p>
            </div>
          </div>

          {/* Security Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {caseStudy.securityAndMultiTenancy.points.map((pt, idx) => (
              <div
                key={idx}
                className="surface-level-1 border border-border-subtle p-6 rounded-[2px] space-y-3"
              >
                <div className="flex items-center gap-2.5 text-white">
                  <Shield className="h-4 w-4 text-neutral-300" />
                  <h3 className="text-sm font-mono font-semibold tracking-wide">
                    {pt.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-secondary-text leading-relaxed font-sans">
                  {pt.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          VERIFIED PROJECT SCALE METRICS
          ========================================================================= */}
      <section 
        aria-label="Verified Project Metrics"
        className="py-16 sm:py-20 border-b border-border-subtle surface-level-1"
      >
        <div className="container-architectural">
          <div className="mb-6 flex items-center justify-between text-xs font-mono text-neutral-400">
            <span className="uppercase tracking-wider">VERIFIED ENGINEERING SCALE // SOURCE REPOSITORY AUDIT</span>
            <span>DATA AS OF v1.0.0</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {caseStudy.metrics.map((metric) => (
              <div
                key={metric.label}
                className="surface-level-2 border border-border-subtle p-4 sm:p-5 rounded-[2px] space-y-2 text-center"
              >
                <span className="font-mono text-2xl sm:text-3xl lg:text-4xl font-bold text-white block">
                  {metric.value}
                </span>
                <span className="text-[10px] sm:text-xs font-mono font-semibold text-neutral-300 block uppercase tracking-wider">
                  {metric.label}
                </span>
                {metric.sublabel && (
                  <span className="text-[9px] font-mono text-neutral-500 block">
                    {metric.sublabel}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          09 / DEPLOYMENT & PLATFORMS
          ========================================================================= */}
      <section 
        id="deployment" 
        aria-labelledby="deployment-title"
        className="py-24 md:py-32 lg:py-40 border-b border-border-subtle"
      >
        <div className="container-architectural space-y-16">
          <div className="grid-architectural items-start gap-8 lg:gap-12">
            <div className="lg:col-span-4 space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                <span className="text-eyebrow text-neutral-400">09 / DEPLOYMENT</span>
              </div>
              <p className="text-tech-label text-neutral-500 font-mono">
                RELEASE SPECIFICATION
              </p>
            </div>

            <div className="lg:col-span-8">
              <h2
                id="deployment-title"
                className="text-heading-1 sm:text-display-sm font-semibold tracking-tight text-white leading-tight"
              >
                Production-deployed across multi-channel environments.
              </h2>
            </div>
          </div>

          {/* Deployment Channels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Channel 1: Web */}
            <div className="surface-level-1 border border-border-subtle p-6 rounded-[2px] space-y-4">
              <div className="flex items-center justify-between border-b border-border-subtle pb-3">
                <span className="text-xs font-mono font-bold text-white uppercase">WEB PLATFORM</span>
                <span className="text-[10px] font-mono text-white bg-white/10 px-2 py-0.5 rounded-[2px]">PRODUCTION</span>
              </div>
              <p className="text-xs font-mono text-neutral-400">{caseStudy.deployment.web.type}</p>
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono text-neutral-500 block uppercase">PRODUCTION HOSTS //</span>
                {caseStudy.deployment.web.domains.map((dom) => (
                  <a
                    key={dom}
                    href={`https://${dom}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-xs font-mono text-neutral-300 hover:text-white surface-level-2 px-3 py-2 rounded-[2px] border border-border-subtle transition-colors"
                  >
                    <span>{dom}</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                ))}
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                {caseStudy.deployment.web.description}
              </p>
            </div>

            {/* Channel 2: Android */}
            <div className="surface-level-1 border border-border-subtle p-6 rounded-[2px] space-y-4">
              <div className="flex items-center justify-between border-b border-border-subtle pb-3">
                <span className="text-xs font-mono font-bold text-white uppercase">ANDROID PLATFORM</span>
                <span className="text-[10px] font-mono text-white bg-white/10 px-2 py-0.5 rounded-[2px]">RELEASE BUILD</span>
              </div>
              <p className="text-xs font-mono text-neutral-400">{caseStudy.deployment.android.version}</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono surface-level-2 px-3 py-2 rounded-[2px] border border-border-subtle">
                  <span className="text-neutral-400">TARGET SDK</span>
                  <span className="text-white font-semibold">{caseStudy.deployment.android.targetSdk}</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono surface-level-2 px-3 py-2 rounded-[2px] border border-border-subtle">
                  <span className="text-neutral-400">ARTIFACTS</span>
                  <span className="text-white font-semibold">APK & AAB</span>
                </div>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                {caseStudy.deployment.android.description}
              </p>
            </div>

            {/* Channel 3: iOS */}
            <div className="surface-level-1 border border-border-subtle p-6 rounded-[2px] space-y-4">
              <div className="flex items-center justify-between border-b border-border-subtle pb-3">
                <span className="text-xs font-mono font-bold text-white uppercase">IOS PLATFORM</span>
                <span className="text-[10px] font-mono text-neutral-400 bg-white/5 px-2 py-0.5 rounded-[2px]">PWA ACCESSIBLE</span>
              </div>
              <p className="text-xs font-mono text-neutral-400">{caseStudy.deployment.ios.type}</p>
              <div className="surface-level-2 p-3 rounded-[2px] border border-border-subtle">
                <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                  {caseStudy.deployment.ios.note}
                </p>
              </div>
              <p className="text-xs text-neutral-500 font-mono">
                Optimized for Safari Mobile standalone mode.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FOUNDING INSTITUTION PARTNER
          ========================================================================= */}
      <section 
        aria-labelledby="partner-title"
        className="py-24 md:py-32 lg:py-40 border-b border-border-subtle surface-level-1"
      >
        <div className="container-architectural">
          <div className="max-w-4xl mx-auto border border-border-subtle surface-level-2 p-8 sm:p-12 lg:p-16 rounded-[2px] space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border-subtle pb-4">
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                <span className="text-eyebrow text-neutral-400">FOUNDING INSTITUTION PARTNER</span>
              </div>
              <span className="text-tech-label text-neutral-500 font-mono">
                OPERATIONAL VALIDATION
              </span>
            </div>

            <div className="space-y-4">
              <h2 
                id="partner-title"
                className="text-heading-1 sm:text-display-sm font-bold text-white tracking-tight leading-tight"
              >
                {caseStudy.foundingInstitution.name}
              </h2>
              <p className="text-sm font-mono text-neutral-300 uppercase tracking-wider">
                {caseStudy.foundingInstitution.role} · {caseStudy.foundingInstitution.relationship}
              </p>
              <div className="h-[1px] w-16 bg-white/20" aria-hidden="true" />
              <p className="text-base sm:text-lg text-secondary-text font-sans leading-relaxed">
                {caseStudy.foundingInstitution.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          10 / THE EVOLUTION
          ========================================================================= */}
      <section 
        id="evolution" 
        aria-labelledby="evolution-title"
        className="py-24 md:py-32 lg:py-40 border-b border-border-subtle"
      >
        <div className="container-architectural space-y-16">
          <div className="grid-architectural items-start gap-8 lg:gap-12">
            <div className="lg:col-span-4 space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                <span className="text-eyebrow text-neutral-400">10 / THE EVOLUTION</span>
              </div>
              <p className="text-tech-label text-neutral-500 font-mono">
                ENGINEERING TRAJECTORY
              </p>
            </div>

            <div className="lg:col-span-8">
              <h2
                id="evolution-title"
                className="text-heading-1 sm:text-display-sm font-semibold tracking-tight text-white leading-tight"
              >
                From lecture attendance to an institutional operating system.
              </h2>
            </div>
          </div>

          {/* 4 Evolutionary Phases */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {caseStudy.evolution.map((phase) => (
              <div
                key={phase.phase}
                className="surface-level-1 border border-border-subtle p-6 rounded-[2px] space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">
                    {phase.phase}
                  </span>
                  <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider">
                    {phase.title}
                  </h3>
                  <p className="text-xs text-secondary-text font-sans leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CLOSING CTA
          ========================================================================= */}
      <section 
        id="cta" 
        aria-labelledby="cta-title"
        className="py-28 md:py-36 lg:py-44 surface-level-1 relative overflow-hidden"
      >
        <div className="container-architectural relative z-10 text-center max-w-3xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 border border-border-subtle bg-black px-3.5 py-1 rounded-[2px]">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            <span className="text-tech-label text-neutral-300 font-mono tracking-widest">
              {caseStudy.cta.eyebrow}
            </span>
          </div>

          <h2
            id="cta-title"
            className="text-display-sm sm:text-display-md font-bold tracking-tight text-white uppercase font-sans leading-tight"
          >
            {caseStudy.cta.headline}
          </h2>

          <p className="text-base sm:text-lg text-secondary-text leading-relaxed font-sans">
            {caseStudy.cta.copy}
          </p>

          <div className="pt-4">
            <Link
              to={caseStudy.cta.href}
              className={`${buttonVariants({
                variant: 'default',
                size: 'lg',
              })} group gap-2.5 px-8 py-4 text-sm font-mono tracking-wider`}
            >
              <span>{caseStudy.cta.buttonText}</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
};

export default CampusConnectPage;
