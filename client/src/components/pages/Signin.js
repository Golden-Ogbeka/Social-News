import React from 'react';
import BannerImage from '../../assets/banner.jpeg';
import { UserIcon } from '@heroicons/react/outline';
import axios from 'axios';
import { API_URL, SESSION_NAME } from '../../app.json';
import AppContext from '../utils/AppContext';
import { useHistory } from 'react-router-dom';
import TextInput from '../common/TextInput/TextInput';
import Button from '../common/Button/Button';

function Signin() {
	const { contextVariables, setContextVariables } =
		React.useContext(AppContext);
	const [inputValues, setInputValues] = React.useState({
		email: '',
		password: '',
	});

	const history = useHistory();
	const signinUser = async e => {
		e.preventDefault();
		if (inputValues.email === '' || inputValues.password === '') {
			return setContextVariables({
				...contextVariables,
				feedback: {
					...contextVariables.feedback,
					open: true,
					type: 'error',
					message: 'Incomplete fields',
				},
			});
		}
		try {
			const response = await axios.post(`${API_URL}/user/login`, {
				email: inputValues.email,
				password: inputValues.password,
			});
			if (response.data.status === 'success') {
				setContextVariables({
					...contextVariables,
					feedback: {
						...contextVariables.feedback,
						open: true,
						type: 'success',
						message: response.data.message,
					},
					loggedIn: true,
				});
				// set local storage
				localStorage.setItem(
					SESSION_NAME,
					JSON.stringify(response.data.User)
				);
				history.push('/newsStand');
			}
		} catch (error) {
			setContextVariables({
				...contextVariables,
				feedback: {
					...contextVariables.feedback,
					open: true,
					type: 'error',
					message: error.response?.data
						? error.response.data.message
						: 'Request unsuccessful',
				},
			});
		}
	};

	const handleInput = e => {
		return setInputValues({
			...inputValues,
			[e.target.name]: e.target.value,
		});
	};
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
			<div className="bg-white absolute md:bottom-28 bottom-0 md:left-1/3 w-2/3 md:w-1/3 flex items-center flex-col  shadow-md rounded">
				<div className="mt-10 ml-10 mr-10 mb-5 flex items-center flex-col">
					{/* Avatar */}
					<div
						className="h-16 w-16 flex justify-center items-center shadow-xl"
						style={{
							borderRadius: '50%',
						}}
					>
						<UserIcon className="text-purple-900 h-5 w-5 " />
					</div>
					<div className="font-sans text-base font-semibold mt-5 text-purple-900">
						SIGN IN
					</div>
				</div>
				<form className="flex-col flex items-center w-full pl-5 pr-5 md:pl-20 md:pr-20 gap-2">
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
						onClick={e => signinUser(e)}
						style={{
							marginBottom: 40,
						}}
					>
						SIGN IN
					</Button>
				</form>
			</div>
		</div>
	);
}

export default Signin;
