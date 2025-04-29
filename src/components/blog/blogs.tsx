'use client';

import React, {useCallback, useEffect, useState} from 'react';
import Card from "@/components/ui/card";
import Image from "next/image";
import BlogInterface from "@/types/blog";
import {useRouter} from "next/navigation";
import useBlog from "@/hooks/useBlog";
import {slugify} from "@/utils/functions";

const Blogs = () => {
	const [blogs, setBlogs] = useState<BlogInterface[]>([]);
	const router = useRouter();
	const { getBlogs } = useBlog();

	const handleGetBlogs = useCallback(async () => {
		const datas = await getBlogs();

		datas && setBlogs(datas);
	}, []);

	useEffect(() => {
		handleGetBlogs().then();
	}, [handleGetBlogs]);

	const handleBlogNavigate = (event: React.MouseEvent, title: string, uid: string) => {
		event.preventDefault();
		router.push(`/blog/${slugify(title)}?uid=${uid}`);
	}

	return (
		<div className="container mx-auto">
			<div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-14 md:gap-7 gap-8">
				{
					blogs && blogs.length > 0 && blogs.map((blog, index) => (
						<a href="#" className="flex h-full rounded-3xl hover:-translate-y-5 transition-transform duration-500 activity-shadow" key={index} onClick={(event) => handleBlogNavigate(event, blog.title, blog.uid)}>
							<Card className="flex justify-between h-full !p-0 relative">
								<div className="flex relative h-52 w-full">
									<Image src={blog.coverImage} alt="Cover" className="rounded-t-3xl object-cover" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
								</div>
								<div className="p-4">
									<p className="font-NexaHeavy text-2xl text-left mb-2">{ blog.title }</p>
									<p className="line-clamp-3 text-left">{ blog.subtitle }</p>
								</div>
							</Card>
						</a>
					))
				}
			</div>
		</div>
	)
}

export default Blogs;
