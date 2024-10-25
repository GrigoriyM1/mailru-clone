import { IMinUser, IUser } from '@/types/auth.types';
import Avatar from '@/components/modules/Avatar';

const ProfileTop = ({ data }: { data: IUser | undefined }) => {
	return (
		<div
			className='pt-10 px-10 flex items-center gap-7'
			style={{
				backgroundImage: 'url("/profile-bg.svg")',
				backgroundSize: '100%, 90px',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<Avatar
				className='shadow-big cursor-default select-none w-[144px] h-[144px] text-[50px]'
				user={data as IMinUser}
				isLink={false}
			/>

			<div className='flex justify-between w-full'>
				<div>
					<div>
						{data?.name} {data?.lastName}
					</div>
					<div className='text-gray-400'>{data?.level}</div>
					<div className='text-gray-400'>{data?.description}</div>
				</div>

				<div className='flex text-center gap-8'>
					<div>
						<div className='font-bold'>{data?.points}</div>
						<div className='text-gray-400'>балла</div>
					</div>
					<div>
						{/* TODO: ЭТО ПОТОМ СДЕЛАТЬ */}
						<div className='font-bold'>0</div>
						<div className='text-gray-400'>КПД</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileTop;
