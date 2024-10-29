import { useUserStore } from '@/store/use-user-store';
import { useRef } from 'react';
import Avatar from '@/components/modules/Avatar';
import { Button } from '@/components/ui/button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { userService } from '@/services/user.service';

const EditProfileFileUpload = () => {
	const { user, mutate: userMutate } = useUserStore();
	const imageInputRef = useRef<HTMLInputElement>(null);

	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationKey: ['profile-upload-file-avatar'],
		mutationFn: (formData: FormData) => userService.editProfileAvatar(formData),
		onSuccess: data => {
			console.log(data);
			if (data) {
				userMutate?.();
			}
		},
	});

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		const formData = new FormData();
		if (file) {
			formData.append('file', file);
			mutation.mutate(formData);
		}
	};

	return (
		<div className='flex flex-col items-center'>
			<Avatar
				user={user!}
				size='normal'
				isLink={false}
				className='min-w-[160px] min-h-[160px] text-[40px]'
			/>
			<Button
				variant='ghost'
				className='mt-4'
				size='lg'
				type='button'
				onClick={() => {
					imageInputRef.current?.click?.();
				}}
				disabled={mutation.isPending} // Отключаем кнопку во время загрузки
			>
				{mutation.isPending ? 'Загрузка...' : 'Изменить фото'}
			</Button>
			<input
				type='file'
				hidden
				ref={imageInputRef}
				onChange={handleFileChange}
			/>
			{mutation.isError && (
				<p className='text-red-500'>Ошибка при загрузке изображения</p>
			)}
		</div>
	);
};

export default EditProfileFileUpload;
