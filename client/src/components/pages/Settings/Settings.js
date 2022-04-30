import React from 'react';
import Button from '../../common/Button/Button';
import DeleteAccountModal from '../../common/Modals/DeleteAccount/DeleteAccountModal';
import PageHeader from '../../common/PageHeader/PageHeader';
import SecondaryHeader from '../../common/PageHeader/SecondaryHeader';
import Text from '../../common/Text/Text';
import TextInput from '../../common/TextInput/TextInput';
import AppLayout from '../../layout/AppLayout';

function Settings() {
	const [deleteAccountModalState, setDeleteAccountModalState] =
		React.useState(false);

	const openDeleteAccountModal = () => {
		return setDeleteAccountModalState(true);
	};

	const closeDeleteAccountModal = () => {
		return setDeleteAccountModalState(false);
	};

	const deleteUser = async () => {
		alert('Works');
	};

	return (
		<AppLayout>
			<PageHeader>Settings</PageHeader>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
				<div className="w-full">
					<SecondaryHeader>Change password</SecondaryHeader>
					<div className="flex flex-col gap-5">
						<TextInput
							placeholder="Old password"
							type="password"
							name="oldPassword"
							variant="outline"
							// value={inputValues.email}
							// onChange={e => handleInput(e)}
						/>
						<TextInput
							placeholder="New password"
							type="password"
							name="newPassword"
							variant="outline"
							// value={inputValues.email}
							// onChange={e => handleInput(e)}
						/>
						<TextInput
							placeholder="Enter new password again"
							type="password"
							name="newPassword2"
							variant="outline"
							// value={inputValues.email}
							// onChange={e => handleInput(e)}
						/>
						<Button
							style={{
								alignSelf: 'flex-end',
							}}
						>
							Change Password
						</Button>
					</div>
				</div>
				<div className="flex flex-col">
					<SecondaryHeader>Delete Account</SecondaryHeader>
					<Text>
						Remove all your account information. This includes
						posts, comments and profile
					</Text>
					<Button
						style={{
							marginTop: 20,
							maxWidth: 164,
						}}
						variant="danger"
						onClick={openDeleteAccountModal}
					>
						Delete Account
					</Button>
					<DeleteAccountModal
						show={deleteAccountModalState}
						onClose={closeDeleteAccountModal}
						deleteUser={deleteUser}
					/>
				</div>
			</div>
		</AppLayout>
	);
}

export default Settings;
