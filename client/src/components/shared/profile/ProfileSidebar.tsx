import { Camera, Crown, UserRoundPen } from 'lucide-react';
import Link from 'next/link';
import { IUser } from '@/types/auth.types';
import { useProfileStore } from '@/store/use-profile-store';
import { useModalsStore } from '@/store/use-modals-store';

interface IProfileSidebarProps {
	isMyProfile: boolean;
	data: IUser | undefined;
}

const ProfileSidebar: React.FC<IProfileSidebarProps> = ({
	isMyProfile,
	data,
}) => {
	const { setIsEditProfileModalOpen } = useModalsStore();
	const { profileQuestions, profileAnswers } = useProfileStore();
	const QUESTIONS_URL = `/profile/${data?.id}/questions/all`;

	return (
		<div className='max-w-[280px] w-full p-4 pt-6'>
			<div className='border-b border-solid border-gray-300 pb-2'>
				<Link
					href={QUESTIONS_URL}
					className='w-full px-6 py-2 flex justify-between hover:bg-gray-300 transition rounded-sm'
				>
					Вопросы
					<span className='p-2 py-1 bg-gray-300 rounded-sm text-[13px]'>
						{profileQuestions?.questionsLength ||
							profileAnswers?.questionsLength}
						{/* TODO: СЮДА ДОБАВИТЬ ТУТ ОСТАНОВИЛСЯ */}
					</span>
				</Link>
				<Link
					href={`/profile/${data?.id}/answers/all`}
					className='w-full px-6 py-2 flex justify-between hover:bg-gray-300 transition rounded-sm'
				>
					Ответы
					<span className='p-2 py-1 bg-gray-300 rounded-sm text-[13px]'>
						{profileQuestions?.answersLength || profileAnswers?.answersLength}
					</span>
				</Link>
			</div>

			<div className='mt-3'>
				<div className='cursor-pointer px-6 py-2 flex gap-2 hover:bg-gray-300 transition rounded-sm'>
					<Crown />
					{isMyProfile ? 'Получить' : 'Подарить'} VIP-статус
				</div>
				{isMyProfile && (
					<Link
						href='/profile'
						className='w-full cursor-pointer px-6 py-2 flex gap-2 hover:bg-gray-300 transition rounded-sm'
					>
						<Camera /> Изменить аватар
					</Link>
				)}
				{isMyProfile && (
					<div
						className='cursor-pointer px-6 py-2 flex gap-2 hover:bg-gray-300 transition rounded-sm'
						onClick={() => setIsEditProfileModalOpen(true)}
					>
						<UserRoundPen /> Редактировать профиль
					</div>
				)}
			</div>
		</div>
	);
};

// TODO: СДЕЛАТЬ ССЫЛКИ РАБОЧИМИ

export default ProfileSidebar;
