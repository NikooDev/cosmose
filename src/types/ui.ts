import React from 'react';

export interface LogoInterface {
	height: number;
	color: 'white' | 'black' | 'default';
	className?: string;
}

export interface TitleInterface {
	semantique: 'h1' | 'h2' | 'h3' | 'h4'
	titleLight: string;
	titleBold: string;
	className?: string;
}

export interface ButtonInterface extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children: React.ReactNode;
}

export interface CardInterface {
	className?: string;
	children: React.ReactNode;
}

export interface LoaderInterface {
	height: number;
	width: number;
	className?: string;
}
