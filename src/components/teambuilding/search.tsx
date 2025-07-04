'use client';

import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import Button from '@/components/ui/button';
import { SearchInterface } from '@/types/search';

const Search: React.FC<SearchInterface> = ({
	setLoading,
	setSearchForm,
	searchForm
}) => {
	const [budget, setBudget] = useState<number>(200);
	const [euroSignPosition, setEuroSignPosition] = useState<number>(0);
	const inputRef = useRef<HTMLInputElement>(null);

	const handleInputChange = (type: 'objectif' | 'members' | 'budget' | 'date', e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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

	const handleSearchSubmit = () => {
		setLoading(true);

		setTimeout(() => {
			setLoading(false);
		}, 1500)
	}

	useEffect(() => {
		if (typeof window !== 'undefined' && inputRef.current) {
			const inputFont = '16px NexaHeavy';
			const textWidth = getTextWidth(budget.toString(), inputFont);
			setEuroSignPosition(textWidth + 12);
		}
	}, [budget]);

  return (
		<div className="flex flex-wrap lg:flex-nowrap items-center gap-4">
			<div className="flex flex-wrap md:flex-nowrap w-full gap-4">
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
				<div className="w-full md:w-1/2">
					<label className="flex mb-1.5 font-NexaHeavy" htmlFor="members">Participants</label>
					<input type="number" min={1} id="members" max={20} onChange={(event) => handleInputChange('members', event)} defaultValue={searchForm.members} placeholder="4" className="w-full h-9 text-slate-800 rounded-2xl px-3 font-NexaHeavy"/>
				</div>
			</div>
			<div className="flex flex-wrap md:flex-nowrap lg:w-3/4 w-full gap-4">
				<div className="w-full pr-4 md:pr-0">
					<label className="flex mb-1.5 font-NexaHeavy" htmlFor="date">Date</label>
					<input type="date" id="date" min={1} max={20} onChange={(event) => handleInputChange('date', event)} defaultValue={searchForm.date} placeholder="4" className="w-full h-9 text-slate-800 rounded-2xl px-3 font-NexaHeavy"/>
				</div>
				<div className="w-full">
					<label className="flex mb-1.5 font-NexaHeavy" htmlFor="budget">Budget</label>
					<div className="relative w-full h-9 rounded-2xl bg-theme-50 overflow-hidden px-3">
						<input ref={inputRef} id="budget" pattern="^[0-9]+$" type="number" min={0} placeholder="200 €" defaultValue={searchForm.budget} onChange={(event) => handleInputChange('budget', event)} className="w-full h-full text-slate-800 font-NexaHeavy bg-transparent outline-none"/>
						{searchForm.budget && (
							<span style={{left: `${euroSignPosition + 5}px`}} className="absolute top-1/2 transform -translate-y-1/2 text-slate-800 font-NexaHeavy pointer-events-none">€</span>
						)}
					</div>
				</div>
			</div>
			<Button onClick={handleSearchSubmit} className="mt-0 px-8 w-full lg:w-auto h-9 self-end">Rechercher</Button>
		</div>
	);
}

export default Search;
