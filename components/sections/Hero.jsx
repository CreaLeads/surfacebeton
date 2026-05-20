'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const bgRef = useRef(null);

  useEffect(() => {
    let ctx;
    (async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      gsap.config({ force3D: true });

      ctx = gsap.context(() => {
        if (bgRef.current) {
          gsap.to(bgRef.current, {
            yPercent: 18,
            ease: 'none',
            scrollTrigger: {
              trigger: bgRef.current.parentElement,
              start: 'top top',
              end: 'bottom top',
              scrub: 0.5,
            },
          });
        }
      });
    })();
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section className="relative h-screen min-h-[640px] flex items-center overflow-hidden pt-[72px]">
      <div
        ref={bgRef}
        className="absolute inset-0 -z-10 will-change-transform"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy/80 via-navy/70 to-navy/85" />

      <div className="container-x w-full">
        <div className="hero-fade hero-fade-1 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-white text-xs tracking-wider uppercase mb-7">
          <span className="text-accent">●</span> Certifié Meta Blueprint · Île-de-France
        </div>

        <h1 className="hero-fade hero-fade-2 font-serif font-semibold text-white leading-[1.04] tracking-tight max-w-5xl mb-6"
            style={{ fontSize: 'clamp(40px, 7vw, 72px)' }}>
          Le sol qui transforme<br />
          <span className="text-accent italic">vos espaces</span>
        </h1>

        <p className="hero-fade hero-fade-3 text-lg md:text-xl text-white/85 max-w-2xl mb-10 leading-relaxed font-light">
          Spécialiste des revêtements de sols haut de gamme en résine
          polyuréthane et époxy. Intervention en Île-de-France.
        </p>

        <div className="hero-fade hero-fade-4 flex flex-wrap gap-4">
          <Link href="/contact" className="btn-primary">
            Demander un devis gratuit
          </Link>
          <Link href="/realisations" className="btn-outline">
            Voir nos réalisations
          </Link>
        </div>
      </div>
    </section>
  );
}
