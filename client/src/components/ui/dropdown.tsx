'use client';

import React, { useEffect, useRef } from 'react';
import cn from 'clsx';
import { useClickAway } from 'react-use';

interface IDropdownProps extends React.HTMLAttributes<HTMLDivElement> {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
	handleBtnId: string;
}

const Dropdown: React.FC<IDropdownProps> = ({
	children,
	isOpen,
	setIsOpen,
	className,
	handleBtnId,
	...props
}) => {
	const dropdownRef = useRef<HTMLDivElement>(null);

	useClickAway(dropdownRef, event => {
		const target = event.target as HTMLElement;
		if (isOpen && !target.closest(handleBtnId)) {
			setIsOpen(false);
		}
	});

	return (
		<div
			ref={dropdownRef}
			className={cn(
				'transition-all duration-300 ease-in-out',
				isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 invisible',
				className
			)}
			{...props}
		>
			{children}
		</div>
	);
};

export default Dropdown;
