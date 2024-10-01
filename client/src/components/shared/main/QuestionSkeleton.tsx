import { Skeleton } from '@/components/ui/skeleton';
import Question from './Question';

const QuestionSkeleton = () => {
	return (
		<div>
			{[...Array(10)].map((_, index) => (
				<div
					key={index}
					className='py-6 px-9 flex justify-between'
					style={{
						borderBottom: '1px solid rgba(0,16,61,.08)',
					}}
				>
					<div className='flex gap-4 w-full'>
						<Skeleton className='w-[40px] h-[40px] rounded-full' />

						<div className='w-full'>
							<Skeleton className='h-[18px] mb-3 max-w-[550px] w-full' />
							<Skeleton className='h-[20px] w-full' />
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default QuestionSkeleton;
