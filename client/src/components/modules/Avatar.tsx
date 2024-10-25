import {
	Avatar as AvatarUi,
	AvatarFallback,
	AvatarImage,
} from '@/components/ui/avatar';
import { IMinUser } from '@/types/auth.types';
import Link from 'next/link';

interface IAvatarProps extends React.ComponentProps<typeof AvatarUi> {
	user: IMinUser;
	isLink?: boolean;
	avatarFallbackProps?: React.ComponentProps<typeof AvatarFallback>;
}

const Avatar: React.FC<IAvatarProps> = ({
	user,
	isLink = true,
	avatarFallbackProps,
	...props
}) => {
	return isLink ? (
		<Link href={`/profile/${user?.id}`}>
			<AvatarUi {...props}>
				<AvatarImage src={user?.avatar} alt={user?.name} />
				<AvatarFallback {...avatarFallbackProps}>
					{user?.name?.toUpperCase()[0]}
				</AvatarFallback>
			</AvatarUi>
		</Link>
	) : (
		<AvatarUi {...props}>
			<AvatarImage src={user?.avatar} alt={user?.name} />
			<AvatarFallback {...avatarFallbackProps}>
				{user?.name?.toUpperCase()[0]}
			</AvatarFallback>
		</AvatarUi>
	);
};

export default Avatar;
