import React from 'react';
import { metadata as initialMetadata } from '@/app/layout';
import { Metadata } from 'next';
import Title from '@/components/ui/title';

export const metadata: Metadata = {
	...initialMetadata,
	title: 'Cosmose • Confidentialité'
};

const Privacy = () => {
  return (
		<section className="relative z-10 pt-10 pb-10 min-h-[500px]">
			<Title semantique="h1" titleLight="Politique de" titleBold="Confidentialité" className="mb-10 animate-slideInUp-1"/>
		</section>
	);
}

export default Privacy;