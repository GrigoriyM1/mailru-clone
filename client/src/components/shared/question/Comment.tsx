import Avatar from '@/components/modules/Avatar';
import { formatCreatedAt } from '@/lib/format-created-at';
import { Button } from '@/components/ui/button';
import { MessageSquareMore } from 'lucide-react';
import Link from 'next/link';
import { IComment } from '@/types/questions.types';

interface ICommentProps {
	comment: IComment;
}

const Comment: React.FC<ICommentProps> = ({ comment }) => {
	return (
		<div className='flex gap-3 p-4 bg-gray-100 mb-3'>
			<div>
				<Avatar
					user={comment.user}
					avatarFallbackProps={{ className: 'bg-pink-200' }}
				/>
			</div>
			<div className='w-full'>
				<div className='flex gap-2 text-[13px] mb-1'>
					<Link className='font-bold' href={`/profile/${comment.user.id}`}>
						{comment.user.name} {comment.user.lastName}
					</Link>
					<div className='text-gray-400'>
						{formatCreatedAt(comment.createdAt)}
					</div>
				</div>

				<div className='text-[13px] text-gray-400'>Ученик</div>

				<div
					className='my-3'
					dangerouslySetInnerHTML={{ __html: comment.text }}
				></div>

				<Button variant='ghost' className='flex gap-2'>
					<MessageSquareMore className='w-4 h-4' />
					Ответить
				</Button>
			</div>
		</div>
	);
};

export default Comment;
