import React from 'react';
import { siteContent } from '@/content/site';

export function SiteFooter() {
  return (
    <footer className="bg-bg border-t border-border pt-16 pb-20 md:pb-16 text-ink">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-border">
          {/* Brand Column */}
          <div className="md:col-span-6 flex flex-col items-start">
            <a
              href="/"
              className="flex items-center gap-2 text-ink font-heading font-semibold text-xl tracking-tight mb-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            >
              <span
                className="w-2.5 h-2.5 bg-accent inline-block flex-shrink-0 rounded-none"
                aria-hidden="true"
              />
              <span>{siteContent.brandName}</span>
            </a>
            <p className="text-muted text-sm leading-relaxed max-w-sm mb-4">
              {siteContent.tagline}
            </p>
            <span className="text-xs font-mono text-muted">
              Territory: {siteContent.location}
            </span>
          </div>

          {/* Dynamic Footer Link Groups */}
          {siteContent.footerLinks.map((group) => (
            <div key={group.title} className="md:col-span-3">
              <span className="text-xs font-semibold uppercase tracking-eyebrow text-ink block mb-4">
                {group.title}
              </span>
              <ul className="space-y-2.5 text-sm">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted hover:text-ink transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Regulatory & Platform Disclaimers */}
        <div className="pt-8 pb-6 text-xs text-muted leading-relaxed space-y-3">
          <p>{siteContent.disclaimers.metaNonAffiliation}</p>
          <p>{siteContent.disclaimers.resultsGuarantee}</p>
          <p>{siteContent.disclaimers.taxNotice}</p>
        </div>

        {/* Copyright & Technical Status */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-muted">
          <span>
            © {new Date().getFullYear()} {siteContent.brandName}. All rights reserved.
          </span>
          <span className="font-mono text-[11px]">
            Static Output · Fully Self-Contained
          </span>
        </div>
      </div>
    </footer>
  );
}
