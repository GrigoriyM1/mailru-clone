import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ISearchForm } from '@/types/search.types';
import { useFormContext, useWatch } from 'react-hook-form';

const SearchPageInput = () => {
	const { register, control } = useFormContext<ISearchForm>();
	const { category, subcategory } = useWatch({ control });

	return (
		<div className='flex items-center'>
			<Input size='lg' {...register('searchText')} />
			<Button
				size='lg'
				type='submit'
				disabled={!!category && category !== 'all' && !subcategory}
			>
				Искать
			</Button>
		</div>
	);
};

export default SearchPageInput;
