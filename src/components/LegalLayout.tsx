import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/content/site';
import { ThemeToggle } from './ThemeToggle';
import { BrandLogo } from './BrandLogo';

interface LegalLayoutProps {
  title: string;
  documentNumber: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export function LegalReviewBadge() {
  return (
    <span
      className="inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider bg-accent/10 border border-accent/40 text-accent select-none mr-1.5 align-baseline"
      title="This clause is an operational draft pending formal legal counsel review before commercial launch."
    >
      [REVIEW]
    </span>
  );
}

export function LegalLayout({
  title,
  documentNumber,
  lastUpdated,
  children,
}: LegalLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-bg text-ink selection:bg-tint selection:text-ink">
      {/* Legal Header */}
      <header className="border-b border-border bg-card sticky top-0 z-30">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            aria-label={siteConfig.brandName}
          >
            <BrandLogo variant="horizontal" size="md" alt={siteConfig.brandName} />
          </Link>

          <div className="flex items-center gap-3 sm:gap-4">
            <ThemeToggle size="sm" />
            <Link
              href="/"
              className="text-xs font-mono font-medium text-muted hover:text-ink transition-colors flex items-center gap-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            >
              <span>&larr;</span>
              <span>Back to Main Site</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Document Header */}
          <div className="border-b border-border pb-8 mb-10">
            <div className="flex items-center justify-between text-xs font-mono text-muted uppercase tracking-wider mb-3">
              <span>Legal Document {documentNumber}</span>
              <span>Last Revised: {lastUpdated}</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-ink tracking-tight mb-4">
              {title}
            </h1>
            <p className="text-sm text-muted">
              ADrivera &bull; Performance Marketing &amp; Meta Advertising &bull; Bhopal, Madhya Pradesh, India
            </p>
          </div>

          {/* Pre-launch Legal Advisory Banner */}
          <div className="border border-border border-l-4 border-l-accent p-5 sm:p-6 bg-card rounded-none mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-accent inline-block" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent">
                Pre-Launch Operational Draft Notice
              </span>
            </div>
            <p className="text-xs sm:text-sm text-ink/80 leading-relaxed font-normal">
              This document reflects ADrivera&apos;s commercial transparency principles, claims policies, and operating framework. Clauses marked with{' '}
              <LegalReviewBadge /> are specific commercial or regulatory provisions that must undergo formal review by designated Indian legal counsel prior to formal business launch.
            </p>
          </div>

          {/* Document Body */}
          <div className="border border-border bg-card p-6 sm:p-10 md:p-12 rounded-none space-y-10 text-sm sm:text-base leading-relaxed text-ink/85">
            {children}
          </div>
        </div>
      </main>

      {/* Legal Footer */}
      <footer className="border-t border-border bg-card py-8 text-xs text-muted">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap gap-4 font-mono text-[11px]">
            <Link href="/privacy" className="hover:text-ink transition-colors">
              Privacy Policy
            </Link>
            <span>&bull;</span>
            <Link href="/terms" className="hover:text-ink transition-colors">
              Terms of Service
            </Link>
            <span>&bull;</span>
            <Link href="/cancellation-and-renewal" className="hover:text-ink transition-colors">
              Cancellation &amp; Renewal
            </Link>
            <span>&bull;</span>
            <Link href="/advertising-disclaimer" className="hover:text-ink transition-colors">
              Advertising Disclaimers
            </Link>
          </div>
          <span>&copy; {new Date().getFullYear()} ADrivera. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
