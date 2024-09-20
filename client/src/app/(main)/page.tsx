'use client'

import Dropdown from '@/components/ui/dropdown';
import { useState } from 'react';

const MainPage = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='pt-52 px-5'>
			{/* <button onClick={handleToggle}>Открыть</button> */}
			<button onClick={() => setIsOpen(prev => !prev)} id='testf'>
				Открыть
			</button>

			<Dropdown isOpen={isOpen} setIsOpen={setIsOpen}>
				hello
			</Dropdown>
		</div>
	);
};

export default MainPage;
