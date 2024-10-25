import { IAnswer } from '@/types/questions.types';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { formatCreatedAt } from '@/lib/format-created-at';
import { EllipsisVertical, Heart, MessageSquareMore, Star } from 'lucide-react';
import AnswerDropdown from './AnswerDropdown';
import { useQuestionStore } from '@/store/use-question-store';
import { useUserStore } from '@/store/use-user-store';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import cn from 'clsx';
import { answerService } from '@/services/answer.service';
import { toast } from 'sonner';
import { useState } from 'react';
import EditAnswer from './EditAnswer';
import Avatar from '@/components/modules/Avatar';
import Comments from './Comments';

interface IAnswerProps {
	isBestAnswerAllowed: boolean;
}

const Answer: React.FC<IAnswer & IAnswerProps> = props => {
	const { user: currentUser } = useUserStore();
	const { question } = useQuestionStore();

	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [isEdit, setIsEdit] = useState(false);
	const [isComment, setIsComment] = useState(false);

	const queryClient = useQueryClient();

	const isMyQuestion = currentUser?.id === question?.user.id;

	const likeMutation = useMutation({
		mutationKey: ['like-answer'],
		mutationFn: () => answerService.like(props.id),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: [`get-one-question`] });
		},
	});

	const bestAnswerMutation = useMutation({
		mutationKey: ['best-answer'],
		mutationFn: () => answerService.bestAnswer(props.id, question?.id!),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: [`get-one-question`] });
		},
	});

	const isLiked = props.likedBy.find(item => item.id === currentUser?.id);
	const handleLike = () => {
		if (isMyQuestion && isLiked) {
			console.log('NO');
			return toast.error('Вы уже поблагодарили автора за ответ');
		}
		likeMutation.mutate();
	};

	const handleComment = () => {
		setIsComment(!isComment);
		// console.log('isComment  ', isComment);

		// if (!isComment) {
		// }
	};

	const handleBestAnswer = () => {
		console.log('best answer');
		bestAnswerMutation.mutate();
	};

	return (
		<div className='px-10 py-6 flex justify-between'>
			<div className={cn('flex gap-4 w-full',
				props.isBestAnswer && 'border-l-4 border-solid border-green-600 pl-4'
			)}>
				<Avatar user={props.user} />

				{isEdit ? (
					<EditAnswer
						setIsEdit={setIsEdit}
						text={props.text}
						answerId={props.id}
					/>
				) : (
					<div className='w-full'>
						<div className='flex items-center'>
							<Link
								href={`/profile/${props.user?.id}`}
								className='text-[13px] font-semibold hover:underline'
							>
								{props.user?.name} {props.user?.lastName},
							</Link>
							<div className='ml-2 text-gray-400 text-[13px]'>
								{formatCreatedAt(props.createdAt!)}
							</div>
						</div>

						<div className='text-gray-400 text-[13px]'>Ученик</div>

						<pre
							className='my-3 text-[15px]'
							dangerouslySetInnerHTML={{ __html: props.text }}
						></pre>

						<div className='flex'>
							<Button
								variant='outline'
								className='flex items-center text-gray-500 gap-1'
								onClick={handleLike}
							>
								<Heart
									className={cn('min-w-4 min-h-4 max-w-4 max-h-4 text-black', {
										'fill-black': isLiked,
									})}
								/>
								<div className='ml-1'>{props.likes > 0 && props.likes}</div>
								Нравится
							</Button>
							<Button
								variant='outline'
								className='flex items-center text-gray-500 gap-1'
								onClick={handleComment}
							>
								<MessageSquareMore className='min-w-4 min-h-4 max-w-4 max-h-4 text-black' />
								{props.comments.length > 0
									? `${props.comments.length} Комментариев`
									: 'Комментировать'}
							</Button>
						</div>

						{isComment && (
							<>
								<Comments answer={props} />
							</>
						)}
					</div>
				)}
			</div>

			{isMyQuestion && props.isBestAnswerAllowed && (
				<Button variant='ghost' onClick={handleBestAnswer}>
					Лучший ответ
					<Star className='ml-1 w-4 h-4' />
				</Button>
			)}

			{!isEdit && (
				<div
					onClick={() => setIsDropdownOpen(!isDropdownOpen)}
					id={`question-dropdown-open-${props.id}`}
					className='relative'
				>
					<EllipsisVertical className='cursor-pointer' />
					<AnswerDropdown
						isOpen={isDropdownOpen}
						setIsOpen={setIsDropdownOpen}
						handleId={props.id}
						answerUser={props.user}
						isEdit={isEdit}
						setIsEdit={setIsEdit}
					/>
				</div>
			)}
		</div>
	);
};

export default Answer;
