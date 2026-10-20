'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/content/site';
import { pricingPlans } from '@/content/plans';
import { ScrollReveal } from './ScrollReveal';

export function ContactSection() {
  const [businessName, setBusinessName] = useState('');
  const [category, setCategory] = useState('');
  const [objective, setObjective] = useState('Local Enquiries & Customers');
  const [selectedPlan, setSelectedPlan] = useState('Starter (INR 5,000/mo)');

  const handleLaunchWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      `Namaste ADrivera team,`,
      `Main apne business ke liye Meta advertising ke baare mein baat karna chahta hoon.`,
      `Business Name: ${businessName || 'Not specified'}`,
      `Category: ${category || 'Not specified'}`,
      `Main Goal: ${objective}`,
      `Selected Package: ${selectedPlan}`,
    ].join('\n');

    const url = `https://wa.me/${siteConfig.contact.whatsappNumberPlaceholder}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-b border-border bg-bg">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-eyebrow text-muted mb-3 font-mono">
              Direct Contact
            </span>
            <h2 className="font-heading font-extrabold text-ink text-3xl sm:text-4xl md:text-5xl tracking-tighter leading-snugger mb-4">
              Apne Business Ke Baare Mein Batayein.
            </h2>
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              Apne business, location aur goal ke baare mein batayiye. Hum evaluate karenge ki kaunsa campaign approach aapke liye suitable ho sakta hai.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Form: Client-Side WhatsApp Message Builder */}
          <div className="lg:col-span-7 border border-border bg-card p-6 sm:p-8 rounded-none">
            <div className="flex items-center justify-between pb-4 border-b border-border mb-6">
              <span className="text-xs font-bold uppercase tracking-eyebrow text-ink">
                Direct WhatsApp Enquiry
              </span>
              <span className="text-[10px] uppercase font-bold text-muted border border-border px-2 py-0.5 rounded-[2px] bg-bg">
                Opens in WhatsApp
              </span>
            </div>

            <form onSubmit={handleLaunchWhatsApp} className="space-y-4">
              <div>
                <label
                  htmlFor="businessName"
                  className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5"
                >
                  Business Ka Naam
                </label>
                <input
                  id="businessName"
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="Jaise: Bhopal Bakery & Café"
                  required
                  className="w-full h-12 px-3.5 text-sm bg-bg border border-border rounded-[2px] text-ink placeholder:text-muted/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="category"
                    className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5"
                  >
                    Business Category
                  </label>
                  <input
                    id="category"
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Jaise: Restaurant, Real Estate, Salon"
                    required
                    className="w-full h-12 px-3.5 text-sm bg-bg border border-border rounded-[2px] text-ink placeholder:text-muted/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                  />
                </div>

                <div>
                  <label
                    htmlFor="objective"
                    className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5"
                  >
                    Aapka Main Goal
                  </label>
                  <select
                    id="objective"
                    value={objective}
                    onChange={(e) => setObjective(e.target.value)}
                    className="w-full h-12 px-3.5 text-sm bg-bg border border-border rounded-[2px] text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                  >
                    <option value="Local Enquiries & Customers">Local Enquiries & Customers</option>
                    <option value="Store Visits & Footfall">Store Visits & Footfall</option>
                    <option value="Brand Visibility & Recognition">Brand Visibility & Recognition</option>
                    <option value="New Launch or Offer">New Launch or Offer</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="selectedPlan"
                  className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5"
                >
                  Kaunsa Plan Dekhna Chahte Hain
                </label>
                <select
                  id="selectedPlan"
                  value={selectedPlan}
                  onChange={(e) => setSelectedPlan(e.target.value)}
                  className="w-full h-12 px-3.5 text-sm bg-bg border border-border rounded-[2px] text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                >
                  {pricingPlans.map((p) => (
                    <option key={p.id} value={`${p.name} (${p.priceDisplay}/mo)`}>
                      {p.name} — {p.priceDisplay}/month
                    </option>
                  ))}
                  <option value="General Consultation">Not Sure — Need Advice</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="group relative flex h-12 w-full items-center justify-center overflow-hidden rounded-md bg-linear-to-r bg-gradient-to-r dark:from-[#070e41] dark:to-[#263381] from-[#f6f7ff] to-[#f5f6ff] dark:border-[rgb(76_100_255)] border-2 border-[#263381] px-6 font-medium text-foreground dark:text-white transition-all duration-100 hover:[box-shadow:5px_5px_rgb(38_51_129)] translate-x-[3px] hover:translate-x-[0px] translate-y-[3px] hover:translate-y-[0px] [box-shadow:0px_0px_rgb(38_51_129)] dark:hover:[box-shadow:5px_5px_rgb(76_100_255)] dark:active:[box-shadow:0px_0px_rgb(76_100_255)] active:[box-shadow:0px_0px_rgb(38_51_129)] active:translate-y-[3px] active:translate-x-[3px] cursor-pointer"
                >
                  WhatsApp Par Details Bhejein
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Direct Info & Verification Status */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border border-border bg-card p-6 sm:p-8 rounded-none">
              <span className="text-xs font-bold uppercase tracking-eyebrow text-muted block mb-4">
                Operating Territory & Desk
              </span>
              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-xs text-muted block uppercase tracking-wider">Agency Territory</span>
                  <span className="font-semibold text-ink">{siteConfig.location}</span>
                </div>
                <div>
                  <span className="text-xs text-muted block uppercase tracking-wider">Email Communication</span>
                  <span className="font-mono text-ink text-xs">{siteConfig.contact.emailPlaceholder}</span>
                </div>
                <div>
                  <span className="text-xs text-muted block uppercase tracking-wider">WhatsApp Line</span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-mono text-ink text-xs">
                      {siteConfig.contact.whatsappNumberFormatted}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-muted border border-border px-1.5 py-0.5 bg-bg rounded-[2px]">
                      Desk Line
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Note */}
            <div className="border border-border p-5 bg-tint/30 text-xs text-muted leading-relaxed">
              <span className="font-bold text-ink uppercase tracking-wider block mb-1">
                ADrivera Assurance
              </span>
              Koi hidden charges nahi, agreed budget ke sath transparent ad spend aur clear campaign reporting.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
