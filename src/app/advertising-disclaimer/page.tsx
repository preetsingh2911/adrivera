import React from 'react';
import { LegalLayout, LegalReviewBadge } from '@/components/LegalLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Advertising Disclaimers | ADrivera Social Media Advertising',
  description:
    'ADrivera advertising disclosures: Meta Platforms, Inc. non-affiliation, results non-guarantee statement, proof verification policy, and performance metrics.',
  alternates: {
    canonical: '/advertising-disclaimer',
  },
  openGraph: {
    title: 'Advertising Disclaimers | ADrivera Social Media Advertising',
    description:
      'Official disclaimers on platform non-affiliation, campaign results variability, and strict proof verification guidelines.',
    url: 'https://adrivera.in/advertising-disclaimer',
  },
};

export default function AdvertisingDisclaimerPage() {
  return (
    <LegalLayout
      title="Advertising Disclaimers &amp; Claims Policy"
      documentNumber="DISC-01"
      lastUpdated="October 2026"
    >
      <section className="space-y-4">
        <h2 className="font-heading font-bold text-xl text-ink">1. Platform Non-Affiliation and Trademark Notice</h2>
        <div className="p-5 bg-bg border border-border text-xs sm:text-sm leading-relaxed text-ink font-normal space-y-2">
          <p>
            <strong>Official Platform Disclaimer:</strong> ADrivera is an independent commercial performance marketing agency based in Bhopal, Madhya Pradesh, India. ADrivera is not affiliated with, sponsored by, authorized by, certified by, or in partnership with Meta Platforms, Inc.
          </p>
          <p className="text-muted text-xs">
            Facebook, Instagram, Messenger, and WhatsApp are registered trademarks of Meta Platforms, Inc. References to these platforms describe the technical and placement channels utilized in managing digital advertising campaigns.
          </p>
        </div>
      </section>

      <section className="space-y-4 pt-6 border-t border-border">
        <h2 className="font-heading font-bold text-xl text-ink">2. Non-Guarantee of Commercial Results</h2>
        <p>
          Digital advertising is an auction-based communication mechanism designed to deliver relevant business visibility and direct traffic to your designated destination.
        </p>
        <div className="p-5 bg-bg border border-border border-l-4 border-l-accent text-xs sm:text-sm leading-relaxed text-ink space-y-2">
          <p className="font-semibold">
            ADrivera makes no representations, warranties, or guarantees—express or implied—regarding:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-ink/90">
            <li>The exact volume of customer inquiries, WhatsApp messages, or phone calls received.</li>
            <li>Specific customer conversion rates, qualified lead counts, or sales revenue.</li>
            <li>Return on advertising spend (ROAS) or gross profit margins.</li>
            <li>Continuous month-over-month performance improvements.</li>
          </ul>
        </div>
        <p className="text-xs sm:text-sm text-muted">
          Campaign results are fundamentally dependent on external commercial factors including overall market demand, offer competitiveness, local pricing in Bhopal, seasonal fluctuations, and the responsiveness of your internal sales team.
        </p>
      </section>

      <section className="space-y-4 pt-6 border-t border-border">
        <h2 className="font-heading font-bold text-xl text-ink">3. Strict Claims and Proof Verification Policy</h2>
        <p>
          In accordance with ADrivera&apos;s commercial transparency code:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
          <li>
            <strong>Zero Invented Proof:</strong> We strictly forbid the publication of fabricated metrics, fictitious customer testimonials, invented client logos, or false scarcity timers.
          </li>
          <li>
            <strong>Founder-Verified Data:</strong> Only campaign data, statistics, and performance histories that have been explicitly audited and verified by ADrivera founders are eligible to render as verified public benchmarks.
          </li>
          <li>
            <strong>Illustrative Benchmarks:</strong> Any hypothetical campaign models or operational examples displayed on our website are explicitly labeled as &ldquo;Illustrative Example (Sample Data)&rdquo; with clearly tagged hypothetical figures.
          </li>
          <li>
            <strong>No Exaggerated Multipliers:</strong> <LegalReviewBadge /> We do not publish &ldquo;10,000% growth&rdquo; or similar speculative percentage claims as generalized promises. Where authentic campaign growth figures are presented, we document the starting baseline, ending figure, measurement timeframe, and campaign spend context.
          </li>
        </ul>
      </section>

      <section className="space-y-4 pt-6 border-t border-border">
        <h2 className="font-heading font-bold text-xl text-ink">4. Metric Definitions and Misconceptions</h2>
        <div className="space-y-3 text-xs sm:text-sm">
          <p>
            <strong>Impressions vs. Unique Reach:</strong> Impressions indicate total raw ad views (including repeat exposures). Unique reach measures distinct individual accounts exposed to the ad.
          </p>
          <p>
            <strong>Cost Per Click (CPC) vs. Cost Per Acquisition:</strong> CPC measures the platform expense to earn an ad click. A click represents curiosity and traffic; it does not constitute a completed lead or customer purchase.
          </p>
        </div>
      </section>

      <section className="space-y-4 pt-6 border-t border-border">
        <h2 className="font-heading font-bold text-xl text-ink">5. Regulatory Standards and Client Content Liability</h2>
        <p>
          <LegalReviewBadge /> All client advertisements must comply with the Advertising Standards Council of India (ASCI) code of conduct, the Consumer Protection Act, 2019, and Meta Advertising Policies.
        </p>
        <p className="text-xs sm:text-sm text-ink/85">
          Clients maintain sole legal responsibility for the veracity of claims made regarding their products, pricing accuracy, warranties, trade licenses, and professional qualifications. ADrivera reserves the right to decline, pause, or modify any creative campaign that violates Meta platform policies or Indian advertising regulations.
        </p>
      </section>
    </LegalLayout>
  );
}
