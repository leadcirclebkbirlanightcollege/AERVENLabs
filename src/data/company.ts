import { Company, OriginPhilosophy } from '../types';
import { defaultCompany } from '../config/site';

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
