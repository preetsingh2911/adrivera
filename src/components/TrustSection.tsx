import React from 'react';
import { trustContent } from '@/content/promises';
import { ScrollReveal } from './ScrollReveal';

export function TrustSection() {
  return (
    <section id="trust" className="py-20 sm:py-24 md:py-28 border-b border-border bg-bg">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-eyebrow text-muted mb-4">
              {trustContent.eyebrow}
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-ink tracking-tighter leading-tight mb-4">
              {trustContent.headline}
            </h2>
          </div>
        </ScrollReveal>

        {/* The Promise Paragraph Block */}
        <ScrollReveal delayMs={50}>
          <div className="border border-border bg-white p-6 sm:p-10 mb-12 rounded-none">
            <div className="space-y-4 max-w-4xl">
              {trustContent.promiseParagraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className={`leading-relaxed text-sm sm:text-base ${
                    idx === 2
                      ? 'font-medium text-ink pt-2 border-t border-border/60'
                      : 'text-ink/85 font-normal'
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Two-Column Ruled Accountability Layout */}
        <ScrollReveal delayMs={100}>
            <div className="motion-card grid grid-cols-1 md:grid-cols-2 border border-border bg-white rounded-none divide-y md:divide-y-0 md:divide-x divide-border">
            {/* Left Column: ADrivera's Responsibilities */}
            <div className="p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                  <span className="w-2.5 h-2.5 bg-accent flex-shrink-0" />
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-ink tracking-tight">
                    ADrivera ki responsibility:
                  </h3>
                </div>

                <ul className="space-y-4">
                  {trustContent.agencyResponsibilities.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-ink/90">
                      <span className="font-mono text-xs font-bold text-accent mt-0.5 flex-shrink-0">
                        0{idx + 1}
                      </span>
                      <span className="leading-relaxed font-normal">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-border/60 text-[11px] font-mono text-muted uppercase">
                ADrivera Service Standard
              </div>
            </div>

            {/* Right Column: Customer's Responsibilities */}
            <div className="p-6 sm:p-10 flex flex-col justify-between bg-bg/30">
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                  <span className="w-2.5 h-2.5 bg-ink flex-shrink-0" />
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-ink tracking-tight">
                    Aapki responsibility:
                  </h3>
                </div>

                <ul className="space-y-4">
                  {trustContent.customerResponsibilities.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-ink/90">
                      <span className="font-mono text-xs font-bold text-ink mt-0.5 flex-shrink-0">
                        0{idx + 1}
                      </span>
                      <span className="leading-relaxed font-normal">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-border/60 text-[11px] font-mono text-muted uppercase">
                Client Partnership Standard
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Commitment Summary Note */}
        <ScrollReveal delayMs={140}>
          <div className="mt-8 border border-border p-5 sm:p-6 bg-white rounded-none flex items-start gap-3.5">
            <span className="w-1.5 h-1.5 bg-accent inline-block mt-1.5 flex-shrink-0" />
            <p className="text-xs sm:text-sm text-muted leading-relaxed font-normal">
              {trustContent.commitmentNote}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
