import Image from 'next/image';

const Question404 = () => {
	return (
		<div className='bg-white p-20 w-full mb-4 flex items-center justify-center flex-col'>
			<Image
				src='/not-found-emoji.svg'
				alt='not-found'
				width={100}
				height={100}
			/>
			<h1 className='mt-6 text-[24px]'>Такого вопроса больше нет :(</h1>
		</div>
	);
};

export default Question404;
