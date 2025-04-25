import {collection, getDocs, query} from "firebase/firestore";
import {db} from "@/config/firebase";
import {ActivityInterface} from "@/types/activity";

const useBlog = () => {
	const getBlog = async () => {
		const activitiesRef = collection(db, 'blog');
		const q = query(activitiesRef);
		const snapshot = await getDocs(q);

		if (!snapshot.empty) {
			return snapshot.docs.map((doc) => doc.data()) as ActivityInterface[];
		}
	}

	return {
		getBlog
	}
}

export default useBlog;
