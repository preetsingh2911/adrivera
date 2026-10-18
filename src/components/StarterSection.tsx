'use client';

import React from 'react';
import { starterSectionData } from '@/content/plans';
import { siteConfig } from '@/content/site';
import { ScrollReveal } from './ScrollReveal';

export function StarterSection() {
  const starterWhatsAppUrl = `https://wa.me/${
    siteConfig.contact.whatsappNumberPlaceholder
  }?text=${encodeURIComponent(
    'Hello ADrivera team, I am interested in testing the Starter plan (₹5,000/month) for my business in Bhopal. Please guide me on getting started.'
  )}`;

  return (
    <section className="py-20 sm:py-24 md:py-28 border-b border-border bg-bg">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-eyebrow text-muted mb-4">
              {starterSectionData.eyebrow}
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-ink tracking-tighter leading-tight mb-4">
              {starterSectionData.headline}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: English Editorial Copy */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal delayMs={50}>
              {starterSectionData.paragraphs.map((p, idx) => (
                <p key={idx} className="text-muted text-base sm:text-lg leading-relaxed font-normal">
                  {p}
                </p>
              ))}

              <div className="pt-4">
                <a
                  href="#enquiry?plan=starter"
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      window.dispatchEvent(
                        new CustomEvent('adrivera-select-plan', { detail: { plan: 'starter' } })
                      );
                    }
                  }}
                  className="inline-flex items-center justify-center min-h-[48px] px-8 text-sm font-semibold text-white bg-accent hover:bg-[#1E4BD9] active:bg-[#153BB8] rounded-[2px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                >
                  Start with ₹5,000
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Hindi Copy in a Ruled Quote Block */}
          <div className="lg:col-span-6">
            <ScrollReveal delayMs={100}>
              <div className="border border-border border-l-4 border-l-accent bg-white p-6 sm:p-8 rounded-none">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
                  <span className="font-mono text-xs font-bold text-muted uppercase tracking-wider">
                    {starterSectionData.hindiNote}
                  </span>
                  <span className="font-mono text-xs font-bold text-accent">
                    ₹5,000 / माह
                  </span>
                </div>

                <blockquote className="font-hindi text-base sm:text-lg text-ink font-medium leading-relaxed mb-6">
                  &ldquo;{starterSectionData.hindiQuote}&rdquo;
                </blockquote>

                <div className="pt-4 border-t border-border flex items-center justify-between text-xs text-muted">
                  <span>टेस्टिंग और मूल्यांकन पैकेज</span>
                  <span className="font-mono">₹3,000 विज्ञापन + ₹2,000 सेवा</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Qualification Clarification from Brief */}
        <ScrollReveal delayMs={150}>
          <div className="mt-10 border border-border p-5 sm:p-6 bg-white rounded-none flex items-start gap-3.5">
            <span className="w-1.5 h-1.5 bg-accent inline-block mt-1.5 flex-shrink-0" />
            <p className="text-xs sm:text-sm text-ink/80 leading-relaxed font-normal">
              {starterSectionData.qualification}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
