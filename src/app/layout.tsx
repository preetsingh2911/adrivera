import type { Metadata } from 'next';
import { Inter, Manrope, IBM_Plex_Mono, Noto_Sans_Devanagari } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/content/site';
import { cn } from "@/lib/utils";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { ThemeProvider } from '@/components/ThemeProvider';



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

const siteUrl = 'https://adrivera.store';

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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
  },
  manifest: '/site.webmanifest',
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
      suppressHydrationWarning
      className={cn(inter.variable, manrope.variable, ibmPlexMono.variable, notoDevanagari.variable)}
    >
      <head>
        <meta name="color-scheme" content="light" />
        <meta name="darkreader-lock" content="true" />
        {/* Google-compliant Favicon Tags */}
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('adrivera-theme');
                  var supportDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var isDark = stored === 'dark' || (stored === 'system' && supportDark);
                  if (isDark) {
                    document.documentElement.classList.add('dark');
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning className="bg-bg text-ink min-h-screen antialiased selection:bg-tint selection:text-ink">
        <ThemeProvider>
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

        {/* Global Smooth Cursor from Magic UI */}
        <SmoothCursor />

        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
