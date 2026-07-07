'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';

const benefits = [
  { k: '-30°C', v: 'Réduction en surface de toiture' },
  { k: '-25%', v: 'Sur la facture climatisation' },
  { k: '+15 ans', v: 'Durée de vie de la peinture' },
  { k: '95%', v: 'Réflectivité solaire' },
];

const applications = [
  {
    title: 'Toitures industrielles',
    desc: 'Bac acier, membrane bitumineuse, béton — ThermicRoof s\'adapte à tous vos supports industriels.',
    img: '/industrie-parfumerie.jpg',
    alt: 'Toiture industrielle traitée avec la peinture thermique ThermicRoof',
  },
  {
    title: 'Entrepôts logistiques',
    desc: 'Réduction significative des températures intérieures — confort thermique des équipes et préservation des stocks.',
    img: '/entrepot-logistique.jpg',
    alt: 'Entrepôt logistique avec toiture traitée peinture thermique',
  },
  {
    title: 'Centres commerciaux & tertiaire',
    desc: "Amélioration du confort clients et employés, économies substantielles sur la climatisation.",
    img: '/hall-local-professionnel.jpg',
    alt: 'Centre commercial et bâtiment tertiaire avec traitement Cool Roof',
  },
  {
    title: 'Copropriétés & bâtiments',
    desc: 'Solution éligible aux aides à la rénovation énergétique — amortissement rapide sur la facture de chauffage/clim.',
    img: '/industrie-pharmaceutique.jpg',
    alt: 'Copropriété avec toiture peinte à la ThermicRoof',
  },
];

const process = [
  { n: '01', t: 'Diagnostic', d: 'Étude thermique de vos toitures, mesure de surface et préconisation technique.' },
  { n: '02', t: 'Préparation', d: 'Nettoyage haute pression, traitement des micro-fissures et primaire d\'accroche adapté.' },
  { n: '03', t: 'Application', d: 'Pose en 2 à 3 couches selon support. Séchage rapide entre chaque passe.' },
  { n: '04', t: 'Contrôle & garantie', d: 'Contrôle qualité et remise du certificat de garantie constructeur.' },
];

export default function DistributionPage() {
  const benefRef = useRef(null);
  const gridRef = useRef(null);
  const processRef = useRef(null);

  useEffect(() => {
    let ctx;
    (async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        [benefRef, gridRef, processRef].forEach((r) => {
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

  const mailto = `mailto:surfacebeton@icloud.com?subject=${encodeURIComponent('Demande de devis — ThermicRoof Peinture Thermique')}`;

  return (
    <>
      <PageHeader
        eyebrow="Peinture thermique · Cool Roof"
        title="ThermicRoof — la peinture thermique qui fait baisser vos toitures de 30°C."
        subtitle="La solution Cool Roof haute performance de SurfaceBéton. Applicable sur toitures industrielles, entrepôts, bâtiments tertiaires."
        breadcrumb="ThermicRoof"
      />

      {/* Key benefits */}
      <section ref={benefRef} className="py-20 bg-white border-b border-line">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-8">
          {benefits.map((b) => (
            <div key={b.v} data-fade className="text-center">
              <div className="font-display italic text-5xl md:text-6xl text-accent leading-none">{b.k}</div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-muted mt-4 leading-relaxed">{b.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Intro pitch */}
      <section className="py-28 bg-editorial">
        <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="tag-num mb-3">01</div>
            <div className="eyebrow">Innovation thermique</div>
            <h2 className="h-title mb-6">
              La peinture qui réfléchit le rayonnement solaire.
            </h2>
            <p className="text-muted text-[16px] leading-relaxed mb-6">
              ThermicRoof est une peinture réflective haute performance
              formulée à base de pigments céramiques et de résines acryliques
              premium. Appliquée sur votre toiture, elle renvoie jusqu'à
              <strong className="text-ink"> 95% du rayonnement solaire</strong> — une
              baisse spectaculaire de la température de surface, mesurable
              dès l'application.
            </p>
            <p className="text-muted text-[16px] leading-relaxed mb-8">
              Le résultat : moins de charge sur votre climatisation, plus de
              confort à l'intérieur, et une protection étanchéité durablement
              renforcée grâce à la résistance UV extrême du produit.
            </p>
            <Link href="/contact?solution=ThermicRoof" className="btn-primary">
              Demander un audit thermique gratuit →
            </Link>
          </div>
          <div className="relative">
            <div className="rounded-xl overflow-hidden border border-line shadow-premium aspect-[4/5]">
              <img
                src="/cool-roof-application.png"
                alt="Application de la peinture thermique ThermicRoof sur toiture"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section ref={gridRef} className="py-28 bg-white">
        <div className="container-x">
          <SectionHeading
            label="Applications"
            title="Une solution pour chaque type de toiture."
            subtitle="ThermicRoof s'applique sur la grande majorité des supports de toiture existants."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((a) => (
              <article key={a.title} data-fade className="card-base overflow-hidden">
                <div className="aspect-[16/10] overflow-hidden bg-soft">
                  <img src={a.img} alt={a.alt} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <h3 className="font-display text-xl font-medium text-ink mb-3 tracking-tight">{a.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{a.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section ref={processRef} className="py-28 bg-editorial">
        <div className="container-x">
          <SectionHeading
            label="Notre méthode"
            title="De l'audit à la garantie — un processus en 4 temps."
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.n} data-fade className="bg-white border border-line rounded-lg p-8">
                <div className="font-display italic text-3xl text-accent mb-5">{p.n}</div>
                <h3 className="font-display text-lg font-medium text-ink mb-3 tracking-tight">{p.t}</h3>
                <p className="text-sm text-muted leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 cta-gradient text-white text-center">
        <div className="container-x">
          <div className="eyebrow !text-accent justify-center mb-6">Devis gratuit</div>
          <h2 className="font-display text-white leading-[1.05] tracking-tight mb-6" style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
            Combien coûterait un traitement <span className="italic-serif text-accent">ThermicRoof</span> chez vous&nbsp;?
          </h2>
          <p className="text-white/75 mb-10 max-w-xl mx-auto leading-relaxed">
            Recevez un audit thermique de vos toitures et un devis détaillé
            sous 48h — sans engagement.
          </p>
          <Link href="/contact?solution=ThermicRoof" className="inline-flex bg-accent text-white font-semibold px-9 py-4 rounded-md animate-pulse-subtle">
            Demander un audit gratuit →
          </Link>
        </div>
      </section>
    </>
  );
}
