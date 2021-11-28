import React from 'react';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import AppContext from '../utils/AppContext';

function Navbar() {
	const { contextVariables, setContextVariables } =
		React.useContext(AppContext);
	return (
		<>
			{/* Logged out */}
			<nav className='bg-white h-14 shadow'>
				<div className='px-6 items-center flex h-14'>
					<div className='flex-grow'>
						<Link to='/'>
							<img src={Logo} className='h-9' alt='Social News' />
						</Link>
					</div>

					<Link
						to='/signin'
						className='text-purple-900 font-bold text-sm pr-10'
					>
						sign in
					</Link>
					<Link to='/signup' className='text-purple-900 font-bold text-sm'>
						sign up
					</Link>
				</div>
			</nav>

			{/* Logged in */}
			{/* <nav className='bg-white h-14 shadow'>
				<div className='px-6 items-center flex h-14'>
					<div className='flex-grow'>
						<Link to='/'>
							<img src={Logo} className='h-9' alt='Social News' />
						</Link>
					</div>

					<Link
						to='#/'
						className='text-purple-900 font-bold text-sm'
						onClick={() =>
							setContextVariables({
								...contextVariables,
								signOutModalState: true,
							})
						}
					>
						sign out
					</Link>
				</div>
			</nav> */}
		</>
	);
}

export default Navbar;
