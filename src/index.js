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


ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={Layout}>
			<IndexRoute component={Home} />
			<Route path='/Profile' component={Profile} />
			<Route path='/Publish' component={Publish} />
			<Route path='/Home' component={Home} />
		</Route>
 	</Router>,
	document.getElementById('root'));


// registerServiceWorker();	
		