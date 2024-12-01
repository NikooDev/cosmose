import React from 'react';
import { CardInterface } from '@/types/ui';
import { twMerge } from 'tailwind-merge';

const Card: React.FC<CardInterface> = ({
	className,
	children
}) => {
  return (
    <div className={twMerge('bg-theme-50/10 flex flex-col backdrop-blur-lg p-6 relative z-20 rounded-3xl border border-theme-50/10', className)}>
			{ children }
    </div>
  );
}

export default Card;
