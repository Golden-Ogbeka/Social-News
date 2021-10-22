import React from 'react';
import BannerImage from '../../assets/banner.jpeg';
import { UserIcon } from '@heroicons/react/outline';
import axios from 'axios';

function Signin() {
	const signinUser = async (e) => {
		e.preventDefault();
		try {
			// const response = await axios.post(
			// 	`https://api.kexzegroup.com/api/v1/vendor/signUp`,
			// 	{
			// 		email: 'abfatahi96@gmail.com',
			// 		password: 'Examplepassword123!',
			// 	}
			// );
			// console.log(response);
		} catch (error) {
			console.log(error.response.data);
		}
	};
	return (
		<div className='bg-white static flex justify-center min-h-screen min-w-screen'>
			<img
				src={BannerImage}
				alt='Banner'
				className='object-cover w-full opacity-90'
				style={{
					height: '50vh',
				}}
			/>
			{/* <div
				className='h-60 bg-red-900 absolute bottom-1/4 md:left-1/4 w-2/3 md:w-1/2'
				style={{
					left: '16.5vw',
				}}
			>
				sd
			</div> */}
			<div className='bg-white absolute md:bottom-28 bottom-0 md:left-1/3 w-2/3 md:w-1/3 flex items-center flex-col  shadow-md rounded'>
				<div className='mt-10 ml-10 mr-10 mb-5 flex items-center flex-col'>
					{/* Avatar */}
					<div
						className='h-16 w-16 flex justify-center items-center shadow-xl'
						style={{
							borderRadius: '50%',
						}}
					>
						<UserIcon className='text-purple-900 h-5 w-5 ' />
					</div>
					<div className='font-sans text-base font-semibold mt-5 text-purple-900'>
						SIGN IN
					</div>
				</div>
				<form className='flex-col flex items-center w-full pl-5 pr-5 md:pl-20 md:pr-20'>
					<input
						className='w-full h-10 border-purple-100 border-solid border-b-2 mb-2 outline-none bg-transparent focus:border-purple-300'
						placeholder='Email'
						type='email'
					/>
					{/* <br /> */}
					<input
						className='w-full h-10 border-purple-100 border-solid border-b-2  outline-none mb-10 bg-transparent focus:border-purple-300'
						placeholder='Password'
						type='password'
					/>
					<button
						onClick={(e) => signinUser(e)}
						className='w-32 bg-purple-900 pt-4 pb-4 rounded text-white text-sm mb-10 font-semibold'
					>
						SIGN IN
					</button>
				</form>
			</div>
		</div>
	);
}

export default Signin;
