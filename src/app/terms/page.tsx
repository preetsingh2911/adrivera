import React from 'react';
import { LegalLayout, LegalReviewBadge } from '@/components/LegalLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | ADrivera Meta Ads Management',
  description:
    'Terms of service and working standards for social media advertising and Meta Ads management with ADrivera in Bhopal. Independent agency terms and clear scope.',
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: 'Terms of Service | ADrivera Meta Ads Management',
    description:
      'Commercial terms, client responsibilities, and campaign scope for Facebook and Instagram advertising managed by ADrivera.',
    url: 'https://adrivera.in/terms',
  },
};

export default function TermsOfServicePage() {
  return (
    <LegalLayout
      title="Terms of Service"
      documentNumber="TOS-01"
      lastUpdated="October 2026"
    >
      <section className="space-y-4">
        <h2 className="font-heading font-bold text-xl text-ink">1. Nature of Services and Independence</h2>
        <p>
          ADrivera provides performance marketing, campaign architecture, creative development, and optimization management for advertising running primarily on Facebook and Instagram.
        </p>
        <div className="p-4 bg-bg border border-border text-xs sm:text-sm font-medium text-ink">
          <strong>Mandatory Non-Affiliation Statement:</strong> ADrivera is an independent performance marketing agency and is not affiliated with, sponsored by, authorized by, or endorsed by Meta Platforms, Inc. Facebook, Instagram, and WhatsApp are registered trademarks of Meta Platforms, Inc.
        </div>
      </section>

      <section className="space-y-4 pt-6 border-t border-border">
        <h2 className="font-heading font-bold text-xl text-ink">2. Explicit Non-Guarantee of Results</h2>
        <div className="p-4 bg-bg border border-border text-xs sm:text-sm font-medium text-ink">
          <strong>Mandatory Results Disclaimer:</strong> ADrivera does not guarantee a fixed number of leads, customers, sales, revenue, store visits, or return on advertising spend (ROAS).
        </div>
        <p>
          Advertising delivers audience reach, impressions, and clicks to your designated business channel. Commercial outcomes and finalized sales depend entirely on variables beyond any agency&apos;s control, including your product quality, pricing, competitor activity, customer service, offer appeal, and the speed and skill with which your business team responds to customer enquiries.
        </p>
      </section>

      <section className="space-y-4 pt-6 border-t border-border">
        <h2 className="font-heading font-bold text-xl text-ink">3. Transparent All-Inclusive Package Pricing</h2>
        <p>
          ADrivera operates under published all-inclusive monthly package pricing:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
          <li>
            <strong>Total Package Price:</strong> The monthly price displayed on our website is the total amount due for that package.
          </li>
          <li>
            <strong>Transparent Scope:</strong> Campaign scope, budget allocation, management, and creative service deliverables are discussed and agreed before purchase.
          </li>
          <li>
            <strong>No Hidden Agency Add-ons:</strong> No separate agency management fee or hidden percentage surcharge is added on top of the agreed package price.
          </li>
          <li>
            <strong>Statutory Taxes:</strong> <LegalReviewBadge /> Quoted fees are exclusive of applicable Indian Goods and Services Tax (GST) unless explicitly noted on the commercial invoice.
          </li>
        </ul>
      </section>

      <section className="space-y-4 pt-6 border-t border-border">
        <h2 className="font-heading font-bold text-xl text-ink">4. Scope Limits and Creative Allowances</h2>
        <p>
          Each package carries clearly defined operational boundaries to preserve high-quality execution:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
          <li>
            <strong>Starter Plan:</strong> Includes setup, targeting, routine monitoring, monthly reporting, and 1 primary ad creative. Does not include in-person meetings, continuous creative replacement, or video production.
          </li>
          <li>
            <strong>Growth Plan:</strong> Includes weekly reviews, AI-assisted video production, 1 in-person meeting per month in Bhopal, and a defined monthly creative allowance of approximately 2 to 3 creative variations or replacements.
          </li>
          <li>
            <strong>Premium &amp; Custom:</strong> Scoped individually before contract confirmation. We do not offer unlimited work promises under any plan.
          </li>
        </ul>
      </section>

      <section className="space-y-4 pt-6 border-t border-border">
        <h2 className="font-heading font-bold text-xl text-ink">5. Customer Obligations and Approvals</h2>
        <p>
          To maintain an effective campaign schedule, the customer agrees to:
        </p>
        <ol className="list-decimal pl-5 space-y-2 text-sm sm:text-base">
          <li>Provide accurate business information, offer details, and product pricing.</li>
          <li>Supply necessary brand assets, product photos, or store footage within agreed timelines.</li>
          <li>Review and approve creative drafts promptly prior to campaign launch.</li>
          <li>Respond immediately to customer inquiries generated via WhatsApp or phone.</li>
          <li>Maintain all required municipal trade licenses, professional registrations, and regulatory permissions for their advertised goods and services in Bhopal.</li>
        </ol>
      </section>

      <section className="space-y-4 pt-6 border-t border-border">
        <h2 className="font-heading font-bold text-xl text-ink">6. Intellectual Property and Content Rights</h2>
        <p>
          <LegalReviewBadge /> Client retains ownership of all pre-existing trade names, logos, customer lists, and photographic materials provided to ADrivera. Upon full payment of the monthly invoice, the client receives a non-exclusive license to use the final ad creative assets produced by ADrivera solely for the duration of the advertising campaign.
        </p>
      </section>

      <section className="space-y-4 pt-6 border-t border-border">
        <h2 className="font-heading font-bold text-xl text-ink">7. Governing Law and Jurisdiction</h2>
        <p>
          <LegalReviewBadge /> These Terms of Service and any commercial engagement with ADrivera shall be governed by and construed in accordance with the laws of India. Any legal disputes arising out of or in connection with these services shall be subject to the exclusive jurisdiction of the competent courts in Bhopal, Madhya Pradesh, India.
        </p>
      </section>
    </LegalLayout>
  );
}
