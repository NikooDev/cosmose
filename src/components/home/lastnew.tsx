import React from 'react';
import Image from 'next/image';
import './lastnew.scss';
import Title from '@/components/ui/title';
import Button from '@/components/ui/button';

const Lastnew = () => {
  return (
    <section className="w-full flex flex-col mt-20 relative">
      <img src="svg/ellipse3.svg" height={1000} width={1000} className="absolute -top-14 left-40 -z-10 pointer-events-none" alt="Ellipse"/>
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <Title titleLight="Dernière nouveauté" titleBold="Quiz en équipe" semantique="h2"/>
        </div>
        <div className="mt-28 flex justify-between items-center gap-16 w-full">
          <div className="relative">
            <div className="absolute bg-white/20 border border-white/20 backdrop-blur-sm rounded-2xl w-32 h-20 -top-10 left-10 flex justify-center items-center">
              <img src="/svg/micro.svg" alt="Micro" height={42} width={32} className="mb-0.5"/>
            </div>
            <Image src="/img/home/image9.jpg" alt="Person 9" className="rounded-3xl" width={640} height={427}/>
            <div className="absolute bg-white/20 border border-white/20 backdrop-blur-sm -bottom-10 right-10 rounded-2xl w-32 h-20 flex justify-center items-center">
              <img src="/svg/camera.svg" alt="Camera" height={42} width={32} className="mb-0.5"/>
            </div>
          </div>
          <div className="w-1/2">
            <h2 className="font-NexaHeavy text-2xl">Les Co’llègues</h2>
            <div className="flex items-center my-3">
              <div className="flex">
                <img src="/img/icons/time.svg" alt="time"/>
                <p className="ml-2 font-NexaHeavy">2h</p>
              </div>
              <p className="mx-2">•</p>
              <div className="flex">
                <img src="/img/icons/users.svg" alt="time"/>
                <p className="ml-2 font-NexaHeavy">8-16</p>
              </div>
              <p className="mx-2">•</p>
              <div className="flex">
                <img src="/img/icons/euro.svg" alt="time"/>
                <p className="ml-2 font-NexaHeavy">30€/pers</p>
              </div>
            </div>
            <p className="text-lg">
              Rivalisez d'ingéniosité et de rapidité pour répondre à des questions en duo ou en trio.<br/><br/>
              Ce jeu plein de rebondissements promet des moments de rires et de camaraderie, parfait pour resserrer les liens et découvrir vos collègues.
            </p>
            <Button className="px-6">Découvrir</Button>
          </div>
        </div>
      </div>
      <img src="svg/wave1.svg" className="absolute left-0 -top-24 w-full -z-10" alt="Rectangle"/>
    </section>
  );
}

export default Lastnew;
