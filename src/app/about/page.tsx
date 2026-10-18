import { BrandSection } from '@/components/BrandSection';
import { PageIntro } from '@/components/PageIntro';
import { PageShell } from '@/components/PageShell';
import { TrustSection } from '@/components/TrustSection';

export default function AboutPage() {
  return (
    <PageShell>
      <PageIntro
        index="04"
        eyebrow="About ADrivera"
        headline="Sirf business mat chalao, apna brand banao."
        description="ADrivera local businesses ke liye ek independent Meta advertising partner hai. Clear communication, transparent reporting aur honest advertising expectations ke saath kaam karte hain."
        quote="Aaj local ho, kal apne sheher ka jaana-maana brand banne ki direction mein badho."
      />
      <BrandSection />
      <TrustSection />
    </PageShell>
  );
}
