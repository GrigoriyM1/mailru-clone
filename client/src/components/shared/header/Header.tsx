import { useUserStore } from '@/store/use-user-store';
import HeaderBottom from './HeaderBottom';
import HeaderTop from './HeaderTop';

const Header = () => {
	const { isAuth } = useUserStore();

	return (
		<header className='bg-white shadow-bottom'>
			<HeaderTop />
			{isAuth && <HeaderBottom />}
		</header>
	);
};

export default Header;
