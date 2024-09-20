import * as React from 'react';
import { cn } from '@/lib/utils';
import { Label } from './label';
import { cva, type VariantProps } from 'class-variance-authority';

const inputVariants = cva(
	'block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 outline-none',
	{
		variants: {
			size: {
				sm: 'h-8 text-xs',
				md: 'h-10',
				lg: 'h-12 text-base',
			},
		},
		defaultVariants: {
			size: 'sm',
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
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ label, labelProps = {}, className, type, size, ...props }, ref) => {
		return (
			<div className='w-full'>
				{label && (
					<Label
						{...labelProps}
						htmlFor={props.id}
						className={cn(labelProps?.className)}
					>
						{label}
					</Label>
				)}
				<input
					type={type}
					className={cn('w-full', inputVariants({ size, className }))}
					ref={ref}
					{...props}
				/>
			</div>
		);
	}
);
Input.displayName = 'Input';

export { Input };
