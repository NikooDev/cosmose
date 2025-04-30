import React from 'react';
import { metadata as initialMetadata } from '@/app/layout';
import { Metadata } from 'next';
import Title from '@/components/ui/title';
import Card from '@/components/ui/card';
import Image from "next/image";

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
        <div className="flex lg:flex-nowrap flex-wrap gap-14 relative mb-28">
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
        <div className="mt-16 mb-24 animate-slideInUp-6">
          <div className="flex lg:flex-nowrap flex-wrap items-center gap-14 w-full h-full">
            <div className="flex flex-col lg:w-1/2 w-full">
              <Title semantique="h2" titleLight="" titleBold="Notre mission..." className="!text-left !px-0 mb-3"/>
              <p>Cosmose est bien plus qu'une simple plateforme de team building digital,<br/>c'est une véritable passerelle vers une collaboration renouvelée au sein des entreprises modernes.<br/>Notre mission est de rapprocher les équipes, où qu'elles soient en France, à travers des expériences interactives et enrichissantes. Que vos collaborateurs travaillent en télétravail ou soient dispersés géographiquement, nous offrons une solution flexible et innovante pour stimuler la cohésion d'équipe et l'engagement, tout en s'adaptant aux contraintes de temps et de budget des entreprises d'aujourd'hui.</p>
            </div>
            <div className="flex lg:w-1/2 w-full h-full">
              <img src="/img/bg-about.png" alt="About"/>
            </div>
          </div>
          <div className="flex lg:flex-nowrap flex-wrap-reverse items-center gap-14 w-full mt-14">
            <div className="flex lg:w-1/2 w-full h-full">
              <img src="/img/bg-about1.png" alt="About"/>
            </div>
            <div className="flex flex-col lg:w-1/2 w-full">
              <Title semantique="h2" titleLight="" titleBold="...Vous rapprocher" className="!text-left !px-0 mb-3"/>
              <p>Notre gamme d'activités variées, allant des escape games palpitants aux quizz interactifs en passant par des jeux de rôle immersifs, est conçue pour répondre à divers besoins et préférences.<br/>Avec Cosmose, vous pouvez offrir à votre équipe des expériences mémorables qui favorisent la collaboration, renforcent les liens professionnels et personnels, et favorisent une culture d'entreprise dynamique et inclusive. Notre approche personnalisée nous permet de nous adapter à votre entreprise, en vous offrant des solutions sur mesure pour répondre à vos objectifs spécifiques en matière de team building.</p>
            </div>
          </div>
        </div>
        <div className="mb-20">
          <Title semantique="h2" titleLight="Une équipe" titleBold="À votre écoute"/>
          <div className="gap-4 md:gap-8 lg:gap-10 flex justify-center flex-wrap w-full mt-14">
            <Card className="flex items-center !pb-4">
              <img src="/img/team/la.jpg" height={150} width={150} className="rounded-2xl" alt="Laurine"/>
              <p className="font-NexaHeavy text-lg mt-3">Laurine</p>
              <p>Commercial</p>
            </Card>
            <Card className="flex items-center !pb-4">
              <img src="/img/team/fl.jpg" height={150} width={150} className="rounded-2xl" alt="Flavie"/>
              <p className="font-NexaHeavy text-lg mt-3">Flavie</p>
              <p>Commercial</p>
            </Card>
            <Card className="flex items-center !pb-4">
              <img src="/img/team/ar.jpg" height={150} width={150} className="rounded-2xl" alt="Artur"/>
              <p className="font-NexaHeavy text-lg mt-3">Artur</p>
              <p>Commercial</p>
            </Card>
            <Card className="flex items-center !pb-4">
              <img src="/img/team/jv.jpg" height={150} width={150} className="rounded-2xl" alt="Jean-victor"/>
              <p className="font-NexaHeavy text-lg mt-3">Jean-Victor</p>
              <p>Animateur</p>
            </Card>
            <Card className="flex items-center !pb-4">
              <img src="/img/team/an.jpg" height={150} width={150} className="rounded-2xl" alt="Anais"/>
              <p className="font-NexaHeavy text-lg mt-3">Anaïs</p>
              <p>Graphiste / Designer</p>
            </Card>
            <Card className="flex items-center !pb-4">
              <img src="/img/team/er.jpg" height={150} width={150} className="rounded-2xl" alt="Erwan"/>
              <p className="font-NexaHeavy text-lg mt-3">Erwan</p>
              <p>Designer UX/UI</p>
            </Card>
            <Card className="flex items-center !pb-4">
              <img src="/img/team/ni.jpg" height={150} width={150} className="rounded-2xl" alt="Nicolas"/>
              <p className="font-NexaHeavy text-lg mt-3">Nicolas</p>
              <p>Développeur web</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
