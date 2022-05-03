import React from 'react';

export const SignoutModalContext = React.createContext(null);

function SignoutModalProvider({ children }) {
	const [modalState, setModalState] = React.useState(false);

	const openModal = () => {
		setModalState(true);
	};

	const closeModal = () => {
		setModalState(false);
	};

	return (
		<SignoutModalContext.Provider
			value={{ openModal, closeModal, modalState }}
		>
			{children}
		</SignoutModalContext.Provider>
	);
}

export default SignoutModalProvider;
