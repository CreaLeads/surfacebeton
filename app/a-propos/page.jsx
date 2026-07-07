'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';

const values = [
  { n: '01', t: 'Passion', d: 'Un métier d\'artisan, exercé avec exigence et engagement.' },
  { n: '02', t: 'Excellence', d: 'Le refus du compromis sur les matériaux et la mise en œuvre.' },
  { n: '03', t: 'Proximité', d: 'Une relation directe, humaine, du premier appel à la garantie.' },
  { n: '04', t: 'Innovation', d: 'Des solutions techniques à la pointe (ThermicRoof, résines nouvelle génération).' },
];

const metrics = [
  { v: '100%', l: 'Satisfaction client' },
  { v: '10 ans', l: 'Garantie décennale' },
  { v: '48h', l: 'Réponse devis' },
  { v: '15+', l: "Années d'expertise" },
];

const team = [
  {
    name: 'Serge Wagner',
    role: 'Co-fondateur — Direction générale & opérationnelle',
    bio: "Fort de plus de 25 ans d'expérience terrain, j'assure la direction générale, la gestion des équipes et le pilotage technique de l'ensemble de nos chantiers.",
    init: 'SW',
  },
  {
    name: 'Enzo Wagner',
    role: 'Co-fondateur — Direction marketing & commerciale',
    bio: "En charge du développement commercial, du marketing digital et de la stratégie de croissance de SurfaceBéton.",
    init: 'EW',
  },
];

export default function AProposPage() {
  const historyRef = useRef(null);
  const teamRef = useRef(null);

  useEffect(() => {
    let ctx;
    (async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        [historyRef, teamRef].forEach((r) => {
          if (!r.current) return;
          gsap.fromTo(
            r.current.querySelectorAll('[data-fade]'),
            { y: 30, opacity: 0 },
            {
              y: 0, opacity: 1, duration: 0.7, ease: 'power2.out', stagger: 0.1,
              scrollTrigger: { trigger: r.current, start: 'top 85%' },
            }
          );
        });
      });
    })();
    return () => ctx && ctx.revert();
  }, []);

  return (
    <>
      <PageHeader
        eyebrow="Qui sommes-nous"
        title="Une entreprise familiale, un savoir-faire d'artisan."
        subtitle="SurfaceBéton, c'est la rencontre d'une expérience terrain de 25 ans et d'une vision moderne du métier."
        breadcrumb="À propos"
      />

      {/* Histoire */}
      <section ref={historyRef} className="py-28 bg-white">
        <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div data-fade>
            <div className="tag-num mb-3">01</div>
            <div className="eyebrow">Notre histoire</div>
            <h2 className="h-title mb-6">Un savoir-faire transmis, une vision renouvelée.</h2>
            <p className="text-muted leading-relaxed mb-5 text-[16px]">
              SurfaceBéton est une entreprise familiale. <strong className="text-ink">Serge Wagner</strong> exerce
              depuis plus de 25 ans dans la rénovation et a développé un savoir-faire terrain d'exception en revêtement.
            </p>
            <p className="text-muted leading-relaxed text-[16px]">
              Fin 2023, l'activité est formellement structurée. Son fils <strong className="text-ink">Enzo</strong> rejoint
              l'aventure pour apporter une vision moderne, numérique et orientée client — donnant naissance à SurfaceBéton
              tel que vous le connaissez aujourd'hui.
            </p>
          </div>
          <div data-fade className="aspect-square rounded-xl overflow-hidden shadow-premium border border-line">
            <img
              src="/resine-mat-salon.jpg"
              alt="Réalisation en résine décorative — savoir-faire SurfaceBéton"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-28 bg-editorial">
        <div className="container-x">
          <SectionHeading label="Nos valeurs" title="Quatre principes qui nous portent." />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.t} className="bg-white border border-line p-8 rounded-lg">
                <div className="font-display italic text-3xl text-accent/70 mb-4">{v.n}</div>
                <div className="font-display text-lg font-medium text-ink mb-2">{v.t}</div>
                <p className="text-sm text-muted leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white text-center">
        <div className="container-narrow">
          <div className="eyebrow justify-center">Notre mission</div>
          <p className="font-display text-2xl md:text-3xl text-ink italic leading-relaxed mt-4">
            "Démocratiser les revêtements techniques haut de gamme avec des solutions de qualité, accessibles à tous."
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 bg-ink text-white">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {metrics.map((m) => (
            <div key={m.l}>
              <div className="font-display italic text-5xl md:text-6xl text-accent leading-none">{m.v}</div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-white/60 mt-4">{m.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Équipe */}
      <section ref={teamRef} className="py-28 bg-editorial">
        <div className="container-x">
          <SectionHeading label="L'équipe" title="Ceux qui font SurfaceBéton." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {team.map((p) => (
              <div key={p.name} data-fade className="bg-white border border-line p-10 rounded-lg">
                <div className="w-16 h-16 rounded-full bg-accent/10 text-accent font-display text-xl font-semibold flex items-center justify-center mb-6 border border-accent/30">
                  {p.init}
                </div>
                <h3 className="font-display text-xl font-medium text-ink mb-1 tracking-tight">{p.name}</h3>
                <div className="text-[13px] text-accent font-semibold mb-4">{p.role}</div>
                <p className="text-sm text-muted leading-relaxed italic">"{p.bio}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl font-medium text-ink mb-5 tracking-tight">Un projet à discuter ?</h2>
          <p className="text-muted mb-8 leading-relaxed">
            Contactez-nous — nous vous répondons sous 48h avec une première estimation.
          </p>
          <Link href="/contact" className="btn-primary">
            Demander un devis
          </Link>
        </div>
      </section>
    </>
  );
}
