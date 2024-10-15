import { useModalsStore } from '@/store/use-modals-store';
import AdditionalModal from './modals/AdditionalModal';
import EditQuestionModal from './modals/EditQuestionModal';
import LikedByModal from './modals/LikedByModal';
import LoginModal from './modals/LoginModal';

const Modals = () => {
	const { isEditQuestionModalOpen } = useModalsStore();

	return (
		<>
			<LoginModal />
			<LikedByModal />
			<AdditionalModal />
			{isEditQuestionModalOpen && <EditQuestionModal />}
		</>
	);
};

export default Modals;
