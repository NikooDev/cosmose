import React from 'react';
import { TitleInterface } from '@/types/ui';

const Title: React.FC<TitleInterface> = ({
	titleLight,
	titleBold
}) => {
  return (
		<h1 className="flex flex-col text-center text-2xl container mx-auto">
			<span className="font-NexaExtraLight">{ titleLight }</span>
			<span className="font-NexaHeavy text-5xl">{ titleBold }</span>
		</h1>
	);
}

export default Title;
