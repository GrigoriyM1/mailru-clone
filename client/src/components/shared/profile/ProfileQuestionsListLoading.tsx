import { Skeleton } from '@/components/ui/skeleton';

const ProfileQuestionsListLoading = () => {
	return (
		<div>
			{[...Array(5)].map((_, i) => (
				<div key={i}>
					<div className='py-5 border-t border-gray-100 border-solid border-b px-10'>
						<Skeleton className='w-[600px] h-[15px] mb-4' />

						<div className='flex gap-3'>
							<Skeleton className='w-[90px] h-[15px]' />
							<Skeleton className='w-[90px] h-[15px]' />
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default ProfileQuestionsListLoading;
