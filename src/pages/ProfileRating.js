import React from 'react';
import '../resources/styles/ProfileRating.css'
import Profile from './Profile.js';

class ProfileRating extends React.Component {
	render() {
		return(
			<div>
				<Profile />
				<div>
					<h2>Rating</h2>
				</div>
			</div>
		);
	}
}

export default ProfileRating