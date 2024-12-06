import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCYMlitjf1X6SFnncjRd1VXhVfTVaWkSWY',
	authDomain: 'cosmose-c2744.firebaseapp.com',
	projectId: 'cosmose-c2744',
	storageBucket: 'cosmose-c2744.firebasestorage.app',
	messagingSenderId: '313531658053',
	appId: '1:313531658053:web:cb56756769a3ec68fc182c',
	measurementId: 'G-H6KRMG8PVX'
};

const passwordAuth = 'A8z!3pL#Q9d@jVkT&X2mG7Yw*5oR6cB$ZqW1yFgH^D4nJsP@vMtK&L#X9d@2oRq5Y7pL3z!8xT';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
	app, auth, db, passwordAuth
}
