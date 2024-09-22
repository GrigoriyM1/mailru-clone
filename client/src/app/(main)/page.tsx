'use client';

import { useState, useEffect } from 'react';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { IBirthdate } from '@/components/ui/select-birthdate/select-birthdate.types';

const MainPage = () => {
	const [birthDate, setBirthDate] = useState<IBirthdate>({
		day: '',
		month: '',
		year: '',
	});
	useEffect(() => {
		console.log('VALUE CHANGED');
		setBirthDate(prev => ({ ...prev, day: '20' }));
	}, []);

	const handleDayChange = (value: string) => {
		setBirthDate(prev => ({ ...prev, day: value }));
	};

	return (
		<div className='pt-52 px-5'>
			<Select value={String(birthDate.day)} onValueChange={handleDayChange}>
				<SelectTrigger>
					<SelectValue placeholder='idk' />
				</SelectTrigger>
				<SelectContent>
					{[...Array(31)].map((_, index) => (
						<SelectItem key={index} value={(index + 1).toString()}>
							{index + 1}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
};

export default MainPage;
