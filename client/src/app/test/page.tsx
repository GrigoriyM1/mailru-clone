'use client';

import { Button } from '@/components/ui/button';

const Page = () => {
	return (
		<div>
			<form
				onSubmit={() => {
					console.log('HELLO SUBMIT   ');
				}}
			>
				<Button
					size='lg'
					className='mt-6 mb-9'
					isLoading
					disabled
					type='submit'
				>
					Опубликовать вопрос
				</Button>
			</form>
		</div>
	);
};

export default Page;
