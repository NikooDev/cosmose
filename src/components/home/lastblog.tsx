import React from 'react';
import './lastblog.scss';
import Title from '@/components/ui/title';

const Lastblog = () => {
  return (
		<section className="w-full flex flex-col mt-20 relative">
			<div className="container mx-auto">
				<div className="flex items-center justify-center">
					<Title titleLight="Notre blog" titleBold="Dernières actus"/>
				</div>
			</div>
		</section>
	);
}

export default Lastblog;
