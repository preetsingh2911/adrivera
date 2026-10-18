export interface ProcessStep {
  step: string;
  title: string;
  summary: string;
  description: string;
}

export const processData = {
  eyebrow: '07 / Process',
  headline: 'A Clear Process. No Guesswork.',
  leadText:
    'Advertising is a systematic feedback loop, not an overnight switch. We follow an orderly four-step cadence to configure, observe, and refine your campaigns.',
  steps: [
    {
      step: '01',
      title: 'Understand',
      summary: 'Learn about the business, target customers, service area, offer, and goals.',
      description:
        'We review your service territory in Bhopal, your unit economics, what offers bring customers through the door, and whether your primary focus is immediate enquiries or local recognition.',
    },
    {
      step: '02',
      title: 'Plan and Launch',
      summary: 'Select campaign objectives, target audience, ad creative, and placements.',
      description:
        'We configure your Meta ad sets with appropriate geographic and demographic parameters, produce the included creative deliverables, and deploy with exact budget allocations.',
    },
    {
      step: '03',
      title: 'Monitor and Improve',
      summary: 'Review results and make optimizations according to package scope.',
      description:
        'We evaluate how local audiences respond, watch CPC and engagement trends, test variations in eligible plans, and address performance drops proactively.',
    },
    {
      step: '04',
      title: 'Report and Decide',
      summary: 'Explain performance, identify lessons, and recommend next actions.',
      description:
        'At the end of each monthly cycle, we review the exact advertising spend, actual metrics delivered, what worked, and determine whether to refine, maintain, or scale.',
    },
  ] as ProcessStep[],
  footnote:
    'Campaign optimization is an ongoing learning process rather than a guarantee of linear month-over-month improvements.',
};
