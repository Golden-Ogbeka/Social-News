import React from 'react';
import BannerImage from '../../../assets/banner.jpeg';
import { UserIcon } from '@heroicons/react/outline';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import TextInput from '../../common/TextInput/TextInput';
import Button from '../../common/Button/Button';
import { API_URL } from '../../../functions/environmentVariables';
import { storeSessionDetails } from '../../../functions/userSession';
import Navbar from '../../layout/Navbar';
import { UserContext } from '../../../contexts/UserProvider';
import { FeedbackContext } from '../../../contexts/FeedbackProvider';
import { LoadingIndicatorContext } from '../../../contexts/LoadingIndicatorProvider';

function ResetPasswordUpdate() {
	const { addUser } = React.useContext(UserContext);
	const { openFeedback } = React.useContext(FeedbackContext);
	const { openLoadingIndicator, closeLoadingIndicator } = React.useContext(
		LoadingIndicatorContext
	);

	const [inputValues, setInputValues] = React.useState({
		email: '',
		password: '',
		confirmPassword: '',
	});

	const history = useHistory();
	const oldPath = history.location.state?.oldPath;

	const signinUser = async e => {
		e.preventDefault();
		openLoadingIndicator();
		if (inputValues.email === '' || inputValues.password === '') {
			openFeedback('error', 'Incomplete fields');
		}
		try {
			const response = await axios.post(`${API_URL}/user/login`, {
				email: inputValues.email,
				password: inputValues.password,
			});
			if (response.data.status === 'success') {
				openFeedback('success', response.data.message);

				let expirationDate =
					new Date().getTime() + 1000 * 60 * 60 * 24 * 5; //5 days

				const userSession = {
					adminDetails: response.data.User,
					expiresIn: expirationDate,
				};
				addUser(userSession);

				// set local storage
				storeSessionDetails(userSession);

				history.push(oldPath || '/newsStand');
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

				<div className="bg-white absolute md:bottom-60 bottom-40 lg:left-1/3 w-2/3 lg:w-1/3 flex items-center flex-col  shadow-md rounded pt-5">
					<div className=" flex items-center flex-col">
						{/* Avatar */}
						<div
							className="h-16 w-16 flex justify-center items-center shadow-xl"
							style={{
								borderRadius: '50%',
							}}
						>
							<UserIcon className="text-[#251A6A] h-5 w-5 " />
						</div>
						<div className="font-sans text-base font-semibold mt-5 mb-5 text-[#251A6A]">
							UPDATE PASSWORD
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
						<TextInput
							placeholder="Confirm Password"
							type="password"
							name="confirmPassword"
							value={inputValues.confirmPassword}
							onChange={e => handleInput(e)}
						/>
						<Button
							onClick={e => signinUser(e)}
							style={{
								marginBlock: 40,
							}}
						>
							UPDATE PASSWORD
						</Button>
					</form>
				</div>
			</div>
		</>
	);
}

export default ResetPasswordUpdate;
