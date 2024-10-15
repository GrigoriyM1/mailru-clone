import QuilEditor from '@/components/ui/quil-editor/quil-editor';
import { useUserStore } from '@/store/use-user-store';
import { Button } from '@/components/ui/button';
import { MessageSquareMore } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import { IAnswerForm, IQuestion } from '@/types/questions.types';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { answerService } from '@/services/answer.service';
import { useQuestionStore } from '@/store/use-question-store';
import Avatar from '@/components/modules/Avatar';
import { IMinUser } from '@/types/auth.types';

const AddAnswer = () => {
	const { question: questionData } = useQuestionStore();
	const {
		control,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm<IAnswerForm>({
		mode: 'onChange',
	});
	const { user } = useUserStore();
	const [text, setText] = useState('');
	const queryClient = useQueryClient();

	const { mutate, data } = useMutation({
		mutationFn: () =>
			answerService.create({ text }, questionData?.id as string),
		onSuccess() {
			// console.log('data  ', data);
			queryClient.invalidateQueries({ queryKey: [`get-one-question`] });
		},
	});

	const onSubmit = () => {
		if (!text?.length || text?.length < 6) {
			return setError('text', {
				message: 'Минимальная длина ответа - 6 символов',
			});
		}
		if (text?.length > 3800) {
			return setError('text', {
				message: 'Максимальная длина ответа - 3800 символов',
			});
		}
		mutate();
	};

	return (
		<div className='p-10 bg-white max-w-full'>
			<div className='text-[24px] mb-7'>Ответить на вопрос</div>

			<div className='flex gap-5'>
				<Avatar user={user as IMinUser} />

				<form className='w-full' onSubmit={handleSubmit(onSubmit)}>
					<Controller
						name='text'
						control={control}
						render={({ field }) => (
							<QuilEditor
								className='h-[110px]'
								divProps={{
									className: 'mb-3',
								}}
								placeholder='Введите текст ответа'
								error={!!errors?.text}
								helperText={errors?.text?.message}
								onChange={(value, delta, source, editor) => {
									field.onChange(value, delta, source, editor);
									setText(editor.getText());
								}}
								value={field.value}
							/>
						)}
					/>

					<Button size='lg' className='flex items-center gap-2' type='submit'>
						<MessageSquareMore
							size={23}
							className='stroke-primary'
							fill='white'
						/>
						Ответить
					</Button>
				</form>
			</div>
		</div>
	);
};

export default AddAnswer;
