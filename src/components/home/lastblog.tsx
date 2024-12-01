import React from 'react';
import './lastblog.scss';
import Title from '@/components/ui/title';

const Lastblog = () => {
  return (
		<section className="w-full flex flex-col mt-28 relative min-h-[600px]">
			<div className="container mx-auto">
				<div className="flex items-center justify-center">
					<Title titleLight="Notre blog" titleBold="Dernières actus" semantique="h2"/>
				</div>
			</div>
			<img src="svg/wave3.svg" className="absolute left-0 w-full -z-10" alt="Rectangle"/>
		</section>
	);
}

export default Lastblog;
