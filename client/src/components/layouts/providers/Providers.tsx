'use client';

import { PropsWithChildren, useState } from 'react';
import { Toaster } from 'sonner';
import Layout from './Layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const Providers = ({ children }: PropsWithChildren) => {
	const [client] = useState(
		new QueryClient({
			defaultOptions: { queries: { refetchOnWindowFocus: false } },
		})
	);

	return (
		<QueryClientProvider client={client}>
			<Toaster position='bottom-left' theme='dark' />

			<Layout>{children}</Layout>
		</QueryClientProvider>
	);
};

export default Providers;
