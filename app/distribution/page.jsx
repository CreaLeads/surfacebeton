'use client';

import { useEffect, useRef } from 'react';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';

const categories = [
  {
    icon: '🧪',
    title: 'Résines',
    items: [
      'Résine Époxy bicomposant (sols intérieurs)',
      'Résine Polyuréthane haute résistance (trafic intensif)',
      "Primaire d'accroche époxy",
      'Vernis de finition (mat, satiné, brillant)',
    ],
  },
  {
    icon: '🎨',
    title: 'Peintures techniques',
    items: [
      'Peinture sol époxy (garages, ateliers)',
      'Peinture de marquage au sol',
      'Peinture antidérapante',
    ],
  },
  {
    icon: '💧',
    title: 'Étanchéité',
    items: [
      'Étanchéité liquide monocomposant',
      'Étanchéité toiture-terrasse',
      "Membrane d'étanchéité polyuréthane",
      "Traitement anti-humidité par injection",
    ],
  },
];

export default function DistributionPage() {
  const gridRef = useRef(null);

  useEffect(() => {
    let ctx;
    (async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.fromTo(
          '[data-cat-card]',
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.7, ease: 'power2.out', stagger: 0.12,
            scrollTrigger: { trigger: gridRef.current, start: 'top 85%' },
          }
        );
      }, gridRef);
    })();
    return () => ctx && ctx.revert();
  }, []);

  const mailto = `mailto:surfacebeton@icloud.com?subject=${encodeURIComponent('Demande de tarif pro — Distribution')}`;

  return (
    <>
      <PageHeader
        title="Nos Produits Professionnels"
        subtitle="SurfaceBéton fournit les professionnels et artisans en résines, peintures techniques et systèmes d'étanchéité de qualité industrielle."
        breadcrumb="Distribution"
      />

      <section className="py-28 bg-white">
        <div className="container-x">
          <SectionHeading
            label="Catalogue"
            title="Une gamme professionnelle complète"
            subtitle="Trois familles de produits sélectionnés pour leur performance et leur durabilité."
          />

          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((c) => (
              <div
                key={c.title}
                data-cat-card
                className="card-base p-8 flex flex-col"
              >
                <div className="text-4xl mb-5">{c.icon}</div>
                <h3 className="font-serif text-xl font-semibold text-navy mb-5">{c.title}</h3>
                <ul className="space-y-2.5 text-sm text-navy/85 mb-7 flex-1">
                  {c.items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5">
                      <span className="text-accent mt-1 shrink-0">✓</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-5 border-t border-line">
                  <p className="text-xs text-muted italic mb-4">
                    Tarifs sur devis — réservé aux professionnels
                  </p>
                  <a
                    href={mailto}
                    className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Demander un tarif pro →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-soft">
        <div className="container-x">
          <SectionHeading
            label="Conditions"
            title="Avantages professionnels"
            subtitle="Une relation de confiance pour vos approvisionnements."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {[
              { icon: '💰', t: 'Tarifs sur devis' },
              { icon: '🚚', t: 'Livraison Île-de-France' },
              { icon: '📞', t: 'Conseils techniques' },
              { icon: '📦', t: 'Commande minimum 5L' },
            ].map((b) => (
              <div key={b.t} className="bg-white p-6 text-center border border-line rounded-md">
                <div className="text-2xl mb-2">{b.icon}</div>
                <div className="font-medium text-navy text-sm">{b.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 cta-gradient text-white text-center">
        <div className="container-x">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-5">
            Demandez votre tarif pro
          </h2>
          <p className="text-white/75 mb-9 max-w-xl mx-auto">
            Recevez nos tarifs préférentiels sous 48h. Précisez vos volumes et l'usage prévu.
          </p>
          <a href={mailto} className="inline-flex bg-accent text-white font-semibold px-8 py-4 rounded-md animate-pulse-subtle">
            Demander un tarif pro →
          </a>
        </div>
      </section>
    </>
  );
}
