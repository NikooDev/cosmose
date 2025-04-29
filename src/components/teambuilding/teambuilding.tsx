'use client';

import React, {useCallback, useEffect, useRef, useState} from 'react';
import Title from "@/components/ui/title";
import {ActivityInterface} from "@/types/activity";
import useActivity from "@/hooks/useActivity";
import {useRouter, useSearchParams} from "next/navigation";
import Class from "classnames";
import Image from "next/image";
import Button from "@/components/ui/button";
import Bestsellers from "@/components/home/bestsellers";
import Calendar from 'react-calendar'
import toast from 'react-hot-toast';
import './calendar.scss';
import BookingInterface from "@/types/booking";
import useBooking from "@/hooks/useBooking";

const Teambuilding = () => {
	const [booking, setBooking] = useState<BookingInterface | null>(null);
	const [value, onChange] = useState<Date | null>(null);
	const [selectedTime, setSelectedTime] = useState<string | null>(null);
	const [activity, setActivity] = useState<ActivityInterface | null>(null);
	const { getActivity } = useActivity();
	const searchParams = useSearchParams();
	const uid = searchParams.get('uid');
	const router = useRouter();
	const { submitBooking } = useBooking();

	const formRef = useRef<HTMLFormElement | null>(null);
	const companyRef = useRef<HTMLInputElement | null>(null);
	const emailRef = useRef<HTMLInputElement | null>(null);
	const userRef = useRef<HTMLInputElement | null>(null);
	const phoneRef = useRef<HTMLInputElement | null>(null);
	const messageRef = useRef<HTMLTextAreaElement | null>(null);

	const handleGetActivity = useCallback(async () => {
		if (uid) {
			const data = await getActivity(uid);

			data && setActivity(data);

			if (!data) {
				router.push('/');
			}
		}
	}, [uid]);

	useEffect(() => {
		handleGetActivity().then();
	}, [handleGetActivity]);

	useEffect(() => {
		if (selectedTime && value) {
			const date = mergeDateAndTime(value, selectedTime);

			setBooking(prev => ({ ...prev, date: date }));
		}
	}, [selectedTime, value]);

	const handleChange = (e: React.ChangeEvent) => {
		const target = e.target as HTMLInputElement;
		const name = target.name;

		setBooking({ ...booking, [name]: target.value });
	}

	const getPrice = (price: number) => {
		if (booking && booking.members) {
			return booking.members * price;
		}
	}

	const isWeekend = (date: Date) => {
		const day = date.getDay();
		return day === 0 || day === 6;
	};

	const selectDate = (selectedDate: Date) => {
		if (isWeekend(selectedDate)) {
			toast.dismiss();
			toast.error('Cette date est indisponible.', { duration: 5000, className: 'font-NexaHeavy', style: { background: 'rgb(232 229 251)', borderRadius: '15px', color: 'rgb(30 41 59)' } });
			return;
		}

		const today = new Date();
		today.setHours(0, 0, 0, 0);

		if (selectedDate < today) {
			toast.dismiss();
			toast.error('Cette date est indisponible.', {
				duration: 5000,
				className: 'font-NexaHeavy',
				style: { background: 'rgb(232 229 251)', borderRadius: '15px', color: 'rgb(30 41 59)' }
			});
			return;
		}

		onChange(selectedDate);
	};

	const generateTimeSlots = () => {
		const timeSlots = [];
		const startHour = 8;
		const endHour = 23;

		for (let hour = startHour; hour <= endHour; hour++) {
			for (let minute = 0; minute < 60; minute += 15) {
				const time = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
				timeSlots.push(time);
			}
		}
		return timeSlots;
	};

	const timeSlots = generateTimeSlots();

	const handleTimeSelect = (time: string) => {
		setSelectedTime(time);
	};

	const mergeDateAndTime = (date: Date, time: string) => {
		const [hours, minutes] = time.split(':').map(Number);
		const newDate = new Date(date);

		newDate.setHours(hours);
		newDate.setMinutes(minutes);
		newDate.setSeconds(0);
		newDate.setMilliseconds(0);

		return newDate;
	};

	const handleScroll = () => {
		const element = document.getElementById('booking');
		if (element) {
			const top = element.getBoundingClientRect().top + window.scrollY;
			const offset = 50;

			window.scrollTo({
				top: top - offset,
				behavior: 'smooth'
			});
		}
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const isEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

		if (!value || !selectedTime) {
			toast.dismiss();
			toast.error('Veuillez ajouter une date et une heure.', { duration: 5000, className: 'font-NexaHeavy', style: { background: 'rgb(232 229 251)', borderRadius: '15px', color: 'rgb(30 41 59)' } });
			return;
		}

		if (booking && activity) {
			if (booking.company && booking.members && booking.phone && booking.email) {
				if (!isEmailRegex.test(booking.email)) {
					toast.dismiss();
					toast.error('Votre adresse e-mail est incorrecte.', { duration: 5000, className: 'font-NexaHeavy', style: { background: 'rgb(232 229 251)', borderRadius: '15px', color: 'rgb(30 41 59)' } });
					return;
				}

				const isValidPhone = /^\d{10}$/.test(booking.phone);

				if (booking.phone.length < 10 && !isValidPhone) {
					toast.dismiss();
					toast.error('Votre numéro de téléphone est incorrect.', { duration: 5000, className: 'font-NexaHeavy', style: { background: 'rgb(232 229 251)', borderRadius: '15px', color: 'rgb(30 41 59)' } });
					return;
				}

				try {
					await submitBooking(booking, activity);
					toast.dismiss();
					toast.success('Votre réservation a bien été prise en compte.\nUn e-mail de confirmation vous a été envoyé.', { duration: 5000, className: 'font-NexaHeavy', style: { background: 'rgb(232 229 251)', maxWidth: '450px', borderRadius: '15px', color: 'rgb(30 41 59)' } });
					setSelectedTime(null);
					onChange(null);
					formRef.current?.reset();
				} catch (err) {
					console.error(err)
				}
			} else {
				let message = '';

				if (!booking.company) {
					message = 'Le nom de l\'organisme est requis.';
				} else if (!booking.email) {
					message = 'Une adresse e-mail est requise.';
				} else if (!booking.members) {
					message = 'Le nombre de participants est manquant.';
				} else if (!booking.phone) {
					message = 'Un numéro de téléphone est requis.';
				}

				toast.dismiss();
				toast.error(message, { duration: 5000, className: 'font-NexaHeavy', style: { background: 'rgb(232 229 251)', borderRadius: '15px', color: 'rgb(30 41 59)' } });
				return;
			}
		}
	}

	return (!activity ? <></> :
		<>
			<img src="/svg/ellipse4.svg" alt="ellipse" className="absolute top-[1000px] right-0 -z-30" height={1000} width={1000}/>
			<img src="/svg/ellipse3.svg" alt="ellipse" className="absolute top-[1700px] -left-[300px] -z-30" height={1000} width={1000}/>
			<div className="container mx-auto">
				<div className="flex flex-wrap-reverse lg:flex-nowrap gap-12 w-full">
					<div className="w-full">
						{(() => {
							const words = activity.title.trim().split(' ');
							const titleLight = words.slice(0, 2).join(' ');
							const titleBold = words.slice(2).join(' ');
							return (
								<Title
									titleLight={titleLight}
									titleBold={titleBold}
									semantique="h2"
									className="text-left !px-0 text-[35px]"
								/>
							);
						})()}
						<div className="flex items-center gap-12 mb-4 mt-4">
							<div className="flex">
								<img src="/img/icons/time.svg" alt="time"/>
								<p className="ml-2 font-NexaHeavy">{ activity.playtime }h</p>
							</div>
							<div className="flex">
								<img src="/img/icons/users.svg" alt="time"/>
								<p className="ml-2 font-NexaHeavy">{ activity.minPlayer } à { activity.maxPlayer } joueurs</p>
							</div>
							<div className="flex">
								<img src="/img/icons/euro.svg" alt="time"/>
								<p className="ml-2 font-NexaHeavy">{ activity.price }/pers</p>
							</div>
						</div>
						<div className="mb-4">
							<p className="whitespace-break-spaces text-[17px]">{ activity.baseline }</p>
						</div>
						<div>
							<Button type="button" onClick={handleScroll} className="px-10 text-lg">Réserver</Button>
						</div>
					</div>
					<div className="relative lg:max-w-[624px] w-full h-full">
						<div className={Class('absolute -top-10 left-12 bg-white/10 border border-white/10 backdrop-blur-sm rounded-2xl w-36 h-20 flex justify-center items-center hero-icon')}>
							<Image src="/svg/micro.svg" alt="Micro" height={32} width={24} className="mb-0.5"/>
						</div>
						<div className="relative -z-10">
							<img src={activity.pictureUrl} className="rounded-[30px] w-full max-w-full lg:max-w-[624px]" alt=""/>
						</div>
						<div className={Class('absolute -bottom-10 right-12 bg-white/10 border border-white/10 backdrop-blur-sm rounded-2xl w-36 h-20 flex justify-center items-center hero-icon')}>
							<Image src="/svg/camera.svg" alt="Camera" height={31} width={36} className="mb-0.5"/>
						</div>
					</div>
				</div>
				<div className="flex lg:flex-nowrap flex-wrap items-start justify-between gap-24 w-full mt-20">
					<div className="w-full">
						<Title semantique="h2" titleLight="" titleBold="Scénario" className="mb-4 text-left !px-0 [&>span:last-child]:text-[30px]"/>
						<p className="whitespace-break-spaces text-[17px]">{ activity.description }</p>
					</div>
					<div className="w-[45%] mx-auto lg:mx-0">
						<ul className="flex flex-col gap-6">
							<li className="flex items-center gap-3">
								<img src="/svg/carbon_checkmark-filled.svg" alt="icon"/>
								<span className="font-NexaHeavy text-lg">{ activity.keywords[0] }</span>
							</li>
							<li className="flex items-center gap-3">
								<img src="/svg/carbon_checkmark-filled.svg" alt="icon"/>
								<span className="font-NexaHeavy text-lg">{ activity.keywords[1] }</span>
							</li>
							<li className="flex items-center gap-3">
								<img src="/svg/carbon_checkmark-filled.svg" alt="icon"/>
								<span className="font-NexaHeavy text-lg">{ activity.keywords[2] }</span>
							</li>
						</ul>
					</div>
				</div>
				<div className="flex flex-col mt-20">
					<ul className="flex items-center gap-1.5">
						<li><img src="/svg/ic_round-star.svg" alt="stars" height={40} width={40}/></li>
						<li><img src="/svg/ic_round-star.svg" alt="stars" height={40} width={40}/></li>
						<li><img src="/svg/ic_round-star.svg" alt="stars" height={40} width={40}/></li>
						<li><img src="/svg/ic_round-star.svg" alt="stars" height={40} width={40}/></li>
						<li><img src="/svg/ic_round-star.svg" alt="stars" height={40} width={40}/></li>
					</ul>
					<Title semantique="h2" titleLight="Ils ont passé" titleBold="Un bon moment" className="text-left !px-0 mt-4"/>
					<div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 mt-16">
						<div>
							<ul className="flex items-center gap-1.5">
								<li><img src="/svg/ic_round-star.svg" alt="stars" height={16} width={16}/></li>
								<li><img src="/svg/ic_round-star.svg" alt="stars" height={16} width={16}/></li>
								<li><img src="/svg/ic_round-star.svg" alt="stars" height={16} width={16}/></li>
								<li><img src="/svg/ic_round-star.svg" alt="stars" height={16} width={16}/></li>
								<li><img src="/svg/ic_round-star.svg" alt="stars" height={16} width={16}/></li>
							</ul>
							<p className="text-2xl font-NexaHeavy mt-3">André G.</p>
							<p>Une expérience à vivre absolument pour toute l'équipe cherchant à se rapprocher.</p>
						</div>
						<div>
							<ul className="flex items-center gap-1.5">
								<li><img src="/svg/ic_round-star.svg" alt="stars" height={16} width={16}/></li>
								<li><img src="/svg/ic_round-star.svg" alt="stars" height={16} width={16}/></li>
								<li><img src="/svg/ic_round-star.svg" alt="stars" height={16} width={16}/></li>
								<li><img src="/svg/ic_round-star.svg" alt="stars" height={16} width={16}/></li>
								<li><img src="/svg/ic_round-star.svg" alt="stars" height={16} width={16}/></li>
							</ul>
							<p className="text-2xl font-NexaHeavy mt-3">Nicolas P.</p>
							<p>Notre équipe a adoré collaborer pour résoudre les énigmes. Une manière fantastique de renforcer les liens et de stimuler la réflexion collective.</p>
						</div>
						<div>
							<ul className="flex items-center gap-1.5">
								<li><img src="/svg/ic_round-star.svg" alt="stars" height={16} width={16}/></li>
								<li><img src="/svg/ic_round-star.svg" alt="stars" height={16} width={16}/></li>
								<li><img src="/svg/ic_round-star.svg" alt="stars" height={16} width={16}/></li>
								<li><img src="/svg/ic_round-star.svg" alt="stars" height={16} width={16}/></li>
								<li><img src="/svg/ic_round-star.svg" alt="stars" height={16} width={16}/></li>
							</ul>
							<p className="text-2xl font-NexaHeavy mt-3">Alban L.</p>
							<p>Divertissement et cohésion garanties ! Un must pour les entreprises en télétravail..</p>
						</div>
						<div>
							<ul className="flex items-center gap-1.5">
								<li><img src="/svg/ic_round-star.svg" alt="stars" height={16} width={16}/></li>
								<li><img src="/svg/ic_round-star.svg" alt="stars" height={16} width={16}/></li>
								<li><img src="/svg/ic_round-star.svg" alt="stars" height={16} width={16}/></li>
								<li><img src="/svg/ic_round-star.svg" alt="stars" height={16} width={16}/></li>
								<li><img src="/svg/ic_round-star.svg" alt="stars" height={16} width={16}/></li>
							</ul>
							<p className="text-2xl font-NexaHeavy mt-3">Pierre C.</p>
							<p>Une activité géniale qui a mis à l'épreuve notre esprit d'équipe. Les énigmes étaient passionnantes et nous ont tenus en haleine jusqu'à la fin.</p>
						</div>
					</div>
				</div>
			</div>
			<div id="booking" className="container mx-auto mt-20">
				<Title semantique="h2" titleLight="N'attendez pas" titleBold="Reservez une session" className="text-left !px-0 mt-4"/>
				<p className="text-lg mt-3">Réservez une date pour une expérience inoubliable de team building<br/>digital avec Cosmose.</p>
				<div className="flex flex-wrap lg:flex-nowrap items-center gap-14 mt-10 relative">
					<div className="flex w-full bg-theme-50/10 rounded-3xl border border-theme-50/10 backdrop-blur-[8px] p-6">
						<div className="flex-1">
							<Calendar prevLabel={<PrevIcon/>} nextLabel={<NextIcon/>} prev2Label={<FirstIcon/>} next2Label={<LastIcon/>} onChange={(value) => selectDate(value as Date)}/>
						</div>
						<div className="border-l-[1px] border-theme-50/20 ml-3 lg:ml-6 flex flex-col justify-between">
							<div className="pl-3 lg:pl-6">
								<p className="lg:text-2xl text-lg font-NexaHeavy mt-1.5 pl-4">Heure</p>
								<div className="max-h-[300px] overflow-y-auto mt-4 flex flex-col gap-3">
									{
										timeSlots.map((time, index) => (
											<button onClick={() => handleTimeSelect(time)}
															className={Class(time === selectedTime ? 'bg-theme-500' : '','inline-flex self-start text-lg font-NexaHeavy mr-4 px-4 py-1.5 rounded-full hover:bg-black/50 focus:bg-theme-500 transition-colors duration-200')} key={index}>{ time }</button>
										))
									}
								</div>
							</div>
						</div>
					</div>
					<div className="w-full">
						<form method="post" ref={formRef} onSubmit={handleSubmit} autoComplete="off" className="w-full">
							<div className="flex items-center gap-4 w-full mb-4">
								<div className="flex flex-col w-full">
									<label htmlFor="company" className="mb-2 text-lg font-NexaHeavy">Organisme*</label>
									<input type="text" id="company" ref={companyRef} onChange={handleChange} name="company" autoComplete="off" className="placeholder:text-theme-50 border border-theme-50 focus:bg-white/10 transition-colors duration-200 h-10 px-4 rounded-full w-full bg-transparent"/>
								</div>
								<div className="flex flex-col w-full">
									<label htmlFor="email" className="mb-2 text-lg font-NexaHeavy">Adresse e-mail*</label>
									<input type="text" id="email" ref={emailRef} onChange={handleChange} name="email" autoComplete="off" className="placeholder:text-theme-50 border border-theme-50 focus:bg-white/10 transition-colors duration-200 h-10 px-4 rounded-full w-full bg-transparent"/>
								</div>
							</div>
							<div className="flex items-center gap-4 w-full mb-4">
								<div className="flex flex-col w-full">
									<label htmlFor="numberUser" className="mb-2 text-lg font-NexaHeavy">Nombre de participants*</label>
									<input type="number" max={40} ref={userRef} onChange={handleChange} name="members" id="numberUser" autoComplete="off" className="placeholder:text-theme-50 focus:bg-white/10 transition-colors duration-200 border border-theme-50 h-10 px-4 rounded-full w-full bg-transparent"/>
								</div>
								<div className="flex flex-col w-full">
									<label htmlFor="phone" className="mb-2 text-lg font-NexaHeavy">Téléphone*</label>
									<input type="text" maxLength={10} id="phone" ref={phoneRef} onChange={handleChange} name="phone" autoComplete="off" className="placeholder:text-theme-50 border border-theme-50 focus:bg-white/10 transition-colors duration-200 h-10 px-4 rounded-full w-full bg-transparent"/>
								</div>
							</div>
							<div className="flex flex-col mb-4">
								<label htmlFor="message" className="mb-2 text-lg font-NexaHeavy">Message</label>
								<textarea id="message" ref={messageRef} onChange={handleChange} name="message" autoComplete="off" rows={3} placeholder="Votre message (facultatif)" className="placeholder:text-theme-50 border border-theme-50 focus:bg-white/10 transition-colors duration-200 px-4 py-3 rounded-3xl w-full bg-transparent resize-none"/>
							</div>
							<Button type="submit" color="primary" className="w-full mt-0">Réserver { booking && booking.members && getPrice(activity.price) !== 0 ? '• '+getPrice(activity.price)+' € HT' : '' }</Button>
						</form>
					</div>
				</div>
			</div>
			<div>
				<Bestsellers title="Pour vous" subtitle="Activités similaires" showButton={false}/>
			</div>
		</>
	)
}

const PrevIcon = () => {
	return <img src="/svg/chevron_left.svg" alt="chevron" width={32} height={32}/>
}

const NextIcon = () => {
	return <img src="/svg/chevron_right.svg" alt="chevron" width={32} height={32}/>
}

const LastIcon = () => {
	return <img src="/svg/last_page.svg" alt="chevron" width={32} height={32}/>
}

const FirstIcon = () => {
	return <img src="/svg/first_page.svg" alt="chevron" width={32} height={32}/>
}

export default Teambuilding;
