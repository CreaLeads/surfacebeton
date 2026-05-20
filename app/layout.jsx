import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata = {
  title: 'SurfaceBéton — Revêtements de sols en résine en Île-de-France',
  description:
    'Spécialiste des revêtements de sols haut de gamme en résine polyuréthane et époxy. Intervention en Île-de-France.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-white text-navy">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
