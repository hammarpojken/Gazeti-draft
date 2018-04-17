import React from 'react';
import './ProfilePortfolio.css'
import Profile from '../Profile/Profile.js';

class ProfilPortfolio extends React.Component {
	render() {
		return(
			<div>
				<Profile />
				<div>
					<h2>Portfolio</h2>
				</div>
			</div>
		);
	}
}

export default ProfilPortfolio;