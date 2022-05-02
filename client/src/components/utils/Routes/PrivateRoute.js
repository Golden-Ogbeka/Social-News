import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
	getSessionDetails,
	removeSessionDetails,
} from '../../../functions/userSession';
import AppContext from '../AppContext';

function PrivateRoute({ children, ...rest }) {
	const { contextVariables, setContextVariables } =
		React.useContext(AppContext);
	const [loggedInState, setLoggedInState] = React.useState(true);

	React.useEffect(() => {
		const verifyLoginState = () => {
			const currentDate = new Date().getTime();
			let storedSession = getSessionDetails();

			if (!storedSession) {
				// No stored session
				removeSessionDetails();
				setContextVariables({
					...contextVariables,
					loggedIn: false,
					feedback: {
						...contextVariables.feedback,
						open: true,
						message: 'Login to continue',
						type: 'info',
					},
				});
				setLoggedInState(false);
			} else {
				if (currentDate > storedSession.expiresIn) {
					// Session Expired
					removeSessionDetails();

					setContextVariables({
						...contextVariables,
						loggedIn: false,
						feedback: {
							...contextVariables.feedback,
							open: true,
							message: 'Login to continue',
							type: 'info',
						},
					});
					setLoggedInState(false);
				} else {
					// Session exists and is not expired
					setContextVariables({
						...contextVariables,
						loggedIn: true,
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
