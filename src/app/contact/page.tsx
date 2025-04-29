import React from 'react';
import { metadata as initialMetadata } from '@/app/layout';
import { Metadata } from 'next';
import Title from '@/components/ui/title';
import Button from "@/components/ui/button";

export const metadata: Metadata = {
	...initialMetadata,
	title: 'Cosmose • Contactez-nous'
};

const Contact = () => {
  return (
		<section className="relative z-10 pt-10 pb-10 min-h-[500px]">
			<div className="container mx-auto">
				<div className="flex flex-wrap lg:flex-nowrap gap-14 w-full justify-between animate-slideInUp-2 mt-16">
					<div className="w-full">
						<Title semantique="h1" titleLight="Une question ?" titleBold="Contactez-nous" className="mb-8 animate-slideInUp-1 !px-0 lg:!text-left"/>
						<div className="lg:text-left text-center">
							<p className="font-NexaHeavy text-2xl mb-2">Coordonnées</p>
							<div className="flex items-center justify-center lg:justify-start">
								<img src="/svg/call.svg" alt="Call" height={32} width={32}/>
								<span className="text-lg font-NexaHeavy ml-3">02 00 00 00 00</span>
							</div>
							<p className="font-NexaHeavy text-2xl mb-2 mt-8">Réseaux</p>
							<ul className="mt-3 flex justify-center lg:justify-start gap-7">
								<li>
									<a href="" target="_blank" role="button" className="group">
										<img src="/img/icons/instagram.svg" height={28} width={28} className="group-hover:scale-[1.2] transition-transform" alt="instagram"/>
									</a>
								</li>
								<li>
									<a href="" target="_blank" role="button" className="group">
										<img src="/img/icons/facebook.svg" height={28} width={28} className="group-hover:scale-[1.2] transition-transform" alt="facebook"/>
									</a>
								</li>
								<li>
									<a href="" target="_blank" role="button" className="group">
										<img src="/img/icons/linkedin.svg" height={28} width={28} className="group-hover:scale-[1.2] transition-transform" alt="linkedin"/>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="w-full">
						<form>
							<div className="flex flex-col mb-4">
								<label htmlFor="name" className="mb-2 text-lg font-NexaHeavy">Nom et prénom*</label>
								<input id="name" className="placeholder:text-theme-50 focus:bg-white/10 transition-colors duration-200 border border-theme-50 h-10 px-4 rounded-full w-full bg-transparent"/>
							</div>
							<div className="flex gap-4 mb-4">
								<div className="flex flex-col w-full">
									<label htmlFor="email" className="mb-2 text-lg font-NexaHeavy">Adresse e-mail*</label>
									<input id="email" className="placeholder:text-theme-50 focus:bg-white/10 transition-colors duration-200 border border-theme-50 h-10 px-4 rounded-full w-full bg-transparent"/>
								</div>
								<div className="flex flex-col w-full">
									<label htmlFor="tel" className="mb-2 text-lg font-NexaHeavy">Téléphone</label>
									<input id="tel" className="placeholder:text-theme-50 focus:bg-white/10 transition-colors duration-200 border border-theme-50 h-10 px-4 rounded-full w-full bg-transparent"/>
								</div>
							</div>
							<div className="flex flex-col mb-4">
								<label htmlFor="object" className="mb-2 text-lg font-NexaHeavy">Objet*</label>
								<input id="object" className="placeholder:text-theme-50 focus:bg-white/10 transition-colors duration-200 border border-theme-50 h-10 px-4 rounded-full w-full bg-transparent"/>
							</div>
							<div className="flex flex-col">
								<label htmlFor="message" className="mb-2 text-lg font-NexaHeavy">Message*</label>
								<textarea id="message" rows={6} placeholder="Votre message" className="placeholder:text-theme-50 focus:bg-white/10 transition-colors duration-200 border border-theme-50 px-4 py-3 rounded-3xl w-full bg-transparent resize-none"/>
							</div>
							<Button className="px-8">Envoyer</Button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
