'use client';

import Questions from '@/components/shared/main/Questions';
import QuestionLeadersSidebar from '@/components/shared/QuestionLeaders/QuestionLeadersSidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const MainPage = () => {
	const { push } = useRouter();

	return (
		<div className='flex'>
			<div className='max-w-[280px] w-full p-4'>
				<QuestionLeadersSidebar />
			</div>

			<div className='bg-white w-full'>
				<div className='p-10 pb-0'>
					<h1 className='mb-7 text-[25px]'>Вопросы участников</h1>

					<div className='flex mb-7'>
						<Input
							placeholder='Задайте свой вопрос здесь'
							size='lg'
							className='border-primary'
						/>
						<Button className='h-[48px]' onClick={() => push('/ask')}>
							Задать вопрос
						</Button>
					</div>

					<div className='flex items-center'>
						<Link
							href='/open'
							className='block text-bold transition bg-gray-200 cursor-pointer p-3 rounded-md'
						>
							Открытые
						</Link>
						<Link
							href='/best'
							className='block text-bold transition hover:bg-gray-200 cursor-pointer p-3 rounded-md'
						>
							Лучшие
						</Link>
					</div>
				</div>

				<Questions />
			</div>
		</div>
	);
};

export default MainPage;
