import * as React from 'react';
import { cn } from '@/lib/utils';
import { Label } from './label';

export interface TextareaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string;
	maxLength: number;
	divProps?: React.HTMLAttributes<HTMLDivElement>;
	error?: boolean; // Булевый флаг для ошибки
	helperText?: string; // Текст ошибки или вспомогательный текст
	setIsError?: (isError: boolean) => void;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	(
		{
			className,
			label,
			divProps,
			required,
			maxLength,
			onChange,
			error,
			helperText,
			setIsError,
			...props
		},
		ref
	) => {
		const [lengthLeft, setLengthLeft] = React.useState(maxLength);
		const hasError = error || lengthLeft < 0; // Определяем, есть ли ошибка

		React.useEffect(() => {
			if (setIsError) {
				setIsError(hasError);
			}
		}, [lengthLeft, error, setIsError]);

		return (
			<div {...divProps}>
				<div className='flex justify-between'>
					{label && (
						<Label
							className='text-[18px] font-semibold text-black mb-1'
							htmlFor={props?.id}
						>
							{label} {required && <span className='text-red-600'>*</span>}
						</Label>
					)}

					<div className={cn(hasError && 'text-red-600')}>{lengthLeft}</div>
				</div>
				<textarea
					className={cn(
						'flex min-h-[90px] w-full rounded-md outline-none focus:border-gray-600 transition border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 resize-none',
						hasError
							? 'border-red-600 focus:border-red-600'
							: 'border-gray-300',
						className
					)}
					ref={ref}
					onChange={e => {
						setLengthLeft(maxLength - e.target.value.length);
						onChange?.(e);
					}}
					{...props}
				/>
				{hasError && helperText && (
					<p className='text-red-600 text-sm mt-2'>{helperText}</p>
				)}
			</div>
		);
	}
);
Textarea.displayName = 'Textarea';

export { Textarea };
