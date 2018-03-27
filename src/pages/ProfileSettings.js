import React from 'react';
import '../resources/styles/ProfileSettings.css'
import Profile from './Profile.js';


class ProfileSettings extends React.Component {
	render() {
		return(
			<div>
				<Profile />
				<div className='container'>
						<div className='info'>
							<input type="text" id="fname" placeholder="first name"/>
							<input type="text" id="lname" placeholder="last name"/>
							<input type="text" id="email" placeholder="email"/>
						</div>
						<div className='avatar'>
							<img src="https://doxaraces.com/wp-content/themes/doxaraces/images/default_male.png" alt="Smiley face" height="200" width="200" />
						</div>
				</div>
				<div id='div-button'>
					<button type="button" className='button-save' class="btn btn-primary">Save</button>
				</div>
			</div>
		);
	}
}

export default ProfileSettings;