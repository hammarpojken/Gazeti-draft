import React from 'react';
import '../resources/styles/ProfilePortfolio.css'
import Profile from './Profile.js';

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