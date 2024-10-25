import { useModalsStore } from '@/store/use-modals-store';
import AdditionalModal from './modals/AdditionalModal';
import EditQuestionModal from './modals/EditQuestionModal';
import LikedByModal from './modals/LikedByModal';
import LoginModal from './modals/LoginModal';
import EditProfileModal from './modals/EditProfileModal';

const Modals = () => {
	const { isEditQuestionModalOpen, isEditProfileModalOpen } = useModalsStore();

	return (
		<>
			<LoginModal />
			<LikedByModal />
			<AdditionalModal />
			{isEditQuestionModalOpen && <EditQuestionModal />}
			{isEditProfileModalOpen && <EditProfileModal />}
		</>
	);
};

export default Modals;
