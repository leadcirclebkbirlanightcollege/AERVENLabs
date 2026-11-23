export interface VisionSectionConfig {
  sectionId: string;
  eyebrow: string;
  headline: string;
  statement: string;
  paragraph: string;
  closingStatement: {
    line1: string;
    line2: string;
  };
  metaLabel: string;
  horizonCoordinates: {
    origin: string;
    focus: string;
    vector: string;
    terminus: string;
  };
}

/**
 * Editorial configuration for Homepage Section 08 & Vision Page.
 * Headline: "The Future Isn't Something We Wait For. It's Something We Build."
 */
export const visionSectionConfig: VisionSectionConfig = {
  sectionId: '08',
  eyebrow: '08 / PHILOSOPHY & VISION',
  headline: "The Future Isn't Something We Wait For. It's Something We Build.",
  statement:
    'We believe the future of technology is not defined by how rapidly we can generate code, but by how intentionally we engineer lasting human and institutional solutions.',
  paragraph:
    'AERVENLabs is building toward a technology ecosystem where software is more purposeful, systems are more resilient, interfaces are more human, and intelligence is applied where it solves concrete problems. Every platform and experiment we craft leaves behind something genuinely useful — not just another fleeting digital artifact.',
  closingStatement: {
    line1: 'ENGINEER INTENTIONALLY.',
    line2: 'BUILD WHAT MATTERS.',
  },
  metaLabel: 'PHILOSOPHY // FUTURE DIRECTION',
  horizonCoordinates: {
    origin: 'ORIGIN // CONVICTION',
    focus: 'INTENT // PURPOSE',
    vector: 'DIRECTION // ARCHITECTURE',
    terminus: 'HORIZON // ENDURING IMPACT',
  },
};
