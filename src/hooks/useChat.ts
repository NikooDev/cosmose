'use client';

import { FormEvent, useCallback, useEffect, useRef, useState } from 'react';
import { collection, query, where, onSnapshot, addDoc, getDocs, updateDoc, doc, orderBy, Timestamp, Unsubscribe } from 'firebase/firestore';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { ConversationInterface, MessageInterface } from '@/types/chat';
import { auth, db, passwordAuth } from '@/config/firebase';
import toast from 'react-hot-toast';
import { DateTime } from 'luxon';

const useChat = () => {
	const [messages, setMessages] = useState<MessageInterface[]>([]);
	const [message, setMessage] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [soundOff, setSoundOff] = useState<boolean>(true);
	const [unsubscribe, setUnsubscribe] = useState<Unsubscribe | undefined>();
	const [loadingRecover, setLoadingRecover] = useState<boolean>(true);
	const [conversationUID, setConversationUID] = useState<string | null>(null);
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
			setSoundOff(data.sound);
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
			const conversationRef = collection(db, 'conversations');
			const q = query(conversationRef, where('client', '==', email.toLowerCase()));
			const snapshot = await getDocs(q);

			let conversationId: string;

			if (snapshot.empty) {
				const userCredential = await createUserWithEmailAndPassword(auth, email, passwordAuth);
				const user = userCredential.user;

				const newConversation = await addDoc(conversationRef, {
					clientUID: user.uid,
					client: email.trim(),
					badgeAdmin: 0,
					sound: true,
					badgeClient: 0,
					created: DateTime.now().toJSDate()
				} as ConversationInterface);

				await updateDoc(newConversation, {
					uid: newConversation.id
				});

				conversationId = newConversation.id;
				setConversationUID(conversationId);

				await handleMessage('Bienvenue sur le Chat Cosmose !\nEn quoi puis-je vous aider ?', false, conversationId);

				localStorage.setItem('session', user.uid);
				setIsRegistered(true);
			} else {
				const existingConversation = snapshot.docs[0];
				conversationId = existingConversation.id;
				const data = existingConversation.data() as ConversationInterface;

				await signInWithEmailAndPassword(auth, data.client, passwordAuth);

				setSoundOff(data.sound);
				setConversationUID(conversationId);

				localStorage.setItem('session', data.clientUID);
				setIsRegistered(data.client === email);
			}

			setLoading(false);
		} catch (e) {
			console.error('Erreur lors de l’authentification:', e);
			setLoading(false);
		}
	}

	const handleSound = async () => {
		if (!conversationUID) return;

		setSoundOff((prevState) => !prevState);
		const conversationRef = doc(db, 'conversations', conversationUID);

		await updateDoc(conversationRef, {
			sound: !soundOff
		})
	}

	const onMessages = useCallback(() => {
		if (!conversationUID) return;

		const messagesRef = collection(db, 'conversations', conversationUID, 'messages');
		const q = query(messagesRef, orderBy('created', 'asc'));

		if (unsubscribe) {
			unsubscribe();
		}

		const unsubscribeFn = onSnapshot(q, async (snapshot) => {
			const messagesData = snapshot.docs.map((doc) => {
				const data = doc.data() as MessageInterface;

				return {
					...data,
					uid: doc.id,
					created: transformDate(data.created as DateTime | Timestamp)
				};
			}) as MessageInterface[];

			if (soundOff) {
				if (messagesData.length > 0) {
					if (popRef.current) {
						await popRef.current.play();
					}
				}
			}

			setMessages(messagesData);
		});

		setUnsubscribe(() => unsubscribeFn);

		return () => unsubscribeFn();
	}, [conversationUID, soundOff, popRef]);

	useEffect(() => {
		if (conversationUID) {
			onMessages();
		}
	}, [conversationUID, onMessages]);

	const handleMessage = async (message: string, isClient: boolean, conversationID: string) => {
		try {
			const messagesRef = collection(db, 'conversations', conversationID, 'messages');

			const newMessage = await addDoc(messagesRef, {
				message,
				isClient,
				read: false,
				created: DateTime.now().toJSDate()
			} as MessageInterface);

			await updateDoc(newMessage, {
				uid: newMessage.id
			});
		} catch (error) {
			console.error('Erreur lors de l’envoi du message:', error);
		}
	}

	const handleLogout = async () => {
		if (unsubscribe) {
			unsubscribe();
		}

		await signOut(auth);
		localStorage.removeItem('session');
		setMessage(null);
		setConversationUID(null);
		setErrorEmail(false);
		setMessages([]);
		setIsRegistered(false);
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

	return {
		conversationUID,
		messages,
		message,
		isRegistered,
		errorEmail,
		loading,
		loadingRecover,
		popRef,
		soundOff,
		setErrorEmail,
		setLoadingRecover,
		setIsRegistered,
		setMessage,
		handleLogin,
		handleMessage,
		handleLogout,
		handleRecover,
		handleSound
	};
}

export default useChat;
