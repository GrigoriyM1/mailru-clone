import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Modal from '@/components/ui/modal';
import { Textarea } from '@/components/ui/textarea';
import { editProfileSchema } from '@/schemas/edit-profile.schema';
import { userService } from '@/services/user.service';
import { useModalsStore } from '@/store/use-modals-store';
import { useUserStore } from '@/store/use-user-store';
import { IEditProfileForm } from '@/types/auth.types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { X } from 'lucide-react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

const EditProfileModal = () => {
	const { user, mutate: userMutate } = useUserStore();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IEditProfileForm>({
		defaultValues: {
			description: user?.description || '',
		},
		resolver: zodResolver(editProfileSchema),
		mode: 'onChange',
	});
	const { isEditProfileModalOpen, setIsEditProfileModalOpen } =
		useModalsStore();

	const queryClient = useQueryClient();

	const editProfileMutation = useMutation({
		mutationKey: ['edit-profile'],
		mutationFn: (data: IEditProfileForm) => userService.editProfile(data),
		onSuccess: data => {
			// console.log('data ', data);
			userMutate?.();
			queryClient.invalidateQueries({ queryKey: ['get-user-by-id', data.id] });
			onClose();
		},
	});

	const onClose = () => {
		setIsEditProfileModalOpen(false);
	};

	const onSubmit = (data: IEditProfileForm) => {
		console.log('data ', data);
		editProfileMutation.mutate(data);
	};

	return (
		<Modal
			isOpen={isEditProfileModalOpen}
			onClose={onClose}
			className='w-[420px]'
		>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='flex justify-between mb-7'>
					<p className='text-[24px]'>Редактировать профиль</p>
					<X onClick={onClose} className='cursor-pointer' />
				</div>

				<div className='mb-5'>
					<Input
						label='Имя'
						id='profile-edit-name'
						labelProps={{
							className: 'text-[15px] font-bold text-black',
						}}
						disabled
						size='md'
						defaultValue={user?.name + ' ' + user?.lastName}
					/>
					<div className='text-[14px] text-gray-400'>
						Вы можете изменить имя в{' '}
						<Link href='/profile' className='text-primary'>
							общих настройках Mail
						</Link>
					</div>
				</div>

				<Textarea
					maxLength={250}
					label='В чем вы лучше всего разбираетесь?'
					id='profile-edit-description'
					{...register('description')}
					error={!!errors.description}
					helperText={errors.description?.message}
					divProps={{
						className: 'mb-8',
					}}
				/>

				<div className='flex gap-2'>
					<Button size='lg' type='submit'>
						Сохранить профиль
					</Button>
					<Button variant='ghost' onClick={onClose} size='lg'>
						Отмена
					</Button>
				</div>
			</form>
		</Modal>
	);
};

export default EditProfileModal;
