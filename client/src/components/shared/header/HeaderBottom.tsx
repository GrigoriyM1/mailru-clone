import Logo from '@/components/modules/Logo';
import { Bell, ChartNoAxesColumn, Plus, Rows4 } from 'lucide-react';
import Link from 'next/link';
import { useUserStore } from '@/store/use-user-store';
import HeaderSearch from './HeaderSearch';
import Avatar from '@/components/modules/Avatar';
import { IMinUser } from '@/types/auth.types';
import CategoriesDropdown from './CategoriesDropdown';
import { useState } from 'react';

const HeaderBottom = () => {
	const { user } = useUserStore();
	const [isCategoriesDropdownOpen, setIsCategoriesDropdownOpen] =
		useState(false);

	return (
		<div className='flex items-center px-7 justify-between gap-28'>
			<div className='py-3'>
				<Link href='/'>
					<Logo />
				</Link>
			</div>

			<div className='flex items-center gap-6 w-full justify-end'>
				<nav>
					<ul className='flex items-center'>
						<li
							className='flex gap-2 cursor-pointer hover:bg-slate-100 transition h-full px-3 py-[15px] relative'
							onClick={() => setIsCategoriesDropdownOpen(prev => !prev)}
						>
							{/* потом категории сделать */}
							<Rows4 className='text-primary' />
							Категории
							{<CategoriesDropdown isOpen={isCategoriesDropdownOpen} />}
						</li>

						<li>
							<Link
								href='/ask'
								className='flex gap-2 cursor-pointer hover:bg-slate-100 transition h-full px-3 py-[15px]'
							>
								{/* потом категории сделать */}
								<Plus className='text-primary' />
								Спросить
							</Link>
						</li>
						<li>
							<Link
								href='/ask'
								className='flex gap-2 cursor-pointer hover:bg-slate-100 transition h-full px-3 py-[15px]'
							>
								{/* потом категории сделать */}
								<ChartNoAxesColumn className='text-primary' />
								Лидеры
							</Link>
						</li>
					</ul>
				</nav>

				<HeaderSearch />

				<div className='flex items-center gap-2'>
					{/* TODO: ПОТОМ СДЕЛАТЬ PROFILE PAGE ЕЩЕ */}
					<Link
						href={`/profile/${user?.id}`}
						className='transition hover:bg-slate-100 py-[7px] px-2'
					>
						<Avatar user={user as IMinUser} isLink={false} />
					</Link>
					<div className='transition hover:bg-slate-100 py-[17px] px-2 cursor-pointer'>
						<Bell className='text-primary w-5 h-5' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderBottom;
