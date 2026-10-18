import React from 'react';

interface PageIntroProps {
  index: string;
  eyebrow: string;
  headline: string;
  description: string;
  quote?: string;
}

export function PageIntro({ index, eyebrow, headline, description, quote }: PageIntroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-ink py-16 text-white sm:py-20 md:py-24">
      <div className="relative mx-auto grid max-w-site grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <div className="lg:col-span-8">
          <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-eyebrow text-white/60">
            <span className="text-accent">{index}</span>
            <span className="h-px w-10 bg-white/25" />
            <span>{eyebrow}</span>
          </div>
          <h1 className="max-w-4xl font-heading text-4xl font-extrabold leading-[1.05] tracking-tightest sm:text-5xl md:text-6xl text-white">
            {headline}
          </h1>
        </div>
        <div className="flex flex-col justify-end lg:col-span-4">
          <p className="border-l-2 border-accent pl-4 text-base leading-relaxed text-white/80 sm:text-lg">
            {description}
          </p>
          {quote && (
            <p lang="hi-Latn" className="mt-6 text-xl sm:text-2xl leading-snug font-medium text-tint/90">
              &ldquo;{quote}&rdquo;
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
