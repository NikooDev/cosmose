'use client';

import React, {useCallback, useEffect, useState} from 'react';
import { useRouter } from 'next/navigation';
import Title from '@/components/ui/title';
import Card from '@/components/ui/card';
import Image from 'next/image';
import Button from '@/components/ui/button';
import './bestsellers.scss';
import useActivity from "@/hooks/useActivity";
import {ActivityInterface} from "@/types/activity";
import {slugify} from "@/utils/functions";

const Bestsellers = ({ title, subtitle, showButton = true }: {
  title?: string,
  subtitle?: string,
  showButton?: boolean
}) => {
  const [activities, setActivities] = useState<ActivityInterface[]>([]);
  const router = useRouter();
  const { getActivities } = useActivity();

  const handleGetActivities = useCallback(async () => {
    const activities = await getActivities();

    activities && setActivities(activities);
  }, [])

  useEffect(() => {
    handleGetActivities().then();
  }, [handleGetActivities]);

  const handleRedirect = (url: string) => {
    router.push(url);
  }

  return (
    <section className="w-full flex flex-col mt-32 relative min-h-[700px]">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-14">
          <Title titleLight={title ? title : 'Découvrez nos'} titleBold={subtitle ? subtitle : 'Best-Sellers'} semantique="h2"/>
        </div>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-14 md:gap-7 gap-10">
          {
            activities && activities.slice(-3).reverse().map((activity, index) => (
              <a className="group backdrop-blur-[8px]" href={`/team-building/${slugify(activity.title)}?uid=${activity.uid}`} key={index}>
                <Card className="p-0 rounded-2xl group-hover:-translate-y-5 transition-transform duration-500 activity-shadow">
                  <div className="h-[260px] relative">
                    <Image blurDataURL={activity.pictureUrl} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" placeholder="blur" src={activity.pictureUrl} alt={activity.title} fill className="rounded-t-2xl"/>
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
              </a>
            ))
          }
        </div>
        { showButton && (
          <div className="flex justify-center my-8">
            <Button onClick={() => handleRedirect('/team-building')} className="px-6">Nos team-buildings</Button>
          </div>
        )}
      </div>
      <img src="/svg/wave.svg" className="absolute left-0 top-44 w-full -z-10" alt="Rectangle"/>
    </section>
  );
}

export default Bestsellers;
