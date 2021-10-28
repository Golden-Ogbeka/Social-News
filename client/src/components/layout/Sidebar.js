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

import { NavLink } from 'react-router-dom';

function Sidebar() {
	return (
		<nav className='w-1/6 bg-white h-full fixed  shadow-inner'>
			<NavLink
				exact
				to='/newsStand'
				className='flex p-5 font-sans items-center text-lg text-gray-500 hover:bg-purple-50 hover:text-purple-900'
				activeStyle={{
					backgroundColor: '#251A6A',
					color: 'white',
				}}
			>
				<HomeIcon width={24} height={24} className='mr-5' />
				<span>News Stand</span>
			</NavLink>
			<NavLink
				exact
				to='/profile'
				className='flex p-5 font-sans items-center text-lg text-gray-500 hover:bg-purple-50 hover:text-purple-900'
				activeStyle={{
					backgroundColor: '#251A6A',
					color: 'white',
				}}
			>
				<UserIcon width={24} height={24} className='mr-5' />
				<span>Profile</span>
			</NavLink>
			<NavLink
				exact
				to='/profile'
				className='flex p-5 font-sans items-center text-lg text-gray-500 hover:bg-purple-50 hover:text-purple-900'
				activeStyle={{
					backgroundColor: '#251A6A',
					color: 'white',
				}}
			>
				<DocumentDuplicateIcon width={24} height={24} className='mr-5' />
				<span>Posts</span>
			</NavLink>
			<NavLink
				exact
				to='/profile'
				className='flex p-5 font-sans items-center text-lg text-gray-500 hover:bg-purple-50 hover:text-purple-900'
				activeStyle={{
					backgroundColor: '#251A6A',
					color: 'white',
				}}
			>
				<UserGroupIcon width={24} height={24} className='mr-5' />
				<span>Followers</span>
			</NavLink>
			<NavLink
				exact
				to='/profile'
				className='flex p-5 font-sans items-center text-lg text-gray-500 hover:bg-purple-50 hover:text-purple-900'
				activeStyle={{
					backgroundColor: '#251A6A',
					color: 'white',
				}}
			>
				<SparklesIcon width={24} height={24} className='mr-5' />
				<span>Mentors</span>
			</NavLink>
			<NavLink
				exact
				to='/profile'
				className='flex p-5 font-sans items-center text-lg text-gray-500 hover:bg-purple-50 hover:text-purple-900'
				activeStyle={{
					backgroundColor: '#251A6A',
					color: 'white',
				}}
			>
				<SearchIcon width={24} height={24} className='mr-5' />
				<span>Search</span>
			</NavLink>
			<NavLink
				exact
				to='/profile'
				className='flex p-5 font-sans items-center text-lg text-gray-500 hover:bg-purple-50 hover:text-purple-900'
				activeStyle={{
					backgroundColor: '#251A6A',
					color: 'white',
				}}
			>
				<CogIcon width={24} height={24} className='mr-5' />
				<span>Settings</span>
			</NavLink>
			<NavLink
				exact
				to='/profile'
				className='flex p-5 font-sans items-center text-lg text-gray-500 hover:bg-purple-50 hover:text-purple-900'
				activeStyle={{
					backgroundColor: '#251A6A',
					color: 'white',
				}}
			>
				<LogoutIcon width={24} height={24} className='mr-5' />
				<span>Sign out</span>
			</NavLink>
		</nav>
	);
}

export default Sidebar;