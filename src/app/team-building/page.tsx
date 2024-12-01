import React from 'react';
import { metadata as initialMetadata } from '@/app/layout';
import { Metadata } from 'next';
import Title from '@/components/ui/title';
import Teambuildings from '@/components/teambuilding/teambuildings';

export const metadata: Metadata = {
	...initialMetadata,
	title: 'Cosmose • Team Buildings'
};

const TeamBuilding = () => {
  return (
    <section className="relative z-10 pt-10 pb-10">
			<Title semantique="h1" titleLight="Découvrez" titleBold="Nos team-buildings digitaux" className="mb-10 animate-slideInUp-1"/>
			<div className="container mx-auto flex flex-col items-center">
				<Teambuildings/>
			</div>
		</section>
	);
}

export default TeamBuilding;
