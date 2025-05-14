import React from 'react';
import Title from "@/components/ui/title";
import {Metadata} from "next";
import {metadata as initialMetadata} from "@/app/layout";

export const metadata: Metadata = {
	...initialMetadata,
	title: 'Cosmose • Accessibilité'
};

const Accessibilite = () => {
	return (
		<section className="relative z-10 pt-10 pb-10">
			<Title semantique="h1" titleLight="Déclaration" titleBold="Accessibilité" className="mb-10 animate-slideInUp-1"/>
			<div className="container mx-auto mb-10 animate-slideInUp-2">
				<p className="mb-4">
					Cosmose s’engage à rendre le site <a href="/"
																							 className="underline hover:font-semibold">www.cosmose.vercel.app</a> accessibles
					conformément à l’article 47 de la loi n° 2005-102 du 11 février 2005.
					<br/>À cette fin, il met en œuvre la stratégie et les actions suivantes ???.

					Cette déclaration d’accessibilité s’applique à www.cosmose.vercel.app.
				</p>
				<h2 className="font-NexaHeavy text-lg mb-2">État de conformité</h2>
				<p className="mb-4">www.cosmose.vercel.app est partiellement conforme avec [pour les sites : le référentiel
					général d’amélioration de
					l’accessibilité / autre protocole de test utilisé ; pour les autres services de communication : protocole de
					test utilisé].
				</p>
				<h3 className="font-NexaHeavy text-2xl mb-2">Résultat des tests</h3>
				<p className="mb-4">
					L’audit de conformité réalisé [en interne / par la société NNN] révèle que :

					[pourcentage de critères RGAA respectés] des critères RGAA sont respectés.
					[Facultatif] Le taux moyen de conformité du service en ligne s’élève à [taux moyen de conformité du service en
					ligne].
					[Détailler ici les résultats des tests ou insérer un lien vers le rapport de test]
				</p>
				<h2 className="font-NexaHeavy text-lg mb-2">Contenus non accessibles</h2>
				<p className="mb-4">
					Les contenus listés ci-dessous ne sont pas accessibles pour les raisons suivantes.
				</p>
				<h3 className="font-NexaHeavy text-2xl mb-2">Non conformité</h3>
				<p className="mb-4">
					[Lister la/les non-conformité(s) du/de la/des site(s) internet/application(s) mobile(s) et/ou décrire quels
					section(s)/contenu(s)/fonction(s) ne sont pas encore conformes, indiquer les alternatives s’il y a lieu].
				</p>
				<h3 className="font-NexaHeavy text-2xl mb-2">Dérogations pour charge disproportionnée</h3>
				<p className="mb-4">[Lister la/le/les section(s)/contenu(s)/fonction(s) non accessible(s) pour
					laquelle/lequel/lesquels la
					dérogation pour charge disproportionnée est temporairement invoquée, indiquer les alternatives s’il y a lieu].
				</p>
				<h3 className="font-NexaHeavy text-2xl mb-2">Contenus non soumis à l’obligation d’accessibilité</h3>
				<p className="mb-4">[Lister la/le/les section(s)/contenu(s)/fonction(s) non accessible(s) qui n’entre(nt) pas
					dans le champ
					d’application de la législation applicable, indiquer les alternatives s’il y a lieu].
				</p>
				<h2 className="font-NexaHeavy text-lg mb-2">Établissement de cette déclaration d’accessibilité</h2>
				<p className="mb-4">
					Cette déclaration a été établie le [JJ mois AAAA]. Elle a été mise à jour le [JJ mois AAAA].
				</p>
				<h3 className="font-NexaHeavy text-2xl mb-2">Technologies utilisées pour la réalisation [Du site web / De l’application mobile / Du service…]</h3>
				<p className="mb-4">[Liste des technologies utilisées]</p>
				<h3 className="font-NexaHeavy text-2xl mb-2">Environnement de test</h3>
				<p className="mb-4">Agents utilisateurs, technologies d’assistance et outils utilisés pour vérifier l’accessibilité

					[Indiquer les combinaisons utilisées pour effectuer les vérifications de conformité]</p>
				<h3 className="font-NexaHeavy text-2xl mb-2">Les outils utilisés lors de l’évaluation</h3>
				<p className="mb-4">[Indiquer les outils utilisés]</p>
				<h3 className="font-NexaHeavy text-2xl mb-2">Pages du site ayant fait l’objet de la vérification de
					conformité</h3>
				<p className="mb-4">[Indiquer la liste des pages qui ont été testées]</p>
				<h2 className="font-NexaHeavy text-lg mb-2">Retour d’information et contact</h2>
				<p className="mb-4">Si vous n’arrivez pas à accéder à un contenu ou à un service, vous pouvez contacter le responsable du [site
					internet / application mobile / Autre service] pour être orienté vers une alternative accessible ou obtenir
					le
					contenu sous une autre forme.

					Envoyer un message [url du formulaire en ligne]
					Contacter [Nom de l’entité responsable du service en ligne] [url d’une page avec les coordonnées de
					l’entité]</p>
				<h2 className="font-NexaHeavy text-lg mb-2">Voies de recours</h2>
				<p className="mb-4">Cette procédure est à utiliser dans le cas suivant.

					Vous avez signalé au responsable du site internet un défaut d’accessibilité qui vous empêche d’accéder à un
					contenu ou à un des services du portail et vous n’avez pas obtenu de réponse satisfaisante.

					Écrire un message au Défenseur des droits (https://www.defenseurdesdroits.fr/nous-contacter-355)
					Contacter le délégué du Défenseur des droits près de chez vous
					(https://www.defenseurdesdroits.fr/carte-des-delegues)
					Envoyer un courrier par la poste (gratuit, ne pas mettre de timbre) :
					Défenseur des droits
					Libre réponse 71120
					75342 Paris CEDEX 07</p>
			</div>
		</section>
	)
}

export default Accessibilite;
