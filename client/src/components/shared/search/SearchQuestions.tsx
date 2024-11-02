import { questionsService } from '@/services/questions.service';
import { useMutation } from '@tanstack/react-query';
import { useParams, useSearchParams, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Spinner } from '@/components/ui/spinner';
import { MoveDown } from 'lucide-react';
import Question from '../main/Question';
import { IQuestion } from '@/types/questions.types';
import SearchQuestionSkeleton from '../main/SearchQuestionSkeleton';
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

	const { data, isPending, mutate } = useMutation({
		mutationKey: ['search-questions', searchText],
		mutationFn: (type: 'default' | 'show-more' = 'default') =>
			questionsService.search(
				searchText as string,
				searchParams.get('category')!,
				searchParams.get('subcategory')!,
				searchParams.get('time')!,
				searchParams.get('type')!,
				searchParams.get('order')!,
				skip
			),
		onSuccess: (data, type) => {
			setIsShowMoreLoading(false);
			if (type === 'default') {
				setQuestions(data?.data);
			} else {
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
			}
		},
		onMutate: type => {
			if (type === 'show-more') {
				setIsShowMoreLoading(true);
			}
		},
	});

	// todo: ЩАС ФИКСИТЬ БАГ С ФИЛЬТРАМИ

	useEffect(() => {
		mutate('default');
		console.log('PATHNAME CHANGE');
	}, [pathname, searchParams]);

	const handleShowMore = () => {
		setSkip(prevSkip => prevSkip + take);
		setIsShowMoreLoading(true);
		mutate('show-more');
	};

	// TODO ПОФИКСИТЬ SKELETON
	console.log('LOADS ', isCategoriesPending, isPending, isShowMoreLoading);

	return (
		<div className='bg-white p-4 w-full mb-4 mt-4'>
			{(isCategoriesPending || isPending) && !isShowMoreLoading ? (
				<SearchQuestionSkeleton />
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
								isSearch={searchText as string}
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
