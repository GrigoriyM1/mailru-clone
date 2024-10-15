import { format, addMinutes, parseISO } from 'date-fns';
import { QUESTION_EDIT_MINUTES_INTERVAL } from '@/constants/question.constants';

export const getTimeLeft = (timeString: string): string => {
	const date = parseISO(timeString);
	const intervalEnd = addMinutes(date, QUESTION_EDIT_MINUTES_INTERVAL);
	const now = new Date();

	if (now >= intervalEnd) {
		return '-0';
	}

	const timeLeft = intervalEnd.getTime() - now.getTime();
	const minutesLeft = Math.floor(timeLeft / 1000 / 60);
	const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

	if (minutesLeft < 0) {
		return `-${Math.abs(minutesLeft)}:${secondsLeft
			.toString()
			.padStart(2, '0')}`;
	}

	return `${minutesLeft}:${secondsLeft.toString().padStart(2, '0')}`;
};
