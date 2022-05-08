import React from 'react';
import BannerImage from '../../assets/banner.jpeg';
import { UserIcon } from '@heroicons/react/outline';
import axios from 'axios';
import TextInput from '../common/TextInput/TextInput';
import Button from '../common/Button/Button';
import { API_URL } from '../../functions/environmentVariables';
import Navbar from '../layout/Navbar';
import { FeedbackContext } from '../../contexts/FeedbackProvider';
import { LoadingIndicatorContext } from '../../contexts/LoadingIndicatorProvider';
import { useHistory } from 'react-router-dom';

function Signup() {
	const { openFeedback } = React.useContext(FeedbackContext);
	const { openLoadingIndicator, closeLoadingIndicator } = React.useContext(
		LoadingIndicatorContext
	);

	const [inputValues, setInputValues] = React.useState({
		name: '',
		email: '',
		password: '',
	});

	const history = useHistory();

	const signupUser = async e => {
		e.preventDefault();
		openLoadingIndicator();
		if (
			inputValues.name === '' ||
			inputValues.email === '' ||
			inputValues.password === ''
		) {
			return openFeedback('error', 'Incomplete fields');
		}
		try {
			const response = await axios.post(`${API_URL}/user/register`, {
				name: inputValues.name,
				email: inputValues.email,
				password: inputValues.password,
			});
			if (response.data.status === 'success') {
				history.push('/signin');
				return openFeedback('success', response.data.message);
			}
		} catch (error) {
			openFeedback(
				'error',
				error.response?.data
					? error.response.data.message
					: 'Request unsuccessful'
			);
		}
		closeLoadingIndicator();
	};

	const handleInput = e => {
		return setInputValues({
			...inputValues,
			[e.target.name]: e.target.value,
		});
	};
	return (
		<>
			<Navbar />
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
				<div className="bg-white absolute md:bottom-60 bottom-40 lg:left-1/3 w-2/3 lg:w-1/3 flex items-center flex-col  shadow-md rounded pt-5">
					<div className="flex items-center flex-col">
						{/* Avatar */}
						<div
							className="h-16 w-16 flex justify-center items-center shadow-xl"
							style={{
								borderRadius: '50%',
							}}
						>
							<UserIcon className="text-[#251A6A] h-5 w-5 " />
						</div>
						<div className="font-sans text-base font-semibold mt-5 text-[#251A6A]">
							SIGN UP
						</div>
					</div>
					<form className="flex-col flex items-center w-full pl-5 pr-5 md:pl-20 md:pr-20  gap-2">
						<TextInput
							placeholder="Full name"
							type="text"
							name="name"
							value={inputValues.name}
							onChange={e => handleInput(e)}
						/>

						<TextInput
							placeholder="Email"
							type="email"
							name="email"
							value={inputValues.email}
							onChange={e => handleInput(e)}
						/>

						<TextInput
							placeholder="Password"
							type="password"
							name="password"
							value={inputValues.password}
							onChange={e => handleInput(e)}
						/>
						<Button
							onClick={e => signupUser(e)}
							style={{
								marginBlock: 40,
							}}
						>
							SIGN UP
						</Button>
					</form>
				</div>
			</div>
		</>
	);
}

export default Signup;
