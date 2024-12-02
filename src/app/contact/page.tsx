import React from 'react';
import { metadata as initialMetadata } from '@/app/layout';
import { Metadata } from 'next';
import Title from '@/components/ui/title';

export const metadata: Metadata = {
	...initialMetadata,
	title: 'Cosmose • Contactez-nous'
};

const Contact = () => {
  return (
		<section className="relative z-10 pt-10 pb-10 min-h-[500px]">
			<Title semantique="h1" titleLight="Une question ?" titleBold="Contactez-nous" className="mb-10 animate-slideInUp-1"/>
		</section>
	);
}

export default Contact;
