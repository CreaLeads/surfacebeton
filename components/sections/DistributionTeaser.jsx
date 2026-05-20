'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import SectionHeading from '@/components/SectionHeading';

const items = [
  { icon: '🧪', title: 'Résines', desc: 'Époxy bicomposant, polyuréthane haute résistance, primaires et vernis.' },
  { icon: '🎨', title: 'Peintures techniques', desc: 'Peinture sol époxy, marquage au sol, peinture antidérapante.' },
  { icon: '💧', title: 'Étanchéité', desc: 'Liquide, toiture-terrasse, membrane PU, anti-humidité.' },
];

export default function DistributionTeaser() {
  const gridRef = useRef(null);

  useEffect(() => {
    let ctx;
    (async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.fromTo(
          '[data-distri-card]',
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', stagger: 0.12,
            scrollTrigger: { trigger: gridRef.current, start: 'top 85%' },
          }
        );
      }, gridRef);
    })();
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section className="py-28 bg-white">
      <div className="container-x">
        <SectionHeading
          label="Distribution"
          title="Nos produits professionnels"
          subtitle="Résines, peintures techniques et systèmes d'étanchéité à prix préférentiels pour les applicateurs."
        />

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {items.map((it) => (
            <div
              key={it.title}
              data-distri-card
              className="card-base p-8 text-center"
            >
              <div className="text-4xl mb-5">{it.icon}</div>
              <h3 className="font-serif text-xl font-semibold text-navy mb-3">{it.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted mb-7">
            <span>✓ Tarifs sur devis</span>
            <span>✓ Livraison Île-de-France</span>
            <span>✓ Conseils techniques inclus</span>
          </div>
          <Link href="/distribution" className="btn-outline-navy">
            Voir tous les produits
          </Link>
        </div>
      </div>
    </section>
  );
}
