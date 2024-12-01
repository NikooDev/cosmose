import React from 'react';
import type { Metadata } from 'next';
import '@/assets/theme/global.scss';
import localFont from 'next/font/local';
import Header from '@/components/header/header';
import Class from 'classnames';

export const metadata: Metadata = {
	title: 'Cosmose • Team Building en ligne',
	description: 'Brisez la barrière du distanciel. Découvrez nos activités de team building en ligne : jeux collaboratifs, blind tests, serious games et animations en visioconférence pour booster l’engagement et la cohésion d’équipe.',
	icons: {
		icon: [
			{
				rel: 'icon',
				type: 'image/ico',
				url: '/favicon/favicon.ico',
				sizes: '48x48'
			},
		]
	}
};

const NexaExtraLight = localFont({src: '../assets/fonts/Nexa-ExtraLight.ttf', variable: '--nexa-extra-light'});
const NexaHeavy = localFont({src: '../assets/fonts/Nexa-Heavy.ttf', variable: '--nexa-heavy'});

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr" className={Class(NexaHeavy.variable, NexaExtraLight.variable)}>
      <body>
        <Header/>
        <img src="svg/ellipse6.svg" height={400} width={600} className="absolute -top-32 left-1/4 pointer-events-none" alt="Ellipse"/>
        <main>
          {children}
        </main>
      </body>
		</html>
	);
}
