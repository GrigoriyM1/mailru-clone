import cn from 'clsx';

interface IModalProps extends React.HTMLAttributes<HTMLDivElement> {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

const Modal: React.FC<IModalProps> = ({
	isOpen,
	onClose,
	className,
	children,
	...props
}) => {
	if (!isOpen) return null;

	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center'>
			<div
				className='fixed inset-0 bg-black opacity-50'
				onClick={onClose}
			></div>

			<div
				className={cn('bg-white rounded-lg z-10 px-6 py-4', className)}
				{...props}
			>
				{children}
			</div>
		</div>
	);
};

export default Modal;
