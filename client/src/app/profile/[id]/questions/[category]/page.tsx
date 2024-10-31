'use client';

import Profile from '@/components/shared/profile/Profile';
import ProfileLoading from '@/components/shared/profile/ProfileLoading';
import ProfileSidebar from '@/components/shared/profile/ProfileSidebar';
import ProfileSidebarLoading from '@/components/shared/profile/ProfileSidebarLoading';
import { questionsService } from '@/services/questions.service';
import { userService } from '@/services/user.service';
import { useProfileStore } from '@/store/use-profile-store';
import { useUserStore } from '@/store/use-user-store';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';

const ProfileQuestionsCategoryPage = () => {
	const { id, category, pageNumber } = useParams();
	const { user } = useUserStore();
	const { setProfileQuestions, setIsProfileQuestionsLoading } =
		useProfileStore();

	const { data, isPending } = useQuery({
		queryKey: ['get-user-by-id', id],
		queryFn: () => userService.getById(id as string),
	});

	const getQuestionsFromUser = useQuery({
		queryKey: ['get-questions-from-user', category, id, pageNumber],
		queryFn: () =>
			questionsService.getFromUser(
				id as string,
				category as string,
				(20 * Number(pageNumber)) || 20,
			),
	});
	const isMyProfile = data?.id === user?.id;

	useEffect(() => {
		if (getQuestionsFromUser.data) {
			setProfileQuestions(getQuestionsFromUser.data);
		}
		setIsProfileQuestionsLoading(getQuestionsFromUser.isPending);
	}, [getQuestionsFromUser.data, getQuestionsFromUser.isPending]);

	return (
		<div className='flex min-h-[100vh]'>
			{isPending ? (
				<ProfileSidebarLoading />
			) : (
				<ProfileSidebar isMyProfile={isMyProfile} data={data} />
			)}

			{isPending ? <ProfileLoading /> : <Profile data={data}  />}
		</div>
	);
};
// TODO: ТУТ ОСТАВНОИЛСЯ

export default ProfileQuestionsCategoryPage;
