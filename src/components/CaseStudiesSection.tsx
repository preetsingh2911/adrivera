import React from 'react';
import { caseStudiesData } from '@/content/caseStudies';
import { ScrollReveal } from './ScrollReveal';

export function CaseStudiesSection() {
  const verifiedEntries = caseStudiesData.entries.filter((e) => e.status === 'verified');
  const displayEntries = verifiedEntries.length > 0 ? verifiedEntries : caseStudiesData.entries;
  const isIllustrative = verifiedEntries.length === 0;

  return (
    <section id="case-studies" className="py-20 sm:py-24 md:py-28 border-b border-border bg-bg">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-eyebrow text-muted mb-4">
              {caseStudiesData.eyebrow}
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-ink tracking-tighter leading-tight mb-4">
              {caseStudiesData.headline}
            </h2>
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              {caseStudiesData.leadText}
            </p>
          </div>
        </ScrollReveal>

        {/* Notice Banner when showing Illustrative Example */}
        {isIllustrative && (
          <ScrollReveal delayMs={50}>
            <div className="mb-8 border border-border border-l-4 border-l-accent p-5 sm:p-6 bg-white rounded-none">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider">
                  Illustrative Framework &amp; Sample Reporting
                </span>
              </div>
              <p className="text-xs sm:text-sm text-ink/80 leading-relaxed font-normal">
                {caseStudiesData.statusPolicyNote} Below is an educational campaign breakdown demonstrating how ADrivera measures, evaluates, and presents advertising performance data.
              </p>
            </div>
          </ScrollReveal>
        )}

        {/* Ruled Data Table for Each Case Study Entry */}
        <div className="space-y-12 mb-16">
          {displayEntries.map((study, idx) => (
            <ScrollReveal key={study.id} delayMs={idx * 60}>
              <div className="border border-border bg-white rounded-none">
                {/* Entry Header: Category, Ownership & Plain-text Status Tag */}
                <div className="p-6 sm:p-8 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-bg/50">
                  <div>
                    <span className="font-mono text-xs text-muted uppercase tracking-wider block mb-1">
                      {study.category} &bull; {study.ownership === 'founder-owned' ? 'Founder-Managed Venture' : 'Client Campaign'}
                    </span>
                    <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-ink tracking-tight">
                      {study.title}
                    </h3>
                  </div>

                  {/* Plain-text status tag (not a pill) */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="w-2 h-2 bg-accent inline-block" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink">
                      {study.status === 'verified' ? 'Verified Client Data' : 'Illustrative Example (Sample Data)'}
                    </span>
                  </div>
                </div>

                {/* Core Parameters Bar */}
                <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-border divide-y sm:divide-y-0 sm:divide-x divide-border bg-white text-xs sm:text-sm">
                  <div className="p-4 sm:p-6">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted block mb-1">
                      Campaign Objective
                    </span>
                    <span className="font-medium text-ink">{study.objective}</span>
                  </div>
                  <div className="p-4 sm:p-6">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted block mb-1">
                      Campaign Duration
                    </span>
                    <span className="font-medium text-ink">{study.duration}</span>
                  </div>
                  <div className="p-4 sm:p-6">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted block mb-1">
                      Platform Ad Spend
                    </span>
                    <span className="font-mono font-bold text-accent">{study.spend}</span>
                  </div>
                </div>

                {/* Ruled Performance Metrics Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                      <tr className="border-b border-border bg-bg/40 text-[11px] font-mono uppercase text-muted tracking-wider">
                        <th className="p-4 border-r border-border">Total Views (Impressions)</th>
                        <th className="p-4 border-r border-border">Unique Reach</th>
                        <th className="p-4 border-r border-border">Link Clicks</th>
                        <th className="p-4 border-r border-border">Cost Per Click (CPC)</th>
                        <th className="p-4">Customer Enquiries</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="divide-x divide-border font-mono text-sm sm:text-base text-ink tabular-nums">
                        <td className="p-4 font-semibold">{study.impressions}</td>
                        <td className="p-4 font-semibold">{study.reach}</td>
                        <td className="p-4 font-semibold">{study.clicks}</td>
                        <td className="p-4 font-semibold text-accent">{study.cpc}</td>
                        <td className="p-4 font-semibold">{study.enquiries}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Campaign Context & Qualitative Notes */}
                <div className="p-6 sm:p-8 border-t border-border bg-bg/20">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-muted block mb-2">
                    Campaign Context &amp; Operational Observations
                  </span>
                  <p className="text-xs sm:text-sm text-ink/85 leading-relaxed font-normal">
                    {study.contextNotes}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Short Note on Metric Definitions */}
        <ScrollReveal delayMs={120}>
          <div className="border border-border bg-white p-6 sm:p-8 rounded-none">
            <div className="mb-6 pb-3 border-b border-border flex items-center justify-between">
              <span className="font-mono uppercase text-xs tracking-wider text-muted font-bold">
                Metric Standard &amp; Evaluation Guide
              </span>
              <span className="text-[11px] font-mono text-muted">No Invented Growth Figures</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {caseStudiesData.definitions.map((def, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent inline-block flex-shrink-0" />
                    <h4 className="font-heading font-bold text-sm text-ink">
                      {def.term}
                    </h4>
                  </div>
                  <p className="text-xs text-muted leading-relaxed pl-3.5">
                    {def.explanation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
