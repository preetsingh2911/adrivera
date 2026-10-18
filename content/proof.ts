import { siteContent, VerifiedStat, getRenderableStats } from './site';

export interface ProofContent {
  eyebrow: string;
  headline: string;
  leadText: string;
  simplerStatement: string;
  claimsNotice: string;
}

export const proofData: ProofContent = {
  eyebrow: '02 / Experience',
  headline: 'Experience se seekha. Data ke saath improve karte hain.',
  leadText:
    'Meta Ads mein practical experience, campaign data aur local-market understanding ka use karke hum advertising decisions ko business goals ke saath align karne ki koshish karte hain.',
  simplerStatement: 'Practical Meta Ads experience aur Bhopal market ki understanding.',
  claimsNotice:
    'Commercial Claims Policy: ADrivera unverified metrics ya fake 10x claims display nahi karta. Hum genuine campaign data aur realistic reporting par focus karte hain.',
};

export { getRenderableStats };
export type { VerifiedStat };
