import React from 'react';
import { finalCtaData } from '@/content/cta';
import { siteConfig } from '@/content/site';
import { ScrollReveal } from './ScrollReveal';

export function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-dark text-white border-b border-border-dark">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <ScrollReveal>
            <span className="inline-block text-xs font-semibold uppercase tracking-eyebrow text-muted-light mb-4">
              {finalCtaData.eyebrow}
            </span>
            <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl md:text-5xl tracking-tighter leading-tightest mb-6">
              {finalCtaData.headline}
            </h2>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-10 max-w-[65ch]">
              {finalCtaData.supportingCopy}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <a
                href={finalCtaData.primaryCta.href}
                className="inline-flex items-center justify-center min-h-[48px] px-8 text-base font-semibold text-white bg-accent hover:bg-[#1E4BD9] active:bg-[#153BB8] rounded-[2px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
              >
                {finalCtaData.primaryCta.label}
              </a>
              <a
                href={finalCtaData.secondaryCta.href}
                className="inline-flex items-center justify-center min-h-[48px] px-8 text-base font-semibold text-white border border-white/60 bg-transparent hover:bg-white/10 active:bg-white/15 rounded-[2px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
              >
                {finalCtaData.secondaryCta.label}
              </a>
            </div>

            <p className="text-xs text-white/50 leading-relaxed">
              WhatsApp CTAs route directly to our official agency communication desk.
              {siteConfig.contact.isWhatsappVerified ? '' : ' (Production number pending founder verification before live deployment).'}
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
