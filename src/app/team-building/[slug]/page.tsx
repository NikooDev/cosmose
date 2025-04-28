import React from 'react';
import Teambuilding from "@/components/teambuilding/teambuilding";
import {Metadata} from "next";
import useActivity from "@/hooks/useActivity";

type Props = {
	params: Promise<{ id: string }>
	searchParams: Promise<{ uid: string }>
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
	const { uid } = await searchParams;
	const { getActivity } = useActivity();

	let title = 'Cosmose • Chargement...';

	if (uid) {
		const activity = await getActivity(uid);

		if (activity) {
			title = activity.title;
		}
	}

	return {
		title: `Cosmose • ${title}`,
	};
}

const Page = async () => {
	return (
		<section className="w-full flex flex-col mt-32 relative min-h-[700px] pb-20">
			<Teambuilding/>
		</section>
	)
}

export default Page;
