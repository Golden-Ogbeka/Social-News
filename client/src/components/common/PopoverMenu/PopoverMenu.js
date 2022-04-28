import { Popover } from '@headlessui/react';
import React from 'react';
import MoreIcon from '../Icons/MoreIcon';

function PopoverMenu({ type, children }) {
	return (
		<Popover className="absolute top-0 right-0">
			<Popover.Button>{type === 'menu' && <MoreIcon />}</Popover.Button>
			<Popover.Panel className="absolute top-5 right-0 rounded-[10px] shadow-lg z-10">
				<div className="bg-white w-[175px] h-full p-4 pt-7 pb-7 flex flex-col items-center gap-[21px] rounded-[10px]">
					{children}
				</div>
			</Popover.Panel>
		</Popover>
	);
}

export default PopoverMenu;
