import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useState } from 'react';

const HeaderSearch = () => {
	const [searchValue, setSearchValue] = useState('');

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

    // console.log('searchValue  ', searchValue);
	};

	return (
		<form
			className='max-w-[450px] w-full flex items-center'
			onSubmit={handleSearch}
		>
			<Input
				placeholder='Поиск по вопросам'
				className='w-full'
				value={searchValue}
				onChange={e => setSearchValue(e.target.value)}
			/>
			<Button variant='outline' className='w-[32px] h-[32px]' type='submit'>
				<Search className='text-primary min-w-[18px] min-h-[18px]' />
			</Button>
		</form>
	);
};

export default HeaderSearch;
