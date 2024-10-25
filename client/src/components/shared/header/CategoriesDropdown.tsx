import React from 'react';
import cn from 'clsx';
import { useQuery } from '@tanstack/react-query';
import { questionsService } from '@/services/questions.service';
import Link from 'next/link';

interface ICategoriesDropdownProps {
	isOpen: boolean;
}

const CategoriesDropdown: React.FC<ICategoriesDropdownProps> = ({ isOpen }) => {
	const { data } = useQuery({
		queryKey: ['categories'],
		queryFn: () => questionsService.getCategories(),
	});

	return (
		<div
			className={cn(
				'absolute top-14 left-0 bg-white z-[9999] w-[835px] flex flex-wrap shadow-big',
				{
					'opacity-100 transition-opacity duration-300': isOpen, // Плавное появление
					'opacity-0 transition-opacity duration-300 pointer-events-none':
						!isOpen, // Плавное исчезновение, блокировка взаимодействия
				}
			)}
		>
			<Link
				href='/'
				className='flex w-[278px] font-bold p-2 hover:bg-gray-200 transition'
			>
				Все вопросы проекта
			</Link>

			{data &&
				Object.keys(data)
					.slice(0, 28)
					.map(category => {
						const value = data[category];

						return (
							<Link
								href={`/category/${category}`}
								className='flex w-[278px] p-2 hover:bg-gray-200 transition whitespace-nowrap'
								key={value.name}
							>
								{value.name}
							</Link>
						);
					})}

			<Link
				href='/categories'
				className='flex w-[278px] font-bold p-2 hover:bg-gray-200 transition'
			>
				Полный список
				{/* TODO: ОТДЕЛЬНАЯ СТРАНИЦА ТУТ  */}
			</Link>
		</div>
	);
};

export default CategoriesDropdown;

// TODO: ТУТ ОСТАНОВИЛСЯ 