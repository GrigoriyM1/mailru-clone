import { authService } from '@/services/auth.service';
import { useUserStore } from '@/store/use-user-store';
import { useMutation } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const FetchUser = ({ children }: React.PropsWithChildren) => {
	const { setIsAuth, setUser, setIsLoading, setMutate } = useUserStore();
	const pathname = usePathname();

	const { mutate } = useMutation({
		mutationKey: ['verify-auth'],
		mutationFn: () => authService.getNewTokens(),
		onSuccess(data) {
			setIsAuth(true);
			setUser(data.data.user);
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
		setMutate(mutate);
	}, [pathname]);

	return <>{children}</>;
};

export default FetchUser;

// TODO: ТУТ ОСТАНОВИЛСЯ
