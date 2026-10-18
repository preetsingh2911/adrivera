export interface PromiseData {
  eyebrow: string;
  headline: string;
  leadText: string;
  agencyResponsibilities: string[];
  customerResponsibilities: string[];
  disclaimerNote: string;
}

export const promisesData: PromiseData = {
  eyebrow: '10 / Accountability',
  headline: 'Honest Advertising. Clear Accountability.',
  leadText:
    'Our responsibility is to manage your advertising professionally, configure campaigns appropriately, monitor performance, and make improvements within your selected plan. Your business results also depend on factors beyond advertising.',
  agencyResponsibilities: [
    'Configuring agreed campaign structures, objectives, and parameters in Meta Ads Manager',
    'Applying appropriate geographic boundaries and audience interest targeting',
    'Producing and delivering the ad creatives included within your selected plan',
    'Monitoring campaign health, cost indicators, and delivery efficiency',
    'Optimizing audiences and budgets within the defined monthly scope',
    'Providing transparent reports detailing the exact Meta advertising spend and achieved metrics',
    'Advising on creative improvements and practical advertising next steps',
  ],
  customerResponsibilities: [
    'Providing accurate, timely information regarding products, services, and pricing',
    'Supplying brand assets, photos, or raw footage where necessary',
    'Reviewing and approving ad creative drafts within agreed timelines',
    'Responding to customer enquiries and leads promptly via WhatsApp or phone',
    'Delivering consistent product quality, pricing integrity, and good customer service',
    'Maintaining compliance with applicable business regulations and Meta trade policies',
  ],
  disclaimerNote:
    'We do not guarantee a fixed number of leads, sales, revenue, or return on advertising spend (ROAS). We commit to transparent communication, clear reporting, and delivering the agreed advertising work with professional care.',
};
