import React from 'react';
import './partners.scss';
import Title from '@/components/ui/title';
import Image from 'next/image';

const Partners = () => {
  const partners = [
    { url: '/img/ca.png', height: 40, width: 200 },
    { url: '/img/bouygues.png', height: 62, width: 200 },
    { url: '/img/webedia.png', height: 62, width: 200 },
    { url: '/img/intersport.png', height: 26, width: 226 },
    { url: '/img/edf.png', height: 55, width: 129 },
    { url: '/img/fortuneo.png', height: 55, width: 195 },
    { url: '/img/airfrance.png', height: 22, width: 226 },
    { url: '/img/alstom.png', height: 33, width: 170 },
    { url: '/img/leclerc.png', height: 46, width: 200 },
    { url: '/img/intermarche.png', height: 38, width: 200 },
    { url: '/img/decathlon.png', height: 31, width: 200 },
    { url: '/img/vinci.png', height: 59, width: 211 }
  ]

  return (
    <section className="w-full flex flex-col mt-20 relative">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <Title titleLight="Ils ont passé" titleBold="Un bon moment"/>
        </div>
      </div>
      <div className="mt-16 flex relative overflow-x-hidden px-4">
        <div className="flex h-auto w-max justify-center items-center animate-scroll">
          {partners.map((partner, index) => (
            <Image key={index}
                   src={partner.url} width={partner.width} height={partner.height}
                   style={{ width: partner.width, height: partner.height }}
                   className="mx-8 object-cover" alt="partner"/>
          ))}
          {partners.map((partner, index) => (
            <Image key={'duplicate'+index}
                   src={partner.url} width={partner.width} height={partner.height}
                   style={{ width: partner.width, height: partner.height }}
                   className="mx-8 object-cover" alt="partner-duplicate"/>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;
