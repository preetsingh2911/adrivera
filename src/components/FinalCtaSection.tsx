import React from 'react';
import { finalCtaData } from '@/content/cta';
import { siteConfig } from '@/content/site';
import { ScrollReveal } from './ScrollReveal';

export function FinalCtaSection() {
  const whatsAppUrl = `https://wa.me/${
    siteConfig.contact.whatsappNumberPlaceholder
  }?text=${encodeURIComponent(
    'Hello ADrivera team, I would like to learn more about your Meta advertising plans for my business in Bhopal.'
  )}`;

  return (
    <section className="py-20 sm:py-24 md:py-28 bg-[#0B1530] text-white border-b border-border/20">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="border border-white/15 p-8 sm:p-12 md:p-16 bg-[#0E1B3E] rounded-none">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column (7 cols): Eyebrow, Headline, and Operational Guarantees */}
              <div className="lg:col-span-7">
                <span className="inline-block text-xs font-semibold uppercase tracking-eyebrow text-blue-200 mb-4 font-mono">
                  {finalCtaData.eyebrow}
                </span>

                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tighter leading-tight mb-4">
                  {finalCtaData.headline}
                </h2>

                <p className="text-xs text-white/60 font-mono tracking-tight mt-6 pt-4 border-t border-white/10">
                  All-inclusive monthly packages &bull; Transparent Meta ad spend allocation &bull; No hidden agency fees
                </p>
              </div>

              {/* Right Column (5 cols): Supporting Copy and Direct Action Buttons */}
              <div className="lg:col-span-5 flex flex-col items-start gap-5">
                <p className="text-blue-200 text-base sm:text-lg font-medium leading-relaxed" lang="hi-Latn">
                  {finalCtaData.hinglishLead}
                </p>
                <p className="text-white/80 text-base sm:text-lg leading-relaxed font-normal">
                  {finalCtaData.supportingCopy}
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full">
                  <a
                    href={finalCtaData.primaryCta.href}
                    className="inline-flex items-center justify-center min-h-[50px] px-8 text-sm font-semibold text-white bg-accent hover:bg-[#1E4BD9] active:bg-[#153BB8] rounded-[2px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                  >
                    {finalCtaData.primaryCta.label}
                  </a>

                  <a
                    href={whatsAppUrl}
                    className="inline-flex items-center justify-center min-h-[50px] px-8 text-sm font-semibold text-white bg-transparent border border-white/30 hover:bg-white/10 active:bg-white/15 rounded-[2px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                  >
                    {finalCtaData.secondaryCta.label}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
