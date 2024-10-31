import { useQuery, useQueryClient } from '@tanstack/react-query';
import Question from './Question';
import { questionsService } from '@/services/questions.service';
import QuestionSkeleton from './QuestionSkeleton';
import { useEffect, useState } from 'react';
import { MoveDown } from 'lucide-react';
import { Spinner } from '@/components/ui/spinner';
import { IQuestion } from '@/types/questions.types'; // Adjust the import path as necessary
import { useParams } from 'next/navigation';

const Questions = () => {
	const { category } = useParams();

	const [skip, setSkip] = useState(0);
	const take = 20;

	// const queryClient = useQueryClient();

	const { data = [], isPending } = useQuery({
		queryKey: ['questions', category, skip],
		queryFn: () =>
			category === 'smstop'
				? questionsService.getLeaders({})
				: questionsService.getAll(category as string | undefined, skip, take),
		refetchOnWindowFocus: true,
	});
	const [questions, setQuestions] = useState<IQuestion[]>([]);
	const [isShowMoreLoading, setIsShowMoreLoading] = useState(false);

	const handleShowMore = () => {
		setSkip(prevSkip => prevSkip + take);
		setIsShowMoreLoading(true);
	};

	useEffect(() => {
		// Проверяем, что в новых данных есть вопросы и что они не дублируются
		if (data.length > 0) {
			const settedQuestionsData = data
				.map(item => {
					if (questions.find(i => i.id === item.id)) {
						return;
					}
					return item;
				})
				.filter(item => item !== undefined);
			setQuestions([...questions, ...settedQuestionsData]);
		}
	}, [data]);

	useEffect(() => {
		if (!questions.length) return;

		setIsShowMoreLoading(isPending);
	}, [isPending]);

	return (
		<div>
			{isPending && !isShowMoreLoading ? (
				<QuestionSkeleton />
			) : (
				<div>
					{questions.map(question => (
						<Question
							key={question.id}
							id={question.id}
							category={question.subcategory}
							createdAt={question.createdAt}
							userAvatar={question.user.avatar}
							theme={question.themeText}
							userId={question.userId}
							userName={question.user.name}
							userLastName={question.user.lastName}
							repliesCount={question.answers.length}
							isCategory={
								category === 'open' || category === 'best' || !category
							}
							likes={question.likes}
						/>
					))}

					{(data.length === take || isPending) && (
						<button
							className='w-full flex items-center justify-center gap-2 text-[17px] p-6 hover:cursor-pointer hover:underline'
							onClick={handleShowMore}
							disabled={isPending}
						>
							{isPending ? (
								<>
									<Spinner size='small' /> Загружаем...
								</>
							) : (
								<>
									<MoveDown size={14} /> Показать еще{' '}
								</>
							)}
						</button>
					)}
				</div>
			)}
		</div>
	);
};

export default Questions;
