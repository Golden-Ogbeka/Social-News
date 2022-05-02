import { Popover } from '@headlessui/react/dist';
import { MenuIcon } from '@heroicons/react/outline';
import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../utils/AppContext';

function FloatingAccessButton() {
	const { contextVariables, setContextVariables } =
		React.useContext(AppContext);
	return (
		<>
			<Popover className=" bottom-5 right-5 lg:hidden z-10 fixed">
				<Popover.Button>
					<button className="w-16 h-16 bg-[#251A6A]  rounded-full text-white justify-center flex items-center focus:bg-purple-500 ">
						<MenuIcon className="w-8 h-8" />
					</button>
				</Popover.Button>

				<Popover.Panel className="absolute bottom-20 right-0 z-10  rounded-lg shadow-lg">
					<div className="bg-white w-36 h-full flex flex-col p-4 font-sans">
						<Popover.Button className="mb-2  text-right">
							<Link
								to="/newsStand"
								className="text-lg text-gray-500 focus:bg-purple-50 focus:text-[#251A6A] mb-2"
							>
								News Stand
							</Link>
						</Popover.Button>
						<Popover.Button className="mb-2 text-right">
							<Link
								to="/profile"
								className="text-lg text-gray-500 focus:bg-purple-50 focus:text-[#251A6A] mb-2"
							>
								Profile
							</Link>
						</Popover.Button>
						<Popover.Button className="mb-2 text-right">
							<Link
								to="/posts"
								className="text-lg text-gray-500 focus:bg-purple-50 focus:text-[#251A6A] mb-2"
							>
								Posts
							</Link>
						</Popover.Button>
						<Popover.Button className="mb-2 text-right">
							<Link
								to="/followers"
								className="text-lg text-gray-500 focus:bg-purple-50 focus:text-[#251A6A] mb-2"
							>
								Followers
							</Link>
						</Popover.Button>
						<Popover.Button className="mb-2 text-right">
							<Link
								to="/mentors"
								className="text-lg text-gray-500 focus:bg-purple-50 focus:text-[#251A6A] mb-2"
							>
								Mentors
							</Link>
						</Popover.Button>
						<Popover.Button className="mb-2 text-right">
							<Link
								to="/search"
								className="text-lg text-gray-500 focus:bg-purple-50 focus:text-[#251A6A] mb-2"
							>
								Search
							</Link>
						</Popover.Button>
						<Popover.Button className="mb-2 text-right">
							<Link
								to="/settings"
								className="text-lg text-gray-500 focus:bg-purple-50 focus:text-[#251A6A] mb-2"
							>
								Settings
							</Link>
						</Popover.Button>
						<Popover.Button className="text-right">
							<Link
								to="#/"
								className="text-lg text-gray-500 focus:bg-purple-50 focus:text-[#251A6A] mb-2"
								onClick={() =>
									setContextVariables({
										...contextVariables,

										signOutModalState: true,
									})
								}
							>
								Sign out
							</Link>
						</Popover.Button>
					</div>

					<img src="/solutions.jpg" alt="" />
				</Popover.Panel>
			</Popover>
		</>
	);
}

export default FloatingAccessButton;
