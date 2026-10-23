import React from "react";
import { siteConfig } from "@/content/site";
import { heroData } from "@/content/hero";
import { Reveal } from "./ui/Reveal";
import { Eyebrow } from "./ui/Eyebrow";
import { Button } from "./ui/Button";
import { WhatsAppIcon } from "./ui/WhatsAppIcon";
import { FacebookIcon } from "./ui/FacebookIcon";
import { InstagramIcon } from "./ui/InstagramIcon";
import { CampaignProofSection } from "./CampaignProofSection";

export function HeroSection() {
  const isWhatsappPlaceholder =
    !siteConfig.whatsappNumber ||
    siteConfig.whatsappNumber.includes("REPLACE_WITH_VERIFIED_NUMBER");

  const whatsappHref = isWhatsappPlaceholder
    ? "#contact"
    : `https://wa.me/${siteConfig.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
        "Hi ADrivera, I would like to know more about your Meta Ads plans.",
      )}`;

  // Split headline if comma is present for optimal 2-part visual chunking
  const headlineParts = heroData.headline.includes(",")
    ? [
        heroData.headline.slice(0, heroData.headline.indexOf(",") + 1),
        heroData.headline.slice(heroData.headline.indexOf(",") + 1).trim(),
      ]
    : [heroData.headline];

  return (
    <section className="relative pt-6 pb-10 md:pt-12 md:pb-16 border-b border-border bg-bg overflow-hidden">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          {/* Left Column (7 cols): Core Positioning */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <Reveal>
              <div className="inline-flex items-center gap-2 mb-2 px-2.5 py-1 rounded-full border border-border/80 bg-card/90 shadow-2xs">
                <div className="flex items-center gap-1.5 shrink-0">
                  <FacebookIcon size={15} className="w-3.5 h-3.5 shrink-0" />
                  <InstagramIcon size={15} className="w-3.5 h-3.5 shrink-0" />
                </div>
                <span className="font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-ink dark:text-white">
                  01 / Meta Ads in Bhopal · Facebook &amp; Instagram
                </span>
              </div>
            </Reveal>

            <Reveal delayMs={60}>
              <h1 className="font-heading font-extrabold tracking-tight text-ink text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] xl:text-[3.25rem] leading-[1.12] sm:leading-[1.1] md:leading-[1.08] mb-4 sm:mb-5 [text-wrap:balance]">
                {headlineParts.length > 1 ? (
                  <>
                    <span className="block text-ink">{headlineParts[0]}</span>
                    <span className="block mt-1 sm:mt-1.5 text-accent bg-gradient-to-r from-accent via-[#3D71FF] to-[#6392FF] dark:from-[#5A8AFF] dark:via-[#7EA7FF] dark:to-[#A3C2FF] bg-clip-text text-transparent">
                      {headlineParts[1]}
                    </span>
                  </>
                ) : (
                  heroData.headline
                )}
              </h1>
            </Reveal>

            <Reveal delayMs={120}>
              {/* Highlighted in bold without size increment */}
              <p className="font-bold text-ink dark:text-white text-sm sm:text-base lg:text-lg leading-relaxed max-w-[56ch] mb-2 sm:mb-2.5">
                ADrivera ke saath{' '}
                <span className="inline-flex items-center gap-1 text-[#1877F2] dark:text-[#4293f7] font-bold">
                  <FacebookIcon size={16} className="w-4 h-4 inline-block shrink-0 -translate-y-[1px]" />
                  Facebook
                </span>{' '}
                aur{' '}
                <span className="inline-flex items-center gap-1 text-[#D62976] dark:text-[#f35293] font-bold">
                  <InstagramIcon size={16} className="w-4 h-4 inline-block shrink-0 -translate-y-[1px]" />
                  Instagram
                </span>{' '}
                par apne business ki advertising shuru kijiye. Sahi audience tak pahunchne, enquiries badhane aur apne business ko ek pehchaan dene ki direction mein pehla kadam uthaiye.
              </p>
              {heroData.secondaryHinglishLine && (
                <div className="flex items-center gap-2 text-ink dark:text-white text-xs sm:text-sm font-semibold mb-3.5 sm:mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block shrink-0" />
                  <span lang="hi-Latn">{heroData.secondaryHinglishLine}</span>
                </div>
              )}

              {/* Strategic platform capability strip */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-border bg-card text-[11px] sm:text-xs font-semibold text-ink shadow-2xs">
                  <FacebookIcon size={14} className="w-3.5 h-3.5 shrink-0" />
                  Facebook Ads &amp; Feed
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-border bg-card text-[11px] sm:text-xs font-semibold text-ink shadow-2xs">
                  <InstagramIcon size={14} className="w-3.5 h-3.5 shrink-0" />
                  Instagram Reels &amp; Stories
                </span>
              </div>
            </Reveal>

            <Reveal delayMs={180} className="w-full sm:w-auto">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-4">
                <Button variant="primary" href={heroData.primaryCta.href} className="w-full sm:w-auto">
                  {heroData.primaryCta.label}
                </Button>
                <Button
                  variant="secondary"
                  href={whatsappHref}
                  target={isWhatsappPlaceholder ? undefined : "_blank"}
                  rel={
                    isWhatsappPlaceholder ? undefined : "noopener noreferrer"
                  }
                  className="gap-2.5 w-full sm:w-auto"
                >
                  <WhatsAppIcon className="w-5 h-5 text-[#25D366] shrink-0 transition-transform duration-200 group-hover:scale-110" />
                  <span>{heroData.secondaryCta.label}</span>
                </Button>
              </div>

              {/* Supporting microcopy */}
              <p className="text-xs text-muted leading-normal max-w-[55ch]">
                {heroData.microcopy}
              </p>
            </Reveal>
          </div>

          {/* Right Column (5 cols): Original Ad-Creative Frames Composition */}
          <div className="lg:col-span-5 w-full">
            <CampaignProofSection />
            {false && (
              <Reveal delayMs={140}>
                <div className="flex items-center justify-between pb-3 border-b border-border mb-4">
                  <span className="text-xs font-semibold uppercase tracking-eyebrow text-ink">
                    Ad Format Architecture
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 border border-border text-muted bg-card rounded-[2px]">
                    Illustrative Creatives
                  </span>
                </div>

                {/* Desktop Composition: 3 Overlapping Frames on Shared Baseline Grid */}
                <div className="hidden md:block relative h-[460px] w-full border border-border bg-card p-4">
                  {/* Frame B: 9:16 Story (Apex Academy) - Layered at the back */}
                  <div className="motion-card absolute right-4 top-4 w-[175px] border border-border bg-[#0B1530] text-white p-3 z-10 rounded-none">
                    {/* Story Progress Indicators */}
                    <div className="flex gap-1 mb-2.5">
                      <span className="h-[2px] bg-white flex-1 inline-block" />
                      <span className="h-[2px] bg-white/30 flex-1 inline-block" />
                    </div>
                    {/* Story Header */}
                    <div className="flex items-center gap-1.5 mb-3">
                      <span className="w-5 h-5 bg-accent text-white text-[9px] font-bold flex items-center justify-center font-mono">
                        AA
                      </span>
                      <div className="min-w-0">
                        <div className="text-[10px] font-bold truncate">
                          Apex Academy
                        </div>
                        <div className="text-[8px] text-white/60">
                          Sponsored · 9:16 Story
                        </div>
                      </div>
                    </div>
                    {/* Story Visual Box */}
                    <div className="border border-white/15 bg-white/5 p-2.5 mb-3">
                      <span className="text-[8px] font-mono uppercase tracking-wider text-blue-200 block mb-1">
                        Foundation 2026
                      </span>
                      <div className="text-xs font-heading font-extrabold leading-tight mb-1.5">
                        Target JEE &amp; NEET
                      </div>
                      <p className="text-[9px] text-white/70 leading-snug">
                        Admissions open for Class 11 &amp; 12 in MP Nagar.
                      </p>
                    </div>
                    {/* Story Bottom Action */}
                    <div className="border border-white/30 text-center py-1.5 text-[9px] font-semibold uppercase tracking-wider text-white bg-white/10 rounded-[2px]">
                      WhatsApp Karein
                    </div>
                  </div>

                  {/* Frame A: 4:5 Feed Post (Sample Cafe) - Layered on the left */}
                  <div className="motion-card absolute left-4 top-8 w-[215px] border border-border bg-bg p-3 z-20 rounded-none">
                    {/* Feed Header */}
                    <div className="flex items-center gap-2 mb-2.5 pb-2 border-b border-border">
                      <span className="w-6 h-6 bg-ink text-white text-[10px] font-bold flex items-center justify-center font-mono">
                        SC
                      </span>
                      <div className="min-w-0">
                        <div className="text-[11px] font-bold text-ink truncate">
                          Sample Cafe
                        </div>
                        <div className="text-[9px] text-muted">
                          Arera Colony · Sponsored
                        </div>
                      </div>
                    </div>
                    {/* Feed Graphic Area (4:5 representation) */}
                    <div className="border border-border bg-card p-3 mb-2.5">
                      <span className="text-[9px] font-mono uppercase tracking-wider text-accent block mb-1">
                        Weekend Roastery
                      </span>
                      <div className="text-xs font-heading font-bold text-ink leading-tight mb-1">
                        Cold Brew &amp; Artisan Bakes
                      </div>
                      <p className="text-[10px] text-muted leading-relaxed mb-2">
                        20% off all brunch orders this Saturday &amp; Sunday.
                      </p>
                      <div className="text-[9px] font-mono text-ink bg-bg p-1 border border-border">
                        Offer: WEEKEND20
                      </div>
                    </div>
                    {/* Feed CTA Bar */}
                    <div className="flex items-center justify-between pt-1 text-[10px]">
                      <span className="font-semibold text-ink">
                        4:5 Feed Placement
                      </span>
                      <span className="bg-accent text-white px-2 py-0.5 rounded-[2px] font-semibold text-[9px]">
                        Offer Lein
                      </span>
                    </div>
                  </div>

                  {/* Frame C: 1:1 Square (Greenfield Estates) - Overlapping front right */}
                  <div className="motion-card absolute right-8 bottom-4 w-[205px] border border-border bg-card p-3 z-30 rounded-none">
                    {/* 1:1 Header */}
                    <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-border">
                      <span className="w-5 h-5 bg-[#00875A] text-white text-[9px] font-bold flex items-center justify-center font-mono">
                        GE
                      </span>
                      <div className="min-w-0">
                        <div className="text-[10px] font-bold text-ink truncate">
                          Greenfield Estates
                        </div>
                        <div className="text-[8px] text-muted">
                          Kolar Road · Sponsored
                        </div>
                      </div>
                    </div>
                    {/* 1:1 Creative Content */}
                    <div className="border border-border bg-bg p-2.5 mb-2">
                      <div className="text-[11px] font-heading font-extrabold text-ink leading-tight mb-1">
                        3 BHK Terrace Homes
                      </div>
                      <p className="text-[9px] text-muted leading-tight mb-2">
                        Prime residential community near Kaliyasot Dam.
                      </p>
                      <div className="text-[9px] font-mono text-ink font-semibold">
                        From INR 48 Lakh
                      </div>
                    </div>
                    {/* Action Bar */}
                    <div className="flex items-center justify-between text-[9px]">
                      <span className="font-mono text-muted">1:1 Carousel</span>
                      <span className="border border-ink text-ink px-2 py-0.5 rounded-[2px] font-semibold">
                        Details Dekhein
                      </span>
                    </div>
                  </div>
                </div>

                {/* Mobile Horizontal Scroll-Snap Row (zero page horizontal overflow) */}
                <div className="md:hidden">
                  <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 pb-3 pt-1 -mx-4 px-4 scrollbar-none">
                    {/* Mobile Frame A: 4:5 Post */}
                    <div className="snap-center flex-shrink-0 w-[240px] border border-border bg-card p-3 rounded-none">
                      <div className="flex items-center gap-2 mb-2 pb-2 border-b border-border">
                        <span className="w-6 h-6 bg-ink text-white text-[10px] font-bold flex items-center justify-center font-mono">
                          SC
                        </span>
                        <div>
                          <div className="text-xs font-bold text-ink">
                            Sample Cafe
                          </div>
                          <div className="text-[9px] text-muted">
                            4:5 Feed Placement · Bhopal
                          </div>
                        </div>
                      </div>
                      <div className="border border-border bg-bg p-3 mb-2.5">
                        <span className="text-[9px] font-mono uppercase text-accent font-semibold block mb-1">
                          Special Offer
                        </span>
                        <div className="text-xs font-bold text-ink mb-1">
                          Cold Brew &amp; Artisan Bakes
                        </div>
                        <p className="text-[10px] text-muted leading-relaxed">
                          20% off all breakfast combos this weekend in Arera
                          Colony.
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="font-mono text-muted">
                          Generic Format
                        </span>
                        <span className="bg-accent text-white px-2 py-0.5 rounded-[2px] font-semibold">
                          Offer Lein
                        </span>
                      </div>
                    </div>

                    {/* Mobile Frame B: 9:16 Story */}
                    <div className="snap-center flex-shrink-0 w-[210px] border border-border bg-[#0B1530] text-white p-3 rounded-none">
                      <div className="flex gap-1 mb-2">
                        <span className="h-[2px] bg-white flex-1 inline-block" />
                        <span className="h-[2px] bg-white/30 flex-1 inline-block" />
                      </div>
                      <div className="flex items-center gap-1.5 mb-2 pb-1.5 border-b border-white/10">
                        <span className="w-5 h-5 bg-accent text-white text-[9px] font-bold flex items-center justify-center font-mono">
                          AA
                        </span>
                        <div>
                          <div className="text-[11px] font-bold">
                            Apex Academy
                          </div>
                          <div className="text-[8px] text-white/60">
                            9:16 Vertical Story
                          </div>
                        </div>
                      </div>
                      <div className="border border-white/15 bg-white/5 p-2.5 mb-2.5">
                        <span className="text-[8px] font-mono uppercase text-blue-200 block mb-0.5">
                          Batch 2026
                        </span>
                        <div className="text-xs font-bold mb-1">
                          Target JEE &amp; NEET
                        </div>
                        <p className="text-[9px] text-white/70">
                          Class 11 &amp; 12 enrollments open in MP Nagar.
                        </p>
                      </div>
                      <div className="border border-white/30 text-center py-1 text-[9px] font-semibold uppercase tracking-wider text-white bg-white/10 rounded-[2px]">
                        WhatsApp Karein
                      </div>
                    </div>

                    {/* Mobile Frame C: 1:1 Square */}
                    <div className="snap-center flex-shrink-0 w-[230px] border border-border bg-card p-3 rounded-none">
                      <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-border">
                        <span className="w-5 h-5 bg-[#00875A] text-white text-[9px] font-bold flex items-center justify-center font-mono">
                          GE
                        </span>
                        <div>
                          <div className="text-xs font-bold text-ink">
                            Greenfield Estates
                          </div>
                          <div className="text-[8px] text-muted">
                            1:1 Square Carousel
                          </div>
                        </div>
                      </div>
                      <div className="border border-border bg-bg p-2.5 mb-2">
                        <div className="text-xs font-bold text-ink mb-0.5">
                          3 BHK Terrace Homes
                        </div>
                        <p className="text-[9px] text-muted mb-1">
                          Kolar Road residential community.
                        </p>
                        <div className="text-[9px] font-mono text-ink font-semibold">
                          Starting INR 48 Lakh
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-[9px]">
                        <span className="font-mono text-muted">
                          Property Ad
                        </span>
                        <span className="border border-ink text-ink px-2 py-0.5 rounded-[2px] font-semibold">
                          Details Dekhein
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-[10px] text-muted font-mono pt-1 text-center">
                    ← Swipe to explore sample 4:5, 9:16 and 1:1 formats →
                  </div>
                </div>

                {/* Caption */}
                <div className="mt-3 text-[10px] text-muted font-mono flex items-center justify-between">
                  <span>Illustrative creatives · Generic business formats</span>
                  <span className="hidden sm:inline">
                    1px border · 0px radius
                  </span>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
