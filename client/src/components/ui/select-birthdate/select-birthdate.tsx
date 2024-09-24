import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { useMemo, useEffect } from 'react';
import cn from 'clsx';
import { getYears } from '@/lib/get-years';
import { getDaysCount } from '@/lib/get-days-count';
import { getMonth } from '@/lib/get-month';
import ErrorText from '../error-text';
import { Control, UseFormSetValue, useWatch } from 'react-hook-form';
import { FormField } from '../form';

interface ISelectBirthdate {
	control: Control<any, any>;
	error?: boolean;
	errorText?: string;
	setValue: UseFormSetValue<any>;
}

const SelectBirthdate: React.FC<ISelectBirthdate> = ({
	control,
	error = false,
	errorText = '',
	setValue,
}) => {
	const birthDate = useWatch({ control, name: 'birthdate' });

	const days = useMemo(() => {
		return getDaysCount(birthDate.month, birthDate.year);
	}, [birthDate.year, birthDate.month]);

	useEffect(() => {
		if (typeof birthDate.day === 'number' && birthDate.day > days) {
			setValue('birthdate.day', Number(days));
		}
	}, [birthDate.month, birthDate.year]);

	return (
		<div>
			<div className={'flex items-center rounded-md'}>
				{/* день */}
				<FormField
					control={control}
					name='birthdate.day'
					render={({ field }) => (
						<Select
							value={String(field.value)}
							onValueChange={value => field.onChange(Number(value))}
						>
							<SelectTrigger
								className={cn(
									'min-w-[76px] ',
									error && 'border border-solid border-red-600'
								)}
							>
								<SelectValue placeholder='День' />
							</SelectTrigger>
							<SelectContent>
								{[...Array(days)].map((_, index) => (
									<SelectItem key={index} value={String(index + 1)}>
										{index + 1}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					)}
				/>

				{/* месяц */}
				<FormField
					control={control}
					name='birthdate.month'
					render={({ field }) => (
						<Select
							value={String(field.value)}
							onValueChange={value => field.onChange(Number(value))}
						>
							<SelectTrigger
								className={cn(
									'w-full',
									error && 'border border-solid border-red-600'
								)}
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
					)}
				/>

				{/* год */}
				<FormField
					control={control}
					name='birthdate.year'
					render={({ field }) => (
						<Select
							value={String(field.value)}
							onValueChange={value => field.onChange(Number(value))}
						>
							<SelectTrigger
								className={cn(
									'min-w-[76px]',
									error && 'border border-solid border-red-600'
								)}
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
					)}
				/>
			</div>
			{error && errorText && <ErrorText>{errorText}</ErrorText>}
		</div>
	);
};

export default SelectBirthdate;
