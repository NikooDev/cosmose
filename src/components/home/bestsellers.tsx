import React from 'react';
import './bestsellers.scss';
import Title from '@/components/ui/title';
import Card from '@/components/ui/card';
import Image from 'next/image';
import Button from '@/components/ui/button';

const Bestsellers = () => {
  return (
    <section className="w-full flex flex-col mt-32 relative min-h-[700px]">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-14">
          <Title titleLight="Découvrez nos" titleBold="Best-Sellers" semantique="h2"/>
        </div>
        <div className="flex gap-10">
          <Card className="w-full p-0 hover:-translate-y-4 transition-transform duration-300">
            <Image src="/img/game1.jpg" width={387} height={258} alt="game1" className="w-[387] h-[258px] rounded-t-3xl"/>
            <div className="p-4">
              <p className="text-3xl font-NexaHeavy">Fast Quizz</p>
              <div className="flex items-center mb-4 mt-1">
                <div className="flex">
                  <img src="/img/time.svg" alt="time"/>
                  <p className="ml-2 font-NexaHeavy">2h</p>
                </div>
                <p className="mx-2">•</p>
                <div className="flex">
                  <img src="/img/users.svg" alt="time"/>
                  <p className="ml-2 font-NexaHeavy">10-40</p>
                </div>
                <p className="mx-2">•</p>
                <div className="flex">
                  <img src="/img/euro.svg" alt="time"/>
                  <p className="ml-2 font-NexaHeavy">40€/pers</p>
                </div>
              </div>
              <p className="text-lg">
                Mettez vos équipes au défi avec notre quizz interactif où la rapididé est
                primordiale. Les participants s'affrontent pour répondre le plus...
              </p>
            </div>
          </Card>
          <Card className="w-full p-0 hover:-translate-y-4 transition-transform duration-300">
            <Image src="/img/game2.jpg" width={387} height={258} alt="game2" className="w-[387] h-[258px] rounded-t-3xl"/>
            <div className="p-4">
              <p className="text-3xl font-NexaHeavy">Jeu de rôle</p>
              <div className="flex items-center mb-4 mt-1">
                <div className="flex">
                  <img src="/img/time.svg" alt="time"/>
                  <p className="ml-2 font-NexaHeavy">3h</p>
                </div>
                <p className="mx-2">•</p>
                <div className="flex">
                  <img src="/img/users.svg" alt="time"/>
                  <p className="ml-2 font-NexaHeavy">10</p>
                </div>
                <p className="mx-2">•</p>
                <div className="flex">
                  <img src="/img/euro.svg" alt="time"/>
                  <p className="ml-2 font-NexaHeavy">30€/pers</p>
                </div>
              </div>
              <p className="text-lg">
                Les collaborateurs se glissent dans la peau de leurs collègues, apprenant à mieux comprendre leurs perspectives et défis. Cette...
              </p>
            </div>
          </Card>
          <Card className="w-full p-0 hover:-translate-y-4 transition-transform duration-300">
            <Image src="/img/game3.jpg" width={387} height={258} alt="game3" className="w-[387] h-[258px] rounded-t-3xl"/>
            <div className="p-4">
              <p className="text-3xl font-NexaHeavy">Blindtest musical</p>
              <div className="flex items-center mb-4 mt-1">
                <div className="flex">
                  <img src="/img/time.svg" alt="time"/>
                  <p className="ml-2 font-NexaHeavy">1h</p>
                </div>
                <p className="mx-2">•</p>
                <div className="flex">
                  <img src="/img/users.svg" alt="time"/>
                  <p className="ml-2 font-NexaHeavy">10-60</p>
                </div>
                <p className="mx-2">•</p>
                <div className="flex">
                  <img src="/img/euro.svg" alt="time"/>
                  <p className="ml-2 font-NexaHeavy">20€/pers</p>
                </div>
              </div>
              <p className="text-lg">
                Laissez la musique vous unir !<br/>Sélectionnez le thème musical qui vous inspire le plus, puis laissez vos collaborateurs deviner les chansons.
              </p>
            </div>
          </Card>
        </div>
        <div className="flex justify-center my-8">
          <Button className="px-6">Nos Team-Buildings</Button>
        </div>
      </div>
      <img src="svg/wave.svg" className="absolute left-0 top-44 w-full -z-10" alt="Rectangle"/>
    </section>
  );
}

export default Bestsellers;
