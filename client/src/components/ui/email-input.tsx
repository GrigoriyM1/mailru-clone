import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import {
	DEFAULT_EMAIL_DOMAIN,
	EMAIL_DOMAINS,
} from '@/constants/auth.constants';
import { Input, InputProps } from './input';
import { formatEmailInput } from '@/lib/format-email-input';

interface IEmailInputProps extends InputProps {
	variant?: 'default' | 'expanded';
}

const EmailInput: React.FC<IEmailInputProps> = ({
	variant = 'default',
	...props
}) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.target.value = formatEmailInput(e.target.value);
    console.log(e.target.value);

		props?.onChange?.(e);
	};

	return (
		<div className='flex items-end'>
			<Input {...props} onChange={handleChange} />

			<Select defaultValue={DEFAULT_EMAIL_DOMAIN}>
				<SelectTrigger>
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
	);
};

export default EmailInput;
