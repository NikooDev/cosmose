import React from 'react';
import { metadata as initialMetadata } from '@/app/layout';
import { Metadata } from 'next';
import Title from '@/components/ui/title';
import NoEllipse from "@/components/layout/noEllipse";
import Card from "@/components/ui/card";
import Link from "next/link";

export const metadata: Metadata = {
	...initialMetadata,
	title: 'Cosmose • Plan du site'
};

const Sitemap = () => {
  return (
		<>
			<NoEllipse/>
			<section className="relative z-10 pt-10 pb-10 min-h-[500px]">
				<Title semantique="h1" titleLight="Arborescence du" titleBold="Site" className="mb-10 animate-slideInUp-1"/>
				<div className="container mx-auto">
					<ul className="list-disc">
						<li><Link href="/">Accueil</Link></li>
						<li><Link href="/team-building">Team buildings</Link></li>
						<li><Link href="/cosmose">Cosmose</Link></li>
						<li><Link href="/blog">Blog</Link></li>
						<li><Link href="/contact">Contact</Link></li>
						<li><Link href="/mentions-legales">Mentions légales</Link></li>
						<li><Link href="/confidentialite">Confidentialités</Link></li>
						<li><Link href="/accessibilite">Accessibilité</Link></li>
					</ul>
				</div>
			</section>
		</>
	);
}

export default Sitemap;
