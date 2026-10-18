export interface TrustContent {
  eyebrow: string;
  headline: string;
  promiseParagraphs: string[];
  agencyResponsibilities: string[];
  customerResponsibilities: string[];
  commitmentNote: string;
}

export const trustContent: TrustContent = {
  eyebrow: '11 / Accountability',
  headline: 'Honest Advertising. Clear Accountability.',
  promiseParagraphs: [
    'Our responsibility is to manage your advertising professionally, configure campaigns appropriately, monitor performance, and make improvements within your selected plan.',
    'Your business results also depend on factors beyond advertising, including product quality, pricing, competition, customer experience, offer quality, and your ability to convert enquiries into sales.',
    'We do not guarantee a fixed number of leads, sales, revenue, or return on advertising spend. We do commit to transparent communication, clear reporting, and the agreed advertising work.',
  ],
  agencyResponsibilities: [
    'The agreed campaign setup.',
    'Appropriate targeting and placement configuration.',
    'The included creative deliverables.',
    'Monitoring and optimization according to the plan.',
    'Reporting and communicating campaign performance.',
  ],
  customerResponsibilities: [
    'Providing accurate information about their business.',
    'Supplying product or service details, pricing, and offers.',
    'Responding to customer enquiries promptly.',
    'Maintaining product quality and customer service.',
    'Approving creative materials and complying with applicable business requirements.',
  ],
  commitmentNote:
    'This clear separation of responsibilities ensures honest expectations, mutual accountability, and a disciplined approach to local performance advertising in Bhopal.',
};

export const promisesData = trustContent;
