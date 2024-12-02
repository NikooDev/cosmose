import React from 'react';
import { metadata as initialMetadata } from '@/app/layout';
import { Metadata } from 'next';
import Title from '@/components/ui/title';

export const metadata: Metadata = {
	...initialMetadata,
	title: 'Cosmose • Plan du site'
};

const Sitemap = () => {
  return (
		<section className="relative z-10 pt-10 pb-10">
			<Title semantique="h1" titleLight="Arborescence du" titleBold="Site" className="mb-10 animate-slideInUp-1"/>
		</section>
	);
}

export default Sitemap;
