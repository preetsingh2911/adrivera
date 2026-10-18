'use client';

import React, { useState } from 'react';
import { siteContent } from '@/content/site';
import { Button } from './ui/Button';
import { MobileNavigation } from './MobileNavigation';

export function SiteHeader() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-bg border-b border-border">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Wordmark: Manrope semibold with a small solid blue square before it, no gradient */}
          <a
            href="#home"
            className="flex items-center gap-2 group text-ink font-heading font-semibold text-xl tracking-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            <span
              className="w-2.5 h-2.5 bg-accent inline-block flex-shrink-0 rounded-none"
              aria-hidden="true"
            />
            <span>{siteContent.brandName}</span>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-8"
          >
            {siteContent.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted hover:text-ink transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Button: Rectangular, 2px radius, 48px min height */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="primary" href="#pricing">
              Get Started
            </Button>
          </div>

          {/* Mobile Navigation Trigger */}
          <button
            type="button"
            onClick={() => setMobileNavOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={mobileNavOpen}
            aria-controls="mobile-navigation-dialog"
            className="md:hidden flex items-center justify-center w-12 h-12 border border-border bg-transparent text-ink rounded-[2px] transition-colors hover:bg-ink/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            {/* Thin 1.5px line menu icon */}
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="square"
            >
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          </button>
        </div>
      </header>

      {/* Full-screen Mobile Navigation Sheet */}
      <MobileNavigation
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        links={siteContent.navLinks}
        brandName={siteContent.brandName}
      />
    </>
  );
}
