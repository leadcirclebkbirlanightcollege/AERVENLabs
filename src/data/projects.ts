import { CampusConnectCaseStudy, Project } from '../types';

export interface ProjectsSectionConfig {
  sectionId: string;
  eyebrow: string;
  headline: string;
  description: string;
  metaLabel: string;
}

/**
 * Editorial configuration for Homepage Section 04 — Projects.
 * Sequential identifier 04 / PROJECTS following 03 / WHAT WE BUILD.
 */
export const projectsSectionConfig: ProjectsSectionConfig = {
  sectionId: '04',
  eyebrow: '04 / PROJECTS',
  headline: 'Products are where ideas become tangible.',
  description:
    'We build and deploy software systems designed to solve fundamental operational problems. Campus Connect represents our flagship platform initiative, uniting academic operations, student engagement, and institutional administration into a single connected ecosystem.',
  metaLabel: 'FLAGSHIP // CAMPUS OPERATING SYSTEM',
};

/**
 * Authoritative Campus Connect Flagship Case Study Data.
 * Grounded strictly in verified Campus Connect Project Intelligence Documentation.
 * No speculative features, no fake downloads, no navigation/map claims.
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
        'Attendance, timetables, marks, syllabus distribution, notices, and campus activities can exist across disconnected systems, creating friction for both students and faculty.',
    },
    {
      number: '02',
      title: 'Attendance administration overhead',
      description:
        'Paper-based attendance creates massive administrative overhead and can introduce proxy attendance, lost registers, and delayed end-of-semester compilation.',
    },
    {
      number: '03',
      title: 'Information fragmentation',
      description:
        'Physical notices and informal communication channels make critical academic deadlines, notices, and official announcements difficult to consistently discover.',
    },
    {
      number: '04',
      title: 'Limited engagement infrastructure',
      description:
        'Student participation in workshops, competitions, and extracurricular initiatives often lacks a unified digital incentive layer or verified recognition.',
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
        'Physical academic documents, certificates, and ID cards can be difficult for employers, institutions, and verifiers to authenticate instantly and reliably.',
    },
  ],
  solutionOverview:
    'Campus Connect brings student engagement, academic operations, faculty workflows, institutional administration, and public credential verification into a unified multi-tenant platform designed to operate as a single institutional nervous system.',
  personas: [
    {
      role: 'STUDENT',
      title: 'Student Experience',
      description: 'A unified daily interface for academic life, identity, and extracurricular progression.',
      capabilities: [
        'Dynamic QR & OTP Attendance Logging',
        'Real-Time Academic Timetable Matrix',
        'Smart Digital Student ID with Security Token',
        'Course Assignment Tracking & Submissions',
        'Examination Marks, SGPA & CGPA Records',
        'Engagement Points Ledger & Streak Counter',
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
          'Single-page application delivering sub-second page transitions, responsive layout across all device viewports, offline asset caching via Service Workers, and native Android packaging with Capacitor (Target SDK 36).',
      },
      {
        name: 'EDGE COMPUTING & HOSTING',
        role: 'Global Edge Distribution & Serverless Logic',
        technologies: ['Vercel Edge Network', 'Deno Edge Functions'],
        details:
          'Static assets and SPA routing delivered globally via Vercel Edge. 25 specialized Deno Edge Functions handle privileged business operations, VAPID Web Push broadcasts, attendance token validation, and background statutory calculations.',
      },
      {
        name: 'DATA & REALTIME ENGINE',
        role: 'Relational Database with Row-Level Security',
        technologies: ['Supabase', 'PostgreSQL 15+', 'Supabase Realtime', 'Supabase Auth'],
        details:
          '62 relational tables isolated by college_id using PostgreSQL Row-Level Security (RLS). Realtime WebSocket channels broadcast live attendance and notifications. Cryptographic JWT authentication handles session security.',
      },
      {
        name: 'INTEGRATED ENTERPRISE SERVICES',
        role: 'Supporting Infrastructure & Third-Party APIs',
        technologies: ['Google Drive API', 'Web Push (VAPID ES256)', 'Zoho SMTP', 'ZXing Scanner'],
        details:
          'Document attachments and identity photographs stored securely via Google Drive API. Device-native alerts dispatched via Web Push protocol. Transactional notices routed through Zoho SMTP. High-speed QR scanning via ZXing.',
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
        { name: 'Framer Motion', detail: 'Restrained Micro-Animations' },
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
      note: 'Capacitor iOS dependency configured; platform accessed via optimized Safari PWA. (No native committed ios/ directory in repo).',
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
 * Projects data layer.
 * Contains only verified projects and authentic focus areas.
 * No speculative metrics, fake downloads, or unverified claims.
 */
export const projectsData: Project[] = [
  {
    id: 'campus-connect',
    slug: 'campus-connect',
    order: 1,
    title: 'Campus Connect',
    tagline: 'Your Entire College Life. One App.',
    category: 'Higher Education Enterprise Campus Operating System',
    discipline: 'CAMPUS OPERATING SYSTEM',
    platforms: ['Web / PWA', 'Android / Capacitor', 'iOS (PWA)'],
    description:
      'A unified collegiate operating system connecting academic operations, student engagement, institutional administration, and verified digital credentials in one platform.',
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
    links: {
      demo: 'https://campusconnect.indevs.in',
      caseStudy: '/projects/campus-connect',
    },
    caseStudy: campusConnectCaseStudy,
  },
];

