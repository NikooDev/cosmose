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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
	app, auth, db
}
