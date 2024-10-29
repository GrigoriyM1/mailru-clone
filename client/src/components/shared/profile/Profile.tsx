import { IUser } from '@/types/auth.types';
import ProfileTop from './ProfileTop';
import ProfileQuestions from './ProfileQuestions';

interface IProfileProps {
	data: IUser | undefined;
	isAnswers?: boolean;
}

const Profile: React.FC<IProfileProps> = ({ data, isAnswers }) => {
	return (
		<div className='bg-white w-full'>
			<ProfileTop data={data} />
			<ProfileQuestions data={data} isAnswers={isAnswers} />
		</div>
	);
};

export default Profile;
