import { useUserStore } from '@/store/use-user-store';
import HeaderNotAuth from './HeaderNotAuth';
import HeaderAuth from './HeaderAuth';

const HeaderTop = () => {
	const { isAuth } = useUserStore();

	return (
		<div className='py-1 px-4 flex items-center justify-end h-[35px]'>
			{isAuth ? (
				<HeaderAuth />
			) : (
				<HeaderNotAuth />
			)}
		</div>
	);
};

export default HeaderTop;
