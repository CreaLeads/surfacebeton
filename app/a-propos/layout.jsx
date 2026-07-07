export const metadata = {
  title: "À propos — SurfaceBéton, entreprise familiale de revêtements en résine",
  description:
    "SurfaceBéton, entreprise familiale spécialisée dans les revêtements de sols en résine et la peinture thermique. Plus de 25 ans d'expérience terrain, applicateurs certifiés en Île-de-France.",
  alternates: { canonical: '/a-propos' },
  openGraph: {
    title: 'À propos — SurfaceBéton',
    description: 'Notre histoire, nos valeurs, notre équipe. Une entreprise familiale au service de vos revêtements de sols.',
    url: '/a-propos',
    images: ['/hero.jpg'],
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
