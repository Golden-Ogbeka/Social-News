import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NewsStand from './components/pages/NewsStand';
import Profile from './components/pages/Profile';
import Signin from './components/pages/Signin';
import Signup from './components/pages/Signup';
import PageNotFound from './components/pages/PageNotFound';
import Followers from './components/pages/Followers';
import Mentors from './components/pages/Mentors';
import Posts from './components/pages/Posts/Posts';
import NewPost from './components/pages/Posts/NewPost';
import EditPost from './components/pages/Posts/EditPost';
import Settings from './components/pages/Settings/Settings';
import Search from './components/pages/Search/Search';
import RestrictedRoute from './components/utils/Routes/RestrictedRoute';
import PrivateRoute from './components/utils/Routes/PrivateRoute';
import AppContextProvider from './contexts/AppContextProvider';
import General from './components/layout/General';

function App() {
	return (
		<AppContextProvider>
			<General />
			{/* Routes */}
			<Switch>
				<RestrictedRoute path="/" exact>
					<Signin />
				</RestrictedRoute>
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
		</AppContextProvider>
	);
}

export default App;
