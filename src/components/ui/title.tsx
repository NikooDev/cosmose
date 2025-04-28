import React from 'react';
import { TitleInterface } from '@/types/ui';
import { twMerge } from 'tailwind-merge';
import Class from "classnames";

const Title: React.FC<TitleInterface> = ({
	titleLight,
	titleBold,
	largeTitleBold = false,
	semantique,
	className
}) => {
	const titleClass = twMerge('flex flex-col text-center text-2xl container mx-auto', className);

	const showContent = () => {
		return (
			<>
				<span className="font-NexaExtraLight">{titleLight}</span>
				<span className={Class("font-NexaHeavy", largeTitleBold ? 'text-[10rem]' : 'text-5xl')}>{titleBold}</span>
			</>
		)
	}

	switch (semantique) {
		case 'h1':
			return (
				<h1 className={titleClass}>
					{ showContent() }
				</h1>
			);
		case 'h2':
			return (
				<h2 className={titleClass}>
					{ showContent() }
				</h2>
			)
		case 'h3':
			return (
				<h3 className={titleClass}>
					{ showContent() }
				</h3>
			);
		case 'h4':
			return (
				<h4 className={titleClass}>
					{ showContent() }
				</h4>
			)
	}
}

export default Title;
