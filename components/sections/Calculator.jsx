'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';

const resines = [
  { id: 'epoxy-uni', label: 'Époxy Uni', price: 50 },
  { id: 'epoxy-flake', label: 'Époxy Flake / Quartz', price: 60 },
  { id: 'polyurethane', label: 'Polyuréthane', price: 70 },
];

export default function Calculator() {
  const [resine, setResine] = useState(resines[0]);
  const [surface, setSurface] = useState(50);

  const total = surface * resine.price;
  const totalRef = useRef(null);
  const prev = useRef(total);

  useEffect(() => {
    let ctx;
    (async () => {
      const { gsap } = await import('gsap');
      ctx = gsap.context(() => {
        const obj = { v: prev.current };
        gsap.to(obj, {
          v: total,
          duration: 0.8,
          ease: 'power2.out',
          onUpdate: () => {
            if (totalRef.current) {
              totalRef.current.textContent = Math.round(obj.v).toLocaleString('fr-FR') + ' €';
            }
          },
          onComplete: () => { prev.current = total; },
        });
      });
    })();
    return () => ctx && ctx.revert();
  }, [total]);

  return (
    <section className="py-28 bg-soft" aria-label="Estimation en ligne">
      <div className="container-x">
        <SectionHeading
          label="Estimation en ligne"
          title="Estimez votre projet en 30 secondes."
          subtitle="Estimation indicative pour particuliers — devis précis gratuit sous 48h."
        />

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-card border border-line p-8 md:p-12">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-7 h-7 rounded-full bg-accent text-white font-semibold flex items-center justify-center text-sm">1</span>
              <h3 className="font-display text-lg text-ink">Type de résine</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {resines.map((r) => {
                const sel = resine.id === r.id;
                return (
                  <button
                    key={r.id}
                    onClick={() => setResine(r)}
                    className={`text-left p-5 rounded-md border transition-all ${
                      sel
                        ? 'border-accent bg-accent-soft scale-[1.03] shadow-card'
                        : 'border-line hover:border-ink/30'
                    }`}
                  >
                    <div className="font-semibold text-ink">{r.label}</div>
                    <div className="text-sm text-muted mt-1">à partir de {r.price}€/m²</div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-7 h-7 rounded-full bg-accent text-white font-semibold flex items-center justify-center text-sm">2</span>
              <h3 className="font-display text-lg text-ink">Surface</h3>
              <span className="ml-auto font-display text-2xl text-accent">{surface} m²</span>
            </div>
            <input
              type="range"
              min={10}
              max={200}
              step={5}
              value={surface}
              onChange={(e) => setSurface(Number(e.target.value))}
              className="w-full"
              aria-label="Surface en mètres carrés"
            />
            <div className="flex justify-between text-xs text-muted mt-2">
              <span>10 m²</span>
              <span>200 m²</span>
            </div>
          </div>

          <div className="cta-gradient text-white rounded-lg p-10 text-center">
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/70 mb-3">Estimation indicative</div>
            <div className="font-display text-5xl md:text-6xl font-medium mb-3">
              ~ <span ref={totalRef}>{total.toLocaleString('fr-FR')} €</span>
            </div>
            <div className="text-white/70 text-sm mb-6">
              {surface} m² × {resine.label} — {resine.price}€/m²
            </div>
            <p className="text-white/80 text-sm mb-7 italic">
              Estimation indicative. Devis détaillé et gratuit sous 48h.
            </p>
            <Link href="/contact" className="inline-flex bg-accent text-white font-semibold px-7 py-3.5 rounded-md hover:bg-accent-dark transition-all">
              Obtenir mon devis gratuit →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
