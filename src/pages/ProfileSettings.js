import React from 'react';
import '../resources/styles/ProfileSettings.css'

class ProfileSettings extends React.Component {
	render() {
		return(
			<div className='bajs'>
					<div className='kiss'>
						<input type="text" id="fname" placeholder="first name"/>
						<input type="text" id="lname" placeholder="last name"/>
						<input type="text" id="email" placeholder="email"/>
					</div>
					<div className='blod'>
						<img src="https://doxaraces.com/wp-content/themes/doxaraces/images/default_male.png" alt="Smiley face" height="100" width="100" />
					</div>
			</div>
		);
	}
}

export default ProfileSettings;