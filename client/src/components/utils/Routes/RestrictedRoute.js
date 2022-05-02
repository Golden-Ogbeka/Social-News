import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
	getSessionDetails,
	removeSessionDetails,
} from '../../../functions/userSession';
import AppContext from '../AppContext';

function RestrictedRoute({ children, ...rest }) {
	// To prevent admin from going back to login pages
	const { contextVariables, setContextVariables } =
		React.useContext(AppContext);
	const [loggedInState, setLoggedInState] = React.useState(false);

	React.useEffect(() => {
		const verifyLoginState = () => {
			const currentDate = new Date().getTime();
			let storedSession = getSessionDetails();

			if (!storedSession) {
				// No stored session
				setContextVariables({
					...contextVariables,
					loggedIn: false,
				});
				setLoggedInState(false);
			} else {
				if (currentDate > storedSession.expiresIn) {
					// Session Expired
					removeSessionDetails();
					setContextVariables({
						...contextVariables,
						loggedIn: false,
					});
					setLoggedInState(false);
				} else {
					// Session exists and is not expired
					setContextVariables({
						...contextVariables,
						loggedIn: true,
						feedback: {
							...contextVariables.feedback,
							open: true,
							message: 'You are already logged in',
							type: 'info',
						},
					});
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
