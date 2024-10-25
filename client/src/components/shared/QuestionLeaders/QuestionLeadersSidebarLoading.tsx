import { Skeleton } from '@/components/ui/skeleton';

const QuestionLeadersSidebarLoading = () => {
	return (
		<div>
			{[...Array(5)].map((_, index) => (
				<div className='flex mb-6 gap-5' key={index}>
					<Skeleton className='w-[32px] h-[32px] rounded-full' />

					<div>
						<Skeleton className='w-[160px] mb-2 h-[15px]' />
						<Skeleton className='w-[160px] mb-2 h-[15px]' />
						<Skeleton className='w-[160px] mb-2 h-[15px]' />
					</div>
				</div>
			))}
		</div>
	);
};

export default QuestionLeadersSidebarLoading;
