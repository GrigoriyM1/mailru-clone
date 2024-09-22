import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { useMemo, useState, useEffect } from 'react';
import cn from 'clsx';
import { getYears } from '@/lib/get-years';
import { getDaysCount } from '@/lib/get-days-count';
import { IBirthdate } from './select-birthdate.types';
import { getMonth } from '@/lib/get-month';

const SelectBirthdate = () => {
	const [birthDate, setBirthDate] = useState<IBirthdate>({
		day: '',
		month: '',
		year: '',
	});

	const days = useMemo(() => {
		return getDaysCount(birthDate.month, birthDate.year);
	}, [birthDate.year, birthDate.month]);

	useEffect(() => {
		if (typeof birthDate.day === 'number' && birthDate.day > days) {
			setBirthDate(prev => ({ ...prev, day: Number(days) }));
		}
	}, [birthDate.month, birthDate.year]);

	const handleDayChange = (value: string) => {
		setBirthDate(prev => ({ ...prev, day: Number(value) }));
	};
	const handleMonthChange = (value: string) => {
		setBirthDate(prev => ({ ...prev, month: Number(value) }));
	};
	const handleYearChange = (value: string) => {
		setBirthDate(prev => ({ ...prev, year: Number(value) }));
	};

	return (
		<div className='flex items-center'>
			{/* день */}
			<Select value={String(birthDate.day)} onValueChange={handleDayChange}>
				<SelectTrigger
					className={cn('min-w-[76px]', {
						'text-gray-400': birthDate.day === '',
					})}
				>
					<SelectValue placeholder='День' />
				</SelectTrigger>
				<SelectContent>
					{[...Array(days)].map((_, index) => (
						<SelectItem key={index} value={(index + 1).toString()}>
							{index + 1}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
			{/* месяц */}
			<Select value={String(birthDate.month)} onValueChange={handleMonthChange}>
				<SelectTrigger
					className={cn('w-full', {
						'text-gray-400': birthDate.month === '',
					})}
				>
					<SelectValue placeholder='Месяц' />
				</SelectTrigger>
				<SelectContent>
					{[...Array(12)].map((_, monthIndex) => (
						<SelectItem key={monthIndex} value={String(monthIndex + 1)}>
							{getMonth(monthIndex)}
						</SelectItem>
					))}
				</SelectContent>
			</Select>

			{/* год */}
			<Select value={String(birthDate.year)} onValueChange={handleYearChange}>
				<SelectTrigger
					className={cn('min-w-[76px]', {
						'text-gray-400': birthDate.year === '',
					})}
				>
					<SelectValue placeholder='Год' />
				</SelectTrigger>
				<SelectContent>
					{getYears().map(year => (
						<SelectItem key={year} value={String(year)}>
							{year}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
};
export default SelectBirthdate;
