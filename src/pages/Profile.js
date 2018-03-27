import React from 'react'
import '../resources/styles/Profile.css'
import { Link } from 'react-router'


class Profile extends React.Component {
	render() {
		return (
			<div>
				<div id='container'>
					<ul id='ul-profile'>
						<li><Link to='Profile-Publish' id='li'>PUBLISH</Link></li>
						<li><Link to='Profile-Portfolio'>PORTFOLIO</Link></li>
						<li><Link to='Profile-Expertise'>EXPERTISE</Link></li>
						<li><Link to='Profile-Rating'>RATING</Link></li>
						<li><Link to='Profile-Settings'>SETTINGS</Link></li>
					</ul>
				</div>	
				<div>
		      	{this.props.children}
		      </div>
		    </div>		);
	}
}
export default Profile;