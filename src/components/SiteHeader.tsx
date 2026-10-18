'use client';

import React, { useState } from 'react';
import { siteContent } from '@/content/site';
import { Button } from './ui/Button';
import { MobileNavigation } from './MobileNavigation';

export function SiteHeader() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const mobilePrimaryLinks = [
    { label: 'Home', href: '/' },
    { label: 'Kyun Zaroori', href: '/why-us' },
    { label: 'Plans', href: '/#pricing' },
  ];
  const mobileMoreLinks = [
    { label: 'Kaam Ka Tareeka', href: '/how-we-work' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border bg-bg/95 backdrop-blur-sm transition-colors duration-300">
        <div className="mx-auto flex max-w-site flex-col px-4 py-3 sm:px-6 lg:h-20 lg:flex-row lg:items-center lg:px-8 lg:py-0">
          {/* Wordmark: Manrope semibold with a small solid blue square before it, no gradient */}
          <div className="flex h-10 items-center justify-between lg:h-auto">
            <a
              href="/"
              className="group flex items-center gap-2 font-heading text-xl font-semibold tracking-tight text-ink transition-colors duration-200 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            >
              <span
                className="h-2.5 w-2.5 flex-shrink-0 bg-accent"
                aria-hidden="true"
              />
              <span>{siteContent.brandName}</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileNavOpen(true)}
              aria-label="Open more navigation"
              aria-expanded={mobileNavOpen}
              aria-controls="mobile-navigation-dialog"
              className="flex h-10 items-center gap-2 border border-border px-3 font-mono text-[10px] font-semibold uppercase tracking-eyebrow text-ink transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 lg:hidden"
            >
              <span className="flex flex-col gap-1" aria-hidden="true">
                <span className="h-px w-4 bg-current" />
                <span className="h-px w-4 bg-current" />
              </span>
              More
            </button>
          </div>

          <nav aria-label="Mobile Primary Navigation" className="mt-3 grid grid-cols-3 gap-2 lg:hidden">
            {mobilePrimaryLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className={`flex min-h-[38px] items-center justify-center border px-2 text-[10px] font-semibold uppercase tracking-[0.07em] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${
                  index === 2
                    ? 'border-accent bg-accent text-white hover:bg-[#1E4BD9]'
                    : 'border-border bg-white/40 text-ink hover:border-accent hover:text-accent'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-8"
          >
            {siteContent.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted transition-colors duration-200 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Button: Rectangular, 2px radius, 48px min height */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="primary" href="/#pricing">
              Plans Dekhein
            </Button>
          </div>

        </div>
      </header>
      <MobileNavigation
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        links={mobileMoreLinks}
        brandName={siteContent.brandName}
      />
    </>
  );
}
