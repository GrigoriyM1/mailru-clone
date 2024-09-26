import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
	Triangle as TriangleIcon,
	Copy as CopyIcon,
	User as UserIcon,
	LockKeyhole as LockKeyholeIcon,
	LogOut as LogOutIcon,
} from 'lucide-react';
import { useState } from 'react';
import cn from 'clsx';
import Dropdown from '@/components/ui/dropdown';
import MenuItem from '@/components/ui/menu-item';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import { useMutation } from '@tanstack/react-query';
import { authService } from '@/services/auth.service';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/store/use-user-store';

const HeaderAuth = () => {
	const { isLoading, user, setUser, setIsAuth } = useUserStore();

	const [isProfileOpen, setIsProfileOpen] = useState(false);

	const { push } = useRouter();

	const { mutate } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess() {
			push('/register');
			toast.success('Вы успешно вышли из аккаунта');
		},
		onError(error) {
			toast.error('Произошла ошибка, попробуйте снова...');
			console.log('ERROR ', error);
		},
	});

	const handleLogoutClick = () => {
		mutate();
	};

	return (
		<div>
			<Button
				size='sm'
				className='p-[6px] text-black flex items-center gap-2'
				variant='outline'
				onClick={() => setIsProfileOpen(prev => !prev)}
				id='open-auth-dropdown'
			>
				<Avatar size='sm'>
					<AvatarImage src={user?.avatar} alt={user?.name} />
					<AvatarFallback>{user?.name[0]}</AvatarFallback>
				</Avatar>

				<span>{user?.email}</span>

				<TriangleIcon
					className={cn(
						'w-[7px] h-[7px] mt-[2px] transition',
						!isProfileOpen && 'rotate-180'
					)}
					color='black'
					fill='black'
				/>
			</Button>

			<Dropdown
				className='absolute w-[380px] bg-white shadow right-3 top-10 rounded-[20px] p-5'
				isOpen={isProfileOpen}
				setIsOpen={setIsProfileOpen}
				handleBtnId='#open-auth-dropdown'
			>
				<div className='flex justify-between items-end mb-7'>
					<div className='flex gap-3'>
						<Avatar size='normal'>
							<AvatarImage src={user?.avatar} alt={user?.name} />
							<AvatarFallback>{user?.name[0]}</AvatarFallback>
						</Avatar>

						<div>
							<div className='text-[15px]'>
								{user?.name} {user?.lastName}
							</div>
							<div className='text-[13px] font-light'>{user?.email}</div>
						</div>
					</div>

					<div>
						<CopyIcon
							className='w-4 h-4 text-slate-400 hover:text-black transition cursor-pointer'
							onClick={() =>
								navigator.clipboard.writeText(user?.email as string)
							}
						/>
					</div>
				</div>

				<div>
					<MenuItem href='#' icon={UserIcon}>
						Личные Данные
					</MenuItem>
					<MenuItem href='#' icon={LockKeyholeIcon}>
						Пароль и безопасность
					</MenuItem>
					<MenuItem
						component='button'
						icon={LogOutIcon}
						onClick={handleLogoutClick}
					>
						Выйти
					</MenuItem>
				</div>

				<Separator className='mt-7 mb-3' />

				<MenuItem component='button'>
					<div className='rounded-[50%] bg-gray-100 w-[44px] h-[44px] text-center text-[35px] leading-[40px]'>
						+
					</div>
					Добавить аккаунт
				</MenuItem>
			</Dropdown>
		</div>
	);
};

export default HeaderAuth;
