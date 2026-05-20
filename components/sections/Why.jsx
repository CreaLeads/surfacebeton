'use client';

import { useEffect, useRef } from 'react';
import SectionHeading from '@/components/SectionHeading';

const items = [
  { icon: '🛡️', title: 'Matériaux premium certifiés', desc: 'Résines et produits sélectionnés auprès des meilleurs fabricants européens.' },
  { icon: '⏱️', title: 'Garantie 10 ans', desc: "Notre engagement qualité sur l'ensemble de nos installations." },
  { icon: '🔧', title: 'Équipe formée et qualifiée', desc: 'Des applicateurs expérimentés et formés aux dernières techniques.' },
  { icon: '💬', title: 'Service après-vente réactif', desc: 'Une réponse sous 48h, des interventions rapides et un suivi personnalisé.' },
];

export default function Why() {
  const gridRef = useRef(null);

  useEffect(() => {
    let ctx;
    (async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const cards = gridRef.current.querySelectorAll('[data-why-card]');
        cards.forEach((c, i) => {
          gsap.fromTo(
            c,
            { x: i % 2 === 0 ? -60 : 60, opacity: 0 },
            {
              x: 0, opacity: 1, duration: 0.7, ease: 'power2.out',
              scrollTrigger: { trigger: c, start: 'top 88%' },
            }
          );
        });
      }, gridRef);
    })();
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section className="py-28 bg-soft">
      <div className="container-x">
        <SectionHeading
          label="Nos engagements"
          title="Pourquoi SurfaceBéton"
          subtitle="Quatre piliers qui guident chacune de nos interventions."
        />

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              data-why-card
              className="card-base p-8"
            >
              <div className="text-3xl mb-5">{it.icon}</div>
              <h3 className="font-serif text-lg font-semibold text-navy mb-3 leading-snug">{it.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
