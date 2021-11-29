import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import NewsStand from './components/pages/NewsStand';
import Profile from './components/pages/Profile';
import Signin from './components/pages/Signin';
import Signup from './components/pages/Signup';
import AppContext from './components/utils/AppContext';
import { Dialog, Transition } from '@headlessui/react';
import {
	CheckCircleIcon,
	ExclamationCircleIcon,
	InformationCircleIcon,
	LogoutIcon,
} from '@heroicons/react/outline';
import FloatingAccessButton from './components/layout/FloatingAccessButton';
import PageNotFound from './components/pages/PageNotFound';
import { SESSION_NAME } from './app.json';

function App() {
	const history = useHistory();
	const [contextVariables, setContextVariables] = React.useState({
		signOutModalState: false,
		loadingIndicatorState: false,
		feedback: {
			type: '',
			message: '',
			open: false,
			timeout: 3000,
		},
		loggedIn: false,
	});

	const hideFeedback = () => {
		// When you want to run setState multiple times, use a function that contains the old state
		setTimeout(() => {
			setContextVariables((oldState) => {
				return {
					...oldState,
					feedback: {
						...oldState.feedback,
						open: false,
					},
				};
			});
		}, contextVariables.feedback.timeout);
	};

	const signOutUser = async () => {
		setContextVariables({
			...contextVariables,
			loadingIndicatorState: true,
		});

		// Remove localstorage
		localStorage.removeItem(SESSION_NAME);

		// Signout function here
		setContextVariables((oldState) => {
			return {
				...oldState,
				signOutModalState: false,
				loadingIndicatorState: false,
				loggedIn: false,
				feedback: {
					...oldState.feedback,
					open: true,
					message: 'Sign out successful',
					type: 'success',
				},
			};
		});

		hideFeedback();
		history.push('/signin');
	};
	return (
		<AppContext.Provider
			value={{ contextVariables, setContextVariables, hideFeedback }}
		>
			<Navbar />

			{/* Components */}
			<SignOutModal
				contextVariables={contextVariables}
				setContextVariables={setContextVariables}
				signOutUser={signOutUser}
			/>
			<Feedback
				contextVariables={contextVariables}
				setContextVariables={setContextVariables}
			/>
			<LoadingIndicator
				contextVariables={contextVariables}
				setContextVariables={setContextVariables}
			/>
			<FloatingAccessButton />

			{/* Routes */}
			<Switch>
				<Route path='/' exact component={Signin} />
				<Route path='/signin' component={Signin} />
				<Route path='/signup' component={Signup} />
				<Route path='/newsStand' component={NewsStand} />
				<Route path='/profile' component={Profile} />
				<Route path='*' component={PageNotFound} />
			</Switch>
		</AppContext.Provider>
	);
}

const SignOutModal = ({
	contextVariables,
	setContextVariables,
	signOutUser,
}) => {
	return (
		<Transition.Root show={contextVariables.signOutModalState}>
			<Dialog
				open={contextVariables.signOutModalState}
				onClose={() =>
					setContextVariables({
						...contextVariables,
						signOutModalState: false,
					})
				}
				className='fixed z-10 inset-0 overflow-y-auto'
			>
				<Dialog.Overlay className='fixed inset-0  bg-opacity-75 transition-opacity' />
				<div className='flex items-center justify-center min-h-screen'>
					<Transition.Child
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<Dialog.Overlay className='fixed inset-0 bg-black opacity-30' />
					</Transition.Child>

					<Transition.Child
						enter='ease-out duration-300'
						enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
						enterTo='opacity-100 translate-y-0 sm:scale-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100 translate-y-0 sm:scale-100'
						leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
					>
						<div className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
							<div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
								<div className='sm:flex sm:items-start'>
									<div className='mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 sm:mx-0 sm:h-10 sm:w-10'>
										<LogoutIcon
											className='h-6 w-6 text-purple-900'
											aria-hidden='true'
										/>
									</div>
									<div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
										<Dialog.Title
											as='h3'
											className='text-lg leading-6 font-medium text-gray-900'
										>
											Sign out?
										</Dialog.Title>
										<div className='mt-2'>
											<p className='text-md text-gray-500'>
												Are you sure you want to sign out?
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
								<button
									type='button'
									className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-purple-900 text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:ml-3 sm:w-auto sm:text-sm'
									onClick={() => signOutUser()}
								>
									Sign out
								</button>
								<button
									type='button'
									className='mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
									onClick={() =>
										setContextVariables({
											...contextVariables,
											signOutModalState: false,
										})
									}
								>
									Cancel
								</button>
							</div>
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

const Feedback = ({ contextVariables, setContextVariables }) => {
	return (
		<Transition.Root show={contextVariables.feedback.open}>
			<Dialog
				open={contextVariables.feedback.open}
				onClose={() =>
					setContextVariables({
						...contextVariables,
						feedback: { ...contextVariables.feedback, open: false },
					})
				}
				className='fixed z-10 inset-0 overflow-y-auto'
			>
				<Dialog.Overlay className='fixed inset-0  bg-opacity-75 transition-opacity' />
				<div className='flex items-center justify-center min-h-screen'>
					<Transition.Child
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<Dialog.Overlay className='fixed inset-0 bg-black opacity-30' />
					</Transition.Child>

					<Transition.Child
						enter='ease-out duration-300'
						enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
						enterTo='opacity-100 translate-y-0 sm:scale-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100 translate-y-0 sm:scale-100'
						leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
					>
						<div className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
							<div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
								<div className='sm:flex sm:items-start'>
									{contextVariables.feedback.type === 'success' && (
										<div className='mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10'>
											<CheckCircleIcon
												className='h-6 w-6 text-green-700'
												aria-hidden='true'
											/>
										</div>
									)}
									{contextVariables.feedback.type === 'info' && (
										<div className='mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10'>
											<InformationCircleIcon
												className='h-6 w-6 text-blue-700'
												aria-hidden='true'
											/>
										</div>
									)}
									{contextVariables.feedback.type === 'error' && (
										<div className='mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10'>
											<ExclamationCircleIcon
												className='h-6 w-6 text-red-700'
												aria-hidden='true'
											/>
										</div>
									)}
									<div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
										<Dialog.Title
											as='h3'
											className='text-lg capitalize leading-6 font-medium text-gray-900'
										>
											{contextVariables.feedback.type}
										</Dialog.Title>
										<div className='mt-2'>
											<p className='text-md text-gray-500'>
												{contextVariables.feedback.message}
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
								<button
									type='button'
									className='mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
									onClick={() =>
										setContextVariables({
											...contextVariables,
											feedback: { ...contextVariables.feedback, open: false },
										})
									}
								>
									Cancel
								</button>
							</div>
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

const LoadingIndicator = ({ contextVariables, setContextVariables }) => {
	return (
		<Transition.Root show={contextVariables.loadingIndicatorState}>
			<Dialog
				open={contextVariables.loadingIndicatorState}
				onClose={() => null}
				className='fixed z-10 inset-0 overflow-y-auto text-center'
			>
				<Dialog.Overlay className='fixed inset-0  bg-opacity-75 transition-opacity' />
				<div className='flex items-center justify-center min-h-screen'>
					<Transition.Child
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<Dialog.Overlay className='fixed inset-0 bg-black opacity-30' />
					</Transition.Child>

					<Transition.Child
						enter='ease-out duration-300'
						enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
						enterTo='opacity-100 translate-y-0 sm:scale-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100 translate-y-0 sm:scale-100'
						leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
					>
						<div
							className='border-purple-200 border-p border-8 border-solid border-t-8 w-32 h-32 animate-spin inline-block'
							style={{
								borderTopColor: 'rgb(76,29,149)',
								borderRadius: '50%',
							}}
						></div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default App;
