import React from 'react';
import { siteConfig, getRenderableStats } from '@/content/site';
import { proofData } from '@/content/proof';
import { Reveal } from './ui/Reveal';
import { Eyebrow } from './ui/Eyebrow';

export function ProofSection() {
  const verifiedStats = getRenderableStats(siteConfig.verifiedStats);
  const hasVerifiedData = verifiedStats.length > 0;

  return (
    <section id="proof" className="py-16 md:py-24 border-b border-border bg-bg">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="max-w-3xl mb-12">
            <Eyebrow number="02" label="Proof & Experience" />
            <h2 className="font-heading font-extrabold text-ink text-3xl sm:text-4xl md:text-5xl tracking-tighter leading-snugger mb-5">
              {proofData.headline}
            </h2>

            {/* If verifiedStats is empty, show simpler statement plus brief's paragraph with no numbers */}
            {!hasVerifiedData && (
              <div className="space-y-4">
                <p className="font-heading font-bold text-ink text-xl sm:text-2xl leading-snug">
                  {proofData.simplerStatement}
                </p>
                <p className="text-muted text-base sm:text-lg leading-relaxed">
                  {proofData.leadText}
                </p>
              </div>
            )}

            {/* If verifiedStats is present, show lead text */}
            {hasVerifiedData && (
              <p className="text-muted text-base sm:text-lg leading-relaxed">
                {proofData.leadText}
              </p>
            )}
          </div>
        </Reveal>

        {/* Dynamic Stat Layout: Renders verified numbers if available, or architectural verification architecture */}
        {hasVerifiedData ? (
          <Reveal delayMs={80}>
            <div className="grid grid-cols-1 md:grid-cols-3 border-y border-border divide-y md:divide-y-0 md:divide-x divide-border bg-white mb-8">
              {verifiedStats.map((stat, idx) => (
                <div key={idx} className="p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    {/* Large Numeral */}
                    <div className="font-heading font-extrabold text-ink text-4xl sm:text-5xl tracking-tightest tabular-nums mb-3">
                      {stat.value}
                    </div>
                    {/* Definition Line */}
                    <div className="text-sm font-semibold text-ink leading-snug mb-2">
                      {stat.definition}
                    </div>
                  </div>
                  {/* Source Line */}
                  <div className="text-xs font-mono text-muted pt-3 border-t border-border/60">
                    Source: {stat.source}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        ) : (
          /* When verifiedStats is empty: No numbers rendered, clean architectural framework */
          <Reveal delayMs={80}>
            <div className="border border-border bg-white p-6 sm:p-8 mb-8 rounded-none">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border mb-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-eyebrow text-ink block mb-1">
                    Verified Performance Framework
                  </span>
                  <p className="text-xs text-muted">
                    Statistical claims and metrics are reserved strictly for third-party audited results.
                  </p>
                </div>
                <span className="self-start sm:self-auto text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 border border-border text-muted bg-bg rounded-[2px]">
                  Zero Unverified Figures
                </span>
              </div>

              {/* 3 Pillars of Practical Experience without invented numbers */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-muted leading-relaxed">
                <div className="border border-border p-5 bg-bg rounded-none flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-accent text-[11px] font-bold block mb-1">
                      01 / PRACTICE
                    </span>
                    <h3 className="font-heading font-bold text-ink text-sm mb-2">
                      Audience Research
                    </h3>
                    <p>
                      Designing campaigns around geographic radius boundaries, local spending habits, and commercial demand across Bhopal.
                    </p>
                  </div>
                  <div className="pt-3 mt-4 border-t border-border/60 text-[10px] font-mono text-muted">
                    Standard Operational Policy
                  </div>
                </div>

                <div className="border border-border p-5 bg-bg rounded-none flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-accent text-[11px] font-bold block mb-1">
                      02 / PRACTICE
                    </span>
                    <h3 className="font-heading font-bold text-ink text-sm mb-2">
                      Creative Adaptation
                    </h3>
                    <p>
                      Iterating static feed banners and vertical Reels formats tailored to Meta Ads Manager placement guidelines.
                    </p>
                  </div>
                  <div className="pt-3 mt-4 border-t border-border/60 text-[10px] font-mono text-muted">
                    Standard Operational Policy
                  </div>
                </div>

                <div className="border border-border p-5 bg-bg rounded-none flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-accent text-[11px] font-bold block mb-1">
                      03 / PRACTICE
                    </span>
                    <h3 className="font-heading font-bold text-ink text-sm mb-2">
                      Transparent Spend
                    </h3>
                    <p>
                      Itemizing Meta advertising spend separately from agency management fees on all starter and growth tiers.
                    </p>
                  </div>
                  <div className="pt-3 mt-4 border-t border-border/60 text-[10px] font-mono text-muted">
                    Standard Operational Policy
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {/* Claims Policy Note */}
        <Reveal delayMs={120}>
          <div className="border border-border p-4 sm:p-5 bg-bg text-xs text-muted leading-relaxed">
            <span className="font-semibold text-ink uppercase tracking-wider block mb-1 font-mono text-[11px]">
              Commercial Claims Policy
            </span>
            <p>{proofData.claimsNotice}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
