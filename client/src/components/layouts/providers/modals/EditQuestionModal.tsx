import { Button } from '@/components/ui/button';
import { FormField } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import Modal from '@/components/ui/modal';
import QuilEditor from '@/components/ui/quil-editor/quil-editor';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useModalsStore } from '@/store/use-modals-store';
import { X } from 'lucide-react';
import { upperFirstLetter } from '@/lib/upper-first-letter';
import cn from 'clsx';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { questionsService } from '@/services/questions.service';
import { Spinner } from '@/components/ui/spinner';
import { useForm, useWatch, Controller } from 'react-hook-form';
import { IQuestionForm } from '@/types/questions.types';
import { askQuestionSchema } from '@/schemas/ask-question.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useQuestionStore } from '@/store/use-question-store';

const EditQuestionModal = () => {
	const { isEditQuestionModalOpen, setIsEditQuestionModalOpen } =
		useModalsStore();
	const { question } = useQuestionStore();
	const queryClient = useQueryClient();

	const onClose = () => {
		setIsEditQuestionModalOpen(false);
	};

	const {
		register,
		control,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<IQuestionForm>({
		resolver: zodResolver(askQuestionSchema),
		mode: 'onChange',
		defaultValues: {
			text: question?.text,
			themeText: question?.themeText,
			category: question?.category,
			subcategory: question?.subcategory,
		},
	});
	const { text, themeText, category, subcategory } = useWatch({ control });
	const [isLoading, setIsLoading] = useState(false);
	const [isThemeError, setIsThemeError] = useState(false);
	const [isTextError, setIsTextError] = useState(false);

	const { data: categories, isPending } = useQuery({
		queryKey: ['categories'],
		queryFn: () => {
			return questionsService.getCategories();
		},
	});

	const { mutate, data: editedQuestion } = useMutation({
		mutationKey: ['edit-question'],
		mutationFn: (data: IQuestionForm) =>
			questionsService.update(question?.id!, data),
		onSuccess(data) {
			onClose();
			queryClient.invalidateQueries({ queryKey: [`get-one-question`] });
		},
	});

	const onSubmit = (data: IQuestionForm) => {
		setIsLoading(true);
		mutate(data);
	};

	const handleInputsChange = (type: keyof IQuestionForm, e: any) => {
		register(type).onChange(e);
	};

	return (
		<Modal
			isOpen={isEditQuestionModalOpen}
			onClose={onClose}
			className='max-w-[680px] w-full max-h-[95vh] overflow-y-auto'
		>
			<div className='flex justify-between'>
				<div className='text-[24px] mb-8'>Редактировать вопрос</div>

				<X className='cursor-pointer' onClick={onClose} />
			</div>

			<div>
				{isPending ? (
					<div>
						<Spinner />
					</div>
				) : (
					<form onSubmit={handleSubmit(onSubmit)}>
						<Textarea
							id='question-theme'
							label='Тема вопроса'
							required
							className='text-[15px]'
							maxLength={120}
							divProps={{
								className: 'mb-6',
							}}
							error={!!errors?.themeText}
							helperText={errors?.themeText?.message}
							setIsError={setIsThemeError}
							{...register('themeText')}
							onChange={e => {
								e.target.value = upperFirstLetter(e.target.value);
								// register('themeText').onChange(e);
								handleInputsChange('themeText', e);
							}}
						/>

						<Controller
							name='text'
							control={control}
							render={({ field }) => (
								<QuilEditor
									id='question-text'
									label='Текст вопроса'
									className='text-[15px]'
									maxLength={3800}
									setIsError={setIsTextError}
									onChange={(value, delta, source, editor) => {
										field.onChange(value, delta, source, editor);
									}}
									value={field.value}
								/>
							)}
						/>

						<div className={'flex justify-between gap-4 mt-6'}>
							<div className='w-full'>
								<Label className='text-[18px] font-semibold text-black mb-1 w-full'>
									Категория <span className='text-red-600'>*</span>
								</Label>

								<FormField
									control={control}
									name='category'
									render={({ field }) => (
										<Select
											onValueChange={e => {
												field.onChange(e);
												setValue('subcategory', '');
											}}
											value={field.value}
										>
											<SelectTrigger
												className={cn(
													'w-full h-[50px] text-[17px] ask-question-select-trigger',
													!category && 'text-gray-400'
												)}
											>
												<SelectValue placeholder='Выберите категорию' />
											</SelectTrigger>
											<SelectContent>
												<SelectGroup>
													{categories &&
														Object?.keys(categories)?.map(key => (
															<SelectItem value={key} key={key}>
																{categories[key].name}
															</SelectItem>
														))}
												</SelectGroup>
											</SelectContent>
										</Select>
									)}
								/>
							</div>
							<div className='w-full'>
								<Label className='text-[18px] font-semibold text-black mb-1 w-full'>
									Подкатегория <span className='text-red-600'>*</span>
								</Label>

								<FormField
									control={control}
									name='subcategory'
									render={({ field }) => (
										<Select
											onValueChange={field.onChange}
											value={field.value}
											disabled={!category}
										>
											<SelectTrigger
												className={cn(
													'w-full h-[50px] text-[17px] ask-question-select-trigger',
													!subcategory && 'text-gray-400'
												)}
											>
												<SelectValue placeholder='Выберите подкатегорию' />
											</SelectTrigger>
											<SelectContent>
												<SelectGroup>
													{category &&
														categories?.[category] &&
														Object.keys(categories?.[category]).map(
															key =>
																key !== 'name' && (
																	<SelectItem value={key} key={key}>
																		{categories[category][key]}
																	</SelectItem>
																)
														)}
												</SelectGroup>
											</SelectContent>
										</Select>
									)}
								/>
							</div>
						</div>
						<div className='flex gap-2 mt-6'>
							<Button
								type='submit'
								size='lg'
								disabled={
									!text ||
									!themeText ||
									!category ||
									!subcategory ||
									!!Object.keys(errors).length ||
									isThemeError ||
									isTextError
								}
								isLoading={isLoading}
							>
								Сохранить вопрос
							</Button>

							<Button variant='ghost' size='lg' onClick={onClose}>
								Отмена
							</Button>
						</div>
					</form>
				)}
			</div>
		</Modal>
	);
};

export default EditQuestionModal;
