import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import './resources/styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './pages/App';
import Publish from './pages/Publish.js';
import Profile from './pages/Profile.js';


const root = document.getElementById('root');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={App}></IndexRoute>
			<Route path='Publish' component={Publish}></Route>
		</Route>
 	</Router>,
	root);


// registerServiceWorker();	
	