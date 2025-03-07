import React from 'react';
import Title from '@/components/ui/title';
import './partners.scss';

const Partners = () => {
  const partners = [
    { url: '/img/partners/ca.png', height: 40, width: 200 },
    { url: '/img/partners/bouygues.png', height: 62, width: 200 },
    { url: '/img/partners/webedia.png', height: 62, width: 200 },
    { url: '/img/partners/intersport.png', height: 26, width: 226 },
    { url: '/img/partners/edf.png', height: 55, width: 129 },
    { url: '/img/partners/fortuneo.png', height: 55, width: 195 },
    { url: '/img/partners/airfrance.png', height: 22, width: 226 },
    { url: '/img/partners/alstom.png', height: 33, width: 170 },
    { url: '/img/partners/leclerc.png', height: 46, width: 200 },
    { url: '/img/partners/intermarche.png', height: 38, width: 200 },
    { url: '/img/partners/decathlon.png', height: 31, width: 200 },
    { url: '/img/partners/vinci.png', height: 59, width: 211 }
  ]

  return (
    <section className="w-full flex flex-col mt-20 relative bg-gradient-to-t from-transparent via-theme-700 to-transparent py-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <Title titleLight="Ils ont passé" titleBold="Un bon moment" semantique="h2"/>
        </div>
      </div>
      <div className="mt-10 relative overflow-hidden px-4">
        <div className="flex flex-col h-auto w-full animate-scroll-wrapper">
          <div className="flex justify-center items-center animate-scroll-left mb-4">
            {partners.slice(0, 6).map((partner, index) => (
              <img key={index}
                   src={partner.url} width={partner.width} height={partner.height}
                   style={{width: partner.width, height: partner.height}}
                   className="mx-4 object-contain scale-75" alt="partner"/>
            ))}
            {partners.slice(0, 6).map((partner, index) => (
              <img key={'duplicate-left-' + index}
                   src={partner.url} width={partner.width} height={partner.height}
                   style={{width: partner.width, height: partner.height}}
                   className="mx-4 object-contain scale-75" alt="partner"/>
            ))}
          </div>
          <div className="flex justify-center items-center animate-scroll-right">
            {partners.slice(6).map((partner, index) => (
              <img key={index}
                   src={partner.url} width={partner.width} height={partner.height}
                   style={{width: partner.width, height: partner.height}}
                   className="mx-4 object-contain scale-75" alt="partner"/>
            ))}
            {partners.slice(6).map((partner, index) => (
              <img key={'duplicate-right-' + index}
                   src={partner.url} width={partner.width} height={partner.height}
                   style={{width: partner.width, height: partner.height}}
                   className="mx-4 object-contain scale-75" alt="partner"/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;
