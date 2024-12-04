'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useChatContext, useChatDispatch } from '@/contexts/chat.context';
import ChatBox from '@/components/chat/box';
import Class from 'classnames';

const ButtonChat = () => {
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const popRef = useRef<HTMLAudioElement>(null);
	const { show } = useChatContext();
	const dispatch = useChatDispatch();

	const handleToggle = useCallback(() => {
		dispatch({ type: 'STATE_CHAT', payload: !show });
	}, [dispatch, show]);

	useEffect(() => {
		if (show && popRef.current) {
			setIsVisible(true);
			popRef.current.play().then();
		} else if (isVisible) {
			setTimeout(() => {
				setIsVisible(false);
			}, 300)
		}
	}, [show, popRef, isVisible]);

  return (
		<>
			<audio ref={popRef}>
				<source src="/sons/pop.mp3" type="audio/mpeg"/>
			</audio>
			<div className="fixed bottom-10 z-30 animate-button-chat ease-in-out" style={{
				inset: 'auto 0px 0px auto',
				width: '370px',
				height: '650px',
				maxHeight: 'calc(100% - 6rem)',
				maxWidth: '100vw',
				visibility: isVisible ? 'visible' : 'hidden'
			}}>
				<AnimatePresence>
					{show && (
						<motion.div className="h-full w-full" initial={{
							transform: 'translateX(0)',
							opacity: 0
						}} animate={{transform: 'translateX(-20px)', opacity: 1}} transition={{
							duration: .3, ease: 'easeOut'
						}} exit={{transform: 'translateX(0)', opacity: 0}}>
							<ChatBox/>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
			<button onClick={handleToggle} className={Class('inline-flex fixed bottom-10 right-10 z-30 items-center justify-center hover:bg-theme-400 transition-colors duration-200 group hover:text-white h-16 w-16 rounded-full', show ? 'bg-theme-400 text-white' : 'bg-theme-50 text-theme-400')}>
				<span className={Class('h-4 w-4 bg-green-500 border-2 group-hover:border-theme-400 transition-colors duration-200 rounded-full absolute top-0.5 right-0.5', show ? 'border-theme-400' : 'border-theme-50')}></span>
				<svg xmlns="http://www.w3.org/2000/svg" height={32} width={32} fill="currentColor" viewBox="0 0 60 60">
					<path xmlns="http://www.w3.org/2000/svg" d="M30,1.5c-16.542,0-30,12.112-30,27c0,5.204,1.646,10.245,4.768,14.604c-0.591,6.537-2.175,11.39-4.475,13.689  c-0.304,0.304-0.38,0.769-0.188,1.153C0.275,58.289,0.625,58.5,1,58.5c0.046,0,0.092-0.003,0.139-0.01  c0.405-0.057,9.813-1.411,16.618-5.339C21.621,54.71,25.737,55.5,30,55.5c16.542,0,30-12.112,30-27S46.542,1.5,30,1.5z M16,32.5  c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S18.206,32.5,16,32.5z M30,32.5c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4  S32.206,32.5,30,32.5z M44,32.5c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S46.206,32.5,44,32.5z"/>
				</svg>
			</button>
		</>
	);
}

export default ButtonChat;
