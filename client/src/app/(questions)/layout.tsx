'use client';

import QuestionLeadersSidebar from '@/components/shared/QuestionLeaders/QuestionLeadersSidebar';
import { PropsWithChildren } from 'react';

const QuestionsLayout: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className='flex'>
			<div className='max-w-[280px] w-full p-4'>
				<QuestionLeadersSidebar />
			</div>

			{children}
		</div>
	);
};

export default QuestionsLayout;
