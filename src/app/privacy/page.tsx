import React from 'react';
import { LegalLayout, LegalReviewBadge } from '@/components/LegalLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | ADrivera Meta Ads Agency Bhopal',
  description:
    'Privacy policy for ADrivera. We operate a zero-tracking static website and maintain complete confidentiality over client advertising assets and audience data.',
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | ADrivera Meta Ads Agency Bhopal',
    description:
      'Learn how ADrivera protects client data and operates a static website with zero third-party tracking scripts.',
    url: 'https://adrivera.in/privacy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      documentNumber="POL-01"
      lastUpdated="October 2026"
    >
      <section className="space-y-4">
        <h2 className="font-heading font-bold text-xl text-ink">1. Overview and Core Principle</h2>
        <p>
          ADrivera (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is an independent performance marketing agency operating in Bhopal, Madhya Pradesh, India. We specialize in Meta advertising management for local and regional businesses.
        </p>
        <p>
          We operate under a simple, unambiguous privacy standard: we do not sell, rent, broker, or monetize your personal or commercial data. Information shared with us is used solely to evaluate advertising fit, configure approved Meta campaigns, communicate performance reports, and fulfill our agreed agency obligations.
        </p>
      </section>

      <section className="space-y-4 pt-6 border-t border-border">
        <h2 className="font-heading font-bold text-xl text-ink">2. Website Visitors and Enquiry Submissions</h2>
        <p>
          This website is built as a static application. It does not employ user tracking databases, persistent authentication cookies, or third-party CRM form interceptors:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
          <li>
            <strong>Direct Enquiry Form:</strong> When you complete the enquiry form on our website, the form does not transmit or store your inputs on any server. Instead, it client-side formats an inquiry summary and launches your device&apos;s WhatsApp application with the text pre-filled. You remain in complete control of sending the message.
          </li>
          <li>
            <strong>Web Analytics:</strong> <LegalReviewBadge /> If basic web traffic measurement is enabled in production, it will strictly utilize privacy-respecting, anonymized telemetry without cross-site tracking or profiling.
          </li>
        </ul>
      </section>

      <section className="space-y-4 pt-6 border-t border-border">
        <h2 className="font-heading font-bold text-xl text-ink">3. Client Advertising Assets and Campaign Data</h2>
        <p>
          When you enter into an active service agreement with ADrivera:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
          <li>
            We collect necessary commercial details including your business name, operating address, customer contact points, product specifications, and brand assets (logos, images, video footage).
          </li>
          <li>
            Where advertising requires access to your Meta Business Suite or ad account, we access only the operational permissions required to configure, manage, and monitor the agreed campaigns.
          </li>
          <li>
            We treat your sales figures, customer enquiry volumes, and proprietary offer terms as confidential commercial information.
          </li>
        </ul>
      </section>

      <section className="space-y-4 pt-6 border-t border-border">
        <h2 className="font-heading font-bold text-xl text-ink">4. Third-Party Advertising Platforms</h2>
        <p>
          ADrivera operates campaigns primarily across Facebook and Instagram via Meta Ads Manager, and configures lead routing to WhatsApp where appropriate. These services are owned and operated by Meta Platforms, Inc.
        </p>
        <p className="text-sm text-muted">
          Please note that your interaction with Meta platforms, audience engagement data, and WhatsApp messaging is subject to Meta&apos;s independent Privacy Policy and Terms of Service. ADrivera does not control Meta&apos;s internal data handling practices.
        </p>
      </section>

      <section className="space-y-4 pt-6 border-t border-border">
        <h2 className="font-heading font-bold text-xl text-ink">5. Compliance and Data Subject Rights</h2>
        <p>
          <LegalReviewBadge /> In compliance with the Digital Personal Data Protection Act, 2023 (DPDP Act) and applicable Indian commercial laws, you have the right to request clarification on what business data we hold, request corrections to erroneous records, or request complete deletion of your onboarding materials upon conclusion or termination of our services.
        </p>
        <p>
          <LegalReviewBadge /> Data retention schedule: Active client campaign records, reporting deliverables, and accounting invoices are retained for a period of up to 3 years following contract completion to satisfy statutory tax and financial reporting requirements in India.
        </p>
      </section>

      <section className="space-y-4 pt-6 border-t border-border">
        <h2 className="font-heading font-bold text-xl text-ink">6. Contact and Privacy Requests</h2>
        <p>
          If you have questions regarding this Privacy Policy or wish to request data deletion, please contact our team via email at{' '}
          <a href="mailto:hello@adrivera.in" className="text-accent underline font-mono">
            hello@adrivera.in
          </a>{' '}
          or write to us at ADrivera, Bhopal, Madhya Pradesh, India.
        </p>
      </section>
    </LegalLayout>
  );
}
