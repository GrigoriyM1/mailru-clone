'use client'

import React, { useState, forwardRef } from 'react';
import ReactQuill, { ReactQuillProps } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './quil-editor.scss';
import cn from 'clsx';
import { Label } from '../label';
import { Sources } from 'quill';
import { convertLengthLeft } from './convert-length-left';

interface IQuilEditorProps extends ReactQuillProps {
	label?: string;
	maxLength?: number;
	error?: boolean;
	helperText?: string;
	setIsError?: (isError: boolean) => void;
	required?: boolean;
	divProps?: React.HTMLAttributes<HTMLDivElement>;
}

const QuilEditor = forwardRef<ReactQuill, IQuilEditorProps>(
	(
		{
			label,
			required,
			helperText,
			error,
			className,
			onChange,
			divProps,
			...props
		},
		ref
	) => {
		const [editorText, setEditorText] = useState('');
		const [isFocused, setIsFocused] = useState(false);
		const [isError, setIsError] = useState(error || false); // Устанавливаем начальное состояние ошибки
		const [lengthError, setLengthError] = useState('');
		const lengthLeft = props.maxLength
			? convertLengthLeft(props.maxLength, editorText)
			: undefined;

		const handleChange = (
			html: string,
			delta: any,
			source: Sources,
			editor: ReactQuill.UnprivilegedEditor
		) => {
			setEditorText(editor.getText().trimStart());
			let errorMsg = '';

			if (props.maxLength && editorText.length > props.maxLength) {
				errorMsg = `Максимальная длина: ${props.maxLength} символов.`;
			}

			if (errorMsg) {
				setLengthError(errorMsg);
				setIsError(true);
			} else {
				setLengthError('');
				setIsError(false);
			}

			if (props?.setIsError) {
				props?.setIsError(isError);
			}

			onChange?.(html, delta, source, editor);
		};

		const modules = {
			toolbar: [
				[
					'image',
					'video',
					'link',
					'code',
					'blockquote',
					{ list: 'ordered' },
					{ list: 'bullet' },
				],
			],
		};

		return (
			<div {...divProps} className={cn('w-full', divProps?.className)}>
				{label && (
					<div className='flex justify-between'>
						<Label
							className='text-[18px] font-semibold text-black mb-1'
							htmlFor={props.id}
						>
							{label} {required && <span className='text-red-600'>*</span>}
						</Label>
						{lengthLeft !== undefined && (
							<div className={cn(isError && 'text-red-600')}>{lengthLeft}</div>
						)}
					</div>
				)}
				<ReactQuill
					className={cn(
						'react-quil flex flex-col-reverse transition max-w-full w-full h-auto border border-solid border-gray-400',
						isFocused && !error && !isError && 'border-gray-950',
						(isError || error) && 'border-red-600',
						className
					)}
					value={editorText}
					onChange={handleChange}
					modules={modules}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					ref={ref}
					{...props}
				/>
				{isError && lengthError && (
					<p className='text-red-600 text-sm mt-1'>{lengthError}</p>
				)}
				{helperText && (
					<p className='text-red-600 text-sm mt-1'>{helperText}</p>
				)}
			</div>
		);
	}
);

QuilEditor.displayName = 'QuilEditor';

export default QuilEditor;
