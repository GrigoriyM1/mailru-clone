import EmailInput from '@/components/ui/email-input';
import Modal from '@/components/ui/modal';
import { DEFAULT_EMAIL_DOMAIN } from '@/constants/auth.constants';
import { useModalsStore } from '@/store/use-modals-store';
import { loginSchemaEmail, loginSchemaPassword } from '@/schemas/login.schema';
import { ILoginData } from '@/types/auth.types';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight, X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Input } from '@/components/ui/input';

const LoginModal = () => {
	const [isPasswordInput, setIsPasswordInput] = useState(false);
	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<ILoginData>({
		defaultValues: {
			email: {
				email: '',
				domain: DEFAULT_EMAIL_DOMAIN,
			},
			password: '',
		},
		resolver: zodResolver(
			isPasswordInput ? loginSchemaPassword : loginSchemaEmail
		),
		mode: 'onChange',
	});
	const { isLoginModalOpen, setIsLoginModalOpen } = useModalsStore();

	const onSubmit = (data: ILoginData) => {
		console.log('submit  ', data, errors);
		if (!isPasswordInput) {
			setIsPasswordInput(true);
		}
	};

	return (
		<div>
			<Modal
				isOpen={isLoginModalOpen}
				onClose={() => setIsLoginModalOpen(false)}
				className='max-w-[420px] w-full'
			>
				<div className='flex justify-between items-center mb-9'>
					<h1 className='text-[21px]'>Войти в аккаунт</h1>
					<X
						className='cursor-pointer w-5 h-5'
						onClick={() => setIsLoginModalOpen(false)}
					/>
				</div>

				<form onSubmit={handleSubmit(onSubmit)} noValidate>
					{isPasswordInput ? (
						<>
							<div className='flex items-center gap-2 text-[14px] mb-3'>
								<div className='hover:underline'>otpravka92@mail.ru</div>
								<div className='text-primary hover:underline'>
									Сменить аккаунт
								</div>
							</div>

							<Input
								type='password'
								placeholder='Пароль'
								error={!!errors?.password}
								helperText={errors?.password?.message}
								{...register('password')}
							/>
						</>
					) : (
						<EmailInput
							variant='expanded'
							control={control}
							placeholder='Имя аккаунта'
							error={!!errors.email?.email}
							helperText={
								errors.email?.email?.message ||
								errors.email?.domain?.message ||
								errors.email?.message
							}
							{...register('email.email')}
						/>
					)}

					<div className='flex justify-between items-center mt-4'>
						<Button className='flex items-center gap-2' type='submit'>
							<div>Войти</div>
							<ArrowRight className='w-4 h-4' />
						</Button>

						<div className='flex items-center space-x-2'>
							<Checkbox id='remember-check' checked />
							<label
								htmlFor='remember-check'
								className='text-sm font-medium cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
							>
								запомнить
							</label>
						</div>
					</div>
				</form>

				<Separator className='my-9' />

				<div className='flex items-center justify-between text-primary text-[14px] mb-3'>
					{/* TODO: МОЖЕТ ПОТОМ СДЕЛАТЬ */}
					<Link
						href='#'
						onClick={() => setIsLoginModalOpen(false)}
						className='hover:underline'
					>
						Восстановить доступ
					</Link>

					<Link
						href='/register'
						onClick={() => setIsLoginModalOpen(false)}
						className='hover:underline'
					>
						Создать аккаунт
					</Link>
				</div>
			</Modal>
		</div>
	);
};

export default LoginModal;
