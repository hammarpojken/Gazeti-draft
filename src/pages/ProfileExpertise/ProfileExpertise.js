import React from 'react';
import './ProfileExpertise.css'
import NavigateBar from '../../components/NavigateBar/NavigateBar.js';

class ProfileExpertise extends React.Component {
	render() {
		return(
			<div>
				<NavigateBar/>
				<div>
					<h2>Expertise</h2>
				</div>
			</div>
		);
	}
}

export default ProfileExpertise