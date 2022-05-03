import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FeedbackContext } from '../../../../contexts/FeedbackProvider';
import { LoadingIndicatorContext } from '../../../../contexts/LoadingIndicatorProvider';
import { SignoutModalContext } from '../../../../contexts/SignoutModalProvider';
import { UserContext } from '../../../../contexts/UserProvider';
import { removeSessionDetails } from '../../../../functions/userSession';
import Modal from '../Modal';

const SignOutModal = () => {
	const history = useHistory();
	const { openLoadingIndicator, closeLoadingIndicator } = useContext(
		LoadingIndicatorContext
	);
	const { openFeedback } = useContext(FeedbackContext);
	const { closeModal, modalState } = useContext(SignoutModalContext);
	const { removeUser } = useContext(UserContext);

	const signOutUser = async () => {
		openLoadingIndicator();

		// Remove localstorage
		removeSessionDetails();

		closeModal();
		removeUser();
		openFeedback('success', 'Sign out successful');

		history.push('/signin');
		closeLoadingIndicator();
	};
	return (
		<Modal
			action={signOutUser}
			actionTitle="Sign out"
			onClose={closeModal}
			title="Sign out?"
			subtitle="Are you sure you want to sign out?"
			show={modalState}
			variant="signout"
		/>
	);
};
export default SignOutModal;
