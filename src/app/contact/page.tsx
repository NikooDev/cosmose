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
			<Title semantique="h1" titleLight="Une question ?" titleBold="Contactez-nous" className="mb-14 animate-slideInUp-1"/>
			<div className="container mx-auto">
				<div className="flex w-full justify-between animate-slideInUp-2">
					<div className="w-1/2">

					</div>
					<div className="w-1/2">
						<form>
							<div className="flex flex-col mb-4">
								<label htmlFor="name" className="mb-2 text-lg font-NexaHeavy">Nom et prénom*</label>
								<input id="name" className="placeholder:text-theme-50 border border-theme-50 h-10 px-4 rounded-full w-full bg-transparent"/>
							</div>
							<div className="flex gap-4 mb-4">
								<div className="flex flex-col w-full">
									<label htmlFor="email" className="mb-2 text-lg font-NexaHeavy">Adresse e-mail*</label>
									<input id="email" className="placeholder:text-theme-50 border border-theme-50 h-10 px-4 rounded-full w-full bg-transparent"/>
								</div>
								<div className="flex flex-col w-full">
									<label htmlFor="tel" className="mb-2 text-lg font-NexaHeavy">Téléphone</label>
									<input id="tel" className="placeholder:text-theme-50 border border-theme-50 h-10 px-4 rounded-full w-full bg-transparent"/>
								</div>
							</div>
							<div className="flex flex-col mb-4">
								<label htmlFor="object" className="mb-2 text-lg font-NexaHeavy">Objet*</label>
								<input id="object" className="placeholder:text-theme-50 border border-theme-50 h-10 px-4 rounded-full w-full bg-transparent"/>
							</div>
							<div className="flex flex-col mb-4">
								<label htmlFor="message" className="mb-2 text-lg font-NexaHeavy">Message*</label>
								<textarea id="message" rows={6} placeholder="Votre message" className="placeholder:text-theme-50 border border-theme-50 px-4 py-3 rounded-3xl w-full bg-transparent resize-none"/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
