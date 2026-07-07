'use client';

import PageHeader from '@/components/PageHeader';
import Gallery from '@/components/sections/Gallery';

export default function RealisationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Nos réalisations en Île-de-France."
        subtitle="Une sélection de chantiers livrés — résine époxy, polyuréthane, sols décoratifs et étanchéité."
        breadcrumb="Réalisations"
      />
      <Gallery extended />
    </>
  );
}
