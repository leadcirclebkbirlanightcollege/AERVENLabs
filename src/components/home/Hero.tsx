import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { buttonVariants } from '../ui/button';
import { siteConfig } from '../../config/site';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const secondaryRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // GSAP subtle scroll-driven narrative interaction (desktop only)
  useEffect(() => {
    if (prefersReducedMotion || typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      // Subtle headline parallax drift upward (restrained to -20px)
      if (headlineRef.current && heroRef.current) {
        gsap.to(headlineRef.current, {
          y: -20,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }

      // Secondary content gradual subtle drift (restrained to -8px)
      if (secondaryRef.current && heroRef.current) {
        gsap.to(secondaryRef.current, {
          opacity: 0.6,
          y: -8,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: '20% top',
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
            end: '180px top',
            scrub: true,
          },
        });
      }
    });

    return () => mm.revert();
  }, [prefersReducedMotion]);

  // Headline lines for masked reveal
  const headlineWords = ['IDEAS', 'TO', 'IMPACT'];

  return (
    <section
      ref={heroRef}
      aria-label="Hero"
      className="relative flex min-h-[calc(100svh-4rem)] md:min-h-[calc(100svh-5rem)] flex-col justify-between overflow-hidden bg-black text-foreground pt-8 pb-10 md:pt-12 md:pb-12"
    >
      {/* Subtle Architectural Grid Lines & Ambient Contrast */}
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

      {/* Subtle Monochrome Ambient Radial Glow (Pure Black/White only) */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-full max-w-[1200px] opacity-[0.03] select-none"
        style={{
          background: 'radial-gradient(circle at 50% 10%, #FFFFFF 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Main Hero Architectural Container */}
      <div className="container-architectural relative z-10 my-auto w-full py-6 sm:py-8 lg:py-12">
        <div className="grid-architectural items-end">
          {/* Left Column: Primary Typography Statement */}
          <div ref={headlineRef} className="lg:col-span-7 xl:col-span-8 space-y-6">
            {/* Technical Eyebrow & Status */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-3 border border-border-subtle bg-surface px-3 py-1.5 rounded-[2px]"
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
              <span className="text-tech-label text-neutral-300">
                AERVENLABS TECHNOLOGIES
              </span>
              <span className="hidden sm:inline-block h-2.5 w-[1px] bg-white/[0.15]" aria-hidden="true" />
              <span className="hidden sm:inline-block text-tech-label text-neutral-400">
                SYS_ID // 2026
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
                      delay: prefersReducedMotion ? 0 : 0.15 + index * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="block text-display font-semibold tracking-tighter text-white uppercase"
                    aria-hidden="true"
                  >
                    {word}
                  </motion.span>
                </div>
              ))}
            </h1>
          </div>

          {/* Right Column: Secondary Description & Technical Metadata */}
          <div
            ref={secondaryRef}
            className="lg:col-span-5 xl:col-span-4 lg:pl-6 space-y-8 pb-2 lg:pb-4"
          >
            {/* Supporting Copy */}
            <motion.p
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0.01 : 0.7,
                delay: prefersReducedMotion ? 0 : 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-lg font-sans"
            >
              A technology company building purposeful digital products, platforms, and intelligent software systems.
            </motion.p>

            {/* Architectural Technical Micro-Card */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0.01 : 0.7,
                delay: prefersReducedMotion ? 0 : 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="surface-level-1 p-5 space-y-3.5"
            >
              <div className="flex items-center justify-between border-b border-border-subtle pb-2.5">
                <span className="text-tech-label text-neutral-500">DISCIPLINE</span>
                <span className="text-xs text-neutral-300 font-mono">PRODUCT & SYSTEMS</span>
              </div>
              <div className="flex items-center justify-between border-b border-border-subtle pb-2.5">
                <span className="text-tech-label text-neutral-500">CORE FOCUS</span>
                <span className="text-xs text-neutral-300 font-mono">SCALABLE PLATFORMS</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-tech-label text-neutral-500">ENGINEERING</span>
                <span className="text-xs text-neutral-400 font-mono">HIGH-IMPACT // ROBUST</span>
              </div>
            </motion.div>

            {/* Single Purposeful CTA */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0.01 : 0.7,
                delay: prefersReducedMotion ? 0 : 0.65,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="pt-2"
            >
              <Link
                to="/projects"
                className={`${buttonVariants({ variant: 'default', size: 'touch' })} group gap-2 w-full sm:w-auto justify-center`}
              >
                <span>Explore Projects</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Metadata & Minimal Scroll Cue */}
      <div className="container-architectural relative z-10 w-full pt-4">
        <div className="flex items-center justify-between border-t border-border-subtle pt-6">
          {/* Left Metadata Coordinate */}
          <div className="hidden sm:flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-white/40" aria-hidden="true" />
            <span className="text-tech-label text-neutral-400">
              {siteConfig.legalName}
            </span>
          </div>

          {/* Right: Minimal Architectural Scroll Cue (enters last) */}
          <motion.div
            ref={scrollCueRef}
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: prefersReducedMotion ? 0.01 : 0.6,
              delay: prefersReducedMotion ? 0 : 0.75,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex items-center gap-3 ml-auto sm:ml-0"
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
