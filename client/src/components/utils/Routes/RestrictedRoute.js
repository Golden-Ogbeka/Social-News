import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { FeedbackContext } from '../../../contexts/FeedbackProvider';
import { UserContext } from '../../../contexts/UserProvider';
import {
	getSessionDetails,
	removeSessionDetails,
} from '../../../functions/userSession';

function RestrictedRoute({ children, ...rest }) {
	// To prevent admin from going back to login pages

	const [loggedInState, setLoggedInState] = React.useState(false);
	const { openFeedback } = useContext(FeedbackContext);
	const { removeUser, addUser } = useContext(UserContext);

	React.useEffect(() => {
		const verifyLoginState = () => {
			const currentDate = new Date().getTime();
			let storedSession = getSessionDetails();

			if (!storedSession) {
				// No stored session
				removeUser();
				setLoggedInState(false);
			} else {
				if (currentDate > storedSession.expiresIn) {
					// Session Expired
					removeSessionDetails();
					removeUser();

					setLoggedInState(false);
				} else {
					// Session exists and is not expired
					openFeedback('info', 'You are already logged in');
					addUser(storedSession);

					setLoggedInState(true);
				}
			}
		};
		verifyLoginState();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<Route
			{...rest}
			render={() =>
				!loggedInState ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/newsStand',
						}}
					/>
				)
			}
		/>
	);
}

export default RestrictedRoute;
