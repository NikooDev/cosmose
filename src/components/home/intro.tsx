'use client';

import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/button';
import Image from 'next/image';
import Class from 'classnames';
import Card from '@/components/ui/card';
import './intro.scss';

const Intro = () => {
	const [searchForm, setSearchForm] = useState({ objectif: '', members: 4, budget: 200 })
	const [isClient, setIsClient] = useState(false);
	const [budget, setBudget] = useState<number>(200);
	const [euroSignPosition, setEuroSignPosition] = useState<number>(0);
	const inputRef = useRef<HTMLInputElement>(null);

	const handleInputChange = (type: 'objectif' | 'members' | 'budget', e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const inputValue = e.target.value;

		if (type === 'budget') {
			const newValue = parseFloat(inputValue);

			if (!isNaN(newValue)) {
				setBudget(newValue);
			}
		}

		setSearchForm({ ...searchForm, [type]: inputValue });
	};

	const getTextWidth = (text: string, font: string) => {
		const canvas = document.createElement('canvas');
		const context = canvas.getContext('2d');

		if (context) {
			context.font = font;
			return context.measureText(text).width;
		}

		return 0;
	};

	useEffect(() => {
		if (typeof window !== 'undefined' && inputRef.current) {
			const inputFont = '16px NexaHeavy';
			const textWidth = getTextWidth(budget.toString(), inputFont);
			setEuroSignPosition(textWidth + 12);
		}
	}, [budget]);

	const images = [
		{ src: '/img/home/image1.jpg', width: 150, height: 100, style: { top: '-7.3rem', left: '12rem' } },
		{ src: '/img/home/image2.jpg', animated: true, width: 264, height: 176, style: { top: '0', left: '0' } },
		{ src: '/img/home/image3.jpg', animated: true, width: 231, height: 154, style: { top: '-3.5rem', left: '29.5rem' } },
		{ src: '/img/home/image4.jpg', width: 177, height: 118, style: { top: '-6rem', left: '22.4rem' } },
		{ src: '/img/home/image5.jpg', animated: true, width: 193, height: 128, style: { top: '13.5rem', left: '26rem', zIndex: 1 } },
		{ src: '/img/home/image6.jpg', width: 233, height: 154, style: { top: '12.1rem', left: '7.9rem' } },
		{ src: '/img/home/image7.jpg', animated: true, width: 294, height: 196, style: { left: '17.5rem', top: '2.5rem' } },
		{ src: '/img/home/image8.jpg', animated: true, width: 158, height: 105, style: { top: '9.5rem', left: '-3rem' } },
	];

	useEffect(() => setIsClient(true), []);

	const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement, Event>, index: number) => {
		setTimeout(() => {
			event.currentTarget.classList.add('loaded')
		}, 100 * index);
	};

	const handleSearchSubmit = () => {
		console.log(searchForm);
	}

	return (
		<section className="flex flex-col overflow-hidden pb-24">
			<h1 className="text-7xl font-[900] mb-10 font-NexaHeavy mt-14 container mx-auto animate-slideInUp-1">
				Briser la barrière<br/>
				du distanciel
			</h1>
			<div className="flex relative">
				<div className="container mx-auto flex justify-between">
					<Card className="h-[350px] w-[450px] animate-slideInUp-2">
					<p className="text-lg">
							Peut importe vos besoins et votre budget, trouvez
							l'activité idéale pour vos équipes.</p>
						<div className="flex w-full gap-4 mt-8">
							<div className="w-full relative">
								<label className="flex mb-1.5 font-NexaHeavy" htmlFor="objectif">Objectif</label>
								<select id="objectif" className="w-full h-9 text-slate-800 rounded-2xl pl-3 pr-9 appearance-none font-NexaHeavy"
												onChange={(event) => handleInputChange('objectif', event)}>
									<option className="text-slate-600">Sélectionner</option>
									<option>Améliorer la cohésion entre les collaborateurs</option>
									<option>Facilité l'intégration des nouveaux collaborateurs</option>
									<option>(Re)Motiver les collaborateurs</option>
									<option>Apporter de la compétition saine</option>
									<option>Réduire le sentiment d'isolement</option>
									<option>Transmettre la culture de l'entreprise</option>
									<option>Réduire le stress des collaborateurs</option>
								</select>
								<svg xmlns="http://www.w3.org/2000/svg" height={16} width={16} className="fill-slate-800 absolute right-2.5 top-10 pointer-events-none" viewBox="0 0 24 24">
									<path d="M20.08,6.83a.5.5,0,0,1,.71,0l1.06,1.06a.48.48,0,0,1,0,.7l-9.19,9.19a.75.75,0,0,1-.53.22h-.26a.75.75,0,0,1-.53-.22L2.15,8.59a.48.48,0,0,1,0-.7L3.21,6.83a.5.5,0,0,1,.71,0L12,14.91Z"/>
								</svg>
							</div>
						</div>
						<div className="flex w-full gap-4 mt-4">
							<div className="w-full">
								<label className="flex mb-1.5 font-NexaHeavy" htmlFor="members">Participants</label>
								<input type="number" min={1} id="members" max={20} onChange={(event) => handleInputChange('members', event)} defaultValue={searchForm.members} placeholder="4" className="w-full h-9 text-slate-800 rounded-2xl px-3 font-NexaHeavy"/>
							</div>
							<div className="w-full">
								<label className="flex mb-1.5 font-NexaHeavy" htmlFor="budget">Budget</label>
								<div className="relative w-full h-9 rounded-2xl bg-white overflow-hidden px-3">
									<input ref={inputRef} id="budget" pattern="^[0-9]+$" type="number" min={0} placeholder="200 €" defaultValue={searchForm.budget} onChange={(event) => handleInputChange('budget', event)} className="w-full h-full text-slate-800 font-NexaHeavy bg-transparent outline-none"/>
									{searchForm.budget && (
										<span style={{left: `${euroSignPosition + 5}px`}} className="absolute top-1/2 transform -translate-y-1/2 text-slate-800 font-NexaHeavy pointer-events-none">€</span>
									)}
								</div>
							</div>
						</div>
						<Button onClick={handleSearchSubmit}>Trouver une activité</Button>
					</Card>
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
