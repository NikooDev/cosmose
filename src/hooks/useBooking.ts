import {addDoc, collection, updateDoc} from "firebase/firestore";
import {db} from "@/config/firebase";
import BookingInterface from "@/types/booking";
import {ActivityInterface} from "@/types/activity";

const useBooking = () => {
	const generateTenDigits = (): string => {
		const digits = '1234567890';
		let result = '';

		for (let i = 0; i < 10; i++) {
			const randomIndex = Math.floor(Math.random() * digits.length);
			result += digits[randomIndex];
		}

		return result;
	};

	const submitBooking = async (booking: BookingInterface, activity: ActivityInterface) => {
		const bookingsRef = collection(db, 'bookings');
		const roomRef = collection(db, 'rooms');
		const roomID = generateTenDigits();

		if (!booking.date && !booking.members && !activity) {
			return;
		}

		const members = booking.members as number;
		const startDate = booking.date as Date;
		const endDate = new Date(startDate.getTime() + Number(activity.playtime) * 60 * 60 * 1000);

		const newBooking = {
			company: booking.company,
			status: 'confirmed',
			roomID,
			startDate,
			endDate,
			phone: booking.phone,
			price: members * activity.price,
			duration: activity.playtime,
			accessLink: `https://cosmoseapp.vercel.app/?roomID=${roomID}`,
			note: booking.message ?? null,
			activity,
			created: new Date(),
			updated: new Date()
		}

		await addDoc(roomRef, {
			company: booking.company,
			roomID,
		});

		const bookCreated = await addDoc(bookingsRef, newBooking);

		await updateDoc(bookCreated, {
			uid: bookCreated.id
		});
	}

	return {
		submitBooking
	}
}

export default useBooking;
