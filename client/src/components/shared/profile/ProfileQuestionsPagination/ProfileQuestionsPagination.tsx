import { useParams, usePathname, useRouter } from 'next/navigation';
import { useProfileStore } from '@/store/use-profile-store';
import ReactPaginate from 'react-paginate';

interface IProfileQuestionsPaginationProps {
	isAnswers?: boolean;
}

const ProfileQuestionsPagination: React.FC<
	IProfileQuestionsPaginationProps
> = ({ isAnswers }) => {
	const { id, category, pageNumber } = useParams();
	const { profileQuestions, profileAnswers } = useProfileStore();
	const { push } = useRouter();
	const pathname = usePathname();

	const BASE_URL = isAnswers
		? `/profile/${id}/answers/${category}`
		: `/profile/${id}/questions/${category}`;
	const PER_PAGE = 20;
	const TOTAL_PAGES = pathname.includes('/questions')
		? category === 'resolve'
			? profileQuestions?.resolveQuestionsLength
			: profileQuestions?.questionsLength
		: category === 'resolve'
		? profileAnswers?.bestAnswersLength
		: profileAnswers?.answersLength;
	const formattedPageNumber = Number(pageNumber) || 1;

	return (
		<div>
			<ReactPaginate
				pageCount={Math.floor((TOTAL_PAGES as number) / PER_PAGE)}
				breakLabel='...'
				nextLabel={'>'}
				previousLabel={'<'}
				renderOnZeroPageCount={null}
				className='flex gap-2 mt-6 mb-10 items-center'
				previousClassName='p-1 text-[20px] font-bold'
				nextClassName='p-1 text-[20px] font-bold'
				pageClassName='w-10 h-10 text-center leading-[38px]'
				pageLinkClassName='block w-10 h-10 text-center leading-[38px]'
				activeClassName='border border-blue-300'
				onPageChange={selected => {
					const page = selected.selected + 1;
					push(`${BASE_URL}/${page}`);
				}}
				forcePage={formattedPageNumber - 1}
			/>
		</div>
	);
};

export default ProfileQuestionsPagination;

// TODO: ЩАС ИСПРАВИТЬ БАГ ПРИ СМЕНЕ СТРАНИЦЫ
