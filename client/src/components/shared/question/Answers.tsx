import { IAnswer } from '@/types/questions.types';
import Answer from './Answer';

interface IAnswersProps {
	answers: IAnswer[] | undefined;
}

const Answers: React.FC<IAnswersProps> = ({ answers }) => {
	return (
		!!answers?.length && (
			<div className='bg-white w-full mb-4'>
				<div>
					<h2 className='text-[20px] border-b border-solid border-b-gray-200 p-10'>
						{answers?.length} ответов
					</h2>
				</div>

				<div>
					{answers?.map(answer => (
						<Answer {...answer} key={answer.id} />
					))}
				</div>
			</div>
		)
	);
};

export default Answers;
