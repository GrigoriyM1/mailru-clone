import { Button } from '@/components/ui/button';
import QuilEditor from '@/components/ui/quil-editor/quil-editor';
import { answerService } from '@/services/answer.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Sources } from 'quill';
import { useState } from 'react';
import ReactQuill from 'react-quill';

interface IEditAnswerProps {
	setIsEdit: (isEdit: boolean) => void;
	text: string;
	answerId: string;
}

const EditAnswer: React.FC<IEditAnswerProps> = ({
	setIsEdit,
	text,
	answerId,
}) => {
	const [editText, setEditText] = useState({
		text: text,
		html: text,
	});
	const queryClient = useQueryClient();

	const handleChange = (
		value: string,
		delta: any,
		source: Sources,
		editor: ReactQuill.UnprivilegedEditor
	) => {
		setEditText({
			text: editor.getText(),
			html: value,
		});
	};

	const updateAnswerMutation = useMutation({
		mutationKey: ['update-answer'],
		mutationFn: () => answerService.update({ text: editText.html }, answerId),
		onSuccess() {
			setIsEdit(false);
			queryClient.invalidateQueries({ queryKey: ['get-one-question'] });
		},
	});

	const handleSubmit = () => {
		updateAnswerMutation.mutate();
	};

	return (
		<div className='w-full'>
			<QuilEditor
				className='mb-2'
				value={editText.html}
				onChange={handleChange}
			/>
			<div className='flex items-center gap-2'>
				<Button
					variant='ghost'
					disabled={editText.text.trim().length < 6}
					onClick={handleSubmit}
					isLoading={updateAnswerMutation.isPending}
				>
					Сохранить
				</Button>
				<Button
					variant='outline'
					className='text-gray-400'
					onClick={() => setIsEdit(false)}
				>
					Отмена
				</Button>
			</div>
		</div>
	);
};

export default EditAnswer;
