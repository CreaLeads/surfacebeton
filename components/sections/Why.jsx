'use client';

import { useEffect, useRef } from 'react';
import SectionHeading from '@/components/SectionHeading';

const items = [
  {
    n: '01',
    title: 'Matériaux premium certifiés',
    desc: 'Résines et produits sélectionnés auprès des meilleurs fabricants européens. Traçabilité et conformité complète.',
  },
  {
    n: '02',
    title: 'Garantie décennale',
    desc: "Notre engagement qualité couvre l'ensemble de nos installations pendant 10 ans.",
  },
  {
    n: '03',
    title: 'Applicateurs qualifiés',
    desc: 'Une équipe formée aux dernières techniques de préparation et de mise en œuvre.',
  },
  {
    n: '04',
    title: 'Service client réactif',
    desc: 'Devis sous 48h, chantiers planifiés, suivi personnalisé et service après-vente rapide.',
  },
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
            { x: i % 2 === 0 ? -40 : 40, opacity: 0 },
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
    <section className="py-28 bg-editorial" aria-label="Pourquoi choisir SurfaceBéton">
      <div className="container-x">
        <SectionHeading
          label="Nos engagements"
          title="Une exigence qui ne se négocie pas."
          subtitle="Quatre principes qui guident chacune de nos interventions et font la différence sur le long terme."
        />

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              data-why-card
              className="bg-white border border-line p-9 rounded-lg hover:shadow-card-hover transition-all group"
            >
              <div className="font-display italic text-3xl text-accent/70 mb-6 group-hover:text-accent transition-colors">
                {it.n}
              </div>
              <h3 className="font-display text-[19px] font-medium text-ink mb-4 leading-tight tracking-tight">
                {it.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
