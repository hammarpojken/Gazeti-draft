import React from 'react';
import './ProfileRating.css'
import Profile from '../Profile/Profile.js';

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