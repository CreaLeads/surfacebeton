'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function FinalCTA() {
  const ref = useRef(null);

  useEffect(() => {
    let ctx;
    (async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.fromTo(
          '[data-cta-fade]',
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.7, ease: 'power2.out', stagger: 0.12,
            scrollTrigger: { trigger: ref.current, start: 'top 85%' },
          }
        );
      }, ref);
    })();
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden cta-gradient text-white">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: 'url(/resine-mat-salon.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay',
        }}
        aria-hidden="true"
      />
      <div className="container-x text-center relative">
        <div data-cta-fade className="eyebrow !text-accent mb-6 justify-center">Passons à l'action</div>
        <h2 data-cta-fade className="font-display text-white leading-[1.05] tracking-tight mb-6"
            style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
          Prêt à transformer <span className="italic-serif text-accent">vos sols</span> ?
        </h2>
        <p data-cta-fade className="text-lg text-white/70 mb-10 max-w-xl mx-auto leading-relaxed">
          Devis gratuit sous 48h — étude de votre projet, conseils techniques et estimation détaillée.
        </p>
        <div data-cta-fade>
          <Link href="/contact" className="inline-flex bg-accent text-white font-semibold px-9 py-4 rounded-md animate-pulse-subtle">
            Demander un devis gratuit →
          </Link>
        </div>
      </div>
    </section>
  );
}
