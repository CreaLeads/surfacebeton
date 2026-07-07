'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import PageHeader from '@/components/PageHeader';

const solutions = [
  {
    id: 'epoxy-pu',
    tag: '01',
    title: 'Résine Époxy & Polyuréthane',
    subtitle: 'Sols techniques haute performance',
    description:
      "La combinaison des deux résines pro les plus performantes : l'époxy pour son esthétique lisse, sa résistance chimique et ses finitions haut de gamme — le polyuréthane pour sa résistance mécanique, ses propriétés antidérapantes et sa tenue extrême aux chocs thermiques.",
    advantages: [
      'Résistance mécanique et chimique extrême',
      'Températures -40°C à +120°C (PU)',
      'Surface lisse brillante ou antidérapante',
      'Large palette de couleurs et finitions',
      'Durabilité 10 à 15 ans',
    ],
    applications: ['Ateliers industriels', 'Entrepôts logistiques', 'Garages', 'Showrooms', 'Chambres froides', 'Parkings'],
    img: '/hangar-stockage.jpg',
    alt: 'Sol en résine époxy et polyuréthane pour hangar industriel',
  },
  {
    id: 'decoratif',
    tag: '02',
    title: 'Sols Décoratifs',
    subtitle: 'Effets décoratifs sur mesure',
    description:
      'Pour vos intérieurs résidentiels haut de gamme comme pour vos terrasses, garages et espaces commerciaux, les sols décoratifs SurfaceBéton allient esthétique et technicité. Effet marbré, flakes, quartz coloré ou granulat de marbre — un rendu unique pour chaque projet.',
    advantages: [
      'Effets marbré, flake, quartz, granulat',
      'Pose intérieure et extérieure',
      'Personnalisation complète des couleurs',
      'Antidérapant selon usage',
      'Rendu premium et sur mesure',
    ],
    applications: ['Halls d\'entrée', 'Salons', 'Terrasses', 'Contours de piscine', 'Garages résidentiels', 'Boutiques'],
    img: '/resine-mat-salon.jpg',
    alt: 'Sol résine décoratif effet marbré noir dans un intérieur',
  },
  {
    id: 'etancheite',
    tag: '03',
    title: 'Étanchéité Liquide',
    subtitle: "Protection durable contre l'eau",
    description:
      "Une membrane monocomposant sans joint qui épouse tous les supports et garantit une étanchéité parfaite. Solution éprouvée pour toitures-terrasses, balcons, parkings dalle, bassins et piscines.",
    advantages: [
      'Membrane continue sans joint',
      'Adhérence sur tous supports',
      'Résistance UV et élasticité totale',
      'Application rapide',
      'Garantie décennale',
    ],
    applications: ['Toitures-terrasses', 'Balcons', 'Parkings dalle', 'Bassins', 'Piscines'],
    img: '/cool-roof-application.png',
    alt: 'Application d\'étanchéité liquide sur toiture-terrasse',
  },
  {
    id: 'thermicroof',
    tag: '04',
    title: 'ThermicRoof · Cool Roof',
    subtitle: 'Peinture thermique nouvelle génération',
    description:
      "Peinture réflective haute performance qui réduit jusqu'à 30°C la température de vos toitures. ThermicRoof améliore le confort thermique, réduit les coûts de climatisation et prolonge la durée de vie de vos étanchéités.",
    advantages: [
      "Réduction jusqu'à -30°C en surface",
      "-25% en moyenne sur la climatisation",
      "Résistance UV extrême",
      'Applicable bac acier, béton, bitume, membrane',
      'Normes environnementales HQE',
    ],
    applications: ['Toitures industrielles', 'Entrepôts', 'Centres commerciaux', 'Bâtiments tertiaires', 'Copropriétés'],
    img: '/industrie-parfumerie.jpg',
    alt: 'Toiture traitée avec la peinture thermique ThermicRoof Cool Roof',
  },
];

function SolutionBlock({ s, i }) {
  const ref = useRef(null);
  useEffect(() => {
    let ctx;
    (async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.fromTo(
          '[data-sol-fade]',
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.7, ease: 'power2.out', stagger: 0.1,
            scrollTrigger: { trigger: ref.current, start: 'top 80%' },
          }
        );
      }, ref);
    })();
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section ref={ref} id={s.id} className={`py-28 ${i % 2 === 0 ? 'bg-white' : 'bg-editorial'}`}>
      <div className="container-x">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
          <div data-sol-fade className="relative rounded-xl overflow-hidden shadow-premium border border-line aspect-[4/3]">
            <img src={s.img} alt={s.alt} loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div>
            <div data-sol-fade className="tag-num mb-3">{s.tag}</div>
            <div data-sol-fade className="eyebrow">{s.subtitle}</div>
            <h2 data-sol-fade className="h-title mb-6">{s.title}</h2>
            <p data-sol-fade className="text-muted text-[16px] leading-relaxed mb-8">{s.description}</p>

            <div data-sol-fade className="mb-7">
              <h3 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-ink/70 mb-4">Avantages</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {s.advantages.map((a) => (
                  <li key={a} className="flex items-start gap-2.5 text-sm text-ink/85">
                    <span className="text-accent mt-1">✓</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div data-sol-fade className="mb-9">
              <h3 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-ink/70 mb-4">Applications</h3>
              <div className="flex flex-wrap gap-2">
                {s.applications.map((a) => (
                  <span key={a} className="bg-white border border-line text-ink text-xs font-medium px-3 py-1.5 rounded-sm">
                    {a}
                  </span>
                ))}
              </div>
            </div>

            <div data-sol-fade>
              <Link href={`/contact?solution=${encodeURIComponent(s.title)}`} className="btn-primary">
                Demander un devis pour ce produit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nos savoir-faire"
        title="Solutions de revêtements techniques."
        subtitle="Quatre expertises pour couvrir tous vos besoins en résine et traitement de toiture."
        breadcrumb="Solutions"
      />

      {solutions.map((s, i) => <SolutionBlock key={s.id} s={s} i={i} />)}

      {/* Marketing Digital partner */}
      <section className="py-24 bg-ink text-white">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="tag-num mb-3">05 · Partenaire</div>
              <div className="eyebrow !text-accent">Marketing Digital</div>
              <h2 className="font-display text-3xl md:text-4xl font-medium mb-6 leading-tight text-white">
                <span className="italic-serif text-accent">CreaLeads</span> — génération de leads pour artisans.
              </h2>
              <p className="text-white/70 leading-relaxed mb-8">
                Notre partenaire acquisition digitale : campagnes Meta Ads,
                landing pages haute conversion, SEO local. Une offre dédiée
                aux artisans du bâtiment pour développer votre activité.
              </p>
              <a href="https://crealeads.fr" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Découvrir CreaLeads →
              </a>
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10 shadow-xl aspect-[4/3] bg-graphite">
              <img
                src="/hall-local-professionnel.jpg"
                alt="Espace professionnel avec revêtement premium — projet accompagné par CreaLeads"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
