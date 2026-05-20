'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const links = [
  { href: '/solutions', label: 'Solutions' },
  { href: '/realisations', label: 'Réalisations' },
  { href: '/#formation', label: 'Formation' },
  { href: '/distribution', label: 'Distribution' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled
          ? 'shadow-[0_1px_0_#E2E8F0] border-b-2 border-accent'
          : 'border-b border-line'
      }`}
      style={{ height: 72 }}
    >
      <nav className="container-x flex items-center justify-between h-[72px]">
        <Link href="/" className="text-xl font-bold tracking-tight animate-logo-in">
          <span className="font-serif text-navy">Surface</span>
          <span className="font-serif text-accent">Béton</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-navy/85 hover:text-accent font-medium text-[14px] transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden lg:inline-flex bg-accent text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-accent-dark transition-all"
        >
          Demander un devis
        </Link>

        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="lg:hidden text-navy p-2"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-white border-t border-line">
          <ul className="container-x py-4 space-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-navy font-medium border-b border-line"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block text-center bg-accent text-white font-semibold py-3 rounded-md"
              >
                Demander un devis
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
