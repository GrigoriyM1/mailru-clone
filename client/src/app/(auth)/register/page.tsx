'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroupItem, RadioGroup } from '@/components/ui/radio-group';
import SelectBirthdate from '@/components/ui/select-birthdate/select-birthdate';
import { formatTextInput } from '@/lib/format-text-input';
import EmailInput from '@/components/ui/email-input';
import { PhoneInput } from '@/components/ui/phone-input/phone-input';
import { Button } from '@/components/ui/button';
import { IRegisterForm } from '@/types/auth.types';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema } from '@/schemas/register.schema';

const RegisterPage = () => {
	const {
		register,
		handleSubmit,
		reset,
		control,
		formState: { errors },
	} = useForm<IRegisterForm>({
		mode: 'onChange',
		resolver: zodResolver(RegisterSchema),
	});

	const onSubmit: SubmitHandler<IRegisterForm> = data => {
		console.log('SUBMIT DATA  ', data);
		reset();
	};

	return (
		<div className='shadow rounded-lg max-w-[400px] w-full mx-auto mt-5 bg-white py-[24px] px-[48px]'>
			<h1 className='text-xl font-medium text-center mb-6'>Новая почта</h1>

			<form className='flex flex-col gap-8' onSubmit={handleSubmit(onSubmit)}>
				<div className='flex gap-2'>
					<Input
						label='Имя'
						id='name'
						error={!!errors?.name}
						helperText={errors?.name?.message}
						{...register('name')}
						onChange={e => {
							formatTextInput(e);
							register('name').onChange(e);
						}}
					/>
					<Input
						label='Фамилия'
						id='lastName'
						error={!!errors?.lastName}
						helperText={errors?.lastName?.message}
						{...register('lastName')}
						onChange={e => {
							formatTextInput(e);
							register('lastName').onChange(e);
						}}
					/>
				</div>

				<div>
					<Label>Дата рождения</Label>
					<SelectBirthdate />
				</div>
				
				{/* <FormField /> */}
				<RadioGroup
					className='flex gap-5'
					error={!!errors?.gender}
					helperText={errors?.gender?.message}
					{...register('gender')}
				>
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

				<EmailInput id='email' label='Имя ящика' />
				<Input
					type='email'
					id='linkedEmail'
					label='Имя привязанного ящика'
					{...register('linkedEmail')}
				/>

				<div>
					<Label htmlFor='phone'>Номер телефона</Label>
					<PhoneInput id='phone' />
				</div>

				<Input
					id='password'
					label='Пароль'
					type='password'
					{...register('password')}
				/>

				<Button type='submit'>Зарегистрироваться</Button>
				{/* TODO: позжеможно добавить "далее" и подтверждение по почте */}
			</form>
		</div>
	);
};

export default RegisterPage;
