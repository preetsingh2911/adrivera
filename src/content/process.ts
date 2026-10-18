export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const processData = {
  eyebrow: '07 / Process',
  headline: 'A Clear Process. No Guesswork.',
  leadText:
    'We follow a disciplined four-step sequence to understand your business, plan and launch campaigns, monitor results, and report real performance.',
  steps: [
    {
      step: '01',
      title: 'Step 1 — Understand',
      description:
        'Learn about the business, target customers, service area, offer, and advertising goals.',
    },
    {
      step: '02',
      title: 'Step 2 — Plan and Launch',
      description:
        'Select an appropriate campaign objective, audience, creative, placement strategy, and budget allocation.',
    },
    {
      step: '03',
      title: 'Step 3 — Monitor and Improve',
      description:
        'Review results and make optimizations according to the package scope.',
    },
    {
      step: '04',
      title: 'Step 4 — Report and Decide',
      description:
        'Explain performance, identify lessons, and recommend whether the next step should be refinement, continuation, or scaling.',
    },
  ] as ProcessStep[],
  footnote:
    'Campaign optimization is an ongoing learning process rather than a guarantee of better results every month.',
};
