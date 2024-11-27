import React from 'react';
import './bestsellers.scss';
import Title from '@/components/ui/title';

const Bestsellers = () => {
  return (
    <section className="w-full flex flex-col mt-20 relative">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <Title titleLight="Découvrez nos" titleBold="Best-Sellers"/>
        </div>
      </div>
    </section>
  );
}

export default Bestsellers;
