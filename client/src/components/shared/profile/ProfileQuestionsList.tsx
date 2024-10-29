import ProfileQuestionsListLoading from './ProfileQuestionsListLoading';
import { formatCreatedAt } from '@/lib/format-created-at';
import Link from 'next/link';
import { MessageCircleMore } from 'lucide-react';
import { useProfileStore } from '@/store/use-profile-store';
import ProfileQuestionsPagination from './ProfileQuestionsPagination/ProfileQuestionsPagination';

interface IProfileQuestionsListProps {
	isAnswers?: boolean;
}

const ProfileQuestionsList: React.FC<IProfileQuestionsListProps> = ({
	isAnswers,
}) => {
	const { profileQuestions, isProfileQuestionsLoading } = useProfileStore();

	return isProfileQuestionsLoading ? (
		<ProfileQuestionsListLoading />
	) : (
		<div>
			{profileQuestions?.questions?.map(question => (
				<div
					key={question.id}
					className='py-5 border-t border-gray-200 border-solid border-b'
				>
					<Link
						href={`/question/${question.id}`}
						className='block w-full hover:underline'
					>
						{question.themeText}
					</Link>
					<div className='flex text-gray-500'>
						<Link
							href={`/${question.subcategory || question.category}`}
							className='mr-2 hover:underline'
						>
							{question.subcategory || question.category},{' '}
						</Link>
						<div className='mr-4'>{formatCreatedAt(question.createdAt)}</div>

						<Link
							href={`/question/${question.id}`}
							className='flex gap-2 hover:underline'
						>
							<MessageCircleMore className='w-5 h-5' />
							{question?.answers?.length} ответов
						</Link>
					</div>
				</div>
			))}

			<ProfileQuestionsPagination isAnswers={isAnswers} />
		</div>
	);
};

export default ProfileQuestionsList;
