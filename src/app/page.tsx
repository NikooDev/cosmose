import React from 'react';
import { metadata as initialMetadata } from '@/app/layout';
import { Metadata } from 'next';
import Intro from '@/components/home/intro';
import Lastnew from '@/components/home/lastnew';
import Partners from '@/components/home/partners';
import Bestsellers from '@/components/home/bestsellers';
import Infos from '@/components/home/infos';
import Lastblog from '@/components/home/lastblog';

export const metadata: Metadata = {
  ...initialMetadata,
  title: 'Cosmose • Team Building en ligne',
  description: 'Brisez la barrière du distanciel. Découvrez nos activités de team building en ligne : jeux collaboratifs, blind tests, serious games et animations en visioconférence pour booster l’engagement et la cohésion d’équipe.'
};


const Home = () => {
  return (
    <>
      <Intro/>
      <Lastnew/>
      <Bestsellers/>
      <Partners/>
      <Infos/>
      <Lastblog/>
    </>
  );
}

export default Home;
