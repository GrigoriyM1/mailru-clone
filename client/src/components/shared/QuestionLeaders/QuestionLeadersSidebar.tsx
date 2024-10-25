'use client';

import Avatar from '@/components/modules/Avatar';
import { questionsService } from '@/services/questions.service';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import QuestionLeadersSidebarLoading from './QuestionLeadersSidebarLoading';
import { useParams } from 'next/navigation';
import { useQuestionStore } from '@/store/use-question-store';
import { useEffect } from 'react';

const QuestionLeadersSidebar = () => {
	const { category, id } = useParams();
	const { question } = useQuestionStore();

	const { data, isPending } = useQuery({
		queryKey: [
			'get-question-leaders-sidebar',
			category,
			question?.subcategory,
			id,
		],
		queryFn: () =>
			questionsService.getLeaders({
				take: 5,
				category:
					category === 'smstop' ||
					category === 'open' ||
					category === 'best' ||
					(!category && !id)
						? undefined
						: (category as string | undefined) || question?.category,
			}),
	});

	useEffect(() => {
		console.log('YES  ', category, id, question?.category);
		console.log('SECOND  ', data);
	}, [category, question?.category, id]);

	return (
		<div>
			<Link href='/category/smstop' className='block w-full text-[20px] mb-3'>
				Вопросы-лидеры
			</Link>

			{isPending ? (
				<QuestionLeadersSidebarLoading />
			) : (
				<div>
					{data?.map(question => (
						<div
							className='flex gap-3 w-full hover:bg-gray-300 transition cursor-pointer p-2 relative'
							key={question.id}
						>
							<Link
								href={`/question/${question.id}`}
								className='absolute top-0 left-0 w-full h-full'
							></Link>
							<Avatar user={question.user} />
							<div className='word-break text-[15px]'>{question.themeText}</div>
						</div>
					))}

					<Link
						className='text-blue-400 hover:underline w-full block mt-2 ml-14'
						href='/category/smstop'
					>
						Показать больше
					</Link>
				</div>

				// TODO: НИЖЕ СДЕЛАТЬ ЛИДЕРЫ ПРОЕКТА ПОТОМ
			)}
		</div>
	);
};

export default QuestionLeadersSidebar;
