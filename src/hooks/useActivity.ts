import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/config/firebase';
import { ActivityInterface } from '@/types/activity';

const useActivity = () => {
	const getActivity = async () => {
		const activitiesRef = collection(db, 'activities');
		const q = query(activitiesRef, where('enable', '==', true));
		const snapshot = await getDocs(q);

		if (!snapshot.empty) {
			return snapshot.docs.map((doc) => doc.data()) as ActivityInterface[];
		}
	}

	return {
		getActivity
	}
}

export default useActivity;