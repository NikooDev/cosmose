'use client';

import React, { createContext, useContext, useReducer } from 'react';
import { ChatReducer, ChatState } from '@/reducers/chat.reducer';
import { ChatActionInterface, ChatInitialInterface } from '@/types/chat';

const ChatContext = createContext({} as ChatInitialInterface);
const ChatDispatch = createContext<React.Dispatch<ChatActionInterface>>(() => {});

const useChatContext = () => {
	const context = useContext(ChatContext)
	if(context === undefined) {
		throw new Error('useThemeContext must be used inside a ThemeProvider')
	}
	return context
}

const useChatDispatch = () => {
	const context = useContext(ChatDispatch)
	if(context === undefined) {
		throw new Error('useThemeDispatch must be used inside a ThemeProvider')
	}
	return context
}

const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [chat, dispatch] = useReducer(ChatReducer, ChatState);

	return (
		<ChatContext.Provider value={chat}>
			<ChatDispatch.Provider value={dispatch}>
				{ children }
			</ChatDispatch.Provider>
		</ChatContext.Provider>
	)
}

export {
	useChatContext, useChatDispatch, ChatProvider
}
