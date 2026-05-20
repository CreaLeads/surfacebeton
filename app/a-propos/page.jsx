'use client';

import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';

const values = ['Passion', 'Excellence', 'Proximité', 'Innovation'];

const metrics = [
  { v: '100%', l: 'Satisfaction client' },
  { v: '10 ans', l: 'Garantie' },
  { v: '48h', l: 'Réponse devis' },
  { v: '15+', l: "Ans d'expertise" },
];

const team = [
  {
    name: 'Serge Wagner',
    role: 'Co-fondateur, Directeur Général & Opérationnel',
    bio: "Fort de plus de 25 ans d'expérience terrain, j'assure la direction générale, la gestion des équipes et le pilotage technique des chantiers.",
  },
  {
    name: 'Enzo Wagner',
    role: 'Co-fondateur, Directeur Marketing & Commercial',
    bio: "Je suis en charge du développement commercial, du marketing digital et de la stratégie de croissance de SurfaceBéton.",
  },
];

export default function AProposPage() {
  return (
    <>
      <PageHeader
        title="À propos de SurfaceBéton"
        subtitle="Une entreprise familiale, un savoir-faire terrain et une vision moderne du métier."
        breadcrumb="À propos"
      />

      {/* Histoire */}
      <section className="py-24 bg-white">
        <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="text-accent uppercase font-bold tracking-wider text-sm mb-3">Notre Histoire</div>
            <h2 className="text-3xl md:text-4xl font-black text-navy mb-6">
              Un savoir-faire transmis, une vision renouvelée
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              SurfaceBéton est une entreprise familiale. <strong className="text-navy">Serge Wagner</strong> exerce depuis plus de 25 ans dans la rénovation et a développé un savoir-faire terrain en revêtement.
            </p>
            <p className="text-muted leading-relaxed">
              Fin 2023, l'activité est formellement structurée. Son fils <strong className="text-navy">Enzo</strong> rejoint l'aventure pour apporter une vision moderne, numérique et orientée client.
            </p>
          </Reveal>
          <Reveal>
            <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900"
                alt="SurfaceBéton"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-24 bg-soft">
        <div className="container-x text-center">
          <h2 className="section-title mb-12">Nos Valeurs</h2>
          <Reveal stagger={0.12} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v} data-reveal-item className="bg-white p-8 rounded-2xl border border-slate-100">
                <div className="text-2xl font-black text-accent">{v}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="container-x text-center max-w-3xl">
          <h2 className="section-title">Notre Mission</h2>
          <p className="text-xl text-muted leading-relaxed mt-4">
            "Démocratiser les revêtements techniques avec des solutions de qualité accessibles à tous."
          </p>
        </div>
      </section>

      {/* Métriques */}
      <section className="py-16 bg-navy text-white">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {metrics.map((m) => (
            <div key={m.l}>
              <div className="text-4xl md:text-5xl font-black text-accent">{m.v}</div>
              <div className="text-sm text-white/70 mt-2">{m.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Équipe */}
      <section className="py-24 bg-soft">
        <div className="container-x">
          <h2 className="section-title text-center mb-16">Notre Équipe</h2>
          <Reveal stagger={0.12} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {team.map((p) => (
              <div key={p.name} data-reveal-item className="bg-white p-8 rounded-2xl border border-slate-100">
                <div className="w-20 h-20 rounded-full bg-accent/10 text-accent text-3xl font-black flex items-center justify-center mb-4">
                  {p.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold text-navy">{p.name}</h3>
                <div className="text-sm text-accent font-semibold mb-3">{p.role}</div>
                <p className="text-sm text-muted leading-relaxed italic">"{p.bio}"</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Franchise */}
      <section className="py-20 bg-white">
        <div className="container-x text-center max-w-2xl">
          <h2 className="text-3xl font-black text-navy mb-4">Rejoignez notre réseau</h2>
          <p className="text-muted mb-8">
            Vous êtes professionnel et souhaitez développer une activité de revêtement de sols ?
          </p>
          <Link href="/contact?solution=Franchise" className="btn-primary">
            En discuter avec nous
          </Link>
        </div>
      </section>
    </>
  );
}
