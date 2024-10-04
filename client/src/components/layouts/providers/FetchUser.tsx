import { authService } from '@/services/auth.service';
import { useUserStore } from '@/store/use-user-store';
import { useMutation } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const FetchUser = ({ children }: React.PropsWithChildren) => {
	const { setIsAuth, setUser, setIsLoading } = useUserStore();
	const pathname = usePathname();

	const { mutate } = useMutation({
		mutationKey: ['verify-auth'],
		mutationFn: () => authService.getNewTokens(),
		onSuccess(data) {
			setIsAuth(true);
			setUser(data.data.user);
			// console.log('DATA USER  ', data.data.user);
		},
		onError(error) {
			setIsAuth(false);
			setUser(null);
			// console.log('ERROR ', error);
		},
		onMutate() {
			setIsLoading(true);
		},
		onSettled() {
			setIsLoading(false);
		},
	});

	useEffect(() => {
		mutate();
	}, [pathname]);

	return <>{children}</>;
};

export default FetchUser;
