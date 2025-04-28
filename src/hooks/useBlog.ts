import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "@/config/firebase";
import BlogInterface from "@/types/blog";

const useBlog = () => {
	const getBlogs = async () => {
		const blogRef = collection(db, 'blog');
		const q = query(blogRef);
		const snapshot = await getDocs(q);

		if (!snapshot.empty) {
			return snapshot.docs.map((doc) => doc.data()) as BlogInterface[];
		}
	}

	const getBlog = async (blogUID: string) => {
		const blogRef = collection(db, 'blog');
		const q = query(blogRef, where('uid', '==', blogUID));

		const snapshot = await getDocs(q);

		if (!snapshot.empty) {
			return snapshot.docs.map((doc) => doc.data())[0] as BlogInterface;
		}
	}

	return {
		getBlogs, getBlog
	}
}

export default useBlog;
