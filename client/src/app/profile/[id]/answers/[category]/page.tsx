'use client';

import Profile from '@/components/shared/profile/Profile';
import ProfileLoading from '@/components/shared/profile/ProfileLoading';
import ProfileSidebar from '@/components/shared/profile/ProfileSidebar';
import ProfileSidebarLoading from '@/components/shared/profile/ProfileSidebarLoading';
import { answerService } from '@/services/answer.service';
import { userService } from '@/services/user.service';
import { useProfileStore } from '@/store/use-profile-store';
import { useUserStore } from '@/store/use-user-store';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';

const ProfileAnswersCategoryPage = () => {
	const { id, category, pageNumber } = useParams();
	const { user } = useUserStore();
	const { setProfileAnswers, setIsProfileAnswersLoading } = useProfileStore();

	const { data, isPending } = useQuery({
		queryKey: ['get-user-by-id', id],
		queryFn: () => userService.getById(id as string),
	});

	const getAnswersFromUser = useQuery({
		queryKey: ['get-answers-from-user', category, id, pageNumber],
		queryFn: () =>
			answerService.getFromUser(
				id as string,
				category as string,
				(20 * Number(pageNumber)) || 20
			),
	});
	const isMyProfile = data?.id === user?.id;

	useEffect(() => {
		if (getAnswersFromUser.data) {
			setProfileAnswers(getAnswersFromUser.data);
		}
		setIsProfileAnswersLoading(getAnswersFromUser.isPending);
	}, [getAnswersFromUser.data, getAnswersFromUser.isPending]);

	return (
		<div className='flex min-h-[100vh]'>
			{isPending ? (
				<ProfileSidebarLoading />
			) : (
				<ProfileSidebar isMyProfile={isMyProfile} data={data} />
			)}

			{isPending ? (
				<ProfileLoading />
			) : (
				<Profile data={data} isAnswers={true} />
			)}
		</div>
	);
};

export default ProfileAnswersCategoryPage;
