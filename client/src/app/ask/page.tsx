import Link from 'next/link';

const AskPage = () => {
	return (
		<div className='flex'>
			<div className='max-w-[280px] w-full p-4'>
				<div>
					<Link href='/smstop'>Вопросы-лидеры</Link>
				</div>
			</div>

			<div className='bg-white p-10 w-full'>
				<h1 className='text-[25px]'>Задать вопрос</h1>
			</div>
		</div>
	);
};

export default AskPage;
