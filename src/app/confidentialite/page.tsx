import React from 'react';
import { metadata as initialMetadata } from '@/app/layout';
import { Metadata } from 'next';
import Title from '@/components/ui/title';
import Link from 'next/link';

export const metadata: Metadata = {
	...initialMetadata,
	title: 'Cosmose • Confidentialité'
};

const Privacy = () => {
	return (
		<section className="relative z-10 pt-10 pb-10 min-h-[500px]">
			<Title semantique="h1" titleLight="Politique de" titleBold="Confidentialité" className="mb-10 animate-slideInUp-1"/>
			<div className="container mx-auto mb-10 animate-slideInUp-2">
				<h2 className="font-NexaHeavy text-2xl">1. Collecte des données Personnelles</h2>
				<p className="mb-3 text-lg">Nous collectons certaines informations lorsque vous utilisez nos services, notamment :</p>
				<ul className="text-lg pl-5">
					<li>- Informations d’identification (nom, prénom, adresse e-mail, entreprise)</li>
					<li>- Informations de connexion et d’utilisation (adresse IP, navigateur, appareil, journaux de connexion)</li>
					<li>- Données nécessaires à l’exécution des services (participation aux événements, interactions sur la plateforme)</li>
				</ul>
				<h2 className="font-NexaHeavy text-2xl mt-8">2. Utilisation des données</h2>
				<p className="mb-3 text-lg">Vos données sont utilisées pour :</p>
				<ul className="text-lg pl-5">
					<li>- Fournir et améliorer nos services de team building digital</li>
					<li>- Gérer votre compte utilisateur et vos interactions sur la plateforme</li>
					<li>- Communiquer avec vous concernant les services, les mises à jour et l'assistance technique</li>
					<li>- Assurer la sécurité et la conformité aux obligations légales</li>
				</ul>
				<h2 className="font-NexaHeavy text-2xl mt-8">3. Partage des données</h2>
				<p className="mb-3 text-lg">Nous ne partageons pas vos données personnelles avec des tiers, sauf dans les cas suivants :</p>
				<ul className="text-lg pl-5">
					<li>- Partenaires et prestataires techniques nécessaires à la fourniture des services</li>
					<li>- Obligations légales ou demandes des autorités publiques</li>
					<li>- En cas de fusion, acquisition ou cession d’activité</li>
				</ul>
				<h2 className="font-NexaHeavy text-2xl mt-8">4. Sécurité des données</h2>
				<p className="text-lg">Nous mettons en place des mesures de sécurité conformes aux standards de l’industrie pour protéger vos données contre les accès non autorisés, la modification ou la suppression.</p>
				<h2 className="font-NexaHeavy text-2xl mt-8">5. Durée de conservation</h2>
				<p className="text-lg">Vos données sont conservées aussi longtemps que nécessaire pour fournir nos services et respecter les obligations légales.</p>
				<h2 className="font-NexaHeavy text-2xl mt-8">6. Vos droits</h2>
				<p className="mb-3 text-lg">Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez de droits sur vos données :</p>
				<ul className="mb-3">
					<li>- Accès, rectification et suppression de vos données</li>
					<li>- Opposition ou limitation du traitement</li>
					<li>- Portabilité de vos données</li>
				</ul>
				<p className="text-lg">Pour exercer vos droits, contactez-nous à [adresse e-mail de contact].</p>
				<h2 className="font-NexaHeavy text-2xl mt-8">7. Cookies et technologies de Suivi</h2>
				<p className="text-lg">Nous utilisons des cookies pour améliorer l’expérience utilisateur et analyser l’utilisation de notre plateforme. Vous pouvez gérer vos préférences via les paramètres de votre navigateur.</p>
				<h2 className="font-NexaHeavy text-2xl mt-8">8. Modifications de la politique de Confidentialité</h2>
				<p className="text-lg">Nous pouvons modifier cette politique à tout moment. Les modifications seront publiées sur cette page avec une indication de la date de mise à jour.</p>
				<h2 className="font-NexaHeavy text-2xl mt-8">9. Contact</h2>
				<p className="text-lg">Pour toute question, contactez-nous à la page <Link href="/contact" className="underline font-NexaHeavy">Contact</Link></p>
			</div>
		</section>
	);
};

export default Privacy;
