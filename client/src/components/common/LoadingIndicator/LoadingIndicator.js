import { Dialog, Transition } from '@headlessui/react';
import React from 'react';

const LoadingIndicator = ({ contextVariables, setContextVariables }) => {
	return (
		<Transition.Root show={contextVariables.loadingIndicatorState}>
			<Dialog
				open={contextVariables.loadingIndicatorState}
				onClose={() => null}
				className="fixed z-10 inset-0 overflow-y-auto text-center"
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
						<div
							className="border-purple-200 border-p border-8 border-solid border-t-8 w-32 h-32 animate-spin inline-block"
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

export default LoadingIndicator;
