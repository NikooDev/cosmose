import React from 'react';
import Image from 'next/image';
import './lastnew.scss';
import Title from '@/components/ui/title';

const Lastnew = () => {
  return (
    <section className="w-full flex flex-col mt-20 relative">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <Title titleLight="Dernière nouveauté" titleBold="Quiz en équipe"/>
        </div>
        <div className="mt-28 flex justify-between">
          <div className="relative">
            <div className="absolute bg-white/20 border border-white/20 backdrop-blur-sm rounded-2xl w-32 h-20 -top-10 left-10 flex justify-center items-center">
              <Image src="/svg/micro.svg" alt="Camera" height={42} width={32} className="mb-0.5"/>
            </div>
            <Image src="/img/image9.jpg" alt="Person 9" className="rounded-3xl" width={550} height={366}/>
            <div className="absolute bg-white/20 border border-white/20 backdrop-blur-sm -bottom-10 right-10 rounded-2xl w-32 h-20 flex justify-center items-center">
              <Image src="/svg/camera.svg" alt="Camera" height={42} width={32} className="mb-0.5"/>
            </div>
          </div>
          <div>

          </div>
        </div>
      </div>
      <img src="svg/wave1.svg" className="absolute left-0 -top-24 w-full -z-10" alt="Rectangle"/>
    </section>
  );
}

export default Lastnew;
