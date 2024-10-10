'use client';

import { questionsService } from '@/services/questions.service';
import { useUserStore } from '@/store/use-user-store';
import { useQuery } from '@tanstack/react-query';
import { useParams, usePathname } from 'next/navigation';
import Question from '@/components/shared/question/Question';
import { useEffect } from 'react';
import { useQuestionStore } from '@/store/use-question-store';

const QuestionPage = () => {
	const { id } = useParams();
	const { isLoading } = useUserStore();
	const { setQuestion } = useQuestionStore();
	const pathname = usePathname();

	const {
		data,
		isLoading: queryLoading,
		refetch,
	} = useQuery({
		queryKey: ['get-one-question'],
		queryFn: () => questionsService.getOne(id as string),
		// Убедитесь, что мы запрашиваем данные только если есть id
		enabled: !!id,
	});

	useEffect(() => {
		if (data) setQuestion(data);
	}, [data, setQuestion]);

	useEffect(() => {
		if (id) refetch();
	}, [id, pathname, refetch]);

	return (
		<div className='flex'>
			<div className='max-w-[280px] w-full p-4'>
				<div>
					<a href='/smstop'>Вопросы-лидеры</a>
				</div>
			</div>

			{queryLoading || isLoading || !data ? (
				<div className='bg-white p-10 w-full'>loading...</div>
			) : (
				<Question />
			)}
		</div>
	);
};

export default QuestionPage;
