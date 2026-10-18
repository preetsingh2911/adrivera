import React from 'react';
import { servicesData } from '@/content/services';
import { ScrollReveal } from './ScrollReveal';

export function ServicesSection() {
  return (
    <section id="what-we-do" className="py-20 sm:py-24 md:py-28 border-b border-border bg-bg">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-eyebrow text-muted mb-4">
              {servicesData.eyebrow}
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-ink tracking-tighter leading-tight mb-4">
              {servicesData.headline}
            </h2>
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              {servicesData.leadText}
            </p>
          </div>
        </ScrollReveal>

        {/* Seven-Row Table Layout with 1px Rules */}
        <div className="border-y border-border divide-y divide-border bg-white">
          {servicesData.items.map((item, idx) => (
            <ScrollReveal key={item.number} delayMs={idx * 30}>
              <div className="motion-card py-6 sm:py-7 px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-baseline md:hover:bg-tint/50 transition-colors duration-150">
                {/* Left: Number & Service Name */}
                <div className="md:col-span-5 lg:col-span-4 flex items-baseline gap-4 sm:gap-6">
                  <span className="font-mono text-xs sm:text-sm font-bold text-accent tracking-wider flex-shrink-0">
                    {item.number}
                  </span>
                  <h3 className="font-heading font-bold text-ink text-lg sm:text-xl tracking-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Right: Plain-Language Description */}
                <div className="md:col-span-7 lg:col-span-8 pl-8 md:pl-0">
                  <p className="text-sm sm:text-base text-ink/85 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
