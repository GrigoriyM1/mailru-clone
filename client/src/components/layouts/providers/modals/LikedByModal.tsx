import Modal from '@/components/ui/modal';
import { useModalsStore } from '@/store/use-modals-store';
import Link from 'next/link';
import { X } from 'lucide-react';
import Avatar from '@/components/modules/Avatar';

const LikedByModal = () => {
	const { isLikedByModalOpen, setIsLikedByModalOpen, likedBy } =
		useModalsStore();

	const onClose = () => {
		setIsLikedByModalOpen(false);
	};

	return (
		<Modal
			isOpen={isLikedByModalOpen}
			onClose={onClose}
			className='w-[700px] max-h-[80vh] overflow-y-auto' // Ограничение по высоте и прокрутка
		>
			<div className='flex justify-between'>
				<div className='text-[24px] mb-8'>
					Понравилось {likedBy?.length} пользователям
				</div>

				<X className='cursor-pointer' onClick={onClose} />
			</div>

			<div className='grid grid-cols-2'>
				{likedBy?.map(u => (
					<div key={u?.id} className='flex gap-2 p-5 border-b border-gray-200'>
						<Avatar user={u} />

						<div>
							<Link href={`/profile/${u?.id}`} className='hover:underline'>
								{u?.name} {u?.lastName}
							</Link>
							<div className='text-sm text-gray-400'>Гуру</div>
						</div>
					</div>
				))}
			</div>
		</Modal>
	);
};

export default LikedByModal;
