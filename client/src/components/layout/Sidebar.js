import React from 'react';
import {
	HomeIcon,
	UserIcon,
	DocumentDuplicateIcon,
	UserGroupIcon,
	SparklesIcon,
	SearchIcon,
	CogIcon,
	LogoutIcon,
} from '@heroicons/react/outline';

import { Link, NavLink } from 'react-router-dom';

import { SignoutModalContext } from '../../contexts/SignoutModalProvider';

function Sidebar() {
	const { openModal } = React.useContext(SignoutModalContext);

	return (
		<nav className="w-[15%] bg-white h-full fixed mt-14 shadow-inner hidden lg:block">
			<NavLink
				exact
				to="/newsStand"
				className="flex p-5 font-sans items-center text-lg text-gray-500 hover:bg-purple-50 hover:text-[#251A6A]"
				activeStyle={{
					backgroundColor: '#251A6A',
					color: 'white',
				}}
			>
				<HomeIcon width={24} height={24} className="mr-5" />
				<span>News Stand</span>
			</NavLink>
			<NavLink
				exact
				to="/profile"
				className="flex p-5 font-sans items-center text-lg text-gray-500 hover:bg-purple-50 hover:text-[#251A6A]"
				activeStyle={{
					backgroundColor: '#251A6A',
					color: 'white',
				}}
			>
				<UserIcon width={24} height={24} className="mr-5" />
				<span>Profile</span>
			</NavLink>
			<NavLink
				exact
				to="/posts"
				className="flex p-5 font-sans items-center text-lg text-gray-500 hover:bg-purple-50 hover:text-[#251A6A]"
				activeStyle={{
					backgroundColor: '#251A6A',
					color: 'white',
				}}
			>
				<DocumentDuplicateIcon
					width={24}
					height={24}
					className="mr-5"
				/>
				<span>Posts</span>
			</NavLink>
			<NavLink
				exact
				to="/followers"
				className="flex p-5 font-sans items-center text-lg text-gray-500 hover:bg-purple-50 hover:text-[#251A6A]"
				activeStyle={{
					backgroundColor: '#251A6A',
					color: 'white',
				}}
			>
				<UserGroupIcon width={24} height={24} className="mr-5" />
				<span>Followers</span>
			</NavLink>
			<NavLink
				exact
				to="/mentors"
				className="flex p-5 font-sans items-center text-lg text-gray-500 hover:bg-purple-50 hover:text-[#251A6A]"
				activeStyle={{
					backgroundColor: '#251A6A',
					color: 'white',
				}}
			>
				<SparklesIcon width={24} height={24} className="mr-5" />
				<span>Mentors</span>
			</NavLink>
			<NavLink
				exact
				to="/search"
				className="flex p-5 font-sans items-center text-lg text-gray-500 hover:bg-purple-50 hover:text-[#251A6A]"
				activeStyle={{
					backgroundColor: '#251A6A',
					color: 'white',
				}}
			>
				<SearchIcon width={24} height={24} className="mr-5" />
				<span>Search</span>
			</NavLink>
			<NavLink
				exact
				to="/settings"
				className="flex p-5 font-sans items-center text-lg text-gray-500 hover:bg-purple-50 hover:text-[#251A6A]"
				activeStyle={{
					backgroundColor: '#251A6A',
					color: 'white',
				}}
			>
				<CogIcon width={24} height={24} className="mr-5" />
				<span>Settings</span>
			</NavLink>
			<Link
				exact
				to="#/"
				className="flex p-5 font-sans items-center text-lg text-gray-500 hover:bg-purple-50 hover:text-[#251A6A]"
				activeStyle={{
					backgroundColor: '#251A6A',
					color: 'white',
				}}
				onClick={openModal}
			>
				<LogoutIcon width={24} height={24} className="mr-5" />
				<span>Sign out</span>
			</Link>
		</nav>
	);
}

export default Sidebar;
