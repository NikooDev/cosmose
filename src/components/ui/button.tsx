import React from 'react';
import { ButtonInterface } from '@/types/ui';
import { twMerge } from 'tailwind-merge';

const Button: React.FC<ButtonInterface> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button {...props} className={twMerge('bg-theme-400 font-NexaHeavy h-10 rounded-3xl mt-5 hover:bg-theme-50 hover:text-theme-400 transition-colors duration-200', className)}>
      { children }
    </button>
  );
}

export default Button;
