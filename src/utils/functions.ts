import { DateTime } from 'luxon';

export const toRelativeDate = (date: DateTime): string => {
	const diff = date.diffNow(['years', 'months', 'days', 'hours', 'minutes', 'seconds']).toObject();

	const formatUnit = (value: number | undefined, singular: string, plural: string) => {
		if (value === undefined) return '';
		return Math.abs(value) === 1 ? singular : plural;
	};

	if (diff.years && Math.abs(diff.years) > 0) {
		const unit = formatUnit(diff.years, 'an', 'ans');
		return diff.years > 0 ? `Dans ${Math.round(diff.years)} ${unit}` : `Il y a ${Math.round(Math.abs(diff.years))} ${unit}`;
	} else if (diff.months && Math.abs(diff.months) > 0) {
		const unit = formatUnit(diff.months, 'mois', 'mois');
		return diff.months > 0 ? `Dans ${Math.round(diff.months)} ${unit}` : `Il y a ${Math.round(Math.abs(diff.months))} ${unit}`;
	} else if (diff.days && Math.abs(diff.days) > 7) {
		const weeks = Math.round(Math.abs(diff.days) / 7);
		const unit = formatUnit(weeks, 'semaine', 'semaines');
		return diff.days > 0 ? `Dans ${weeks} ${unit}` : `Il y a ${weeks} ${unit}`;
	} else if (diff.days && Math.abs(diff.days) > 0) {
		const unit = formatUnit(diff.days, 'jour', 'jours');
		return diff.days > 0 ? `Dans ${Math.round(diff.days)} ${unit}` : `Il y a ${Math.round(Math.abs(diff.days))} ${unit}`;
	} else if (diff.hours && Math.abs(diff.hours) > 0) {
		const unit = formatUnit(diff.hours, 'heure', 'heures');
		return diff.hours > 0 ? `Dans ${Math.round(diff.hours)} ${unit}` : `Il y a ${Math.round(Math.abs(diff.hours))} ${unit}`;
	} else if (diff.minutes && Math.abs(diff.minutes) > 0) {
		const unit = formatUnit(diff.minutes, 'minute', 'minutes');
		return diff.minutes > 0 ? `Dans ${Math.round(diff.minutes)} ${unit}` : `Il y a ${Math.round(Math.abs(diff.minutes))} ${unit}`;
	} else {
		return 'À l’instant';
	}
}

export const slugify = (str: string) => {
	return str
		.normalize("NFD") // décompose les lettres accentuées
		.replace(/[\u0300-\u036f]/g, "") // supprime les diacritiques
		.toLowerCase()
		.replace(/\s+/g, "-") // remplace les espaces par des tirets
		.replace(/[^\w-]/g, ""); // supprime les caractères spéciaux sauf les tirets
}
