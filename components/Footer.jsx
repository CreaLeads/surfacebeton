import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-ink text-white pt-20 pb-10 border-t border-white/5">
      <div className="container-x grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <Logo variant="light" />
          <p className="text-white/55 text-sm leading-relaxed mt-5 max-w-xs">
            Applicateurs certifiés en revêtements de sols en résine et peinture thermique.
            Île-de-France.
          </p>
        </div>

        <nav aria-label="Solutions">
          <h4 className="font-display text-white text-[15px] mb-5">Solutions</h4>
          <ul className="space-y-3 text-white/60 text-sm">
            <li><Link href="/solutions#epoxy-pu" className="hover:text-accent transition-colors">Résine Époxy & Polyuréthane</Link></li>
            <li><Link href="/solutions#decoratif" className="hover:text-accent transition-colors">Sols Décoratifs</Link></li>
            <li><Link href="/solutions#etancheite" className="hover:text-accent transition-colors">Étanchéité Liquide</Link></li>
            <li><Link href="/solutions#thermicroof" className="hover:text-accent transition-colors">ThermicRoof · Cool Roof</Link></li>
          </ul>
        </nav>

        <nav aria-label="Navigation">
          <h4 className="font-display text-white text-[15px] mb-5">Entreprise</h4>
          <ul className="space-y-3 text-white/60 text-sm">
            <li><Link href="/" className="hover:text-accent transition-colors">Accueil</Link></li>
            <li><Link href="/realisations" className="hover:text-accent transition-colors">Réalisations</Link></li>
            <li><Link href="/distribution" className="hover:text-accent transition-colors">Peinture Thermique</Link></li>
            <li><Link href="/a-propos" className="hover:text-accent transition-colors">À propos</Link></li>
            <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            <li>
              <a href="https://crealeads.fr" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                Marketing Digital ↗
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <h4 className="font-display text-white text-[15px] mb-5">Contact</h4>
          <ul className="space-y-3 text-white/60 text-sm">
            <li>
              <a href="tel:+33663675254" className="hover:text-accent transition-colors">
                06 63 67 52 54
              </a>
            </li>
            <li>
              <a href="mailto:surfacebeton@icloud.com" className="hover:text-accent transition-colors">
                surfacebeton@icloud.com
              </a>
            </li>
            <li>Île-de-France</li>
            <li className="text-white/40 text-xs mt-4">Lun-Ven 8h-18h · Sam 9h-12h</li>
          </ul>
        </div>
      </div>

      <div className="container-x mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
        <p>© {new Date().getFullYear()} SurfaceBéton — Tous droits réservés</p>
        <p>
          Acquisition digitale par{' '}
          <a href="https://crealeads.fr" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            CreaLeads →
          </a>
        </p>
      </div>
    </footer>
  );
}
