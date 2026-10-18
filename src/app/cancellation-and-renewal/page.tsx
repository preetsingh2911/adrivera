import React from 'react';
import { LegalLayout, LegalReviewBadge } from '@/components/LegalLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cancellation & Renewal Policy | ADrivera Bhopal',
  description:
    'Plain-language cancellation and renewal terms for ADrivera monthly Meta advertising packages. Transparent policies on ad spend and service allocations.',
  alternates: {
    canonical: '/cancellation-and-renewal',
  },
  openGraph: {
    title: 'Cancellation & Renewal Policy | ADrivera Bhopal',
    description:
      'Clear policies regarding 30-day advertising cycles, renewal notices, and non-refundable Meta ad spend allocations.',
    url: 'https://adrivera.in/cancellation-and-renewal',
  },
};

export default function CancellationAndRenewalPage() {
  return (
    <LegalLayout
      title="Cancellation &amp; Renewal Terms"
      documentNumber="CAN-01"
      lastUpdated="October 2026"
    >
      <section className="space-y-4">
        <h2 className="font-heading font-bold text-xl text-ink">1. Monthly Advertising Cycle Structure</h2>
        <p>
          All standard ADrivera advertising packages (Starter ₹5,000, Growth ₹8,000, Premium ₹16,000, and Custom plans) operate on a 30-day calendar billing cycle.
        </p>
        <p>
          Each package period begins on the day your initial campaign setup is approved and published live in Meta Ads Manager.
        </p>
      </section>

      <section className="space-y-4 pt-6 border-t border-border">
        <h2 className="font-heading font-bold text-xl text-ink">2. Starter Plan Evaluation Principle</h2>
        <p>
          Our Starter package is explicitly designed as a low-commitment evaluation entry point:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
          <li>
            There is no long-term contract, mandatory 6-month lock-in, or forced upgrade obligation.
          </li>
          <li>
            At the conclusion of your 30-day Starter cycle, we provide your comprehensive performance report. You decide whether to continue on Starter, upgrade to Growth for creative testing, or pause your advertising without penalty.
          </li>
        </ul>
      </section>

      <section className="space-y-4 pt-6 border-t border-border">
        <h2 className="font-heading font-bold text-xl text-ink">3. Ad Spend vs. Service Fee Allocation Upon Cancellation</h2>
        <p>
          Because our package price combines two distinct cost components, cancellation treatments are separated accordingly:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
          <div className="border border-border p-5 bg-bg">
            <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider block mb-2">
              Meta Advertising Spend Component
            </span>
            <p className="text-xs sm:text-sm text-ink/85 leading-relaxed">
              Ad spend delivered to Meta Platforms, Inc. directly funds active ad auctions (impressions, clicks, and video views). Once consumed on Meta servers, platform ad spend is strictly non-refundable by ADrivera. Any unspent balance remaining in your dedicated ad account remains client property.
            </p>
          </div>

          <div className="border border-border p-5 bg-bg">
            <span className="font-mono text-xs font-bold text-ink uppercase tracking-wider block mb-2">
              ADrivera Service Fee Component
            </span>
            <p className="text-xs sm:text-sm text-ink/85 leading-relaxed">
              Agency service fees compensate research, audience targeting setup, creative production, and routine campaign optimization. Once campaign configuration and ad production have commenced for a cycle, the monthly agency service fee is non-refundable.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4 pt-6 border-t border-border">
        <h2 className="font-heading font-bold text-xl text-ink">4. Cancellation Notice and Renewal Procedure</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
          <li>
            <strong>Cancellation Notice:</strong> <LegalReviewBadge /> To prevent unwanted renewal charges, clients must communicate notice of non-renewal at least 7 calendar days prior to the expiration of their current 30-day cycle via WhatsApp or email to hello@adrivera.in.
          </li>
          <li>
            <strong>Campaign Pausing:</strong> <LegalReviewBadge /> If you need to pause advertising due to temporary store renovations, seasonal inventory shortages, or local events, campaigns may be paused for up to 14 days without forfeiting remaining allocated service hours, subject to prior mutual agreement.
          </li>
          <li>
            <strong>Transition and Handover:</strong> Upon conclusion of services, ADrivera turns over final performance reports and removes administrative access from your Meta assets in an orderly manner.
          </li>
        </ul>
      </section>

      <section className="space-y-4 pt-6 border-t border-border">
        <h2 className="font-heading font-bold text-xl text-ink">5. Mandatory Regulatory Disclaimers</h2>
        <p className="text-xs text-muted leading-relaxed">
          ADrivera does not guarantee financial returns, sales numbers, or prospective customer conversions. Cancellation of advertising services does not release the client from liability for advertising spend incurred on Meta Platforms prior to the effective pausing or termination of campaigns.
        </p>
      </section>
    </LegalLayout>
  );
}
