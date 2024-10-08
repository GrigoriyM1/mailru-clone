import { IAnswer } from '@/types/questions.types';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { formatCreatedAt } from '@/lib/format-created-at';
import { EllipsisVertical, Heart, MessageSquareMore } from 'lucide-react';

const Answer: React.FC<IAnswer> = ({
	createdAt,
	id,
	isBestAnswer,
	likes,
	questionId,
	text,
	updatedAt,
	user,
	userId,
}) => {
	return (
		<div className='px-10 py-6 flex justify-between'>
			<div className='flex gap-4'>
				<Link href={`/profile/${user?.id}`}>
					<Avatar size='normal'>
						<AvatarImage src={user?.avatar} alt={user?.name} />
						<AvatarFallback>{user?.name?.[0]}</AvatarFallback>
					</Avatar>
				</Link>

				<div>
					<div className='flex items-center'>
						<Link
							href={`/profile/${user?.id}`}
							className='text-[13px] font-semibold hover:underline'
						>
							{user?.name} {user?.lastName},
						</Link>
						<div className='ml-2 text-gray-400 text-[13px]'>
							{formatCreatedAt(createdAt!)}
						</div>
					</div>

					<div className='text-gray-400 text-[13px]'>Ученик</div>

					<pre
						className='my-3 text-[15px]'
						dangerouslySetInnerHTML={{ __html: text }}
					></pre>

					<div className='flex'>
						<Button
							variant='outline'
							className='flex items-center text-gray-500 gap-1'
						>
							<Heart className='min-w-4 min-h-4 max-w-4 max-h-4 text-black' />
							<div className='ml-1'>{likes > 0 && likes}</div>
							Нравится
						</Button>
						<Button
							variant='outline'
							className='flex items-center text-gray-500 gap-1'
						>
							<MessageSquareMore className='min-w-4 min-h-4 max-w-4 max-h-4 text-black' />
							Комментировать
						</Button>
					</div>
				</div>
			</div>

			<div>
				<EllipsisVertical className='cursor-pointer' />
			</div>
		</div>
	);
};

export default Answer;
