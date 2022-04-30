import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import NewsStand from './components/pages/NewsStand';
import Profile from './components/pages/Profile';
import Signin from './components/pages/Signin';
import Signup from './components/pages/Signup';
import AppContext from './components/utils/AppContext';
import FloatingAccessButton from './components/layout/FloatingAccessButton';
import PageNotFound from './components/pages/PageNotFound';
import { SESSION_NAME } from './app.json';
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
		localStorage.removeItem(SESSION_NAME);

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
				<Route path="/" exact component={Signin} />
				<Route path="/signin" component={Signin} exact />
				<Route path="/signup" component={Signup} exact />
				<Route path="/newsStand" component={NewsStand} />
				<Route path="/profile" component={Profile} exact />
				<Route path="/posts" component={Posts} exact />
				<Route path="/posts/new" component={NewPost} exact />
				<Route path="/posts/edit" component={EditPost} exact />
				<Route path="/followers" component={Followers} exact />
				<Route path="/mentors" component={Mentors} exact />
				<Route path="/search" component={Search} exact />
				<Route path="/settings" component={Settings} exact />
				<Route path="*" component={PageNotFound} exact />
			</Switch>
		</AppContext.Provider>
	);
}

export default App;
