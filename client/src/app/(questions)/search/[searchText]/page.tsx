'use client';

import SearchPageInput from '@/components/shared/search/SearchPageInput';
import {
	useParams,
	useRouter,
	useSearchParams,
	usePathname,
} from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';
import { ISearchForm } from '@/types/search.types';
import SelectInputs from '@/components/shared/search/SelectInputs';
import GetCategories from '@/components/shared/search/GetCategories';
import { useSearchStore } from '@/store/use-search-store';
import { Spinner } from '@/components/ui/spinner';
import SearchQuestions from '@/components/shared/search/SearchQuestions';
import qs from 'qs';

const SearchPage = () => {
	const { isCategoriesPending } = useSearchStore();
	const { searchText } = useParams();
	const searchParams = useSearchParams();


	const methods = useForm<ISearchForm>({
		mode: 'onChange',
		defaultValues: {
			searchText: decodeURIComponent(searchText as string),
			category: searchParams.get('category') || 'all',
			subcategory: searchParams.get('subcategory') || '',
			time: searchParams.get('time') || 'all',
			type: searchParams.get('type') || 'all',
		},
	});

	const { push } = useRouter();

	const onSubmit = (data: ISearchForm) => {
		console.log('data  ', data);
		const queryString = qs.stringify({
			category: data.category,
			subcategory: data.subcategory,
			time: data.time,
			type: data.type,
		});
		push(`/search/${data.searchText}?${queryString}`);
	};

	return (
		<GetCategories>
			<FormProvider {...methods}>
				<div className='w-full'>
					<div className='bg-white p-4 w-full mb-4 mt-4 h-[250px]'>
						<div>
							<h1 className='text-[24px] mb-4'>Результаты поиска</h1>

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
						</div>
					</div>

					<SearchQuestions />
				</div>
			</FormProvider>
		</GetCategories>
	);
};

export default SearchPage;
