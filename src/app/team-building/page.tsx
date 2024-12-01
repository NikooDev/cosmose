import React from 'react';
import { metadata as initialMetadata } from '@/app/layout';
import { Metadata } from 'next';
import Title from '@/components/ui/title';
import Card from '@/components/ui/card';
import Search from '@/components/teambuilding/search';

export const metadata: Metadata = {
	...initialMetadata,
	title: 'Cosmose • Team Buildings'
};

const TeamBuilding = () => {
  return (
    <section className="relative z-10 pt-10 pb-10">
			<Title semantique="h1" titleLight="Découvrez" titleBold="Nos team-buildings digitaux" className="mb-10 animate-slideInUp-1"/>
			<div className="container mx-auto flex flex-col items-center">
				<Card className="w-4/5 animate-slideInUp-2">
					<Search/>
				</Card>
				<div className="min-h-[800px]">

				</div>
			</div>
		</section>
	);
}

export default TeamBuilding;
