import { FormField } from '@/components/ui/form';
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectGroup,
	SelectItem,
} from '@/components/ui/select';
import { QUESTION_TYPES, TIME_FRAMES } from '@/constants/search-page.constants';
import { useSearchStore } from '@/store/use-search-store';
import { ISearchForm } from '@/types/search.types';
import { useFormContext, useWatch } from 'react-hook-form';

const SelectInputs = () => {
	const { control, setValue } = useFormContext<ISearchForm>();
	const { category } = useWatch({ control });

	const { categories } = useSearchStore();

	return (
		<div className='flex flex-wrap mt-3 gap-2 justify-center'>
			<FormField
				control={control}
				name='category'
				render={({ field }) => (
					<Select
						onValueChange={e => {
							field.onChange(e);
							setValue('subcategory', '');
						}}
						value={field.value}
					>
						<SelectTrigger className={'w-[49%] h-[45px] text-[17px]'}>
							<SelectValue placeholder='Выберите категорию' />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectItem value={'all'}>Все категории</SelectItem>
								{categories &&
									Object?.keys(categories)?.map(key => (
										<SelectItem value={key} key={key}>
											{categories[key].name}
										</SelectItem>
									))}
							</SelectGroup>
						</SelectContent>
					</Select>
				)}
			/>

			<FormField
				control={control}
				name='subcategory'
				render={({ field }) => (
					<Select
						onValueChange={field.onChange}
						value={field.value}
						disabled={!category || category === 'all'}
					>
						<SelectTrigger className={'w-[49%] h-[45px] text-[17px]'}>
							<SelectValue placeholder='Выберите подкатегорию' />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								{category &&
									categories?.[category] &&
									Object.keys(categories?.[category]).map(
										key =>
											key !== 'name' && (
												<SelectItem value={key} key={key}>
													{categories[category][key]}
												</SelectItem>
											)
									)}
							</SelectGroup>
						</SelectContent>
					</Select>
				)}
			/>

			<FormField
				control={control}
				name='time'
				render={({ field }) => (
					<Select onValueChange={field.onChange} value={field.value}>
						<SelectTrigger className={'w-[49%] h-[45px] text-[17px]'}>
							<SelectValue />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								{TIME_FRAMES.map(time => (
									<SelectItem value={time.value} key={time.value}>
										{time.name}
									</SelectItem>
								))}
							</SelectGroup>
						</SelectContent>
					</Select>
				)}
			/>

			<FormField
				control={control}
				name='type'
				render={({ field }) => (
					<Select onValueChange={field.onChange} value={field.value}>
						<SelectTrigger className={'w-[49%] h-[45px] text-[17px]'}>
							<SelectValue />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								{QUESTION_TYPES.map(time => (
									<SelectItem value={time.value} key={time.value}>
										{time.name}
									</SelectItem>
								))}
							</SelectGroup>
						</SelectContent>
					</Select>
				)}
			/>
		</div>
	);
};

export default SelectInputs;
