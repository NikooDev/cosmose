import React from 'react';
import './infos.scss';
import Title from '@/components/ui/title';
import Card from '@/components/ui/card';

const Infos = () => {
  return (
		<section className="w-full flex flex-col mt-28 relative">
			<div className="container mx-auto">
				<div className="flex items-center justify-center">
					<Title titleLight="Rapprocher, engager, divertir" titleBold="Cosmose" semantique="h2"/>
				</div>
				<div className="mt-10">
					<div className="flex justify-center mb-20">
						<p className="w-[550px] text-center font-NexaHeavy text-lg">
							Cosmose rapproche les équipes à travers des team buildings digitaux uniques, renforçant la cohésion et
							l'engagement, quel que soit la distance qui les sépare.
						</p>
					</div>
					<div className="flex lg:flex-nowrap flex-wrap gap-14 relative">
						<img src="svg/ellipse2.svg" height={717} width={1445} className="fixed lg:absolute -top-72 left-40 w-[80vw] max-w-none -z-10 pointer-events-none" alt="Ellipse"/>
						<Card className="w-full items-center">
							<img src="/img/icons/reunion.png" height={50} width={50} alt="reunion"/>
							<p className="font-NexaHeavy text-2xl mt-2 mb-4">Rapprocher</p>
							<p className="text-center text-lg">Les équipes dispersées à travers des expériences collaboratives uniques,
								renforçant ainsi les liens professionnels et personnels.</p>
						</Card>
						<Card className="w-full items-center">
							<img src="/img/icons/presentation.png" height={50} width={50} alt="reunion"/>
							<p className="font-NexaHeavy text-2xl mt-2 mb-4">Engager</p>
							<p className="text-center text-lg">Chaque membre de l'équipe dans une aventure immersive, favorisant ainsi la
								participation active et l'implication à long terme.</p>
						</Card>
						<Card className="w-full items-center">
							<img src="/img/icons/joie.png" height={50} width={50} alt="reunion"/>
							<p className="font-NexaHeavy text-2xl mt-2 mb-4">Divertir</p>
							<p className="text-center text-lg">Les collaborateurs avec des activités ludiques et interactives, offrant ainsi
								une pause méritée dans leur quotidien professionnel.</p>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Infos;
