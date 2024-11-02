import { Skeleton } from '@/components/ui/skeleton';
import InfiniteCounter from '../../modules/InfiniteCounter';

const SearchQuestionSkeleton = () => {
	return (
		<div>
			<div className='flex justify-between items-center pb-5 border-b border-gray-200'>
				<div className='text-[24px]'>
					<InfiniteCounter />
					совпадений
				</div>

				<div className='flex gap-4 opacity-50 cursor-default'>
					<div className='font-bold'>По релевантности</div>
					<div className='text-primary'>По дате</div>
				</div>
			</div>

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
		</div>
	);
};

export default SearchQuestionSkeleton;
