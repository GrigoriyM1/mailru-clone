import * as React from 'react';

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import {
	EMAIL_DOMAINS,
	DEFAULT_EMAIL_DOMAIN,
} from '@/constants/auth.constants';

export default function SelectScrollable() {
	return (
		<>
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
		</>
	);
}
