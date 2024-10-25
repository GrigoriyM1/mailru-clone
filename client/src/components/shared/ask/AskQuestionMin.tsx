import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';

const AskQuestionMin = () => {
	const { push } = useRouter();

	return (
		<div className='flex mb-7'>
			<Input
				placeholder='Задайте свой вопрос здесь'
				size='lg'
				className='border-primary'
			/>
			<Button className='h-[48px]' onClick={() => push('/ask')}>
				Задать вопрос
			</Button>
		</div>
	);
};

export default AskQuestionMin;
