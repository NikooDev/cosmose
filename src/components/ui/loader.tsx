import React from 'react';
import { LoaderInterface } from '@/types/ui';
import './loader.scss';

const Loader: React.FC<LoaderInterface> = ({
	height,
	width
}) => {
  return (
		<div className="flex items-center justify-center bg-theme-50/10 border border-theme-50/10 rounded-full" style={{ width: (width + 20)+'px', height: (height + 20)+'px' }}>
			<svg className="spinner" width={width} height={height} viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
				<circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
			</svg>
		</div>
	);
}

export default Loader;