import React from 'react'
import './Profile.css'
import NavigateBar from '../../components/NavigateBar/NavigateBar.js'


class Profile extends React.Component {
	render() {
		return (
			<div id='wrapper'>
				<div id='container'>
					<NavigateBar />
				</div>	
				<div>
				<h2>Placeholder - outside view on user profile</h2>
		      	{this.props.children}
		      </div>
		    </div>		);
	}
}
export default Profile;