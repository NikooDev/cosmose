'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Class from 'classnames';
import './intro.scss';

const Intro = () => {
	const [isClient, setIsClient] = useState(false);

	const images = [
		{ src: '/img/image1.jpg', width: 150, height: 100, style: { top: '-7.3rem', left: '12rem' } },
		{ src: '/img/image2.jpg', animated: true, width: 264, height: 176, style: { top: '0', left: '0' } },
		{ src: '/img/image3.jpg', animated: true, width: 231, height: 154, style: { top: '-3.5rem', left: '29.5rem' } },
		{ src: '/img/image4.jpg', width: 177, height: 118, style: { top: '-6rem', left: '22.4rem' } },
		{ src: '/img/image5.jpg', animated: true, width: 193, height: 128, style: { top: '13.5rem', left: '26rem', zIndex: 1 } },
		{ src: '/img/image6.jpg', width: 233, height: 154, style: { top: '12.1rem', left: '7.9rem' } },
		{ src: '/img/image7.jpg', animated: true, width: 294, height: 196, style: { left: '17.5rem', top: '2.5rem' } },
		{ src: '/img/image8.jpg', animated: true, width: 158, height: 105, style: { top: '9.5rem', left: '-3rem' } },
	];

	useEffect(() => setIsClient(true), []);

	const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement, Event>, index: number) => {
		setTimeout(() => {
			event.currentTarget.classList.add('loaded')
		}, 100 * index);
	};

	return (
		<section className="flex flex-col overflow-hidden pb-24">
			<h1 className="text-7xl font-[900] mb-10 font-NexaHeavy mt-14 container mx-auto animate-slideInUp-1">
				Briser la barrière<br/>
				du distanciel
			</h1>
			<div className="flex relative">
				<Image src="svg/ellipse6.svg" height={400} width={600} className="absolute -top-14 -left-40 pointer-events-none" alt="Ellipse"/>
				<div className="container mx-auto flex justify-between">
					<div className="bg-theme-50/10 h-[350px] w-[450px] flex flex-col backdrop-blur-lg p-6 relative z-20 rounded-3xl border border-theme-50/10 animate-slideInUp-2">
						<p className="text-lg">
							Peut importe vos besoins et votre budget, trouvez
							l'activité idéale pour vos équipes.</p>
						<div className="flex w-full gap-4 mt-8">
							<div className="w-full relative">
								<label className="flex mb-1.5 font-NexaHeavy">Objectif</label>
								<select className="w-full h-9 text-slate-800 rounded-2xl pl-3 pr-9 appearance-none">
									<option className="text-slate-600">Sélectionner</option>
									<option>Améliorer la cohésion entre les collaborateurs</option>
									<option>Facilité l'intégration des nouveaux collaborateurs</option>
									<option>(Re)Motiver les collaborateurs</option>
									<option>Apporter de la compétition saine</option>
									<option>Réduire le sentiment d'isolement</option>
									<option>Transmettre la culture de l'entreprise</option>
									<option>Réduire le stress des collaborateurs</option>
								</select>
								<svg xmlns="http://www.w3.org/2000/svg" height={16} width={16} className="fill-slate-800 absolute right-2.5 top-10" viewBox="0 0 24 24">
									<path d="M20.08,6.83a.5.5,0,0,1,.71,0l1.06,1.06a.48.48,0,0,1,0,.7l-9.19,9.19a.75.75,0,0,1-.53.22h-.26a.75.75,0,0,1-.53-.22L2.15,8.59a.48.48,0,0,1,0-.7L3.21,6.83a.5.5,0,0,1,.71,0L12,14.91Z"/>
								</svg>
							</div>
							<div className="w-full">
								<label className="flex mb-1.5 font-NexaHeavy">Participants</label>
								<input type="number" min={1} max={20} defaultValue={4} className="w-full h-9 text-slate-800 rounded-2xl px-3"/>
							</div>
						</div>
						<div className="flex w-full gap-4 mt-4">
							<div className="w-full">
								<label className="flex mb-1.5 font-NexaHeavy">Date</label>
								<input type="date" defaultValue={new Date().toISOString().split('T')[0]} className="w-full h-9 text-slate-800 rounded-2xl px-2"/>
							</div>
							<div className="w-full">
								<label className="flex mb-1.5 font-NexaHeavy">Budget</label>
								<input type="number" min={0} defaultValue={200} className="w-full h-9 text-slate-800 rounded-2xl px-3"/>
							</div>
						</div>
						<button className="bg-theme-400 font-NexaHeavy h-10 rounded-3xl mt-5 hover:bg-theme-500 transition-colors duration-150">Trouver
							une activité
						</button>
					</div>
					<div className="relative w-1/2 h-full hero-img">
						{images.map((image, index) => (
							<Image
								key={index}
								src={image.src}
								alt={`Person ${index + 1}`}
								width={image.width}
								height={image.height}
								className={Class('absolute rounded-2xl object-cover', image.animated && `animate-float-${index}`)}
								style={image.style}
								onLoad={(event) => handleImageLoad(event, index)}
							/>
						))}
						<div className={Class('absolute bg-white/20 border border-white/20 backdrop-blur-sm rounded-2xl w-36 h-24 flex justify-center items-center hero-icon', isClient && 'loaded')}>
							<Image src="/svg/camera.svg" alt="Camera" height={38} width={43} className="mb-0.5"/>
						</div>
					</div>
				</div>
				<img src="svg/wave.svg" className="absolute left-0 -top-40 w-full -z-10" alt="Rectangle"/>
			</div>
			<div className="flex justify-center relative">
				<div className="flex items-center justify-center flex-col absolute -bottom-[5rem] animate-float-1 bg-white z-50 w-7 h-10 rounded-3xl">
					<svg xmlns="http://www.w3.org/2000/svg" height={16} width={16} className="fill-slate-800" viewBox="0 0 24 24">
						<path d="M20.08,6.83a.5.5,0,0,1,.71,0l1.06,1.06a.48.48,0,0,1,0,.7l-9.19,9.19a.75.75,0,0,1-.53.22h-.26a.75.75,0,0,1-.53-.22L2.15,8.59a.48.48,0,0,1,0-.7L3.21,6.83a.5.5,0,0,1,.71,0L12,14.91Z"/>
					</svg>
					<svg xmlns="http://www.w3.org/2000/svg" height={16} width={16} className="fill-slate-800 -mt-1.5" viewBox="0 0 24 24">
						<path d="M20.08,6.83a.5.5,0,0,1,.71,0l1.06,1.06a.48.48,0,0,1,0,.7l-9.19,9.19a.75.75,0,0,1-.53.22h-.26a.75.75,0,0,1-.53-.22L2.15,8.59a.48.48,0,0,1,0-.7L3.21,6.83a.5.5,0,0,1,.71,0L12,14.91Z"/>
					</svg>
				</div>
			</div>
		</section>
	);
};

export default Intro;
