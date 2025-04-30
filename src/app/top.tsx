'use client';

import React, {useEffect, useState} from 'react';
import { usePathname } from 'next/navigation';
import {AnimatePresence, motion} from "framer-motion";

const Top = ({
	children
}: Readonly<{ children: React.ReactNode }>) => {
	const [isVisible, setIsVisible] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	}, [pathname]);

	useEffect(() => {
		const handleScroll = () => {
			const scrolled = window.scrollY ||
				document.documentElement.scrollTop ||
				document.body.scrollTop;
			setIsVisible(scrolled > 100);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

  return (
    <>
			{ children }
			<AnimatePresence>
				{
					isVisible && (
						<motion.button
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={scrollToTop}
							className="fixed md:bottom-[120px] bottom-24 z-40 md:right-12 right-6 p-2 rounded-full bg-theme-50 text-theme-400 hover:bg-theme-400 hover:text-white transition-colors duration-200"
							aria-label="Scroll to top"
						>
							<svg id="Layer_1" data-name="Layer 1" fill="currentColor" height={32} width={32} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
								<title>up_ui</title>
								<path d="M3.92,17.17a.5.5,0,0,1-.71,0L2.15,16.11a.48.48,0,0,1,0-.7l9.19-9.19A.75.75,0,0,1,11.87,6h.26a.75.75,0,0,1,.53.22l9.19,9.19a.48.48,0,0,1,0,.7l-1.06,1.06a.5.5,0,0,1-.71,0L12,9.09Z"/>
							</svg>
						</motion.button>
					)
				}
			</AnimatePresence>
    </>
  );
}

export default Top;
