'use client';

import {useEffect} from 'react';

const NoEllipse = () => {

	useEffect(() => {
		const ellipse = document.getElementById('ellipse');

		if (ellipse) {
			ellipse.style.display = 'none';
		}
	}, []);

	return null;
}

export default NoEllipse;
