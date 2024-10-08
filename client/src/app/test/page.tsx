'use client';

import { useEffect, useState } from 'react';
import { IAnswerForm } from '@/types/questions.types';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import QuilEditor from '@/components/ui/quil-editor/quil-editor';

export default function App() {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<IAnswerForm>({
		mode: 'onChange',
		resolver: zodResolver(
			z.object({
				text: z
					.string()
					.min(6, { message: 'Минимальная длина - 6 символов' })
					.max(3800, {
						message: 'Максимальная длина ответа - 3800 символов',
					}),
			})
		),
	});

	const onSubmit = (data: IAnswerForm) => {
		console.log('data  ', data);
	};

	return (
		<div className='flex'>
			<div className='w-[280px] p-4'>
				<div>
					<a href='///#endregion'>dsadjasdjsaodaosjd</a>
				</div>
			</div>
			<div className='p-10 bg-white max-w-full w-full'>
				<div className='text-[24px] mb-7'>Ответить на вопрос</div>

				<div className='flex gap-5 w-full'>
					<form className='w-full' onSubmit={handleSubmit(onSubmit)}>
						<Controller
							name='text'
							control={control}
							render={({ field }) => (
								<QuilEditor
									className='h-[110px] mb-3 w-full'
									placeholder='Введите текст ответа'
									onChange={field.onChange}
									value={field.value}
									error={true}
									helperText={'loldaslasdlasd'}
								/>
							)}
						/>
					</form>
				</div>
			</div>
		</div>
	);
}
