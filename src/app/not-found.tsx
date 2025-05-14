import React from 'react';
import Title from "@/components/ui/title";
import Card from "@/components/ui/card";

const NotFound
= () => {
	return (
		<section className="flex items-center justify-center" style={{height: 'calc(100vh - 130px)'}}>
			<Card>
				<Title semantique="h1" titleLight="Erreur" titleBold="404" className="[&>span]:leading-[1.2] [&>span:first-child]:text-[2.5rem]" largeTitleBold/>
			</Card>
			<p>Cette page est indisponible</p>
		</section>
	)
}

export default NotFound;
