import React from "react";
import { Reveal } from "./ui/Reveal";

export function CampaignProofSection() {
  return (
    <Reveal delayMs={140}>
      <div className="flex items-center justify-between pb-3 border-b border-border mb-4">
        <span className="text-xs font-semibold uppercase tracking-eyebrow text-ink">
          Campaign Results
        </span>
        <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 border border-border text-muted bg-card rounded-[2px]">
          Real Growth Stories
        </span>
      </div>

      <div className="space-y-5">
        <figure className="motion-card border border-border bg-card p-2">
          <img
            src="/taskloop-analytics.png"
            alt="Taskloop analytics showing 285 thousand views and over 1,200 percent growth"
            className="block w-full h-auto"
          />
          <figcaption className="p-3 pb-2">
            <div className="flex items-baseline justify-between gap-3 mb-1">
              <span className="font-heading font-extrabold text-sm text-ink">
                Taskloop · Rishabh, Owner
              </span>
              <span className="font-mono text-xs font-bold text-positive">
                +1,240% views
              </span>
            </div>
            <p className="text-xs text-muted leading-relaxed">
              Rishabh was very happy to see the platform reach 285K views after
              the campaign.
            </p>
          </figcaption>
        </figure>

        <figure className="motion-card border border-border bg-card p-2">
          <img
            src="/bhopal-events-analytics.png"
            alt="Analytics for a Bhopal event management company showing 2.42 million views and over 1,500 percent growth"
            className="block w-full h-auto"
          />
          <figcaption className="p-3 pb-2">
            <div className="flex items-baseline justify-between gap-3 mb-1">
              <span className="font-heading font-extrabold text-sm text-ink">
                Bhopal event management company
              </span>
              <span className="font-mono text-xs font-bold text-positive">
                +1,535% views
              </span>
            </div>
            <p className="text-xs text-muted leading-relaxed">
              Harsh Tripathi was very happy with the jump to 2.42M views and the
              momentum it created.
            </p>
          </figcaption>
        </figure>
      </div>

      <div className="mt-4 border-l-2 border-accent bg-card p-4">
        <p className="font-heading font-extrabold text-base text-ink leading-tight">
          Many more businesses have seen 1000%+ growth in views.
        </p>
        <p className="text-xs text-muted leading-relaxed mt-1">
          Results vary by business, offer, audience and campaign period. We show
          the data as it is.
        </p>
      </div>
    </Reveal>
  );
}
