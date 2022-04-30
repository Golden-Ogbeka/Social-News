import React from 'react';
import theme from '../../../theme/theme';

function Tab({ currentTab, changeTab, tab }) {
	return (
		<button
			className="w-full h-[58px] flex flex-row items-center justify-center border-[1px]  border-purple-900 hover:!bg-purple-700 transition duration-500 hover:!text-white"
			style={{
				color:
					currentTab === tab
						? theme.colors.white
						: theme.colors.black,
				backgroundColor:
					currentTab === tab
						? theme.colors.primary
						: theme.colors.white,
			}}
			onClick={() => changeTab(tab)}
		>
			{tab}
		</button>
	);
}

export default Tab;
