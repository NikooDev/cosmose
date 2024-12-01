import React from 'react';
import { TitleInterface } from '@/types/ui';

const Title: React.FC<TitleInterface> = ({
	titleLight,
	titleBold,
	semantique
}) => {

	const showContent = () => {
		return (
			<>
				<span className="font-NexaExtraLight">{titleLight}</span>
				<span className="font-NexaHeavy text-5xl">{titleBold}</span>
			</>
		)
	}

	switch (semantique) {
		case 'h1':
			return (
				<h1 className="flex flex-col text-center text-2xl container mx-auto">
					{ showContent() }
				</h1>
			);
		case 'h2':
			return (
				<h2 className="flex flex-col text-center text-2xl container mx-auto">
					{ showContent() }
				</h2>
			)
		case 'h3':
			return (
				<h3 className="flex flex-col text-center text-2xl container mx-auto">
					{ showContent() }
				</h3>
			);
		case 'h4':
			return (
				<h4 className="flex flex-col text-center text-2xl container mx-auto">
					{ showContent() }
				</h4>
			)
	}
}

export default Title;
