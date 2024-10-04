import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { formatCreatedAt } from '@/lib/format-created-at';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
	EllipsisVertical,
	Heart,
	MessageSquareMore,
	Share2,
} from 'lucide-react';
import { useUserStore } from '@/store/use-user-store';
import { IQuestion } from '@/types/questions.types';
import Answer from './Answer';
import { useMutation } from '@tanstack/react-query';
import { questionsService } from '@/services/questions.service';
import cn from 'clsx';
import { useEffect, useState } from 'react';
import { Spinner } from '@/components/ui/spinner';
import { useModalsStore } from '@/store/use-modals-store';

interface IQuestionProps {
	data: IQuestion | undefined;
}

const Question: React.FC<IQuestionProps> = ({ data }) => {
	const { user } = useUserStore();
	const [likes, setLikes] = useState(data?.likes);
	const { isLikedByModalOpen, setIsLikedByModalOpen, likedBy, setLikedBy } =
		useModalsStore();

	const { mutate, isPending } = useMutation({
		mutationKey: ['like-question'],
		mutationFn: (id: string) => questionsService.like(id),
		onSuccess(successData) {
			setLikes(successData?.likes);
			setLikedBy(successData?.likedBy);
		},
	});

	const handleLikeQuestion = () => {
		mutate(data?.id!);
	};

	const handleLikedByModalOpen = () => {
		setIsLikedByModalOpen(!isLikedByModalOpen);
	};

	useEffect(() => {
		setLikedBy(data?.likedBy!);
	}, [data?.likedBy]);

	return (
		<div>
			<div className='bg-white p-10 w-full mb-4'>
				<div className='flex gap-4'>
					<Link href={`/profile/${data?.user?.id}`}>
						<Avatar size='normal'>
							<AvatarImage src={data?.user?.avatar} alt={data?.user?.name} />
							<AvatarFallback>{data?.user?.name?.[0]}</AvatarFallback>
						</Avatar>
					</Link>

					<div>
						<div>
							<div className='flex justify-between'>
								<div className='flex mb-4 items-center'>
									<Link
										href={`/profile/${data?.user?.id}`}
										className='font-semibold hover:underline'
									>
										{data?.user?.name} {data?.user?.lastName},
									</Link>
									<div className='ml-2 text-gray-400 text-sm'>
										открыт {formatCreatedAt(data?.createdAt!)}
									</div>
								</div>

								{/* TODO: ТУТ ОБЯЗАТЕЛЬНО ДОБАВИТЬ СДЕЛАТЬ ЛИДЕРОМ, ПОЖАЛОВАТЬСЯ */}
								<div className='cursor-pointer'>
									<EllipsisVertical />
								</div>
							</div>

							<h1 className='text-[25px] mb-8'>{data?.themeText}</h1>
							<pre className='mb-8'>{data?.text}</pre>
						</div>

						<div className='flex justify-between'>
							<div className='flex gap-3 items-center'>
								{user?.id !== data?.user?.id && (
									<Button size='lg' className='flex items-center gap-2'>
										<MessageSquareMore
											size={23}
											className='stroke-primary'
											fill='white'
										/>
										Ответить
									</Button>
								)}

								<div className='flex gap-2 items-center'>
									<Button
										variant='ghost'
										className='h-[46px] w-[46px]'
										onClick={handleLikeQuestion}
									>
										{isPending ? (
											<Spinner size='small' />
										) : (
											<Heart
												className={cn(
													'min-w-4 min-h-4',
													likedBy?.find(u => u.id === user?.id) && 'fill-black'
												)}
											/>
										)}
									</Button>

									<div
										className='cursor-pointer flex items-center gap-1'
										onClick={handleLikedByModalOpen}
									>
										{likes! > 0 && (
											<>
												{likedBy?.slice(0, 3).map(u => (
													<Avatar size='normal' className='w-8 h-8' key={u?.id}>
														<AvatarImage src={u?.avatar} alt={u?.name} />
														<AvatarFallback>{u?.name?.[0]}</AvatarFallback>
													</Avatar>
												))}
												<div className='ml-1'>+ {likes}</div>
											</>
										)}
									</div>
								</div>
							</div>

							{/* TODO: потом share ОБЯЗАТЕЛЬНО В СОЦ СЕТЯХ */}
							<Button variant='ghost' className='h-[46px] w-[46px]'>
								<Share2 className='min-w-4 min-h-4' fill='black' />
							</Button>
						</div>
					</div>
				</div>
			</div>

			<div className='bg-white w-full'>
				<div>
					<h2 className='text-[20px] border-b border-solid border-b-gray-200 p-10'>
						{data?.answers?.length} ответов
					</h2>
				</div>

				<div>
					{data?.answers?.map(answer => (
						<Answer {...answer} key={answer.id} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Question;
