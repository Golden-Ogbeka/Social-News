import React from 'react';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserProvider';
import { SignoutModalContext } from '../../contexts/SignoutModalProvider';

function Navbar() {
	const { user } = React.useContext(UserContext);
	const { openModal } = React.useContext(SignoutModalContext);
	return (
		<>
			{Object.keys(user).length > 0 ? (
				// Logged in
				<nav className="bg-white h-14 shadow fixed w-full z-10">
					<div className="px-6 items-center flex h-14">
						<div className="flex-grow">
							<Link to="/">
								<img
									src={Logo}
									className="h-9 w-auto object-cover"
									alt="Social News"
								/>
							</Link>
						</div>

						<Link
							to="#/"
							className="text-[#251A6A] font-bold text-sm"
							onClick={openModal}
						>
							sign out
						</Link>
					</div>
				</nav>
			) : (
				// Logged out
				<nav className="bg-white h-14 shadow fixed w-full z-10">
					<div className="px-6 items-center flex h-14">
						<div className="flex-grow">
							<Link to="/">
								<img
									src={Logo}
									className="h-9"
									alt="Social News"
								/>
							</Link>
						</div>

						<Link
							to="/signin"
							className="text-[#251A6A] font-bold text-sm pr-10"
						>
							sign in
						</Link>
						<Link
							to="/signup"
							className="text-[#251A6A] font-bold text-sm"
						>
							sign up
						</Link>
					</div>
				</nav>
			)}
		</>
	);
}

export default Navbar;
