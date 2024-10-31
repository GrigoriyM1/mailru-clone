import { questionsService } from '@/services/questions.service';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams, useSearchParams, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Spinner } from '@/components/ui/spinner';
import { MoveDown } from 'lucide-react';
import Question from '../main/Question';
import { IQuestion } from '@/types/questions.types';
import QuestionSkeleton from '../main/QuestionSkeleton';
import { useSearchStore } from '@/store/use-search-store';

const SearchQuestions = () => {
	const { searchText } = useParams();
	const searchParams = useSearchParams();
	const { isCategoriesPending } = useSearchStore();
	const pathname = usePathname();

	const [skip, setSkip] = useState(0);
	const take = 20;
	const [questions, setQuestions] = useState<IQuestion[]>([]);
	const [isShowMoreLoading, setIsShowMoreLoading] = useState(false);

	const queryClient = useQueryClient()

	const { data, isPending, refetch } = useQuery({
		queryKey: [
			'search-questions',
			searchText,
			searchParams.get('category'),
			searchParams.get('subcategory'),
			searchParams.get('time'),
			searchParams.get('type'),
			searchParams.get('order'),
			skip,
		],
		queryFn: () =>
			questionsService.search(
				searchText as string,
				searchParams.get('category')!,
				searchParams.get('subcategory')!,
				searchParams.get('time')!,
				searchParams.get('type')!,
				searchParams.get('order')!,
				skip
			),
	});

	// todo: ЩАС ФИКСИТЬ БАГ С ФИЛЬТРАМИ

	const handleShowMore = () => {
		setSkip(prevSkip => prevSkip + take);
		setIsShowMoreLoading(true);
	};

	useEffect(() => {
		// Проверяем, что в новых данных есть вопросы и что они не дублируются
		if (data?.data?.length && data?.data?.length > 0) {
			const settedQuestionsData = data?.data
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

	useEffect(() => {
		// console.log('NO IF ', data?.data, data, isPending);
		// if (data?.data) {
		// 	// console.log('SET QUERIONS ', data?.data, data);
		// 	setQuestions(data?.data);
		// }
		refetch();
		console.log('CHANGE URL');
	}, [pathname, searchParams]);

	useEffect(() => {
		console.log('REFETCH');
	}, [refetch]);

	return (
		<div className='bg-white p-4 w-full mb-4 mt-4'>
			{(isCategoriesPending || isPending) && !isShowMoreLoading ? (
				<QuestionSkeleton />
			) : (
				<div>
					<div className='flex justify-between items-center pb-5 border-b border-gray-200'>
						<div className='text-[24px]'>{data?.matchesLength} совпадений</div>

						<div className='flex gap-4'>
							<div className='cursor-pointer hover:underline font-bold'>
								По релевантности
							</div>
							<div className='cursor-pointer hover:underline text-primary'>
								По дате
							</div>
						</div>
					</div>

					<div>
						{questions?.map(question => (
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
								// isCategory={
								// 	category === 'open' || category === 'best' || !category
								// }
								likes={question.likes}
							/>
						))}

						{/* TODO: В QUESTION переставить */}

						{(data?.data?.length === take || isShowMoreLoading) && (
							<button
								className='w-full flex items-center justify-center gap-2 text-[17px] p-6 hover:cursor-pointer hover:underline'
								onClick={handleShowMore}
								disabled={isShowMoreLoading}
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
				</div>
			)}
		</div>
	);
};

export default SearchQuestions;
