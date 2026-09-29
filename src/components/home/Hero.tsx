import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { buttonVariants } from '../ui/button';
import { siteConfig } from '../../config/site';

/**
 * Homepage Section 01: Master Flagship Hero.
 * Asymmetric 12-column architectural composition.
 * Establishes the visual and narrative benchmark for the entire AervenLabs identity:
 * - Monumental display typography: "IDEAS TO IMPACT"
 * - Restrained technical system diagram: IDEA → SYSTEM → PRODUCT → IMPACT
 * - Verified company definition & single purposeful CTA
 * - Strictly monochrome palette (Black, White, Neutral Grays)
 */
export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const secondaryRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // GSAP scroll-driven depth and parallax (desktop only)
  useEffect(() => {
    if (prefersReducedMotion || typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      // Subtle headline drift upward
      if (headlineRef.current && heroRef.current) {
        gsap.to(headlineRef.current, {
          y: -18,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }

      // Secondary panel gentle deceleration
      if (secondaryRef.current && heroRef.current) {
        gsap.to(secondaryRef.current, {
          opacity: 0.7,
          y: -10,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: '15% top',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }

      // Scroll cue natural fadeout
      if (scrollCueRef.current && heroRef.current) {
        gsap.to(scrollCueRef.current, {
          opacity: 0,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: '160px top',
            scrub: true,
          },
        });
      }
    });

    return () => mm.revert();
  }, [prefersReducedMotion]);

  // Monumental statement words
  const headlineWords = ['IDEAS', 'TO', 'IMPACT'];

  // Architectural system workflow nodes
  const systemFlowNodes = [
    { code: '01', label: 'IDEA', meta: 'CONCEPTION' },
    { code: '02', label: 'SYSTEM', meta: 'ARCHITECTURE' },
    { code: '03', label: 'PRODUCT', meta: 'ENGINEERING' },
    { code: '04', label: 'IMPACT', meta: 'REAL WORLD' },
  ];

  return (
    <section
      ref={heroRef}
      aria-label="Hero"
      className="relative flex min-h-[calc(100svh-4rem)] md:min-h-[calc(100svh-5rem)] flex-col justify-between overflow-hidden bg-black text-foreground pt-6 pb-8 md:pt-10 md:pb-12"
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

      {/* Subtle Monochrome Ambient Radial Depth */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[450px] w-full max-w-[1200px] opacity-[0.03] select-none"
        style={{
          background: 'radial-gradient(circle at 50% 10%, #FFFFFF 0%, transparent 70%)',
        }}
        aria-hidden="true"
      ></div>

      {/* Main 12-Column Asymmetric Stage */}
      <div className="container-architectural relative z-10 my-auto w-full py-6 sm:py-8 lg:py-10">
        <div className="grid-architectural items-end gap-y-10 lg:gap-y-0">
          {/* ============================================================== */}
          {/* LEFT & CENTER (Cols 1-7): Monumental Statement & System Vector */}
          {/* ============================================================== */}
          <div ref={headlineRef} className="lg:col-span-7 xl:col-span-8 space-y-8 sm:space-y-10">
            {/* Technical Eyebrow & System Identifier */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex flex-wrap items-center gap-2.5 sm:gap-3 border border-border-subtle bg-surface px-3 py-1.5 rounded-[2px]"
            >
              <img
                src="/assets/aervenlabs-logo.png"
                alt=""
                width={14}
                height={14}
                fetchPriority="high"
                className="h-3.5 w-3.5 object-contain"
                aria-hidden="true"
              />
              <span className="text-tech-label text-neutral-300 font-mono tracking-wider">
                AERVENLABS TECHNOLOGIES
              </span>
              <span className="h-2.5 w-[1px] bg-white/[0.15]" aria-hidden="true" />
              <span className="text-tech-label text-neutral-400 font-mono">
                SYS_ID // 2026
              </span>
              <span className="hidden sm:inline-block h-2.5 w-[1px] bg-white/[0.15]" aria-hidden="true" />
              <span className="hidden sm:inline-block text-tech-label text-neutral-500 font-mono">
                PRODUCTS // PLATFORMS // SYSTEMS
              </span>
            </motion.div>

            {/* Oversized Monumental Display H1 */}
            <h1 className="select-none space-y-1 sm:space-y-2">
              <span className="sr-only">AervenLabs — Ideas to Impact</span>
              {headlineWords.map((word, index) => (
                <div key={word} className="overflow-hidden">
                  <motion.span
                    initial={
                      prefersReducedMotion
                        ? { y: 0, opacity: 1 }
                        : { y: '105%', opacity: 0.2 }
                    }
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: prefersReducedMotion ? 0.01 : 0.85,
                      delay: prefersReducedMotion ? 0 : 0.12 + index * 0.09,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="block text-display font-semibold tracking-tighter text-white uppercase leading-[0.92]"
                    aria-hidden="true"
                  >
                    {word}
                  </motion.span>
                </div>
              ))}
            </h1>

            {/* Architectural System Visual: IDEA → SYSTEM → PRODUCT → IMPACT */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: prefersReducedMotion ? 0.01 : 0.8,
                delay: prefersReducedMotion ? 0 : 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="pt-2 sm:pt-4 max-w-xl"
              aria-label="Engineering progression: Idea to System to Product to Impact"
            >
              <div className="border border-border-subtle surface-level-1 p-3.5 sm:p-4 rounded-[2px] space-y-3">
                <div className="flex items-center justify-between text-neutral-500 font-mono text-[10px] tracking-widest border-b border-border-subtle pb-2">
                  <span>ARCHITECTURE // PIPELINE</span>
                  <span>SYSTEM_AXIS // 01-04</span>
                </div>

                {/* 4 Connected System Nodes */}
                <div className="grid grid-cols-4 gap-2 relative">
                  {systemFlowNodes.map((node, i) => (
                    <div key={node.code} className="relative space-y-1">
                      <div className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-white/70" aria-hidden="true" />
                        <span className="font-mono text-[11px] font-semibold text-white tracking-wider">
                          {node.label}
                        </span>
                      </div>
                      <p className="font-mono text-[9px] text-neutral-500 tracking-wider">
                        {node.meta}
                      </p>
                      {/* Connecting line to next node */}
                      {i < systemFlowNodes.length - 1 && (
                        <div
                          className="hidden sm:block absolute top-1.5 left-full w-full -translate-x-2 h-[1px] bg-white/[0.12]"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* ============================================================== */}
          {/* RIGHT SIDE (Cols 8-12): Verified Positioning & Decisive CTA     */}
          {/* ============================================================== */}
          <div
            ref={secondaryRef}
            className="lg:col-span-5 xl:col-span-4 lg:pl-6 space-y-6 sm:space-y-8 pb-1"
          >
            {/* Core Purpose Definition */}
            <motion.p
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0.01 : 0.7,
                delay: prefersReducedMotion ? 0 : 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-lg font-sans"
            >
              A technology company building purposeful digital products, platforms, and intelligent software systems.
            </motion.p>

            {/* Architectural System Specs Panel */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0.01 : 0.7,
                delay: prefersReducedMotion ? 0 : 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="surface-level-1 p-5 space-y-3.5 rounded-[2px] border border-border-subtle"
            >
              <div className="flex items-center justify-between border-b border-border-subtle pb-2.5">
                <span className="text-tech-label text-neutral-500 font-mono">CORE DISCIPLINE</span>
                <span className="text-xs text-neutral-300 font-mono">PRODUCT & SYSTEMS</span>
              </div>
              <div className="flex items-center justify-between border-b border-border-subtle pb-2.5">
                <span className="text-tech-label text-neutral-500 font-mono">FLAGSHIP SYSTEM</span>
                <span className="text-xs text-white font-mono font-medium">CAMPUS CONNECT</span>
              </div>
              <div className="flex items-center justify-between border-b border-border-subtle pb-2.5">
                <span className="text-tech-label text-neutral-500 font-mono">ENGINEERING</span>
                <span className="text-xs text-neutral-300 font-mono">PURPOSE-DRIVEN // RIGOR</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-tech-label text-neutral-500 font-mono">PRODUCTION DOMAIN</span>
                <span className="text-xs text-neutral-400 font-mono">AERVENLABS.NET</span>
              </div>
            </motion.div>

            {/* Single Decisive Primary CTA */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0.01 : 0.7,
                delay: prefersReducedMotion ? 0 : 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="pt-1"
            >
              <Link
                to="/projects"
                className={`${buttonVariants({
                  variant: 'default',
                  size: 'touch',
                })} group gap-2.5 w-full sm:w-auto justify-center`}
                aria-label="Explore AervenLabs engineering projects"
              >
                <span className="tracking-wider">EXPLORE PROJECTS</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Architectural Readout & Scroll Cue */}
      <div className="container-architectural relative z-10 w-full pt-4">
        <div className="flex items-center justify-between border-t border-border-subtle pt-5 text-neutral-500 font-mono text-[10px] sm:text-xs">
          {/* Left Metadata Coordinate */}
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-white/40" aria-hidden="true" />
            <span className="text-tech-label text-neutral-400">
              {siteConfig.legalName}
            </span>
            <span className="hidden md:inline-block h-2.5 w-[1px] bg-white/[0.15]" aria-hidden="true" />
            <span className="hidden md:inline-block text-tech-label text-neutral-600">
              OFFICIAL PRODUCTION REPOSITORY // 2026
            </span>
          </div>

          {/* Right: Architectural Scroll Cue */}
          <motion.div
            ref={scrollCueRef}
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: prefersReducedMotion ? 0.01 : 0.6,
              delay: prefersReducedMotion ? 0 : 0.65,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex items-center gap-3"
            aria-hidden="true"
          >
            <span className="text-tech-label text-neutral-400">SCROLL</span>
            <div className="relative h-6 w-[1px] bg-neutral-800 overflow-hidden">
              <motion.div
                animate={
                  prefersReducedMotion
                    ? {}
                    : {
                        y: ['-100%', '100%'],
                      }
                }
                transition={
                  prefersReducedMotion
                    ? {}
                    : {
                        repeat: Infinity,
                        duration: 1.8,
                        ease: 'easeInOut',
                      }
                }
                className="h-full w-full bg-white"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
