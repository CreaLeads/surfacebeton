import { Manrope, Fraunces } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

const SITE_URL = 'https://surfacebeton.fr';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'SurfaceBéton — Résine époxy, polyuréthane & Cool Roof en Île-de-France',
    template: '%s | SurfaceBéton',
  },
  description:
    "Spécialiste des revêtements de sols en résine époxy et polyuréthane, sols décoratifs, étanchéité liquide et peinture thermique ThermicRoof. Devis gratuit sous 48h en Île-de-France.",
  keywords: [
    'résine époxy',
    'sol résine',
    'sol résine décoratif',
    'résine polyuréthane',
    'revêtement de sol résine',
    'résine professionnel',
    'cool roof',
    'peinture thermique',
    'étanchéité liquide',
    'sol garage résine',
    'sol industriel résine',
    'applicateur résine Île-de-France',
    'SurfaceBéton',
  ],
  authors: [{ name: 'SurfaceBéton' }],
  creator: 'SurfaceBéton',
  publisher: 'SurfaceBéton',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: SITE_URL,
    siteName: 'SurfaceBéton',
    title: 'SurfaceBéton — Revêtements de sols en résine haut de gamme',
    description:
      "Résine époxy & polyuréthane, sols décoratifs, étanchéité liquide, peinture thermique Cool Roof. Interventions professionnelles en Île-de-France.",
    images: [
      {
        url: '/hero.jpg',
        width: 1600,
        height: 900,
        alt: 'Sol résine époxy métallique — réalisation SurfaceBéton',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SurfaceBéton — Résine époxy & polyuréthane en Île-de-France',
    description:
      "Applicateurs certifiés — résine, sols décoratifs, étanchéité liquide, Cool Roof ThermicRoof.",
    images: ['/hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
};

export const viewport = {
  themeColor: '#0A0E1A',
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#business`,
  name: 'SurfaceBéton',
  image: `${SITE_URL}/hero.jpg`,
  url: SITE_URL,
  telephone: '',
  email: 'surfacebeton@icloud.com',
  priceRange: '€€',
  description:
    "Spécialiste des revêtements de sols en résine époxy et polyuréthane, sols décoratifs, étanchéité liquide et peinture thermique en Île-de-France.",
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Île-de-France',
    addressCountry: 'FR',
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Île-de-France' },
    { '@type': 'AdministrativeArea', name: 'Paris' },
    { '@type': 'AdministrativeArea', name: 'Hauts-de-Seine' },
    { '@type': 'AdministrativeArea', name: 'Yvelines' },
    { '@type': 'AdministrativeArea', name: 'Val-de-Marne' },
    { '@type': 'AdministrativeArea', name: 'Seine-Saint-Denis' },
    { '@type': 'AdministrativeArea', name: 'Essonne' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '12:00',
    },
  ],
  makesOffer: [
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Résine époxy & polyuréthane', description: 'Sols techniques en résine époxy et polyuréthane pour particuliers, professionnels et industriels.' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sols décoratifs — flake, quartz, effet marbré', description: 'Sols décoratifs haut de gamme pour intérieurs, garages, terrasses.' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Étanchéité liquide', description: 'Étanchéité liquide sans joint pour toitures-terrasses, balcons, parkings.' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Peinture thermique Cool Roof — ThermicRoof', description: 'Peinture thermique réflective ThermicRoof — réduction jusqu\'à 30°C sur toitures.' } },
  ],
  sameAs: [],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${manrope.variable} ${fraunces.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-white text-ink">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded">
          Aller au contenu
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
