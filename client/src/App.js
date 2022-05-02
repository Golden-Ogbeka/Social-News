import React from 'react';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
import NewsStand from './components/pages/NewsStand';
import Profile from './components/pages/Profile';
import Signin from './components/pages/Signin';
import Signup from './components/pages/Signup';
import AppContext from './components/utils/AppContext';
import FloatingAccessButton from './components/layout/FloatingAccessButton';
import PageNotFound from './components/pages/PageNotFound';
import Followers from './components/pages/Followers';
import Mentors from './components/pages/Mentors';
import Posts from './components/pages/Posts/Posts';
import NewPost from './components/pages/Posts/NewPost';
import EditPost from './components/pages/Posts/EditPost';
import Settings from './components/pages/Settings/Settings';
import LoadingIndicator from './components/common/LoadingIndicator/LoadingIndicator';
import SignOutModal from './components/common/Modals/Signout/SignOutModal';
import Feedback from './components/common/Feedback/Feedback';
import Search from './components/pages/Search/Search';
import { removeSessionDetails } from './functions/userSession';
import RestrictedRoute from './components/utils/Routes/RestrictedRoute';
import PrivateRoute from './components/utils/Routes/PrivateRoute';

function App() {
	const history = useHistory();
	const [contextVariables, setContextVariables] = React.useState({
		signOutModalState: false,
		loadingIndicatorState: false,
		feedback: {
			type: '',
			message: '',
			open: false,
			timeout: 3000,
		},
		loggedIn: false,
	});

	const hideFeedback = () => {
		// When you want to run setState multiple times, use a function that contains the old state
		setTimeout(() => {
			setContextVariables(oldState => {
				return {
					...oldState,
					feedback: {
						...oldState.feedback,
						open: false,
					},
				};
			});
		}, contextVariables.feedback.timeout);
	};

	const signOutUser = async () => {
		setContextVariables({
			...contextVariables,
			loadingIndicatorState: true,
		});

		// Remove localstorage
		removeSessionDetails();

		// Signout function here
		setContextVariables(oldState => {
			return {
				...oldState,
				signOutModalState: false,
				loadingIndicatorState: false,
				loggedIn: false,
				feedback: {
					...oldState.feedback,
					open: true,
					message: 'Sign out successful',
					type: 'success',
				},
			};
		});

		hideFeedback();
		history.push('/signin');
	};
	return (
		<AppContext.Provider
			value={{ contextVariables, setContextVariables, hideFeedback }}
		>
			{/* Components */}
			<SignOutModal
				contextVariables={contextVariables}
				setContextVariables={setContextVariables}
				signOutUser={signOutUser}
			/>
			<Feedback
				contextVariables={contextVariables}
				setContextVariables={setContextVariables}
			/>
			<LoadingIndicator
				contextVariables={contextVariables}
				setContextVariables={setContextVariables}
			/>
			<FloatingAccessButton />

			{/* Routes */}
			<Switch>
				{contextVariables.loggedIn ? (
					// If logged in, send to news stand page
					<PrivateRoute path="/" exact>
						<Redirect to="/newsStand" />
					</PrivateRoute>
				) : (
					<RestrictedRoute path={'/'} exact>
						<Signin />
					</RestrictedRoute>
				)}

				<RestrictedRoute path="/signin" exact>
					<Signin />
				</RestrictedRoute>
				<RestrictedRoute path="/signup" exact>
					<Signup />
				</RestrictedRoute>
				<PrivateRoute path="/newsStand" exact>
					<NewsStand />
				</PrivateRoute>
				<PrivateRoute path="/profile" exact>
					<Profile />
				</PrivateRoute>
				<PrivateRoute path="/posts" exact>
					<Posts />
				</PrivateRoute>
				<PrivateRoute path="/posts/new" exact>
					<NewPost />
				</PrivateRoute>
				<PrivateRoute path="/posts/edit" exact>
					<EditPost />
				</PrivateRoute>
				<PrivateRoute path="/followers" exact>
					<Followers />
				</PrivateRoute>
				<PrivateRoute path="/mentors" exact>
					<Mentors />
				</PrivateRoute>
				<PrivateRoute path="/search" exact>
					<Search />
				</PrivateRoute>
				<PrivateRoute path="/settings" exact>
					<Settings />
				</PrivateRoute>
				<Route path="*" component={PageNotFound} exact />
			</Switch>
		</AppContext.Provider>
	);
}

export default App;
