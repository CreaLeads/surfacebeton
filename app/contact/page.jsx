'use client';

import { useState, useEffect } from 'react';
import PageHeader from '@/components/PageHeader';

const projectTypes = [
  'Résine Époxy & Polyuréthane',
  'Sols Décoratifs',
  'Étanchéité Liquide',
  'ThermicRoof — Peinture Thermique',
  'Autre',
];

export default function ContactPage() {
  const [form, setForm] = useState({
    nom: '',
    telephone: '',
    email: '',
    projet: projectTypes[0],
    surface: '',
    message: '',
  });

  useEffect(() => {
    const url = new URL(window.location.href);
    const sol = url.searchParams.get('solution');
    if (sol) {
      const match = projectTypes.find((t) => t === sol || t.toLowerCase().includes(sol.toLowerCase())) || projectTypes[0];
      setForm((f) => ({ ...f, projet: match }));
    }
  }, []);

  const handle = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Demande de devis — ${form.projet}`);
    const body = encodeURIComponent(
      `Nom : ${form.nom}\nTéléphone : ${form.telephone}\nEmail : ${form.email}\nType de projet : ${form.projet}\nSurface : ${form.surface} m²\n\nMessage :\n${form.message}`
    );
    window.location.href = `mailto:surfacebeton@icloud.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <PageHeader
        eyebrow="Prenons contact"
        title="Demandez votre devis gratuit."
        subtitle="Réponse sous 48h — gratuit et sans engagement. Île-de-France."
        breadcrumb="Contact"
      />

      <section className="py-24 bg-white">
        <div className="container-x grid grid-cols-1 lg:grid-cols-3 gap-12">
          <form
            onSubmit={onSubmit}
            className="lg:col-span-2 bg-soft p-8 md:p-12 rounded-xl border border-line space-y-5"
            aria-label="Formulaire de demande de devis"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field label="Nom complet *" required value={form.nom} onChange={handle('nom')} name="nom" autoComplete="name" />
              <Field label="Téléphone *" type="tel" required value={form.telephone} onChange={handle('telephone')} name="telephone" autoComplete="tel" />
            </div>
            <Field label="Email *" type="email" required value={form.email} onChange={handle('email')} name="email" autoComplete="email" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="projet" className="block font-semibold text-ink text-sm mb-2">Type de projet</label>
                <select
                  id="projet"
                  value={form.projet}
                  onChange={handle('projet')}
                  className="w-full bg-white border border-line rounded-md px-4 py-3 text-ink focus:border-accent focus:outline-none"
                >
                  {projectTypes.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
              <Field
                label="Surface approximative (m²)"
                type="number"
                value={form.surface}
                onChange={handle('surface')}
                name="surface"
                inputMode="numeric"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-semibold text-ink text-sm mb-2">Message *</label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={handle('message')}
                className="w-full bg-white border border-line rounded-md px-4 py-3 text-ink focus:border-accent focus:outline-none resize-none"
                placeholder="Décrivez votre projet : type de support, état actuel, délais souhaités..."
              />
            </div>

            <button type="submit" className="btn-primary w-full md:w-auto">
              Envoyer ma demande →
            </button>
          </form>

          <aside className="space-y-6">
            <div className="bg-ink text-white p-8 rounded-xl">
              <h2 className="font-display text-xl font-medium mb-6">Nous joindre</h2>
              <div className="space-y-5 text-sm">
                <div>
                  <div className="text-white/50 text-[10px] uppercase tracking-[0.2em] mb-1.5">Téléphone</div>
                  <a href="tel:+33663675254" className="text-white hover:text-accent transition-colors">
                    06 63 67 52 54
                  </a>
                </div>
                <div>
                  <div className="text-white/50 text-[10px] uppercase tracking-[0.2em] mb-1.5">Email</div>
                  <a href="mailto:surfacebeton@icloud.com" className="text-white hover:text-accent transition-colors">
                    surfacebeton@icloud.com
                  </a>
                </div>
                <div>
                  <div className="text-white/50 text-[10px] uppercase tracking-[0.2em] mb-1.5">Zone d'intervention</div>
                  <div className="text-white">Île-de-France</div>
                </div>
                <div>
                  <div className="text-white/50 text-[10px] uppercase tracking-[0.2em] mb-1.5">Horaires</div>
                  <div className="text-white">Lun-Ven 8h-18h</div>
                  <div className="text-white/70">Sam 9h-12h</div>
                </div>
              </div>
            </div>
            <div className="bg-accent text-white p-8 rounded-xl">
              <div className="font-display text-lg font-medium mb-2">Réponse sous 48h</div>
              <p className="text-sm text-white/90 leading-relaxed">Devis gratuit et sans engagement. Étude technique de votre projet.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({ label, type = 'text', value, onChange, required, name, autoComplete, inputMode }) {
  const id = name || label.toLowerCase().replace(/\s+/g, '-');
  return (
    <div>
      <label htmlFor={id} className="block font-semibold text-ink text-sm mb-2">{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        inputMode={inputMode}
        className="w-full bg-white border border-line rounded-md px-4 py-3 text-ink focus:border-accent focus:outline-none"
      />
    </div>
  );
}
