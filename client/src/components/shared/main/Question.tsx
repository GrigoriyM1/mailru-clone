import {
	DropdownMenuTrigger,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import {
	CircleAlert,
	EllipsisVertical,
	MessageSquareMore,
	Star,
} from 'lucide-react';
import Link from 'next/link';
import { formatCreatedAt } from '@/lib/format-created-at';
import Avatar from '@/components/modules/Avatar';

interface IQuestionProps {
	id: string;
	userId: string;
	userAvatar?: string;
	theme: string;
	createdAt: string;
	userName: string;
	userLastName: string;
	category: string;
	repliesCount: number;
}

const Question: React.FC<IQuestionProps> = ({
	id,
	createdAt,
	theme,
	category,
	userAvatar,
	userName,
	userLastName,
	repliesCount,
	userId,
}) => {
	return (
		<div
			className='py-6 px-9 flex justify-between'
			style={{
				borderBottom: '1px solid rgba(0,16,61,.08)',
			}}
		>
			<div className='flex gap-4'>
				<Avatar
					user={{
						avatar: userAvatar,
						name: userName,
						lastName: userLastName,
						id: userId,
					}}
				/>

				<div>
					<Link
						href={`/question/${id}`}
						className='block text-[17px] mb-2 hover:underline word-break'
					>
						{theme}
					</Link>
					<div className='flex'>
						<div className='flex text-gray-400 text-[13px] mr-3'>
							{/* потом еще сделать ссылку на профиль */}
							<Link href={`/profile/${userId}`} className='hover:underline'>
								{/* TODO: ПОЛУЧАТЬ ССЫЛКУ НА ПРОФИЛЬ ПО ID ЮЗЕРА */}
								{userName} {userLastName}
							</Link>
							,<div>{formatCreatedAt(createdAt)}</div>,
							<div>
								в "
								<Link href='/illness' className='hover:underline'>
									{category}
									{/* TODO: ОТФОРМАТИРОВАННЫЕ КАТЕГОРИИ */}
								</Link>
								"
							</div>
						</div>

						<Link
							href={`/question/${id}`}
							className='text-gray-600 text-[13px] hover:underline flex items-center gap-2'
						>
							<MessageSquareMore className='text-gray-400 w-5 h-5' />
							{repliesCount} Ответов
						</Link>
					</div>
				</div>
			</div>

			<div>
				<DropdownMenu>
					<DropdownMenuTrigger>
						<EllipsisVertical className='cursor-pointer' />
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						{/* TODO: ЖАЛОБЫ И ЛИДЕРОМ */}
						<DropdownMenuItem className='flex items-center gap-2 p-3'>
							<Star className='text-gray-400 fill-gray-400 w-5 h-5 cursor-pointer' />
							Сделать лидером
						</DropdownMenuItem>
						<DropdownMenuItem className='flex items-center gap-2 p-3'>
							<CircleAlert className='stroke-white fill-gray-400 w-5 h-5 cursor-pointer' />
							Пожаловаться
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);
};

export default Question;
