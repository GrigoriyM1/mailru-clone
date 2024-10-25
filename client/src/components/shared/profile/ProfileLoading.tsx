import { Skeleton } from '@/components/ui/skeleton';

const ProfileLoading = () => {
	return (
		<div className='bg-white w-full'>
			<div className='pt-10 px-10 flex items-center gap-7 pb-20'>
				<Skeleton className='min-w-[144px] h-[144px] rounded-full' />

				<div className='flex justify-between w-full'>
					<div>
						<Skeleton className='w-[200px] h-[15px] mb-3' />
						<Skeleton className='w-[160px] h-[15px]' />
					</div>

					<div className='flex text-center gap-8'>
						<div>
							<Skeleton className='w-[70px] h-[15px] mb-3' />
							<Skeleton className='w-[70px] h-[15px]' />
						</div>
						<div>
							<Skeleton className='w-[70px] h-[15px] mb-3' />
							<Skeleton className='w-[70px] h-[15px]' />
						</div>
					</div>
				</div>
			</div>

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

export default ProfileLoading;
