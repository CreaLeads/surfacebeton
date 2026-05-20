'use client';

import { useEffect, useRef } from 'react';

const stats = [
  { value: 100, suffix: '+', label: 'Projets réalisés' },
  { value: 15, suffix: '+', label: "Années d'expertise" },
  { value: 10, suffix: ' ans', label: 'Garantie' },
  { value: 48, suffix: 'h', label: 'Délai de réponse' },
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
          { y: 30, opacity: 0 },
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
            width: 40, duration: 0.7, ease: 'power2.out', delay: 0.4,
            scrollTrigger: { trigger: root, start: 'top 85%' },
          }
        );
      });
    })();
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section className="border-y border-line bg-white">
      <div ref={ref} className="container-x grid grid-cols-2 md:grid-cols-4 divide-x divide-line">
        {stats.map((s) => (
          <div key={s.label} data-stat className="py-12 px-6 text-center">
            <div className="font-serif text-4xl md:text-5xl font-semibold text-navy tracking-tight">
              <span data-stat-num data-stat-num={s.value}>0</span>
              <span>{s.suffix}</span>
            </div>
            <span data-stat-line className="block h-[2px] bg-accent mx-auto mt-3" style={{ width: 0 }} />
            <div className="text-xs md:text-sm text-muted mt-3 uppercase tracking-wider">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
