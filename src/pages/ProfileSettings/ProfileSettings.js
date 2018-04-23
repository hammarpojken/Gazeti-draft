import React from 'react';
import './ProfileSettings.css'
import Profile from '../Profile/Profile.js';
import ModalAvatar from '../../components/ModalAvatar/ModalAvatar.js'
import NavigateBar from '../../components/NavigateBar/NavigateBar.js';
import OptionsField from '../../components/SettingsComponent/OptionsField/OptionsField.js'


class ProfileSettings extends React.Component {
	render() {
		return(
			<div id='container-wrapper'>
				<NavigateBar />
				<div id='content-wrapper'>
					<OptionsField />
				</div>
				<div id='settings-wrapper'>
					<ModalAvatar />
					// avatar img
					// Google map
				</div>

			</div>
			
		)
	}
}

export default ProfileSettings;