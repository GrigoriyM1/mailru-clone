import Avatar from '@/components/modules/Avatar';
import { Button } from '@/components/ui/button';
import QuilEditor from '@/components/ui/quil-editor/quil-editor';
import { answerService } from '@/services/answer.service';
import { IMinUser } from '@/types/auth.types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { MessageSquareMore } from 'lucide-react';
import { useState, forwardRef } from 'react';

interface IAddCommentProps {
	answerId: string;
	user: IMinUser;
}

const AddComment = forwardRef<HTMLDivElement, IAddCommentProps>(
	({ answerId, user }, ref) => {
		const [commentText, setCommentText] = useState({
			text: '',
			html: '',
		});

		const queryClient = useQueryClient();

		const commentMutation = useMutation({
			mutationKey: ['comment-answer'],
			mutationFn: () => answerService.comment(answerId, commentText.html),
			onSuccess(data) {
				console.log('success ', data);
				queryClient.invalidateQueries({ queryKey: [`get-one-question`] });
				setCommentText({
					text: '',
					html: '',
				});
			},
		});

		const handleComment = () => {
			commentMutation.mutate();
			console.log('handleComment');
		};

		return (
			<div ref={ref}>
				<div className='bg-gray-100 w-full p-4 flex gap-3'>
					<div>
						<Avatar
							user={user}
							avatarFallbackProps={{ className: 'bg-pink-200' }}
						/>
					</div>
					<div className='w-full'>
						<QuilEditor
							className='mb-3'
							value={commentText.html}
							onChange={(value, delta, source, editor) => {
								setCommentText({
									text: editor.getText(),
									html: value,
								});
							}}
							placeholder='Написать комментарий'
						/>
						<Button
							variant='outline'
							className='flex gap-2 text-black'
							onClick={handleComment}
							disabled={commentText.text.length < 6}
							isLoading={commentMutation.isPending}
						>
							<MessageSquareMore className='w-5 h-5' />
							Комментировать
						</Button>
					</div>
				</div>
			</div>
		);
	}
);

export default AddComment;
