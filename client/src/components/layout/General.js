import React from 'react';
import Feedback from '../common/Feedback/Feedback';
import LoadingIndicator from '../common/LoadingIndicator/LoadingIndicator';
import SignOutModal from '../common/Modals/Signout/SignOutModal';
import FloatingAccessButton from './FloatingAccessButton';

function General() {
	return (
		<>
			<SignOutModal />
			<Feedback />
			<LoadingIndicator />
			<FloatingAccessButton />
		</>
	);
}

export default General;
