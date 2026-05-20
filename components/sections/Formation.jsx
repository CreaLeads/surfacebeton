'use client';

import { useEffect, useRef } from 'react';

export default function Formation() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    let ctx;
    (async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        if (bgRef.current) {
          gsap.to(bgRef.current, {
            yPercent: 12,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.5,
            },
          });
        }

        gsap.fromTo(
          '[data-form-fade]',
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.7, ease: 'power2.out', stagger: 0.12,
            scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
          }
        );

        gsap.fromTo(
          '[data-form-day]',
          { x: -40, opacity: 0 },
          {
            x: 0, opacity: 1, duration: 0.6, ease: 'power2.out', stagger: 0.15,
            scrollTrigger: { trigger: '[data-form-program]', start: 'top 85%' },
          }
        );
      }, sectionRef);
    })();
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="formation" className="relative py-28 overflow-hidden bg-accent text-white">
      <div
        ref={bgRef}
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 30%, white 0%, transparent 60%), radial-gradient(circle at 80% 70%, white 0%, transparent 50%)',
        }}
      />
      <div className="container-x relative">
        <div className="text-center mb-12">
          <span data-form-fade className="inline-block bg-white/15 backdrop-blur px-4 py-1.5 rounded-sm text-[11px] font-semibold tracking-widest uppercase mb-5">
            Prochaine session
          </span>
          <h2 data-form-fade className="font-serif text-4xl md:text-5xl font-semibold mb-4 leading-tight">
            Formation Résine Décorative<br />— 3 jours
          </h2>
          <p data-form-fade className="text-lg text-white/90">
            24, 25 &amp; 26 Juin 2026 · Paris / Versailles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12 max-w-5xl mx-auto">
          <div data-form-fade className="bg-white/10 backdrop-blur p-7 text-center rounded-lg border border-white/10">
            <div className="text-3xl mb-3">📚</div>
            <div className="font-semibold">21h de formation pratique</div>
          </div>
          <div data-form-fade className="bg-white/10 backdrop-blur p-7 text-center rounded-lg border border-white/10">
            <div className="text-3xl mb-3">👥</div>
            <div className="font-semibold">10 à 15 stagiaires max</div>
          </div>
          <div data-form-fade className="bg-white/10 backdrop-blur p-7 text-center rounded-lg border border-white/10">
            <div className="text-3xl mb-3">✅</div>
            <div className="font-semibold">Tout inclus</div>
            <div className="text-sm text-white/80">matériel, résine, déjeuners</div>
          </div>
        </div>

        <div data-form-program className="bg-white/10 backdrop-blur p-8 md:p-10 rounded-lg border border-white/10 max-w-5xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-serif text-xl font-semibold mb-5">Programme</h3>
              <ul className="space-y-4 text-white/90">
                <li data-form-day className="flex gap-4">
                  <span className="font-serif text-2xl font-semibold text-white/60 leading-none">01</span>
                  <div>
                    <div className="font-semibold">Jour 1</div>
                    <div className="text-sm text-white/75">Matériaux, outils &amp; supports</div>
                  </div>
                </li>
                <li data-form-day className="flex gap-4">
                  <span className="font-serif text-2xl font-semibold text-white/60 leading-none">02</span>
                  <div>
                    <div className="font-semibold">Jour 2</div>
                    <div className="text-sm text-white/75">Mise en œuvre sur chantier</div>
                  </div>
                </li>
                <li data-form-day className="flex gap-4">
                  <span className="font-serif text-2xl font-semibold text-white/60 leading-none">03</span>
                  <div>
                    <div className="font-semibold">Jour 3</div>
                    <div className="text-sm text-white/75">Approche marché &amp; rentabilité</div>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold mb-5">Inclus dans la formation</h3>
              <ul className="space-y-2 text-white/90 text-sm">
                <li>✓ Certificat de participation</li>
                <li>✓ Kit photo chantier</li>
                <li>✓ Trame de devis</li>
                <li>✓ Groupe WhatsApp privé</li>
                <li>✓ Offre CreaLeads exclusive (-1000€)</li>
              </ul>
            </div>
          </div>
        </div>

        <div data-form-fade className="text-center">
          <div className="font-serif text-5xl md:text-6xl font-semibold mb-2">1 500 € TTC</div>
          <div className="text-white/80 mb-7 text-sm uppercase tracking-widest">par stagiaire</div>
          <a
            href="mailto:contact.crealeads@gmail.com?subject=Réservation Formation Résine Juin 2026"
            className="inline-flex bg-white text-accent font-semibold px-8 py-4 rounded-md hover:bg-slate-100 transition-all hover:-translate-y-0.5 shadow-lg"
          >
            Réserver ma place — Avant le 10 Juin
          </a>
          <p className="mt-5 text-white/85 text-sm">
            Places limitées — <span className="font-semibold text-white">3 places restantes</span>
          </p>
        </div>
      </div>
    </section>
  );
}
