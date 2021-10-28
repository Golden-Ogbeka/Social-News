import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import NewsStand from './components/pages/NewsStand';
import Profile from './components/pages/Profile';
import Signin from './components/pages/Signin';
import Signup from './components/pages/Signup';

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path='/' exact component={Signin} />
				<Route path='/signin' component={Signin} />
				<Route path='/signup' component={Signup} />
				<Route path='/newsStand' component={NewsStand} />
				<Route path='/profile' component={Profile} />
			</Switch>
		</Router>
	);
}

export default App;
