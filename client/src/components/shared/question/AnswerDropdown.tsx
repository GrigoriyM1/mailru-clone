import Dropdown from '@/components/ui/dropdown';
import { useQuestionStore } from '@/store/use-question-store';
import { useUserStore } from '@/store/use-user-store';
import { IMinUser } from '@/types/auth.types';
import { OctagonAlert, Pencil, SquarePen, Star, Trash2 } from 'lucide-react';

interface IAnswerDropdownProps {
	isOpen: boolean;
	setIsOpen: (value: boolean) => void;
	handleId: string;
	answerUser: IMinUser;
	isEdit: boolean;
	setIsEdit: (value: boolean) => void;
}

const AnswerDropdown: React.FC<IAnswerDropdownProps> = ({
	isOpen,
	setIsOpen,
	handleId,
	answerUser,
	isEdit,
	setIsEdit,
}) => {
	const { user } = useUserStore();
	const { question } = useQuestionStore();

	const isMyAnswer = answerUser?.id === user?.id;

	const handleIsEdit = () => {
		setIsEdit(true);
	};

	return (
		<Dropdown
			handleBtnId={`#question-dropdown-open-${handleId}`}
			isOpen={isOpen}
			setIsOpen={setIsOpen}
			className='w-[250px] absolute top-7 right-0 bg-white shadow-big py-2'
		>
			{isMyAnswer ? (
				<>
					<div
						className='hover:bg-gray-200 p-3 cursor-pointer transition flex items-center gap-4 text-[15px]'
						onClick={handleIsEdit}
					>
						<Pencil className='w-[16px] h-[16px]' />
						<div className='flex items-center'>
							<div>Редактировать</div>
						</div>
					</div>
					<div className='hover:bg-gray-200 p-3 cursor-pointer transition flex items-center gap-4 text-[15px]'>
						<Trash2 className='w-[16px] h-[16px]' />
						<div>Удалить</div>
					</div>
				</>
			) : (
				<>
					<div className='hover:bg-gray-200 p-3 cursor-pointer transition flex items-center gap-4 text-[15px]'>
						<OctagonAlert className='w-[16px] h-[16px]' />
						<div>Пожаловаться</div>
					</div>
				</>
			)}
		</Dropdown>
	);
};

export default AnswerDropdown;
