import { PageShell } from '@/components/PageShell';
import { PricingSection } from '@/components/PricingSection';
import { EnquirySection } from '@/components/EnquirySection';
import { FAQSection } from '@/components/FAQSection';

export default function PricingPage() {
  return (
    <PageShell>
      <PricingSection />
      <FAQSection />
      <EnquirySection />
    </PageShell>
  );
}
