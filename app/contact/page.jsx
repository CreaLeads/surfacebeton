'use client';

import { useState, useEffect } from 'react';
import PageHeader from '@/components/PageHeader';

const projectTypes = [
  'Résine Polyuréthane',
  'Résine Époxy',
  'Étanchéité Liquide',
  'Cool Roof',
  'Formation',
  'Distribution',
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
    if (sol && projectTypes.includes(sol)) {
      setForm((f) => ({ ...f, projet: sol }));
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
        title="Demandez votre devis"
        subtitle="Réponse sous 48h — gratuit et sans engagement."
        breadcrumb="Contact"
      />

      <section className="py-24 bg-white">
        <div className="container-x grid grid-cols-1 lg:grid-cols-3 gap-12">
          <form
            onSubmit={onSubmit}
            className="lg:col-span-2 bg-soft p-8 md:p-10 rounded-3xl border border-slate-100 space-y-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field label="Nom complet *" required value={form.nom} onChange={handle('nom')} />
              <Field label="Téléphone *" type="tel" required value={form.telephone} onChange={handle('telephone')} />
            </div>
            <Field label="Email *" type="email" required value={form.email} onChange={handle('email')} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block font-semibold text-navy text-sm mb-2">Type de projet</label>
                <select
                  value={form.projet}
                  onChange={handle('projet')}
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-navy focus:border-accent focus:outline-none"
                >
                  {projectTypes.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
              <Field
                label="Surface approximative (m²)"
                type="number"
                value={form.surface}
                onChange={handle('surface')}
              />
            </div>

            <div>
              <label className="block font-semibold text-navy text-sm mb-2">Message *</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={handle('message')}
                className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-navy focus:border-accent focus:outline-none resize-none"
                placeholder="Décrivez votre projet : type de support, état actuel, délais souhaités..."
              />
            </div>

            <button type="submit" className="btn-primary w-full md:w-auto">
              Envoyer ma demande →
            </button>
          </form>

          <aside className="space-y-6">
            <div className="bg-navy text-white p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-6">Nous contacter</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <div className="text-white/60 text-xs uppercase tracking-wider mb-1">Email</div>
                  <a href="mailto:surfacebeton@icloud.com" className="text-white hover:text-accent">
                    📧 surfacebeton@icloud.com
                  </a>
                </div>
                <div>
                  <div className="text-white/60 text-xs uppercase tracking-wider mb-1">Zone</div>
                  <div className="text-white">📍 Île-de-France</div>
                </div>
                <div>
                  <div className="text-white/60 text-xs uppercase tracking-wider mb-1">Horaires</div>
                  <div className="text-white">🕐 Lun-Ven 8h-18h</div>
                  <div className="text-white">Sam 9h-12h</div>
                </div>
              </div>
            </div>
            <div className="bg-accent text-white p-6 rounded-2xl">
              <div className="font-bold text-lg mb-1">⚡ Réponse sous 48h</div>
              <p className="text-sm text-white/85">Devis gratuit et sans engagement.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({ label, type = 'text', value, onChange, required }) {
  return (
    <div>
      <label className="block font-semibold text-navy text-sm mb-2">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-navy focus:border-accent focus:outline-none"
      />
    </div>
  );
}
