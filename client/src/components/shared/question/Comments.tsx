import { IAnswer } from '@/types/questions.types';
import AddComment from './AddComment';
import Comment from './Comment';
import { useEffect, useRef } from 'react';

interface ICommentsProps {
	answer: IAnswer;
}

const Comments: React.FC<ICommentsProps> = ({ answer }) => {
	const addCommentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (addCommentRef?.current) {
			console.log(addCommentRef?.current?.offsetTop, addCommentRef.current);
			const elementTopPosition = addCommentRef.current.getBoundingClientRect().top
			const offsetPosition = elementTopPosition + window.pageYOffset - 30; // - offset
			
			window.scrollTo({
				top: offsetPosition,
				left: 0,
			});
		}
	}, [addCommentRef.current]);

	return (
		<div>
			<div>
				{answer.comments.map(comment => (
					<Comment comment={comment} key={comment.id} />
				))}
			</div>

			<AddComment answerId={answer.id} user={answer.user} ref={addCommentRef} />
		</div>
	);
};

export default Comments;
