import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ISearchForm } from '@/types/search.types';
import { useParams } from 'next/navigation';
import { useFormContext, useWatch } from 'react-hook-form';

const SearchPageInput = () => {
	const { register, control } = useFormContext<ISearchForm>();
	const { searchText: searchTextValue } = useWatch({ control });
	const { searchText } = useParams();

	return (
		<div className='flex items-center'>
			<Input size='lg' {...register('searchText')} />
			<Button
				size='lg'
				type='submit'
				disabled={searchTextValue === decodeURIComponent(searchText as string)}
			>
				Искать
			</Button>
		</div>
	);
};

export default SearchPageInput;
