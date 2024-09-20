'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
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
import { Separator } from "@/components/ui/separator"

const HeaderTop = () => {
	const isAuth = false;
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='py-1 px-4 flex items-center justify-end h-[35px]'>
			{isAuth ? (
				<div>
					<Button
						size='sm'
						className='p-[6px] text-black flex items-center gap-2'
						variant='outline'
						onClick={() => setIsOpen(prev => !prev)}
						id='open-auth-dropdown'
					>
						<Avatar size='sm'>
							<AvatarImage src='https://github.com/shadcn.png' alt='Avatar' />
							<AvatarFallback>A</AvatarFallback>
						</Avatar>

						<span>otpravka92@mail.ru</span>

						<TriangleIcon
							className={`w-[7px] h-[7px] ${
								isOpen ? '' : 'rotate-180'
							} mt-[2px] transition`}
							color='black'
							fill='black'
						/>
					</Button>

					<Dropdown
						className='absolute w-[380px] bg-white shadow right-3 top-10 rounded-[20px] p-5'
						isOpen={isOpen}
						setIsOpen={setIsOpen}
						handleBtnId='#open-auth-dropdown'
					>
						<div className='flex justify-between items-end mb-7'>
							<div className='flex gap-3'>
								<Avatar size='normal'>
									<AvatarImage
										src='https://github.com/shadcn.png'
										alt='Avatar'
									/>
									<AvatarFallback>A</AvatarFallback>
								</Avatar>

								<div>
									<div className='text-[15px]'>Отправка почты</div>
									<div className='text-[13px] font-light'>
										otpravka92@mail.ru
									</div>
								</div>
							</div>

							<div>
								<CopyIcon className='w-4 h-4 text-slate-400 hover:text-black transition cursor-pointer' />
							</div>
						</div>

						<div>
							<MenuItem href='#' icon={UserIcon}>
								Личные Данные
							</MenuItem>
							<MenuItem href='#' icon={LockKeyholeIcon}>
								Пароль и безопасность
							</MenuItem>
							<MenuItem component='button' icon={LogOutIcon}>
								Выйти 
							</MenuItem>
						</div>

						<Separator className='mt-7 mb-3' />

						<MenuItem component='button'>
							<div className='rounded-[50%] bg-gray-100 w-[44px] h-[44px] text-center text-[35px] leading-[40px]'>+</div>
							Добавить аккаунт
						</MenuItem>
					</Dropdown>
				</div>
			) : (
				<>
					<Button size='sm' variant='outline' asChild>
						<Link href='/register'>Регистрация</Link>
					</Button>
					<Button size='sm'>Войти</Button>
				</>
			)}
		</div>
	);
};

export default HeaderTop;
