import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ExternalLink,
  ArrowRight,
  Sparkles,
  Calendar,
  MapPin,
  Trophy,
  Users,
  Compass,
  FileText,
  Layers,
  CheckCircle2,
  Cpu,
  GraduationCap,
  Music,
  Palette,
  Gamepad2,
  Activity,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { routeSEOConfig } from '../data/seo';
import { generateBreadcrumbSchema } from '../lib/seo';
import { unnatiCaseStudy } from '../data/projects';

/**
 * UnnatiPage — Dedicated Project Detail Showcase (/projects/unnati-2026-27).
 *
 * OFFICIAL WORK: UNNATI 2026–27 — Roots & Rhythm
 * 16th Inter-Collegiate Fest | MKMP College Thakurli
 * Live Website: https://unnatiatmkmp.runs-on.dev/
 *
 * Adheres strictly to the AERVENLabs white-first design system with subtle
 * festival accents (crimson #881337 and warm ivory tones), verified facts only.
 */
export const UnnatiPage: React.FC = () => {
  useSEO(
    routeSEOConfig.unnati,
    routeSEOConfig.unnati?.breadcrumbs
      ? generateBreadcrumbSchema(routeSEOConfig.unnati.breadcrumbs)
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

  const competitionCategories = [
    {
      category: 'Performing Arts',
      icon: Music,
      events: [
        'Dance Solo',
        'Dance Group',
        'Singing Solo',
        'Singing Group',
        'Ethnic Fusion Fashion Show',
        'NAAD – The Soul of Music',
      ],
      description: 'Stage spectacles celebrating rhythm, choreography, vocals, and musical harmony.',
    },
    {
      category: 'Fine Arts & Crafts',
      icon: Palette,
      events: [
        'Rangoli',
        'Sketching',
        'Mehendi',
        'Tattoo Making',
        'Nail Art',
        'Hair Styling',
      ],
      description: 'Traditional visual expressions, precision canvas work, and intricate body artistry.',
    },
    {
      category: 'Sports & Mind Games',
      icon: Activity,
      events: [
        'Box Cricket (Tournament)',
        'Chess – Boys',
        'Chess – Girls',
        'Carrom – Boys',
        'Carrom – Girls',
      ],
      description: 'Fast-paced athletic competition and strategic 64-square cognitive showdowns.',
    },
    {
      category: 'eSports & Gaming',
      icon: Gamepad2,
      events: [
        'BGMI (Battlegrounds Mobile India)',
        'Free Fire',
      ],
      description: 'High-intensity collegiate battle royale tournaments with synchronized squad play.',
    },
    {
      category: 'Literary, Media & Management',
      icon: Trophy,
      events: [
        'Brand Battle (Management)',
        'Inter-Collegiate Quiz',
        'Reel Making (Content Creation)',
        'Photography',
      ],
      description: 'Intellectual problem-solving, corporate branding acumen, and cinematic campus framing.',
    },
  ];

  return (
    <div
      data-testid="route-unnati"
      className="min-h-screen bg-white text-[#101828] overflow-x-hidden"
    >
      {/* =========================================================================
          01 / HERO EXPERIENCE: UNNATI BRANDING & IDENTITY
      ========================================================================== */}
      <section
        id="unnati-hero"
        aria-labelledby="unnati-hero-title"
        className="relative overflow-hidden bg-white border-b border-[#E6E9EF] pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-16 sm:pb-24"
      >
        <div className="container-architectural relative z-10 w-full space-y-12">
          {/* Breadcrumb Navigation */}
          <motion.nav
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-mono text-[#667085]"
          >
            <Link to="/" className="hover:text-[#101828] transition-colors">
              HOME
            </Link>
            <span aria-hidden="true">/</span>
            <Link to="/projects" className="hover:text-[#101828] transition-colors">
              OUR WORK
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#881337] font-semibold" aria-current="page">
              UNNATI 2026–27
            </span>
          </motion.nav>

          {/* Top Hairline Metadata Strip */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E6E9EF] pb-4 text-xs font-mono text-[#667085]"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#881337]" aria-hidden="true" />
              <span className="font-semibold text-[#101828] uppercase tracking-wider">
                SELECTED WORK // 02
              </span>
              <span className="hidden sm:inline text-[#E6E9EF]" aria-hidden="true">|</span>
              <span className="text-[#881337] font-medium uppercase tracking-wider">
                16TH INTER-COLLEGIATE FESTIVAL
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#881337]/10 text-[#881337] border border-[#881337]/20 font-semibold text-[11px]">
                MKMP COLLEGE THAKURLI
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#F1F3F6] text-[#101828] border border-[#E6E9EF] text-[11px]">
                ACTIVE PRODUCTION
              </span>
            </div>
          </motion.div>

          {/* Monumental Headline & Narrative Composition */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start"
          >
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-2">
                <span className="inline-block text-xs font-mono font-semibold tracking-widest text-[#881337] uppercase">
                  THEME: ROOTS &amp; RHYTHM
                </span>
                <h1
                  id="unnati-hero-title"
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#101828] leading-[1.05]"
                >
                  UNNATI <span className="text-[#881337]">2026–27.</span>
                </h1>
              </div>

              <p className="text-lg sm:text-xl text-[#667085] leading-relaxed max-w-3xl font-sans">
                The official digital event platform engineered for the landmark 16th Inter-Collegiate Cultural Festival at MKMP College Thakurli. Unifying 23 competitions, interactive multi-venue schedules, rulebook governance, and online registration into a cohesive digital experience.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://unnatiatmkmp.runs-on.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#881337] hover:bg-[#6b0f2b] text-white text-sm font-semibold rounded-[8px] transition-all duration-200 shadow-sm shadow-[#881337]/20 active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-[#881337]"
                >
                  <span>Visit Live Website</span>
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>

                <a
                  href="#overview"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#F7F8FA] hover:bg-[#F1F3F6] text-[#101828] text-sm font-medium border border-[#E6E9EF] rounded-[8px] transition-colors"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="h-4 w-4 text-[#667085]" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Right Meta Card: Verified Institutional Ledger */}
            <div className="lg:col-span-4 bg-[#F7F8FA] border border-[#E6E9EF] rounded-[16px] p-6 sm:p-7 space-y-5">
              <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-3 text-xs font-mono">
                <span className="font-semibold text-[#101828]">INSTITUTIONAL DOSSIER</span>
                <span className="text-[#881337]">VERIFIED SPEC</span>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div className="space-y-1">
                  <span className="text-[#667085] uppercase tracking-wider block">Host Institution</span>
                  <p className="text-[#101828] font-semibold text-sm leading-snug">
                    MKMP Senior College of Commerce &amp; Science
                  </p>
                  <p className="text-[#667085] text-[11px]">
                    Shri Dombivli Mitra Mandal
                  </p>
                </div>

                <div className="space-y-1 pt-2 border-t border-[#E6E9EF]">
                  <span className="text-[#667085] uppercase tracking-wider block">Festival Dates</span>
                  <p className="text-[#101828] font-medium text-xs">
                    3–5 December 2026 (3-Day Event)
                  </p>
                </div>

                <div className="space-y-1 pt-2 border-t border-[#E6E9EF]">
                  <span className="text-[#667085] uppercase tracking-wider block">Campus Location</span>
                  <p className="text-[#101828] font-medium text-xs">
                    Near Thakurli Railway Station (East), Maharashtra
                  </p>
                </div>

                <div className="space-y-1 pt-2 border-t border-[#E6E9EF]">
                  <span className="text-[#667085] uppercase tracking-wider block">Production URL</span>
                  <a
                    href="https://unnatiatmkmp.runs-on.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#881337] font-semibold text-xs hover:underline break-all inline-flex items-center gap-1"
                  >
                    <span>unnatiatmkmp.runs-on.dev</span>
                    <ExternalLink className="h-3 w-3 inline flex-shrink-0" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          02 / PROJECT OVERVIEW
      ========================================================================== */}
      <section
        id="overview"
        aria-labelledby="overview-title"
        className="py-16 sm:py-24 border-b border-[#E6E9EF] bg-white scroll-mt-20"
      >
        <div className="container-architectural space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            <div className="lg:col-span-4 space-y-2">
              <span className="text-xs font-mono font-semibold tracking-wider text-[#881337] uppercase">
                02 // OVERVIEW
              </span>
              <h2
                id="overview-title"
                className="text-3xl sm:text-4xl font-bold tracking-tight text-[#101828]"
              >
                The Digital Experience for Institutional Events.
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-6 text-[#667085] font-sans text-base sm:text-lg leading-relaxed">
              <p>
                Every year, inter-collegiate festivals bring together hundreds of students, performers, artists, and competitors across diverse creative and athletic disciplines. Historically, event dissemination relied on physical paper brochures, ad-hoc PDF circulars, and messaging groups—leading to lost schedules, registration bottlenecks, and administrative confusion on festival days.
              </p>
              <p>
                For the landmark 16th edition of <strong>UNNATI</strong>, MKMP College partnered with AERVENLabs to architect a dedicated, modern digital platform. The objective was clear: provide participants and contingents across the university ecosystem with an elegant, authoritative single source of truth for competition catalogs, rulebooks, venue navigation, and registrations.
              </p>
            </div>
          </div>

          {/* 4 Core Challenges Solved */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
            {unnatiCaseStudy.problems.map((problem) => (
              <div
                key={problem.number}
                className="p-6 rounded-[12px] bg-[#F7F8FA] border border-[#E6E9EF] space-y-3"
              >
                <span className="font-mono text-xs font-semibold text-[#881337]">
                  CHALLENGE {problem.number}
                </span>
                <h3 className="font-bold text-base text-[#101828] tracking-tight">
                  {problem.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          03 / EVENT IDENTITY & THEME: ROOTS & RHYTHM
      ========================================================================== */}
      <section
        id="theme-identity"
        aria-labelledby="theme-title"
        className="py-16 sm:py-24 border-b border-[#E6E9EF] bg-[#F7F8FA]"
      >
        <div className="container-architectural space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-2">
              <span className="text-xs font-mono font-semibold tracking-wider text-[#881337] uppercase">
                03 // IDENTITY &amp; THEME
              </span>
              <h2
                id="theme-title"
                className="text-3xl sm:text-4xl font-bold tracking-tight text-[#101828]"
              >
                Roots &amp; Rhythm.
              </h2>
              <p className="text-xs font-mono text-[#667085] uppercase tracking-widest">
                CULTURAL ANCHOR // 16TH EDITION
              </p>
            </div>

            <div className="lg:col-span-8 space-y-4 text-[#667085] text-base leading-relaxed">
              <p>
                The central theme of UNNATI 2026–27—<strong>Roots &amp; Rhythm</strong>—celebrates the equilibrium between traditional Indian cultural heritage (&ldquo;Roots&rdquo;) and contemporary creative cadence (&ldquo;Rhythm&rdquo;).
              </p>
              <p>
                To reflect this duality digitally, the platform eschews generic corporate startup tropes and instead embraces an intentional warm palette: natural ivory (#FAF7F2), rich crimson (#881337), deep navy (#0F1D36), and subtle gold accents. The visual typography honors the artistic heritage of the festival while preserving crisp legibility and high contrast across all screen sizes.
              </p>
            </div>
          </div>

          {/* Theme Visual Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white border border-[#E6E9EF] rounded-[14px] space-y-3">
              <div className="h-10 w-10 rounded-[8px] bg-[#881337]/10 flex items-center justify-center text-[#881337]">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-lg text-[#101828]">Cultural Authenticity</h3>
              <p className="text-sm text-[#667085] leading-relaxed">
                Reflecting traditional arts like Rangoli, Mehendi, and classical dance alongside modern eSports and battle-of-the-bands.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E6E9EF] rounded-[14px] space-y-3">
              <div className="h-10 w-10 rounded-[8px] bg-[#881337]/10 flex items-center justify-center text-[#881337]">
                <Music className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-lg text-[#101828]">Youthful Cadence</h3>
              <p className="text-sm text-[#667085] leading-relaxed">
                Dynamic rhythmic structures honoring competitive momentum, speed chess, high-octane box cricket, and the flagship NAAD music clash.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E6E9EF] rounded-[14px] space-y-3">
              <div className="h-10 w-10 rounded-[8px] bg-[#881337]/10 flex items-center justify-center text-[#881337]">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-lg text-[#101828]">Institutional Heritage</h3>
              <p className="text-sm text-[#667085] leading-relaxed">
                Rooted in Shri Dombivli Mitra Mandal’s Matrushri Kashiben Motilal Patel Senior College, honoring 16 years of academic and cultural leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          04 / DIGITAL EXPERIENCE & WEBSITE PRESENTATION
      ========================================================================== */}
      <section
        id="digital-experience"
        aria-labelledby="experience-title"
        className="py-16 sm:py-24 border-b border-[#E6E9EF] bg-white"
      >
        <div className="container-architectural space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-2">
              <span className="text-xs font-mono font-semibold tracking-wider text-[#881337] uppercase">
                04 // DIGITAL EXPERIENCE
              </span>
              <h2
                id="experience-title"
                className="text-3xl sm:text-4xl font-bold tracking-tight text-[#101828]"
              >
                Engineered for High-Concurrency Festival Traffic.
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-4 text-[#667085] text-base leading-relaxed">
              <p>
                Collegiate festival websites face unique architectural challenges: extreme spikes in mobile traffic during festival registration launches and event days, varying student device capabilities, and unpredictable campus cellular network connectivity.
              </p>
              <p>
                AERVENLabs engineered the UNNATI 2026–27 platform as a high-performance, mobile-first web application. The frontend uses static edge rendering combined with client-side reactive state for registration modals and filtering, achieving instantaneous route transitions and sub-1.5 second First Contentful Paint.
              </p>
            </div>
          </div>

          {/* Architectural Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-5 rounded-[12px] bg-[#F7F8FA] border border-[#E6E9EF] space-y-1">
              <span className="font-mono text-2xl sm:text-3xl font-bold text-[#881337]">23</span>
              <span className="text-xs font-mono text-[#101828] block font-semibold">Competitions</span>
              <p className="text-[11px] text-[#667085]">Across 5 categories</p>
            </div>

            <div className="p-5 rounded-[12px] bg-[#F7F8FA] border border-[#E6E9EF] space-y-1">
              <span className="font-mono text-2xl sm:text-3xl font-bold text-[#881337]">3 Days</span>
              <span className="text-xs font-mono text-[#101828] block font-semibold">Schedule Matrix</span>
              <p className="text-[11px] text-[#667085]">Dec 3–5, 2026</p>
            </div>

            <div className="p-5 rounded-[12px] bg-[#F7F8FA] border border-[#E6E9EF] space-y-1">
              <span className="font-mono text-2xl sm:text-3xl font-bold text-[#881337]">&lt;1.5s</span>
              <span className="text-xs font-mono text-[#101828] block font-semibold">Edge FCP</span>
              <p className="text-[11px] text-[#667085]">Instantaneous mobile load</p>
            </div>

            <div className="p-5 rounded-[12px] bg-[#F7F8FA] border border-[#E6E9EF] space-y-1">
              <span className="font-mono text-2xl sm:text-3xl font-bold text-[#881337]">100%</span>
              <span className="text-xs font-mono text-[#101828] block font-semibold">Responsive PWA</span>
              <p className="text-[11px] text-[#667085]">Optimized for mobile viewports</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          05 / WEBSITE SCREENSHOTS & VISUAL GALLERY
      ========================================================================== */}
      <section
        id="visual-gallery"
        aria-labelledby="gallery-title"
        className="py-16 sm:py-24 border-b border-[#E6E9EF] bg-[#F7F8FA]"
      >
        <div className="container-architectural space-y-12">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E6E9EF] pb-4">
            <div>
              <span className="text-xs font-mono font-semibold tracking-wider text-[#881337] uppercase block">
                05 // VISUAL GALLERY
              </span>
              <h2
                id="gallery-title"
                className="text-3xl sm:text-4xl font-bold tracking-tight text-[#101828]"
              >
                Production Assets &amp; Interface Preview.
              </h2>
            </div>

            <a
              href="https://unnatiatmkmp.runs-on.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#881337] font-semibold hover:underline"
            >
              <span>View live production</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Large Hero Banner Preview */}
          <div className="editorial-card rounded-[16px] overflow-hidden border border-[#E6E9EF] bg-white shadow-sm space-y-4 p-4 sm:p-6">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-[10px] overflow-hidden bg-[#FAF7F2] border border-[#E6E9EF]">
              <img
                src="/assets/projects/unnati/unnati-og-banner.jpg"
                alt="Official UNNATI 2026–27 website hero banner preview"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 px-2 pt-2 text-xs font-mono text-[#667085]">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#881337]" />
                <span className="font-semibold text-[#101828]">FIGURE 1.0</span>
                <span>— Official UNNATI 2026–27 Digital Banner &amp; Header Specimen</span>
              </div>
              <span>ASSET SOURCE: PRODUCTION VERCEL EDGE</span>
            </div>
          </div>

          {/* Dual Visual Specimen Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Official Poster Specimen */}
            <div className="lg:col-span-7 editorial-card rounded-[16px] p-6 bg-white border border-[#E6E9EF] space-y-4">
              <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-3 text-xs font-mono">
                <span className="font-semibold text-[#101828]">FESTIVAL POSTER EXHIBIT</span>
                <span className="text-[#881337]">16TH EDITION</span>
              </div>
              <div className="relative aspect-[4/3] rounded-[10px] overflow-hidden bg-[#FAF7F2] border border-[#E6E9EF]">
                <img
                  src="/assets/projects/unnati/unnati-poster.jpg"
                  alt="Official UNNATI 2026–27 Festival Poster"
                  className="w-full h-full object-contain p-4"
                  loading="lazy"
                />
              </div>
              <p className="text-xs text-[#667085] font-sans">
                Comprehensive festival poster announcing the 3-day competition calendar and institutional registration protocols.
              </p>
            </div>

            {/* Right: Institutional Host & Crest */}
            <div className="lg:col-span-5 editorial-card rounded-[16px] p-6 bg-white border border-[#E6E9EF] space-y-6">
              <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-3 text-xs font-mono">
                <span className="font-semibold text-[#101828]">HOST INSTITUTION IDENTITY</span>
                <span className="text-[#881337]">MKMP COLLEGE</span>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-[10px] bg-[#FAF7F2] border border-[#E6E9EF]">
                <div className="h-14 w-14 rounded-[8px] bg-white border border-[#E6E9EF] p-2 flex-shrink-0 flex items-center justify-center">
                  <img
                    src="/assets/projects/unnati/mkmp-college-logo.png"
                    alt="MKMP College Logo"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono text-[#881337] uppercase font-semibold">
                    Shri Dombivli Mitra Mandal’s
                  </span>
                  <h4 className="font-bold text-sm text-[#101828] leading-tight">
                    Matrushri Kashiben Motilal Patel Senior College
                  </h4>
                  <p className="text-xs text-[#667085]">
                    Commerce &amp; Science • Thakurli (East)
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs font-mono text-[#667085]">
                <div className="flex justify-between py-1.5 border-b border-[#E6E9EF]">
                  <span>FESTIVAL EDITION</span>
                  <span className="text-[#101828] font-semibold">16th Inter-Collegiate</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#E6E9EF]">
                  <span>OFFICIAL EMAIL</span>
                  <span className="text-[#101828] font-semibold">unnati-mkmp@outlook.com</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#E6E9EF]">
                  <span>FESTIVAL DATES</span>
                  <span className="text-[#101828] font-semibold">December 3–5, 2026</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span>FACULTY HEADS</span>
                  <span className="text-[#101828] font-semibold">Prof. Neha B. &amp; Prof. Akanksha N.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          06 / VERIFIED FEATURES & FUNCTIONALITY
      ========================================================================== */}
      <section
        id="features"
        aria-labelledby="features-title"
        className="py-16 sm:py-24 border-b border-[#E6E9EF] bg-white"
      >
        <div className="container-architectural space-y-12">
          <div className="space-y-2">
            <span className="text-xs font-mono font-semibold tracking-wider text-[#881337] uppercase">
              06 // FEATURES &amp; FUNCTIONALITY
            </span>
            <h2
              id="features-title"
              className="text-3xl sm:text-4xl font-bold tracking-tight text-[#101828]"
            >
              Verified Capabilities of the UNNATI Platform.
            </h2>
            <p className="text-sm sm:text-base text-[#667085] max-w-2xl font-sans">
              All features below reflect verified, operational components running on the official festival deployment.
            </p>
          </div>

          {/* 6 Feature Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {unnatiCaseStudy.features.map((feature) => (
              <div
                key={feature.number}
                className="p-6 rounded-[14px] bg-[#F7F8FA] border border-[#E6E9EF] space-y-3 hover:border-[#881337]/40 transition-colors"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#881337] font-semibold">SPEC // {feature.number}</span>
                  <span className="px-2 py-0.5 rounded-[4px] bg-white border border-[#E6E9EF] text-[#667085] text-[10px]">
                    {feature.tag}
                  </span>
                </div>
                <h3 className="font-bold text-lg text-[#101828]">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Detailed 23-Competition Category Matrix */}
          <div className="pt-8 border-t border-[#E6E9EF] space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-mono font-semibold text-[#881337] uppercase tracking-wider">
                COMPREHENSIVE COMPETITION DIRECTORY
              </span>
              <h3 className="text-2xl font-bold text-[#101828]">
                23 Sanctioned Festival Competitions
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {competitionCategories.map((group) => {
                const IconComponent = group.icon;
                return (
                  <div
                    key={group.category}
                    className="p-6 rounded-[14px] bg-white border border-[#E6E9EF] space-y-4 shadow-sm"
                  >
                    <div className="flex items-center gap-3 border-b border-[#E6E9EF] pb-3">
                      <div className="h-8 w-8 rounded-[6px] bg-[#881337]/10 flex items-center justify-center text-[#881337]">
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <h4 className="font-bold text-base text-[#101828]">
                        {group.category}
                      </h4>
                    </div>

                    <p className="text-xs text-[#667085]">
                      {group.description}
                    </p>

                    <ul className="space-y-1.5 pt-1">
                      {group.events.map((evt) => (
                        <li
                          key={evt}
                          className="flex items-center gap-2 text-xs font-mono text-[#101828]"
                        >
                          <ChevronRight className="h-3 w-3 text-[#881337] flex-shrink-0" />
                          <span>{evt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          07 / DESIGN & DEVELOPMENT APPROACH
      ========================================================================== */}
      <section
        id="development-approach"
        aria-labelledby="approach-title"
        className="py-16 sm:py-24 border-b border-[#E6E9EF] bg-[#F7F8FA]"
      >
        <div className="container-architectural space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-2">
              <span className="text-xs font-mono font-semibold tracking-wider text-[#881337] uppercase">
                07 // APPROACH
              </span>
              <h2
                id="approach-title"
                className="text-3xl sm:text-4xl font-bold tracking-tight text-[#101828]"
              >
                Design &amp; Engineering Discipline.
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-4 text-[#667085] text-base leading-relaxed">
              <p>
                AERVENLabs applied strict production engineering practices to build UNNATI 2026–27. By pairing a custom component design system with modern build optimization, the platform balances rich aesthetic storytelling with lightweight, rapid page loads.
              </p>
            </div>
          </div>

          {/* Tech Stack Groups */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {unnatiCaseStudy.techStack.map((group) => (
              <div
                key={group.category}
                className="p-6 bg-white border border-[#E6E9EF] rounded-[14px] space-y-4 shadow-sm"
              >
                <span className="text-xs font-mono font-semibold text-[#881337] tracking-wider uppercase block border-b border-[#E6E9EF] pb-2">
                  {group.category}
                </span>

                <ul className="space-y-3">
                  {group.technologies.map((tech) => (
                    <li key={tech.name} className="space-y-0.5">
                      <span className="font-semibold text-sm text-[#101828] block">
                        {tech.name}
                      </span>
                      {tech.detail && (
                        <span className="text-xs text-[#667085] block font-sans">
                          {tech.detail}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* 4 Evolutionary Phases */}
          <div className="pt-8 border-t border-[#E6E9EF] space-y-6">
            <span className="text-xs font-mono text-[#881337] uppercase font-semibold tracking-wider block">
              CHRONOLOGICAL EXECUTION PHASES
            </span>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
              {unnatiCaseStudy.evolution.map((phase) => (
                <div
                  key={phase.phase}
                  className="p-5 rounded-[12px] bg-white border border-[#E6E9EF] space-y-2"
                >
                  <span className="font-mono text-xs text-[#881337] font-semibold block">
                    {phase.phase}
                  </span>
                  <h4 className="font-bold text-sm text-[#101828]">
                    {phase.title}
                  </h4>
                  <p className="text-xs text-[#667085] leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          08 / AERVENLABS CONTRIBUTION
      ========================================================================== */}
      <section
        id="contribution"
        aria-labelledby="contribution-title"
        className="py-16 sm:py-24 border-b border-[#E6E9EF] bg-white"
      >
        <div className="container-architectural space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-2">
              <span className="text-xs font-mono font-semibold tracking-wider text-[#881337] uppercase">
                08 // CONTRIBUTION
              </span>
              <h2
                id="contribution-title"
                className="text-3xl sm:text-4xl font-bold tracking-tight text-[#101828]"
              >
                AERVENLabs&rsquo; Role &amp; Institutional Impact.
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-6 text-[#667085] text-base sm:text-lg leading-relaxed">
              <p>
                AERVENLabs served as the digital architecture and engineering partner for UNNATI 2026–27, translating the college cultural committee&rsquo;s vision into a resilient, production-ready web platform.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="space-y-2 p-5 rounded-[12px] bg-[#F7F8FA] border border-[#E6E9EF]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#881337]" />
                    <h3 className="font-bold text-sm text-[#101828]">End-to-End System Architecture</h3>
                  </div>
                  <p className="text-xs text-[#667085] leading-relaxed">
                    Designed the full component architecture, schema data model, event routing, and edge hosting deployment.
                  </p>
                </div>

                <div className="space-y-2 p-5 rounded-[12px] bg-[#F7F8FA] border border-[#E6E9EF]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#881337]" />
                    <h3 className="font-bold text-sm text-[#101828]">Information &amp; Rulebook UX</h3>
                  </div>
                  <p className="text-xs text-[#667085] leading-relaxed">
                    Distilled 23 intricate competition guidelines and multi-day timelines into structured, easily browsable digital cards.
                  </p>
                </div>

                <div className="space-y-2 p-5 rounded-[12px] bg-[#F7F8FA] border border-[#E6E9EF]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#881337]" />
                    <h3 className="font-bold text-sm text-[#101828]">Digital Registration Flow</h3>
                  </div>
                  <p className="text-xs text-[#667085] leading-relaxed">
                    Built the modal registration workflows, contingent data entry, and verification status tracking.
                  </p>
                </div>

                <div className="space-y-2 p-5 rounded-[12px] bg-[#F7F8FA] border border-[#E6E9EF]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#881337]" />
                    <h3 className="font-bold text-sm text-[#101828]">Performance &amp; SEO Standards</h3>
                  </div>
                  <p className="text-xs text-[#667085] leading-relaxed">
                    Implemented structured Schema.org JSON-LD festival metadata and optimized assets for instant mobile discovery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          09 / FINAL CTA: VISIT LIVE WEBSITE
      ========================================================================== */}
      <section
        id="visit-live"
        aria-labelledby="cta-title"
        className="py-20 sm:py-28 bg-[#FAF7F2] border-t border-[#E6E9EF]"
      >
        <div className="container-architectural text-center max-w-3xl space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#881337]/10 border border-[#881337]/20 text-[#881337] text-xs font-mono font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-[#881337]" />
            <span>OFFICIAL LIVE PRODUCTION</span>
          </div>

          <div className="space-y-4">
            <h2
              id="cta-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#101828]"
            >
              Experience UNNATI 2026–27 Live.
            </h2>
            <p className="text-base sm:text-lg text-[#667085] leading-relaxed font-sans max-w-xl mx-auto">
              Explore the full 23-event directory, interactive schedule matrix, and online registration portal on the official festival domain.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="https://unnatiatmkmp.runs-on.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#881337] hover:bg-[#6b0f2b] text-white text-sm font-semibold rounded-[8px] transition-all duration-200 shadow-md shadow-[#881337]/25 active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-[#881337] w-full sm:w-auto"
            >
              <span>Visit Live Website</span>
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>

            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-[#F7F8FA] text-[#101828] text-sm font-medium border border-[#E6E9EF] rounded-[8px] transition-colors w-full sm:w-auto"
            >
              <span>Back to Our Work</span>
              <ArrowRight className="h-4 w-4 text-[#667085]" aria-hidden="true" />
            </Link>
          </div>

          <p className="text-xs font-mono text-[#667085] pt-4">
            PRODUCTION DEPLOYMENT // HOSTED ON VERCEL EDGE // PROTOCOL: HTTPS
          </p>
        </div>
      </section>
    </div>
  );
};

export default UnnatiPage;
