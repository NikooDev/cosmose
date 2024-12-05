import { DateTime } from 'luxon';

export interface ChatInitialInterface {
	show: boolean;
}

export interface ChatActionInterface {
	type: string
	payload: boolean
}

export interface ConversationInterface {
	uid: string;
	clientUID: string;
	client: string;
	badgeAdmin: number;
	badgeClient: number;
	created: DateTime | Date;
}

export interface MessageInterface {
	uid: string;
	message: string;
	isClient: boolean;
	read: boolean;
	created: DateTime | Date;
}
