import { Dialog, Transition } from '@headlessui/react';
import {
	CheckCircleIcon,
	ExclamationCircleIcon,
	InformationCircleIcon,
} from '@heroicons/react/outline';
import React, { useContext } from 'react';
import { FeedbackContext } from '../../../contexts/FeedbackProvider';

const Feedback = () => {
	const { feedback, closeFeedback } = useContext(FeedbackContext);

	return (
		<Transition.Root show={feedback.open}>
			<Dialog
				open={feedback.open}
				onClose={closeFeedback}
				className="fixed z-10 inset-0 overflow-y-auto"
			>
				<Dialog.Overlay className="fixed inset-0  bg-opacity-75 transition-opacity" />
				<div className="flex items-center justify-center min-h-screen">
					<Transition.Child
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
					</Transition.Child>

					<Transition.Child
						enter="ease-out duration-300"
						enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						enterTo="opacity-100 translate-y-0 sm:scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 translate-y-0 sm:scale-100"
						leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
					>
						<div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:items-center sm:max-w-lg sm:w-full">
							<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
								<div className="sm:flex sm:items-start">
									{feedback.type === 'success' && (
										<div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
											<CheckCircleIcon
												className="h-6 w-6 text-green-700"
												aria-hidden="true"
											/>
										</div>
									)}
									{feedback.type === 'info' && (
										<div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
											<InformationCircleIcon
												className="h-6 w-6 text-blue-700"
												aria-hidden="true"
											/>
										</div>
									)}
									{feedback.type === 'error' && (
										<div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
											<ExclamationCircleIcon
												className="h-6 w-6 text-red-700"
												aria-hidden="true"
											/>
										</div>
									)}
									<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
										<Dialog.Title
											as="h3"
											className="text-lg capitalize leading-6 font-medium text-gray-900"
										>
											{feedback.type}
										</Dialog.Title>
										<div className="mt-2">
											<p className="text-md text-gray-500">
												{feedback.message}
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
								<button
									type="button"
									className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
									onClick={closeFeedback}
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

export default Feedback;
