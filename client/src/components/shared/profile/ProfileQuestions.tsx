import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Link from 'next/link';
import { IUser } from '@/types/auth.types';
import { useParams } from 'next/navigation';
import ProfileQuestionsList from './ProfileQuestionsList';
import ProfileAnswersList from './ProfileAnswersList';

interface IProfileQuestionsProps {
	data: IUser | undefined;
	isAnswers?: boolean;
}

const ProfileQuestions: React.FC<IProfileQuestionsProps> = ({
	data,
	isAnswers,
}) => {
	const { category } = useParams();

	const CATEGORY_URL = isAnswers
		? `/profile/${data?.id}/answers`
		: `/profile/${data?.id}/questions`;

	return (
		<div className='px-10 mt-5'>
			<TabContext
				value={
					(category as string | number) === 'all' ||
					(category as string | number) === 'resolve'
						? (category as string | number)
						: 'all'
				}
			>
				<Box>
					<TabList>
						<Tab
							label='Все'
							value='all'
							LinkComponent={Link}
							href={`${CATEGORY_URL}/all`}
						/>
						<Tab
							label='Решенные'
							value='resolve'
							LinkComponent={Link}
							href={`${CATEGORY_URL}/resolve`}
						/>
					</TabList>
				</Box>

				<TabPanel value='all' sx={{ padding: 0 }}>
					{isAnswers ? (
						<ProfileAnswersList isAnswers={isAnswers} />
					) : (
						<ProfileQuestionsList isAnswers={isAnswers} />
					)}
				</TabPanel>
				<TabPanel value='resolve' sx={{ padding: 0 }}>
					{isAnswers ? (
						<ProfileAnswersList isAnswers={isAnswers} />
					) : (
						<ProfileQuestionsList isAnswers={isAnswers} />
					)}
				</TabPanel>
			</TabContext>
		</div>
	);
};

export default ProfileQuestions;
