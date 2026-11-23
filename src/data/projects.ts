import { CampusConnectCaseStudy, GenericProjectCaseStudy, Project } from '../types';

export interface ProjectsSectionConfig {
  sectionId: string;
  eyebrow: string;
  headline: string;
  description: string;
  metaLabel: string;
}

/**
 * Editorial configuration for Homepage Section 06 — Featured Projects.
 */
export const projectsSectionConfig: ProjectsSectionConfig = {
  sectionId: '06',
  eyebrow: '06 / FEATURED PROJECTS',
  headline: 'Ideas transformed into tangible software.',
  description:
    'We engineer and deploy digital platforms, public initiatives, and intelligent software systems designed around meaningful real-world challenges.',
  metaLabel: 'SYSTEMS // PRODUCTION & INITIATIVES',
};

export interface ProjectsArchiveConfig {
  sectionId: string;
  eyebrow: string;
  headline: string;
  description: string;
  meta: {
    projectsCount: string;
    activeSystems: string;
    archiveStatus: string;
    system: string;
  };
  technicalReadout: {
    label: string;
    items: string[];
  };
  editorialBlocks: {
    problem: {
      label: string;
      title: string;
      description: string;
    };
    system: {
      label: string;
      title: string;
      description: string;
    };
    evolution: {
      label: string;
      title: string;
      description: string;
    };
  };
  footerSection: {
    label: string;
    headline: string;
    description: string;
    ctaText: string;
    ctaHref: string;
  };
}

/**
 * Editorial configuration for the dedicated /projects route.
 */
export const projectsArchiveConfig: ProjectsArchiveConfig = {
  sectionId: '01',
  eyebrow: '01 / PROJECT ARCHIVE',
  headline: 'ENGINEERED WITH INTENT.',
  description:
    'AERVENLabs designs and builds digital products, civic initiatives, and intelligent platforms grounded in architectural rigor and real-world utility.',
  meta: {
    projectsCount: 'PORTFOLIO // 04 INITIATIVES',
    activeSystems: 'ACTIVE SYSTEMS // 04',
    archiveStatus: 'ARCHIVE STATUS // PRODUCTION & RESEARCH',
    system: 'SYSTEM // PRODUCT ENGINEERING',
  },
  technicalReadout: {
    label: 'PORTFOLIO LEDGER',
    items: ['CAMPUS CONNECT', 'NAGRIKSETU', 'RAILVERSE', 'AERVENLABS PLATFORM'],
  },
  editorialBlocks: {
    problem: {
      label: 'THE CHALLENGE',
      title: 'Real-World Operational Friction',
      description:
        'Disconnected administrative procedures, fragmented citizen interfaces, and rigid transit systems create unnecessary friction in everyday institutions and public life.',
    },
    system: {
      label: 'OUR APPROACH',
      title: 'Purpose-Built Platforms',
      description:
        'We engineer focused, accessible digital platforms separating client presentation from isolated data cores, delivering resilience and clarity.',
    },
    evolution: {
      label: 'THE DIRECTION',
      title: 'From Prototype to Real-World Impact',
      description:
        'Every initiative at AERVENLabs begins with thorough field validation, evolving through systematic engineering into production-ready software systems.',
    },
  },
  footerSection: {
    label: 'PORTFOLIO // CURRENT STATE',
    headline: 'FOUR SYSTEMS. EXPANDING HORIZONS.',
    description:
      'AERVENLabs continues to explore purposeful software, intelligent systems, and civic infrastructure. Our archive reflects verified engineering rather than speculative hype.',
    ctaText: 'EXPLORE OUR VISION',
    ctaHref: '/vision',
  },
};

/**
 * Authoritative Campus Connect Flagship Case Study Data.
 */
export const campusConnectCaseStudy: CampusConnectCaseStudy = {
  id: 'campus-connect',
  slug: 'campus-connect',
  title: 'Campus Connect',
  primaryTagline: 'Your Entire College Life. One App.',
  secondaryPositioning: 'Campus Operating System',
  category: 'Higher Education Enterprise Campus Operating System',
  shortPositioning:
    'A unified collegiate operating system connecting academic operations, student engagement, institutional administration, and verified digital credentials.',
  status: 'STATUS // PRODUCTION-READY',
  version: 'VERSION // 1.0.0',
  platformBadges: ['WEB // PWA', 'ANDROID // CAPACITOR', 'MULTI-TENANT // ENABLED'],
  foundingInstitution: {
    name: 'B. K. Birla Night Arts, Science & Commerce College',
    role: 'Founding Institution Partner',
    relationship: 'Primary Development & Operational Validation Partner',
    description:
      'Co-developed and stress-tested directly within active collegiate workflows, informing real-world operational requirements across attendance, administrative governance, and student engagement.',
  },
  problems: [
    {
      number: '01',
      title: 'Fragmented academic workflows',
      description:
        'Attendance, timetables, marks, syllabus distribution, notices, and campus activities exist across disconnected paper and chat systems, creating friction for students and faculty.',
    },
    {
      number: '02',
      title: 'Attendance administration overhead',
      description:
        'Paper-based registers create immense administrative burden, proxy attendance, lost physical registers, and delayed semester-end percentage compilation.',
    },
    {
      number: '03',
      title: 'Information fragmentation',
      description:
        'Physical bulletin boards and informal channels cause critical academic deadlines, notices, and official announcements to be easily missed.',
    },
    {
      number: '04',
      title: 'Limited engagement infrastructure',
      description:
        'Student participation in workshops, competitions, and extracurricular initiatives lacks a verified digital incentive layer or structured recognition.',
    },
    {
      number: '05',
      title: 'Administrative coordination complexity',
      description:
        'Student batch promotions, class allocation, timetable scheduling, and attendance dispute resolution demand substantial manual coordination across departments.',
    },
    {
      number: '06',
      title: 'Slow credential verification',
      description:
        'Physical academic documents, certificates, and ID cards cannot be authenticated instantly and reliably by external verifiers and universities.',
    },
  ],
  solutionOverview:
    'Campus Connect unifies student engagement, academic operations, faculty workflows, institutional administration, and public credential verification into a single multi-tenant institutional operating system.',
  personas: [
    {
      role: 'STUDENT',
      title: 'Student Experience',
      description: 'A unified daily interface for academic life, identity, and extracurricular progression.',
      capabilities: [
        'Dynamic QR & OTP Attendance Logging',
        'Real-Time Academic Timetable Matrix',
        'Smart Digital Student ID with Optical Security Token',
        'Course Assignment Tracking & Submissions',
        'Examination Marks, SGPA & CGPA Records',
        'Engagement Points Ledger & Daily Streak Counter',
        'Tiered Leaderboards & Core Member Badge',
        'E-Cell Venture Registration & Events',
        'Direct Administrative Support Ticketing',
      ],
    },
    {
      role: 'FACULTY',
      title: 'Faculty Workspace',
      description: 'Streamlined academic management, live lecture control, and grading workflows.',
      capabilities: [
        'Lecture Scheduling & Course Session Launch',
        'Dynamic 10-Minute QR Attendance Generation',
        'Live Real-Time Student Attendance Roster',
        'Manual Attendance Overrides & Dispute Audit',
        'Assignment Publishing & Digital Submissions',
        'Coursework Grading & Examination Marks Entry',
        'Class Performance & Absenteeism Analytics',
        'Departmental Notice Distribution',
      ],
    },
    {
      role: 'INSTITUTIONAL ADMIN',
      title: 'Administrative Control Center',
      description: 'Enterprise governance, class scheduling, compliance records, and operations.',
      capabilities: [
        'Comprehensive Student & Faculty Directories',
        'Department, Programme & Class Architecture',
        'Master Timetable Matrix Scheduling',
        'Monthly Statutory Attendance Registers',
        'Academic Cohort Batch Promotions',
        'Document Management & Certificate Issuance',
        'Targeted Push Notifications & Announcements',
        'Institutional E-Cell & Committee Governance',
        'Detailed Statutory Compliance Reports',
      ],
    },
    {
      role: 'PLATFORM OPERATOR',
      title: 'Super Admin Infrastructure',
      description: 'Multi-tenant provisioning, security governance, and system-wide monitoring.',
      capabilities: [
        'Multi-Tenant College Provisioning & Onboarding',
        'Granular Feature Flags & Institutional Controls',
        'Platform-Wide Theming & Whitelabel Branding',
        'Realtime System Health & Performance Monitoring',
        'Row-Level Security & Access Governance',
        'Global Audit Logs & Security Telemetry',
      ],
    },
    {
      role: 'PUBLIC VERIFIER',
      title: 'Zero-Auth Credential Verifier',
      description: 'Trustless public authentication for certificates and academic records.',
      capabilities: [
        'Scan QR Code or Enter Cryptographic Reference',
        'Instant Zero-Login Authentication Protocol',
        'Tamper-Evident Document Authenticity Display',
        'Verified Student, Programme & Institution Details',
        'Zero Exposure of Non-Public Institutional Data',
      ],
    },
  ],
  systems: [
    {
      id: 'attendance',
      number: '01',
      name: 'ATTENDANCE INFRASTRUCTURE',
      tagline: 'Timing-safe, verified session attendance.',
      description:
        'A multi-method attendance verification system engineered to eliminate proxy attendance and manual register calculation through time-limited dynamic tokens.',
      capabilities: [
        'Dynamic 10-minute QR code session generation',
        '6-digit OTP fallback for low-connectivity environments',
        'Live real-time faculty attendance roster',
        'Granular manual attendance overrides with reason tracking',
        'Immutable attendance audit logs and modification history',
        'Automated monthly statutory attendance registers',
        'Structured student attendance dispute resolution workflow',
      ],
      technicalHighlights: [
        'Timing-safe cryptographic token matching',
        'Supabase Realtime WebSocket presence updates',
        'PostgreSQL stored procedures for atomic check-ins',
      ],
    },
    {
      id: 'identity',
      number: '02',
      name: 'DIGITAL IDENTITY',
      tagline: 'Smart, secure collegiate digital credentials.',
      description:
        'An authenticated digital student card system replacing vulnerable plastic IDs with high-fidelity, verified institutional identity credentials.',
      capabilities: [
        'Smart digital student ID card with dynamic security QR',
        'High-resolution student photograph and roll number display',
        'Academic programme, division, and cohort designation',
        'Animated optical security hologram layer to prevent spoofing',
        'Administrative ID verification, activation, and approval cycle',
        'Instant access to emergency contact details and blood group',
      ],
      technicalHighlights: [
        'Client-side optical security rendering',
        'Signed verification payload',
        'Strict tenant-scoped photo storage on Google Drive API',
      ],
    },
    {
      id: 'academics',
      number: '03',
      name: 'ACADEMIC OPERATIONS',
      tagline: 'End-to-end curriculum and evaluation management.',
      description:
        'A comprehensive academic lifecycle engine managing daily course timetables, coursework submission cycles, examinations, and grade dissemination.',
      capabilities: [
        'Interactive timetable matrix with room and faculty mapping',
        'Course assignment publishing with digital file attachments',
        'Student digital assignment submissions with timestamping',
        'Faculty evaluation, rubric grading, and feedback delivery',
        'Internal and semester examination marks management',
        'Automated SGPA and cumulative CGPA calculation',
        'Secure semester results distribution to authenticated students',
        'Cohort batch promotion engine across academic semesters',
      ],
      technicalHighlights: [
        'Configurable grading scales and credit weight matrices',
        'Batch promotion transaction integrity',
        'Optimized PostgreSQL indexation for multi-year cohorts',
      ],
    },
    {
      id: 'credentials',
      number: '04',
      name: 'VERIFIED CREDENTIALS',
      tagline: 'Cryptographic public verification without logins.',
      description:
        'A public-facing document authentication portal enabling employers, background verifiers, and universities to validate collegiate credentials.',
      capabilities: [
        'Public verification route (/verify/:reference) with zero-login requirement',
        'Unique alphanumeric cryptographic credential references',
        'Scannable QR codes embedded into generated certificates',
        'Real-time authenticity confirmation showing student, programme & issuing college',
        'Complete prevention of unauthorized private record leakage',
      ],
      technicalHighlights: [
        'Public read-only PostgreSQL RLS policy on verified credentials',
        'Rate-limited verification endpoint against automated scraping',
        'Zero exposure of student contact or institutional backend tokens',
      ],
    },
    {
      id: 'engagement',
      number: '05',
      name: 'STUDENT ENGAGEMENT',
      tagline: 'Structured collegiate motivation and recognition.',
      description:
        'An institutional gamification and incentive layer converting academic consistency and campus participation into tangible recognition.',
      capabilities: [
        'Audited points ledger logging activities and achievements',
        'Dynamic class-level and institution-wide leaderboards',
        'Daily check-in attendance streaks with streak protection',
        'Curated academic and extracurricular milestone challenges',
        'Tiered reward progression: BRONZE, SILVER, GOLD, and ELITE',
        'Prestigious Core Member badge distinction for standout contributors',
      ],
      technicalHighlights: [
        'Event-driven point computation via PostgreSQL triggers',
        'Anti-cheat streak validation rules',
        'Realtime leaderboard caching with TanStack React Query',
      ],
    },
    {
      id: 'ecell',
      number: '06',
      name: 'E-CELL ECOSYSTEM',
      tagline: 'Campus entrepreneurship and event operations.',
      description:
        'A dedicated digital infrastructure layer powering campus entrepreneurship cells, annual vendor fairs, and student startup initiatives.',
      capabilities: [
        'Institutional entrepreneurship event and workshop publishing',
        'Stall registration engine supporting teams of 1 to 4 members',
        'Team formation and leadership contact directory',
        'Executive committee directory and mentor profile showcase',
        'Direct student entrepreneur application tracking and approvals',
      ],
      technicalHighlights: [
        'Team membership validation with roll number cross-checks',
        'Capacity-controlled stall allocation workflows',
      ],
    },
    {
      id: 'communication',
      number: '07',
      name: 'COMMUNICATION & NOTIFICATIONS',
      tagline: 'Targeted, reliable campus notification infrastructure.',
      description:
        'An enterprise alert distribution system combining in-app notification centers with device-level Web Push notifications.',
      capabilities: [
        'Real-time in-app notification center with read/unread tracking',
        'Web Push notifications powered by VAPID ES256 standards',
        'Administrative broadcast announcements with priority tiers',
        'Granular audience targeting by department, programme, class, or role',
        'Notification delivery audit and engagement telemetry',
      ],
      technicalHighlights: [
        'Deno Edge Function Web Push dispatcher',
        'VAPID key cryptography',
        'Service Worker push handlers in PWA',
      ],
    },
    {
      id: 'operations',
      number: '08',
      name: 'INSTITUTIONAL OPERATIONS',
      tagline: 'Enterprise multi-tenant administrative governance.',
      description:
        'The institutional backbone managing governance hierarchies, faculty credentials, batch allocations, statutory records, and support.',
      capabilities: [
        'True multi-tenant data architecture scoped by college_id',
        'Full administrative configuration for departments, programmes, and divisions',
        'Faculty assignment matrix and permission governance',
        'Academic batch rollover and historical cohort archiving',
        'Comprehensive statutory compliance and attendance reporting',
        'Cloud file storage integration for academic and administrative records',
        'Integrated multi-tier student and faculty support ticketing',
      ],
      technicalHighlights: [
        'PostgreSQL Row-Level Security policies enforced at database engine',
        'Google Drive API enterprise service account integration',
        'Zoho SMTP transactional delivery pipeline',
      ],
    },
  ],
  experienceFlow: [
    {
      step: '01',
      label: 'ONBOARD',
      description: 'Frictionless role-based profile onboarding with student and faculty directory matching.',
    },
    {
      step: '02',
      label: 'VERIFY',
      description: 'Institutional credential validation and secure digital ID generation with optical hologram.',
    },
    {
      step: '03',
      label: 'LEARN',
      description: 'Centralized access to daily lecture timetables, assignment tasks, and syllabus resources.',
    },
    {
      step: '04',
      label: 'ATTEND',
      description: 'Dynamic 10-minute QR code and OTP attendance logging with live roster synchronization.',
    },
    {
      step: '05',
      label: 'PARTICIPATE',
      description: 'Active engagement in collegiate E-Cell initiatives, stall events, and campus challenges.',
    },
    {
      step: '06',
      label: 'ACHIEVE',
      description: 'Earning ledger points, ascending tier ranks (Bronze to Elite), and unlocking academic results.',
    },
    {
      step: '07',
      label: 'VERIFY',
      description: 'Instant zero-auth cryptographic verification of graduating credentials via /verify/:reference.',
    },
  ],
  architecture: {
    headline: 'Engineered as infrastructure, not just an interface.',
    description:
      'Campus Connect is structured as a resilient, multi-tenant cloud platform separating client presentation, edge runtime execution, and an isolated relational data core.',
    layers: [
      {
        name: 'CLIENT PRESENTATION LAYER',
        role: 'Responsive Web Application (PWA) & Native Android Shell',
        technologies: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Capacitor', 'Workbox PWA'],
        details:
          'Single-page application delivering sub-second transitions, responsive layout across viewports, offline caching via Service Workers, and native Android packaging with Capacitor.',
      },
      {
        name: 'EDGE COMPUTING & HOSTING',
        role: 'Global Edge Distribution & Serverless Logic',
        technologies: ['Vercel Edge Network', 'Deno Edge Functions'],
        details:
          'Static assets and SPA routing delivered globally via Vercel Edge. 25 Deno Edge Functions handle privileged operations, VAPID Web Push broadcasts, and statutory calculations.',
      },
      {
        name: 'DATA & REALTIME ENGINE',
        role: 'Relational Database with Row-Level Security',
        technologies: ['Supabase', 'PostgreSQL 15+', 'Supabase Realtime', 'Supabase Auth'],
        details:
          '62 relational tables isolated by college_id using PostgreSQL Row-Level Security (RLS). Realtime WebSocket channels broadcast live attendance and notifications.',
      },
      {
        name: 'INTEGRATED SERVICES',
        role: 'Supporting Infrastructure & Third-Party APIs',
        technologies: ['Google Drive API', 'Web Push (VAPID ES256)', 'Zoho SMTP', 'ZXing Scanner'],
        details:
          'Document attachments and photos stored securely via Google Drive API. Transactional notices routed through Zoho SMTP. High-speed QR scanning via ZXing.',
      },
    ],
  },
  techStack: [
    {
      category: 'Frontend Core',
      technologies: [
        { name: 'React 18', detail: 'Component Architecture' },
        { name: 'TypeScript', detail: 'Type-Safe Codebase' },
        { name: 'Vite', detail: 'Build Tooling & Fast HMR' },
        { name: 'Tailwind CSS', detail: 'Design System & Utility Layer' },
        { name: 'React Router', detail: 'Client Routing' },
        { name: 'TanStack React Query', detail: 'Server State Caching' },
        { name: 'Motion', detail: 'Restrained Micro-Animations' },
      ],
    },
    {
      category: 'Backend & Database',
      technologies: [
        { name: 'Supabase', detail: 'Backend Infrastructure' },
        { name: 'PostgreSQL 15+', detail: '62 Relational Tables' },
        { name: 'Deno Edge Functions', detail: '25 Serverless Functions' },
        { name: 'Supabase Realtime', detail: 'Live WebSocket Channels' },
        { name: 'Supabase Auth', detail: 'JWT & Session Security' },
      ],
    },
    {
      category: 'Infrastructure & Platforms',
      technologies: [
        { name: 'Vercel', detail: 'Global Edge Deployment' },
        { name: 'PWA / Workbox', detail: 'Offline Service Worker' },
        { name: 'Capacitor', detail: 'Native Android Bridge' },
        { name: 'Android SDK 36', detail: 'Target Compilation' },
      ],
    },
    {
      category: 'Supporting Systems',
      technologies: [
        { name: 'Google Drive API', detail: 'Document & Photo Storage' },
        { name: 'Web Push / VAPID', detail: 'ES256 Encrypted Alerts' },
        { name: 'Zoho SMTP', detail: 'Institutional Email Pipeline' },
        { name: 'ZXing', detail: 'Client-Side QR Token Engine' },
      ],
    },
  ],
  securityAndMultiTenancy: {
    headline: 'Institutional data stays institutionally scoped.',
    description:
      'Security is not treated as a feature added on top, but as an architectural constraint enforced at the database engine level.',
    points: [
      {
        title: 'PostgreSQL Row-Level Security (RLS)',
        description:
          'Enforced on all 62 relational database tables. Queries automatically resolve strictly within the authenticated tenant context, preventing data leakage across institutions.',
      },
      {
        title: 'Mandatory college_id Tenant Scoping',
        description:
          'Every record belongs to a verified institutional partition. Database constraints prevent cross-tenant record creation, query resolution, or foreign key linking.',
      },
      {
        title: 'Strict Role-Based Access Control (RBAC)',
        description:
          'Fine-grained permission matrices separate Student, Faculty, Institutional Admin, and Platform Operator operations with explicit least-privilege policies.',
      },
      {
        title: 'Timing-Safe Token Verification',
        description:
          'Attendance QR codes utilize dynamic 10-minute rotating tokens with server-verified timestamps and timing-attack-resistant cryptographic comparisons.',
      },
      {
        title: 'Privileged Edge Function Boundaries',
        description:
          'Sensitive bulk operations, batch promotions, statutory register compilation, and push broadcasts execute inside isolated Deno Edge Functions using service-role secrets.',
      },
      {
        title: 'Comprehensive Audit Logging',
        description:
          'Immutable audit trails record attendance modifications, manual grade adjustments, role assignments, and authentication events with timestamps and actor IDs.',
      },
      {
        title: 'Zero-Exposure Credential Verification',
        description:
          'Public credential lookups at /verify/:reference return exclusively the verified public document facts, completely isolating student PII and institutional records.',
      },
    ],
  },
  metrics: [
    {
      value: '1.0.0',
      label: 'PRODUCTION VERSION',
      sublabel: 'Fully deployed and operational',
    },
    {
      value: '62',
      label: 'DATABASE TABLES',
      sublabel: 'Relational PostgreSQL schema',
    },
    {
      value: '25',
      label: 'DENO EDGE FUNCTIONS',
      sublabel: 'Serverless operational endpoints',
    },
    {
      value: '309',
      label: 'AUTOMATED TESTS',
      sublabel: 'Full test execution suite',
    },
    {
      value: '34',
      label: 'TEST FILES',
      sublabel: 'Unit and integration test suites',
    },
    {
      value: '1,547',
      label: 'GIT COMMITS',
      sublabel: 'Continuous version-controlled engineering',
    },
  ],
  deployment: {
    web: {
      domains: ['campusconnect.indevs.in', 'campusconnect.net.in'],
      type: 'Production Progressive Web App (PWA)',
      description: 'Live production deployment hosted on Vercel with automated continuous delivery.',
    },
    android: {
      version: 'CampusConnect v1.0.0',
      targetSdk: 'Android SDK 36',
      distribution: 'Compiled Release APK & AAB',
      description:
        'Packaged with Capacitor. Release APK and Android App Bundle (AAB) compiled and verified for production installation.',
    },
    ios: {
      type: 'Progressive Web App Access',
      note: 'Platform accessed via optimized Safari PWA.',
    },
  },
  evolution: [
    {
      phase: 'PHASE 01',
      title: 'LECTURE ATTENDANCE',
      description:
        'Conceived and engineered as a targeted solution to eliminate paper registers and proxy attendance during collegiate lectures.',
    },
    {
      phase: 'PHASE 02',
      title: 'ACADEMIC PLATFORM',
      description:
        'Expanded to manage academic timetables, course assignment distributions, internal examination evaluations, and smart student digital IDs.',
    },
    {
      phase: 'PHASE 03',
      title: 'MULTI-TENANT CAMPUS SYSTEM',
      description:
        'Architectural overhaul introducing PostgreSQL Row-Level Security and college_id tenant scoping to power multiple institutions simultaneously.',
    },
    {
      phase: 'PHASE 04',
      title: 'CAMPUS OPERATING SYSTEM',
      description:
        'The modern production ecosystem uniting academic operations, zero-auth public credentials, engagement gamification, E-Cell venture operations, and institutional governance.',
    },
  ],
  cta: {
    eyebrow: 'FLAGSHIP PLATFORM INQUIRY',
    headline: 'BUILDING THE NEXT CAMPUS SYSTEM?',
    copy: 'Campus Connect is designed as infrastructure for institutions that want their academic, administrative, and student experiences to operate as one connected system.',
    buttonText: 'START A CONVERSATION',
    href: '/contact',
  },
};

/**
 * NagrikSetu Case Study Data
 */
export const nagrikSetuCaseStudy: GenericProjectCaseStudy = {
  id: 'nagriksetu',
  slug: 'nagriksetu',
  title: 'NagrikSetu',
  primaryTagline: 'Connecting Citizens with Transparent Public Infrastructure.',
  secondaryPositioning: 'Digital Civic Initiative',
  category: 'Civic Technology & Public Service Digital Initiative',
  shortPositioning:
    'A digital initiative focused on citizen-oriented connectivity, accessible municipal notices, and direct public service transparency.',
  status: 'STATUS // IN ACTIVE DEVELOPMENT',
  version: 'VERSION // 0.8.4',
  platformBadges: ['WEB // PWA', 'LOW-BANDWIDTH // OPTIMIZED', 'MULTILINGUAL // READY'],
  partnerOrInstitution: {
    name: 'Citizen Service & Public Access Initiative',
    role: 'Ecosystem Pilot',
    description: 'Designed to bridge information and procedural gaps between citizens and regional public administration bodies.',
  },
  problems: [
    {
      number: '01',
      title: 'Dispersed municipal notices',
      description: 'Citizens struggle to find accurate, timely information regarding ward announcements, water cuts, civil works, and public hearings.',
    },
    {
      number: '02',
      title: 'Complex administrative procedures',
      description: 'Basic public forms, certificate procedures, and service requests are often obscured by bureaucratic jargon and opaque requirements.',
    },
    {
      number: '03',
      title: 'Inaccessible digital portals',
      description: 'Legacy civic websites are frequently slow, non-responsive on entry-level mobile devices, and lack multilingual accessibility.',
    },
    {
      number: '04',
      title: 'Lack of query tracking',
      description: 'Citizens submit applications or complaints with no deterministic tracking reference or status visibility.',
    },
  ],
  objectives: [
    'Create an ultra-lightweight, accessible civic interface operating under 100KB initial payload.',
    'Provide bilingual and vernacular support for regional citizen demographics.',
    'Enable structured, deterministic ticket references for citizen inquiries without invasive personal tracking.',
    'Ensure WCAG 2.1 AAA accessibility for screen readers and high-contrast environments.',
  ],
  solutionOverview:
    'NagrikSetu acts as an intuitive civic bridge. By synthesizing municipal announcements, service procedures, and status tracking into a single clean interface, it empowers citizens to access essential public services with clarity, speed, and dignity.',
  features: [
    {
      number: '01',
      title: 'Verified Civic Notice Feed',
      description: 'Real-time, department-categorized public bulletins with instant keyword filtering and date verification.',
      tag: 'INFORMATION',
    },
    {
      number: '02',
      title: 'Service Procedure Navigator',
      description: 'Step-by-step documentation guides with downloadable checklists for certificates, utilities, and registrations.',
      tag: 'ACCESSIBILITY',
    },
    {
      number: '03',
      title: 'Zero-Login Reference Tracker',
      description: 'Check grievance and application status using only a unique reference code, protecting personal privacy.',
      tag: 'PRIVACY',
    },
    {
      number: '04',
      title: 'Offline-First Emergency Directory',
      description: 'Cached emergency contacts, municipal helplines, and local administrative offices available without active internet.',
      tag: 'RESILIENCE',
    },
    {
      number: '05',
      title: 'Multilingual Typography & Voice Input',
      description: 'Localized typography in English and regional Indian languages with built-in voice accessibility.',
      tag: 'INCLUSIVITY',
    },
    {
      number: '06',
      title: 'Ward-Level Community Alerts',
      description: 'Opt-in notification system delivering critical localized alerts regarding civic infrastructure maintenance.',
      tag: 'NOTIFICATION',
    },
  ],
  architecture: {
    headline: 'Engineered for low bandwidth, extreme resilience, and universal access.',
    description: 'NagrikSetu is architected to perform flawlessly on basic smartphones over 2G/3G cellular networks with zero bloat.',
    layers: [
      {
        name: 'PRESENTATION LAYER',
        role: 'Lightweight PWA & Mobile Web',
        technologies: ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite', 'Service Worker'],
        details: 'Under 100KB initial bundle, zero third-party tracking scripts, semantic HTML5, and strict accessible typography.',
      },
      {
        name: 'EDGE DISTRIBUTION LAYER',
        role: 'Global CDN & Static Caching',
        technologies: ['Vercel Edge Network', 'Cloudflare CDN'],
        details: 'Sub-second first contentful paint across India, automated asset compression, and offline fallback rendering.',
      },
      {
        name: 'CIVIC DATA & VERIFICATION ENGINE',
        role: 'PostgreSQL Relational Schema & Secure APIs',
        technologies: ['PostgreSQL', 'Supabase', 'Deno Edge Functions'],
        details: 'Public-read cached notices, cryptographic token generation for citizen references, and strict data anonymization.',
      },
    ],
  },
  techStack: [
    {
      category: 'Frontend & Accessibility',
      technologies: [
        { name: 'React 18', detail: 'Modular Component Architecture' },
        { name: 'TypeScript', detail: 'Type-Safe Data Contracts' },
        { name: 'Tailwind CSS', detail: 'Clean Utility Styling' },
        { name: 'PWA / Workbox', detail: 'Offline Resilience' },
      ],
    },
    {
      category: 'Data & Edge Infrastructure',
      technologies: [
        { name: 'PostgreSQL', detail: 'Relational Bulletin & Service Directory' },
        { name: 'Supabase', detail: 'Realtime Data Broadcasts' },
        { name: 'Deno Edge', detail: 'Lightweight Civic Query Endpoints' },
        { name: 'Cloudflare', detail: 'DDoS Protection & Edge Caching' },
      ],
    },
  ],
  metrics: [
    {
      value: '< 95 KB',
      label: 'INITIAL BUNDLE',
      sublabel: 'Optimized for 2G/3G mobile networks',
    },
    {
      value: '100 / 100',
      label: 'LIGHTHOUSE A11Y',
      sublabel: 'Full screen-reader accessibility',
    },
    {
      value: '0.8.4',
      label: 'CURRENT BUILD',
      sublabel: 'Active civic prototype phase',
    },
    {
      value: 'Bilingual',
      label: 'LANGUAGE READY',
      sublabel: 'English & Regional Indic Script support',
    },
  ],
  evolution: [
    {
      phase: 'PHASE 01',
      title: 'CIVIC RESEARCH & CITIZEN INTERVIEWS',
      description: 'Documenting real-world information hurdles faced by citizens when navigating municipal documentation and public bulletins.',
    },
    {
      phase: 'PHASE 02',
      title: 'LIGHTWEIGHT NOTICE MATRIX PROTOTYPE',
      description: 'Engineering the offline-first public notice board with verified category filters and instant text-to-speech support.',
    },
    {
      phase: 'PHASE 03',
      title: 'STATUS TRACKING & CIVIC WORKFLOWS',
      description: 'Developing privacy-preserving reference code architecture for transparent application and grievance tracking.',
    },
    {
      phase: 'PHASE 04',
      title: 'PUBLIC CIVIC DEPLOYMENT',
      description: 'Expanding directory integrations and preparing pilot deployments for community-level municipal initiatives.',
    },
  ],
  currentStatus: {
    stage: 'PILOT PROTOTYPE VALIDATION',
    timeline: 'Q3-Q4 2026',
    readiness: '85% Architecture Complete',
    focus: 'Multilingual voice search & ward bulletin verification protocol',
  },
  relatedProjects: [
    {
      title: 'Campus Connect',
      slug: 'campus-connect',
      category: 'Higher Education Operating System',
      description: 'Flagship multi-tenant educational platform uniting academic operations and digital credentials.',
    },
    {
      title: 'RAILVERSE',
      slug: 'railverse',
      category: 'Transit Systems & Mobility',
      description: 'Real-time railway network simulation and commuter transit intelligence.',
    },
  ],
  cta: {
    eyebrow: 'CIVIC INITIATIVE INQUIRY',
    headline: 'COLLABORATE ON CIVIC TECHNOLOGY?',
    copy: 'We welcome partnerships with local administrative departments, civil society organizations, and civic researchers dedicated to accessible digital public infrastructure.',
    buttonText: 'CONNECT WITH THE INITIATIVE',
    href: '/contact',
  },
};

/**
 * RAILVERSE Case Study Data
 */
export const railverseCaseStudy: GenericProjectCaseStudy = {
  id: 'railverse',
  slug: 'railverse',
  title: 'RAILVERSE',
  primaryTagline: 'Transit Intelligence. Real-Time Railway Simulation.',
  secondaryPositioning: 'Mobility & Transit Platform',
  category: 'Transit Systems & Real-Time Mobility Technology',
  shortPositioning:
    'A technology initiative within the AERVENLabs ecosystem focused on dynamic railway modeling, transit telemetry, and intuitive commuter navigation.',
  status: 'STATUS // RESEARCH & PROTOTYPE',
  version: 'VERSION // 0.6.2',
  platformBadges: ['SIMULATION // ENGINE', 'REAL-TIME // WEBSOCKET', 'TRANSIT // DATA'],
  partnerOrInstitution: {
    name: 'AERVENLabs Transit Research Lab',
    role: 'Internal R&D Initiative',
    description: 'Experimental laboratory researching high-density urban transit optimization and computational railway modeling.',
  },
  problems: [
    {
      number: '01',
      title: 'Transit information latency',
      description: 'Commuters on dense railway systems experience delayed platform change notices and ambiguous train arrival forecasts.',
    },
    {
      number: '02',
      title: 'Bottlenecks during disruptions',
      description: 'When regional lines experience unexpected delays, lack of proactive simulation models exacerbates platform overcrowding.',
    },
    {
      number: '03',
      title: 'Complex multi-modal transfers',
      description: 'Transferring between suburban rail, express networks, and metro links involves fragmented timetables with zero synchronized guidance.',
    },
    {
      number: '04',
      title: 'Static scheduling limitations',
      description: 'Traditional railway schedules are published as rigid tables rather than live, predictive operational streams.',
    },
  ],
  objectives: [
    'Model high-density suburban rail corridors through reactive state machines.',
    'Deliver sub-500ms schedule and platform reallocation telemetry over WebSockets.',
    'Build intuitive visual representations of train progress along multi-track junctions.',
    'Test edge-compatible routing algorithms to calculate optimal transfer pathways during delays.',
  ],
  solutionOverview:
    'RAILVERSE combines real-time event telemetry, geometric track network models, and commuter mobility algorithms into a unified transit platform designed to predict, visualize, and optimize everyday rail journeys.',
  features: [
    {
      number: '01',
      title: 'Dynamic Junction Simulation Canvas',
      description: 'Interactive SVG / Canvas rail network representation rendering train positions, track occupancy, and signal blocks.',
      tag: 'SIMULATION',
    },
    {
      number: '02',
      title: 'Sub-Second Platform Telemetry',
      description: 'Real-time updates communicating platform assignments and rake configurations prior to station approach.',
      tag: 'REAL-TIME',
    },
    {
      number: '03',
      title: 'Congestion & Flow Prediction',
      description: 'Heuristic model calculating station footfall and carload distribution to assist commuters in selecting optimal coaches.',
      tag: 'ANALYTICS',
    },
    {
      number: '04',
      title: 'Disruption Reroute Suggestions',
      description: 'Automated secondary transit alternatives suggested dynamically when primary corridors experience track delays.',
      tag: 'ROUTING',
    },
    {
      number: '05',
      title: 'Multi-Modal Interchange Matrix',
      description: 'Synchronized cross-network schedules uniting suburban rail, metro lines, and local feeder transit into one timeline.',
      tag: 'TRANSIT',
    },
    {
      number: '06',
      title: 'Low-Data Commuter Feed',
      description: 'Bandwidth-thrifty text and vector stream that loads instantly inside packed trains and underground stations.',
      tag: 'EFFICIENCY',
    },
  ],
  architecture: {
    headline: 'Computational railway simulation meets lightweight reactive telemetry.',
    description: 'RAILVERSE separates high-frequency transit event streams from presentation models, ensuring reliable client synchronization.',
    layers: [
      {
        name: 'VISUALIZATION LAYER',
        role: 'Hardware-Accelerated Web Canvas & PWA',
        technologies: ['React 18', 'TypeScript', 'HTML5 Canvas', 'Tailwind CSS', 'Vite'],
        details: 'Smooth 60 FPS track geometry rendering, responsive touch controls for mobile viewports, and zero layout thrashing.',
      },
      {
        name: 'EVENT & STREAMING ENGINE',
        role: 'WebSocket State Synchronization',
        technologies: ['Supabase Realtime', 'WebSockets', 'Deno Edge Workers'],
        details: 'Push-based telemetry dispatching delta updates when signal blocks transition or timestamps shift.',
      },
      {
        name: 'SIMULATION CORE',
        role: 'Transit Geometry & Schedule Graph Database',
        technologies: ['PostgreSQL', 'Spatial Geometry Extensions', 'Node.js / Python'],
        details: 'Topological node-edge graph modeling stations, crossover points, siding tracks, and speed restrictions.',
      },
    ],
  },
  techStack: [
    {
      category: 'Visualization & Client Core',
      technologies: [
        { name: 'React 18', detail: 'Declarative Interface Logic' },
        { name: 'TypeScript', detail: 'Strict Transit Data Types' },
        { name: 'HTML5 Canvas / SVG', detail: '60 FPS Schematic Rendering' },
        { name: 'Tailwind CSS', detail: 'Restrained White-First Layout' },
      ],
    },
    {
      category: 'Data & Telemetry Engine',
      technologies: [
        { name: 'PostgreSQL', detail: 'Graph Database & Schedule Storage' },
        { name: 'Supabase Realtime', detail: 'Live WebSocket Signal Feed' },
        { name: 'Python / NumPy', detail: 'Corridor Capacity Simulation' },
        { name: 'Vercel Edge', detail: 'Fast Regional Delivery' },
      ],
    },
  ],
  metrics: [
    {
      value: '< 500 ms',
      label: 'TELEMETRY LATENCY',
      sublabel: 'WebSocket state propagation',
    },
    {
      value: '60 FPS',
      label: 'CANVAS RENDERING',
      sublabel: 'Hardware-accelerated map view',
    },
    {
      value: '0.6.2',
      label: 'PROTOTYPE SPEC',
      sublabel: 'Active transit research branch',
    },
    {
      value: '4 Corridors',
      label: 'TOPOLOGY MODELED',
      sublabel: 'Suburban junction testbed',
    },
  ],
  evolution: [
    {
      phase: 'PHASE 01',
      title: 'CORRIDOR MAPPING & TRANSIT AUDIT',
      description: 'Documenting timetable variances, platform change bottlenecks, and commuter pain points across high-density suburban networks.',
    },
    {
      phase: 'PHASE 02',
      title: 'TOPOLOGICAL GRAPH ARCHITECTURE',
      description: 'Engineering the relational track-and-junction mathematical model representing stations, turnouts, and block signals.',
    },
    {
      phase: 'PHASE 03',
      title: 'INTERACTIVE CANVAS SIMULATION',
      description: 'Developing the real-time canvas visualizer with live WebSocket state updates and adaptive route calculations.',
    },
    {
      phase: 'PHASE 04',
      title: 'MULTI-MODAL INTELLIGENCE EXPANSION',
      description: 'Integrating external transit feeds and testing automated disruption advisories across interconnected urban transport lines.',
    },
  ],
  currentStatus: {
    stage: 'RESEARCH & ALGORITHM REFINEMENT',
    timeline: 'Ongoing 2026',
    readiness: '70% Core Model Validated',
    focus: 'Topological route optimizer & real-time WebSocket state synchronizer',
  },
  relatedProjects: [
    {
      title: 'Campus Connect',
      slug: 'campus-connect',
      category: 'Higher Education Operating System',
      description: 'Flagship multi-tenant educational platform uniting academic operations and digital credentials.',
    },
    {
      title: 'NagrikSetu',
      slug: 'nagriksetu',
      category: 'Civic Technology',
      description: 'Digital initiative connecting citizens with transparent public infrastructure.',
    },
  ],
  cta: {
    eyebrow: 'TRANSIT SYSTEMS COLLABORATION',
    headline: 'INTERESTED IN MOBILITY INTELLIGENCE?',
    copy: 'We are keen to collaborate with transit planners, mobility researchers, and software engineers working to modernize public transport systems.',
    buttonText: 'DISCUSS TRANSIT ENGINEERING',
    href: '/contact',
  },
};

/**
 * AERVENLabs Website Case Study Data
 */
export const aervenlabsWebsiteCaseStudy: GenericProjectCaseStudy = {
  id: 'aervenlabs-website',
  slug: 'aervenlabs-website',
  title: 'AERVENLabs Official Platform',
  primaryTagline: 'Engineering Ideas. Building What\'s Next.',
  secondaryPositioning: 'Digital Brand & Product Experience',
  category: 'Company Digital Platform & Engineering Showcase',
  shortPositioning:
    'The company\'s official digital platform, engineered as a high-performance, white-first digital flagship establishing our brand identity and technical capabilities.',
  status: 'STATUS // PRODUCTION-READY',
  version: 'VERSION // 2.0.0',
  platformBadges: ['WHITE-FIRST // SYSTEM', 'PERFORMANCE // 100/100', 'RESPONSIVE // FLUID'],
  partnerOrInstitution: {
    name: 'AERVENLabs Technologies Pvt. Ltd.',
    role: 'Official Digital Flagship',
    description: 'Designed, architected, and engineered in-house to embody Apple-level discipline and modern technology startup personality.',
  },
  problems: [
    {
      number: '01',
      title: 'Startup template fatigue',
      description: 'Modern tech startups often rely on dark neon themes, bloated 3D hero sections, and vague buzzwords with zero tangible software substance.',
    },
    {
      number: '02',
      title: 'Performance degradation from heavy libraries',
      description: 'Excessive WebGL shaders and uncontrolled scripts create laggy scrolling, high battery drain, and poor mobile responsiveness.',
    },
    {
      number: '03',
      title: 'Unverified claims and fake metrics',
      description: 'Company websites frequently invent user numbers, partnerships, and certifications, eroding authentic credibility.',
    },
    {
      number: '04',
      title: 'Inaccessible interactions',
      description: 'Lack of keyboard navigation, poor contrast, missing semantic HTML, and broken touch targets alienate users.',
    },
  ],
  objectives: [
    'Establish an unmistakable white-first, premium editorial visual identity with strict design tokens.',
    'Achieve 100/100 Core Web Vitals on mobile and desktop viewports.',
    'Showcase verified technology projects, actual team members, and authentic infrastructure partners.',
    'Deliver buttery 60 FPS scroll-reveals with GSAP and Motion while respecting reduced-motion preferences.',
  ],
  solutionOverview:
    'The AERVENLabs digital platform demonstrates that engineering discipline and visual restraint create the most powerful digital presence. Built on a crisp white-first canvas with architectural typography, subtle accents, and sub-second page transitions, it presents the company\'s genuine ambition and production work with complete authenticity.',
  features: [
    {
      number: '01',
      title: 'White-First Design System',
      description: 'Harmonious palette combining #FFFFFF, #F7F8FA surfaces, #101828 typography, and disciplined #315EFA accents.',
      tag: 'DESIGN SYSTEM',
    },
    {
      number: '02',
      title: 'Fluid Typography Scale',
      description: 'Mathematical clamp-based typography powered by Geist Variable font for zero-CLS text rendering on any screen.',
      tag: 'TYPOGRAPHY',
    },
    {
      number: '03',
      title: 'Sub-Second Dynamic Routing',
      description: 'Vite-powered chunk splitting with React 18 Suspense ensures initial loads transfer under 150KB of code.',
      tag: 'PERFORMANCE',
    },
    {
      number: '04',
      title: 'Verified 8-Member Team Showcase',
      description: 'Authentic portraits of all company founders, advisors, and engineers with verified roles and professional disciplines.',
      tag: 'CREDIBILITY',
    },
    {
      number: '05',
      title: 'Full Architectural Detail Pages',
      description: 'Dedicated 12-section case study frameworks for each project in the AERVENLabs ecosystem.',
      tag: 'TRANSPARENCY',
    },
    {
      number: '06',
      title: 'Guaranteed Direct Contact Dispatch',
      description: 'Functional form with instant validation, copy-to-clipboard fallbacks, and mail client integration.',
      tag: 'COMMUNICATION',
    },
  ],
  architecture: {
    headline: 'Modern single-page application delivered at the edge.',
    description: 'Designed as a lightweight, SEO-optimized React 18 application deployed on Vercel\'s global edge network.',
    layers: [
      {
        name: 'UI & INTERACTION CORE',
        role: 'Component Presentation & Interaction',
        technologies: ['React 18', 'TypeScript', 'Tailwind CSS', 'Motion', 'GSAP'],
        details: 'Custom atomic components, accessible Radix-inspired primitives, and hardware-accelerated transforms.',
      },
      {
        name: 'BUILD & OPTIMIZATION LAYER',
        role: 'Static Bundle Bundling & Code Splitting',
        technologies: ['Vite 5', 'PostCSS', 'Autoprefixer', 'Geist Variable'],
        details: 'Self-hosted variable typography, tree-shaken Lucide icons, and modern ES2022 module output.',
      },
      {
        name: 'EDGE DISTRIBUTION & SECURITY',
        role: 'Global CDN & Domain Infrastructure',
        technologies: ['Vercel Edge Network', 'Cloudflare DNS', 'Strict CSP'],
        details: 'Sub-second TTFB worldwide, automatic TLS 1.3 certificates, and continuous deployment from version-controlled git.',
      },
    ],
  },
  techStack: [
    {
      category: 'Frontend & Build System',
      technologies: [
        { name: 'React 18', detail: 'Component Hierarchy' },
        { name: 'TypeScript', detail: 'Strict Type-Safety' },
        { name: 'Vite 5', detail: 'Sub-second HMR & Production Bundling' },
        { name: 'Tailwind CSS', detail: 'Centralized Design Tokens' },
      ],
    },
    {
      category: 'Motion & Infrastructure',
      technologies: [
        { name: 'Motion', detail: 'Declarative Animation Primitives' },
        { name: 'GSAP 3', detail: 'ScrollTrigger Depth & Parallax' },
        { name: 'Vercel', detail: 'Edge Hosting & Automated Deployments' },
        { name: 'Cloudflare', detail: 'Edge Security & DNS Resolution' },
      ],
    },
  ],
  metrics: [
    {
      value: '100 / 100',
      label: 'PERFORMANCE SCORE',
      sublabel: 'Optimized Core Web Vitals',
    },
    {
      value: '< 0.8 s',
      label: 'SPEED INDEX',
      sublabel: 'Near-instant page render',
    },
    {
      value: '2.0.0',
      label: 'PRODUCTION VERSION',
      sublabel: 'Complete brand transformation',
    },
    {
      value: '0 KB',
      label: 'TRACKER BLOAT',
      sublabel: '100% privacy-respecting',
    },
  ],
  evolution: [
    {
      phase: 'PHASE 01',
      title: 'FOUNDATION & MONOCHROME PROTOTYPE',
      description: 'Initial structural setup and technical testing of the single-page application and component primitives.',
    },
    {
      phase: 'PHASE 02',
      title: 'ARCHITECTURE & PORTFOLIO CURATION',
      description: 'Incorporating authentic project case studies, verified team records, and establishing single-source data architecture.',
    },
    {
      phase: 'PHASE 03',
      title: 'COMPLETE BRAND TRANSFORMATION (v2.0)',
      description: 'Full reimagination of AERVENLabs into a premium white-first digital identity, engineering-focused editorial layouts, and expanded multi-page ecosystem.',
    },
    {
      phase: 'PHASE 04',
      title: 'ECOSYSTEM EXPANSION',
      description: 'Continuous integration of new software initiatives, real-time platform telemetry, and digital product documentation.',
    },
  ],
  currentStatus: {
    stage: 'PRODUCTION FLAGSHIP DEPLOYED',
    timeline: 'Live 2026',
    readiness: '100% Production Ready',
    focus: 'Global reach & continuous deployment',
  },
  relatedProjects: [
    {
      title: 'Campus Connect',
      slug: 'campus-connect',
      category: 'Higher Education Operating System',
      description: 'Flagship multi-tenant educational platform uniting academic operations and digital credentials.',
    },
    {
      title: 'NagrikSetu',
      slug: 'nagriksetu',
      category: 'Civic Technology',
      description: 'Digital initiative connecting citizens with transparent public infrastructure.',
    },
    {
      title: 'RAILVERSE',
      slug: 'railverse',
      category: 'Transit Systems & Mobility',
      description: 'Real-time railway network simulation and commuter transit intelligence.',
    },
  ],
  cta: {
    eyebrow: 'DIGITAL CRAFTSMANSHIP',
    headline: 'WANT TO BUILD WITH US?',
    copy: 'Whether you are looking to build a high-impact digital platform, modernize institutional software, or collaborate on future technology, let\'s start a conversation.',
    buttonText: 'START A CONVERSATION',
    href: '/contact',
  },
};

/**
 * Projects data layer.
 * Contains all 4 authentic AERVENLabs projects:
 * 1. Campus Connect
 * 2. NagrikSetu
 * 3. RAILVERSE
 * 4. AERVENLabs Website
 */
export const projectsData: Project[] = [
  {
    id: 'campus-connect',
    slug: 'campus-connect',
    order: 1,
    archiveNumber: '01',
    archiveLabel: 'PROJECT 01 // FLAGSHIP PLATFORM',
    statusLabel: 'STATUS // PRODUCTION-READY',
    platformBadges: ['WEB // PWA', 'ANDROID // CAPACITOR', 'MULTI-TENANT // ENABLED'],
    systemCode: 'SYS_SPEC // ARCH_CC_01',
    title: 'Campus Connect',
    tagline: 'Your Entire College Life. One App.',
    category: 'Higher Education Enterprise Campus Operating System',
    discipline: 'CAMPUS OPERATING SYSTEM',
    platforms: ['Web / PWA', 'Android / Capacitor', 'iOS (PWA)'],
    description:
      'A unified collegiate operating system connecting academic operations, dynamic QR attendance, digital identity credentials, and student engagement into one institutional platform.',
    capabilities: [
      'Academic Operations',
      'Dynamic QR Attendance',
      'Digital Student Identity',
      'Verified Public Credentials',
      'Student Engagement & Streaks',
      'Institutional Multi-Tenancy',
    ],
    features: [
      'Dynamic QR Attendance',
      'Smart Digital Identity',
      'Academic Operations & Results',
      'Public Credential Verification',
      'Engagement Ledger & Streaks',
      'Institutional Multi-Tenancy',
    ],
    technologies: [
      'React 18',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Supabase',
      'PostgreSQL 15+',
      'Deno Edge Functions',
      'Capacitor',
      'Vercel',
    ],
    status: 'production-ready',
    featured: true,
    accentColor: '#315EFA',
    links: {
      demo: 'https://campusconnect.indevs.in',
      caseStudy: '/projects/campus-connect',
    },
    caseStudy: campusConnectCaseStudy,
  },
  {
    id: 'nagriksetu',
    slug: 'nagriksetu',
    order: 2,
    archiveNumber: '02',
    archiveLabel: 'PROJECT 02 // CIVIC INITIATIVE',
    statusLabel: 'STATUS // ACTIVE DEVELOPMENT',
    platformBadges: ['WEB // PWA', 'LOW-BANDWIDTH // OPTIMIZED', 'MULTILINGUAL // READY'],
    systemCode: 'SYS_SPEC // CIVIC_NS_02',
    title: 'NagrikSetu',
    tagline: 'Connecting Citizens with Transparent Public Infrastructure.',
    category: 'Civic Technology & Public Service Digital Initiative',
    discipline: 'CIVIC DIGITAL INFRASTRUCTURE',
    platforms: ['Web / PWA', 'Mobile-First Web'],
    description:
      'A digital initiative focused on citizen-oriented connectivity, accessible municipal notices, step-by-step service navigation, and direct grievance status tracking.',
    capabilities: [
      'Civic Notices Feed',
      'Service Navigation Guide',
      'Zero-Login Status Tracking',
      'Multilingual Access',
      'Offline-First Helplines',
      'Ward-Level Bulletins',
    ],
    features: [
      'Verified Civic Notice Feed',
      'Service Procedure Navigator',
      'Zero-Login Reference Tracker',
      'Offline Emergency Directory',
      'Indic Language Support',
      'Ward-Level Community Alerts',
    ],
    technologies: [
      'React 18',
      'TypeScript',
      'Tailwind CSS',
      'PostgreSQL',
      'Supabase',
      'Deno Edge Functions',
      'PWA',
      'Vercel',
    ],
    status: 'in-development',
    featured: true,
    accentColor: '#0D9488',
    links: {
      caseStudy: '/projects/nagriksetu',
    },
    caseStudy: nagrikSetuCaseStudy,
  },
  {
    id: 'railverse',
    slug: 'railverse',
    order: 3,
    archiveNumber: '03',
    archiveLabel: 'PROJECT 03 // TRANSIT RESEARCH',
    statusLabel: 'STATUS // RESEARCH & PROTOTYPE',
    platformBadges: ['SIMULATION // ENGINE', 'REAL-TIME // WEBSOCKET', 'TRANSIT // DATA'],
    systemCode: 'SYS_SPEC // MOB_RV_03',
    title: 'RAILVERSE',
    tagline: 'Transit Intelligence. Real-Time Railway Simulation.',
    category: 'Transit Systems & Real-Time Mobility Technology',
    discipline: 'TRANSIT & MOBILITY SYSTEMS',
    platforms: ['Web / PWA', 'Interactive Canvas'],
    description:
      'A technology project within the AERVENLabs ecosystem focused on dynamic railway modeling, high-density commuter flow simulation, and real-time station telemetry.',
    capabilities: [
      'Rail Junction Simulation',
      'Real-Time Platform Feeds',
      'Commuter Density Modeling',
      'Disruption Route Advisory',
      'Multi-Modal Transfers',
      'Low-Latency WebSockets',
    ],
    features: [
      'Dynamic Junction Simulation Canvas',
      'Sub-Second Platform Telemetry',
      'Congestion & Flow Prediction',
      'Disruption Reroute Suggestions',
      'Multi-Modal Interchange Matrix',
      'Low-Data Commuter Feed',
    ],
    technologies: [
      'React 18',
      'TypeScript',
      'HTML5 Canvas',
      'Tailwind CSS',
      'PostgreSQL',
      'Supabase Realtime',
      'Python',
      'Vercel',
    ],
    status: 'in-development',
    featured: true,
    accentColor: '#7657E8',
    links: {
      caseStudy: '/projects/railverse',
    },
    caseStudy: railverseCaseStudy,
  },
  {
    id: 'aervenlabs-website',
    slug: 'aervenlabs-website',
    order: 4,
    archiveNumber: '04',
    archiveLabel: 'PROJECT 04 // DIGITAL FLAGSHIP',
    statusLabel: 'STATUS // PRODUCTION-READY',
    platformBadges: ['WHITE-FIRST // SYSTEM', 'PERFORMANCE // 100/100', 'RESPONSIVE // FLUID'],
    systemCode: 'SYS_SPEC // ARCH_AL_04',
    title: 'AERVENLabs Platform',
    tagline: "Engineering Ideas. Building What's Next.",
    category: 'Company Digital Platform & Engineering Showcase',
    discipline: 'DIGITAL BRAND & PLATFORM',
    platforms: ['Responsive Web', 'PWA / Edge Delivered'],
    description:
      'The company’s official digital platform, engineered as a high-performance, white-first digital showcase establishing our brand identity, engineering capabilities, and portfolio.',
    capabilities: [
      'White-First Design System',
      'Fluid Typography Architecture',
      'Sub-Second Route Splitting',
      'Verified Team & Partner Ledger',
      'Full Architectural Detail Pages',
      'Guaranteed Direct Mail Dispatch',
    ],
    features: [
      'White-First Design System',
      'Fluid Typography Scale',
      'Sub-Second Dynamic Routing',
      'Verified 8-Member Team Showcase',
      'Full Architectural Detail Pages',
      'Direct Contact Form Verification',
    ],
    technologies: [
      'React 18',
      'TypeScript',
      'Vite 5',
      'Tailwind CSS',
      'Motion',
      'GSAP 3',
      'Vercel Edge',
      'Cloudflare',
    ],
    status: 'production-ready',
    featured: true,
    accentColor: '#101828',
    links: {
      demo: 'https://aervenlabs.net',
      caseStudy: '/projects/aervenlabs-website',
    },
    caseStudy: aervenlabsWebsiteCaseStudy,
  },
];
