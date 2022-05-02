import { ExclamationIcon } from '@heroicons/react/outline';
import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../../assets/banner.jpeg';

function PageNotFound() {
	return (
		<div className="bg-white static flex justify-center min-h-screen min-w-screen">
			<img
				src={BannerImage}
				alt="Banner"
				className="object-cover w-full opacity-90"
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
			<div className="bg-white absolute bottom-28 md:left-1/3 w-2/3 md:w-1/3 flex items-center flex-col  shadow-md rounded">
				<div className="mt-10 ml-10 mr-10 mb-5 flex items-center flex-col">
					{/* Avatar */}
					<div
						className="h-16 w-16 flex justify-center items-center shadow-xl"
						style={{
							borderRadius: '50%',
						}}
					>
						<ExclamationIcon className="text-[#251A6A] h-5 w-5 " />
					</div>
					<div className="font-sans text-base font-semibold mt-5 text-[#251A6A]">
						Page not found
					</div>
					<p
						style={{
							fontWeight: 'lighter',
							marginTop: 20,
							textAlign: 'center',
						}}
					>
						The page you are looking for wasnt't found. Please use
						the button below to go to the homepage
					</p>
				</div>
				<form className="flex-col flex items-center w-full pl-5 pr-5 md:pl-20 md:pr-20">
					<Link to="/">
						<button className="w-32 bg-[#251A6A] pt-4 pb-4 rounded text-white text-sm mb-10 font-semibold">
							Homepage
						</button>
					</Link>
				</form>
			</div>
		</div>
	);
}

export default PageNotFound;
