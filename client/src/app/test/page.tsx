'use client';

import {
	Command,
	CommandGroup,
	CommandItem,
	CommandList,
	CommandInput,
} from '@/components/ui/command';
import { Input } from '@/components/ui/input';

export default function CommandDemo() {
	const handle = (msg: string) => console.log(msg);

	const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (e.key === 'Enter') console.log('Нажат Enter');
	};

	return (
		<Command className='rounded-lg border shadow-md md:min-w-[450px]'>
			<CommandInput />

			<CommandList>
				<CommandGroup>
					<CommandItem
						onClick={() => handle('Клик')}
						onFocus={() => handle('Фокус')}
						onKeyDown={e => handleKeyDown(e)}
					>
						<span>Поиск Emoji</span>
					</CommandItem>
					<CommandItem
						onClick={() => handle('Клик')}
						onFocus={() => handle('Фокус')}
						onKeyDown={e => handleKeyDown(e)}
					>
						<span>Поиск 2</span>
					</CommandItem>
					<CommandItem
						onClick={() => handle('Клик')}
						onFocus={() => handle('Фокус')}
						onKeyDown={e => handleKeyDown(e)}
					>
						<span>Поиск 3</span>
					</CommandItem>
				</CommandGroup>
			</CommandList>
		</Command>
	);
}
