import { useQuery } from '@tanstack/react-query';
import Question from './Question';
import { questionsService } from '@/services/questions.service';
import QuestionSkeleton from './QuestionSkeleton';
import { useUserStore } from '@/store/use-user-store';

const Questions = () => {
	const { user } = useUserStore();

	const { data: questions, isPending } = useQuery({
		queryKey: ['questions'],
		queryFn: () => {
			return questionsService.getAll();
		},
	});
	// console.log('questions  ', questions);

	return (
		<div>
			{isPending ? (
				<QuestionSkeleton />
			) : (
				questions
					// ?.filter(q => q?.user?.id !== user?.id)    TODO: ПОТОМ ЭТО ВЕРНУТЬ
					?.map(question => (
						<Question
							key={question.id}
							id={question.id}
							category={question.category}
							createdAt={question.createdAt}
							userAvatar={question.user.avatar}
							theme={question.themeText}
							userId={question.userId}
							userName={question.user.name}
							userLastName={question.user.lastName}
							repliesCount={question.answers.length}
						/>
					))
			)}
		</div>
	);
};

export default Questions;
