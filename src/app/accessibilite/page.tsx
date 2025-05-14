import React from 'react';
import Title from "@/components/ui/title";

const Accessibilite = () => {
	return (
		<section className="relative z-10 pt-10 pb-10">
			<Title semantique="h1" titleLight="Déclaration" titleBold="Accessibilité" className="mb-10 animate-slideInUp-1"/>
			<div className="container mx-auto mb-10 animate-slideInUp-2">
				<p>[Nom de l’organisme concerné] s’engage à rendre [son (ses) site(s) internet, intranet, extranet et son (ses)
					application(s) mobile(s), etc.] accessibles conformément à l’article 47 de la loi n° 2005-102 du 11 février
					2005.

					À cette fin, il met en œuvre la stratégie et les actions suivantes [liens vers le schéma pluriannuel et vers le
					plan d’action de l’année en cours incluant le bilan des actions réalisées l’année précédente].

					Cette déclaration d’accessibilité s’applique à [Nom du site web de l’application mobile, ou d’un autre service
					auquel la déclaration s’applique].
				</p>
				<h2>État de conformité</h2>
				<p>[Nom du site web, de l’application mobile, ou d’un autre service concerné] est
					[totalement / partiellement / non] conforme avec [pour les sites : le référentiel général d’amélioration de
					l’accessibilité / autre protocole de test utilisé ; pour les autres services de communication : protocole de
					test utilisé].
				</p>
				<h3>Résultat des tests</h3>
				<p>
					L’audit de conformité réalisé [en interne / par la société NNN] révèle que :

					[pourcentage de critères RGAA respectés] des critères RGAA sont respectés.
					[Facultatif] Le taux moyen de conformité du service en ligne s’élève à [taux moyen de conformité du service en
					ligne].
					[Détailler ici les résultats des tests ou insérer un lien vers le rapport de test]
				</p>
				<h2>Contenus non accessibles</h2>
				<p>
					Les contenus listés ci-dessous ne sont pas accessibles pour les raisons suivantes.
				</p>
				<h3>Non conformité</h3>
				<p>
					[Lister la/les non-conformité(s) du/de la/des site(s) internet/application(s) mobile(s) et/ou décrire quels
					section(s)/contenu(s)/fonction(s) ne sont pas encore conformes, indiquer les alternatives s’il y a lieu].
				</p>
				<h3>Dérogations pour charge disproportionnée</h3>
				<p>[Lister la/le/les section(s)/contenu(s)/fonction(s) non accessible(s) pour laquelle/lequel/lesquels la
					dérogation pour charge disproportionnée est temporairement invoquée, indiquer les alternatives s’il y a lieu].
				</p>
				<h3>Contenus non soumis à l’obligation d’accessibilité</h3>
				<p>[Lister la/le/les section(s)/contenu(s)/fonction(s) non accessible(s) qui n’entre(nt) pas dans le champ
					d’application de la législation applicable, indiquer les alternatives s’il y a lieu].
				</p>
				<h2>Établissement de cette déclaration d’accessibilité</h2>
				<p>
					Cette déclaration a été établie le [JJ mois AAAA]. Elle a été mise à jour le [JJ mois AAAA].
				</p>
				<h3>Technologies utilisées pour la réalisation [Du site web / De l’application mobile / Du service…]</h3>
				[Liste des technologies utilisées]
				<h3>Environnement de test</h3>
				Agents utilisateurs, technologies d’assistance et outils utilisés pour vérifier l’accessibilité

				[Indiquer les combinaisons utilisées pour effectuer les vérifications de conformité]
				<h3>Les outils utilisés lors de l’évaluation</h3>
				[Indiquer les outils utilisés]
				<h3>Pages du site ayant fait l’objet de la vérification de conformité</h3>
				[Indiquer la liste des pages qui ont été testées]
				<h2>Retour d’information et contact</h2>
				Si vous n’arrivez pas à accéder à un contenu ou à un service, vous pouvez contacter le responsable du [site
				internet / application mobile / Autre service] pour être orienté vers une alternative accessible ou obtenir le
				contenu sous une autre forme.

				Envoyer un message [url du formulaire en ligne]
				Contacter [Nom de l’entité responsable du service en ligne] [url d’une page avec les coordonnées de l’entité]
				<h2>Voies de recours</h2>
				Cette procédure est à utiliser dans le cas suivant.

				Vous avez signalé au responsable du site internet un défaut d’accessibilité qui vous empêche d’accéder à un
				contenu ou à un des services du portail et vous n’avez pas obtenu de réponse satisfaisante.

				Écrire un message au Défenseur des droits (https://www.defenseurdesdroits.fr/nous-contacter-355)
				Contacter le délégué du Défenseur des droits près de chez vous
				(https://www.defenseurdesdroits.fr/carte-des-delegues)
				Envoyer un courrier par la poste (gratuit, ne pas mettre de timbre) :
				Défenseur des droits
				Libre réponse 71120
				75342 Paris CEDEX 07
			</div>
		</section>
	)
}

export default Accessibilite;
