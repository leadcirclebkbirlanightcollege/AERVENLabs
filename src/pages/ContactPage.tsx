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

    if (typeof window !== 'undefined' && navigator?.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(siteConfig.email);
        success = true;
      } catch {
        success = false;
      }
    }

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
      setCopied(false);
      setCopyFailed(true);
      copyTimeoutRef.current = setTimeout(() => {
        setCopyFailed(false);
      }, 3000);

      if (typeof window !== 'undefined') {
        window.prompt('Copy email address:', siteConfig.email);
      }
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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

  return (
    <div
      data-testid="route-contact"
      className="min-h-screen bg-white text-[#101828] overflow-x-hidden"
    >
      <div className="container-architectural relative z-10 py-16 sm:py-24 lg:py-32 space-y-16 sm:space-y-24">
        {/* Dedicated Page Header */}
        <motion.header
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 border-b border-[#E6E9EF] pb-12 sm:pb-16"
        >
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#667085]">
            <Link to="/" className="hover:text-[#101828] transition-colors duration-200">
              HOME
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#101828] font-medium" aria-current="page">
              CONTACT
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Eyebrow & Status */}
            <div className="lg:col-span-4 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F1F3F6] border border-[#E6E9EF] rounded-full text-xs font-mono text-[#315EFA]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#315EFA]" aria-hidden="true" />
                <span>AERVENLABS // COMMUNICATIONS</span>
              </div>
              <p className="text-xs text-[#667085] font-mono tracking-widest uppercase">
                PROTOCOL // DIRECT DISPATCH
              </p>
            </div>

            {/* Right Column: Monumental Headline & Narrative */}
            <div className="lg:col-span-8 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#101828] leading-[1.08]">
                Start a conversation.
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-[#667085] leading-relaxed max-w-3xl font-sans">
                Meaningful systems start with intentional conversations. Tell us what you are imagining — whether it is an institutional campus operating platform, software architecture consultation, or technological collaboration.
              </p>
            </div>
          </div>
        </motion.header>

        {/* 12-Column Contact Console Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (Cols 1-5): Direct Channels & Verification */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Email Terminal Card */}
            <div className="editorial-card p-6 sm:p-8 rounded-[16px] space-y-6">
              <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-3 text-xs font-mono">
                <span className="font-semibold text-[#101828] uppercase">
                  PRIMARY DISPATCH CHANNEL
                </span>
                <span className="text-[#315EFA] font-medium">
                  STATUS // OPEN
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-xs text-[#667085] font-mono tracking-wider block uppercase">
                  OFFICIAL INQUIRY INBOX
                </span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-lg sm:text-xl font-mono text-[#101828] hover:text-[#315EFA] hover:underline underline-offset-4 block break-all font-semibold"
                  aria-label={`Send email to ${siteConfig.email}`}
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#F7F8FA] hover:bg-[#F1F3F6] text-xs font-mono text-[#101828] border border-[#E6E9EF] rounded-[8px] transition-colors duration-200 min-h-[44px] outline-none focus-visible:ring-2 focus-visible:ring-[#315EFA]"
                  aria-label="Copy email address to clipboard"
                  aria-live="polite"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#315EFA]" aria-hidden="true" />
                      <span className="text-[#315EFA] font-medium">COPIED TO CLIPBOARD</span>
                    </>
                  ) : copyFailed ? (
                    <>
                      <AlertCircle className="h-3.5 w-3.5 text-red-500" aria-hidden="true" />
                      <span>COPY FAILED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-[#667085]" aria-hidden="true" />
                      <span>COPY ADDRESS</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#315EFA] text-white text-xs font-mono font-semibold rounded-[8px] hover:bg-[#254dd4] transition-colors duration-200 min-h-[44px] shadow-sm"
                  aria-label="Open default mail client"
                >
                  <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>COMPOSE MAIL</span>
                </a>
              </div>

              <div className="pt-4 border-t border-[#E6E9EF] flex items-center justify-between text-xs font-mono text-[#667085]">
                <span>RESPONSE // 24-48 HOURS</span>
                <span>TIMEZONE // IST (UTC+05:30)</span>
              </div>
            </div>

            {/* Social & Ecosystem Channels */}
            <div className="editorial-card p-6 sm:p-8 rounded-[16px] space-y-5">
              <span className="text-xs text-[#667085] font-mono tracking-wider uppercase block font-semibold">
                VERIFIED SOCIAL & REPOSITORY CHANNELS
              </span>

              <ul className="space-y-3" aria-label="Official channels">
                {siteConfig.links.linkedin && (
                  <li>
                    <a
                      href={siteConfig.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between py-2 text-sm text-[#667085] hover:text-[#101828] transition-colors duration-200 group border-b border-[#E6E9EF]"
                      aria-label="AERVENLabs on LinkedIn"
                    >
                      <div className="flex items-center gap-3">
                        <Linkedin className="h-4 w-4 text-[#315EFA]" aria-hidden="true" />
                        <span className="font-mono text-xs font-medium">LinkedIn</span>
                      </div>
                      <ArrowUpRight className="h-3.5 w-3.5 text-[#667085] group-hover:text-[#101828] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </li>
                )}

                {siteConfig.links.github && (
                  <li>
                    <a
                      href={siteConfig.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between py-2 text-sm text-[#667085] hover:text-[#101828] transition-colors duration-200 group border-b border-[#E6E9EF]"
                      aria-label="AERVENLabs on GitHub"
                    >
                      <div className="flex items-center gap-3">
                        <Github className="h-4 w-4 text-[#101828]" aria-hidden="true" />
                        <span className="font-mono text-xs font-medium">GitHub</span>
                      </div>
                      <ArrowUpRight className="h-3.5 w-3.5 text-[#667085] group-hover:text-[#101828] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </li>
                )}

                {siteConfig.links.instagram && (
                  <li>
                    <a
                      href={siteConfig.links.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between py-2 text-sm text-[#667085] hover:text-[#101828] transition-colors duration-200 group border-b border-[#E6E9EF]"
                      aria-label="AERVENLabs on Instagram"
                    >
                      <div className="flex items-center gap-3">
                        <Instagram className="h-4 w-4 text-[#7657E8]" aria-hidden="true" />
                        <span className="font-mono text-xs font-medium">Instagram</span>
                      </div>
                      <ArrowUpRight className="h-3.5 w-3.5 text-[#667085] group-hover:text-[#101828] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </li>
                )}

                {siteConfig.links.youtube && (
                  <li>
                    <a
                      href={siteConfig.links.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between py-2 text-sm text-[#667085] hover:text-[#101828] transition-colors duration-200 group"
                      aria-label="AERVENLabs on YouTube"
                    >
                      <div className="flex items-center gap-3">
                        <Youtube className="h-4 w-4 text-red-500" aria-hidden="true" />
                        <span className="font-mono text-xs font-medium">YouTube</span>
                      </div>
                      <ArrowUpRight className="h-3.5 w-3.5 text-[#667085] group-hover:text-[#101828] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </li>
                )}
              </ul>
            </div>

            {/* Legal Entity Identity Readout */}
            <div className="bg-[#F7F8FA] p-6 rounded-[16px] border border-[#E6E9EF] space-y-2 text-xs font-mono text-[#667085]">
              <span className="text-[10px] text-[#315EFA] uppercase tracking-widest block font-semibold">
                REGISTERED LEGAL ENTITY //
              </span>
              <p className="text-[#101828] font-semibold text-sm">{siteConfig.legalName}</p>
              <p className="text-[#667085]">Kalyan / Mumbai Metropolitan Region, India</p>
            </div>
          </div>

          {/* Right Column (Cols 6-12): Structured Direct Message Terminal Form */}
          <div className="lg:col-span-7 editorial-card p-6 sm:p-10 lg:p-12 rounded-[16px] space-y-8">
            <div className="space-y-2 border-b border-[#E6E9EF] pb-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-[#101828] tracking-wider uppercase">
                  DISPATCH INTERFACE // DIRECT INQUIRY
                </span>
                <span className="text-xs font-mono text-[#315EFA] font-medium">
                  SECURE FORM
                </span>
              </div>
              <p className="text-xs font-mono text-[#667085]">
                Direct inquiry pipeline routing to {siteConfig.email}.
              </p>
            </div>

            {formSubmitted ? (
              <div className="space-y-6 py-12 text-center">
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-[#315EFA] text-white mx-auto shadow-md">
                  <Check className="h-7 w-7" aria-hidden="true" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-[#101828]">
                    Mail Client Dispatched
                  </h2>
                  <p className="text-sm text-[#667085] max-w-md mx-auto font-sans">
                    Your inquiry has been compiled into an official message and opened in your mail composer. If your mail client did not open automatically, contact us directly at{' '}
                    <span className="text-[#315EFA] font-mono font-medium">{siteConfig.email}</span>.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs font-mono text-[#315EFA] hover:underline underline-offset-4 font-medium"
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
                      className="block text-xs font-mono text-[#101828] font-semibold uppercase tracking-wider"
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
                      className="w-full px-4 py-3 bg-[#F7F8FA] border border-[#E6E9EF] rounded-[8px] text-sm text-[#101828] placeholder-[#98A2B3] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#315EFA] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono text-[#101828] font-semibold uppercase tracking-wider"
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
                      className="w-full px-4 py-3 bg-[#F7F8FA] border border-[#E6E9EF] rounded-[8px] text-sm text-[#101828] placeholder-[#98A2B3] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#315EFA] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Organization Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="contact-org"
                    className="block text-xs font-mono text-[#101828] font-semibold uppercase tracking-wider"
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
                    className="w-full px-4 py-3 bg-[#F7F8FA] border border-[#E6E9EF] rounded-[8px] text-sm text-[#101828] placeholder-[#98A2B3] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#315EFA] focus:border-transparent transition-all"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono text-[#101828] font-semibold uppercase tracking-wider"
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
                    className="w-full px-4 py-3 bg-[#F7F8FA] border border-[#E6E9EF] rounded-[8px] text-sm text-[#101828] placeholder-[#98A2B3] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#315EFA] focus:border-transparent transition-all resize-y"
                  />
                </div>

                {/* Privacy Notice */}
                <div className="flex items-start gap-2.5 text-xs text-[#667085] font-mono">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-[#315EFA] mt-0.5" aria-hidden="true" />
                  <span>
                    Your inquiry details are treated with strict confidentiality. AERVENLabs never sells or distributes contact records.
                  </span>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-[#315EFA] text-white font-mono text-xs font-semibold tracking-wider uppercase rounded-[8px] hover:bg-[#254dd4] transition-colors duration-200 min-h-[48px] shadow-sm"
                  aria-label="Send inquiry to AERVENLabs"
                >
                  <span>TRANSMIT INQUIRY</span>
                  <Send className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
