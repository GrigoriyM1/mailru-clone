import { questionsService } from '@/services/questions.service';
import { useSearchStore } from '@/store/use-search-store';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

const GetCategories: React.FC<React.PropsWithChildren> = ({ children }) => {
	const { setCategories, setIsCategoriesPending } = useSearchStore();

	const { data, isPending } = useQuery({
		queryKey: ['get-categories'],
		queryFn: () => questionsService.getCategories(),
	});

	useEffect(() => {
		setIsCategoriesPending(isPending);

		if (data) {
			setCategories(data);
		}
	}, [data, isPending]);

	return <>{children}</>;
};

export default GetCategories;
