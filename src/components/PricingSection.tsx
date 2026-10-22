"use client";

import React, { useState } from "react";
import { pricingPlans } from "@/content/plans";
import { siteConfig } from "@/content/site";
import { ScrollReveal } from "./ScrollReveal";

export function PricingSection() {
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);

  const handleContactPlan = (planId: string) => {
    const plan = pricingPlans.find((item) => item.id === planId);
    if (!plan || typeof window === "undefined") return;

    const message = `Hi ADrivera, I'm interested in the ${plan.name} Plan for ${plan.priceDisplay}/month. Please share the next steps.`;

    if (
      siteConfig.contact.isWhatsappVerified &&
      siteConfig.contact.whatsappNumberPlaceholder
    ) {
      const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumberPlaceholder}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      return;
    }

    window.dispatchEvent(
      new CustomEvent("adrivera-select-plan", { detail: { plan: plan.id } }),
    );
    document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="pricing"
      className="scroll-mt-20 border-b border-border bg-bg py-20 sm:py-24 md:py-28"
    >
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-12 max-w-3xl sm:mb-16">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-eyebrow text-muted">
              03 / Pricing
            </span>
            <h2 className="mb-4 font-heading text-3xl font-extrabold leading-tight tracking-tighter text-ink sm:text-4xl md:text-5xl">
              Shuruaat chhoti rakhiye. Business ko grow karne ka mauka dijiye.
            </h2>
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              Apne budget aur business ki zaroorat ke hisaab se plan chuniye.
              Displayed monthly price hi total package price hai; campaign scope
              aur budget allocation purchase se pehle clearly discuss kiye jate
              hain.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan, index) => {
            const isExpanded = expandedPlan === plan.id;
            const isGrowth = plan.id === "growth";

            return (
              <article
                key={plan.id}
                className={`motion-card flex h-full flex-col border bg-card p-5 shadow-sm sm:p-6 ${
                  isGrowth
                    ? "border-accent bg-accent/[0.04] dark:bg-accent/[0.1] shadow-[0_14px_34px_rgba(40,91,255,0.12)] ring-1 ring-accent/20 lg:-translate-y-2"
                    : "border-border"
                }`}
              >
                <div className="flex flex-1 flex-col">
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <div>
                      <span className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-wider text-muted">
                        Plan 0{index + 1}
                      </span>
                      <h3 className="font-heading text-2xl font-extrabold tracking-tight text-ink">
                        {plan.name}
                      </h3>
                    </div>
                    {isGrowth && (
                      <span className="border border-accent/40 bg-accent/[0.1] px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-accent">
                        Recommended Plan
                      </span>
                    )}
                  </div>

                  <div className="mb-5 border-y border-border py-4">
                    <div className="flex flex-wrap items-baseline gap-1.5">
                      <span className="font-heading text-3xl font-extrabold tracking-tight text-ink tabular-nums">
                        {plan.priceDisplay}
                      </span>
                      <span className="text-xs font-medium text-muted">
                        {plan.billingPeriod}
                      </span>
                    </div>
                    <span className="mt-1 block font-mono text-[10px] uppercase tracking-wider text-muted">
                      Total monthly package
                    </span>
                  </div>

                  <p className="mb-5 min-h-[66px] text-sm leading-relaxed text-muted">
                    {plan.subtitle}
                  </p>

                  <div className="mb-6 border-l-2 border-accent bg-tint/45 p-4">
                    <span className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-wider text-accent">
                      Ye Plan Kiske Liye Best Hai?
                    </span>
                    <h4 className="mb-2 font-heading text-base font-bold leading-snug text-ink">
                      {plan.bestForLabel}
                    </h4>
                    <p className="mb-3 text-xs leading-relaxed text-ink/80">
                      {plan.bestForDescription}
                    </p>
                    <ul className="mb-3 space-y-1.5 text-xs leading-snug text-ink/90">
                      {plan.bestForExamples.map((example) => (
                        <li key={example} className="flex items-start gap-2">
                          <span
                            className="mt-1.5 h-1 w-1 flex-shrink-0 bg-accent"
                            aria-hidden="true"
                          />
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="border-t border-accent/20 pt-3 text-xs font-medium leading-relaxed text-ink">
                      {plan.bestForMessage}
                    </p>
                  </div>

                  <ul className="mb-6 space-y-3 text-sm text-ink/90">
                    {plan.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2.5">
                        <span
                          className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-accent"
                          aria-hidden="true"
                        />
                        <span className="leading-snug">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div
                    id={`${plan.id}-details`}
                    aria-hidden={!isExpanded}
                    className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-out ${
                      isExpanded
                        ? "mb-6 grid-rows-[1fr] opacity-100"
                        : "mb-0 grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="border-t border-border pt-5">
                        <span className="mb-3 block font-mono text-[10px] font-bold uppercase tracking-wider text-muted">
                          Full plan details
                        </span>
                        <ul className="space-y-2.5 text-xs leading-relaxed text-ink/90">
                          {plan.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-2"
                            >
                              <span
                                className="mt-1.5 h-1 w-1 flex-shrink-0 bg-accent"
                                aria-hidden="true"
                              />
                              <span>{feature}</span>
                            </li>
                          ))}
                          {plan.limits.map((limit) => (
                            <li
                              key={limit}
                              className="flex items-start gap-2 text-muted"
                            >
                              <span
                                className="mt-1.5 h-1 w-1 flex-shrink-0 bg-muted/60"
                                aria-hidden="true"
                              />
                              <span>{limit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-auto space-y-3 border-t border-border pt-5">
                  <button
                    type="button"
                    onClick={() => handleContactPlan(plan.id)}
                    className="group relative flex h-12 w-full items-center justify-center overflow-hidden rounded-md bg-gradient-to-r from-[#1E4BD9] to-[#285BFF] hover:from-[#1A42C5] hover:to-[#2250EA] border-2 border-[#1E4BD9] dark:border-[#3E74FF] px-4 font-semibold text-white transition-[transform,box-shadow,background-color,border-color,color] duration-200 hover:[box-shadow:4px_4px_rgb(21_59_184)] dark:hover:[box-shadow:4px_4px_rgb(62_116_255)] translate-x-[2px] hover:translate-x-0 translate-y-[2px] hover:translate-y-0 [box-shadow:0px_0px_transparent] active:translate-y-[2px] active:translate-x-[2px]"
                  >
                    Contact Now
                  </button>
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={`${plan.id}-details`}
                    onClick={() => setExpandedPlan(isExpanded ? null : plan.id)}
                    className="group relative flex h-11 w-full items-center justify-center overflow-hidden rounded-md border-2 border-border hover:border-accent/80 dark:border-border dark:hover:border-accent bg-card dark:bg-card/90 px-4 font-semibold text-ink dark:text-white transition-[transform,box-shadow,background-color,border-color,color] duration-200 hover:[box-shadow:4px_4px_rgba(40,91,255,0.15)] dark:hover:[box-shadow:4px_4px_rgba(62,116,255,0.3)] translate-x-[2px] hover:translate-x-0 translate-y-[2px] hover:translate-y-0 [box-shadow:0px_0px_transparent] active:translate-y-[2px] active:translate-x-[2px]"
                  >
                    {isExpanded ? "Show Less" : "Know More"}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
