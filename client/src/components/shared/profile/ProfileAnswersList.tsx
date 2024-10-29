import { useProfileStore } from '@/store/use-profile-store';
import ProfileQuestionsListLoading from './ProfileQuestionsListLoading';
import ProfileQuestionsPagination from './ProfileQuestionsPagination/ProfileQuestionsPagination';
import Avatar from '@/components/modules/Avatar';
import { MessageSquareMore } from 'lucide-react';
import Link from 'next/link';
import { formatCreatedAt } from '@/lib/format-created-at';
import { useParams } from 'next/navigation';
import cn from 'clsx';

interface IProfileAnswersListProps {
	isAnswers: boolean;
}
const ProfileAnswersList: React.FC<IProfileAnswersListProps> = ({
	isAnswers,
}) => {
	const { profileAnswers, isProfileAnswersLoading } = useProfileStore();
	const { category } = useParams();

	return isProfileAnswersLoading ? (
		<ProfileQuestionsListLoading />
	) : (
		<div>
			{profileAnswers?.answers?.map(answer => (
				<div
					key={answer.id}
					className='flex gap-5 py-5 border-t border-gray-200 border-solid border-b'
				>
					<div>
						<Avatar user={answer.user} className='w-[48px] h-[48px]' />
					</div>
					<div>
						<div className='mb-1 text-[17px]'>{answer.question.themeText}</div>
						<div className='flex mb-1 gap-1'>
							<MessageSquareMore
								className={cn(category === 'resolve' && 'text-orange-300')}
							/>
							<div>{answer.text}</div>
						</div>
						<div className='flex'>
							<div className='flex text-gray-400 text-[13px] mr-3'>
								<Link
									href={`/profile/${answer.userId}`}
									className='hover:underline'
								>
									{answer.user.name} {answer.user.lastName}
								</Link>
								,<div className='mx-1'>{formatCreatedAt(answer.createdAt)}</div>
								{answer.question.category && (
									<div>
										, в "
										<Link
											href={`/category/${
												answer.question.subcategory || answer.question.category
											}`}
											className='hover:underline'
										>
											{answer.question.subcategory || answer.question.category}
										</Link>
										"
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			))}

			<ProfileQuestionsPagination isAnswers={isAnswers} />
		</div>
	);
};

export default ProfileAnswersList;
