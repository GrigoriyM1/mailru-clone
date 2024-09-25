import { useModalsStore } from "@/store/use-modals-store";
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const HeaderNotAuth = () => {
  const { setIsLoginModalOpen } = useModalsStore();
  return (
		<>
			<Button size='sm' variant='outline' asChild>
				<Link href='/register'>Регистрация</Link>
			</Button>
			<Button size='sm' onClick={() => setIsLoginModalOpen(true)}>
				Войти
			</Button>
		</>
	);
};

export default HeaderNotAuth;
