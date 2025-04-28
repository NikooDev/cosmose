import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/config/firebase';
import { ActivityInterface } from '@/types/activity';

const useActivity = () => {
	const getActivities = async () => {
		const activitiesRef = collection(db, 'activities');
		const q = query(activitiesRef, where('enable', '==', true));
		const snapshot = await getDocs(q);

		if (!snapshot.empty) {
			return snapshot.docs.map((doc) => doc.data()) as ActivityInterface[];
		}
	}

	const getActivity = async (uid: string) => {
		const activitiesRef = collection(db, 'activities');
		const q = query(activitiesRef, where('uid', '==', uid));

		const snapshot = await getDocs(q);

		if (!snapshot.empty) {
			return snapshot.docs.map((doc) => doc.data())[0] as ActivityInterface;
		}
	}

	return {
		getActivities, getActivity
	}
}

export default useActivity;
