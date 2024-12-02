'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Top = ({
	children
}: Readonly<{ children: React.ReactNode }>) => {
	const pathname = usePathname();

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	}, [pathname]);

  return (
    <>
			{ children }
    </>
  );
}

export default Top;
