import Avatar from '@/components/modules/Avatar';
import { Button } from '@/components/ui/button';
import { FormField } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import SelectBirthdate from '@/components/ui/select-birthdate/select-birthdate';
import { formatBirthdateString } from '@/lib/format-birthdate-string';
import { formatTextInput } from '@/lib/format-text-input';
import { editProfilePageSchema } from '@/schemas/edit-profile-page.schema';
import { userService } from '@/services/user.service';
import { useUserStore } from '@/store/use-user-store';
import { IEditProfilePageData, IEditProfilePageForm } from '@/types/auth.types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const EditProfile = () => {
	const { user, mutate: userMutate } = useUserStore();
	const {
		register,
		control,
		setValue,
		handleSubmit,
		formState: { errors },
	} = useForm<IEditProfilePageForm>({
		defaultValues: {
			name: user?.name,
			lastName: user?.lastName,
			birthdate: {
				day: formatBirthdateString(user?.birthdate!).day,
				month: formatBirthdateString(user?.birthdate!).month,
				year: formatBirthdateString(user?.birthdate!).year,
			},
			gender: user?.gender,
		},
		mode: 'onChange',
		resolver: zodResolver(editProfilePageSchema),
	});

	console.log('USER  ', user?.birthdate);

	const queryClient = useQueryClient();

	const editProfilePageMutation = useMutation({
		mutationKey: ['edit-profile-page'],
		mutationFn: (data: IEditProfilePageData) =>
			userService.editProfilePage(data),
		onSuccess() {
			toast.success('Профиль успешно обновлен');
			// queryClient.invalidateQueries({ queryKey: ['verify-auth'] });
			userMutate?.();
			queryClient.invalidateQueries({ queryKey: ['get-user-by-id', user?.id] });
		},
	});

	const onSubmit = (data: IEditProfilePageForm) => {
		editProfilePageMutation.mutate({
			...data,
			birthdate: `${data.birthdate.day}.${data.birthdate.month}.${data.birthdate.year}`,
		});
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='flex gap-20'>
			<div className='flex flex-col items-center'>
				<Avatar
					user={user!}
					size='normal'
					isLink={false}
					className='min-w-[160px] min-h-[160px] text-[40px]'
				/>

				<Button variant='ghost' className='mt-4' size='lg'>
					Изменить фото
				</Button>
			</div>

			<div className='w-[500px]'>
				<Input
					label='Имя'
					id='profile-name'
					error={!!errors?.name}
					helperText={errors?.name?.message}
					{...register('name')}
					onChange={e => {
						formatTextInput(e);
						register('name').onChange(e);
					}}
					labelProps={{
						className: 'mb-1',
					}}
					divProps={{
						className: 'mb-5',
					}}
					size='md'
				/>

				<Input
					label='Фамилия'
					id='profile-lastName'
					error={!!errors?.lastName}
					helperText={errors?.lastName?.message}
					{...register('lastName')}
					onChange={e => {
						formatTextInput(e);
						register('lastName').onChange(e);
					}}
					divProps={{
						className: 'mb-5',
					}}
					labelProps={{
						className: 'mb-1',
					}}
					size='md'
				/>

				<div>
					<Label
						variant={!!errors?.birthdate ? 'error' : 'light'}
						className='mb-1'
					>
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

				<div className='mt-5'>
					<Label className='mb-2'>Пол</Label>
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
				</div>

				<Button
					type='submit'
					className='mt-8'
					disabled={editProfilePageMutation.isPending}
				>
					Сохранить
				</Button>
			</div>
		</form>
	);
};

export default EditProfile;
