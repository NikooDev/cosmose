import { ChatActionInterface } from '@/types/chat';

const ChatState = {
	show: false
}

const ChatReducer = (initialState: { show: boolean }, action: ChatActionInterface) => {
	switch (action.type) {
		case 'STATE_CHAT':
			return {
				show: action.payload
			}
		default:
			return initialState
	}
}

export {
	ChatState, ChatReducer
}
