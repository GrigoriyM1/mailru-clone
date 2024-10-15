import Avatar from '@/components/modules/Avatar';
import { questionsService } from '@/services/questions.service';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import QuestionLeadersSidebarLoading from './QuestionLeadersSidebarLoading';

const QuestionLeadersSidebar = () => {
	const { data, isPending } = useQuery({
		queryKey: ['get-question-leaders-sidebar'],
		queryFn: () =>
			questionsService.getLeaders({
				take: 5,
			}),
	});

	console.log('data   ', data);

	return (
		<div>
			<Link href='/smstop' className='block w-full text-[20px] mb-3'>
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
								href={`question/${question.id}`}
								className='absolute top-0 left-0 w-full h-full'
							></Link>
							<Avatar user={question.user} />
							<div className='word-break text-[15px]'>{question.themeText}</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default QuestionLeadersSidebar;
