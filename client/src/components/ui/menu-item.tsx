import cn from 'clsx';
import Link from 'next/link';

interface IMenuItemProps {
	component?: React.ElementType;
	icon?: React.ElementType;
	href?: string;
}

const MenuItem: React.FC<
	IMenuItemProps & React.HTMLAttributes<HTMLAnchorElement>
> = ({
	component: Component = Link,
	className,
	href,
	icon: Icon,
	...props
}) => {
	return (
		<Component
			href={href}
			className={cn(
				'cursor-pointer transition bg-white hover:bg-accent p-[8px] rounded-md w-full flex items-center gap-3 text-[15px] font-light',
				className
			)}
			{...props}
		>
			{Icon && (
				<Icon
					className={cn(
						'text-gray-400 w-[20px] h-[20px]',
						(Icon as any)?.props?.className
					)}
				/>
			)}
			{props.children}
		</Component>
	);
};

export default MenuItem;
