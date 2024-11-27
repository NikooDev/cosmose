import React from 'react';
import './infos.scss';
import Title from '@/components/ui/title';

const Infos = () => {
  return (
		<section className="w-full flex flex-col mt-20 relative">
			<div className="container mx-auto">
				<div className="flex items-center justify-center">
					<Title titleLight="Rapprocher, engager, divertir" titleBold="Cosmose"/>
				</div>
				<div className="mt-10">
					<div className="flex justify-center mb-20">
						<p className="w-[550px] text-center font-NexaHeavy text-lg">
							Cosmose rapproche les équipes à travers des team buildings digitaux uniques, renforçant la cohésion et
							l'engagement, quel que soit la distance qui les sépare.
						</p>
					</div>
					<div className="flex gap-10">
						<div className="bg-theme-50/10 w-full flex justify-center items-center flex-col backdrop-blur-lg py-6 px-4 relative z-20 rounded-3xl border border-theme-50/10">
							<img src="/img/reunion.png" height={50} width={50} alt="reunion"/>
							<p className="font-NexaHeavy text-2xl mt-2 mb-4">Rapprocher</p>
							<p className="text-center">Les équipes dispersées à travers des expériences collaboratives uniques, renforçant ainsi les liens professionnels et personnels.</p>
						</div>
						<div className="bg-theme-50/10 w-full flex justify-center items-center flex-col backdrop-blur-lg py-6 px-4 relative z-20 rounded-3xl border border-theme-50/10">
							<img src="/img/presentation.png" height={50} width={50} alt="reunion"/>
							<p className="font-NexaHeavy text-2xl mt-2 mb-4">Engager</p>
							<p className="text-center">Chaque membre de l'équipe dans une aventure immersive, favorisant ainsi la participation active et l'implication à long terme.</p>
						</div>
						<div className="bg-theme-50/10 w-full flex justify-center items-center flex-col backdrop-blur-lg py-6 px-4 relative z-20 rounded-3xl border border-theme-50/10">
							<img src="/img/joie.png" height={50} width={50} alt="reunion"/>
							<p className="font-NexaHeavy text-2xl mt-2 mb-4">Divertir</p>
							<p className="text-center">Les collaborateurs avec des activités ludiques et interactives, offrant ainsi une pause méritée dans leur quotidien professionnel.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
);
}

export default Infos;
