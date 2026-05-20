'use client';

import PageHeader from '@/components/PageHeader';
import Gallery from '@/components/sections/Gallery';

export default function RealisationsPage() {
  return (
    <>
      <PageHeader
        title="Nos Réalisations"
        subtitle="Une sélection de chantiers livrés en Île-de-France — particuliers et professionnels."
        breadcrumb="Réalisations"
      />
      <Gallery extended />
    </>
  );
}
