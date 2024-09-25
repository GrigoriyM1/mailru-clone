import EmailInput from '@/components/ui/email-input';
import Modal from '@/components/ui/modal';
import { DEFAULT_EMAIL_DOMAIN } from '@/constants/auth.constants';
import { useModalsStore } from '@/store/use-modals-store';
import { loginSchema } from '@/schemas/login.schema';
import { ILoginData } from '@/types/auth.types';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight, X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const LoginModal = () => {
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
		resolver: zodResolver(loginSchema),
		mode: 'onChange',
	});
	const { isLoginModalOpen, setIsLoginModalOpen } = useModalsStore();
	const [isPasswordInput, setIsPasswordInput] = useState(false);

	const onSubmit = (data: ILoginData) => {
		console.log('submit  ', data, errors);
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

				<form onSubmit={handleSubmit(onSubmit)}>
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
					<Button className='flex items-center gap-2 mt-4' type='submit'>
						<div>Войти</div>
						<ArrowRight className='w-4 h-4' />
					</Button>
				</form>
			</Modal>
		</div>
	);
};

export default LoginModal;
