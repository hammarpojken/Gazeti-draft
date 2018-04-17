import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Home from './pages/Home/Home.js';
import Publish from './pages/Publish/Publish.js';
import Profile from './pages/Profile/Profile.js';
import Layout from './pages/Layout/Layout.js';
import ProfileSettings from './pages/ProfileSettings/ProfileSettings.js'
import ProfileRating from './pages/ProfileRating/ProfileRating.js'
import ProfileExpertise from './pages/ProfileExpertise/ProfileExpertise.js'
import ProfilePortfolio from './pages/ProfilePortfolio/ProfilePortfolio.js'


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
		