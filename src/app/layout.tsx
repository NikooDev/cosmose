import React from 'react';
import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
import localFont from 'next/font/local';
import Header from '@/components/header/header';
import Class from 'classnames';
import Footer from '@/components/footer/footer';
import Wave from '@/components/ui/wave';
import '@/assets/theme/global.scss';
import Top from '@/app/top';
import ButtonChat from '@/components/chat/button';
import { ChatProvider } from '@/contexts/chat.context';

export const metadata: Metadata = {
	icons: {
		icon: [{
			rel: 'icon', type: 'image/ico', url: '/favicon/favicon.ico', sizes: '48x48'
		}]
	}
};

const NexaExtraLight = localFont({src: '../assets/fonts/Nexa-ExtraLight.ttf', variable: '--nexa-extra-light'});
const NexaHeavy = localFont({src: '../assets/fonts/Nexa-Heavy.ttf', variable: '--nexa-heavy'});

export default function RootLayout({
	children
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="fr" className={Class(NexaHeavy.variable, NexaExtraLight.variable)}>
			<body>
				<Top>
					<Toaster position="bottom-center"/>
					<Header/>
					<Wave/>
					<img src="svg/ellipse6.svg" height={400} width={600} className="absolute -top-32 left-1/4 -z-10 pointer-events-none" alt="Ellipse"/>
					<img src="svg/ellipse3.svg" height={400} width={600} className="absolute top-32 -left-32 -z-10 pointer-events-none" alt="Ellipse"/>
					<main>
						{children}
					</main>
					<ChatProvider>
						<ButtonChat/>
					</ChatProvider>
					<Footer/>
				</Top>
			</body>
		</html>
	);
}
