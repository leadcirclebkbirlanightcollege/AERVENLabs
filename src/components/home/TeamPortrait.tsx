import React, { useRef, useState } from 'react';
import { useInView } from 'motion/react';
import { TeamMember } from '../../types';

interface TeamPortraitProps {
  member: TeamMember;
  index: number;
  prefersReducedMotion: boolean;
}

/**
 * TeamPortrait — Cinematic Digital Signal Glitch Reveal.
 * Resolves each member photograph from an ephemeral signal glitch (80-180ms)
 * into a calm, sharp, permanent monochrome portrait (total 650ms).
 * Strictly monochrome, hardware-accelerated, runs once upon viewport entry,
 * and completely disabled when prefers-reduced-motion is active.
 */
export const TeamPortrait: React.FC<TeamPortraitProps> = ({
  member,
  index,
  prefersReducedMotion,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-40px' });
  const [isGlitchDone, setIsGlitchDone] = useState(false);

  // Stagger calculation: 70ms on desktop, 40ms on mobile
  const delayMs = typeof window !== 'undefined' && window.innerWidth < 768 ? index * 40 : index * 70;

  return (
    <div
      ref={containerRef}
      className="team-portrait-frame aspect-[4/5] w-full relative overflow-hidden bg-surface-dark"
    >
      {member.image ? (
        <>
          <img
            src={member.image}
            alt={member.imageAlt}
            width={400}
            height={500}
            loading={member.featured ? 'eager' : 'lazy'}
            decoding={member.featured ? 'sync' : 'async'}
            style={{
              objectPosition: member.imagePosition || 'center 25%',
              animationDelay: !isGlitchDone && !prefersReducedMotion ? `${delayMs}ms` : undefined,
            }}
            onAnimationEnd={() => setIsGlitchDone(true)}
            className={`team-portrait team-portrait-monochrome transition-transform duration-500 ${
              prefersReducedMotion
                ? 'opacity-100 transform-none'
                : !isInView
                ? 'opacity-0'
                : !isGlitchDone
                ? 'team-portrait-glitch'
                : 'opacity-100'
            }`}
          />

          {/* Ephemeral Monochrome Signal Beam during Initialization */}
          {isInView && !isGlitchDone && !prefersReducedMotion && (
            <div
              className="team-portrait-scanline pointer-events-none"
              style={{ animationDelay: `${delayMs}ms` }}
              aria-hidden="true"
            />
          )}

          {/* Subtle Contrast Vignette */}
          <div className="media-overlay-vignette pointer-events-none" aria-hidden="true" />
        </>
      ) : (
        // Architectural Technical Placeholder Frame (awaiting photo assignment)
        <div className="h-full w-full flex flex-col justify-between p-6 sm:p-8 select-none">
          <div className="flex justify-between text-neutral-600 font-mono text-[10px]" aria-hidden="true">
            <span>+ [PORTRAIT_NW]</span>
            <span>+ [PORTRAIT_NE]</span>
          </div>

          <div className="text-center space-y-2 py-8">
            <span className="font-mono text-4xl sm:text-5xl font-light text-white/20 select-none">
              0{member.order}
            </span>
            <p className="text-tech-label text-neutral-500 font-mono tracking-widest">
              AERVENLABS // PROFILE
            </p>
            <p className="text-xs text-neutral-400 font-mono">
              {member.role.toUpperCase()}
            </p>
          </div>

          <div className="flex justify-between text-neutral-600 font-mono text-[10px]" aria-hidden="true">
            <span>+ [PORTRAIT_SW]</span>
            <span>+ [PORTRAIT_SE]</span>
          </div>

          {/* Ephemeral signal line for placeholder initialization */}
          {isInView && !isGlitchDone && !prefersReducedMotion && (
            <div
              className="team-portrait-scanline pointer-events-none"
              style={{ animationDelay: `${delayMs}ms` }}
              onAnimationEnd={() => setIsGlitchDone(true)}
              aria-hidden="true"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default TeamPortrait;
