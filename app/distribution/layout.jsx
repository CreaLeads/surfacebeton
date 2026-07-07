export const metadata = {
  title: 'ThermicRoof — Revêtement thermo-réflectif à l\'aérogel de silice',
  description:
    "ThermicRoof : revêtement thermo-réflectif à base d'aérogel de silice. 85% de réflexion solaire, -7°C à l'intérieur l'été, SRI 110, FDES certifié INIES. Toiture, façade, industrie — Île-de-France.",
  keywords: ['ThermicRoof', 'revêtement thermo-réflectif', 'aérogel de silice', 'cool roof', 'peinture thermique toiture', 'SRI 110', 'peinture réfléchissante'],
  alternates: { canonical: '/distribution' },
  openGraph: {
    title: 'ThermicRoof — Revêtement thermo-réflectif · SurfaceBéton',
    description:
      "Votre toiture travaille pour vous. 85% de réflexion solaire, -7°C l'été, aérogel de silice. Étude thermique gratuite.",
    url: '/distribution',
    images: ['/industrie-parfumerie.jpg'],
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
