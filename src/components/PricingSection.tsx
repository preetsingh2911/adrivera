'use client';

import React from 'react';
import {
  pricingPlans,
  pricingComparisonFeatures,
  pricingTransparencyRules,
  formatAllocation,
} from '@/content/plans';
import { siteConfig } from '@/content/site';
import { ScrollReveal } from './ScrollReveal';

export function PricingSection() {
  const handleSelectPlan = (planId: string) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('adrivera-select-plan', { detail: { plan: planId } })
      );
    }
  };

  return (
    <section id="pricing" className="py-20 sm:py-24 md:py-28 border-b border-border bg-bg">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-eyebrow text-muted mb-4">
              08 / Pricing
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-ink tracking-tighter leading-tight mb-4">
              Simple Pricing. Advertising Included.
            </h2>
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              Choose a monthly plan based on the level of advertising support your business needs.
              Every listed package includes an allocated Meta advertising budget and ADrivera&apos;s service fee.
            </p>
          </div>
        </ScrollReveal>

        {/* Four Plan Columns on Desktop, Stacked on Mobile — 1px Borders, 0 Radius */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-border divide-y md:divide-y-0 md:divide-x divide-border bg-white mb-16 rounded-none">
          {pricingPlans.map((plan, idx) => {
            const isStarter = plan.id === 'starter';
            const hasFixedSplit = plan.adSpend !== null && plan.serviceFee !== null;

            return (
              <div
                key={plan.id}
                className={`p-6 sm:p-8 flex flex-col justify-between h-full rounded-none relative ${
                  isStarter ? 'border-t-4 border-t-accent' : ''
                }`}
              >
                <div>
                  {/* Starter Emphasis Text Label (Plain text, not a pill) */}
                  {isStarter ? (
                    <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider block mb-2">
                      Best place to begin
                    </span>
                  ) : (
                    <span className="font-mono text-xs font-semibold text-muted uppercase tracking-wider block mb-2">
                      Plan 0{idx + 1}
                    </span>
                  )}

                  {/* Plan Name */}
                  <h3 className="font-heading font-extrabold text-ink text-2xl sm:text-3xl tracking-tight mb-2">
                    {plan.name}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xs text-muted leading-relaxed mb-6 min-h-[34px]">
                    {plan.subtitle}
                  </p>

                  {/* Total Price Large with Tabular Numerals */}
                  <div className="mb-6 pb-6 border-b border-border">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-heading font-extrabold text-ink text-3xl sm:text-4xl tracking-tight tabular-nums">
                        {plan.priceDisplay}
                      </span>
                      <span className="text-xs text-muted font-medium">
                        {plan.billingPeriod}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-muted block mt-1">
                      Total package price (All-inclusive)
                    </span>
                  </div>

                  {/* Allocation Bar */}
                  <div className="mb-6 p-4 bg-bg border border-border rounded-none">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted block mb-2.5">
                      Package Allocation
                    </span>

                    {hasFixedSplit ? (
                      <div>
                        {/* Horizontal split rectangle: ad spend in accent, service fee in ink */}
                        <div className="w-full h-3 border border-border flex mb-2.5 bg-white">
                          <div
                            className="bg-accent h-full"
                            style={{
                              width: `${((plan.adSpend || 0) / plan.totalPrice) * 100}%`,
                            }}
                            title={`Meta Ad Spend: ₹${plan.adSpend?.toLocaleString('en-IN')}`}
                          />
                          <div
                            className="bg-ink h-full"
                            style={{
                              width: `${((plan.serviceFee || 0) / plan.totalPrice) * 100}%`,
                            }}
                            title={`ADrivera Service Fee: ₹${plan.serviceFee?.toLocaleString('en-IN')}`}
                          />
                        </div>

                        {/* Rupee amounts labelled under each segment */}
                        <div className="flex justify-between items-center text-[11px] font-mono">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 bg-accent inline-block flex-shrink-0" />
                            <span className="text-ink font-semibold">
                              Ad: ₹{plan.adSpend?.toLocaleString('en-IN')}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 bg-ink inline-block flex-shrink-0" />
                            <span className="text-ink font-semibold">
                              Fee: ₹{plan.serviceFee?.toLocaleString('en-IN')}
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div>
                        {/* Hatched outline bar (single-color diagonal lines, not a gradient) */}
                        <div className="w-full h-3 border border-border relative bg-white overflow-hidden mb-2">
                          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <pattern
                                id={`hatch-${plan.id}`}
                                width="6"
                                height="6"
                                patternTransform="rotate(45 0 0)"
                                patternUnits="userSpaceOnUse"
                              >
                                <line
                                  x1="0"
                                  y1="0"
                                  x2="0"
                                  y2="6"
                                  stroke="#101A35"
                                  strokeWidth="1.5"
                                  strokeOpacity="0.35"
                                />
                              </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill={`url(#hatch-${plan.id})`} />
                          </svg>
                        </div>
                        <span className="text-[11px] font-mono text-muted block italic">
                          Allocation confirmed before purchase
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Included Scope Highlights */}
                  <div className="mb-6">
                    {plan.purposeTagline && (
                      <p
                        lang="hi-Latn"
                        className="text-xs text-ink font-normal leading-relaxed mb-4 p-2.5 bg-tint/30 border-l-2 border-accent"
                      >
                        {plan.purposeTagline}
                      </p>
                    )}
                    <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-ink block mb-3">
                      Included Scope
                    </span>
                    <ul className="space-y-2.5 text-xs text-ink/90">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <svg
                            className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5"
                            viewBox="0 0 16 16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          >
                            <polyline points="3 8 7 12 13 4" strokeLinecap="square" />
                          </svg>
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Limits and Constraints */}
                  {plan.limits.length > 0 && (
                    <div className="mb-6 pt-4 border-t border-border/70">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted block mb-2">
                        Scope Limits
                      </span>
                      <ul className="space-y-1.5 text-[11px] text-muted">
                        {plan.limits.map((limit, lIdx) => (
                          <li key={lIdx} className="flex items-start gap-1.5">
                            <span className="text-muted/60 flex-shrink-0">—</span>
                            <span>{limit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Card CTA: Opens Enquiry flow with that plan preselected */}
                <div className="pt-6 border-t border-border">
                  <a
                    href={`#enquiry?plan=${plan.id}`}
                    onClick={() => handleSelectPlan(plan.id)}
                    className={`flex items-center justify-center min-h-[48px] w-full px-4 text-sm font-semibold rounded-[2px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${
                      isStarter
                        ? 'bg-accent text-white hover:bg-[#1E4BD9] active:bg-[#153BB8]'
                        : 'border border-ink text-ink bg-transparent hover:bg-ink/5'
                    }`}
                  >
                    {plan.ctaLabel}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Full Comparison Table (Features by Plan) with Sticky First Column on Mobile */}
        <ScrollReveal delayMs={100}>
          <div className="mb-16">
            <div className="mb-4">
              <span className="font-mono uppercase text-xs tracking-wider text-muted font-semibold block mb-1">
                Feature Matrix
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-ink tracking-tight">
                Plan Comparison
              </h3>
            </div>

            {/* Horizontal scroll contained inside its own wrapper */}
            <div className="overflow-x-auto border border-border bg-white rounded-none">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-border bg-bg/80">
                    <th className="sticky left-0 bg-bg z-10 border-r border-border p-4 text-xs font-mono font-bold uppercase tracking-wider text-muted w-1/3">
                      Plan Feature
                    </th>
                    <th className="border-r border-border p-4 text-xs font-mono font-bold uppercase tracking-wider text-accent bg-accent/[0.04]">
                      Starter
                    </th>
                    <th className="border-r border-border p-4 text-xs font-mono font-bold uppercase tracking-wider text-ink">
                      Growth
                    </th>
                    <th className="border-r border-border p-4 text-xs font-mono font-bold uppercase tracking-wider text-ink">
                      Premium
                    </th>
                    <th className="p-4 text-xs font-mono font-bold uppercase tracking-wider text-ink">
                      Custom
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-xs sm:text-sm">
                  {pricingComparisonFeatures.map((row, idx) => (
                    <tr key={idx} className="hover:bg-bg/40 transition-colors">
                      {/* Sticky First Column on Mobile */}
                      <td className="sticky left-0 bg-white z-10 border-r border-border p-4 font-medium text-ink">
                        <div>{row.name}</div>
                        <span className="font-mono text-[10px] text-muted uppercase">
                          {row.category}
                        </span>
                      </td>
                      <td className="border-r border-border p-4 text-ink font-semibold bg-accent/[0.02]">
                        {row.starter}
                      </td>
                      <td className="border-r border-border p-4 text-ink">
                        {row.growth}
                      </td>
                      <td className="border-r border-border p-4 text-ink">
                        {row.premium}
                      </td>
                      <td className="p-4 text-ink">
                        {row.custom}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        {/* How the Price Is Made Up Block — 7 Transparency Requirements */}
        <ScrollReveal delayMs={140}>
          <div className="border border-border bg-white p-6 sm:p-10 rounded-none mb-8">
            <div className="mb-6 pb-4 border-b border-border">
              <span className="font-mono uppercase text-xs tracking-wider text-muted font-semibold block mb-1">
                Commercial Standards
              </span>
              <h3 className="font-heading font-extrabold text-2xl text-ink tracking-tight">
                How the Price Is Made Up
              </h3>
              <p className="text-xs sm:text-sm text-muted mt-1">
                ADrivera operates under strict pricing transparency. We never invent arbitrary retainers or obscure your ad spend.
              </p>
            </div>

            <ol className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              {pricingTransparencyRules.map((rule, idx) => (
                <li key={idx} className="flex items-start gap-3 p-3 bg-bg/50 border border-border/80">
                  <span className="font-mono text-xs font-bold text-accent mt-0.5 flex-shrink-0">
                    0{idx + 1}
                  </span>
                  <span className="text-ink/90 leading-relaxed font-normal">
                    {rule}
                  </span>
                </li>
              ))}
            </ol>

            {/* Placeholder Note Slot for Tax Disclosure from Config */}
            <div className="mt-8 pt-4 border-t border-border flex items-start gap-3 text-xs text-muted">
              <span className="w-1.5 h-1.5 bg-ink/40 inline-block mt-1.5 flex-shrink-0" />
              <p className="leading-relaxed">
                <span className="font-semibold text-ink">Tax Disclosure Note: </span>
                {siteConfig.disclaimers.taxNotice}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
