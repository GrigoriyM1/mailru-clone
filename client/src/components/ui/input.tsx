import * as React from 'react';
import { cn } from '@/lib/utils';
import { Label } from './label';
import { cva, type VariantProps } from 'class-variance-authority';
import { Eye, EyeOff } from 'lucide-react';
import { formatEmailInput } from '@/lib/format-email-input';
import ErrorText from './error-text';

const inputVariants = cva(
	'block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 outline-none',
	{
		variants: {
			size: {
				sm: 'h-8 text-xs',
				md: 'h-10',
				lg: 'h-12 text-base',
			},
			error: {
				true: 'border-red-500 focus:ring-red-500',
				false: '',
			},
		},
		defaultVariants: {
			size: 'sm',
			error: false,
		},
	}
);

type InputVariantProps = VariantProps<typeof inputVariants>;

export interface InputProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
		InputVariantProps {
	label?: string;
	labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
	size?: InputVariantProps['size'];
	error?: boolean;
	helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	(
		{ type, label, onChange, labelProps = {}, className, size, error, helperText, ...props },
		ref
	) => {
		const [showPassword, setShowPassword] = React.useState(false);

		const togglePasswordVisibility = () => {
			setShowPassword(!showPassword);
		};

		return (
			<div className='w-full'>
				{label && (
					<Label
						{...labelProps}
						htmlFor={props.id}
						className={cn(labelProps?.className, error ? 'text-red-500' : '')}
					>
						{label}
					</Label>
				)}
				<div className='relative'>
					<input
						type={type === 'password' && showPassword ? 'text' : type}
						className={cn(
							'w-full',
							inputVariants({ size, error, className }),
							type === 'password' ? 'pr-10' : ''
						)}
						ref={ref}
						{...props}
						onChange={e => {
							if (type === 'email') {
								e.target.value = formatEmailInput(e.target.value, 'expanded');
							}
							onChange?.(e);
						}}
						onInput={(e: React.FormEvent<HTMLInputElement>) => {
							if (type === 'email') {
								const target = e.target as HTMLInputElement;
								target.value = formatEmailInput(target.value, 'expanded');
							}
						}}
					/>
					{type === 'password' && (
						<button
							type='button'
							onClick={togglePasswordVisibility}
							className='absolute inset-y-0 right-0 flex items-center pr-3'
						>
							{showPassword ? (
								<EyeOff className='h-5 w-5 text-gray-400' />
							) : (
								<Eye className='h-5 w-5 text-gray-400' />
							)}
						</button>
					)}
				</div>
				{helperText && (
					<ErrorText>
						{helperText}
					</ErrorText>
				)}
			</div>
		);
	}
);
Input.displayName = 'Input';

export { Input };
