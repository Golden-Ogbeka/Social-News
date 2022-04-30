import React from 'react';
import Modal from '../Modal';

const SignOutModal = ({
	contextVariables,
	setContextVariables,
	signOutUser,
}) => {
	return (
		<Modal
			action={signOutUser}
			actionTitle="Sign out"
			onClose={() =>
				setContextVariables({
					...contextVariables,
					signOutModalState: false,
				})
			}
			title="Sign out?"
			subtitle="Are you sure you want to sign out?"
			show={contextVariables.signOutModalState}
			variant="signout"
		/>
	);
};
export default SignOutModal;
