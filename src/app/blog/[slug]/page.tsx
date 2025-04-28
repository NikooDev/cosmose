import React from 'react';
import {Metadata} from "next";
import useBlog from "@/hooks/useBlog";
import Blog from "@/components/blog/blog";

type Props = {
	params: Promise<{ id: string }>
	searchParams: Promise<{ uid: string }>
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
	const { uid } = await searchParams;
	const { getBlog } = useBlog();

	let title = 'Cosmose • Chargement...';

	if (uid) {
		const blog = await getBlog(uid);

		if (blog) {
			title = blog.title;
		}
	}

	return {
		title: `Cosmose • ${title}`,
	};
}

const Page = async () => {
	return (
		<section className="w-full flex flex-col mt-32 relative min-h-[700px] pb-20">
			<Blog/>
		</section>
	)
}

export default Page;
