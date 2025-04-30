'use client';

import React, {useState} from 'react';
import {usePathname, useRouter} from 'next/navigation';
import Logo from '@/assets/static/logo';
import Link from 'next/link';
import Class from 'classnames';
import './header.scss';
import Button from "@/components/ui/button";
import {AnimatePresence, motion} from "framer-motion";
import {twMerge} from "tailwind-merge";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const pathname = usePathname();
	const linkClass = 'relative w-auto inline-block font-NexaHeavy font-bold text-lg py-2 link';
	const router = useRouter();

	const handleMenuOpen = () => {
		setMenuOpen(prev => !prev);
	}

	const handleNavigate = (event: React.MouseEvent, pathname: string) => {
		event.preventDefault();
		router.push(pathname);
		setTimeout(() => setMenuOpen(false), 100);
	}

	return (
		<>
			<header role="banner" className="mt-4 p-4">
				<nav className="lg:container px-4 mx-auto flex items-center justify-between">
					<div>
						<Link href="/" aria-label="Retour à l'accueil">
							<Logo height={32} color="white"/>
						</Link>
					</div>
					<ul className="lg:flex gap-8 hidden">
						<li className="relative">
							<Link href="/" className={Class(linkClass, pathname === '/' && 'active')}>Accueil</Link>
						</li>
						<li className="relative">
							<Link href="/team-building" className={Class(linkClass, pathname === '/team-building' && 'active')}>Team Buildings</Link>
						</li>
						<li className="relative">
							<Link href="/cosmose" className={Class(linkClass, pathname === '/cosmose' && 'active')}>Cosmose</Link>
						</li>
						<li className="relative">
							<Link href="/blog" className={Class(linkClass, pathname === '/blog' && 'active')}>Blog</Link>
						</li>
						<li className="relative">
							<Link href="/contact" className={Class(linkClass, pathname === '/contact' && 'active')}>Contact</Link>
						</li>
					</ul>
					<Button onClick={handleMenuOpen} className="flex lg:hidden items-center justify-center w-12 h-12 !mt-0">
						<svg id="Layer_1" data-name="Layer 1" fill="currentColor" height={24} width={24} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu_hamburger</title><path d="M20.5,7H3.5A.5.5,0,0,1,3,6.5v-1A.5.5,0,0,1,3.5,5h17a.5.5,0,0,1,.5.5v1A.5.5,0,0,1,20.5,7Zm.5,5.5v-1a.5.5,0,0,0-.5-.5H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h17A.5.5,0,0,0,21,12.5Zm0,6v-1a.5.5,0,0,0-.5-.5H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h17A.5.5,0,0,0,21,18.5Z"/></svg>
					</Button>
				</nav>
			</header>
			<AnimatePresence initial={menuOpen} presenceAffectsLayout={true}>
				{
					menuOpen && (
						<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed bg-theme-900/70 backdrop-blur-[10px] h-full w-full top-0 left-0 z-[999]">
							<ul className="flex items-center justify-center h-full flex-col gap-8">
								<li className="relative">
									<a href="/" onClick={(event) => handleNavigate(event, '/')} className={twMerge(linkClass, 'text-2xl', pathname === '/' && 'active')}>Accueil</a>
								</li>
								<li className="relative">
									<a href="/team-building" onClick={(event) => handleNavigate(event, '/team-building')} className={twMerge(linkClass, 'text-2xl', pathname === '/team-building' && 'active')}>Team Buildings</a>
								</li>
								<li className="relative">
									<a href="/cosmose" onClick={(event) => handleNavigate(event, '/cosmose')} className={twMerge(linkClass, 'text-2xl', pathname === '/cosmose' && 'active')}>Cosmose</a>
								</li>
								<li className="relative">
									<a href="/blog" onClick={(event) => handleNavigate(event, '/blog')} className={twMerge(linkClass, 'text-2xl', pathname === '/blog' && 'active')}>Blog</a>
								</li>
								<li className="relative">
									<a href="/contact" onClick={(event) => handleNavigate(event, '/contact')} className={twMerge(linkClass, 'text-2xl', pathname === '/contact' && 'active')}>Contact</a>
								</li>
							</ul>
						</motion.div>
					)
				}
			</AnimatePresence>
		</>
	);
};

export default Header;
