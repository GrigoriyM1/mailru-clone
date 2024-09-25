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
import { Control, useWatch } from 'react-hook-form';

interface IEmailInputProps extends InputProps {
	variant?: 'default' | 'expanded';
	control?: Control<any, any>;
}

const EmailInput = forwardRef<HTMLInputElement, IEmailInputProps>(
	({ variant = 'default', helperText, control, ...props }, ref) => {
		const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			handleInput(e);

			props?.onChange?.(e);
		};
		const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
			e.target.value = formatEmailInput(e.target.value, variant);
		};

		const email: string = useWatch({ control, name: 'email.email' });

		return (
			<div>
				<div className='flex items-end'>
					{variant === 'default' ? (
						<>
							<Input
								{...props}
								ref={ref}
								onChange={handleChange}
								onInput={handleInput}
							/>
							<FormField
								control={control}
								name='email.domain'
								render={({ field }) => (
									<Select
										defaultValue={field.value}
										onValueChange={field.onChange}
									>
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
							/>
						</>
					) : (
						<>
							<Input
								{...props}
								ref={ref}
								onChange={handleChange}
								onInput={handleInput}
							/>
							{!email?.includes('@') && (
								<FormField
									control={control}
									name='email.domain'
									render={({ field }) => (
										<Select
											defaultValue={field.value}
											onValueChange={field.onChange}
										>
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
								/>
							)}
						</>
					)}
				</div>

				<div>{helperText && <ErrorText>{helperText}</ErrorText>}</div>
			</div>
		);
	}
);

EmailInput.displayName = 'EmailInput';

export default EmailInput;
