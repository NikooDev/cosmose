'use client';

import React, {useCallback, useEffect, useState} from 'react';
import useBlog from "@/hooks/useBlog";
import {useRouter, useSearchParams} from "next/navigation";
import BlogInterface from "@/types/blog";
import Image from "next/image";
import Title from "@/components/ui/title";

const Blog = () => {
	const [blog, setBlog] = useState<BlogInterface | null>(null);
	const { getBlog } = useBlog();
	const searchParams = useSearchParams();
	const uid = searchParams.get('uid');
	const router = useRouter();

	const handleGetActivity = useCallback(async () => {
		if (uid) {
			const data = await getBlog(uid);

			data && setBlog(data);

			if (!data) {
				router.push('/');
			}
		}
	}, [uid]);

	useEffect(() => {
		handleGetActivity().then();
	}, [handleGetActivity]);

	return (!blog ? <></> :
		<div className="container mx-auto">
			<div className="relative h-60 w-full mx-auto">
				<Image src={blog.coverImage} alt={blog.title} className="object-cover rounded-3xl" fill/>
			</div>
			<Title semantique="h1" titleLight="" titleBold={blog.title} className="mt-16 !text-left !px-0"/>
			<p className="text-2xl italic mt-4">{ blog.subtitle }</p>
			<p className="mt-16 whitespace-break-spaces text-lg">{ blog.content }</p>
		</div>
	)
}

export default Blog;
