'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Loader from '@/components/ui/loader';
import Search from '@/components/teambuilding/search';
import Card from '@/components/ui/card';
import useActivity from '@/hooks/useActivity';
import Image from 'next/image';
import { ActivityInterface } from '@/types/activity';
import {slugify} from "@/utils/functions";

const Teambuildings = () => {
	const [searchForm, setSearchForm] = useState({ objectif: '', members: 4, budget: 200, date: new Date().toISOString().split('T')[0] });
	const [loading, setLoading] = useState(false);
	const [loadingGame, setLoadingGame] = useState(true);
	const [activities, setActivities] = useState<ActivityInterface[]>([]);
	const { getActivities } = useActivity();

	const handleGetActivities = useCallback(async () => {
		const activities = await getActivities();

		setTimeout(() => setLoadingGame(false), 500);
		activities && setActivities(activities);
	}, []);

	useEffect(() => {
		handleGetActivities().then();
	}, [handleGetActivities]);

  return (
		<>
			<Card className="w-full md:w-4/5 animate-slideInUp-2 self-center">
				<Search searchForm={searchForm} setSearchForm={setSearchForm} setLoading={setLoading}/>
			</Card>
			<motion.div initial={{y: '0px', opacity: 0, visibility: 'hidden'}}
									animate={{y: loading || loadingGame ? 0 : '-40px', visibility: 'visible', zIndex: 99, opacity: loading || loadingGame ? 1 : 0}}
									transition={{duration: .5, ease: [0.68, -0.55, 0.27, 1.55]}}
									className="flex items-center flex-col mt-14">
				<Loader width={32} height={32}/>
			</motion.div>
			<div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-14 md:gap-7 gap-10 -mt-10 min-h-96">
				{
					!loadingGame && activities && activities.map((activity, index) => (
						<motion.a className="group backdrop-blur-[8px]" href={`/team-building/${slugify(activity.title)}?uid=${activity.uid}`} transition={{duration: .8, delay: index * 0.3, ease: [0.68, -0.55, 0.27, 1.55]}} initial={{y: '20px', opacity: 0, visibility: 'hidden'}} animate={{y: 0, opacity: 1, visibility: 'visible'}} key={index}>
							<Card className="p-0 rounded-2xl group-hover:-translate-y-5 transition-transform duration-500 activity-shadow">
								<div className="h-[260px] relative">
									<Image blurDataURL={activity.pictureUrl} placeholder="blur" src={activity.pictureUrl} alt={activity.title} fill className="rounded-t-2xl"/>
								</div>
								<div className="p-4 h-52 overflow-hidden">
									<div className="flex items-center justify-around mb-4">
										<div className="flex">
											<img src="/img/icons/time.svg" alt="time"/>
											<p className="ml-2 font-NexaHeavy">{ activity.playtime }h</p>
										</div>
										<div className="flex">
											<img src="/img/icons/users.svg" alt="time"/>
											<p className="ml-2 font-NexaHeavy">{ activity.minPlayer } à { activity.maxPlayer } joueurs</p>
										</div>
										<div className="flex">
											<img src="/img/icons/euro.svg" alt="time"/>
											<p className="ml-2 font-NexaHeavy">{ activity.price }/pers</p>
										</div>
									</div>
									<p className="font-NexaHeavy text-2xl">{ activity.title }</p>
									<p className="font-NexaExtraLight whitespace-break-spaces mt-2 text-ellipsis line-clamp-4">{ activity.description }</p>
								</div>
							</Card>
						</motion.a>
					))
				}
			</div>
		</>
	);
}

export default Teambuildings;
