import React from 'react';
import Navbar from '../layout/Navbar';
import Sidebar from './Sidebar';

function AppLayout({ children }) {
	return (
		<>
			<Navbar />
			<div className="relative">
				<Sidebar />
				<div className="mt-14 absolute lg:left-[15%] pl-7 pr-7 pt-5 pb-5 w-full lg:w-[calc(100%-15%)]">
					{children}
				</div>
			</div>
		</>
	);
}

export default AppLayout;
