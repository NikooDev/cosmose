import React from 'react';
import { metadata as initialMetadata } from '@/app/layout';
import { Metadata } from 'next';
import Title from '@/components/ui/title';
import Blogs from "@/components/blog/blogs";

export const metadata: Metadata = {
	...initialMetadata,
	title: 'Cosmose • Blog'
};

const Page = () => {
  return (
		<section className="relative z-10 pt-10 pb-10 min-h-[500px]">
			<Title semantique="h1" titleLight="Consultez" titleBold="Nos articles" className="mb-14 animate-slideInUp-1"/>
			<div className="animate-slideInUp-2">
				<Blogs/>
			</div>
		</section>
	);
}

export default Page;
