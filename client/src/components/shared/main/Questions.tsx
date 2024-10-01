import { useQuery } from '@tanstack/react-query';
import Question from './Question';
import { questionsService } from '@/services/questions.service';
import QuestionSkeleton from './QuestionSkeleton';

const Questions = () => {
	const { data: questions, isPending } = useQuery({
		queryKey: ['questions'],
		queryFn: () => {
			return questionsService.getAll();
		},
	});
	console.log('questions  ', questions);

	return (
		<div>
			{isPending ? (
				<QuestionSkeleton />
			) : (
				questions?.map(question => (
					<Question
						key={question.id}
						id={question.id}
						category={question.category}
						createdAt={question.createdAt}
						text={question.text}
						userId={question.userId}
						userName='Gregory'
						userLastName='Mmmm'
						repliesCount={question.answers.length}
					/>
				))
			)}
		</div>
	);
};

export default Questions;
