'use client';

import Link from 'next/link';
import Reveal from '@/components/Reveal';

const items = [
  { icon: '🧪', title: 'Résines Époxy', desc: 'Intérieur · finitions mates, satinées, brillantes' },
  { icon: '🔶', title: 'Résines Polyuréthane', desc: 'Trafic intensif, extérieur, garages' },
  { icon: '🎨', title: 'Accessoires & Effets', desc: 'Flakes, quartz coloré, finition métallique' },
];

export default function Distribution() {
  return (
    <section className="py-24 bg-white">
      <div className="container-x">
        <div className="text-center mb-16">
          <h2 className="section-title">Fourniture de Résines Pro</h2>
          <p className="section-subtitle">
            Produits professionnels époxy et polyuréthane disponibles à prix
            préférentiels pour les applicateurs.
          </p>
        </div>

        <Reveal stagger={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {items.map((it) => (
            <div
              key={it.title}
              data-reveal-item
              className="bg-soft p-8 rounded-2xl border border-slate-100 hover:border-accent/40 hover:shadow-lg transition-all text-center"
            >
              <div className="text-5xl mb-4">{it.icon}</div>
              <h3 className="text-xl font-bold text-navy mb-2">{it.title}</h3>
              <p className="text-sm text-muted">{it.desc}</p>
            </div>
          ))}
        </Reveal>

        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted mb-6">
            <span>✓ Prix pro</span>
            <span>✓ Livraison IDF</span>
            <span>✓ Conseils techniques inclus</span>
          </div>
          <Link href="/distribution" className="btn-primary">
            Demander un tarif pro
          </Link>
        </div>
      </div>
    </section>
  );
}
