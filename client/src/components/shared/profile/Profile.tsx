import { IUser } from '@/types/auth.types';
import ProfileTop from './ProfileTop';
import ProfileQuestions from './ProfileQuestions';

const Profile = ({ data }: { data: IUser | undefined }) => {
	return (
		<div className='bg-white w-full'>
			<ProfileTop data={data} />
			<ProfileQuestions data={data} />
		</div>
	);
};

export default Profile;
