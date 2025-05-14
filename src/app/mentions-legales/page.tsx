import React from 'react';
import { metadata as initialMetadata } from '@/app/layout';
import { Metadata } from 'next';
import Title from '@/components/ui/title';

export const metadata: Metadata = {
	...initialMetadata,
	title: 'Cosmose • Mentions légales'
};

const Legal = () => {
  return (
		<section className="relative z-10 pt-10 pb-10">
			<Title semantique="h1" titleLight="Mentions" titleBold="Légales" className="mb-10 animate-slideInUp-1"/>
			<div className="container mx-auto mb-10 animate-slideInUp-2">
				<h2 className="font-NexaHeavy text-2xl">1. Éditeur du site</h2>
				<p className="text-lg">Le site <a href="/" className="underline hover:font-semibold">www.cosmose.vercel.app</a> est édité par :</p>
				<p className="font-NexaHeavy text-lg mt-2">Cosmose</p>
				<p className="leading-6 mt-2">
					Société à responsabilité limitée (SARL) au capital de 10 000 €<br/>
					RCS Vannes n° 0000000000000<br/>
					Adresse du siège social : <br/>

					Numéro de TVA intracommunautaire : 000000000<br/>
					Email : support@cosmose.fr<br/>
					Téléphone : 02 00 00 00 00<br/>
				</p>
				<h2 className="font-NexaHeavy text-2xl mt-8">2. Directeur de la publication</h2>
				<p className="text-lg">Le directeur de la publication est ..., en qualité de ....</p>
				<h2 className="font-NexaHeavy text-2xl mt-8">3. Hébergement</h2>
				<p className="text-lg">Le site est hébergé par :</p>
				<h2 className="font-NexaHeavy text-2xl mt-8">4. Propriété intellectuelle</h2>
				<p className="text-lg">
					L'ensemble du contenu du site www.cosmose.com, incluant de façon non limitative les textes, images,
					graphismes, logos, vidéos, sons, icônes, ainsi que leur mise en forme, sont la propriété exclusive de Cosmose
					ou de ses partenaires, sauf mention contraire. Toute reproduction, représentation, diffusion ou exploitation
					de tout ou partie du contenu du site, sous quelque forme que ce soit, sans autorisation préalable et écrite de
					Cosmose est interdite et constitue une contrefaçon.
				</p>
				<h2 className="font-NexaHeavy text-2xl mt-8">5. Données personnelles</h2>
				<p className="text-lg">
					Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au Règlement Général sur la
					Protection des Données (RGPD) du 25 mai 2018, l’utilisateur du site dispose d’un droit d’accès, de
					rectification, d’effacement et de portabilité des données personnelles qui le concernent. Il peut exercer ce
					droit en adressant une demande à l’adresse suivante : [adresse email pour le traitement des demandes de
					données personnelles].<br/>
					Nous collectons les informations suivantes : [expliquer les types d'informations collectées, par exemple :
					nom, prénom, adresse e-mail, etc.]. Ces données sont utilisées uniquement pour les finalités suivantes :
					[expliquer les usages des données, par exemple : gestion des demandes, envoi de newsletters, etc.].
				</p>
				<h2 className="font-NexaHeavy text-2xl mt-8">6. Cookies</h2>
				<p className="text-lg">Le site www.cosmose.com utilise des cookies afin d’améliorer l’expérience utilisateur. Un
					cookie est un petit fichier stocké sur votre terminal (ordinateur, tablette, smartphone). Vous pouvez choisir
					de désactiver les cookies via les paramètres de votre navigateur. Toutefois, cela pourrait impacter l’accès à
					certaines fonctionnalités du site.</p>
				<h2 className="font-NexaHeavy text-2xl mt-8">7. Responsabilité</h2>
				<p className="text-lg">
					Cosmose s'efforce de fournir des informations exactes et à jour sur le site www.cosmose.com, mais ne peut garantir leur exactitude, leur exhaustivité ou leur actualité. En conséquence, Cosmose décline toute responsabilité en cas d'erreur ou d'omission dans les informations disponibles sur le site.
					Le site www.cosmose.com peut contenir des liens hypertextes vers d'autres sites. Cosmose n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou leur accessibilité.
				</p>
			</div>
		</section>
	);
}

export default Legal;
