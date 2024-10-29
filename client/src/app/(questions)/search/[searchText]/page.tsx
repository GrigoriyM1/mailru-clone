'use client';

import SearchPageInput from '@/components/shared/search/SearchPageInput';
import { useParams, useRouter } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';
import { ISearchForm } from '@/types/search.types';
import SelectInputs from '@/components/shared/search/SelectInputs';
import GetCategories from '@/components/shared/search/GetCategories';
import { useSearchStore } from '@/store/use-search-store';
import { Spinner } from '@/components/ui/spinner';

const SearchPage = () => {
	const { isCategoriesPending } = useSearchStore();
	const { searchText } = useParams();

	const methods = useForm<ISearchForm>({
		mode: 'onChange',
		defaultValues: {
			searchText: decodeURIComponent(searchText as string),
		},
	});

	const { push } = useRouter();

	const onSubmit = (data: ISearchForm) => {
		console.log('data  ', data);
		push(`/search/${data.searchText}`);
	};

	return (
		<GetCategories>
			<div className='bg-white p-4 w-full mb-4 mt-4'>
				<div>
					<h1 className='text-[24px] mb-4'>Результаты поиска</h1>

					<FormProvider {...methods}>
						{isCategoriesPending ? (
							<div>
								<Spinner />
							</div>
						) : (
							<form onSubmit={methods.handleSubmit(onSubmit)}>
								<SearchPageInput />

								<SelectInputs />
							</form>
						)}
					</FormProvider>
				</div>
			</div>
		</GetCategories>
	);
};

export default SearchPage;
