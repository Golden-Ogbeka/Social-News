import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { FeedbackContext } from '../contexts/FeedbackProvider';
import { UserContext } from '../contexts/UserProvider';
import {
	getSessionDetails,
	removeSessionDetails,
} from '../functions/userSession';

function PrivateRoute({ children, ...rest }) {
	const [loggedInState, setLoggedInState] = React.useState(true);

	const { openFeedback } = useContext(FeedbackContext);
	const { removeUser, addUser } = useContext(UserContext);

	React.useEffect(() => {
		const verifyLoginState = () => {
			const currentDate = new Date().getTime();
			let storedSession = getSessionDetails();

			if (!storedSession) {
				// No stored session
				removeSessionDetails();
				openFeedback('info', 'Login to continue');
				removeUser();
				setLoggedInState(false);
			} else {
				if (currentDate > storedSession.expiresIn) {
					// Session Expired
					removeSessionDetails();

					openFeedback('info', 'Login to continue');
					removeUser();
					setLoggedInState(false);
				} else {
					// Session exists and is not expired
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
			render={({ location }) =>
				loggedInState ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/',
							state: { oldPath: location },
						}}
					/>
				)
			}
		/>
	);
}

export default PrivateRoute;
