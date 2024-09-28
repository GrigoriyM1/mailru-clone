import { useUserStore } from '@/store/use-user-store';
import HeaderNotAuth from './HeaderNotAuth';
import HeaderAuth from './HeaderAuth';
import { Skeleton } from '@/components/ui/skeleton';

const HeaderTop = () => {
	const { isAuth, isLoading } = useUserStore();

	return (
		<div className='py-1 px-4 flex items-center justify-end h-[35px]'>
			{isAuth ? (
				<HeaderAuth />
			) : isLoading ? (
				<Skeleton className='w-[160px] h-[30px] rounded-full' />
			) : (
				<HeaderNotAuth />
			)}
		</div>
	);
};

export default HeaderTop;
