'use client';

import { questionsService } from '@/services/questions.service';
import { useUserStore } from '@/store/use-user-store';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import Question from '@/components/shared/question/Question';

const QuestionPage = () => {
	const { id } = useParams();
	const { isLoading } = useUserStore();

	const { data, isPending } = useQuery({
		queryKey: ['get-one-question', id],
		queryFn: () => questionsService.getOne(id as string),
	});
	// console.log('DATA  ', data);

	return (
		<div className='flex'>
			<div className='max-w-[280px] w-full p-4'>
				<div>
					<a href='/smstop'>Вопросы-лидеры</a>
				</div>
			</div>

			
				{isPending || isLoading ? (
					<div className='bg-white p-10 w-full'>loading...</div>
				) : (
					<Question data={data} />
				)}
		</div>
	);
};

export default QuestionPage;
