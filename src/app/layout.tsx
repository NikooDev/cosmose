import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
import { ChatProvider } from '@/contexts/chat.context';
import localFont from 'next/font/local';
import Header from '@/components/header/header';
import Class from 'classnames';
import Footer from '@/components/footer/footer';
import Wave from '@/components/ui/wave';
import Top from '@/app/top';
import Chat from '@/components/chat/chat';
import '@/assets/theme/global.scss';
import Error from '@/components/error/error';

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
					<Toaster position="top-center"/>
					<Header/>
					<Wave/>
					<img src="/svg/ellipse6.svg" height={400} className="fixed lg:absolute -top-32 left-1/4 w-[80vw] max-w-none -z-10 pointer-events-none" alt="Ellipse"/>
					<img src="/svg/ellipse3.svg" height={400} id="ellipse" className="fixed lg:absolute top-32 -left-32 w-[80vw] max-w-none -z-10 pointer-events-none" alt="Ellipse"/>
					<main>
						{children}
					</main>
					<ChatProvider>
						<Chat/>
						<Suspense>
							<Error/>
						</Suspense>
					</ChatProvider>
					<Footer/>
				</Top>
			</body>
		</html>
	);
}
