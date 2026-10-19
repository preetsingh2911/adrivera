import React from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { HeroSection } from "@/components/HeroSection";
import { ProofSection } from "@/components/ProofSection";
import { VisibilitySection } from "@/components/VisibilitySection";
import { BrandSection } from "@/components/BrandSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PlatformsSection } from "@/components/PlatformsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { PricingSection } from "@/components/PricingSection";
import { StarterSection } from "@/components/StarterSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { TrustSection } from "@/components/TrustSection";
import { FAQSection } from "@/components/FAQSection";
import { EnquirySection } from "@/components/EnquirySection";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyMobileCta } from "@/components/StickyMobileCta";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-bg selection:bg-tint selection:text-ink pb-16 md:pb-0">
      <SiteHeader />

      <div id="home" className="sr-only" aria-hidden="true" />
      <main id="main-content" className="flex-grow">
        <HeroSection />
        <ProofSection />
        <PricingSection />
        <BrandSection />
        <ServicesSection />
        <PlatformsSection />
        <ProcessSection />
        <VisibilitySection />
        <StarterSection />
        <CaseStudiesSection />
        <TrustSection />
        <FAQSection />
        <EnquirySection />
        <FinalCtaSection />
      </main>

      <SiteFooter />
      <StickyMobileCta />
    </div>
  );
}
