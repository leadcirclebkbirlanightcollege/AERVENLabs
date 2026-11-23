import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Layers,
  ShieldCheck,
  Activity,
  Terminal,
  ExternalLink,
  Code2,
  GitBranch,
} from 'lucide-react';
import { projectsData } from '../data/projects';
import { useSEO } from '../hooks/useSEO';
import { CampusConnectArchitecturalVisual } from '../components/projects/CampusConnectArchitecturalVisual';

/**
 * ProjectDetailPage — Complete 12-Section Storytelling Framework
 * 1. Project Hero
 * 2. Project Overview
 * 3. Problem or Opportunity
 * 4. Vision and Objectives
 * 5. Solution
 * 6. Key Features
 * 7. Technology Stack (Verified)
 * 8. Screenshots & Architectural Visual Gallery
 * 9. Development Journey
 * 10. Current Project Status
 * 11. Related Projects
 * 12. Back to Projects
 *
 * Strict White-First Design: #FFFFFF bg, #F7F8FA secondary, #101828 text, #315EFA accents.
 */
export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Find target project
  const project = projectsData.find((p) => p.slug === slug);

  useSEO({
    title: project ? `${project.title} — AERVENLabs Case Study` : 'Project Not Found',
    description: project?.description || 'AERVENLabs technology engineering case study.',
    openGraph: project
      ? {
          title: `${project.title} — AERVENLabs`,
          description: project.tagline,
        }
      : undefined,
  });

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const caseStudy = project.caseStudy as any;
  if (!caseStudy) {
    return <Navigate to="/projects" replace />;
  }

  const otherProjects = projectsData.filter((p) => p.slug !== project.slug);

  // Accent color tokens per project
  const getThemeAccent = (id: string) => {
    switch (id) {
      case 'campus-connect':
        return { text: 'text-[#315EFA]', bg: 'bg-[#315EFA]', pill: 'bg-[#F1F3F6] text-[#315EFA] border-[#E6E9EF]' };
      case 'nagriksetu':
        return { text: 'text-[#0284C7]', bg: 'bg-[#0284C7]', pill: 'bg-[#F0F9FF] text-[#0284C7] border-[#BAE6FD]' };
      case 'railverse':
        return { text: 'text-[#7657E8]', bg: 'bg-[#7657E8]', pill: 'bg-[#F5F3FF] text-[#7657E8] border-[#DDD6FE]' };
      case 'aervenlabs-website':
        return { text: 'text-[#315EFA]', bg: 'bg-[#315EFA]', pill: 'bg-[#F1F3F6] text-[#315EFA] border-[#E6E9EF]' };
      default:
        return { text: 'text-[#315EFA]', bg: 'bg-[#315EFA]', pill: 'bg-[#F1F3F6] text-[#315EFA] border-[#E6E9EF]' };
    }
  };

  const theme = getThemeAccent(project.id);

  return (
    <div className="min-h-screen bg-white text-[#101828] overflow-x-hidden">
      {/* =========================================================================
          SECTION 12 (TOP): BACK TO PROJECTS NAV
          ========================================================================= */}
      <div className="border-b border-[#E6E9EF] bg-white sticky top-[64px] z-30">
        <div className="container-architectural py-3 flex items-center justify-between text-xs font-mono">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-[#667085] hover:text-[#101828] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>BACK TO PROJECTS</span>
          </Link>

          <div className="flex items-center gap-2 text-[#667085]">
            <span className="hidden sm:inline">AERVENLABS // REPOSITORY</span>
            <span className="hidden sm:inline">/</span>
            <span className="text-[#101828] font-semibold uppercase">{project.title}</span>
          </div>
        </div>
      </div>

      <div className="container-architectural py-12 sm:py-16 lg:py-20 space-y-20 sm:space-y-28">
        {/* =========================================================================
            SECTION 1: PROJECT HERO
            ========================================================================= */}
        <section aria-label="Project Hero" className="space-y-8 border-b border-[#E6E9EF] pb-12 sm:pb-16">
          <div className="flex flex-wrap items-center gap-3">
            <span className={`px-3 py-1 rounded-full text-xs font-mono font-medium border ${theme.pill}`}>
              {caseStudy.secondaryPositioning || project.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#F7F8FA] border border-[#E6E9EF] text-[#667085]">
              {caseStudy.status || 'ACTIVE SYSTEM'}
            </span>
            {caseStudy.version && (
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#F7F8FA] border border-[#E6E9EF] text-[#667085]">
                {caseStudy.version}
              </span>
            )}
          </div>

          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#101828] leading-[1.06]">
              {project.title}
            </h1>
            <p className="text-xl sm:text-2xl text-[#101828] font-medium font-sans leading-relaxed">
              {caseStudy.primaryTagline || project.tagline}
            </p>
            <p className="text-base sm:text-lg text-[#667085] font-sans leading-relaxed max-w-3xl">
              {caseStudy.shortPositioning || project.description}
            </p>
          </div>

          {/* Platform Badges & Direct Links */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#E6E9EF]">
            <div className="flex flex-wrap items-center gap-2">
              {(caseStudy.platformBadges || project.platformBadges || []).map((badge: string) => (
                <span
                  key={badge}
                  className="px-3 py-1 bg-[#F7F8FA] border border-[#E6E9EF] rounded-[6px] text-xs font-mono text-[#667085]"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {project.links?.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-[8px] text-xs font-mono font-semibold text-white ${theme.bg} hover:opacity-90 shadow-sm transition-opacity`}
                >
                  <span>LIVE PLATFORM</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[8px] text-xs font-mono font-semibold text-[#101828] bg-[#F7F8FA] border border-[#E6E9EF] hover:border-[#101828] transition-colors"
                >
                  <Code2 className="h-3.5 w-3.5" />
                  <span>VIEW CODE</span>
                </a>
              )}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: PROJECT OVERVIEW & ECOSYSTEM CONTEXT
            ========================================================================= */}
        <section aria-label="Project Overview" className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-3 text-xs font-mono">
            <span className="font-semibold text-[#101828] uppercase tracking-wider">
              02 // PROJECT OVERVIEW & INSTITUTIONAL CONTEXT
            </span>
            <span className="text-[#667085]">SCOPE OF SYSTEM</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#101828] tracking-tight">
                Architecting Purpose-Driven Software
              </h2>
              <p className="text-base text-[#667085] leading-relaxed font-sans">
                {caseStudy.shortPositioning}
              </p>
              <p className="text-base text-[#667085] leading-relaxed font-sans">
                Developed under AERVENLabs engineering guidelines, emphasizing zero data monetization, strict state predictability, and direct real-world utility over vanity complexity.
              </p>
            </div>

            <div className="lg:col-span-5 bg-[#F7F8FA] border border-[#E6E9EF] p-6 sm:p-8 rounded-[16px] space-y-4">
              <span className="text-xs font-mono text-[#315EFA] font-semibold tracking-wider uppercase block">
                PARTNER & PILOT CONTEXT
              </span>
              <h3 className="text-lg font-bold text-[#101828]">
                {caseStudy.foundingInstitution?.name || caseStudy.partnerOrInstitution?.name || 'AERVENLabs Core Lab'}
              </h3>
              <p className="text-xs font-mono text-[#667085] uppercase">
                {caseStudy.foundingInstitution?.role || caseStudy.partnerOrInstitution?.role || 'Internal Innovation Platform'}
              </p>
              <div className="h-[1px] w-full bg-[#E6E9EF]" />
              <p className="text-sm text-[#667085] font-sans leading-relaxed">
                {caseStudy.foundingInstitution?.description || caseStudy.partnerOrInstitution?.description || 'Engineered as an internal and external technological benchmark for the AERVENLabs product portfolio.'}
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: PROBLEM OR OPPORTUNITY
            ========================================================================= */}
        <section aria-label="Problems & Challenges" className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-3 text-xs font-mono">
            <span className="font-semibold text-[#101828] uppercase tracking-wider">
              03 // THE PROBLEM OR OPPORTUNITY
            </span>
            <span className="text-[#667085]">CHALLENGES ADDRESSED</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(caseStudy.problems || []).map((prob: any) => (
              <div
                key={prob.number}
                className="editorial-card p-6 rounded-[16px] space-y-3"
              >
                <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-2 text-xs font-mono">
                  <span className={`font-semibold ${theme.text}`}>PROBLEM {prob.number}</span>
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
              04 // VISION AND OBJECTIVES
            </span>
            <span className="text-[#667085]">STRATEGIC MANDATES</span>
          </div>

          <div className="bg-[#F7F8FA] border border-[#E6E9EF] p-8 sm:p-10 rounded-[16px] space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#101828] tracking-tight max-w-3xl">
              Engineering solutions designed to outlast short-term technology cycles.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#E6E9EF]">
              {(caseStudy.objectives || [
                'Ensure zero data leaks through rigorous database-level isolation.',
                'Deliver sub-second response times regardless of device computing capacity.',
                'Provide clean, intuitive interfaces that respect user focus.',
                'Eliminate administrative friction through automated digital workflows.',
              ]).map((obj: string, i: number) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className={`h-5 w-5 ${theme.text} shrink-0 mt-0.5`} />
                  <p className="text-sm sm:text-base text-[#101828] font-sans leading-relaxed">
                    {obj}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: SOLUTION
            ========================================================================= */}
        <section aria-label="The Solution" className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-3 text-xs font-mono">
            <span className="font-semibold text-[#101828] uppercase tracking-wider">
              05 // THE SOLUTION ARCHITECTURE
            </span>
            <span className="text-[#667085]">SYSTEM COMPOSITION</span>
          </div>

          <div className="editorial-card p-8 sm:p-12 rounded-[16px] space-y-6">
            <div className="max-w-3xl space-y-4">
              <span className={`text-xs font-mono font-semibold tracking-wider uppercase ${theme.text}`}>
                HOLISTIC SYSTEM SOLUTION
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101828] tracking-tight">
                An integrated platform built on robust engineering primitives.
              </h2>
              <p className="text-base sm:text-lg text-[#667085] leading-relaxed font-sans">
                {caseStudy.solutionOverview}
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: KEY FEATURES
            ========================================================================= */}
        <section aria-label="Key Features" className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-3 text-xs font-mono">
            <span className="font-semibold text-[#101828] uppercase tracking-wider">
              06 // KEY FEATURES & CAPABILITIES
            </span>
            <span className="text-[#667085]">VERIFIED FUNCTIONALITY</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(caseStudy.features || caseStudy.systems?.map((s: any) => ({
              number: s.number,
              title: s.name,
              description: s.description,
              tag: s.tagline,
            })) || []).map((feat: any) => (
              <div
                key={feat.number}
                className="editorial-card p-6 rounded-[16px] space-y-3 hover:border-[#315EFA]/40 transition-colors"
              >
                <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-2 text-xs font-mono">
                  <span className={`font-semibold ${theme.text}`}>FEATURE {feat.number}</span>
                  {feat.tag && (
                    <span className="text-[10px] uppercase text-[#667085] bg-[#F7F8FA] px-2 py-0.5 rounded-[4px]">
                      {feat.tag}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-[#101828] tracking-tight">
                  {feat.title}
                </h3>
                <p className="text-sm text-[#667085] leading-relaxed font-sans">
                  {feat.description}
                </p>
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
            <span className="text-[#667085]">INFRASTRUCTURE SPECIFICATION</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(caseStudy.techStack || []).map((stack: any) => (
              <div
                key={stack.category}
                className="bg-[#F7F8FA] border border-[#E6E9EF] p-6 rounded-[16px] space-y-4"
              >
                <div className="flex items-center gap-2 border-b border-[#E6E9EF] pb-2">
                  <Cpu className={`h-4 w-4 ${theme.text}`} />
                  <span className="text-xs font-mono font-semibold uppercase text-[#101828]">
                    {stack.category}
                  </span>
                </div>

                <ul className="space-y-3" role="list">
                  {stack.technologies.map((t: any) => (
                    <li key={t.name} className="space-y-0.5">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="font-semibold text-[#101828]">{t.name}</span>
                        {t.version && (
                          <span className="text-[#667085]">{t.version}</span>
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
        <section aria-label="Visual Gallery & Architecture" className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-3 text-xs font-mono">
            <span className="font-semibold text-[#101828] uppercase tracking-wider">
              08 // ARCHITECTURAL BLUEPRINT & GALLERY
            </span>
            <span className="text-[#667085]">SYSTEM SCHEMATIC</span>
          </div>

          {project.slug === 'campus-connect' ? (
            <CampusConnectArchitecturalVisual />
          ) : (
            <div className="bg-[#F7F8FA] border border-[#E6E9EF] p-8 sm:p-12 rounded-[16px] space-y-6">
              <div className="flex items-center gap-3">
                <Layers className={`h-5 w-5 ${theme.text}`} />
                <span className="font-mono text-xs font-semibold uppercase text-[#101828]">
                  {project.title.toUpperCase()} // SYSTEM SCHEMATIC
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                <div className="editorial-card p-6 rounded-[12px] space-y-2">
                  <span className="text-xs font-mono text-[#667085] uppercase">LAYER 01</span>
                  <h4 className="text-base font-bold text-[#101828]">Client Presentation</h4>
                  <p className="text-xs text-[#667085] leading-relaxed">
                    Lightweight, responsive frontend interface designed with strict visual hierarchy and accessibility.
                  </p>
                </div>
                <div className="editorial-card p-6 rounded-[12px] space-y-2">
                  <span className="text-xs font-mono text-[#667085] uppercase">LAYER 02</span>
                  <h4 className="text-base font-bold text-[#101828]">Edge Execution</h4>
                  <p className="text-xs text-[#667085] leading-relaxed">
                    Distributed serverless edge functions providing low-latency validation and compute.
                  </p>
                </div>
                <div className="editorial-card p-6 rounded-[12px] space-y-2">
                  <span className="text-xs font-mono text-[#667085] uppercase">LAYER 03</span>
                  <h4 className="text-base font-bold text-[#101828]">Data Sovereignty</h4>
                  <p className="text-xs text-[#667085] leading-relaxed">
                    Encrypted storage and isolated relational tables ensuring zero data leakage or unauthorized access.
                  </p>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* =========================================================================
            SECTION 9: DEVELOPMENT JOURNEY
            ========================================================================= */}
        <section aria-label="Development Journey" className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-3 text-xs font-mono">
            <span className="font-semibold text-[#101828] uppercase tracking-wider">
              09 // DEVELOPMENT JOURNEY & EVOLUTION
            </span>
            <span className="text-[#667085]">MILESTONE SEQUENCE</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(caseStudy.evolution || []).map((phase: any) => (
              <div
                key={phase.phase}
                className="bg-[#F7F8FA] border border-[#E6E9EF] p-6 rounded-[16px] space-y-3"
              >
                <span className={`text-xs font-mono font-semibold ${theme.text}`}>
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
            SECTION 10: CURRENT PROJECT STATUS
            ========================================================================= */}
        <section aria-label="Current Status" className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-3 text-xs font-mono">
            <span className="font-semibold text-[#101828] uppercase tracking-wider">
              10 // CURRENT PROJECT STATUS
            </span>
            <span className="text-[#667085]">OPERATIONAL STATE</span>
          </div>

          <div className="editorial-card p-6 sm:p-8 rounded-[16px] space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#E6E9EF]">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-[#667085] uppercase tracking-wider">STAGE</span>
                <p className="text-lg font-bold text-[#101828]">
                  {caseStudy.currentStatus?.stage || caseStudy.status || 'Active Production'}
                </p>
              </div>
              <div className="space-y-1 sm:pl-6 pt-3 sm:pt-0">
                <span className="text-[10px] font-mono text-[#667085] uppercase tracking-wider">TIMELINE</span>
                <p className="text-lg font-bold text-[#101828]">
                  {caseStudy.currentStatus?.timeline || '2024 — Present'}
                </p>
              </div>
              <div className="space-y-1 sm:pl-6 pt-3 sm:pt-0">
                <span className="text-[10px] font-mono text-[#667085] uppercase tracking-wider">READINESS</span>
                <p className="text-lg font-bold text-[#315EFA]">
                  {caseStudy.currentStatus?.readiness || 'Deployed / Ready'}
                </p>
              </div>
              <div className="space-y-1 sm:pl-6 pt-3 sm:pt-0">
                <span className="text-[10px] font-mono text-[#667085] uppercase tracking-wider">PRIMARY FOCUS</span>
                <p className="text-sm font-sans text-[#667085]">
                  {caseStudy.currentStatus?.focus || 'System resilience, continuous performance audits'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 11: RELATED PROJECTS
            ========================================================================= */}
        <section aria-label="Related Projects" className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-3 text-xs font-mono">
            <span className="font-semibold text-[#101828] uppercase tracking-wider">
              11 // RELATED PROJECTS IN ECOSYSTEM
            </span>
            <span className="text-[#667085]">AERVENLABS ARCHIVE</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherProjects.map((other) => (
              <Link
                key={other.id}
                to={`/projects/${other.slug}`}
                className="group editorial-card p-6 rounded-[16px] space-y-3 hover:border-[#315EFA]/50 transition-all block"
              >
                <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-2 text-xs font-mono text-[#667085]">
                  <span>SYS_ID // 0{other.order}</span>
                  <ArrowRight className="h-3.5 w-3.5 text-[#315EFA] group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="text-lg font-bold text-[#101828] group-hover:text-[#315EFA] transition-colors">
                  {other.title}
                </h3>
                <p className="text-xs text-[#667085] line-clamp-2">
                  {other.tagline}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 12: BACK TO PROJECTS & CTA
            ========================================================================= */}
        <section aria-label="Closure & Inquiries" className="bg-[#F7F8FA] border border-[#E6E9EF] p-8 sm:p-12 rounded-[16px] space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-[#101828]">
                Have an idea for a project like {project.title}?
              </h3>
              <p className="text-sm text-[#667085] font-sans">
                Let's turn ambitious ideas into meaningful technology.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-[8px] bg-white border border-[#E6E9EF] hover:border-[#101828] text-xs font-mono font-semibold text-[#101828] transition-colors"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>ALL PROJECTS</span>
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-[8px] bg-[#315EFA] text-white text-xs font-mono font-semibold hover:bg-[#254dd4] transition-colors shadow-sm"
              >
                <span>START A CONVERSATION</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
