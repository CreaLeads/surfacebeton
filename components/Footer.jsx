import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container-x grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="font-serif text-2xl font-semibold mb-3">
            <span className="text-white">Surface</span>
            <span className="text-accent">Béton</span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            Spécialiste des revêtements de sols haut de gamme en Île-de-France.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-white">Solutions</h4>
          <ul className="space-y-2 text-white/70 text-sm">
            <li><Link href="/solutions#polyurethane" className="hover:text-accent">Résine Polyuréthane</Link></li>
            <li><Link href="/solutions#epoxy" className="hover:text-accent">Résine Époxy</Link></li>
            <li><Link href="/solutions#etancheite" className="hover:text-accent">Étanchéité Liquide</Link></li>
            <li><Link href="/solutions#coolroof" className="hover:text-accent">Cool Roof</Link></li>
            <li><Link href="/#formation" className="hover:text-accent">Formation</Link></li>
            <li><Link href="/distribution" className="hover:text-accent">Distribution</Link></li>
            <li>
              <a href="https://crealeads.fr" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                Marketing Digital ↗
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-white">Navigation</h4>
          <ul className="space-y-2 text-white/70 text-sm">
            <li><Link href="/" className="hover:text-accent">Accueil</Link></li>
            <li><Link href="/realisations" className="hover:text-accent">Réalisations</Link></li>
            <li><Link href="/a-propos" className="hover:text-accent">À propos</Link></li>
            <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-white">Contact</h4>
          <ul className="space-y-2 text-white/70 text-sm">
            <li>
              <a href="mailto:surfacebeton@icloud.com" className="hover:text-accent">
                surfacebeton@icloud.com
              </a>
            </li>
            <li>Île-de-France</li>
            <li>Lun-Ven 8h-18h</li>
          </ul>
        </div>
      </div>

      <div className="container-x mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
        <p>© 2025 SurfaceBéton — Tous droits réservés</p>
        <p>
          Acquisition digitale par{' '}
          <a
            href="https://crealeads.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            CreaLeads →
          </a>
        </p>
      </div>
    </footer>
  );
}
