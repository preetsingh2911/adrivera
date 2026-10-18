import React from 'react';
import { processData } from '@/content/process';
import { ScrollReveal } from './ScrollReveal';

export function ProcessSection() {
  return (
    <section id="our-approach" className="py-20 sm:py-24 md:py-28 border-b border-border bg-bg">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-eyebrow text-muted mb-4">
              {processData.eyebrow}
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-ink tracking-tighter leading-tight mb-4">
              {processData.headline}
            </h2>
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              {processData.leadText}
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Steps in Horizontal Row (Desktop) / Vertical Stack (Mobile) Connected by 1px Line */}
        <div className="relative border border-border bg-white rounded-none divide-y md:divide-y-0 md:divide-x divide-border grid grid-cols-1 md:grid-cols-4">
          {processData.steps.map((step, idx) => (
            <ScrollReveal key={step.step} delayMs={idx * 50}>
              <div className="p-6 sm:p-8 flex flex-col justify-between h-full relative">
                <div>
                  {/* Top Hairline Indicator & Large Numeral */}
                  <div className="flex items-center justify-between mb-4">
                    <span aria-hidden="true" className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-ink/60 tabular-nums tracking-tighter select-none">
                      {step.step}
                    </span>
                    <span className="w-2 h-2 bg-accent inline-block flex-shrink-0" />
                  </div>

                  {/* Step Title */}
                  <h3 className="font-heading font-bold text-ink text-lg sm:text-xl tracking-tight mb-3">
                    {step.title}
                  </h3>

                  {/* One-Sentence Description from the Brief */}
                  <p className="text-sm text-ink/85 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Step Order Label */}
                <div className="mt-8 pt-4 border-t border-border/60 text-[11px] font-mono text-muted uppercase tracking-wider">
                  Phase 0{idx + 1} of 04
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Ongoing Learning Process Principle Note */}
        <ScrollReveal delayMs={150}>
          <div className="mt-8 border border-border p-5 sm:p-6 bg-white rounded-none flex items-start gap-3.5">
            <span className="w-1.5 h-1.5 bg-accent inline-block mt-1.5 flex-shrink-0" />
            <p className="text-xs sm:text-sm text-ink/90 font-medium leading-relaxed">
              {processData.footnote}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
