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
 * Editorial configuration for Homepage Section 07 — The Vision.
 * Sequential identifier 06 / THE VISION following 05 / THE TEAM.
 * Grounded strictly in approved company philosophy without speculative claims.
 */
export const visionSectionConfig: VisionSectionConfig = {
  sectionId: '06',
  eyebrow: '06 / THE VISION',
  headline: 'Technology should move with purpose.',
  statement:
    'We believe the future of technology is not defined by how much we can build, but by how intentionally we build it.',
  paragraph:
    'AervenLabs is building toward a future where software is more purposeful, systems are more resilient, interfaces are more human, and intelligence is applied where it creates genuine value. We want every product, platform, and experiment to leave behind something useful — not simply something new.',
  closingStatement: {
    line1: 'BUILD LESS NOISE.',
    line2: 'CREATE MORE VALUE.',
  },
  metaLabel: 'PHILOSOPHY // FUTURE DIRECTION',
  horizonCoordinates: {
    origin: 'ORIGIN // CONVICTION',
    focus: 'INTENT // PURPOSE',
    vector: 'DIRECTION // ARCHITECTURE',
    terminus: 'HORIZON // HUMAN VALUE',
  },
};
