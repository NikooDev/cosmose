'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Wave = () => {
	let offset: number;
	const path = usePathname();

	switch (path) {
		case '/':
			offset = 100;
			break;
		case '/team-building':
			offset = 200;
			break;
		case '/cosmose':
			offset = 150;
			break;
		default:
			offset = 0;
			break;
	}

  return (
		<motion.div
			initial={{opacity: 0, transform: 'translateY(400px)'}}
			animate={{opacity: 1, transform: `translateY(${offset}px)`}}
			exit={{opacity: 0, transform: 'translateY(-400px)'}}
			transition={{duration: .5, ease: 'easeInOut'}}
			className="absolute left-0 w-full -z-10 will-change-transform"
		>
			<motion.img src="svg/wave.svg" alt="Rectangle"/>
		</motion.div>
	);
}

export default Wave;
