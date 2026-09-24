import { Company, OriginPhilosophy, ContactCTAConfig } from '../types';
import { defaultCompany, siteConfig } from '../config/site';

/**
 * Verified company data for AervenLabs Technologies Pvt. Ltd.
 */
export const companyData: Company = defaultCompany;

/**
 * Origin philosophy for Homepage Section 02 — The Beginning.
 * Captures the founding conviction and purpose without unverified historical claims.
 */
export const originPhilosophy: OriginPhilosophy = {
  sectionId: '01',
  eyebrow: '01 / THE BEGINNING',
  headline: 'Every meaningful system begins with a reason to exist.',
  paragraphs: [
    'Technology should not exist simply because it can be engineered. It should exist because it solves something fundamental.',
    'AervenLabs began with a singular conviction: to bridge raw technical capability with genuine purpose. We build digital products, scalable platforms, and intelligent software systems engineered to turn ideas into enduring human impact.',
  ],
  principles: [
    { label: 'PHILOSOPHY', detail: 'PURPOSE PRECEDES EXECUTION' },
    { label: 'DISCIPLINE', detail: 'RESTRAINT & INTENTIONALITY' },
    { label: 'IMPACT', detail: 'ENDURING DIGITAL VALUE' },
  ],
};

/**
 * Editorial configuration for Homepage Section 08 — The Contact.
 * Sequential identifier 08 / THE CONTACT following 07 / THE PARTNERS.
 * Grounds the final homepage conversion in genuine human intent without marketing clichés.
 */
export const contactCTAConfig: ContactCTAConfig = {
  sectionId: '08',
  eyebrow: '08 / THE CONTACT',
  tagline: "LET'S BUILD SOMETHING MEANINGFUL.",
  headline: 'Have an idea worth building?',
  supportingCopy:
    "Tell us what you're imagining. Whether it is a product, platform, experiment, or system, meaningful work begins with a clear conversation.",
  ctaText: 'START A CONVERSATION',
  ctaHref: '/contact',
  email: siteConfig.email,
  closingMicrocopy: 'IDEAS → CONVERSATION → EXECUTION',
  metaLabels: {
    protocol: 'PROTOCOL // CONVERSATION',
    status: 'STATUS // OPEN',
    channel: 'CHANNEL // DIRECT',
  },
};

