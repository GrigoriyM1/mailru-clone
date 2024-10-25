import { Skeleton } from '@/components/ui/skeleton';

const ProfileSidebarLoading = () => {
	return (
		<div className='max-w-[280px] w-full p-4 pt-10'>
			<Skeleton className='w-full h-[15px] rounded-md mb-8' />
			<Skeleton className='w-full h-[15px] rounded-md mb-8' />
			<Skeleton className='w-full h-[15px] rounded-md mb-8' />
		</div>
	);
};

export default ProfileSidebarLoading;
