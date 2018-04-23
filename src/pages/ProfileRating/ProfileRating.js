import React from 'react';
import './ProfileRating.css'
import NavigateBar from '../../components/NavigateBar/NavigateBar.js';

class ProfileRating extends React.Component {
	render() {
		return(
			<div>
				<NavigateBar />
				<div>
					<h2>Rating</h2>
				</div>
			</div>
		);
	}
}

export default ProfileRating