import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Link from 'next/link';
import { IUser } from '@/types/auth.types';
import { useParams } from 'next/navigation';
import ProfileQuestionsList from './ProfileQuestionsList';

const ProfileQuestions = ({ data }: { data: IUser | undefined }) => {
	const { category } = useParams();

	const CATEGORY_URL = `/profile/${data?.id}/questions`;

	return (
		<div className='px-10 mt-5'>
			<TabContext value={(category as string | number) || 'all'}>
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
					<ProfileQuestionsList />
				</TabPanel>
				<TabPanel value='resolve' sx={{ padding: 0 }}>
					<ProfileQuestionsList />
				</TabPanel>
			</TabContext>
		</div>
	);
};

export default ProfileQuestions;
