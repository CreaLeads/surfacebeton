'use client';

import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import Solutions from '@/components/sections/Solutions';
import Why from '@/components/sections/Why';
import Gallery from '@/components/sections/Gallery';
import DistributionTeaser from '@/components/sections/DistributionTeaser';
import Calculator from '@/components/sections/Calculator';
import Testimonials from '@/components/sections/Testimonials';
import FinalCTA from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Solutions />
      <Why />
      <Gallery />
      <DistributionTeaser />
      <Calculator />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
