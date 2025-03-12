'use client';

import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useSearchParams } from 'next/navigation';

const Error = () => {
	const searchParams = useSearchParams();

	useEffect(() => {
		const err = searchParams.get('error');
		let error: string | undefined = undefined;

		if (err) {
			if (err === '0') {
				error = 'Impossible de rejoindre la session !\nVeuillez cliquer sur le lien reçu par e-mail pour vous connecter ou contactez le support par chat.';
			} else if (err === '1') {
				error = 'Une erreur est survenue !\nVeuillez contacter le support par chat.';
			}

			error && toast.error(error, { id: 'cosmoseapp-error', position: 'top-center', duration: 10000, className: 'font-NexaHeavy', style: { background: 'rgb(232 229 251)', maxWidth: 500, borderRadius: '15px', color: 'rgb(30 41 59)' } });
		}
	}, [searchParams]);

	return null;
}

export default Error;