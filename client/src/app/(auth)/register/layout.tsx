import { Metadata } from 'next';
import React, { PropsWithChildren } from 'react';

export const metadata: Metadata = {
	title: 'Регистрация',
};

const RegisterLayout = ({ children }: PropsWithChildren) => {
	return <>{children}</>;
};

export default RegisterLayout;
