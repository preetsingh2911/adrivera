import type { Metadata } from 'next';
import { Inter, Manrope, IBM_Plex_Mono, Noto_Sans_Devanagari } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/content/site';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600'],
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
  weight: ['600', '800'],
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
  preload: false,
  fallback: ['ui-monospace', 'monospace'],
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ['devanagari'],
  variable: '--font-hindi',
  display: 'swap',
  weight: ['400', '500'],
  preload: false,
  fallback: ['sans-serif'],
});

const siteUrl = 'https://adrivera.in';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'ADrivera | Meta Ads Agency in Bhopal | Facebook & Instagram Ads Management',
    template: '%s | ADrivera',
  },
  description:
    'ADrivera is a Meta Ads agency in Bhopal helping local businesses grow with transparent Facebook and Instagram ads management. Clear monthly packages with ad spend included.',
  keywords: [
    'Meta Ads agency in Bhopal',
    'Facebook and Instagram ads management',
    'Social media advertising for local businesses',
    'Facebook Ads management in Bhopal',
    'Instagram Ads agency Bhopal',
    'Performance marketing agency Bhopal',
    'Local business advertising Bhopal',
    'Social media marketing agency Bhopal',
  ],
  authors: [{ name: siteConfig.brandName, url: siteUrl }],
  creator: siteConfig.brandName,
  publisher: siteConfig.brandName,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ADrivera | Meta Ads Agency in Bhopal',
    description:
      'Professional Facebook and Instagram ads management for local businesses in Bhopal. Transparent monthly plans with Meta ad spend included.',
    url: siteUrl,
    siteName: siteConfig.brandName,
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ADrivera - Meta Ads Agency in Bhopal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADrivera | Meta Ads Agency in Bhopal',
    description:
      'Professional Facebook and Instagram ads management for local businesses in Bhopal. Transparent monthly plans with Meta ad spend included.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Structured Data: Only supplied fields. Address and phone are intentionally omitted as street address and verified phone are unset.
const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['ProfessionalService', 'LocalBusiness'],
  name: siteConfig.brandName,
  url: siteUrl,
  description:
    'Meta Ads agency in Bhopal providing Facebook and Instagram ads management and social media advertising for local businesses.',
  image: `${siteUrl}/og-image.png`,
  priceRange: 'INR 5000 - 16000+',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Bank Transfer, UPI',
  areaServed: {
    '@type': 'City',
    name: 'Bhopal',
    containedInPlace: {
      '@type': 'State',
      name: 'Madhya Pradesh',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} ${ibmPlexMono.variable} ${notoDevanagari.variable}`}
    >
      <body className="bg-bg text-ink min-h-screen antialiased selection:bg-tint selection:text-ink">
        {/* Skip to Main Content Link for Keyboard and Screen Reader Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-ink focus:text-white focus:outline-2 focus:outline-accent text-xs font-mono font-semibold uppercase tracking-wider"
        >
          Skip to main content
        </a>

        {/* LocalBusiness / ProfessionalService JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />

        {children}
      </body>
    </html>
  );
}
