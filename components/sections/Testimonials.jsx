'use client';

import { useEffect, useRef } from 'react';
import SectionHeading from '@/components/SectionHeading';

const items = [
  {
    name: 'Mme Guingand',
    role: 'Particulier',
    text: "Un travail impeccable sur notre garage. L'équipe est professionnelle et le résultat dépasse nos attentes.",
  },
  {
    name: 'Mr Ferguson',
    role: "Gérant d'entrepôt",
    text: "Installation rapide et efficace de résine polyuréthane dans notre entrepôt de 500m². Excellente qualité.",
  },
];

export default function Testimonials() {
  const gridRef = useRef(null);

  useEffect(() => {
    let ctx;
    (async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const cards = gridRef.current.querySelectorAll('[data-testi-card]');
        cards.forEach((c, i) => {
          gsap.fromTo(
            c,
            { rotation: i % 2 === 0 ? -2 : 2, y: 40, opacity: 0 },
            {
              rotation: 0, y: 0, opacity: 1, duration: 0.8, ease: 'power2.out',
              scrollTrigger: { trigger: c, start: 'top 88%' },
            }
          );
        });
      }, gridRef);
    })();
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section className="py-28 bg-white">
      <div className="container-x">
        <SectionHeading
          label="Avis clients"
          title="Ils nous font confiance"
          subtitle="Particuliers et professionnels — la satisfaction client au cœur de notre métier."
        />

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {items.map((t) => (
            <div
              key={t.name}
              data-testi-card
              className="card-base p-10"
            >
              <div className="text-accent text-lg mb-5 tracking-widest">★ ★ ★ ★ ★</div>
              <p className="font-serif text-navy text-xl leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="pt-5 border-t border-line">
                <div className="font-semibold text-navy">{t.name}</div>
                <div className="text-sm text-muted">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
