'use client';

import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useSearchParams } from 'next/navigation';
import { useChatDispatch } from '@/contexts/chat.context';

const Error = () => {
	const searchParams = useSearchParams();
	const dispatch = useChatDispatch();

	useEffect(() => {
		const room = searchParams.get('room');

		if (room && room === '0') {
			toast.error('Impossible de rejoindre la session !\nVeuillez cliquer sur le lien reçu par e-mail pour vous connecter ou contactez le support par chat.', { id: 'room-error', position: 'top-center', duration: 10000, className: 'font-NexaHeavy', style: { background: 'rgb(232 229 251)', maxWidth: 500, borderRadius: '15px', color: 'rgb(30 41 59)' } });
			dispatch({ type: 'STATE_CHAT', payload: true });
		}
	}, [searchParams]);

	return null;
}

export default Error;