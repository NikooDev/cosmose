'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Logo from '@/assets/static/logo';
import Link from 'next/link';
import Class from 'classnames';
import './header.scss';

const Header = () => {
	const pathname = usePathname();
	const linkClass = 'relative w-auto inline-block font-NexaHeavy font-bold text-lg py-2 link';

	return (
		<header role="banner" className="mt-4 p-4">
			<nav className="container mx-auto flex items-center justify-between">
				<div>
					<Link href="/" aria-label="Retour à l'accueil">
						<Logo height={32} color="white"/>
					</Link>
				</div>
				<ul className="flex gap-8">
					<li className="relative">
						<Link href="/" className={Class(linkClass, pathname === '/' && 'active')}>Accueil</Link>
					</li>
					<li className="relative">
						<Link href="/" className={Class(linkClass, pathname === '/team-building' && 'active')}>Team Building</Link>
					</li>
					<li className="relative">
						<Link href="/" className={Class(linkClass, pathname === '/a-propos' && 'active')}>Cosmose</Link>
					</li>
					<li className="relative">
						<Link href="/" className={Class(linkClass, pathname === '/blog' && 'active')}>Blog</Link>
					</li>
					<li className="relative">
						<Link href="/" className={Class(linkClass, pathname === '/contact' && 'active')}>Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
