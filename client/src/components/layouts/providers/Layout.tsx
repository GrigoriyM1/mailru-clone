import { PropsWithChildren } from 'react';
import Header from '../../shared/header/Header';
import { useUserStore } from '../../../store/use-user-store';

const Layout = ({ children }: PropsWithChildren) => {
	const { user } = useUserStore();

	return (
		<>
			<Header />
			<main className='max-w-[1300px] mx-auto px-3'>{children}</main>
		</>
	);
};

export default Layout;
