import cn from 'clsx';

const ErrorText: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
	children,
	className,
	...props
}) => {
	return (
		<p className={cn('text-[12px] mt-1 text-red-500', className)}>{children}</p>
	);
};

export default ErrorText;
