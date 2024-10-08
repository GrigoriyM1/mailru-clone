import Logo from '@/components/modules/Logo';
import { Bell, ChartNoAxesColumn, Plus, Rows4 } from 'lucide-react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useUserStore } from '@/store/use-user-store';
import HeaderSearch from './HeaderSearch';

const HeaderBottom = () => {
	const { user } = useUserStore();

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
						<li className='flex gap-2 cursor-pointer hover:bg-slate-100 transition h-full px-3 py-[15px]'>
							{/* потом категории сделать */}
							<Rows4 className='text-primary' />
							Категории
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
							<Link href='/ask' className='flex gap-2 cursor-pointer hover:bg-slate-100 transition h-full px-3 py-[15px]'>
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
						<Avatar>
							<AvatarImage src={user?.avatar} alt={user?.name} />
							<AvatarFallback>{user?.name[0]}</AvatarFallback>
						</Avatar>
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
