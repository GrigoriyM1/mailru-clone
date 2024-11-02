import {
	DropdownMenuTrigger,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import {
	CircleAlert,
	EllipsisVertical,
	Heart,
	MessageSquareMore,
	Star,
} from 'lucide-react';
import Link from 'next/link';
import { formatCreatedAt } from '@/lib/format-created-at';
import Avatar from '@/components/modules/Avatar';
import { useParams } from 'next/navigation';

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
	isCategory?: boolean;
	likes: number;
	isSearch?: string;
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
	isCategory,
	likes,
	isSearch,
}) => {
	const { category: categoryParams, type } = useParams();

	const isBest = categoryParams === 'best' || type === 'best';

	const highlighted = (name: string): JSX.Element[] => {
		const parts = name.split(new RegExp(`(${isSearch})`, 'gi'));
		return parts.map((part, index) =>
			part.toLowerCase() === isSearch?.toLowerCase?.() ? (
				<span key={index} className='font-bold'>
					{part}
				</span>
			) : (
				<span key={index}>{part}</span>
			)
		);
	};

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
						{highlighted(theme)}
					</Link>
					<div className='flex'>
						<div className='flex text-gray-400 text-[13px] mr-3'>
							{/* потом еще сделать ссылку на профиль */}
							<Link href={`/profile/${userId}`} className='hover:underline'>
								{/* TODO: ПОЛУЧАТЬ ССЫЛКУ НА ПРОФИЛЬ ПО ID ЮЗЕРА */}
								{userName} {userLastName}
							</Link>
							,<div>{formatCreatedAt(createdAt)}</div>
							{isCategory && (
								<div>
									, в "
									<Link
										href={`/category/${category}`}
										className='hover:underline'
									>
										{category}
										{/* TODO: ОТФОРМАТИРОВАННЫЕ КАТЕГОРИИ */}
									</Link>
									"
								</div>
							)}
						</div>

						<Link
							href={`/question/${id}`}
							className='text-gray-600 text-[13px] hover:underline flex items-center gap-2'
						>
							<MessageSquareMore className='text-gray-400 w-5 h-5' />
							{repliesCount} Ответов
						</Link>
						{isBest && (
							<div className='text-gray-600 text-[13px] flex items-center gap-2 ml-4'>
								<Heart className='text-gray-400 w-5 h-5' />
								{likes} Нравится
								{/* ДЕЛАТЬ РЕФЕТЧ ВОПРОСОВ ВСЕХ ПОСЛЕ ЛАЙКА */}
							</div>
						)}
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
