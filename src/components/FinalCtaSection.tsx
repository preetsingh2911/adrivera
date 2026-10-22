import React from 'react';
import { finalCtaData } from '@/content/cta';
import { ScrollReveal } from './ScrollReveal';
import { WhatsAppIcon } from './ui/WhatsAppIcon';
import { FacebookIcon } from './ui/FacebookIcon';
import { InstagramIcon } from './ui/InstagramIcon';

export function FinalCtaSection() {
  return (
    <section className="py-20 sm:py-24 md:py-28 bg-[#0B1530] text-white border-b border-border/20">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="border border-white/15 p-8 sm:p-12 md:p-16 bg-[#0E1B3E] rounded-none">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column (7 cols): Eyebrow, Headline, and Operational Guarantees */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-white/20 bg-white/5 mb-4">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <FacebookIcon size={14} className="w-3.5 h-3.5" />
                    <InstagramIcon size={14} className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-mono font-semibold uppercase tracking-eyebrow text-blue-200">
                    {finalCtaData.eyebrow}
                  </span>
                </div>

                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tighter leading-tight mb-4">
                  {finalCtaData.headline}
                </h2>

                <p className="text-xs text-white/60 font-mono tracking-tight mt-6 pt-4 border-t border-white/10 flex items-center gap-2 flex-wrap">
                  <span className="inline-flex items-center gap-1 text-white/90">
                    <FacebookIcon size={12} className="w-3 h-3" /> Facebook Ads
                  </span>
                  &bull;
                  <span className="inline-flex items-center gap-1 text-white/90">
                    <InstagramIcon size={12} className="w-3 h-3" /> Instagram Ads
                  </span>
                  &bull;
                  <span>Monthly packages</span>
                  &bull;
                  <span>Meta ad spend shamil hai</span>
                  &bull;
                  <span>Zero hidden agency charges</span>
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
                    href="/#pricing"
                    className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-gradient-to-r from-[#1E4BD9] to-[#285BFF] hover:from-[#1A42C5] hover:to-[#2250EA] border-2 border-[#1E4BD9] dark:border-[#3E74FF] px-8 font-semibold text-white transition-[transform,box-shadow,background-color,border-color,color] duration-200 hover:[box-shadow:4px_4px_rgb(21_59_184)] dark:hover:[box-shadow:4px_4px_rgb(62_116_255)] translate-x-[2px] hover:translate-x-0 translate-y-[2px] hover:translate-y-0 [box-shadow:0px_0px_transparent] active:translate-y-[2px] active:translate-x-[2px]"
                  >
                    {finalCtaData.primaryCta.label}
                  </a>

                  <a
                    href="https://wa.me/918815512459?text=Namaste%20ADrivera%20team%2C%20main%20apne%20business%20ke%20liye%20Meta%20Ads%20ke%20baare%20mein%20baat%20karna%20chahta%20hoon."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex h-12 items-center justify-center gap-2.5 overflow-hidden rounded-md bg-white/5 hover:bg-white/10 border-2 border-white/40 hover:border-white/70 px-8 font-semibold text-white transition-[transform,box-shadow,background-color,border-color,color] duration-200 hover:[box-shadow:4px_4px_rgba(255,255,255,0.25)] translate-x-[2px] hover:translate-x-0 translate-y-[2px] hover:translate-y-0 [box-shadow:0px_0px_transparent] active:translate-y-[2px] active:translate-x-[2px]"
                  >
                    <WhatsAppIcon className="w-5 h-5 text-[#25D366] shrink-0 transition-transform duration-200 group-hover:scale-110" />
                    <span>{finalCtaData.secondaryCta.label}</span>
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
