import React from 'react';
import { brandBuildingData } from '@/content/visibility';
import { ScrollReveal } from './ScrollReveal';

export function BrandSection() {
  return (
    <section className="bg-[#0B1530] text-white py-20 sm:py-24 md:py-28 border-b border-white/10">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <ScrollReveal>
          <div className="max-w-4xl mb-12 sm:mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-eyebrow text-white/60 mb-4">
              {brandBuildingData.eyebrow}
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter leading-[1.08]">
              {brandBuildingData.headline}
            </h2>
          </div>
        </ScrollReveal>

        {/* Two-Column Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Narrative Copy */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal delayMs={60}>
              {brandBuildingData.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="text-white/80 text-base sm:text-lg leading-relaxed font-normal"
                >
                  {p}
                </p>
              ))}
            </ScrollReveal>
          </div>

          {/* Right Column: Five Opportunity Points Ruled List */}
          <div className="lg:col-span-6">
            <ScrollReveal delayMs={120}>
              <div className="mb-3">
                <span className="font-mono uppercase text-xs tracking-wider text-white/70 font-semibold block">
                  The Broader Opportunity
                </span>
              </div>
              <ul className="border-y border-white/15 divide-y divide-white/15">
                {brandBuildingData.opportunities.map((item, idx) => (
                  <li key={idx} className="py-4 flex items-start gap-4">
                    <span className="font-mono text-xs text-white/70 font-bold mt-1 flex-shrink-0">
                      0{idx + 1}
                    </span>
                    <span className="text-sm sm:text-base text-white/95 leading-relaxed font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>

        {/* Qualification Paragraph - Visually Distinct Bordered Block */}
        <ScrollReveal delayMs={180}>
          <div className="mt-12 sm:mt-16 border border-white/20 bg-white/[0.04] p-6 sm:p-8 rounded-none">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-accent inline-block flex-shrink-0" />
              <span className="font-mono uppercase text-xs tracking-wider text-white/70 font-semibold">
                Important Qualification & Commercial Reality
              </span>
            </div>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed">
              {brandBuildingData.qualification}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
