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
  headline: 'Built on Practical Advertising Experience.',
  leadText:
    'ADrivera applies hands-on Meta Ads experience, audience research, local-market understanding, and campaign performance analysis to help businesses make more informed advertising decisions.',
  simplerStatement: 'Built on practical, hands-on Meta Ads experience.',
  claimsNotice:
    'Commercial Claims Policy: ADrivera does not publish unverified metrics, estimated figures, or client logos without written consent. Only founder-verified campaign data is displayed.',
};

export { getRenderableStats };
export type { VerifiedStat };
