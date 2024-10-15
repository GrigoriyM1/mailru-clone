import { Skeleton } from '@/components/ui/skeleton';

const QuestionLoading = () => {
	return (
		<div className='w-full'>
			<div className='bg-white p-10 w-full mb-4'>
				<div className='flex gap-4'>
					<Skeleton className='w-[50px] h-[50px] rounded-full' />

					<div className='w-full'>
						<Skeleton className='max-w-[500px] w-full h-[15px] mb-5' />

						<Skeleton className='w-full h-[25px] mb-2' />
						<Skeleton className='max-w-[500px] w-full h-[25px] mb-6' />

						<Skeleton className='w-full h-[15px] mb-2' />
						<Skeleton className='w-full h-[15px] mb-2' />
						<Skeleton className='w-full h-[15px] mb-7' />

						<div className='flex justify-between'>
							<div className='flex'>
								<Skeleton className='w-[130px] h-[40px]' />
								<Skeleton className='w-[40px] h-[40px] ml-3' />
							</div>

							<div className='flex'>
								<Skeleton className='w-[40px] h-[40px] mr-3' />
								<Skeleton className='w-[40px] h-[40px]' />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='bg-white w-full'>
				<div className='p-10 border-b border-solid border-gray-200'>
					<Skeleton className='w-[250px] h-[28px]' />
				</div>

				<div className='p-10 border-b border-solid border-gray-200 flex gap-3'>
					<Skeleton className='w-[50px] h-[50px] rounded-full' />

					<div>
						<Skeleton className='w-[386px] h-[15px] mb-2' />
						<Skeleton className='w-[231px] h-[15px] mb-5' />

						<Skeleton className='w-[541px] h-[19px] mb-5' />

						<div className='flex gap-5'>
							<Skeleton className='w-[100px] h-[15px]' />
							<Skeleton className='w-[100px] h-[15px]' />
						</div>
					</div>
				</div>
				<div className='p-10 border-b border-solid border-gray-200 flex gap-3'>
					<Skeleton className='w-[50px] h-[50px] rounded-full' />

					<div>
						<Skeleton className='w-[386px] h-[15px] mb-2' />
						<Skeleton className='w-[231px] h-[15px] mb-5' />

						<Skeleton className='w-[541px] h-[19px] mb-5' />

						<div className='flex gap-5'>
							<Skeleton className='w-[100px] h-[15px]' />
							<Skeleton className='w-[100px] h-[15px]' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

// TODO: ТУТ ОСТАВНОИЛСЯ

export default QuestionLoading;
