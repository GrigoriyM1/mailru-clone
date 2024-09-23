import React, { forwardRef } from 'react';

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { EMAIL_DOMAINS } from '@/constants/auth.constants';
import { Input, InputProps } from './input';
import { formatEmailInput } from '@/lib/format-email-input';
import cn from 'clsx';
import ErrorText from './error-text';
import { FormField } from './form';
import { Control, UseFormRegister } from 'react-hook-form';

interface IEmailInputProps extends InputProps {
	variant?: 'default' | 'expanded';
	control: Control<any, any>;
}

const EmailInput = forwardRef<HTMLInputElement, IEmailInputProps>(
	({ variant = 'default', helperText, control, ...props }, ref) => {
		const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			e.target.value = formatEmailInput(e.target.value);

			props?.onChange?.(e);
		};

		return (
			<div>
				<div className='flex items-end'>
					<Input {...props} ref={ref} onChange={handleChange} />

					{/* <FormField
						control={control}
						name='email.domain'
						render={({ field }) => (
							<Select defaultValue={field.value} onValueChange={field.onChange}>
								<SelectTrigger
									className={cn(!!props.error && 'border-red-400')}
								>
									<SelectValue />
								</SelectTrigger>
								<SelectContent>
									{EMAIL_DOMAINS.map(domain => (
										<SelectItem key={domain} value={domain}>
											{domain}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						)}
					/> */}

					<Select 
						// defaultValue={field.value} onValueChange={field.onChange}
						
					>
						<SelectTrigger className={cn(!!props.error && 'border-red-400')}>
							<SelectValue />
						</SelectTrigger>
						<SelectContent>
							{EMAIL_DOMAINS.map(domain => (
								<SelectItem key={domain} value={domain}>
									{domain}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>

				<div>{helperText && <ErrorText>{helperText}</ErrorText>}</div>
			</div>
		);
	}
);

EmailInput.displayName = 'EmailInput';

export default EmailInput;
