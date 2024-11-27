import React from 'react';
import Intro from '@/components/home/intro';
import Lastnew from '@/components/home/lastnew';
import Partners from '@/components/home/partners';
import Bestsellers from '@/components/home/bestsellers';
import Infos from '@/components/home/infos';
import Lastblog from '@/components/home/lastblog';

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
