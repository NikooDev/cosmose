'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Loader from '@/components/ui/loader';
import Search from '@/components/teambuilding/search';
import Card from '@/components/ui/card';

const Teambuildings = () => {
	const [loading, setLoading] = useState(true);

  return (
		<>
			<Card className="w-4/5 animate-slideInUp-2">
				<Search setLoading={setLoading}/>
			</Card>
			<motion.div initial={{y: '0px', opacity: 0}}
									animate={{y: loading ? 0 : '-40px', opacity: loading ? 1 : 0}}
									transition={{duration: 0.5, ease: [0.68, -0.55, 0.27, 1.55]}}
									className="flex items-center flex-col mt-8">
				<Loader width={168} height={30} color="#fff"/>
			</motion.div>
			<div className="min-h-[800px] mt-20">

			</div>
		</>
	);
}

export default Teambuildings;
