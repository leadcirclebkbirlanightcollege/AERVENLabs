import { Company, OriginPhilosophy, ContactCTAConfig } from '../types';
import { defaultCompany, siteConfig } from '../config/site';

/**
 * Verified company data for AERVENLabs Technologies Pvt. Ltd.
 */
export const companyData: Company = defaultCompany;

/**
 * Brand Introduction & Philosophy for Homepage Section 03.
 * Headline: "Not Just Building Technology. Building Possibilities."
 */
export const originPhilosophy: OriginPhilosophy = {
  sectionId: '03',
  eyebrow: '03 / BRAND INTRODUCTION',
  headline: 'Not Just Building Technology. Building Possibilities.',
  paragraphs: [
    'Technology should not exist simply because code can be compiled. It should exist because it solves something fundamental, removes friction, and creates lasting value for people and institutions.',
    'AERVENLabs is an independent technology startup founded on the belief that raw technical ambition must be paired with engineering discipline. We build purposeful digital products, scalable platforms, and intelligent software systems that transform ambitious ideas into enduring realities.',
  ],
  principles: [
    { label: 'THINK BEYOND', detail: 'Identify fundamental opportunities beneath surface symptoms' },
    { label: 'DESIGN INTELLIGENTLY', detail: 'Craft interfaces that prioritize human clarity and cognitive calm' },
    { label: 'ENGINEER PRECISELY', detail: 'Architect resilient data models and robust, reliable cloud systems' },
    { label: 'BUILD MEANINGFULLY', detail: 'Create software that leaves behind enduring human and institutional value' },
  ],
};

/**
 * Our Approach Section Data (Homepage Section 04)
 */
export const companyApproach = [
  {
    step: '01',
    title: 'Think Beyond.',
    subtitle: 'Question the status quo before writing a single line of code.',
    description:
      'We reject superficial solutions and feature bloat. We begin every project by deeply understanding the operational friction, organizational dynamics, and human realities at play.',
  },
  {
    step: '02',
    title: 'Design Intelligently.',
    subtitle: 'Simplicity and restraint as a deliberate discipline.',
    description:
      'Great design is not decorative styling — it is clear thinking made visible. We compose whitespace, typography, and mathematical layout rhythms to make complex workflows intuitive.',
  },
  {
    step: '03',
    title: 'Engineer Precisely.',
    subtitle: 'Resilient architectures built for scale, speed, and security.',
    description:
      'From database Row-Level Security and timing-safe protocols to sub-second client performance, we engineer systems that are dependable, observable, and built to endure.',
  },
  {
    step: '04',
    title: 'Build Meaningfully.',
    subtitle: 'Delivering tangible digital impact in the real world.',
    description:
      'Every product, platform, and experiment we launch is measured by its real-world utility — empowering students, assisting citizens, and optimizing public infrastructure.',
  },
];

/**
 * Contact CTA Configuration (Homepage Section 11 & Closing sections)
 * Headline: "Have an Idea Worth Building?"
 * Description: "Let's turn ambitious ideas into meaningful technology."
 * CTA: Start a Conversation.
 */
export const contactCTAConfig: ContactCTAConfig = {
  sectionId: '11',
  eyebrow: '11 / START A CONVERSATION',
  tagline: "LET'S TURN AMBITIOUS IDEAS INTO MEANINGFUL TECHNOLOGY.",
  headline: 'Have an Idea Worth Building?',
  supportingCopy:
    "We collaborate with institutions, founders, and forward-looking teams to build innovative digital products and future-ready platforms. Tell us what you're imagining.",
  ctaText: 'Start a Conversation',
  ctaHref: '/contact',
  email: siteConfig.email,
  closingMicrocopy: 'IDEAS → ARCHITECTURE → EXECUTION',
  metaLabels: {
    protocol: 'COMMUNICATION // DIRECT',
    status: 'STATUS // OPEN FOR INQUIRIES',
    channel: 'INBOX // DIRECT DISPATCH',
  },
};
