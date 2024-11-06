import { IAnswer } from '@/types/questions.types';
import Answer from './Answer';
import NewAnswers from './NewAnswers';

interface IAnswersProps {
	answers: IAnswer[] | undefined;
}

const Answers: React.FC<IAnswersProps> = ({ answers }) => {
	return (
		<>
			<NewAnswers />

			{!!answers?.length && (
				<div className='bg-white w-full mb-4'>
					<div>
						<h2 className='text-[20px] border-b border-solid border-b-gray-200 p-10'>
							{answers?.length} ответов
						</h2>
					</div>

					<div>
						{answers
							?.sort((a, b) => Number(b.isBestAnswer) - Number(a.isBestAnswer))
							?.map(answer => (
								<Answer
									{...answer}
									key={answer.id}
									isBestAnswerAllowed={!answers?.find(a => a.isBestAnswer)}
								/>
							))}
					</div>
				</div>
			)}
		</>
	);
};

export default Answers;
