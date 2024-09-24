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
import { FormField } from '@/components/ui/form';
import { DEFAULT_EMAIL_DOMAIN } from '@/constants/auth.constants';

const RegisterPage = () => {
	const {
		register,
		handleSubmit,
		reset,
		control,
		setValue,
		formState: { errors },
	} = useForm<IRegisterForm>({
		mode: 'onChange',
		reValidateMode: 'onChange',
		resolver: zodResolver(RegisterSchema),
		defaultValues: {
			name: '',
			lastName: '',
			birthdate: {
				day: '',
				month: '',
				year: '',
			},
			phone: '',
			password: '',
			linkedEmail: '',
			email: {
				domain: DEFAULT_EMAIL_DOMAIN,
			},
			gender: '',
		},
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
					<Label variant={!!errors?.birthdate ? 'error' : 'light'}>
						Дата рождения
					</Label>
					<SelectBirthdate
						control={control}
						error={!!errors?.birthdate}
						errorText={
							errors?.birthdate?.message ||
							errors?.birthdate?.day?.message ||
							errors?.birthdate?.month?.message ||
							errors?.birthdate?.year?.message
						}
						setValue={setValue}
					/>
				</div>

				<FormField
					control={control}
					name='gender'
					render={({ field }) => (
						<RadioGroup
							className='flex gap-5'
							error={!!errors?.gender}
							helperText={errors?.gender?.message}
							value={field.value}
							onValueChange={field.onChange}
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
					)}
				/>

				<EmailInput
					id='email'
					label='Имя ящика'
					error={!!errors?.email}
					helperText={
						errors?.email?.message ||
						errors?.email?.email?.message ||
						errors?.email?.domain?.message
					}
					control={control}
					register={register}
					{...register('email.email')}
				/>

				<Input
					type='email'
					id='linkedEmail'
					label='Имя привязанного ящика'
					error={!!errors?.linkedEmail}
					helperText={errors?.linkedEmail?.message}
					{...register('linkedEmail')}
				/>

				<div>
					<Label htmlFor='phone'>Номер телефона</Label>
					<FormField
						control={control}
						name='phone'
						render={({ field }) => (
							<PhoneInput
								id='phone'
								error={!!errors?.phone}
								helperText={errors?.phone?.message}
								value={field.value}
								onChange={field.onChange}
							/>
						)}
					/>
				</div>

				<Input
					id='password'
					label='Пароль'
					type='password'
					error={!!errors?.password}
					helperText={errors?.password?.message}
					{...register('password')}
				/>

				<Button type='submit'>Зарегистрироваться</Button>
				{/* TODO: позжеможно добавить "далее" и подтверждение по почте */}
			</form>
		</div>
	);
};
export default RegisterPage;
