import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import './resources/styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import Home from './pages/Home.js';
import Publish from './pages/Publish.js';
import Profile from './pages/Profile.js';
import Layout from './pages/Layout.js';
import ProfileSettings from './pages/ProfileSettings.js'
import ProfileRating from './pages/ProfileRating.js'
import ProfileExpertise from './pages/ProfileExpertise.js'
import ProfilePortfolio from './pages/ProfilePortfolio.js'


ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={Layout}>
			<IndexRoute component={Home} />
			<Route path='/Profile' component={Profile} />
			<Route path='/Profile-Publish' component={Publish} />
			<Route path='/Home' component={Home} />
			<Route path='/Profile-Settings' component={ProfileSettings} />
			<Route path='/Profile-Portfolio' component={ProfilePortfolio} />
			<Route path='/Profile-Rating' component={ProfileRating} />
			<Route path='/Profile-Expertise' component={ProfileExpertise} />
		</Route>
 	</Router>,
	document.getElementById('root'));


// registerServiceWorker();	
		