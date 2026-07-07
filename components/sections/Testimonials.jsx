'use client';

import { useEffect, useRef } from 'react';
import SectionHeading from '@/components/SectionHeading';

const items = [
  {
    name: 'Mme Guingand',
    role: 'Particulier — Yvelines',
    text: "Un travail impeccable sur notre garage. L'équipe est professionnelle et le résultat dépasse nos attentes.",
  },
  {
    name: 'Mr Ferguson',
    role: "Gérant d'entrepôt — Val-de-Marne",
    text: "Installation rapide et efficace de résine polyuréthane dans notre entrepôt de 500 m². Excellente qualité.",
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
            { rotation: i % 2 === 0 ? -1.5 : 1.5, y: 40, opacity: 0 },
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
    <section className="py-28 bg-white" aria-label="Avis clients">
      <div className="container-x">
        <SectionHeading
          label="Avis clients"
          title="Ils nous font confiance."
          subtitle="Particuliers, industriels, gestionnaires immobiliers — la satisfaction client au cœur de notre métier."
        />

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {items.map((t) => (
            <blockquote
              key={t.name}
              data-testi-card
              className="bg-soft border border-line p-10 rounded-lg relative"
            >
              <div className="font-display italic text-6xl text-accent leading-none absolute -top-2 left-8 select-none" aria-hidden="true">"</div>
              <p className="font-display text-ink text-xl leading-relaxed mb-8 pt-4">{t.text}</p>
              <footer className="pt-5 border-t border-line">
                <div className="font-medium text-ink">{t.name}</div>
                <div className="text-sm text-muted">{t.role}</div>
                <div className="text-accent text-sm mt-2 tracking-widest">★ ★ ★ ★ ★</div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
