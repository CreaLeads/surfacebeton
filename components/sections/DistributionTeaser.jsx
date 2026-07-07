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
    <section ref={ref} id="thermicroof" className="py-28 bg-editorial" aria-label="ThermicRoof — Revêtement thermo-réflectif">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div data-thermic-fade className="tag-num mb-3">05 · Produit</div>
            <div data-thermic-fade className="eyebrow">Revêtement thermo-réflectif</div>
            <h2 data-thermic-fade className="h-display mb-6">
              <span className="italic-serif text-accent">THERMICROOF</span> — votre toiture travaille pour vous.
            </h2>
            <p data-thermic-fade className="section-subtitle mb-8">
              Revêtement à base d'<strong className="text-ink">aérogel de silice</strong> qui renvoie
              le rayonnement solaire en surface et freine la conduction de la chaleur dans son
              épaisseur. Une seule application, une barrière thermique complète — toiture, façade, industrie.
            </p>

            <ul data-thermic-fade className="space-y-3 mb-9">
              <li className="flex items-start gap-3 text-[15px]">
                <span className="text-accent font-bold mt-1">✓</span>
                <span><strong>-7°C</strong> à l'intérieur l'été · chaleur conservée l'hiver</span>
              </li>
              <li className="flex items-start gap-3 text-[15px]">
                <span className="text-accent font-bold mt-1">✓</span>
                <span><strong>85%</strong> de réflexion solaire · émissivité 91% · SRI 110</span>
              </li>
              <li className="flex items-start gap-3 text-[15px]">
                <span className="text-accent font-bold mt-1">✓</span>
                <span>Aérogel de silice · λ <strong>0,0955 W/m·K</strong></span>
              </li>
              <li className="flex items-start gap-3 text-[15px]">
                <span className="text-accent font-bold mt-1">✓</span>
                <span>Sans gros œuvre · pistolet Airless ou rouleau · <strong>FDES certifié INIES</strong></span>
              </li>
            </ul>

            <div data-thermic-fade className="flex flex-wrap gap-4">
              <Link href="/distribution" className="btn-primary">
                Découvrir ThermicRoof
              </Link>
              <Link href="/contact?solution=ThermicRoof" className="btn-outline-dark">
                Étude thermique gratuite
              </Link>
            </div>
          </div>

          <div data-thermic-fade className="relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden border border-line shadow-premium">
              <img
                src="/industrie-parfumerie.jpg"
                alt="Toiture industrielle traitée avec le revêtement thermo-réflectif ThermicRoof"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white border border-line rounded-lg shadow-card p-6 max-w-[240px]">
              <div className="font-display italic text-accent text-4xl leading-none">-7°C</div>
              <div className="text-xs text-muted uppercase tracking-widest mt-2">Été · à l'intérieur</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
