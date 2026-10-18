import { EnquirySection } from '@/components/EnquirySection';
import { PageIntro } from '@/components/PageIntro';
import { PageShell } from '@/components/PageShell';

export default function ContactPage() {
  return (
    <PageShell>
      <PageIntro
        index="05"
        eyebrow="Baat Karein"
        headline="Aap business sambhaliye, online visibility hum sambhalenge."
        description="Apne business, location aur goal ke baare mein batayiye. Hum evaluate karenge ki kaunsa campaign approach aapke liye suitable ho sakta hai."
        quote="Aaj hi business se brand banne ka pehla kadam uthaiye."
      />
      <EnquirySection />
    </PageShell>
  );
}
