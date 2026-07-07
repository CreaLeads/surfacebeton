'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function DistributionTeaser() {
  const ref = useRef(null);

  useEffect(() => {
    let ctx;
    (async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.fromTo(
          '[data-thermic-fade]',
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.7, ease: 'power2.out', stagger: 0.1,
            scrollTrigger: { trigger: ref.current, start: 'top 82%' },
          }
        );
      }, ref);
    })();
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section ref={ref} id="thermicroof" className="py-28 bg-editorial" aria-label="Peinture thermique ThermicRoof">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div data-thermic-fade className="tag-num mb-3">05 · Produit exclusif</div>
            <div data-thermic-fade className="eyebrow">Peinture thermique · Cool Roof</div>
            <h2 data-thermic-fade className="h-display mb-6">
              <span className="italic-serif text-accent">ThermicRoof</span> — la peinture thermique haute performance.
            </h2>
            <p data-thermic-fade className="section-subtitle mb-8">
              Peinture réflective nouvelle génération : jusqu'à <strong className="text-ink">30°C</strong> de réduction
              sur toitures industrielles et commerciales, économies d'énergie mesurées et
              protection étanchéité durable.
            </p>

            <ul data-thermic-fade className="space-y-3 mb-9">
              <li className="flex items-start gap-3 text-[15px]">
                <span className="text-accent font-bold mt-1">✓</span>
                <span>Réduction jusqu'à <strong>-30°C</strong> en surface</span>
              </li>
              <li className="flex items-start gap-3 text-[15px]">
                <span className="text-accent font-bold mt-1">✓</span>
                <span>Économie moyenne de <strong>-25% sur la climatisation</strong></span>
              </li>
              <li className="flex items-start gap-3 text-[15px]">
                <span className="text-accent font-bold mt-1">✓</span>
                <span>Protection étanchéité renforcée · Résistance UV extrême</span>
              </li>
              <li className="flex items-start gap-3 text-[15px]">
                <span className="text-accent font-bold mt-1">✓</span>
                <span>Applicable sur bac acier, membrane, béton, bitume</span>
              </li>
            </ul>

            <div data-thermic-fade className="flex flex-wrap gap-4">
              <Link href="/distribution" className="btn-primary">
                Découvrir ThermicRoof
              </Link>
              <Link href="/contact?solution=ThermicRoof" className="btn-outline-dark">
                Demander un devis
              </Link>
            </div>
          </div>

          <div data-thermic-fade className="relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden border border-line shadow-premium">
              <img
                src="/industrie-parfumerie.jpg"
                alt="Toiture industrielle traitée à la peinture thermique ThermicRoof Cool Roof"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white border border-line rounded-lg shadow-card p-6 max-w-[220px]">
              <div className="font-display italic text-accent text-4xl leading-none">-30°C</div>
              <div className="text-xs text-muted uppercase tracking-widest mt-2">Réduction thermique</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
