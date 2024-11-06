import { useQuery } from '@tanstack/react-query';
import Question from './Question';
import { questionsService } from '@/services/questions.service';
import QuestionSkeleton from './QuestionSkeleton';
import { useEffect, useState } from 'react';
import { MoveDown } from 'lucide-react';
import { Spinner } from '@/components/ui/spinner';
import { IQuestion } from '@/types/questions.types'; // Adjust the import path as necessary
import { useParams, usePathname } from 'next/navigation';
import NewQuestions from './NewQuestions';
import cn from 'clsx';

const Questions = () => {
	const pathname = usePathname();
	const { category } = useParams();

	const [skip, setSkip] = useState(0);
	const take = 20;

	const {
		data = [],
		isPending,
		refetch,
	} = useQuery({
		queryKey: ['questions', category, skip],
		queryFn: () => {
			console.log('FETCHING');

			return category === 'smstop'
				? questionsService.getLeaders({})
				: questionsService.getAll(category as string | undefined, skip, take);
		},
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
			setQuestions([...settedQuestionsData, ...questions]);
			setIsShowMoreLoading(false);
			console.log('SETQUESTIONS 1');
		}
		console.log('SETQUESTIONS 2');
	}, [data]);

	useEffect(() => {
		if (!questions.length) return;

		setIsShowMoreLoading(isPending);
	}, [isPending]);

	useEffect(() => {
		refetch();
	}, []);

	return (
		<div>
			{(pathname === '/' || pathname === '/category/open') && <NewQuestions />}

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
							className={cn(
								'w-full flex items-center justify-center gap-2 text-[17px] p-6 hover:cursor-pointer hover:underline',
								isShowMoreLoading && 'disabled'
							)}
							onClick={handleShowMore}
							disabled={isPending}
						>
							{isShowMoreLoading ? (
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
