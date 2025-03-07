'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Loader from '@/components/ui/loader';
import Search from '@/components/teambuilding/search';
import Card from '@/components/ui/card';

const Teambuildings = () => {
	const [searchForm, setSearchForm] = useState({ objectif: '', members: 4, budget: 200, date: new Date().toISOString().split('T')[0] });
	const [loading, setLoading] = useState(false);

  return (
		<>
			<Card className="w-4/5 animate-slideInUp-2 self-center">
				<Search searchForm={searchForm} setSearchForm={setSearchForm} setLoading={setLoading}/>
			</Card>
			<motion.div initial={{y: '0px', opacity: 0}}
									animate={{y: loading ? 0 : '-40px', opacity: loading ? 1 : 0}}
									transition={{duration: .5, ease: [0.68, -0.55, 0.27, 1.55]}}
									className="flex items-center flex-col mt-14">
				<Loader width={32} height={32}/>
			</motion.div>
			<div className="min-h-[800px] mt-20">

			</div>
		</>
	);
}

export default Teambuildings;
