import { Container } from '@mui/material';
import { PropsWithChildren } from 'react';
import Header from '../../shared/header/Header';

const Layout = ({ children }: PropsWithChildren) => {
	return (
		<>
			<Header />
			<main className='max-w-[1300px] mx-auto px-3'>{children}</main>
		</>
	);
};

export default Layout;
