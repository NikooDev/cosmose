'use client';

import { FormEvent, useCallback, useEffect, useRef, useState } from 'react';
import { collection, query, where, onSnapshot, addDoc, getDocs, orderBy, Timestamp } from 'firebase/firestore';
import { signInAnonymously, signOut, updateEmail } from 'firebase/auth';
import { ConversationInterface, MessageInterface } from '@/types/chat';
import { auth, db } from '@/config/firebase';
import toast from 'react-hot-toast';
import { DateTime } from 'luxon';

const useChat = () => {
	const [messages, setMessages] = useState<MessageInterface[]>([]);
	const [message, setMessage] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [loadingRecover, setLoadingRecover] = useState<boolean>(true);
	const [conversationUID, setConversationUID] = useState<string | null>(null);
	const [userUID, setUserUID] = useState<string | null>(null);
	const [errorEmail, setErrorEmail] = useState<boolean>(false);
	const [isRegistered, setIsRegistered] = useState<boolean>(false);
	const popRef = useRef<HTMLAudioElement>(null);

	const handleRecover = async (userID: string) => {
		const conversationRef = collection(db, 'conversations');
		const q = query(conversationRef, where('clientUID', '==', userID));
		const snapshot = await getDocs(q);

		if (!snapshot.empty) {
			const existingConversation = snapshot.docs[0];
			const data = existingConversation.data() as ConversationInterface;
			setConversationUID(existingConversation.id);
			setIsRegistered(data.clientUID === userID);
			setUserUID(userID);
			setLoadingRecover(false);
		} else {
			setLoadingRecover(false);
			setIsRegistered(false);
		}
	}

	const handleLogin = async (event: FormEvent, email: string | null) => {
		event.preventDefault();

		if (!email || email && !email.trim()) return;

		if (email && email.trim() && !validateEmail(email)) {
			setErrorEmail(true);
			return toast.error('Votre adresse e-mail est incorrecte.', { id: 'chat-error', position: 'top-right', duration: 3000, className: 'font-NexaHeavy', style: { background: 'rgb(232 229 251)', borderRadius: '30px', color: 'rgb(30 41 59)' } });
		}

		setLoading(true);

		try {
			const userCredential = await signInAnonymously(auth);
			const user = userCredential.user;

			await updateEmail(user, email);

			setUserUID(user.uid);

			const conversationRef = collection(db, 'conversations');
			const q = query(conversationRef, where('client', '==', email));
			const snapshot = await getDocs(q);

			let conversationId: string;

			if (snapshot.empty) {
				const newConversation = await addDoc(conversationRef, {
					uid: conversationRef.id,
					clientUID: user.uid,
					client: email.trim(),
					badgeAdmin: 0,
					badgeClient: 0,
					created: DateTime.now().toJSDate()
				} as ConversationInterface);

				conversationId = newConversation.id;

				await handleMessage('Bienvenue sur le Chat Cosmose !\nEn quoi puis-je vous aider ?', false, conversationId);

				setIsRegistered(true);
			} else {
				const existingConversation = snapshot.docs[0];
				conversationId = existingConversation.id;
				const data = existingConversation.data() as ConversationInterface;

				setIsRegistered(data.client === email);
			}

			localStorage.setItem('session', user.uid);

			setConversationUID(conversationId);
			setLoading(false);
		} catch (e) {
			console.error('Erreur lors de l’authentification:', e);
		}
	}

	const onMessages = useCallback(() => {
		if (!conversationUID) return;

		const messagesRef = collection(db, 'conversations', conversationUID, 'messages');
		const q = query(messagesRef, orderBy('created', 'asc'));

		const unsubscribe = onSnapshot(q, async (snapshot) => {
			const messagesData = snapshot.docs.map((doc) => {
				const data = doc.data() as MessageInterface;

				return {
					...data,
					uid: doc.id,
					created: transformDate(data.created as DateTime | Timestamp)
				};
			}) as MessageInterface[];

			setMessages(messagesData);

			if (popRef.current) {
				await popRef.current.play();
			}
		});

		return () => unsubscribe();
	}, [conversationUID, popRef]);

	useEffect(() => onMessages(), [onMessages]);

	const handleMessage = async (message: string, isBot: boolean, conversationID: string) => {
		try {
			const messagesRef = collection(db, 'conversations', conversationID, 'messages');

			await addDoc(messagesRef, {
				uid: messagesRef.id,
				message,
				isClient: isBot,
				read: false,
				created: DateTime.now().toJSDate()
			} as MessageInterface);
		} catch (error) {
			console.error('Erreur lors de l’envoi du message:', error);
		}
	}

	const handleLogout = async () => {
		localStorage.removeItem('session');
		await signOut(auth);
	}

	const validateEmail = (email: string) => {
		const regex = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
		return regex.test(email);
	};

	const transformDate = (date: DateTime | Timestamp): DateTime => {
		if (!date) {
			throw new Error('Date is null or undefined.');
		}

		if (typeof date === 'object' && 'seconds' in date) {
			return DateTime.fromSeconds(date.seconds);
		} else if (DateTime.isDateTime(date)) {
			return date;
		} else {
			throw new Error('Invalid date type: Expected a Timestamp or DateTime.');
		}
	}

	/*useEffect(() => {
		let unsubscribe: () => void;

		const initChat = async () => {
			const userCredential = await signInAnonymously(auth);
			const userId = userCredential.user.uid;

			const conversationRef = collection(db, 'conversations');
			const q = query(conversationRef, where('userId', '==', userId));

			unsubscribe = onSnapshot(q, async (snapshot) => {
				if (snapshot.empty) {
					const newConversation = await addDoc(conversationRef, {
						userId,
						isRegistered: false,
						created: new Date()
					});

					setConversationUID(newConversation.id);
				} else {
					const existingConversation = snapshot.docs[0];

					setConversationUID(existingConversation.id);
					setIsRegistered(existingConversation.data().isRegistered);
					listenToMessages(existingConversation.id);
				}
			});
		};

		initChat().catch((error) => console.error('Erreur lors de l’initialisation de la conversation:', error));

		return () => {
			if (unsubscribe) unsubscribe();
		};
	}, []);

	const sendMessage = async (conversationUID: string, message: string, isBot = true) => {
		const messagesRef = collection(db, 'conversations', conversationUID, 'messages');

		await addDoc(messagesRef, {
			message,
			createdAt: new Date(),
			isBot,
		});
	};

	const listenToMessages = (conversationUID: string) => {
		const messagesRef = collection(db, 'conversations', conversationUID, 'messages');
		const q = query(messagesRef);

		isRegistered && onSnapshot(q, (snapshot) => {
			const messagesData = snapshot.docs.map((doc) => ({
				...doc.data() as MessageInterface,
			}));

			setMessages(messagesData);
		});
	};

	const handleSubmitMessage = async (event: FormEvent) => {
		event.preventDefault();

		if (!message) return;

		if (!conversationUID) {
			setMessages([...messages, { uid: 0, message: 'Aucune conversation disponible' }] as any);
			return;
		}

		if (!isRegistered) {
			const email = message.trim();
			if (validateEmail(email)) {
				const conversationRef = collection(db, 'conversations');

				await addDoc(conversationRef, {
					isRegistered: true,
					client: email,
					uid: conversationRef.id
				});

				setIsRegistered(true);
				await sendMessage(conversationUID, 'Vous pouvez maintenant poser vos questions.', true);
			} else {
				return toast.error('Votre adresse e-mail est incorrecte.', { id: 'chat-error', position: 'top-right', duration: 3000, className: 'font-NexaHeavy', style: { background: 'rgb(232 229 251)', borderRadius: '30px', color: 'rgb(30 41 59)' } });
			}
		} else {
			await sendMessage(conversationUID, message, false);
		}

		setMessage('');
	};

	const handleLogout = async () => {
		await signOut(auth);
	}*/

	return {
		messages,
		message,
		isRegistered,
		errorEmail,
		loading,
		loadingRecover,
		popRef,
		setErrorEmail,
		setLoadingRecover,
		setIsRegistered,
		setMessage,
		handleLogin,
		handleMessage,
		handleLogout,
		handleRecover
	};
}

export default useChat;
