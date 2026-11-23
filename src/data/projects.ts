import { Project, CampusConnectCaseStudy } from '../types';

/**
 * Projects Archive Configuration
 * Exclusively focused on Campus Connect as the sole official project.
 */
export const projectsArchiveConfig = {
  sectionId: 'projects-archive',
  eyebrow: '01 / FLAGSHIP INITIATIVE',
  headline: 'CAMPUS CONNECT.',
  description:
    'A unified collegiate operating system connecting academic operations, dynamic QR attendance, verified digital credentials, campus events, and student engagement into one institutional platform.',
  meta: {
    projectsCount: 'FLAGSHIP INITIATIVE // 01',
    activeSystems: 'ACTIVE SYSTEM // 01',
    archiveStatus: 'ARCHIVE STATUS // PRODUCTION-READY',
    system: 'SYSTEM // HIGHER EDUCATION CAMPUS OS',
  },
  technicalReadout: {
    label: 'FLAGSHIP PLATFORM',
    items: ['CAMPUS CONNECT // ENTERPRISE CAMPUS OS'],
  },
  editorialBlocks: {
    problem: {
      label: 'THE CHALLENGE',
      title: 'Institutional Operational Friction',
      description:
        'Disconnected administrative procedures, manual paper attendance registers, lost records, and fragmented notice channels create daily friction across higher education campuses.',
    },
    system: {
      label: 'THE PLATFORM',
      title: 'Integrated Campus Operating System',
      description:
        'Campus Connect unifies attendance, digital student identity, timetables, coursework, examinations, event notifications, and public document authentication into one isolated multi-tenant architecture.',
    },
    evolution: {
      label: 'THE JOURNEY',
      title: 'From Classroom Prototype to Enterprise OS',
      description:
        'Conceived and validated within active collegiate workflows, evolving from a fast attendance scanner into an enterprise-scale multi-tenant operating system.',
    },
  },
  footerSection: {
    label: 'PORTFOLIO // CURRENT STATE',
    headline: 'ONE SYSTEM. BUILT WITH INTENT.',
    description:
      'AERVENLabs focuses engineering resources on deep, resilient, production-grade systems. Campus Connect represents our benchmark in higher education software infrastructure.',
    ctaText: 'EXPLORE OUR VISION',
    ctaHref: '/vision',
  },
};

/**
 * Authoritative Campus Connect Flagship Case Study Data.
 * Fully verified repository metrics, real architecture, and operational capabilities.
 */
export const campusConnectCaseStudy: CampusConnectCaseStudy = {
  id: 'campus-connect',
  slug: 'campus-connect',
  title: 'Campus Connect',
  primaryTagline: 'Your Entire College Life. One App.',
  secondaryPositioning: 'Campus Operating System',
  category: 'Higher Education Enterprise Campus Operating System',
  shortPositioning:
    'A unified collegiate operating system connecting academic operations, student engagement, campus communication, event information, institutional administration, and verified digital credentials.',
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
      title: 'Information fragmentation & missed events',
      description:
        'Physical bulletin boards and informal channels cause critical academic deadlines, collegiate events, seminars, and official notices to be easily missed.',
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
        'Physical academic documents, certificates, and ID cards cannot be authenticated instantly and reliably by external verifiers, employers, or universities.',
    },
  ],
  solutionOverview:
    'Campus Connect unifies student engagement, academic operations, campus communication, event broadcasting, institutional administration, and public credential verification into a single multi-tenant institutional operating system.',
  personas: [
    {
      role: 'STUDENT',
      title: 'Student Experience',
      description: 'A unified daily interface for academic life, digital identity, event calendars, and collegiate progression.',
      capabilities: [
        'Dynamic QR & OTP Attendance Logging',
        'Real-Time Academic Timetable Matrix',
        'Smart Digital Student ID with Optical Security Token',
        'Campus Event Announcements & Registration',
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
        'Departmental Notice & Event Distribution',
      ],
    },
    {
      role: 'INSTITUTIONAL ADMIN',
      title: 'Administrative Control Center',
      description: 'Enterprise governance, class scheduling, event broadcasting, compliance records, and operations.',
      capabilities: [
        'Comprehensive Student & Faculty Directories',
        'Department, Programme & Class Architecture',
        'Master Timetable Matrix Scheduling',
        'Campus Events, Seminars & Notice Publishing',
        'Monthly Statutory Attendance Registers',
        'Academic Cohort Batch Promotions',
        'Document Management & Certificate Issuance',
        'Targeted Web Push Notifications & Announcements',
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
      name: 'Dynamic Attendance Engine',
      tagline: 'Timing-Safe Session Logging',
      description:
        'Dynamic 10-minute rotating QR codes with 6-digit OTP fallback. Features live real-time faculty attendance roster synchronization and automated monthly statutory attendance register compilation.',
      capabilities: [
        'Dynamic 10-Minute QR Rotation',
        '6-Digit OTP Fallback for Offline Scenarios',
        'Live Real-Time Lecture Attendance Roster',
        'Automated Monthly Statutory Registers',
        'Granular Manual Overrides with Full Audit Log',
      ],
    },
    {
      id: 'identity',
      number: '02',
      name: 'Digital Student Identity',
      tagline: 'Verified Credential Engine',
      description:
        'High-fidelity digital student identity replacing physical cards. Features client-rendered optical security hologram and dynamic verification QR token with Google Drive API storage.',
      capabilities: [
        'Smart Digital Student ID with Dynamic QR',
        'Client-Side Optical Security Hologram',
        'Academic Programme, Cohort & Roll Number',
        'Tenant-Scoped Secure Photo Storage (Drive API)',
        'Emergency Contact & Blood Group Telemetry',
      ],
    },
    {
      id: 'academics',
      number: '03',
      name: 'Academic Operations',
      tagline: 'Curriculum & Evaluation Engine',
      description:
        'End-to-end academic lifecycle engine managing daily course timetables, digital coursework submissions, internal exams, and automated SGPA/CGPA compilation across cohorts.',
      capabilities: [
        'Interactive Timetable Matrix & Faculty Mapping',
        'Coursework Publishing & Digital Submissions',
        'Internal & Semester Examination Marks',
        'Automated SGPA & Cumulative CGPA Engine',
        'Batch Cohort Promotion Transaction Engine',
      ],
    },
    {
      id: 'credentials',
      number: '04',
      name: 'Public Credential Verification',
      tagline: 'Zero-Auth Trust Protocol',
      description:
        'Public document validation portal enabling employers and background verifiers to authenticate certificates and records at /verify/:reference with zero login requirements.',
      capabilities: [
        'Zero-Login Public Verification Route (/verify/:ref)',
        'Unique Cryptographic Credential References',
        'Tamper-Evident Authenticity Confirmation',
        'Complete Prevention of Student PII Exposure',
        'Scannable QR Codes Embedded into Certificates',
      ],
    },
    {
      id: 'engagement',
      number: '05',
      name: 'Student Engagement & Streaks',
      tagline: 'Incentive & Motivation Layer',
      description:
        'Audited ledger converting campus participation into verified progression. Features daily check-in streaks with anti-cheat protection, tiered reward badges, and leaderboards.',
      capabilities: [
        'Audited Points Ledger & Activity Logging',
        'Dynamic Class & Institutional Leaderboards',
        'Daily Attendance Streaks & Streak Protection',
        'Tiered Ranks (Bronze, Silver, Gold, Elite)',
        'Core Member Distinction for Top Contributors',
      ],
    },
    {
      id: 'communication',
      number: '06',
      name: 'Communication & Campus Events',
      tagline: 'Enterprise Notification Pipeline',
      description:
        'Multi-channel broadcast architecture combining an in-app notification center with device-level Web Push notifications using VAPID ES256 encryption standards, plus campus event calendars.',
      capabilities: [
        'In-App Notification Center with Read/Unread States',
        'Device-Level Web Push (VAPID ES256 Standards)',
        'Targeted Audience Scoping (Dept/Programme/Role)',
        'Administrative Priority Broadcast Announcements',
        'Campus Events, Seminars & Workshops Directory',
      ],
    },
    {
      id: 'operations',
      number: '07',
      name: 'Institutional Administration',
      tagline: 'Multi-Tenant Governance',
      description:
        'Enterprise administration managing departmental structures, faculty permissions, academic batch rollovers, compliance reports, and integrated support ticketing.',
      capabilities: [
        'True Multi-Tenant Isolation by college_id',
        'Department, Programme & Division Hierarchy',
        'Faculty Role-Based Access Control (RBAC)',
        'Statutory Attendance & Compliance Registers',
        'Integrated Multi-Tier Student Support Ticketing',
      ],
    },
  ],
  experienceFlow: [
    {
      step: '01',
      label: 'SESSION LAUNCH',
      description: 'Faculty initiates lecture session; dynamic 10-minute rotating cryptographic QR token is generated.',
    },
    {
      step: '02',
      label: 'INSTANT SCAN',
      description: 'Student scans QR or enters single-use OTP fallback from their mobile PWA.',
    },
    {
      step: '03',
      label: 'EDGE VALIDATION',
      description: 'Deno Edge Function performs timing-safe token verification against PostgreSQL Row-Level Security rules.',
    },
    {
      step: '04',
      label: 'REAL-TIME SYNC',
      description: 'Attendance instantly registers on faculty dashboard; daily streaks and engagement points update.',
    },
  ],
  architecture: {
    headline: 'Multi-Tenant Relational Isolation with Serverless Edge Execution',
    description:
      'Campus Connect is architected around PostgreSQL Row-Level Security, ensuring that every institutional tenant (college_id) is mathematically isolated from others while sharing a resilient, high-availability cloud infrastructure.',
    layers: [
      {
        name: 'Client Presentation Tier',
        role: 'Responsive Web Application & Native Android Bridge',
        technologies: ['React 18', 'TypeScript', 'Tailwind CSS', 'Capacitor', 'Workbox PWA'],
        details: 'Sub-second initial hydration, offline asset caching, and native hardware API bridging for camera and push.',
      },
      {
        name: 'Edge Execution Tier',
        role: 'Serverless Edge Compute & Verification Handlers',
        technologies: ['Deno', 'Supabase Edge Functions', 'VAPID Web Push', 'Google Drive API'],
        details: '25 stateless edge functions handling timing-safe QR comparisons, encrypted push broadcasts, and secure document storage.',
      },
      {
        name: 'Data Isolation Tier',
        role: 'Relational Database with Database-Level Multi-Tenancy',
        technologies: ['PostgreSQL 15+', 'Supabase Database', 'Row-Level Security (RLS)', 'PL/pgSQL Triggers'],
        details: '62 relational tables partitioned strictly by college_id tenant scoping with automated statutory rollups.',
      },
      {
        name: 'Global Edge Network Tier',
        role: 'DDoS Mitigation, DNS & Global Distribution',
        technologies: ['Cloudflare', 'Vercel Edge Network', 'TLS 1.3 Handshake'],
        details: 'Strict HTTPS, automated edge caching, and immutable production deployments.',
      },
    ],
  },
  techStack: [
    {
      category: 'Frontend & Client',
      technologies: [
        { name: 'React', version: '18.3.1', detail: 'Component architecture with strict state modeling' },
        { name: 'TypeScript', version: '5.7+', detail: 'End-to-end type safety and contract enforcement' },
        { name: 'Tailwind CSS', version: '3.4', detail: 'Utility-first architectural design system' },
        { name: 'Capacitor', version: 'Target SDK 36', detail: 'Native Android bridge & APK distribution' },
      ],
    },
    {
      category: 'Backend & Edge Runtime',
      technologies: [
        { name: 'Deno', version: 'Edge Runtime', detail: 'Serverless low-latency TypeScript execution' },
        { name: 'Supabase Functions', version: '25 Endpoints', detail: 'Cryptographic attendance & notification routing' },
        { name: 'VAPID Push', version: 'ES256', detail: 'Device-level encrypted Web Push standard' },
      ],
    },
    {
      category: 'Database & Security',
      technologies: [
        { name: 'PostgreSQL', version: '15+', detail: '62 relational tables with mathematical RLS' },
        { name: 'Row-Level Security', version: 'Zero-Leak', detail: 'Strict college_id tenant policy enforcement' },
        { name: 'PL/pgSQL Triggers', version: 'Internal', detail: 'Statutory registers & engagement rollups' },
      ],
    },
    {
      category: 'Infrastructure & Delivery',
      technologies: [
        { name: 'Vercel', version: 'Edge Network', detail: 'Sub-second asset distribution & CI/CD' },
        { name: 'Cloudflare', version: 'Anycast DNS', detail: 'Edge security, TLS 1.3, DDoS mitigation' },
        { name: 'Google Drive API', version: 'v3', detail: 'Tenant-scoped secure photo storage' },
      ],
    },
  ],
  securityAndMultiTenancy: {
    headline: 'Mathematical Data Segregation at Database Core',
    description:
      'Multi-tenancy is not handled in application code where bugs can leak data. It is enforced in PostgreSQL engine kernel using Row-Level Security policies.',
    points: [
      {
        title: 'Tenant-Scoped Queries',
        description: 'Every table containing collegiate records carries college_id, enforced by database RLS rules on every SELECT, INSERT, UPDATE, and DELETE.',
      },
      {
        title: 'Timing-Safe Tokens',
        description: 'Attendance QR codes rotate every 10 minutes and are verified using timing-safe cryptographic comparisons to thwart replay and proxy attacks.',
      },
      {
        title: 'Zero-Auth Public Isolation',
        description: 'Public credential verification endpoints (/verify/:reference) expose only verified certificate validity metadata with zero student PII leakage.',
      },
      {
        title: 'End-to-End Encryption',
        description: 'Enforced TLS 1.3 in transit and AES-256 at rest across all database volumes and asset repositories.',
      },
    ],
  },
  metrics: [
    {
      value: '62',
      label: 'RELATIONAL TABLES',
      sublabel: 'Strictly partitioned with PostgreSQL RLS',
    },
    {
      value: '25',
      label: 'DENO EDGE FUNCTIONS',
      sublabel: 'Stateless low-latency serverless compute',
    },
    {
      value: '309',
      label: 'TEST SUITES',
      sublabel: 'Unit, integration & security test coverage',
    },
    {
      value: '100%',
      label: 'TENANT ISOLATION',
      sublabel: 'Zero data leakage across institutions',
    },
    {
      value: '< 500ms',
      label: 'ATTENDANCE SCAN',
      sublabel: 'Sub-second scan-to-record latency',
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
      title: 'LECTURE ATTENDANCE SCANNER',
      description:
        'Conceived and engineered as a targeted solution to eliminate paper registers and proxy attendance during collegiate lectures.',
    },
    {
      phase: 'PHASE 02',
      title: 'ACADEMIC & IDENTITY PLATFORM',
      description:
        'Expanded to manage academic timetables, course assignment distributions, internal examination evaluations, campus events, and smart student digital IDs.',
    },
    {
      phase: 'PHASE 03',
      title: 'MULTI-TENANT ARCHITECTURAL UPGRADE',
      description:
        'Architectural overhaul introducing PostgreSQL Row-Level Security and college_id tenant scoping to power multiple institutions simultaneously.',
    },
    {
      phase: 'PHASE 04',
      title: 'ENTERPRISE CAMPUS OPERATING SYSTEM',
      description:
        'The modern production ecosystem uniting academic operations, zero-auth public credentials, engagement gamification, E-Cell venture operations, and institutional governance.',
    },
  ],
  cta: {
    eyebrow: 'FLAGSHIP PLATFORM INQUIRY',
    headline: 'READY TO MODERNIZE YOUR CAMPUS INFRASTRUCTURE?',
    copy: 'Campus Connect is designed as turnkey infrastructure for institutions that want their academic, administrative, and student experiences to operate as one unified, resilient system.',
    buttonText: 'START A CONVERSATION',
    href: '/contact',
  },
};

/**
 * Projects data layer.
 * STRICT REQUIREMENT: Campus Connect is the ONLY project displayed anywhere on the website.
 */
export const projectsData: Project[] = [
  {
    id: 'campus-connect',
    slug: 'campus-connect',
    order: 1,
    archiveNumber: '01',
    archiveLabel: 'FLAGSHIP PRODUCT // CAMPUS OS',
    statusLabel: 'STATUS // PRODUCTION-READY',
    platformBadges: ['WEB // PWA', 'ANDROID // CAPACITOR', 'MULTI-TENANT // ENABLED'],
    systemCode: 'SYS_SPEC // ARCH_CC_01',
    title: 'Campus Connect',
    tagline: 'Your Entire College Life. One App.',
    category: 'Higher Education Enterprise Campus Operating System',
    discipline: 'CAMPUS OPERATING SYSTEM',
    platforms: ['Web / PWA', 'Android / Capacitor', 'iOS (PWA)'],
    description:
      'A unified collegiate operating system connecting academic operations, dynamic QR attendance, digital identity credentials, campus events, and student engagement into one institutional platform.',
    capabilities: [
      'Academic Operations',
      'Dynamic QR Attendance',
      'Digital Student Identity',
      'Campus Events & Notices',
      'Verified Public Credentials',
      'Student Engagement & Streaks',
      'Institutional Multi-Tenancy',
    ],
    features: [
      'Dynamic QR Attendance',
      'Smart Digital Identity',
      'Academic Operations & Results',
      'Campus Events & Announcements',
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
      live: 'https://campusconnect.indevs.in',
      caseStudy: '/projects/campus-connect',
    },
    caseStudy: campusConnectCaseStudy,
  },
];
