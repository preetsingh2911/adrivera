'use client';

import React, { useState, useEffect } from 'react';
import {
  businessCategories,
  primaryObjectives,
  planOptions,
  EnquiryFormData,
  buildWhatsAppMessage,
} from '@/content/enquiry';
import { siteConfig } from '@/content/site';
import { ScrollReveal } from './ScrollReveal';

export function EnquirySection() {
  const [formData, setFormData] = useState<EnquiryFormData>({
    businessName: '',
    category: 'retail',
    location: 'Bhopal, Madhya Pradesh',
    objective: 'leads',
    preferredPlan: 'starter',
    contactName: '',
    phone: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [composedMessage, setComposedMessage] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  // Sync plan preselection from URL params or custom event
  useEffect(() => {
    const handlePlanSelect = (planId: string) => {
      const match = planOptions.find((p) => p.value === planId.toLowerCase());
      if (match) {
        setFormData((prev) => ({ ...prev, preferredPlan: match.value }));
      }
    };

    const checkUrlParams = () => {
      if (typeof window === 'undefined') return;
      const params = new URLSearchParams(window.location.search);
      const planParam = params.get('plan');
      if (planParam) {
        handlePlanSelect(planParam);
      } else if (window.location.hash.includes('plan=')) {
        const hashParams = new URLSearchParams(window.location.hash.split('?')[1]);
        const hashPlan = hashParams.get('plan');
        if (hashPlan) handlePlanSelect(hashPlan);
      }
    };

    checkUrlParams();
    window.addEventListener('hashchange', checkUrlParams);
    window.addEventListener('popstate', checkUrlParams);

    const customEventListener = (e: Event) => {
      const customEvent = e as CustomEvent<{ plan: string }>;
      if (customEvent.detail?.plan) {
        handlePlanSelect(customEvent.detail.plan);
      }
    };

    window.addEventListener('adrivera-select-plan', customEventListener);

    return () => {
      window.removeEventListener('hashchange', checkUrlParams);
      window.removeEventListener('popstate', checkUrlParams);
      window.removeEventListener('adrivera-select-plan', customEventListener);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof EnquiryFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof EnquiryFormData, string>> = {};

    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Please enter your business or venture name.';
    }
    if (!formData.location.trim()) {
      newErrors.location = 'Please specify your business location or area in Bhopal.';
    }
    if (!formData.contactName.trim()) {
      newErrors.contactName = 'Please enter your contact name.';
    }

    const cleanPhone = formData.phone.replace(/[\s\-\+]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please provide a valid 10-digit phone or WhatsApp number.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = buildWhatsAppMessage(formData);
    setComposedMessage(message);

    const encoded = encodeURIComponent(message);
    const targetUrl = `https://wa.me/${siteConfig.contact.whatsappNumberPlaceholder}?text=${encoded}`;

    if (typeof window !== 'undefined') {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCopy = async () => {
    if (!composedMessage) return;
    try {
      await navigator.clipboard.writeText(composedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback if clipboard API is restricted
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <section id="enquiry" className="py-20 sm:py-24 md:py-28 border-b border-border bg-bg scroll-mt-20">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-eyebrow text-muted mb-4 font-mono">
              11 / Direct Enquiry
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-ink tracking-tighter leading-tight mb-4">
              Start Your Advertising Enquiry
            </h2>
            <p className="text-accent text-base sm:text-lg font-medium leading-snug mb-3" lang="hi-Latn">
              Agar aapko lagta hai ki aapka business aur grow kar sakta hai, toh shuruaat aaj hi kijiye.
            </p>
            <p className="text-muted text-base leading-relaxed">
              Fill in your business details to compose an enquiry message. When submitted, you will be directed to send the formatted message directly through WhatsApp.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Main Enquiry Form */}
          <div className="lg:col-span-7">
            <ScrollReveal delayMs={50}>
              <form
                onSubmit={handleSubmit}
                noValidate
                className="border border-border bg-white p-6 sm:p-10 rounded-none shadow-none space-y-6"
              >
                {/* Business Name */}
                <div>
                  <label
                    htmlFor="businessName"
                    className="block text-xs font-mono font-bold uppercase tracking-wider text-ink mb-2"
                  >
                    Business Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    aria-invalid={!!errors.businessName}
                    aria-describedby={errors.businessName ? 'businessName-error' : undefined}
                    placeholder="e.g. Malwa Organic Foods / City Dental Care"
                    className={`w-full min-h-[48px] px-4 text-sm bg-bg border rounded-none text-ink placeholder:text-muted/60 focus:outline-none focus:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${
                      errors.businessName ? 'border-red-600' : 'border-border'
                    }`}
                  />
                  {errors.businessName && (
                    <p id="businessName-error" className="mt-1.5 text-xs text-red-600 font-medium">
                      {errors.businessName}
                    </p>
                  )}
                </div>

                {/* Category & Location (2-col grid) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Category */}
                  <div>
                    <label
                      htmlFor="category"
                      className="block text-xs font-mono font-bold uppercase tracking-wider text-ink mb-2"
                    >
                      Business Category <span className="text-accent">*</span>
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full min-h-[48px] px-4 text-sm bg-bg border border-border rounded-none text-ink focus:outline-none focus:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                    >
                      {businessCategories.map((cat) => (
                        <option key={cat.value} value={cat.value}>
                          {cat.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Location */}
                  <div>
                    <label
                      htmlFor="location"
                      className="block text-xs font-mono font-bold uppercase tracking-wider text-ink mb-2"
                    >
                      Business Location <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      aria-invalid={!!errors.location}
                      aria-describedby={errors.location ? 'location-error' : undefined}
                      placeholder="e.g. Arera Colony, MP Nagar, Bhopal"
                      className={`w-full min-h-[48px] px-4 text-sm bg-bg border rounded-none text-ink placeholder:text-muted/60 focus:outline-none focus:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${
                        errors.location ? 'border-red-600' : 'border-border'
                      }`}
                    />
                    {errors.location && (
                      <p id="location-error" className="mt-1.5 text-xs text-red-600 font-medium">
                        {errors.location}
                      </p>
                    )}
                  </div>
                </div>

                {/* Objective & Preferred Plan (2-col grid) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Primary Objective */}
                  <div>
                    <label
                      htmlFor="objective"
                      className="block text-xs font-mono font-bold uppercase tracking-wider text-ink mb-2"
                    >
                      Primary Objective <span className="text-accent">*</span>
                    </label>
                    <select
                      id="objective"
                      name="objective"
                      value={formData.objective}
                      onChange={handleChange}
                      className="w-full min-h-[48px] px-4 text-sm bg-bg border border-border rounded-none text-ink focus:outline-none focus:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                    >
                      {primaryObjectives.map((obj) => (
                        <option key={obj.value} value={obj.value}>
                          {obj.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Plan */}
                  <div>
                    <label
                      htmlFor="preferredPlan"
                      className="block text-xs font-mono font-bold uppercase tracking-wider text-ink mb-2"
                    >
                      Preferred Plan <span className="text-accent">*</span>
                    </label>
                    <select
                      id="preferredPlan"
                      name="preferredPlan"
                      value={formData.preferredPlan}
                      onChange={handleChange}
                      className="w-full min-h-[48px] px-4 text-sm bg-bg border border-border rounded-none text-ink focus:outline-none focus:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                    >
                      {planOptions.map((plan) => (
                        <option key={plan.value} value={plan.value}>
                          {plan.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Contact Name & Phone (2-col grid) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Contact Name */}
                  <div>
                    <label
                      htmlFor="contactName"
                      className="block text-xs font-mono font-bold uppercase tracking-wider text-ink mb-2"
                    >
                      Your Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      aria-invalid={!!errors.contactName}
                      aria-describedby={errors.contactName ? 'contactName-error' : undefined}
                      placeholder="e.g. Rajesh Sharma"
                      className={`w-full min-h-[48px] px-4 text-sm bg-bg border rounded-none text-ink placeholder:text-muted/60 focus:outline-none focus:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${
                        errors.contactName ? 'border-red-600' : 'border-border'
                      }`}
                    />
                    {errors.contactName && (
                      <p id="contactName-error" className="mt-1.5 text-xs text-red-600 font-medium">
                        {errors.contactName}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-mono font-bold uppercase tracking-wider text-ink mb-2"
                    >
                      Phone / WhatsApp Number <span className="text-accent">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                      placeholder="e.g. 98260 00000"
                      className={`w-full min-h-[48px] px-4 text-sm bg-bg border rounded-none text-ink placeholder:text-muted/60 focus:outline-none focus:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${
                        errors.phone ? 'border-red-600' : 'border-border'
                      }`}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="mt-1.5 text-xs text-red-600 font-medium">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center min-h-[50px] px-6 text-sm font-semibold text-white bg-accent hover:bg-[#1E4BD9] active:bg-[#153BB8] rounded-[2px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                  >
                    Open in WhatsApp &amp; Send
                  </button>
                </div>

                {/* Inline Privacy Note */}
                <div className="pt-3 border-t border-border flex items-start gap-2.5 text-xs text-muted">
                  <span className="w-1.5 h-1.5 bg-ink/40 inline-block mt-1 flex-shrink-0" />
                  <p className="leading-relaxed">
                    <span className="font-semibold text-ink">Privacy Guarantee: </span>
                    No personal or commercial details are stored on our website. Submitting this form simply formats your message and opens WhatsApp so you remain in complete control of sending it.
                  </p>
                </div>
              </form>
            </ScrollReveal>
          </div>

          {/* Right Column: Information & Plain-Text Fallback Block */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal delayMs={100}>
              <div className="border border-border bg-white p-6 sm:p-8 rounded-none">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted block mb-2">
                  Transparent Next Steps
                </span>
                <h3 className="font-heading font-extrabold text-xl text-ink tracking-tight mb-4">
                  What Happens When You Enquire
                </h3>

                <ul className="space-y-3.5 text-xs sm:text-sm text-ink/85 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="font-mono text-xs font-bold text-accent flex-shrink-0 mt-0.5">01</span>
                    <span lang="hi-Latn">Hum aapki business category, Bhopal ke target customers, aur campaign goals ko review karte hain.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-mono text-xs font-bold text-accent flex-shrink-0 mt-0.5">02</span>
                    <span lang="hi-Latn">Aapke offer aur selected package ke hisaab se Meta policies aur ad strategy align karte hain.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-mono text-xs font-bold text-accent flex-shrink-0 mt-0.5">03</span>
                    <span lang="hi-Latn">Campaign live karne se pehle exact ad budget allocation aur creative setup finalize karte hain.</span>
                  </li>
                </ul>

                <div className="p-4 bg-bg border border-border text-xs text-muted leading-relaxed">
                  <span className="font-semibold text-ink">Founder Assurance: </span>
                  No sales pressure, no fabricated performance promises, and no separate agency management fees.
                </div>
              </div>
            </ScrollReveal>

            {/* Plain-text Fallback Composed Message Block */}
            {composedMessage && (
              <ScrollReveal delayMs={140}>
                <div className="border border-border bg-white p-6 sm:p-8 rounded-none">
                  <div className="flex items-center justify-between mb-3 pb-3 border-b border-border">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent">
                      Composed Message Preview
                    </span>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="px-3 py-1.5 text-xs font-mono font-semibold text-ink border border-ink hover:bg-ink/5 active:bg-ink/10 transition-colors rounded-[2px]"
                    >
                      {copied ? 'Copied!' : 'Copy Message'}
                    </button>
                  </div>

                  <pre className="font-mono text-xs text-ink/90 whitespace-pre-wrap bg-bg p-4 border border-border/80 leading-relaxed max-h-60 overflow-y-auto">
                    {composedMessage}
                  </pre>

                  <p className="mt-3 text-[11px] font-mono text-muted">
                    If WhatsApp did not launch automatically, copy this message and send it to our team.
                  </p>
                </div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
