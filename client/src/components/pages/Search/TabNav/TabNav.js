import React from 'react';
import Tab from './Tab';

function TabNav({ currentTab = '', changeTab = () => null, tabs = [] }) {
	return (
		<nav className="w-full flex flex-row mb-10">
			{tabs.map(tab => (
				<Tab changeTab={changeTab} currentTab={currentTab} tab={tab} />
			))}
		</nav>
	);
}

export default TabNav;
