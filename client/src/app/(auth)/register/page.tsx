'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { format } from 'date-fns';
import {
	Popover,
	PopoverTrigger,
	PopoverContent,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import cn from 'clsx';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';
import { RadioGroupItem, RadioGroup } from '@/components/ui/radio-group';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import {
	DEFAULT_EMAIL_DOMAIN,
	EMAIL_DOMAINS,
} from '@/constants/register.constants';

const RegisterPage = () => {
	const [birthDate, setBirthDate] = useState<Date | undefined>(undefined);

	return (
		<div className='shadow rounded-lg max-w-[400px] w-full mx-auto mt-5 bg-white py-[24px] px-[48px]'>
			<h1 className='text-xl font-medium text-center mb-6'>Новая почта</h1>

			<form className='flex flex-col gap-9'>
				<div className='flex gap-2'>
					<Input label='Имя' id='name' />
					<Input label='Фамилия' id='lastName' />
				</div>

				<div>
					<Label htmlFor='birthDateInput'>Дата рождения</Label>
					<Popover>
						<PopoverTrigger asChild>
							<Button
								variant={'outline'}
								className={cn(
									'w-full pl-3 text-left font-normal text-black',
									!birthDate && 'text-muted-foreground'
								)}
							>
								{birthDate ? (
									format(birthDate, 'dd.MM.yyyy')
								) : (
									<span>Pick a date</span>
								)}
								<CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
							</Button>
						</PopoverTrigger>
						<PopoverContent className='w-auto p-0' align='start'>
							<Calendar
								mode='single'
								selected={birthDate}
								onSelect={setBirthDate}
								disabled={date =>
									date > new Date() || date < new Date('1900-01-01')
								}
								initialFocus
								id='birthDateInput'
							/>
						</PopoverContent>
					</Popover>
				</div>

				<RadioGroup className='flex gap-5'>
					<div className='flex items-center'>
						<RadioGroupItem value='male' id='register-male' />
						<Label
							htmlFor='register-male'
							variant='normal'
							className='cursor-pointer pl-2'
						>
							Мужской
						</Label>
					</div>
					<div className='flex items-center'>
						<RadioGroupItem value='female' id='register-female' />
						<Label
							htmlFor='register-female'
							variant='normal'
							className='cursor-pointer pl-2'
						>
							Женский
						</Label>
					</div>
				</RadioGroup>

				<div className='flex items-end'>
					<Input label='Имя ящка' id='email' />
					<Select defaultValue={DEFAULT_EMAIL_DOMAIN}>
						<SelectTrigger>
							<SelectValue />
						</SelectTrigger>
						<SelectContent>
							{EMAIL_DOMAINS.map(domain => (
								<SelectItem key={domain} value={domain}>
									{domain}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
			</form>
		</div>
	);
};

export default RegisterPage;
