import React from 'react';
import './ProfilePortfolio.css'
import NavigateBar from '../../components/NavigateBar/NavigateBar.js';

class ProfilPortfolio extends React.Component {
	render() {
		return(
			<div>
				<NavigateBar />
				<div>
					<h2>Portfolio</h2>
				</div>
			</div>
		);
	}
}

export default ProfilPortfolio;