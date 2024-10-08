import Dropdown from '@/components/ui/dropdown';
import { useModalsStore } from '@/store/use-modals-store';
import { OctagonAlert, Pencil, SquarePen, Star, Trash2 } from 'lucide-react';

interface IQuestionDropdownProps {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
	isMyQuestion: boolean;
}

const QuestionDropdown: React.FC<IQuestionDropdownProps> = ({
	isOpen,
	setIsOpen,
	isMyQuestion,
}) => {
	const { isAdditionalModalOpen, setIsAdditionalModalOpen } = useModalsStore();

	const handleOpenAdditional = () => {
		setIsAdditionalModalOpen(!isAdditionalModalOpen);
		setIsOpen(false);
	};

	return (
		<Dropdown
			handleBtnId='#question-dropdown-open'
			isOpen={isOpen}
			setIsOpen={setIsOpen}
			className='w-[250px] absolute top-7 right-0 bg-white shadow-big py-2'
		>
			{isMyQuestion ? (
				<>
					<div className='hover:bg-gray-200 p-3 cursor-pointer transition flex items-center gap-4 text-[15px]'>
						<Pencil className='w-[16px] h-[16px]' />
						<div className='flex items-center'>
							<div>Редактировать</div>
							<div className='ml-2'>(29:40)</div>
						</div>
					</div>
					<div
						className='hover:bg-gray-200 p-3 cursor-pointer transition flex items-center gap-4 text-[15px]'
						onClick={handleOpenAdditional}
					>
						<SquarePen className='w-[16px] h-[16px]' />
						<div>Дополнить</div>
					</div>
					<div className='hover:bg-gray-200 p-3 cursor-pointer transition flex items-center gap-4 text-[15px]'>
						<Trash2 className='w-[16px] h-[16px]' />
						<div>Удалить</div>
					</div>
					<div className='hover:bg-gray-200 p-3 cursor-pointer transition flex items-center gap-4 text-[15px]'>
						<Star className='w-[16px] h-[16px]' fill='black' />
						<div>Сделать лидером</div>
					</div>
				</>
			) : (
				<>
					<div className='hover:bg-gray-200 p-3 cursor-pointer transition flex items-center gap-4 text-[15px]'>
						<Star className='w-[16px] h-[16px]' fill='black' />
						<div>Сделать лидером</div>
					</div>
					<div className='hover:bg-gray-200 p-3 cursor-pointer transition flex items-center gap-4 text-[15px]'>
						<OctagonAlert className='w-[16px] h-[16px]' />
						<div>Пожаловаться</div>
					</div>
				</>
			)}
		</Dropdown>
	);
};

export default QuestionDropdown;
