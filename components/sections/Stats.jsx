'use client';

import { useEffect, useRef } from 'react';

const stats = [
  { value: 100, suffix: '+', label: 'Projets livrés' },
  { value: 15, suffix: '+', label: "Années d'expertise" },
  { value: 10, suffix: ' ans', label: 'Garantie' },
  { value: 48, suffix: 'h', label: 'Devis' },
];

export default function Stats() {
  const ref = useRef(null);

  useEffect(() => {
    let ctx;
    (async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const root = ref.current;
        if (!root) return;
        const items = root.querySelectorAll('[data-stat]');
        const nums = root.querySelectorAll('[data-stat-num]');
        const lines = root.querySelectorAll('[data-stat-line]');

        gsap.fromTo(
          items,
          { y: 24, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', stagger: 0.1,
            scrollTrigger: { trigger: root, start: 'top 85%' },
          }
        );

        nums.forEach((n) => {
          const target = Number(n.dataset.statNum);
          const obj = { v: 0 };
          gsap.to(obj, {
            v: target,
            duration: 1.4,
            ease: 'power2.out',
            onUpdate: () => { n.textContent = Math.round(obj.v); },
            scrollTrigger: { trigger: root, start: 'top 85%' },
          });
        });

        gsap.fromTo(
          lines,
          { width: 0 },
          {
            width: 32, duration: 0.7, ease: 'power2.out', delay: 0.4,
            scrollTrigger: { trigger: root, start: 'top 85%' },
          }
        );
      });
    })();
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section className="bg-white border-y border-line" aria-label="Chiffres clés">
      <div ref={ref} className="container-x grid grid-cols-2 md:grid-cols-4 divide-x divide-line">
        {stats.map((s) => (
          <div key={s.label} data-stat className="py-14 px-6 text-center">
            <div className="font-display text-4xl md:text-5xl font-medium text-ink tracking-tight">
              <span data-stat-num data-stat-num={s.value}>0</span>
              <span>{s.suffix}</span>
            </div>
            <span data-stat-line className="block h-[2px] bg-accent mx-auto mt-4" style={{ width: 0 }} />
            <div className="text-[11px] text-muted mt-4 uppercase tracking-[0.2em] font-medium">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
