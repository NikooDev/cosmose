import React from 'react';

const Page = async ({ params }: {
	params: Promise<{ slug: string }>
}) => {
	const { slug } = await params

	return (
		<section>

		</section>
	)
}

export default Page;
