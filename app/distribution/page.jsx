'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';

const kpis = [
  { k: '-7°C', v: "À l'intérieur l'été" },
  { k: '85%', v: 'Réflexion solaire' },
  { k: 'SRI 110', v: 'ASTM E1980' },
  { k: '0,0955', v: 'W/m·K · aérogel' },
];

const trois = [
  {
    n: '01',
    t: 'Simple',
    d: "Un seul produit. Prêt à l'emploi, appliqué au pistolet Airless ou au rouleau sur support existant. Sans gros œuvre, sans arrêt d'activité.",
  },
  {
    n: '02',
    t: 'Rapide',
    d: "Deux couches. Séchage rapide, remise en service en quelques heures. 4 m²/L sur support lisse, 2,5 m²/L sur support irrégulier.",
  },
  {
    n: '03',
    t: 'Efficace',
    d: "-7°C à l'intérieur l'été. 85% de réflexion solaire, SRI 110, aérogel de silice λ 0,0955 W/m·K. La chaleur repoussée avant d'entrer.",
  },
];

const pointsForts = [
  { t: 'Réfléchit 85% du rayonnement solaire', d: 'Émissivité 91%. Le rayonnement est renvoyé avant de traverser.' },
  { t: 'Isole par l\'aérogel de silice', d: 'Conductivité λ 0,0955 W/m·K. SRI 110 selon ASTM E1980.' },
  { t: '-7°C à l\'intérieur l\'été', d: 'Fraîcheur conservée l\'été. Chaleur conservée l\'hiver.' },
  { t: 'Imperméable & respirant', d: 'Supprime la condensation. Traité algicide et fongique.' },
  { t: 'Toiture, façade & industrie', d: 'Un seul produit pour tous les supports et usages.' },
  { t: 'Sans gros œuvre', d: 'Application pistolet Airless ou rouleau, sur support existant.' },
  { t: 'Économies d\'énergie', d: 'Moins de climatisation. Facture énergétique allégée.' },
  { t: 'FDES certifié INIES', d: '25% de contenu recyclé. Norme française certifiée.' },
];

const teintes = ['Blanc pur', 'Ivoire', 'Beige', 'Sable', 'Gris perle', 'Gris clair', "Vert d'eau", 'Bleu ciel'];

const applications = [
  {
    title: 'Toitures industrielles',
    desc: "Bac acier, membrane bitumineuse, béton — ThermicRoof s'adapte à tous vos supports de toiture industrielle.",
    img: '/industrie-parfumerie.jpg',
    alt: 'Toiture industrielle traitée avec le revêtement thermo-réflectif ThermicRoof',
  },
  {
    title: 'Entrepôts logistiques',
    desc: "Confort thermique des équipes, préservation des stocks, économies d'énergie mesurables dès le premier été.",
    img: '/entrepot-logistique.jpg',
    alt: 'Entrepôt logistique avec toiture traitée à la peinture thermo-réflective',
  },
  {
    title: 'Bâtiments tertiaires & commerces',
    desc: "Confort clients et employés, économies substantielles sur la climatisation. Sans arrêt d'activité.",
    img: '/hall-local-professionnel.jpg',
    alt: 'Bâtiment tertiaire avec traitement Cool Roof ThermicRoof',
  },
  {
    title: 'Copropriétés & résidentiel',
    desc: 'Solution éligible aux aides à la rénovation énergétique. Amortissement rapide sur chauffage et climatisation.',
    img: '/industrie-pharmaceutique.jpg',
    alt: 'Copropriété avec toiture peinte à la ThermicRoof',
  },
];

export default function DistributionPage() {
  const kpisRef = useRef(null);
  const troisRef = useRef(null);
  const pfRef = useRef(null);
  const appsRef = useRef(null);

  useEffect(() => {
    let ctx;
    (async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        [kpisRef, troisRef, pfRef, appsRef].forEach((r) => {
          if (!r.current) return;
          gsap.fromTo(
            r.current.querySelectorAll('[data-fade]'),
            { y: 30, opacity: 0 },
            {
              y: 0, opacity: 1, duration: 0.7, ease: 'power2.out', stagger: 0.08,
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
        eyebrow="Revêtement thermo-réflectif · Édition 2026"
        title="ThermicRoof — votre toiture travaille pour vous."
        subtitle="Barrière thermique réflective à l'aérogel de silice. La chaleur entre par le toit. ThermicRoof la renvoie avant qu'elle ne traverse."
        breadcrumb="ThermicRoof"
      />

      {/* KPIs from PDF */}
      <section ref={kpisRef} className="py-20 bg-white border-b border-line">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-8">
          {kpis.map((b) => (
            <div key={b.v} data-fade className="text-center">
              <div className="font-display italic text-5xl md:text-6xl text-accent leading-none">{b.k}</div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-muted mt-4 leading-relaxed">{b.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Simple. Rapide. Efficace. */}
      <section ref={troisRef} className="py-28 bg-editorial">
        <div className="container-x">
          <SectionHeading
            label="Système thermo-réfléchissant"
            title="Simple. Rapide. Efficace."
            subtitle="Un revêtement à base d'aérogel de silice qui agit sur deux fronts — réflexion solaire en surface et frein à la conduction thermique."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trois.map((p) => (
              <div key={p.n} data-fade className="bg-white border border-line rounded-lg p-9">
                <div className="font-display italic text-3xl text-accent mb-5">{p.n}</div>
                <h3 className="font-display text-2xl font-medium text-ink mb-4 tracking-tight">{p.t}</h3>
                <p className="text-sm text-muted leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Été comme hiver */}
      <section className="py-28 bg-white">
        <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="tag-num mb-3">02</div>
            <div className="eyebrow">Été comme hiver</div>
            <h2 className="h-title mb-6">
              L'été, la fraîcheur reste dedans.<br />
              L'hiver, la chaleur aussi.
            </h2>
            <p className="text-muted text-[16px] leading-relaxed mb-5">
              <strong className="text-ink">L'été</strong>, ThermicRoof renvoie 85% du rayonnement
              solaire et conserve la fraîcheur intérieure — sans surcharger la climatisation.
            </p>
            <p className="text-muted text-[16px] leading-relaxed mb-8">
              <strong className="text-ink">L'hiver</strong>, le revêtement limite les déperditions
              et garde la chaleur à l'intérieur. Une même barrière, active toute l'année.
            </p>
            <Link href="/contact?solution=ThermicRoof" className="btn-primary">
              Étude thermique gratuite →
            </Link>
          </div>
          <div className="relative">
            <div className="rounded-xl overflow-hidden border border-line shadow-premium aspect-[4/5]">
              <img
                src="/industrie-pharmaceutique.jpg"
                alt="Bâtiment industriel avec toiture traitée ThermicRoof — barrière thermique aérogel"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Points forts */}
      <section ref={pfRef} className="py-28 bg-editorial">
        <div className="container-x">
          <SectionHeading
            label="Points forts"
            title="Traitez une fois. Économisez des années."
            subtitle="Huit atouts techniques qui font de ThermicRoof la solution thermo-réflective de référence."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {pointsForts.map((pf, i) => (
              <div key={pf.t} data-fade className="bg-white border border-line rounded-lg p-7">
                <div className="text-accent font-display italic text-sm mb-3">+{String(i + 1).padStart(2, '0')}</div>
                <h3 className="font-display text-[16px] font-medium text-ink mb-3 tracking-tight leading-snug">{pf.t}</h3>
                <p className="text-[13px] text-muted leading-relaxed">{pf.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teintes disponibles */}
      <section className="py-24 bg-white">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <div className="eyebrow justify-center">Teintes disponibles</div>
            <h2 className="h-title">Blanc pur — et 7 tons clairs.</h2>
            <p className="section-subtitle mx-auto mt-5">
              Blanc = réflexion maximale. Les teintes claires disponibles sur demande conservent
              une performance thermo-réflective optimale.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {teintes.map((t) => {
              const swatches = {
                'Blanc pur': '#FFFFFF',
                'Ivoire': '#F5EEDC',
                'Beige': '#E8D9BE',
                'Sable': '#DCC9A6',
                'Gris perle': '#D6D6D2',
                'Gris clair': '#BFBFB9',
                "Vert d'eau": '#C7DED0',
                'Bleu ciel': '#C6D8E6',
              };
              return (
                <div key={t} className="bg-soft border border-line rounded-lg p-4 flex items-center gap-4">
                  <span className="w-10 h-10 rounded-md border border-line shrink-0" style={{ background: swatches[t] }} aria-hidden="true" />
                  <span className="text-sm font-medium text-ink">{t}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section ref={appsRef} className="py-28 bg-editorial">
        <div className="container-x">
          <SectionHeading
            label="Applications"
            title="Une solution, tous les supports."
            subtitle="ThermicRoof s'applique sur la grande majorité des toitures et façades existantes."
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

      {/* CTA */}
      <section className="py-28 cta-gradient text-white text-center">
        <div className="container-x">
          <div className="eyebrow !text-accent justify-center mb-6">Une toiture, une façade à traiter ?</div>
          <h2 className="font-display text-white leading-[1.05] tracking-tight mb-6" style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
            Demandez votre <span className="italic-serif text-accent">étude thermique gratuite</span>.
          </h2>
          <p className="text-white/75 mb-10 max-w-xl mx-auto leading-relaxed">
            Diagnostic de vos toitures, préconisation technique et devis détaillé — sous 48h,
            sans engagement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact?solution=ThermicRoof" className="inline-flex bg-accent text-white font-semibold px-9 py-4 rounded-md animate-pulse-subtle">
              Étude thermique gratuite →
            </Link>
            <a href="tel:+33663675254" className="inline-flex border border-white/70 text-white font-semibold px-9 py-4 rounded-md hover:bg-white hover:text-ink transition-all">
              06 63 67 52 54
            </a>
          </div>
          <p className="text-white/40 text-[11px] uppercase tracking-[0.2em] mt-10">
            Édition 2026 · Caractéristiques mesurées selon normes ASTM et EN ISO
          </p>
        </div>
      </section>
    </>
  );
}
