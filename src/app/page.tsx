import React from 'react';
import Intro from '@/components/home/intro';
import Lastnew from '@/components/home/lastnew';
import Partners from '@/components/home/partners';
import Bestsellers from '@/components/home/bestsellers';
import Infos from '@/components/home/infos';
import Lastblog from '@/components/home/lastblog';
import Footer from '@/components/footer/footer';

const Home = () => {
  return (
    <>
      <Intro/>
      <Lastnew/>
      <Bestsellers/>
      <Partners/>
      <Infos/>
      <Lastblog/>
      <Footer/>
    </>
  );
}

export default Home;
