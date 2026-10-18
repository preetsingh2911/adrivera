import { CaseStudiesSection } from '@/components/CaseStudiesSection';
import { PageIntro } from '@/components/PageIntro';
import { PageShell } from '@/components/PageShell';
import { PlatformsSection } from '@/components/PlatformsSection';
import { ProcessSection } from '@/components/ProcessSection';
import { ProofSection } from '@/components/ProofSection';

export default function HowWeWorkPage() {
  return (
    <PageShell>
      <PageIntro
        index="02"
        eyebrow="Kaam Ka Tareeka"
        headline="Experience se seekha. Data ke saath improve karte hain."
        description="Hum sirf ads nahi chalate. Pehle aapka business, offerings aur Bhopal ke target customers ko samajhte hain, sahi audience target karte hain aur clean data ke saath campaigns improve karte hain."
        quote="Views se lekar enquiries tak—advertising data aur strategy ke saath chalti hai."
      />
      <ProcessSection />
      <PlatformsSection />
      <ProofSection />
      <CaseStudiesSection />
    </PageShell>
  );
}
