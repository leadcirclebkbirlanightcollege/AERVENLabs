import React, { useRef, useState } from 'react';
import { TeamMember } from '../../types';

interface TeamPortraitProps {
  member: TeamMember;
  index: number;
  prefersReducedMotion: boolean;
}

/**
 * TeamPortrait — Clean, High-Fidelity Portrait Presentation.
 * Displays real team member photographs within an elegant, refined frame.
 * Subtle hover scale, clean natural or subtle duotone tonality, responsive loading.
 */
export const TeamPortrait: React.FC<TeamPortraitProps> = ({
  member,
  prefersReducedMotion,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="team-portrait-frame aspect-[4/5] w-full relative overflow-hidden bg-[#F7F8FA] border border-[#E6E9EF] rounded-[12px] group-hover:border-[#315EFA]/40 transition-colors duration-300">
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
              objectPosition: member.imagePosition || 'center 20%',
            }}
            onLoad={() => setImageLoaded(true)}
            className={`team-portrait object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-105 ${
              prefersReducedMotion ? 'opacity-100' : imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
          {/* Subtle gradient vignette at the bottom for readability */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#101828]/20 via-transparent to-transparent opacity-60 pointer-events-none"
            aria-hidden="true"
          />
        </>
      ) : (
        <div className="h-full w-full flex flex-col justify-center items-center p-6 text-center space-y-2 bg-[#F7F8FA]">
          <span className="font-mono text-3xl font-bold text-[#98A2B3]">
            0{member.order}
          </span>
          <p className="text-xs font-mono text-[#667085] uppercase">
            {member.name}
          </p>
        </div>
      )}
    </div>
  );
};

export default TeamPortrait;
