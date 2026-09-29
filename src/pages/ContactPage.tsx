import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Mail,
  Copy,
  Check,
  AlertCircle,
  ArrowUpRight,
  Send,
  Linkedin,
  Github,
  Instagram,
  Youtube,
  ShieldCheck,
} from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { routeSEOConfig } from '../data/seo';
import { generateBreadcrumbSchema } from '../lib/seo';
import { siteConfig } from '../config/site';

export const ContactPage: React.FC = () => {
  useSEO(
    routeSEOConfig.contact,
    routeSEOConfig.contact?.breadcrumbs
      ? generateBreadcrumbSchema(routeSEOConfig.contact.breadcrumbs)
      : undefined
  );

  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current);
      }
    };
  }, []);

  const handleCopyEmail = async () => {
    if (copyTimeoutRef.current) {
      clearTimeout(copyTimeoutRef.current);
    }

    let success = false;

    // 1. Modern Async Clipboard API
    if (typeof window !== 'undefined' && navigator?.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(siteConfig.email);
        success = true;
      } catch {
        success = false;
      }
    }

    // 2. Fallback to execCommand if clipboard API was rejected or unavailable
    if (!success && typeof document !== 'undefined') {
      try {
        const textArea = document.createElement('textarea');
        textArea.value = siteConfig.email;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        textArea.setAttribute('readonly', '');
        document.body.appendChild(textArea);
        textArea.select();
        success = document.execCommand('copy');
        document.body.removeChild(textArea);
      } catch {
        success = false;
      }
    }

    if (success) {
      setCopyFailed(false);
      setCopied(true);
      copyTimeoutRef.current = setTimeout(() => {
        setCopied(false);
      }, 2000);
    } else {
      // NEVER show successful copied state when write fails
      setCopied(false);
      setCopyFailed(true);
      copyTimeoutRef.current = setTimeout(() => {
        setCopyFailed(false);
      }, 3000);

      // Offer accessible fallback prompt for manual copy
      if (typeof window !== 'undefined') {
        window.prompt('Copy email address:', siteConfig.email);
      }
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto fallback to guarantee 100% reliable direct dispatch
    const subject = encodeURIComponent(
      `Inquiry: ${formData.organization ? `${formData.organization} — ` : ''}${formData.name}`
    );
    const body = encodeURIComponent(
      `From: ${formData.name} (${formData.email})\nOrganization: ${formData.organization || 'Not specified'}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
        delayChildren: prefersReducedMotion ? 0 : 0.04,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: prefersReducedMotion ? 1 : 0,
      y: prefersReducedMotion ? 0 : 16,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <div
      data-testid="route-contact"
      className="min-h-screen bg-black text-foreground selection:bg-white selection:text-black overflow-x-hidden"
    >
      {/* Background Architectural Grid Lines */}
      <div
        className="pointer-events-none absolute inset-0 select-none opacity-25"
        aria-hidden="true"
      >
        <div className="container-architectural h-full w-full">
          <div className="h-full w-full border-x border-white/[0.04]">
            <div className="grid h-full grid-cols-1 md:grid-cols-6 lg:grid-cols-12 divide-x divide-white/[0.03]">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="h-full" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container-architectural relative z-10 py-16 sm:py-24 lg:py-32 space-y-16 sm:space-y-24 lg:space-y-32">
        {/* Dedicated Page Header */}
        <motion.header
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 border-b border-border-subtle pb-12 sm:pb-16"
        >
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <Link to="/" className="hover:text-white transition-colors duration-200">
              HOME
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-white" aria-current="page">
              CONTACT
            </span>
          </nav>

          <div className="grid-architectural items-start gap-8">
            {/* Left Column: Eyebrow & Status */}
            <div className="lg:col-span-4 space-y-3">
              <div className="inline-flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
                <span className="text-eyebrow text-neutral-400">
                  AERVENLABS // COMMUNICATIONS
                </span>
              </div>
              <p className="text-tech-label text-neutral-500 font-mono tracking-widest">
                PROTOCOL // DIRECT DISPATCH
              </p>
            </div>

            {/* Right Column: Monumental Headline & Narrative */}
            <div className="lg:col-span-8 space-y-6">
              <h1 className="text-heading-1 sm:text-display-sm lg:text-display font-semibold tracking-tight text-white uppercase leading-[0.95] select-none">
                Start a conversation.
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-secondary-text leading-relaxed max-w-3xl font-sans">
                Meaningful systems start with intentional conversations. Tell us what you are imagining — whether it is an institutional campus operating platform, software architecture consultation, or technological collaboration.
              </p>
            </div>
          </div>
        </motion.header>

        {/* 12-Column Contact Console Layout */}
        <div className="grid-architectural items-start gap-12 lg:gap-16">
          {/* Left Column (Cols 1-5): Direct Channels & Verification */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Direct Email Terminal Card */}
            <div className="surface-level-1 p-6 sm:p-8 rounded-[2px] border border-border-subtle space-y-6">
              <div className="flex items-center justify-between border-b border-border-subtle pb-3">
                <span className="font-mono text-xs font-semibold text-white tracking-wider uppercase">
                  PRIMARY DISPATCH CHANNEL
                </span>
                <span className="text-[10px] font-mono text-neutral-500">
                  STATUS // OPEN
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-tech-label text-neutral-500 font-mono tracking-widest block">
                  OFFICIAL INQUIRY INBOX
                </span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-lg sm:text-xl font-mono text-white hover:underline underline-offset-4 block break-all"
                  aria-label={`Send email to ${siteConfig.email}`}
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-surface-dark hover:bg-surface-elevated text-xs font-mono text-neutral-300 hover:text-white border border-border-subtle hover:border-white/30 rounded-[2px] transition-colors duration-200 min-h-[48px] outline-none focus-visible:ring-2 focus-visible:ring-white"
                  aria-label="Copy email address to clipboard"
                  aria-live="polite"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-white" aria-hidden="true" />
                      <span>COPIED TO CLIPBOARD</span>
                    </>
                  ) : copyFailed ? (
                    <>
                      <AlertCircle className="h-3.5 w-3.5 text-neutral-400" aria-hidden="true" />
                      <span>COPY FAILED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-neutral-400" aria-hidden="true" />
                      <span>COPY ADDRESS</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-black text-xs font-mono font-semibold rounded-[2px] hover:bg-neutral-200 transition-colors duration-200 min-h-[48px]"
                  aria-label="Open default mail client"
                >
                  <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>COMPOSE MAIL</span>
                </a>
              </div>

              <div className="pt-4 border-t border-border-subtle flex items-center justify-between text-[10px] font-mono text-neutral-500">
                <span>TIMEFRAME // 24-48 HOURS</span>
                <span>TIMEZONE // IST (UTC+05:30)</span>
              </div>
            </div>

            {/* Social & Ecosystem Channels */}
            <div className="surface-level-1 p-6 sm:p-8 rounded-[2px] border border-border-subtle space-y-5">
              <span className="text-tech-label text-neutral-500 font-mono tracking-widest uppercase block">
                VERIFIED SOCIAL & REPOSITORY CHANNELS
              </span>

              <ul className="space-y-3" aria-label="Official channels">
                {siteConfig.links.linkedin && (
                  <li>
                    <a
                      href={siteConfig.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between py-2 text-sm text-neutral-400 hover:text-white transition-colors duration-200 group border-b border-white/[0.04]"
                      aria-label="AervenLabs on LinkedIn (opens in a new tab)"
                    >
                      <div className="flex items-center gap-3">
                        <Linkedin className="h-4 w-4 text-neutral-500 group-hover:text-white transition-colors duration-200" aria-hidden="true" />
                        <span className="font-mono text-xs">LinkedIn</span>
                      </div>
                      <ArrowUpRight className="h-3.5 w-3.5 text-neutral-600 group-hover:text-white transition-colors duration-200" aria-hidden="true" />
                    </a>
                  </li>
                )}

                {siteConfig.links.github && (
                  <li>
                    <a
                      href={siteConfig.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between py-2 text-sm text-neutral-400 hover:text-white transition-colors duration-200 group border-b border-white/[0.04]"
                      aria-label="AervenLabs on GitHub (opens in a new tab)"
                    >
                      <div className="flex items-center gap-3">
                        <Github className="h-4 w-4 text-neutral-500 group-hover:text-white transition-colors duration-200" aria-hidden="true" />
                        <span className="font-mono text-xs">GitHub</span>
                      </div>
                      <ArrowUpRight className="h-3.5 w-3.5 text-neutral-600 group-hover:text-white transition-colors duration-200" aria-hidden="true" />
                    </a>
                  </li>
                )}

                {siteConfig.links.instagram && (
                  <li>
                    <a
                      href={siteConfig.links.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between py-2 text-sm text-neutral-400 hover:text-white transition-colors duration-200 group border-b border-white/[0.04]"
                      aria-label="AervenLabs on Instagram (opens in a new tab)"
                    >
                      <div className="flex items-center gap-3">
                        <Instagram className="h-4 w-4 text-neutral-500 group-hover:text-white transition-colors duration-200" aria-hidden="true" />
                        <span className="font-mono text-xs">Instagram</span>
                      </div>
                      <ArrowUpRight className="h-3.5 w-3.5 text-neutral-600 group-hover:text-white transition-colors duration-200" aria-hidden="true" />
                    </a>
                  </li>
                )}

                {siteConfig.links.youtube && (
                  <li>
                    <a
                      href={siteConfig.links.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between py-2 text-sm text-neutral-400 hover:text-white transition-colors duration-200 group"
                      aria-label="AervenLabs on YouTube (opens in a new tab)"
                    >
                      <div className="flex items-center gap-3">
                        <Youtube className="h-4 w-4 text-neutral-500 group-hover:text-white transition-colors duration-200" aria-hidden="true" />
                        <span className="font-mono text-xs">YouTube</span>
                      </div>
                      <ArrowUpRight className="h-3.5 w-3.5 text-neutral-600 group-hover:text-white transition-colors duration-200" aria-hidden="true" />
                    </a>
                  </li>
                )}
              </ul>
            </div>

            {/* Legal Entity Identity Readout */}
            <div className="surface-level-1 p-6 rounded-[2px] border border-border-subtle space-y-2 text-xs font-mono text-neutral-400">
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest block">
                REGISTERED LEGAL ENTITY //
              </span>
              <p className="text-white font-semibold">{siteConfig.legalName}</p>
              <p className="text-neutral-500">Kalyan / Mumbai Metropolitan Region, India</p>
            </div>
          </motion.div>

          {/* Right Column (Cols 6-12): Structured Direct Message Terminal Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 surface-level-1 p-6 sm:p-10 lg:p-12 rounded-[2px] border border-border-subtle space-y-8"
          >
            <div className="space-y-2 border-b border-border-subtle pb-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-white tracking-wider uppercase">
                  DISPATCH INTERFACE // DIRECT INQUIRY
                </span>
                <span className="text-[10px] font-mono text-neutral-500">
                  SECURE FORM
                </span>
              </div>
              <p className="text-xs font-mono text-neutral-400">
                Direct inquiry pipeline routing to {siteConfig.email}.
              </p>
            </div>

            {formSubmitted ? (
              <div className="space-y-6 py-12 text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-white text-black mx-auto">
                  <Check className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-heading-2 font-semibold text-white">
                    Mail Client Dispatched
                  </h2>
                  <p className="text-sm text-neutral-400 max-w-md mx-auto font-sans">
                    Your inquiry has been compiled into an official message and opened in your mail composer. If your mail client did not open automatically, contact us directly at{' '}
                    <span className="text-white font-mono">{siteConfig.email}</span>.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs font-mono text-neutral-400 hover:text-white underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name Field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-name"
                      className="form-label-architectural"
                    >
                      FULL NAME *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Dr. Ramesh Kulkarni"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="form-control-architectural"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-email"
                      className="form-label-architectural"
                    >
                      EMAIL ADDRESS *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. rkulkarni@institution.edu"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="form-control-architectural"
                    />
                  </div>
                </div>

                {/* Organization Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="contact-org"
                    className="form-label-architectural"
                  >
                    ORGANIZATION / INSTITUTION
                  </label>
                  <input
                    id="contact-org"
                    type="text"
                    placeholder="e.g. B. K. Birla College / University Department"
                    value={formData.organization}
                    onChange={(e) =>
                      setFormData({ ...formData, organization: e.target.value })
                    }
                    className="form-control-architectural"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="contact-message"
                    className="form-label-architectural"
                  >
                    MESSAGE / INQUIRY SCOPE *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="Describe your project, deployment timeline, operational challenges, or collaboration proposal..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="form-control-architectural resize-y"
                  />
                </div>

                {/* Privacy & Anti-Spam Notice */}
                <div className="flex items-start gap-2.5 text-xs text-neutral-500 font-mono">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-neutral-400 mt-0.5" aria-hidden="true" />
                  <span>
                    Your inquiry details are treated with confidentiality. AervenLabs never sells or distributes contact records.
                  </span>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-mono text-xs font-semibold tracking-wider uppercase rounded-[2px] hover:bg-neutral-200 transition-colors duration-200 min-h-[48px]"
                  aria-label="Send inquiry to AervenLabs"
                >
                  <span>TRANSMIT INQUIRY</span>
                  <Send className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
