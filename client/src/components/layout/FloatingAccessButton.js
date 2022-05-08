import { Popover } from '@headlessui/react/dist';
import { MenuIcon } from '@heroicons/react/outline';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SignoutModalContext } from '../../contexts/SignoutModalProvider';

function FloatingAccessButton() {
	const { openModal } = useContext(SignoutModalContext);

	return (
		<>
			<Popover className=" bottom-5 right-5 lg:hidden z-10 fixed">
				<Popover.Button>
					<button className="w-16 h-16 bg-[#251A6A]  rounded-full text-white justify-center flex items-center focus:bg-purple-500 ">
						<MenuIcon className="w-8 h-8" />
					</button>

					<Popover.Panel className="absolute bottom-20 right-0 z-10  rounded-lg shadow-lg">
						<div className="bg-white w-36 h-full flex flex-col p-4 font-sans">
							<Link
								to="/newsStand"
								className="text-lg text-gray-500 focus:bg-purple-50 focus:text-[#251A6A] mb-2 text-right"
							>
								News Stand
							</Link>

							<Link
								to="/profile"
								className="text-lg text-gray-500 focus:bg-purple-50 focus:text-[#251A6A] mb-2 text-right"
							>
								Profile
							</Link>

							<Link
								to="/posts"
								className="text-lg text-gray-500 focus:bg-purple-50 focus:text-[#251A6A] mb-2 text-right"
							>
								Posts
							</Link>

							<Link
								to="/followers"
								className="text-lg text-gray-500 focus:bg-purple-50 focus:text-[#251A6A] mb-2 text-right"
							>
								Followers
							</Link>

							<Link
								to="/mentors"
								className="text-lg text-gray-500 focus:bg-purple-50 focus:text-[#251A6A] mb-2 text-right"
							>
								Mentors
							</Link>

							<Link
								to="/search"
								className="text-lg text-gray-500 focus:bg-purple-50 focus:text-[#251A6A] mb-2 text-right"
							>
								Search
							</Link>

							<Link
								to="/settings"
								className="text-lg text-gray-500 focus:bg-purple-50 focus:text-[#251A6A] mb-2 text-right"
							>
								Settings
							</Link>

							<Link
								to="#/"
								className="text-lg text-gray-500 focus:bg-purple-50 focus:text-[#251A6A] mb-2 text-right"
								onClick={openModal}
							>
								Sign out
							</Link>
						</div>

						<img src="/solutions.jpg" alt="" />
					</Popover.Panel>
				</Popover.Button>
			</Popover>
		</>
	);
}

export default FloatingAccessButton;
