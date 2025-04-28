'use client';

import React, {useCallback, useEffect, useRef, useState} from 'react';
import './lastblog.scss';
import Title from '@/components/ui/title';
import Button from "@/components/ui/button";
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper/modules';
import useBlog from "@/hooks/useBlog";
import 'swiper/css';
import Card from "@/components/ui/card";
import Image from "next/image";
import Class from "classnames";
import {useRouter} from "next/navigation";
import {slugify} from "@/utils/functions";
import BlogInterface from "@/types/blog";

const Lastblog = () => {
	const [blogs, setBlogs] = useState<BlogInterface[]>([]);
	const { getBlogs } = useBlog();
	const router = useRouter();

	const prevRef = useRef<HTMLButtonElement>(null);
	const nextRef = useRef<HTMLButtonElement>(null);

	const handleGetBlog = useCallback(async () => {
		const datas = await getBlogs();

		datas && setBlogs(datas);
	}, []);

	useEffect(() => {
		handleGetBlog().then();
	}, [handleGetBlog]);

	const handleBlogNavigate = (event: React.MouseEvent, title: string, uid: string) => {
		event.preventDefault();
		router.push(`/blog/${slugify(title)}?uid=${uid}`);
	}

  return (
		<section className="w-full flex flex-col mt-36 relative min-h-[600px]">
			<div className="container mx-auto">
				<div className="flex gap-36 items-center w-full">
					<div className="w-[40%]">
						<Title titleLight="Notre blog" titleBold="Dernières actus" semantique="h2" className="!text-left !px-0"/>
						<p className="text-lg mt-3">Retrouvez nos dernières actualités et les tendances actuelles en matière de team building.</p>
						<Button type="button" onClick={() => router.push('/blog')} className="px-6">Toute l'actualité</Button>
					</div>
					<div className="flex items-center w-[60%]">
						<button ref={prevRef} type="button" className={Class(blogs && blogs.length === 0 && 'opacity-0', 'flex transition-transform hover:scale-150 duration-200 pl-4 pr-6')}>
							<img src="/svg/back_ui.svg" height={120} width={120} alt="Back"/>
						</button>
						<div className="overflow-hidden rounded-3xl">
							<Swiper
								modules={[Navigation]}
								navigation={{
									prevEl: prevRef.current,
									nextEl: nextRef.current,
								}}
								draggable={false}
								spaceBetween={30}
								loopPreventsSliding={false}
								slidesPerView={1}
								className="w-full">
								{
									blogs && blogs.length > 0 && blogs.map((blog, index) => (
										<SwiperSlide key={index}>
											<a href="#" onClick={(event) => handleBlogNavigate(event, blog.title, blog.uid)}>
												<Card className="flex justify-between h-full !p-0 relative">
													<div className="relative h-full w-full">
														<Image src={blog.coverImage} alt="Cover" className="rounded-t-3xl" fill/>
													</div>
													<div className="p-4">
														<p className="font-NexaHeavy text-2xl text-left mb-2">{ blog.title }</p>
														<p className="line-clamp-3 text-left">{ blog.content }</p>
													</div>
												</Card>
											</a>
										</SwiperSlide>
									))
								}
							</Swiper>
						</div>
						<button ref={nextRef} type="button" className={Class(blogs && blogs.length === 0 && 'opacity-0', 'transition-transform hover:scale-150 duration-200 pr-4 pl-6')}>
							<img src="/svg/next_ui.svg" height={120} width={120} alt="Next"/>
						</button>
					</div>
				</div>
			</div>
			<img src="svg/wave3.svg" className="absolute left-0 top-24 w-full -z-10" alt="Rectangle"/>
		</section>
	);
}

export default Lastblog;
