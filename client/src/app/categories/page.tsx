'use client';

import { useQuery } from '@tanstack/react-query';
import { questionsService } from '@/services/questions.service';
import Link from 'next/link';

const CategoriesPage = () => {
	const { data, isPending } = useQuery({
		queryKey: ['categories'],
		queryFn: () => {
			return questionsService.getCategories();
		},
	});

	return (
		<div className='p-6'>
			<h1 className='text-[24px] mb-5'>Все категории проекта</h1>

			<div>
				{isPending ? (
					<div>loading</div>
				) : (
					<div className='flex flex-wrap'>
						{data &&
							Object.keys(data).map(category => {
								const { name, ...value } = data[category];

								return (
									<div className='w-[301px] mb-1' key={category}>
										<Link
											href={`/category/${category}`}
											className='text-[15px] block w-full text-primary hover:underline mb-1'
										>
											{name}
										</Link>

										{Object.keys(value).map(item => {
											const val = value[item];

											return (
												<Link
													href={`/category/${item}`}
													className='text-[13px] block w-full text-black hover:underline mb-1'
													key={item}
												>
													{val}
												</Link>
											);
										})}
									</div>
								);
							})}
					</div>
				)}
			</div>
		</div>
	);
};

export default CategoriesPage;
