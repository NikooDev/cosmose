import React from 'react';
import { metadata as initialMetadata } from '@/app/layout';
import { Metadata } from 'next';
import Title from '@/components/ui/title';
import Card from '@/components/ui/card';

export const metadata: Metadata = {
  ...initialMetadata,
  title: 'Cosmose • À propos de Cosmose'
};

const About = () => {
  return (
    <section className="relative z-10 pt-10 pb-10">
      <Title semantique="h1" titleLight="Rapprocher, engager, divertir" titleBold="Cosmose" className="mb-10 animate-slideInUp-1"/>
      <div className="container mx-auto">
        <div className="flex justify-center mb-20 animate-slideInUp-2">
          <p className="w-[550px] text-center font-NexaHeavy text-lg">
            Cosmose rapproche les équipes à travers des team buildings digitaux uniques, renforçant la cohésion et
            l'engagement, quel que soit la distance qui les sépare.
          </p>
        </div>
        <div className="flex gap-14 relative mb-28">
          <Card className="w-full items-center animate-slideInUp-3">
            <img src="/img/icons/reunion.png" height={50} width={50} alt="reunion"/>
            <p className="font-NexaHeavy text-2xl mt-2 mb-4">Rapprocher</p>
            <p className="text-center text-lg">Les équipes dispersées à travers des expériences collaboratives uniques,
              renforçant ainsi les liens professionnels et personnels.</p>
          </Card>
          <Card className="w-full items-center animate-slideInUp-4">
            <img src="/img/icons/presentation.png" height={50} width={50} alt="reunion"/>
            <p className="font-NexaHeavy text-2xl mt-2 mb-4">Engager</p>
            <p className="text-center text-lg">Chaque membre de l'équipe dans une aventure immersive, favorisant ainsi
              la
              participation active et l'implication à long terme.</p>
          </Card>
          <Card className="w-full items-center animate-slideInUp-5">
            <img src="/img/icons/joie.png" height={50} width={50} alt="reunion"/>
            <p className="font-NexaHeavy text-2xl mt-2 mb-4">Divertir</p>
            <p className="text-center text-lg">Les collaborateurs avec des activités ludiques et interactives, offrant
              ainsi
              une pause méritée dans leur quotidien professionnel.</p>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default About;
