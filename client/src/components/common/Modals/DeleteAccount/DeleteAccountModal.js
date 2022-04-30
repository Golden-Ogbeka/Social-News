import React from 'react';
import Modal from '../Modal';

function DeleteAccountModal({ show, onClose, deleteUser }) {
	return (
		<Modal
			action={deleteUser}
			actionTitle="Delete Account"
			onClose={onClose}
			title="Delete Account?"
			subtitle="Are you sure you want to delete your account? Please note that this process cannot be reversed"
			show={show}
			variant="deleteAccount"
		/>
	);
}

export default DeleteAccountModal;
