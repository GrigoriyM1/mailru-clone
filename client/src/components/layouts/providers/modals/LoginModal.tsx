import EmailInput from '@/components/ui/email-input';
import Modal from '@/components/ui/modal';
import { DEFAULT_EMAIL_DOMAIN } from '@/constants/auth.constants';
import { useModalsStore } from '@/store/use-modals-store';
import { loginSchemaEmail, loginSchemaPassword } from '@/schemas/login.schema';
import { ILoginData, ILoginForm } from '@/types/auth.types';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight, X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { combineEmailDomain } from '@/lib/combine-email-domain';
import { useMutation } from '@tanstack/react-query';
import { authService } from '@/services/auth.service';
import { IError } from '@/types/error.types';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { userService } from '@/services/user.service';
import { useUserStore } from '@/store/use-user-store';

const LoginModal = () => {
	const [isPasswordInput, setIsPasswordInput] = useState(false);
	const {
		register,
		control,
		handleSubmit,
		getValues,
		setError,
		reset,
		formState: { errors },
	} = useForm<ILoginForm>({
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
	const [email, setEmail] = useState('');
	const { push } = useRouter();
	const { isAuth } = useUserStore();

	const loginMutation = useMutation({
		mutationFn: (data: ILoginData) => authService.login(data),
		onSuccess: data => {
			push('/');
			toast.success('Вы успешно вошли в аккаунт');
			setIsLoginModalOpen(false);
			setIsPasswordInput(false);
			setEmail('');
			reset();
		},
		onError: (error: IError) => {
			const passwordError = error?.response?.data?.message;
			if (passwordError) {
				setError('password', { message: passwordError });
			} else {
				console.log('Login error  ', error);
				toast.error('Что-то пошло не так, попробуйте позже');
			}
		},
	});

	const getByEmailMutation = useMutation({
		mutationFn: (email: string) => userService.getByEmail(email),
		onSuccess: data => {
			if (!data) {
				setError('email', {
					message: 'Пользователь с таким email не найден',
				});
			} else {
				setIsPasswordInput(true);
			}
		},
		onError: (error: IError) => {
			console.log('getByEmailMutation err  ', error);
			toast.error('Что-то пошло не так, попробуйте позже');
		},
	});

	const onSubmit = (data: ILoginForm) => {
		if (!isPasswordInput) {
			const formattedEmail = combineEmailDomain(
				data.email.email,
				data.email.domain
			);

			setEmail(formattedEmail);

			getByEmailMutation.mutate(formattedEmail);
			return;
		}

		const obj = {
			...data,
			email,
		};

		loginMutation.mutate(obj);
	};

	const onClose = () => {
		setIsLoginModalOpen(false);
		setIsPasswordInput(false);
		setEmail('');
		reset();
	};

	return (
		!isAuth && (
			<div>
				<Modal
					isOpen={isLoginModalOpen}
					onClose={onClose}
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
									<div
										className='hover:underline cursor-pointer'
										onClick={() => setIsPasswordInput(false)}
									>
										{combineEmailDomain(
											getValues('email.email'),
											getValues('email.domain')
										)}
									</div>
									<div
										className='text-primary hover:underline cursor-pointer'
										onClick={() => setIsPasswordInput(false)}
									>
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
							<Button
								className='flex items-center gap-2'
								type='submit'
								isLoading={
									loginMutation.isPending || getByEmailMutation.isPending
								}
							>
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
		)
	);
};

export default LoginModal;
